import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
// 引入vuex 模块
const modulesFiles = require.context('./modules', false, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

Vue.use(Vuex)

const store = new Vuex.Store({
  modules,
  getters
})

export default store
