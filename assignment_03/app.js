const app = Vue.createApp({
  data() {
    return {
      sum: 0
    }
  },
  methods: {
    add(num) {
      this.sum = this.sum + num;
    }
  },
  computed: {
    result() {
      if (this.sum < 37) {
        return 'Not there yet!';
      }
      if (this.sum === 37) {
        return this.sum;
      }
      if (this.sum > 37) {
        return 'Too High!';
      }
    }
  },
  watch: {
    sum() {
      const that = this;
      setTimeout(function () {
        that.sum = 0;
      }, 5000);
    }
  }
});

app.mount('#assignment');

