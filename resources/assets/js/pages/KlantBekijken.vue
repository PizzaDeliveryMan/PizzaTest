<template>
    <div id="BklYVCFtTz">
        <div class="Sk-tECFKTG">
            <mdc-card class="BkzhLctaG">
                <mdc-card-media class="rygG2IcFTz" height="160"
                                src="https://material-components-web.appspot.com/images/16-9.jpg"></mdc-card-media>

                <mdc-card-header class="H1-fnU9FaM" title="Title" subtitle="Subtitle"></mdc-card-header>

                <mdc-card-actions class="SkzfhUqYaz">
                    <mdc-card-action-button class="SkQG3IqYTG">Action 1</mdc-card-action-button>

                    <mdc-card-action-button class="HJ4MhLqFTG">Action 2</mdc-card-action-button>
                </mdc-card-actions>
            </mdc-card>

            <span class="Bk7TI5Kaz">Profiel : Hoge Gouwe 113 A</span>

            <span class="HyyQPqKaM">Dit is : Jan Joost HagoortDeze klant koopt altijd grote eieren, heeft nog 10 strippen</span>

            <mdc-switch class="Sy4_D5YpM" label="Geen interesse" checked></mdc-switch>

            <table class="SkkiwcKpf">
                <tr class="r1lJiP5YTf">
                    <th class="r1Zkiv9KaM">head 1</th>

                    <th class="rJGJswcFaf">head 2</th>

                    <th class="BJ71ovcYTf">head 3</th>
                </tr>

                <tr class="r1Eksv5Kpz">
                    <td class="BJBysD5KpM">data 1.1</td>

                    <td class="ryLyjD5taG">data 2.1</td>

                    <td class="SywyiPqYaG">data 3.1</td>
                </tr>

                <tr class="ryOyiDct6M">
                    <td class="B1YyiPcYaG">data 1.2</td>

                    <td class="r19JjvcF6z">data 2.2</td>

                    <td class="SJoyiDqK6z">data 3.2</td>
                </tr>

                <tr class="H1nksDqt6z">
                    <td class="S1pyjw5t6z">data 3.1</td>

                    <td class="HyAyjvqYpf">data 3.2</td>

                    <td class="r1yg1jvqYTf">data 3.3</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'klant-bekijken'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #BklYVCFtTz
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

    .BkzhLctaG
    {
        background-color: #fff;
        position: absolute;
        width: 325px;
        height: 600px;
        top: 0px;
        left: 0px;
    }

    .Bk7TI5Kaz
    {
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 18px;
        color: rgb(212, 195, 195);
        position: absolute;
        width: 293px;
        height: 28px;
        top: 20px;
        left: 15px;
    }

    .HyyQPqKaM
    {
        overflow: hidden;
        text-overflow: ellipsis;
        color: rgb(249, 243, 243);
        position: absolute;
        width: 301px;
        height: 88px;
        top: 73px;
        left: 11px;
    }

    .BJBysD5KpM
    {
        padding: 0 8px;
    }

    .ryLyjD5taG
    {
        padding: 0 8px;
    }

    .SywyiPqYaG
    {
        padding: 0 8px;
    }

    .r1Eksv5Kpz
    {
        background-color: rgba(0, 0, 0, 0.12);
    }

    .S1pyjw5t6z
    {
        padding: 0 8px;
    }

    .HyAyjvqYpf
    {
        padding: 0 8px;
    }

    .r1yg1jvqYTf
    {
        padding: 0 8px;
    }

    .H1nksDqt6z
    {
        background-color: rgba(0, 0, 0, 0.12);
    }

    .SkkiwcKpf
    {
        background-color: #ffffff;
        border-collapse: collapse;
        border: 1px solid #dddddd;
        text-align: left;
        position: absolute;
        width: 315px;
        height: 88px;
        top: 321px;
        left: 5px;
    }

    .Sk-tECFKTG
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
