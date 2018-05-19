<template>
    <div id="mijngegevenspage">


        <span class="mijngegevenstext">Mijn gegevens</span>


        <div class="mijngegevenscard" label="Naam" value="Naam" rows="100" type="text">


            <mdc-textfield class="inputvoornaam" label="Voornaam" value="Voornaam" rows="100"
                           type="text"></mdc-textfield>


            <mdc-textfield class="inputtsnvgsl" label="Tussenv" value="Tussenv" rows="100" type="text"></mdc-textfield>

            <mdc-textfield class="inputachternm" label="Achternaam" value="Achternaam" rows="100"
                           type="text"></mdc-textfield>

            <mdc-textfield class="inputgeboortedatum" label="Geboortedatum" value="Geboortedatum" rows="100"
                           type="text"></mdc-textfield>

            <mdc-textfield class="inputadres" label="Adres" value="Adres" rows="100" type="text"></mdc-textfield>

            <mdc-textfield class="inputpostcode" label="Postcode" value="Postcode" rows="100"
                           type="text"></mdc-textfield>

            <mdc-textfield class="inputplaats" label="Woonplaats" value="Woonplaats" rows="100"
                           type="text"></mdc-textfield>


            <mdc-textfield class="inputiban" label="Iban" value="Iban" rows="100" type="text"></mdc-textfield>


            <mdc-button class="btnsave" raised>Opslaan</mdc-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'mijn-gegevens'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #mijngegevenspage
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

    .HJ8B26YYpz
    {
        font-family: 'Material Icons';
        font-size: 32;
        text-align: center;
        position: absolute;
        width: 106px;
        height: 166px;
        top: 424px;
        left: 207px;
    }

    .mijngegevenstext
    {
        overflow: hidden;
        text-overflow: ellipsis;
        border-width: 7px;
        position: relative;
        width: 150px;
        height: 25px;
        top: 13px;
        left: 85px;
    }

    .mijngegevenscard
    {
        overflow: hidden;
        border-color: rgba(0, 0, 0, 0.15);
        border-style: solid;
        border-width: 1px;
        position: relative;
        width: 325px;
        height: 600px;
        top: 35px;
        left: 0px;
    }

</style>
