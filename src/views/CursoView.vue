<template>
  <div>
    <!-- <p>{{ api }}</p> -->
    <div class="conteudo">
      <div>
        <div class="header-name">
          <h2>{{ api.nome }}</h2>
          <p>Aulas: {{ api.totalAulas }} | Horas: {{ api.horas }}</p>
        </div>
        <p>{{ api.descricao }}</p>
        <div class="buttons">
          <router-link
            v-for="aula in api.aulas"
            :key="aula.id"
            tag="button"
            :to="{ name: 'aula', params: { aula: aula.id } }"
          >
            {{ aula.nome }}
          </router-link>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "cursosView",
  props: ["curso"],
  mixins: [fetchData],
  created() {
    this.fetchData(`/curso/${this.curso}`);
  },
};
</script>

<style>
.header-name {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  border-bottom: 5px solid #4b8;
}
.buttons {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
button {
  padding: 10px;
  background: #4b8;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  border-bottom: 5px solid #234;
  transition: border 0.3s ease;
}
</style>
