import navLink from "./navLink.js";

export default {
    template: `
  <nav>
      <ul>
          <navLink v-for="link in links" :link="link"></navLink>
      </ul>
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