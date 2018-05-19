<template>
<div id="mijngrafiekenpage">

  <span class="mijngrafiekentext">Mijn Grafieken</span>


  <div class="mijngrafiekencard">

  
    <img class="graph1" src="/static/graph1.png"></img>
  
    <img class="graph2" src="/static/barchart.png"></img>
  
    <img class="graph3" src="/static/circlediagram.png"></img>
  </div>
</div>
</template>

<script>
export default {
  name: 'mijn-grafieken'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mijngrafiekenpage {
  --mdc-theme-primary: #09233e;
  --mdc-theme-secondary: #f44336;
  --mdc-theme-background: #ffffff;
  position: relative;
  margin: auto;
  background-color: #ffffff;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.mijngrafiekentext {
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  width: 150px;
  height: 30px;
  top: 15px;
  left: 64px;
}

.mijngrafiekencard {
  overflow: hidden;
  border-color: rgba(0, 0, 0, 0.15);
  border-style: solid;
  border-width: 1px;
  position: relative;
  width: 325px;
  height: 500px;
  top: 25px;
  left: 0px;
}

</style>
