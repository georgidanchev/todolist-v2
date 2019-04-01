
class Header {
  constructor(_target) {
    this.target = document.querySelector(_target)
    this.body = document.body
    this.input = this.target.querySelector('[data-input]')
    this.btnSrch = this.target.querySelector('[data-btn-srch]')
    this.btnAdd = this.target.querySelector('[data-btn-add]')
  }

  addTask() {
    console.log(this.target)
  }

  submitTask() {
    console.log(this.target)
  }

  onLoad() {
    this.input.addEventListener('click', () => {
      console.log('input click')
    })

    // fix this.
    this.input.addEventListener('change', () => {
      console.log('keyup')
    })

    this.input.onkeypress = (e) => {
      const key = e.charCode || e.keyCode || 0

      if (key === 13) {
        e.preventDefault()
        console.log('enter clicked')
      }
    }

    this.btnSrch.addEventListener('click', () => {
      console.log('btn srch')
    })

    this.btnAdd.addEventListener('click', () => {
      console.log('btn add')
    })
  }
}

export default Header