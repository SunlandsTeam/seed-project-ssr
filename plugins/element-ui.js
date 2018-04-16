import Vue from 'vue'

// 全部引用，此时需要在nuxt.config.js中设置css
// if (process.BROWSER_BUILD) {
//   Vue.use(require('element-ui'))
// }

// 按需引用
import { Main } from 'element-ui'
import { Col } from 'element-ui'
import { Row } from 'element-ui'
import { Button } from 'element-ui'

Vue.component(Main.name, Main)
Vue.component(Col.name, Col)
Vue.component(Row.name, Row)
Vue.component(Button.name, Button)