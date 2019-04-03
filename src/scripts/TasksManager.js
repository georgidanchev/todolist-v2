/* eslint object-curly-newline: 0 */

/**
 * This component hanles the main the task
 * functions. Like adding, moving, removing.
 */

import TaskTemplate from './components/TaskTemplate'

class TaskManager {
  constructor(_target, _newData) {
    this.target = _target
    this.body = document.body
    this.tasks = [..._newData]
  }

  // Once the a task is change, that changes the
  // data in the array with new changes which have
  // to be pushed to the main coponent.
  pushData() {
    document.body.dispatchEvent(new CustomEvent('newData', {
      detail: {
        data: this.tasks,
      },
    }))
  }

  // Used to add all the tasks to a target.
  addTasks() {
    this.tasks.forEach((item, index) => {
      // Destructure item object.
      const { name, prio, date, done } = item
      // Instantiate task component and pass values.
      new TaskTemplate(this.target, index, name, prio, done, date).onLoad()
    })
  }

  // When the array is changed. To make the changes on
  // screen we simply re-add all tasks. This is not super
  // efficient but four our small projects it does the job.
  // Using better js methods or even react would be the
  // optimal solution.
  reAddTasks() {
    document.querySelector(this.target).innerHTML = ''
    this.addTasks()
  }

  // To move the task up or down we use destructuring.
  // In my older project, this code was 2 or 3 times
  // bigger then what it currently is.
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

  // To mark a task as complated we map over
  // each item untill we find the index of
  // the array matches the index of function
  // param, then we invert done.
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

  // To remove entry loop over the array
  // and we skip the entry which matches
  // the function index param.
  removeEntry(index) {
    const newArr = this.tasks.filter((item, i) => (index !== i))
    this.tasks = newArr
  }

  // When we click a task, the task send
  // a custom event which we catch here.
  eventRecivers() {
    this.body.addEventListener('taskBtnClick', (e) => {
      // We get the event data.
      const [dataKey, index] = [e.detail.dataKey, parseInt(e.detail.index, 10)]

      // Check the event. The call the
      // appropriate function w/t index.
      if (dataKey === 'up') {
        this.moveEntryUp(index)
      } else if (dataKey === 'down') {
        this.moveEntryDown(index)
      } else if (dataKey === 'done') {
        this.toggleDone(index)
      } else if (dataKey === 'remove') {
        this.removeEntry(index)
      }
      // Push changed data to app manager component.
      this.pushData(this.tasks)

      // Re-add all tasks.
      this.reAddTasks()
    })

    // If we recive command to re-add all
    // todo-task from the app manager.
    document.body.addEventListener('ReAddTasks', (e) => {
      // load the new data.
      this.tasks = [...e.detail.data]
      // re-add all taks.
      this.reAddTasks()
    })
  }

  // on load initilize the event
  // listeners and all tasks.
  onLoad() {
    this.eventRecivers()
    this.addTasks()
  }
}

export default TaskManager
