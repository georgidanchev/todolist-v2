
import Task from './task'

const todoTasksData = [
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

  getdata() {
    this.tasks = [...todoTasksData]
  }

  addTasks() {
    this.tasks.forEach((item, index) => {
      const {
        name,
        prio,
        date,
        done,
      } = item
      new Task(this.target, index, name, prio, done, date).onLoad()
    })
  }

  evetnReciver() {
    this.body.addEventListener('taskBtnClick', (e) => {
      console.log(`event recived - ${e.detail.dataKey} ${e.detail.index}`)
    })
  }

  onLoad() {
    this.getdata()
    this.evetnReciver()
    this.addTasks()
  }
}

export default Manager