
class TodoTask {
  constructor(_target, _id, _name, _prio, _done, _date) {
    this.target = document.querySelector(_target)
    this.id = _id
    this.name = _name
    this.priority = _prio
    this.done = _done
    this.dueDate = _date
    this.taskTr = null
  }

  createTask() {
    const taskTr = document.createElement('tr')

    taskTr.className = 'todoTable__tableRow'

    taskTr.innerHTML = `
      <th class="todoTable__cell todoTable__cell--name">${this.name}</th>
      <td class="todoTable__cell todoTable__cell--prio">${this.priority}</td>
      <td class="todoTable__cell todoTable__cell--dued">${this.dueDate}</td>
      <td class="todoTable__cell todoTable__cell--ctrl todoTable__controls" data-id=${this.id}>
        <a class="btn btn--up" data-ctr="up">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><circle cx="12" cy="12" r="10" class="primary"></circle><path class="secondary" d="M13 9.41V17a1 1 0 0 1-2 0V9.41l-2.3 2.3a1 1 0 1 1-1.4-1.42l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.42L13 9.4z"></path></svg>
        </a>
        <a class="btn btn--dw" data-ctr="down">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><circle cx="12" cy="12" r="10" class="primary"></circle><path class="secondary" d="M11 14.59V7a1 1 0 0 1 2 0v7.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.42l2.3 2.3z"></path></svg>
        </a>
        <a class="btn btn--dn" data-ctr="done">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><circle cx="12" cy="12" r="10" class="primary"></circle><path class="secondary" d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z"></path></svg>
        </a>
        <a class="btn btn--rm" data-ctr="remove">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><circle cx="12" cy="12" r="10" class="primary"></circle><path class="secondary" d="M13.41 12l2.83 2.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 1 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12z"></path></svg>
        </a>
      </td>
    `
    this.taskTr = taskTr
  }

  eventHanlder() {
    const allButtons = this.taskTr.querySelectorAll('a')

    const eventHandle = (dataKey, index) => {
      document.body.dispatchEvent(new CustomEvent('taskBtnClick', {
        detail: {
          dataKey,
          index,
        },
      }))
    }

    allButtons.forEach((button) => {
      button.addEventListener('click', () => {
        if (button.hasAttribute('data-ctr')) {
          eventHandle(button.parentNode.dataset.id, button.dataset.ctr)
        }
      })
    })
  }

  appendTask() {
    this.target.appendChild(this.taskTr)
  }

  onLoad() {
    this.createTask()
    this.eventHanlder()
    this.appendTask()
  }
}

export default TodoTask