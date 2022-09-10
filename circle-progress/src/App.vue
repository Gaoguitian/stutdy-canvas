<template>
  <div id="app">
    <canvas id="arc" width="500" height="280"></canvas>
  </div>
</template> 

<script>
import {arc} from './canvas/progressArc'
export default {
  name: 'App',
  mounted(){
    let arcInstance = new arc(500,280,50)
    arcInstance.init()
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
