<template>
  <div>
    <router-link to="/">Back To HomePage</router-link>

    <Top 
     :title="title"
     :card-state="cardState" 
  
    />

    <CardForm
     v-on:addcard="addCard($event)" 
     />
  </div>
</template>

<script>
import Top from "@/components/Top.vue";
import CardForm from "@/components/CardForm.vue";

export default {
  name: "AddCard",
  components: {
    Top,
    CardForm,
  },
  data() {
    return {
      title: "add new card",
      cardState: "new card",
      txt: "add card",
    };
  },
  methods: {
    addCard(card) {
      this.$root.cards.push(card);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
a {
  margin-left: 103px;
  text-decoration: none;
  font-size: 15px;
  font-weight: bold;
  color: rgb(38, 38, 138);
}

a:hover {
  cursor: pointer;
  color: red;
}
</style>