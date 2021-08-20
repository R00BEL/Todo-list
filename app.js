new Vue({
  el: "#app",
  data: {
    list: ["Clean the house", "To wash the dishes"],
    value: "",
  },
  methods: {
    addName: function (name) {
      this.list.push(name);
      this.value = "";
    },
    deleteName: function (name) {
      this.list = this.list.filter((hobby) => hobby !== name);
    },
  },
});
