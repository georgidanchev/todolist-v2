
import HeaderManager from './HeaderManager'
import TasksManager from './TasksManager'
import ModalManager from './components/ModalLogic'

const sampTasks = [
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

class AppManager {
  constructor() {
    this.taskMnaager = null
    this.headerLogic = null
    this.modalLogic = null
    this.taskData = null
  }

  saveData() {
    localStorage.setItem('todoTasks', JSON.stringify(this.taskData))
  }

  loadData() {
    let todoTasks = []

    if (localStorage.getItem('todoTasks') !== null) {
      todoTasks = JSON.parse(localStorage.getItem('todoTasks'))
      this.taskData = [...todoTasks]
    }

    if (todoTasks.length === 0) {
      this.taskData = [...sampTasks]
      this.saveData()
    }
  }

  addNewEntry(name, prio, date) {
    const callTaskReAdd = () => {
      document.body.dispatchEvent(new CustomEvent('ReAddTasks', {
      detail: {
        data: this.taskData,
        },
      }))
    }

    const newTask = {
      name,
      prio,
      date,
      done: false,
    }

    this.taskData.push(newTask)
    callTaskReAdd()
    this.saveData()
  }

  dataReciver() {
    document.body.addEventListener('newData', (e) => {
      this.taskData = e.detail.data
      this.saveData()
    })

    document.body.addEventListener('pushModalTask', (e) => {
      this.addNewEntry(e.detail.name, e.detail.prio, e.detail.date)
    })
  }

  onLoad(_headerTarget, _taskMnaagerTarget, _headerModalTarget) {
    this.loadData()
    this.dataReciver()
    this.taskMnaager = new TasksManager(_taskMnaagerTarget, this.taskData).onLoad()
    this.header = new HeaderManager(_headerTarget, this.taskData).onLoad()
    this.modalLogic = new ModalManager(_headerModalTarget).onLoad()
  }
}

export default AppManager