<template>
  <div>
    <header class="top">
      <h1>{{ title }}</h1>
      <p class="card-type">{{ cardState }}</p>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },

    cardState: {
      type: String,
    },
  },
};
</script>

<style scoped>
.top {
  display: flex;
  text-transform: uppercase;
  flex-direction: column;
}
h1 {
  color: black;
  flex: 2;
  line-height: 2rem;
  font-size: 1.7rem;
  padding: 1.4rem;
}
p {
  color: rgba(0, 0, 0, 0.267);
  font-weight: 600;
  padding: 0.25rem;
  font-size: 0.8rem;
}

h1,
p {
  text-align: center;
  margin: 0;
}
</style>