import './styles/style.scss'

import Header from './scripts/header'
import Manager from './scripts/manager'

new Header('.header').onLoad()
new Manager('[data-manager]').onLoad()