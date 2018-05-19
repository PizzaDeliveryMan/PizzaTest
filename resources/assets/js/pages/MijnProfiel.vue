<template>
    <div id="HyeK6atFTM">

        <span class="BkM4XctTf">Mijn profiel</span>


        <div class="mijnprofielcard">
            <i class="profielimage material-icons">insert_emoticon</i>



            <span class="mijnprofielsubtext">Maak je profiel coompleet en ontvang 5 credits</span>

            <mdc-radio class="mijnprofielvraag2" label="Vraag 2" name="default-mdc-group"></mdc-radio>

            <mdc-textfield class="mijnprofieluitlegvraag" label="Uitlegvraag" value="Textfield" rows="100"
                           type="text"></mdc-textfield>



            <mdc-switch class="SJOkEcYpM" label="Vraag 4" checked></mdc-switch>

            <mdc-switch class="ry8g45Faz" label="Vraag 1" checked></mdc-switch>


            <mdc-button class="btnopslaan" raised>Opslaan</mdc-button>


        </div>
    </div>
</template>

<script>
    export default {
        name: 'mijn-profiel'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #HyeK6atFTM
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

    .profielimage
    {
        font-family: 'Material Icons';
        font-size: 32;
        text-align: center;
        position: relative;
        width: 119px;
        height: 160px;
        top: 431px;
        left: 199px;
    }

    .BkM4XctTf
    {
        overflow: hidden;
        text-overflow: ellipsis;
        position: relative;
        width: 150px;
        height: 25px;
        top: 8px;
        left: 30px;
    }

    .mijnprofielsubtext
    {
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 11px;
        position: relative;
        width: 263px;
        height: 25px;
        top: 34px;
        left: 25px;
    }

    .mijnprofielcard
    {
        overflow: hidden;
        border-color: rgba(0, 0, 0, 0.15);
        border-style: solid;
        border-width: 1px;
        position: relative;
        width: 325px;
        height: 500px;
        top: 35px;
        left: 0px;
    }

</style>
