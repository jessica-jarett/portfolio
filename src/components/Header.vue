<template>
    <header>
        <div class="row">
            <nav>
                <div class="mobile-only hamburger"></div>

                <ul>    
                    <li>
                        <router-link to="/about">About</router-link>
                    </li>
                    <li>
                        <router-link to="/featured-experience">Featured Experience</router-link>
                    </li>
                    <li>
                        <router-link to="/skills">Skills</router-link>
                    </li>
                    <li>
                        <router-link to="/blog">Blog</router-link>
                    </li>
                    <li>
                        <router-link to="/contact">Contact</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header> 
</template>

<script>
    import Headroom from "headroom.js";

    export default {
        name: 'AppHeader',
        mounted: function() {
            let header = document.querySelector("header");
            let headroom  = new Headroom(header);
            headroom.init();
        }
    }
</script>

<style lang="scss"> 
    @media (min-width: 1025px) {
        .headroom {
            will-change: transform;
            transition: transform 200ms linear;
        }
        .headroom--pinned {
            transform: translateY(0%);
        }
        .headroom--unpinned {
            transform: translateY(-100%);
        }
    }

    nav {
        ul {
            @include reset-list();
            text-align: right;

            li { 
                margin: 0 25px;

                router-link {
                    position: relative;
                    display: block;
                    cursor: pointer;

                    &::after {
                        content: '';
                        left: 50%;
                        bottom: 0;
                        height: 2px;
                        width: 0;
                        position: absolute;
                        transform: translateX(-50%);
                        transition: .25s ease-in-out;
                        background: $palette-antique-brass;
                    }

                    &:hover {
                        &::after {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
</style>
