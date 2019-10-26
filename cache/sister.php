<?php
session_start();
echo $_SESSION['username'].', ты пришёл на другую старницу сайта';
echo("<br>");
echo "<a href='brother.php'>На следующую страницу </a>";