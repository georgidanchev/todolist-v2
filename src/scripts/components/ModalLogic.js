
class ModalLogic {
  constructor(_target) {
    this.target = document.querySelector(_target)
    this.closeBtn = this.target.querySelector('[data-close-btn]')
    this.background = this.target.querySelector('[data-background]')
  }

  addEvents() {
    const closeModal = () => {
      this.target.classList.remove('active')
    }
    this.closeBtn.addEventListener('click', () => {
      closeModal()
    })
    this.background.addEventListener('click', () => {
      closeModal()
    })
  }

  onLoad() {
    this.addEvents()
  }
}

export default ModalLogic