<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
  <meta charset="utf-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- CSRF Token -->
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <title>{{ config('app.name', 'Laravel') }}</title>

  <!-- Fonts -->

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons">
    <link rel="stylesheet" href="https://unpkg.com/vue-mdc-adapter@^0.13.2/dist/vue-mdc-adapter.min.css" type="text/css">

    <!-- fav config -->


    <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png">
    <link rel="manifest" href="/static/manifest.json">

    <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#349369">
    <link rel="shortcut icon" href="/static/favicon.ico">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">


    <meta name="theme-color" content="#ffffff">

    <title>my vuegg project</title>
    
    



  <script>
      window.Laravel = {!! json_encode([ 'csrfToken' => csrf_token(), ]) !!};
  </script>

</head>
<body>

      <div id="app"></div>

    <!-- built files will be auto injected -->

<script src="{{ asset('js/main.js') }}"></script>
</body>
</html>
