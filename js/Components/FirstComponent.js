import SecondComponent from "./SecondComponent.js";

export default ({
    template:
        `<div>{{ componentMessage }}</div>
        <second-component></second-component>`
    ,

    data() {
        return {
            componentMessage: 'Text from FirstComponent'
        }
    },
    components: {
        'second-component': SecondComponent
    }
})