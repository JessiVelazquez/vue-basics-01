const app = Vue.createApp({
  data() {
    return {
      input: '',
      input2: ''
    };
  },
  methods: {
    showAlert() {
      alert('Button clicked!');
    },
    getInput(event) {
      this.input = event.target.value;
    },
    getInput2(event) {
      this.input2 = event.target.value;
    }
  }
});

app.mount('#assignment');

