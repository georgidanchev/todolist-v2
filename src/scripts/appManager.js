
/**
 * This is the main component of this
 * web app project, it is used as the
 * root for all other components.
 */

import HeaderManager from './HeaderManager'
import TasksManager from './TasksManager'
import ModalManager from './components/ModalLogic'

// This is sample data when the project is
// initialized and there is none stored in
// the local storage.
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
    // If we have saved some data into
    // the local storage, pull that data
    if (localStorage.getItem('todoTasks') !== null) {
      todoTasks = JSON.parse(localStorage.getItem('todoTasks'))
      this.taskData = [...todoTasks]
    }
    // If we don't have any data, then pull
    // the sample data then save it.
    if (todoTasks.length === 0) {
      this.taskData = [...sampTasks]
      this.saveData()
    }
  }

  // This is method used to add entry.
  addNewEntry(name, prio, date) {
    // We pass the new data to the task manager.
    // once the data is recived, it is then used
    // to re-write all of the tasks.
    const callTaskReAdd = () => {
      document.body.dispatchEvent(new CustomEvent('ReAddTasks', {
      detail: {
        data: this.taskData,
        },
      }))
    }

    // Build an object with our data
    // in the storage format used.
    const newTask = {
      name,
      prio,
      date,
      done: false,
    }

    // Push the entry at the
    // end of our array data.
    this.taskData.push(newTask)

    // Call task readding function.
    callTaskReAdd()

    // Save the data.
    this.saveData()
  }

  // Recive data from out components.
  dataReciver() {
    // If we remove or move task in the task manager.
    document.body.addEventListener('newData', (e) => {
      this.taskData = e.detail.data
      this.saveData()
    })
    // If we add a new task using the modal.
    document.body.addEventListener('pushModalTask', (e) => {
      this.addNewEntry(e.detail.name, e.detail.prio, e.detail.date)
    })
  }

  // Once this component is instantiated, load the data, then
  // add the data receiving event listeners, then instantiate all
  // other components and reference them in the constructor.
  onLoad(_headerTarget, _taskMnaagerTarget, _headerModalTarget) {
    this.loadData()
    this.dataReciver()
    this.taskMnaager = new TasksManager(_taskMnaagerTarget, this.taskData).onLoad()
    this.header = new HeaderManager(_headerTarget, this.taskData).onLoad()
    this.modalLogic = new ModalManager(_headerModalTarget).onLoad()
  }
}

export default AppManager
