<template>
<div>

    <Card 
    :cardNumber ="cardNumber"
    :cardHolder ="cardHolder"
    :validYear ="validYear"
    :validMonth ="validMonth"
    :cardcolor ="vendor.bgcolor"
    :textColor ="vendor.color"
    :vendorIcon="vendor.img" 
    
    />
    
      
   <section class="card-form">
      <label for="number" class="info">
         Card Number
      </label>
      <input type="text" maxlength="16" name="number"  placeholder="XXXX XXXX XXXX XXXX" class="info"
      v-model="cardNumber">

      
        <label for="cardholder" class="info">
           Cardholder Name
         </label>
      <input type="text" maxlength="20" name="cardholder" placeholder="Firstname Lastname" class="info"
      v-model="cardHolder">
         <label for="month">Month</label>
         <label for="year">Year</label>
      <select name="month" 
      v-model="validMonth">
         <option value="01">01</option> 
         <option value="02">02</option> 
         <option value="03">03</option>
         <option value="04">04</option>
         <option value="05">05</option>
         <option value="06">06</option>
         <option value="07">07</option>
         <option value="08">08</option>
         <option value="09">09</option>
         <option value="10">10</option>
         <option value="11">11</option>
         <option value="12">12</option>
      </select> 
      <select name="month"
      v-model="validYear">
         <option value="21">21</option>
         <option value="22">22</option>
         <option value="23">23</option>
         <option value="24">24</option>
         <option value="25">25</option>
         <option value="26">26</option>
         <option value="27">27</option>
      </select> 
      <label for="vendor" class="info">Vendor</label>
       <select name="vendor" class="info" v-model="vendor" >
         <option  :value ="vendor" :key ="vendor.id" v-for="vendor in vendors" >{{vendor.name}}</option> 
         
         
       </select>
   </section>
   <a id="button"
    v-on:click="addCardClick()">
      add card
    </a>
</div>
</template>


<script>
import Card from '@/components/Card.vue'
export default {
    components: {
    Card
  },
   data(){return{
    cardNumber: '',
    cardHolder: '',
    validMonth: 'MM',
    validYear: 'YY',
    vendor: {},
    vendors: this.$root.vendors
    
      
     }},
     methods:{
         
        addCardClick(){
            this.$emit('addcard',{
                cardNumber: this.cardNumber,
                cardHolder: this.cardHolder,
                validMonth:  this.validMonth,
                validYear:  this.validYear,
                bgcolor: this.vendor.bgcolor,
                color: this.vendor.color,
                img: this.vendor.img,
                
            })
        }

         
         
     },
    
     
}
</script>
  

<style scoped>

.card-form {

    max-width: 24rem;
    height: 14rem;
    gap: 0 2rem;
    display: grid;
    margin-bottom: 6rem;
    margin-top: 1rem;
    

}
label {
    padding: .25rem 0;
    font-size: .7rem;
    text-transform: uppercase;
}
.info {
    grid-column: auto/span 2;
}

input, select {
    margin: 0 0 .8rem;
    box-sizing: border-box;
    font-size: 1rem;
    width: 100%;
    padding: .5rem;
    height: 2.6rem;
    border: 1px solid #000;
    border-radius: .25rem;
    
}

</style>