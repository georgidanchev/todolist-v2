
import ModalManager from './components/ModalLogic'

class Header {
  constructor(_target, _newData, _headerModal) {
    this.target = document.querySelector(_target)
    this.todoTasks = [..._newData]
    this.body = document.body
    this.input = this.target.querySelector('[data-input]')
    this.btnSrch = this.target.querySelector('[data-btn-srch]')
    this.btnAdd = this.target.querySelector('[data-btn-add]')
    this.headerModal = _headerModal
  }

  addTask(taskName) {
    console.log(this.todoTasks)
  }

  searchTask(taskName) {
    console.log(this.todoTasks)
  }

  addEvents() {
    this.input.addEventListener('click', () => {
      console.log('input click')
    })

    this.input.onkeypress = (e) => {
      const key = e.charCode || e.keyCode || 0
      if (key === 13) {
        e.preventDefault()
        this.addTask(this.input.value)
      }
    }

    this.btnSrch.addEventListener('click', () => {
      this.searchTask(this.input.value)
    })

    this.btnAdd.addEventListener('click', () => {
      this.addTask(this.input.value)
    })
  }

  onLoad() {
    this.addEvents()
    new ModalManager(this.headerModal).onLoad()
  }
}

export default Header