<template>
    <!-- Not ready yet -- will add later -->

    <div class="blog-card">
        <div class="blog-card__title">
            Title goes here
        </div>
        <div class="flex">
            <div class="blog-card__date">Date</div>
            <div class="blog-card__tag">Tag</div>
        </div>
        <div class="blog-card__description">
            Description goes here
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BlogCard'
    }
</script>

<style lang="scss"> 
    .blog-card {
        padding: 25px;
        background: white;

        &__title {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 25px;
        }

        &__date {
            margin-right: 25px;
            position: relative;

            &::after {
                content: '';
                height: 20px;
                width: 1px;
                background: $palette-dark;
                position: absolute;
                display: block;
                right: -25px;
                top: 50%;
                transform: translateY(-50%);
            }
        }

        &__tag {
            margin-left: 25px;
        }

        &__description {
            margin-top: 10px;
        }
    }
</style>
