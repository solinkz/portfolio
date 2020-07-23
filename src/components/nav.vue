<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="hover-box" :class="{'active': showOffset}" :style="'left:'+offset+'px;'"></div>
        <div class="container">

            <!-- <a class="navbar-brand" href="#">Solomon Eyitene</a> -->
            <a class="navbar-brand" href="#">
                <img :src="pathOrigin + '/images/graphlinkz.svg'" alt="" height="50">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto" @mouseleave="showOffset = false">
                    <li class="nav-item active">
                        <a class="nav-link" href="#" @mouseover="hover">Home<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"  @mouseover="hover">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" @mouseover="hover">My works</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" @mouseover="hover">Contact</a>
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
            showOffset: false
        }
    },
    methods: {
        hover(ev){
            
            this.offset = ev.target.offsetLeft;
            this.showOffset = true;
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