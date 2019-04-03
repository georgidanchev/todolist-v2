
class Header {
  constructor(_target, _newData) {
    this.target = document.querySelector(_target)
    this.todoTasks = [..._newData]
    this.body = document.body
    this.input = this.target.querySelector('[data-input]')
    this.btnAdd = this.target.querySelector('[data-btn-add]')
    this.modal = this.target.querySelector('[data-header-modal]')
  }

  openModal(taskName) {
    const pushTaskName = () => {
      document.body.dispatchEvent(new CustomEvent('updateTaskInput', {
        detail: {
          name: taskName,
          },
      }))
    }

    this.modal.classList.add('active')
    pushTaskName()
  }

  addEvents() {
    this.input.onkeypress = (e) => {
      const key = e.charCode || e.keyCode || 0
      if (key === 13) {
        e.preventDefault()
        this.openModal(this.input.value)
      }
    }

    this.btnAdd.addEventListener('click', () => {
      this.openModal(this.input.value)
    })
  }

  onLoad() {
    this.addEvents()
  }
}

export default Header