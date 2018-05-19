<template>
    <div id="mijnroutepage">
        <div class="mijnroutecard">
            <h3 class="mijnroutetext">Mijn Route</h3>

            <img class="routemap" src="/static/routemap.png"></img>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'mijn-route'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #mijnroutepage
    {
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

    .mijnroutetext
    {
        overflow: hidden;
        text-overflow: ellipsis;
        position: relative;
        width: 150px;
        height: 25px;
        top: 25px;
        left: 25px;
    }

    .mijnroutecard
    {
        overflow: hidden;
        border-color: rgba(0, 0, 0, 0.15);
        border-style: solid;
        border-width: 1px;
        position: absolute;
        width: 325px;
        height: 600px;
        top: 0px;
        left: 0px;
    }

</style>
