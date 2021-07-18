import { eventBus, EVENT_SHOW_MSG } from '../services/event-bus.service.js'

export default {
    template: `
            <div class="editorContainer" :class="panelDirection">
                <div class="buttonsContainer" :class="menuStatus">
                    <button class="editorBtn" @click="toggleEditMode()"></button>
                    <button class="editorBtn"></button>
                    <button class="editorBtn"></button>
                    <button class="editorBtn"></button>
                    <button class="editorBtn"></button>
                    <button class="editorBtn"></button>
                    <button class="editorBtn"></button>
                    <button class="editorBtn"></button>
                    <button class="editorBtn"></button>
                    <button class="editorBtn"></button>
                </div>
                <div class="editorOperator flex space-between">
                    <button class="editorOpBtn arrowLeft" @click="directionChange('left')"></button>
                    <button class="editorOpBtn toggler" @click="toggleMenu()"></button>
                    <button class="editorOpBtn arrowRight" @click="directionChange('right')"></button>
                </div>
            </div>
                `,
    data() {
        return {
            direction: "left",
            menuOpen: true
        }
    },
    created() {},
    computed: {
        panelDirection() {
            if (this.direction === "left") return "slideLeft"
            else return "slideRight";
        },
        menuStatus() {
            if (this.menuOpen === true) return
            else return "collapsed";
        }
    },
    methods: {
        directionChange(direction) {
            this.direction = direction;
        },
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
        toggleEditMode() {
            this.$emit('toggle-edit')
        }
    },
}