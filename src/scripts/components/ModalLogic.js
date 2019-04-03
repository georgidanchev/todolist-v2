
class ModalLogic {
  constructor(_target) {
    this.target = document.querySelector(_target)
    this.closeBtn = this.target.querySelector('[data-close-btn]')
    this.background = this.target.querySelector('[data-background]')
    this.taskNameInput = this.target.querySelector('[data-name-input]')
    this.allInputs = this.target.querySelectorAll('input')
  }

  closeModal() {
    this.target.classList.remove('active')
  }

  pushModalInputs() {
    document.body.dispatchEvent(new CustomEvent('pushModalTask', {
    detail: {
      name: this.allInputs[0].value,
      prio: this.allInputs[1].value,
      date: this.allInputs[2].value,
      },
    }))
  }

  modalInitEvents() {
    this.closeBtn.addEventListener('click', () => {
      this.closeModal()
    })
    this.background.addEventListener('click', () => {
      this.closeModal()
    })

    document.body.addEventListener('updateTaskInput', (e) => {
      this.allInputs[2].value = new Date().toISOString().substr(0, 10)
    })
  }

  modalFuncEvents() {
    this.allInputs.forEach((input) => {
      const currentInput = input
      if (input.type !== 'submit') {
        currentInput.addEventListener('keypress', (e) => {
          const key = e.charCode || e.keyCode || 0
          if (key === 13) {
            e.preventDefault()
          }
        })
      }
      if (input.type === 'submit') {
        currentInput.addEventListener('click', (e) => {
          e.preventDefault()
          this.pushModalInputs()
          this.closeModal()
        })
      }
    })
  }

  onLoad() {
    this.modalInitEvents()
    this.modalFuncEvents()
  }
}

export default ModalLogic