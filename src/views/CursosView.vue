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

          <ul>
            <li v-for="aula in api.cursos" :key="aula.id">
              <h2>
                <router-link
                  :to="{ name: 'curso', params: { curso: aula.id } }"
                >
                  {{ aula.nome }} - {{ aula.totalAulas }} aulas |
                  {{ aula.horas }} horas
                </router-link>
              </h2>
              <p>{{ aula.descricao }}</p>
            </li>
          </ul>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "CursosView",
  mixins: [fetchData],
  created() {
    this.fetchData("/cursos");
  },
};
</script>

<style></style>
