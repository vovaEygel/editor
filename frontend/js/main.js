import { router } from './routes.js'
import editPanel from './cmps/editPanel.js';
import navbar from './cmps/navbar.js'


new Vue({
    el: '#app',
    router,
    template: `
        <section class="my-app">
            <navbar :links="links" :editMode="editMode"></navbar>
            <router-view class="main-router-view"></router-view>
            <editPanel @toggle-edit="toggleEditMode"></editPanel>
        </section>
    `,
    data() {
        return {
            editMode: false,
            navLinks: [{ title: 'home', path: '/' }, { title: 'about', path: '/about' }, { title: 'land', path: '/land' }]
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
    created() {

    },
    components: { editPanel, navbar }
})