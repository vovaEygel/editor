import { router } from './routes.js'
import editor from './cmps/editor.js';
import navbar from './cmps/navbar.js'

new Vue({
    el: '#app',
    router,
    template: `
        <section class="my-app">
            <navbar :links="links"></navbar>
            <editor @toggle-edit="toggleEditMode"></editor>
        </section>
    `,
    data() {
        return {
            editMode: true,
            navLinks: [{ title: 'home', path: '/' }, { title: 'about', path: '/about' }]
        }
    },
    computed: {
        links() {
            return this.navLinks;
        }
    },
    methods: {
        toggleEditMode() {
            this.editMode = !this.editMode;
        }
    },
    components: { editor, navbar }
})