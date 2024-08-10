const {createApp} = Vue
import FirstComponent from "./Components/FirstComponent.js";

const sharedState = Vue.reactive({
    message: 'Text from global object'
});

createApp({
    data() {
       return {
           textMessage: 'Some digit: ',
           counter: 0,
           userInput: '',
           changeStateText: 'Some text',
           isVisible: true,
           sharedState
       }
    },
    methods: {
        changeCounter() {
            this.counter++;
        },
        changeState() {
            this.isVisible = !this.isVisible;
        },
        updateSharedData() {
            this.sharedState.message = 'Updated from main app';
        }
    },
    components: {
        'first-component': FirstComponent,
    },

}).mount('#app');

createApp({
    data(){
        return {
            message: 'Text from second APP',
            sharedState
        }
    },
    methods: {
        changeSecondaryMessage() {
            this.sharedState.message = 'Changed from secondary app';
        }
    }
}).mount('#second-app');

