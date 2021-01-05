<template>
  <div>
    <section class="card-stack">
      <article
        v-on:click="cardClick(card)"
        :key="card.id"
        v-for="card in cards"
      >
        <Card
          :cardNumber="card.cardNumber"
          :cardHolder="card.cardHolder"
          :validYear="card.validYear"
          :validMonth="card.validMonth"
          :cardcolor="card.bgcolor"
          :textColor="card.color"
          :vendorIcon="card.img"
        />
      </article>
    </section>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  components: {
    Card,
  },
  data() {
    return {
      cards: this.$root.cards,
    };
  },
  methods: {
    cardClick(card) {
      this.$emit("cardClick", card);
    },
  },
};
</script>

<style scoped>
.card-stack {
  grid-auto-rows: 3.5rem;
  margin: 2rem 0 12rem;
  display: grid;
}
</style>