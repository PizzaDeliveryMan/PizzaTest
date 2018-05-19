<template>
    <div id="mijnroutepage">
        <div class="mijnbedrijfcard">
            <span class="titlemijnbedrijf">Mijn Bedrijf</span>
            <div class="spacer"></div>
            <mdc-button class="btnmijngegevens" raised>Mijn Gegevens</mdc-button>

            <mdc-button class="btnmijnprofiel" raised>Mijn Profiel</mdc-button>

            <mdc-button class="btnmijnroute" raised>Mijn Route</mdc-button>

            <mdc-button class="btnmijngrafieken" raised>Mijn Grafieken</mdc-button>

            <mdc-button class="btnpersonaliseren" raised>Personaliseren</mdc-button>

            <mdc-button class="btnranglijst" raised>Ranglijst</mdc-button>

            <i class="ByLwe9YTz material-icons">insert_emoticon</i>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'mijn-bedrijf'
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

    .titlemijnbedrijf
    {
        overflow: hidden;
        text-overflow: ellipsis;
        position: relative;
        width: 150px;
        height: 25px;
        top: 14px;
        left: 87px;
    }

    .ByLwe9YTz
    {
        font-family: 'Material Icons';
        font-size: 32;
        text-align: center;
        position: relative;
        width: 101px;
        height: 141px;
        top: 441px;
        left: 188px;
    }

    .mijnbedrijfcard
    {
        overflow: hidden;
        border-color: rgba(0, 0, 0, 0.15);
        border-style: solid;
        border-width: 1px;
        position: relative;
        width: 325px;
        height: 600px;
        top: 0px;
        left: 0px;
    }

</style>
