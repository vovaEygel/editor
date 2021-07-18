import navLink from "./navLink.js";

export default {
    template: `
  <nav class="navbar">
    <button v-if="editMode" class="editElement"></button>
    <div class="nav-container flex space-between items-center">
        <!-- <div class="logo">logo</div> -->
              <ul class="flex">
                <navLink v-for="link in links" :link="link"></navLink>
            </ul>
            <button class="side-menu-btn" onclick="toggleMenu()">☰</button>
        </div>
    </div>
  </nav>
                `,
    props: ['links', 'editMode'],
    data() {
        return {}
    },
    created() {},
    computed: {},
    methods: {},
    components: { navLink }
}