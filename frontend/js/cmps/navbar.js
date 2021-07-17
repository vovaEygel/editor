import navLink from "./navLink.js";

export default {
    template: `
  <nav class="navbar">
    <button class="editElement"></button>
    <div class="nav-container flex space-between items-center">
        <!-- <div class="logo">Blogin</div> -->
              <ul class="flex">
                <navLink v-for="link in links" :link="link"></navLink>
            </ul>
            <button class="side-menu-btn" onclick="toggleMenu()">☰</button>
        </div>
    </div>
  </nav>
                `,
    props: ['links'],
    data() {
        return {}
    },
    created() {},
    computed: {},
    methods: {},
    components: { navLink }
}