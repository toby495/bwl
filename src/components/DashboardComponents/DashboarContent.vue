<template>
  <nav class="outer-col-1">
    <h4>País Seleccionado</h4>
    <div :style="{'display':'flex','align-items':'center','justify-content':'space-around'}">
      <h1>{{ currentCountry }}</h1>
      <img class="img" :src="currentFlag" alt="" />
    </div>
  </nav>
  <div class="outer-col-2">
    <header>
      <div>
        <h4>Tareas Pendientes</h4>
        <div v-for="(quest, index) in list" :key="index">
          <h5>{{ quest.name }}</h5>
        </div>
      </div>
      <div>
        <h4>Tareas Terminadas</h4>
        <div v-for="(quest, index) in finishedList" :key="index">
          <h5>{{ quest.name }}</h5>
        </div>
      </div>
    </header>
    <div class="inner-row">
      <div class="inner-col">
        <article>
          <h4>Clima</h4>
          <div class="myArticle">
            <div>
              <h1>{{ country.name }}</h1>
              <h1>{{ countryWeather.temp_f }}C</h1>
              <h1>{{ countryState.text }}</h1>
              <img :src="countryState.icon" alt="" />
            </div>
          </div>
        </article>
        <footer>
          <h4>Fecha y hora actual</h4>
          <h1>{{ country.localtime }}</h1>
        </footer>
      </div>
      <aside>
        <h4>Paises Disponibles</h4>
        <h5><a @click="setSpainInfo">España</a></h5>
        <h5><a @click="setMexicoInfo">México</a></h5>
        <h5><a @click="setUsaInfo">Estados Unidos</a></h5>
      </aside>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("dashboardModule", ["list", "finishedList"]),
  },

  mounted() {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=mexico&aqi=no`
      )
      .then((response) => {
        this.country = response.data.location;
        console.log(this.country);
      });
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=mexico&aqi=no`
      )
      .then((response) => {
        this.countryWeather = response.data.current;
        console.log(this.countryWeather);
      });
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=mexico&aqi=no`
      )
      .then((response) => {
        this.countryState = response.data.current.condition;
        console.log(this.countryWeather);
      });
  },

  methods: {
    async setMexicoInfo() {
      axios
        .get(
          `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=mexico&aqi=no`
        )
        .then((response) => {
          this.country = response.data.location;
          console.log(this.country);
        });
      axios
        .get(
          `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=mexico&aqi=no`
        )
        .then((response) => {
          this.countryWeather = response.data.current;
          console.log(this.countryWeather);
        });
      axios
        .get(
          `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=mexico&aqi=no`
        )
        .then((response) => {
          this.countryState = response.data.current.condition;
          console.log(this.countryWeather);
        });
      this.currentCountry = "México";
      this.currentFlag="https://th.bing.com/th/id/R.71ca289dd66e46d274e16ee178be98eb?rik=EsV8j6sjSBL%2b5A&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-mexican-flag-flag-of-mexico-png-1239.png&ehk=HPS2ryzHQwkWTI48b35ZLFwxJMqTkWNUULBHn%2fBplBc%3d&risl=&pid=ImgRaw&r=0"
    },

    async setSpainInfo() {
      axios
        .get(
          `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=españa&aqi=no`
        )
        .then((response) => {
          this.country = response.data.location;
          console.log(this.country);
        });
      axios
        .get(
          `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=españa&aqi=no`
        )
        .then((response) => {
          this.countryWeather = response.data.current;
          console.log(this.countryWeather);
        });
      axios
        .get(
          `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=españa&aqi=no`
        )
        .then((response) => {
          this.countryState = response.data.current.condition;
          console.log(this.countryWeather);
        });
      this.currentCountry = "España";
      this.currentFlag = "https://www.pinclipart.com/picdir/middle/361-3614462_spain-clipart-transparent-175-aos-de-la-bandera.png"
      
    },
    async setUsaInfo() {
      axios
        .get(
          `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=united states&aqi=no`
        )
        .then((response) => {
          this.country = response.data.location;
          console.log(this.country);
        });
      axios
        .get(
          `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=united states&aqi=no`
        )
        .then((response) => {
          this.countryWeather = response.data.current;
          console.log(this.countryWeather);
        });
      axios
        .get(
          `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=united states&aqi=no`
        )
        .then((response) => {
          this.countryState = response.data.current.condition;
          console.log(this.countryWeather);
        });
      this.currentCountry = "United States";
      this.currentFlag="https://th.bing.com/th/id/R.8dfe8368d5e4db97853a693d9d24a0ab?rik=wPOhTqj30fPphA&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fusa-flag-transparent-background%2fusa-flag-transparent-background-25.png&ehk=HsrZvjA1j0udRW0xiYVqywhrXD3WBsfmQ2YHnd%2bMreo%3d&risl=&pid=ImgRaw&r=0"
    },
  },

  data() {
    return {
      apiKey: "3bd525d2e1c3460b86a235856222201",
      country: "",
      countryWeather: "",
      countryState: "",
      currentCountry: "México",
      currentFlag:"https://th.bing.com/th/id/R.71ca289dd66e46d274e16ee178be98eb?rik=EsV8j6sjSBL%2b5A&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-mexican-flag-flag-of-mexico-png-1239.png&ehk=HPS2ryzHQwkWTI48b35ZLFwxJMqTkWNUULBHn%2fBplBc%3d&risl=&pid=ImgRaw&r=0",
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.img {
  width: 180x;
  height: 120px;
}

h5 {
  width: 200px;
}
h4 {
  border-bottom: 1px solid lightskyblue;
  width: 200px;
  display: inline;
}
body {
  display: flex;
  min-height: 100vh;
  flex-direction: row;
  margin: 0;
}
.outer-col-1 {
  background: white;
  flex: 1;
}
.outer-col-2 {
  display: flex;
  flex-direction: column;
  flex: 5;
}
.inner-row {
  display: flex;
  flex-direction: row;
}
.inner-col {
  flex: 4;
}
.inner-row article {
  min-height: 60vh;
}
.inner-row aside {
  background: white;
  flex: 1;
}
header,
footer {
  background: white;
  height: 20vh;
}
header {
  display: flex;
  justify-content: space-around;
}
.myArticle {
  margin-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
header,
footer,
article,
nav,
aside {
  padding: 10px;
  border: 10px solid rgba(128, 128, 128, 0.178);
}
</style>