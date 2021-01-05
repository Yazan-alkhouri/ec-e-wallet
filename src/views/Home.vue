<template>
  <div>
    <Top v-bind:title="title" v-bind:card-state="cardState" />
    <Card
      v-bind:cardNumber="activeCard.cardNumber"
      v-bind:cardHolder="activeCard.cardHolder"
      v-bind:validMonth="activeCard.validMonth"
      v-bind:validYear="activeCard.validYear"
      v-bind:cardcolor="activeCard.bgcolor"
      v-bind:textColor="card.color"
      v-bind:vendorIcon="card.img"
    />

    <!-- <a id="button"
    v-on:click ="deleteCard()"
    
    >Delete card </a> -->

    <CardStack v-on:cardClick="cardClick($event)" />

    <router-link id="button" to="/AddCard">add new card</router-link>
  </div>
</template>

<script>
import Top from "@/components/Top.vue";
import Card from "@/components/Card.vue";
import CardStack from "@/components/CardStack.vue";

export default {
  name: "Home",
  components: {
    Top,
    Card,
    CardStack,
  },
  data() {
    return {
      title: "e-wallet",
      cardState: "active card",
      txt: "add new card",
      card: this.$root.cards[0],
    };
  },
  computed: {
    activeCard() {
      return this.card;
    },
  },
  methods: {
    cardClick(card) {
      this.card = card;
    },
    /* deleteCard(){
      let n = confirm("Are you sure that you want to delete the card?");
      if (n == true) {
        this.card = 
      }
    
    } */
  },
};
</script>

<style >
#button {
  display: flex;
  align-items: center;
  height: 4rem;
  font-size: 1.3rem;
  font-weight: 700;
  border-radius: 0.5rem;
  margin: 2rem 0;
  max-width: 24rem;
  text-transform: uppercase;
  color: #000;
  border: 0.125rem solid #000;
  cursor: pointer;
  text-decoration: none;
  justify-content: center;
  margin-bottom: 0;
}
#button:hover {
  color: white;
  background-color: #000;
}
</style>
