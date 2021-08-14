const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Learn Vue.js Really Well',
      courseGoalB: 'Learn Vue.js Super Well',
      vueLink: 'https://vuejs.org/'
    }
  },
  methods: {
    outputGoal() {
      const rand = Math.random();
      if (rand < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    }
  }
});

app.mount('#user-goal');

 

