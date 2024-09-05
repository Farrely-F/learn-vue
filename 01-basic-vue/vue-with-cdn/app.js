const app = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      email: "jdoe@me.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },

  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results: user } = await res.json();
      this.firstName = user[0].name.first;
      this.lastName = user[0].name.last;
      this.email = user[0].email;
      this.gender = user[0].gender;
      this.picture = user[0].picture.large;
    },
  },
});

app.mount("#app");
