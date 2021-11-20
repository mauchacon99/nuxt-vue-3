 <template>
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">
          {{ title  }}
        </h1>
      </div>
    </header>  
 </template>

<script lang="ts">
  import Vue from 'vue'
  import TheContainer from './TheContainer.vue'

  export default Vue.extend({
    name: 'TheHeader',
    components: { TheContainer },
    props: {
      title: {
        type: String,
        required:true,
        default: 'title'
      } 
    },
  })
</script>