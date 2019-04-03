
/**
 * This component deal the header logic.
 */

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
    // This pushes the value of the
    // input field in the modal.
    const pushTaskName = () => {
      document.body.dispatchEvent(new CustomEvent('updateTaskInput', {
        detail: {
          name: taskName,
          },
      }))
    }

    // Push input to modal.
    pushTaskName()

    // Show the modal.
    this.modal.classList.add('active')
  }

  // Header event handling
  addEvents() {
    // If we press enter in the input
    // open modal and pass the value.
    this.input.onkeypress = (e) => {
      const key = e.charCode || e.keyCode || 0
      if (key === 13) {
        e.preventDefault()
        this.openModal(this.input.value)
      }
    }

    // If we click the add button, then
    // pass the value of the input and
    // open the modal.
    this.btnAdd.addEventListener('click', () => {
      this.openModal(this.input.value)
    })
  }

  // On load add the event handling.
  onLoad() {
    this.addEvents()
  }
}

export default Header
