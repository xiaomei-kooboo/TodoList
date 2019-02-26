import { DirectiveOptions } from 'vue'

const directive: DirectiveOptions = {
    inserted(el) {
        el.focus()
    }
}
export default directive
