export default {
  data() {
    return {
      api: null,
      loading: true,
    };
  },
  methods: {
    fetchData(url) {
      setTimeout(() => {
        fetch(`http://localhost:3000${url}`)
          .then((r) => r.json())
          .then((r) => {
            this.api = r;
            this.loading = false;
          });
      }, 1000);
    },
  },
};
