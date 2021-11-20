<template>
    <main >
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ">
        <div class="px-4 py-6 sm:px-0">
          <div class="rounded-lg h-96">
             <slot/>
          </div>
        </div>
       </div>
    </main>
</template>
<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'TheContainer',
  })
</script>
 