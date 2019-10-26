<?php
//session_start();
//$_SESSION['username']= "maksim";
//echo 'Привет,'.$_SESSION['username']."<br>";
//echo "<a href='sister.php'>другая страница</a>";
$_COOKIE['counter']++;
setcookie("counter",$_COOKIE['counter']);
echo 'Вы посетили эту страницу '.$_COOKIE['counter'].' раз';