<template>
 <div class="min-h-full "> 
    <Navigation/>
    <TheHeader title="Discounts"/>
    <TheContainer>
        <router-view/>
    </TheContainer>
 </div>
</template>

 
<script lang="ts">
import Vue from 'vue'
import TheContainer from '~/components/TheContainer.vue';
import TheHeader    from '~/components/TheHeader.vue';
import Navigation   from '~/components/Navigation.vue';
 
export default Vue.extend({
    name:'default',
    components: {
       TheHeader, 
       TheContainer, 
       Navigation 
    },
})
</script>