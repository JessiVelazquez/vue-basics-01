const app = Vue.createApp({
  data() {
    return {
      name: 'Jessi',
      age: 35,
      image: './images/mountain.jpeg'
    }
  },
  methods: {
    ageInFive() {
      const futureAge = this.age + 5;
      return futureAge;
    },
    favNumber() {
      const number = Math.floor(Math.random() * 100);
      return number;
    }
  }
})

app.mount('#assignment');
