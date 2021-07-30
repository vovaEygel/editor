export default {
    template: `
  <router-link :to="linkUrl" exact>
      <li>
          {{linkTitle}}
      </li>
</router-link>
                `,
    props: ['link'],
    data() {
        return {}
    },
    created() {},
    computed: {
        linkTitle() { return this.link.title },
        linkUrl() { return this.link.path }
    },
    methods: {},
    components: {}
}