import { router } from './routes.js'
import editor from './cmps/editor.js';
import navbar from './cmps/navbar.js'

new Vue({
    el: '#app',
    router,
    template: `
        <section class="my-app">
            <navbar :links="links"></navbar>
            <editor></editor>
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
    components: { editor, navbar }
})