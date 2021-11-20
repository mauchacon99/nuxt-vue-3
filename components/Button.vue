 <template>
    <a 
      :href="href" 
      :target=" blank ? '_blank' : ''"
    >
      <button 
        :class="addClass"
      >
        {{ title }}
      </button> 
    </a>
    
 </template>

<script lang="ts">
    import Vue from 'vue'
    
    export default Vue.extend({
      name: 'Button',
      props: {
          title: {
            type: String,
            required:true,
            default: 'Ver Cupon'
          },
          blank:{
            type: Boolean,
            default: false
          },
          color: {
            type: String,
            required:false,
            default: 'bg-blue-500'
          } ,
          addClass: {
            type: String,
            required:false,
            default: 'bg-purple-700 text-white hover:bg-purple-500 text-white font-bold py-2 px-4 rounded '
          },
          href: {
            type: String,
            required:false,
            default: '#'
          } 
      },
    })
</script>