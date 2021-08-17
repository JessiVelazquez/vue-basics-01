const app = Vue.createApp({
  data() {
    return {
      enteredTask: '',
      tasks: [],
      hidden: false,
      buttonText: 'Hide List'
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
    },
    hideList() {
      this.hidden = !this.hidden;
      if (this.buttonText === 'Hide List') {
        this.buttonText = 'Show List';
      } else if (this.buttonText === 'Show List') {
        this.buttonText = 'Hide List';
      }
    }
  }
});

app.mount('#assignment');
