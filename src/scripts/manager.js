/* eslint object-curly-newline: 0 */

import Task from './task'

const sampleData = [
  {
    name: 'Shave beard',
    prio: 3,
    date: '01/02/19',
    done: false,
  },
  {
    name: 'Buy weekly groceries',
    prio: 2,
    date: '01/02/19',
    done: false,
  },
  {
    name: 'Fill car w/t petrol',
    prio: 1,
    date: '01/02/19',
    done: true,
  },
  {
    name: 'Go for jog',
    prio: 2,
    date: '02/02/19',
    done: false,
  },
]

class Manager {
  constructor(_target) {
    this.target = _target
    this.body = document.body
    this.tasks = []
  }

  saveData() {
    localStorage.setItem('todoTasks', JSON.stringify(this.tasks))
  }

  loadData() {
    if (localStorage.getItem('todoTasks') !== null) {
      const todoTasks = JSON.parse(localStorage.getItem('todoTasks'))
      this.tasks = [...todoTasks]
    } else {
      this.tasks = [...sampleData]
      this.saveData()
    }
  }

  addTasks() {
    this.tasks.forEach((item, index) => {
      const { name, prio, date, done } = item
      new Task(this.target, index, name, prio, done, date).onLoad()
    })
  }

  reAddTasks() {
    document.querySelector(this.target).innerHTML = ''
    this.addTasks()
  }

  moveEntryUp(index) {
    const newArr = [...this.tasks]
    if (index < newArr.length - 1) {
      [newArr[index], newArr[index + 1]] = [newArr[index + 1], newArr[index]]
    } else {
      [newArr[index], newArr[0]] = [newArr[0], newArr[index]]
    }
    this.tasks = newArr
  }

  moveEntryDown(index) {
    const newArr = [...this.tasks]
    const lenght = newArr.length - 1
    if (index !== 0) {
      [newArr[index], newArr[index - 1]] = [newArr[index - 1], newArr[index]]
    } else {
      [newArr[index], newArr[lenght]] = [newArr[lenght], newArr[index]]
    }
    this.tasks = newArr
  }

  toggleDone(index) {
    const newArr = this.tasks.map((item, i) => {
      const arrItem = item
      if (index === i) {
        arrItem.done = !arrItem.done
      }
      return arrItem
    })
    this.tasks = newArr
  }

  removeEntry(index) {
    const newArr = this.tasks.filter((item, i) => (index !== i))
    this.tasks = newArr
  }

  eventReciver() {
    this.body.addEventListener('taskBtnClick', (e) => {
      const [dataKey, index] = [e.detail.dataKey, parseInt(e.detail.index, 10)]

      if (dataKey === 'up') {
        this.moveEntryUp(index)
      } else if (dataKey === 'down') {
        this.moveEntryDown(index)
      } else if (dataKey === 'done') {
        this.toggleDone(index)
      } else if (dataKey === 'remove') {
        this.removeEntry(index)
      }
      this.saveData()
      this.reAddTasks()
    })
  }

  onLoad() {
    this.loadData()
    this.eventReciver()
    this.addTasks()
  }
}

export default Manager