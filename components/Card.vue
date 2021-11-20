 <template>
  <div class="bg-white w-full h-full sm:m-4  border border-dark-100  rounded-md ">
      <div class="relative">
        <img 
          class="rounded" 
          :src="ImagenShop"
        >
        <div class="absolute bottom-0 left-2  ">
          <img 
            class="rounded-full h-12 w-16  flex items-center justify-center object-scale-down"
            :src="LogoShop"
          >
        </div>
      </div>
      <div 
        class="
          text-xs 
          text-gray-600 
          uppercase
          p-2
          my-1
          flex
          font-bold
        ">  
        {{ discount.exclusive ? 'exclusive'  : 'not exclusive'}}  
      </div>
      <div class=" tracking-wide lg:text-sm sm:text-xs  font-semibold text-center mb-8 ">
        <a 
          class="hover:underline  trucante  " 
          :href="shop.url" 
          target="_blank"
        >  
          {{ discount.title }}  
        </a>
      </div>
      <div class="flex items-center justify-center  ">
          <Button 
            :href="shop.url"
            title="Ver Cupon"
            blank
          />
      </div>
  </div>
 </template>
 
<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Shop, Discount } from"~/interfaces/index";
import Button from './Button.vue';

export default Vue.extend({
  components: { Button },
  name: 'Card',
  props: {
    shop: {
      type: Object,
      required: true
    } as PropOptions<Shop>,
    discount: {
      type: Object,
      required: true
    } as PropOptions<Discount>
  },
  computed:{
      ImagenShop(){
        return this.shop?.['image'].length ? 
          this.shop?.['image'].at(0)?.url  
          :'https://image.freepik.com/vector-gratis/pagina-404-no-encontrado-alambre-zocalo_80328-233.jpg'
      },
      LogoShop(){
        return this.shop?.['logo'].length ? 
          this.shop?.['logo'].at(0)?.url  
          :'https://image.freepik.com/vector-gratis/pagina-404-no-encontrado-alambre-zocalo_80328-233.jpg'
      },
       
  },
  head() {
      return {
        title: this.shop.seo_title,
        discount: this.shop.seo_title
      }
  }
})
</script>

  
