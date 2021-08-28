<template>
    <div class="about-page">
        <div class="row">
            <h1>About</h1>

            <h2>Introduction</h2>

            <div class="image">
                <img :src="tree" width="346" height=428 alt="About Jess Jarett" />
            </div>

            <p>My name is Jess, and I’m a Front-End Web Developer with 7 years of professional experience working for 3 companies in the Syracuse, NY area.</p>

            <p>My passion for development goes back to when I was a pre-teen, spending a lot of my free time on Neopets. Neopets was virtual pet website that gave each of its users their own personal hosted website. I quickly taught myself the well-known HTML elements and used my free website to teach other player’s how to code. Fast-forward 6 years and I was in high school making myspace layouts for all of my friends and taking 4 years of web design classes. Little did I know that my hobby would help prepare me for a future career.</p>
           
            <p>College experience included a four-year job at my college’s Alumni Association. I was responsible for digitizing their magazine archive and adding them to their new website. I learned a lot about content management system’s and organization. My final summer was spent at an internship at Equitable (formerly AXA US), as a developer on their User Experience team.</p>

            <p>Today, I am a developer at Bankers Healthcare Group. As the lead front-end developer on my team, I am responsible for the successful launch and maintence of all public-facing websites. This role has taught me a lot about the development lifecycle, as I am often involved in a project from ideation, to design/developer collaboration, development, all the way to launch.</p>

            <p>At Bankers Healthcare Group, I am leading an effort of gathering shared assets (logos/fonts/colors) and code/components, and adding them to a private NPM repository available for any BHG developer to use. BHG IT is full of distributed teams whose work does not cross paths. Having a shared code repository makes sure developers save time, code consistently, and can contribute to a project that benefits themselves and others.</p>

            <p>I also host a Front-End Developer Meetup on a bi-weekly basis. Its important to me to mentor and foster relationships with junior developers. I am always learning new things in my field by explaining and teaching others.</p>

            <h2>My hobbies</h2>

            <p>My favorite pasttime is hiking. I have spent a few months this last year remotely working from various locations in the Western United States and would spend my afternoons hiking in the Cascades or the Rockies. Every day after work I would find a fantastic hike within an hour’s drive and life felt like a vacation.</p>

            <p>Other hobbies of mine include cooking, slow-jogging, and reading a good non-fiction book.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'About',
        data() {
            return {
                tree: require('@/assets/images/about/jess-tree.jpg')
            }
        },
    }
</script>

<style lang="scss"> 
     .about-page {
         margin: 100px 0;

         .image {
             border-radius: $app-border-radius;
             position: relative;
             display: block;

             @media (max-width: 450px) {
                 width: 100%;
                 margin: 50px 0 25px 0;

                 img {
                     width: 100%;
                 }
             }

             @media (min-width: 451px) {
                float: right;
                margin-left: 50px;
                margin-bottom: 80px;
             }

             &::after {
                content: '';
                position: absolute;
                top: -20px;
                left: -20px;
                background: transparentize($palette-accent, .75);
                border-radius: $app-border-radius;
                width: 100%;
                height: 100%;
                z-index: -1;
            }
         }
     }
</style>
