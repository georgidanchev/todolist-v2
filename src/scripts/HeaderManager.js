
class Header {
  constructor(_target, _newData) {
    this.target = document.querySelector(_target)
    this.todoTasks = [..._newData]
    this.body = document.body
    this.input = this.target.querySelector('[data-input]')
    this.btnSrch = this.target.querySelector('[data-btn-srch]')
    this.btnAdd = this.target.querySelector('[data-btn-add]')
    this.modal = this.target.querySelector('[data-header-modal]')
  }

  addTask(taskName) {
    const pushTaskName = (name) => {
      document.body.dispatchEvent(new CustomEvent('updateTaskInput', {
        detail: {
          string: name,
          },
      }))
    }
    this.modal.classList.add('active')
    pushTaskName(taskName)
  }

  // yet to do this.
  searchTask(taskName) {
    this.todoTasks = this.todoTasks
    console.log(taskName)
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
  }
}

export default Header