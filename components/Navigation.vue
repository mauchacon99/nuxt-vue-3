<template>
      <nav class="bg-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
                <div class="flex-shrink-0">
                    <img 
                      class="h-8 w-8" 
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" 
                      alt="Workflow"
                    >
                </div>
            </div>
            </div>
        </div>
    </nav>
</template>
<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Navigation',
  })
</script>