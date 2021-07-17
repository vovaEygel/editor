import { eventBus, EVENT_SHOW_MSG } from '../services/event-bus.service.js'

export default {
    template: `
            <div class="editorContainer" :class="panelDirection">
                <div class="buttonsContainer">
                <div class="menu-container">
<div class="hex-wrapper">
  <div class="hex-row shift">
    <div class="hexagon" id="nav-home">
      Home
      <div class="face1"></div>
      <div class="face2"></div>
    </div>
  </div>
  <div class="hex-row">
    <div class="hexagon" id="nav-about">
      About
      <div class="face1"></div>
      <div class="face2"></div>
    </div>
    <div class="hexagon" id="nav-work">
      Work
      <div class="face1"></div>
      <div class="face2"></div>
    </div>
  </div>
  <div class="hex-row shift">
    <div class="hexagon" id="nav-contact">
      Contact
      <div class="face1"></div>
      <div class="face2"></div>
    </div>
  </div>
</div>
</div> 
              
                </div>
                <div class="editorOperator flex space-between">
                    <button class="editorOpBtn" @click.stop.prevent="directionChange('left')"><</button>
                    <button class="editorOpBtn">collapse</button>
                    <button class="editorOpBtn" @click.stop.prevent="directionChange('right')">></button>
                </div>
            </div>
                `,
    data() {
        return {
            direction: "left"
        }
    },
    created() {},
    computed: {
        panelDirection() {
            if (this.direction === "left") return "slideLeft"
            else return "slideRight";
        },
    },
    methods: {
        directionChange(direction) {
            this.direction = direction;
        }
    },
}