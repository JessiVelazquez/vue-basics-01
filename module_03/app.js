const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
      // fullname: '',
      lastName: ''
    };
  },
  // METHODS - these will all run every time something changes(?) - so, these are typically used for event binding - you don't bind events to COMPUTED, only METHODS \\
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(event) {
      this.name = event.target.value;
    },
    submitForm() {
      alert('Submitted!');
    },
    confirmName() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = '';
      this.lastName = '';
    },
    outputFullName() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Velazquez';
    }
  },
  // COMPUTED - these are methods that are not called in HTML with (), and only run for what changes - not all methods on Vue app all running every time anything changes - which is the behavior you get with the 'methods' config block here - used for outputting something - not for binding to events \\
  computed: {
    fullname() {
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  // WATCHERS - repeat a data item name here as a method, and when that data item changes, the watcher methods here will run \\
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    }
    // name(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = this.name + ' ' + value;
    //   }
    // }
  }
});

app.mount('#events');
