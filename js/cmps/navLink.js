import navLink from './navLink.js';

export default {
    template: `
  <li>
    <a :href="linkUrl">{{linkTitle}}</a>
</li>
                `,
    props: ['link'],
    data() {
        return {}
    },
    created() { console.log(this.link) },
    computed: {
        linkTitle() { return this.link.title },
        linkUrl() { return this.link.path }
    },
    methods: {},
    components: {}
}