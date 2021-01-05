<template>
  <div>
    <div
      id="card"
      :style="{ backgroundColor: cardcolor, color: textColor }"
    >
      <header>
        <img src="@/assets/chip-light.svg" alt="chip" />

        <img v-if="vendorIcon" :src="require('@/assets/' + vendorIcon)" />
      </header>

      <section class="num">
        {{ numberOnCard }}
      </section>

      <section class="info">
        <aside class="cardholder">
          <span>Cardholder Name</span>
          <p>{{ cardHolder }}</p>
        </aside>
        <aside class="valid">
          <span>Valid until</span>
          <p>{{validMonth }} / {{ validYear }}</p>
        </aside>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardNumber: {
      type: String,
    },
    cardHolder: {
      type: String,
    },
    validMonth: {
      type: String,
    },
    validYear: {
      type: String,
    },
    vendorIcon: {
      type: String,
    },
    cardcolor: {
      type: String,
    },
    textColor: {
      type: String,
    },
  },

  data() {
    return {};
  },
  computed: {
    numberOnCard() {
      let final = "";
      for (let index = 0; index < this.cardNumber.length; index++) {
        final += this.cardNumber[index];

        if ((index + 1) % 4 == 0) {
          final += " ";
        }
      }
      return final;
    },
  },

  methods: {},
};
</script>

<style scoped>
header {
  display: flex;
  grid-column: auto/span 2;
  grid-row: auto/span 2;
  justify-content: space-between;
  align-items: flex-start;
}
#card {
  height: 14rem;
  border-radius: 0.6rem;
  padding: 1rem;
  box-sizing: border-box;
  display: grid;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4);
  max-width: 24rem;
  gap: 0.5rem 0;
  width: 350px;
  grid-auto-rows: 2.8rem;
  background: linear-gradient(
      237.75deg,
      hsla(0, 0%, 100%, 0.24),
      hsla(0, 0%, 100%, 0)
    ),
    #d0d0d0;
}
.num {
  font-size: 1.6rem;
  letter-spacing: 0.05rem;
  padding: 0.5rem 0 0;
  text-transform: uppercase;
  justify-content: space-between;
  grid-column: auto/span 2;
  grid-row: auto/span 1;
  display: flex;
}

.info {
  grid-column: auto/span 2;
  grid-row: auto/span 1;
  display: flex;
}
#card .info .cardholder {
  flex: 1;
}
aside {
  display: block;
}
#card section aside.valid span {
  text-align: right;
}
#card section aside span {
  display: block;
  text-transform: uppercase;
  font-size: 0.7rem;
  margin: 0 0 0.25rem;
}
#card section aside.valid p {
  text-align: right;
}

#card section aside p {
  display: block;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
}
</style>