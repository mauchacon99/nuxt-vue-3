<template>
  <ListCard>
    <Card  
      v-for="(discount, key) in discounts" 
      :discount="discount" 
      :shop="discount.shop" 
      :key="key"
    />
  </ListCard>
</template>

<script lang="ts">

  import Vue from "vue";
  import Card from "~/components/Card.vue";
  import ListCard from "~/components/ListCard.vue";
  import TheHeader from "~/components/TheHeader.vue";
  import { Discount } from"~/interfaces/index";

  export default Vue.extend({
    components: { Card, ListCard, TheHeader },
    data() {
      return {
        discounts : {}
      };
    },
    methods: {
      /**  
       * * @Author: Mauricio Chacon  
       * * @Date: 2021-11-20 01:27:34  
       * * @Desc: get all discounts
       * */
      async fetchDiscounts () : Promise <Discount>  {
        const response = await this.$axios.$get('https://prueba.adminforbes.site/api/v1/pages/home');
        const { top20: discounts } = response.data;
        return discounts
      },
    },
    async created() {
      this.discounts = await this.fetchDiscounts(); 
    },
  });
</script>
 