<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="hover-box" :class="{'active': showOffset}" :style="'left:'+offset+'px;'"></div>
        <div class="container">

            <!-- <a class="navbar-brand" href="#">Solomon Eyitene</a> -->
            <router-link class="navbar-brand" to="/">
                <img :src="pathOrigin + '/images/graphlinkz.svg'" alt="" height="50">
            </router-link>
            <button  @click="showNav = !showNav" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" :class="{'active': showNav == true}" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto" @mouseleave="showOffset = false">
                    <li class="nav-item active">
                        <router-link tag="a" class="nav-link" to="/home" @mouseover="hover">Home<span class="sr-only">(current)</span></router-link >
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#services"  @mouseover="hover">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#portfolio" @mouseover="hover">My works</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact" @mouseover="hover">Contact</a>
                    </li>
               
                </ul>
              
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'navbar',
    data(){
        return{
            offset: 0,
            showOffset: false,
            showNav: false
        }
    },
    methods: {
        hover(ev){
            
            this.offset = ev.target.offsetLeft;
            this.showOffset = true;
        },
        toggleNav(){
            this.showNav = true;
        }
    }
   
}
</script>


<style>
    .hover-box{
        height: 2px;
        width: 20px;
        position: absolute;
        top: 2rem;
        left: 0;
        background: #111;
        display: none;
        transition: all .5s;
    }
    .active{
        display: inline-block;
    }
</style>