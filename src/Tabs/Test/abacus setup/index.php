<!DOCTYPE html>
<html lang="en">
<!-- Mirrored from sillycycle.com/html5/AbacusJP.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 18 Aug 2020 09:50:07 GMT -->
<head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="robots" content="noindex">
<title>Japanese Abacus</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<!-- <link rel="shortcut icon" href="http://sillycycle.com/images/abacus.ico" type="image/ico"> -->
<link rel="stylesheet" href="css/default.css" type="text/css">
<script src="js/abacus.js"></script>
<style type="text/css">
  body{text-align: center;}
  canvas{display: unset !important;background-color: #000 !important}
  div#abacus_p{display: inline-block;}
  article{display: unset !important;}
  .n_margin{margin-bottom: 20px;}
</style>
</head>
<body oncontextmenu="return false;">
<h1>Japanese Abacus</h1>
<h2>そろばん</h2>
<h2>(Soroban, post-WWII)</h2>
<div>
  <!--<input id="decrement" type="submit" value="Decrement"/>
  <input id="increment" type="submit" value="Increment"/>-->
  Rails: <input id="abacus_rails" type="number" min="1" value="15"/>
  <!--Rails: <input id="abacus_rails_number" style="padding-left: 2px;" readonly size=1 value="15"><input id="abacus_rails" type="range" min="1" max="24" value="15" oninput="railsChange(this.value)"/>-->
  <input id="teach" type="submit" value="Teach"/>
  <input id="clear" type="submit" value="Clear"/>
  <input id="complement" type="submit" value="Complement"/>
  <input id="undo" type="submit" value="Undo"/>
  <input id="redo" type="submit" value="Redo"/>
</div>
<br>
<article id="abacus_article"
  data-format="Japanese"
  data-rails="15"
  data-rightToLeftAdd="0"
  data-rightToLeftMult="0"
  data-sound="1"></article>
<div id="abacus_p">
<span id="abacus_span" contenteditable="true" style="padding-right: 16px;"></span></div>
<div class="n_margin"></div>
<script>initAbacus(null, document.getElementById("abacus_span"), document.getElementById("abacus_rails"));</script>
<!-- <hr>
<a href="http://sillycycle.com/AbacusGB.html" target="_blank">ABACUS Guide Book</a>.<br>
<a href="http://sillycycle.com/xabacus.html" target="_blank">Manual for xabacus</a> (similar X program).<br>
JavaScript Source: <a href="abacus.js">abacus.js</a>.<br> -->
</body>
</html>
