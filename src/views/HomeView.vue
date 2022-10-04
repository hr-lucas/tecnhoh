<template>
  <div>
    <div v-if="loading" class="loading">
      <LoadingPage />
    </div>
    <Transition>
      <div v-if="api" class="conteudo">
        <div>
          <h1>{{ api.titulo }}</h1>
          <p>{{ api.descricao }}</p>
          <router-link class="btn-cursos" tag="button" to="/cursos">
            Cursos</router-link
          >
          <div>
            <h2>Avaliações</h2>
            <ul>
              <li v-for="avalicao in api.avaliacoes" :key="avalicao.nome">
                <p>{{ avalicao.nome }}</p>
                <p>{{ avalicao.descricao }}</p>
              </li>
            </ul>
          </div>
        </div>
        <img src="@/assets/aprender.png" alt="Aprender" />
      </div>
    </Transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "HomeView",
  mixins: [fetchData],
  created() {
    this.fetchData("/home");
  },
};
</script>

<style>
.loading {
  width: 100%;
  height: 100vh - 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
}

.btn-cursos {
  border: none;
  background: #4b8;
  border-radius: 4px;
  color: white;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
  padding: 15px 40px;
  font-size: 1rem;
  margin-top: 10px;
  margin-bottom: 40px;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
}
</style>
