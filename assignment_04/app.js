const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      isVisible: true,
      inputBackgroundColor: ''
    }
  },
  computed: {
    pClasses() {
      return {
        user1: this.userInput === 'user1',
        user2: this.userInput === 'user2',
        visible: this.isVisible,
        hidden: !this.isVisible,
      }
    }
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    }
  }
});

app.mount('#assignment');

