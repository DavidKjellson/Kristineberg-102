<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kristineberg 102</title>
  <link href="{{asset('css/app.css')}}" rel="stylesheet">
</head>

<body>
  <div id="app">
    <!-- <img src="img/3540209647697935994.jpg" alt="" class="bg-img"> -->
    <app></app>
  </div>
  <script src="{{ mix('js/app.js') }}" type="text/javascript"></script>
</body>

</html>