import OForm from './form/index.vue'
import utils from './form/utils/index'
import * as types from './form/utils/types'
function install(app: any) {
    app.component('o-form', OForm)
    app.config.globalProperties.oFormUtils = utils
}
export {
    OForm,
    install,
    utils,
    types
}
export default {
    OForm,
    install,
    utils,
    types
}