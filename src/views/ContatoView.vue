<template>
  <div>
    <div v-if="loading" class="loading">
      <LoadingPage />
    </div>
    <Transition>
      <div v-if="api">
        <div>
          <h1>Pagina de {{ api.titulo }}</h1>
          <p>{{ api.descricao }}</p>
          <router-link class="btn-cursos" tag="button" to="/">
            Home</router-link
          >
          <div>
            <h2>Entre em contato</h2>
            <ul>
              <li>
                <p>Telefone: {{ contato.telefone }}</p>
              </li>
              <li>
                <p>Email: {{ contato.email }}</p>
              </li>
              <li>
                <p>Endereço: {{ contato.endereco }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "ContatoView",
  mixins: [fetchData],
  created() {
    this.fetchData("/contato");
  },
  computed: {
    contato() {
      return this.api.contato;
    },
  },
};
</script>

<style></style>
