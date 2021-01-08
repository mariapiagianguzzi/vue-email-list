/* Istruzioni:
Genera 10 mail tramite api e stampale in una lista
Usate Vue e Axios. */

let app = new Vue({
  el: "#app",
  data: {
    emails: [],
  },
  mounted() {
    for (var i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          console.log(response.data.response);
          let email = response.data.response;
          this.emails.push(email);
        });
    }
  },
});
