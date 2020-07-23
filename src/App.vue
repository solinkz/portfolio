<template>
  <div id="app" @mousemove="activateCustomCursor" >
 
    <!-- <div v-show="showCursor" class="custom-cursor" :style="'top:'+ cursorTop + 'px; left:' + cursorLeft + 'px;' "></div> -->

    <nav-component></nav-component>

    <router-view></router-view>
    
                          
  </div>
</template>

<script>

import './assets/css/main.css';
import navComponent from './components/nav';
// import customCursor from './components/utility/custom_cursor';

export default {
  name: 'App',
  components: {
    navComponent,
    // customCursor
  },
  data(){
    return{
      cursorTop: 0,
      cursorLeft: 0,
      showCursor : false
    }
  },
  methods:{
    activateCustomCursor(ev){

        setTimeout(() => {
          
          this.cursorLeft = ev.clientX - 18;
          this.cursorTop = ev.clientY - 18;
        }, 150);
        console.log(this.cursorTop +' '+ this.cursorLeft);
        this.showCursor = true;
    }
  },
  watch: {
    // cursorTop(val){
    //     this.cursorTop = val - 10;
    // },
    // cursorLeft(val){
    //   this.cursorLeft = val - 10;
    // }
  }
}
</script>

<style >
  html{
    overflow-x: hidden;
  }
</style>
