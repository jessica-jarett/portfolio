<template>
    <div class="experience-page">
        <div class="row">
            <h1>Featured Experience</h1>

            <experience-posts />
        </div>
    </div>
</template>

<script>
    import ExperiencePosts from '@/components/ExperiencePosts.vue';
    
    export default {
        name: 'Experience',
        components: {
            ExperiencePosts
        }
    }
</script>

<style lang="scss"> 
     .experience-page {
         margin: 100px 0 0 0;
     }
</style>
