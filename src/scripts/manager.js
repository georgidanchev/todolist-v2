
import Task from './task'

const todoTasksData = [
  {
    name: 'dgfsdfgsdfgsdgsd',
    prio: 1,
    date: 'xx/xx/xx',
    done: true,
  },
  {
    name: 'sdfasdfasdfasdf',
    prio: 1,
    date: 'xx/xx/xx',
    done: true,
  },
  {
    name: 'asdfasdfasdfds',
    prio: 1,
    date: 'xx/xx/xx',
    done: true,
  },
  {
    name: 'dgfsdfgsdfgsdgsd',
    prio: 1,
    date: 'xx/xx/xx',
    done: true,
  },
  {
    name: 'sdfasdfasdfasdf',
    prio: 1,
    date: 'xx/xx/xx',
    done: true,
  },
  {
    name: 'asdfasdfasdfds',
    prio: 1,
    date: 'xx/xx/xx',
    done: true,
  },
  {
    name: 'dgfsdfgsdfgsdgsd',
    prio: 1,
    date: 'xx/xx/xx',
    done: true,
  },
  {
    name: 'sdfasdfasdfasdf',
    prio: 1,
    date: 'xx/xx/xx',
    done: true,
  },
  {
    name: 'asdfasdfasdfds',
    prio: 1,
    date: 'xx/xx/xx',
    done: true,
  },
]

class Manager {
  constructor(_target) {
    this.target = _target
    this.tasks = []
  }

  getdata() {
    this.tasks = [...todoTasksData]
    console.log(this.tasks)
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

  onLoad() {
    this.getdata()
    this.addTasks()
  }
}

export default Manager