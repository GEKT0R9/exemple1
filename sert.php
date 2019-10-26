<?php
session_start();
if (!empty(trim($_POST['login']))) {
    $login = trim($_POST['login']);
}
if (filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL)) {
    $email = trim($_POST['email']);
    if (!empty($_POST['passwd'])) {
        $passwd = $_POST['passwd'];
    }
    $_SESSION['login'] = $login;
    $_SESSION['email'] = $email;
    $_SESSION['passwd'] = $passwd;
} else {
    echo "НЕДОПУСТИМЫЙ адрес электронной почты";
    session_destroy();
}
switch ($_POST['page']) {
    case 'Зарегистрироваться':
        if (prove()) {
            createUser($login, $email, $passwd);
            PageR();
            break;
        } else {
            session_destroy();
            break;
        }
    case 'Вход':
        echo Log_In();
        break;
}
function prove()
{
    $login = $_SESSION['login'];
    $email = $_SESSION['email'];
    if ($login == mysqli_fetch_array(getMysqli()->query("SELECT login FROM users where login = '$login';"))[0]) {
        echo 'Пользователь с таким логином уже существует';
        return false;
    } elseif ($email == mysqli_fetch_array(getMysqli()->query("SELECT email FROM users where email = '$email';"))[0]) {
        echo 'Пользователь с такой почтой уже существует';
        return false;
    } else {
        return true;
    }
}

function Log_In()
{
    $login = $_SESSION['login'];
    $email = $_SESSION['email'];
    $passwd = $_SESSION['passwd'];
    $hash = mysqli_fetch_array(getMysqli()->query("SELECT token FROM users where login = '$login';"))[0];
    if ($login != mysqli_fetch_array(getMysqli()->query("SELECT login FROM users where login = '$login';"))[0]) {
        return 'Пользователя с таким логином нет';
    } elseif ($email != mysqli_fetch_array(getMysqli()->query("SELECT email FROM users where email = '$email';"))[0]) {
        return 'Пользователя с такой почтой нет';
    } elseif (!password_verify($passwd, $hash)) {
        return 'Неверный пароль';
    } else {
        PageR();
    }

}

function PageR()
{
    $login = $_SESSION['login'];
    echo "Моё почтение $login<br>";
    echo "Вы можете выйти <br><form action='action.php'><input type='submit' value='Выход'>";
    session_destroy();
}

function getMysqli(): mysqli
{
    createMysqli();
    return isset($GLOBALS['mysqli']) ? $GLOBALS['mysqli'] : null;
}

function createMysqli(): mysqli
{
    $GLOBALS['mysqli'] = new mysqli("localhost", "root", "", "yohsm");
    if ($GLOBALS['mysqli']->connect_errno) {
        throw new Exception("Не удалось подключиться к MySQL: (" . $GLOBALS['mysqli']->connect_errno . ") " . $GLOBALS['mysqli']->connect_error);
    }
    return $GLOBALS['mysqli'];
}

function createPassword($password): string
{
    return password_hash($password, PASSWORD_BCRYPT);
}

function createUser(string $login, string $email, string $password)
{
    $passwordToken = createPassword($password);
    return getMysqli()->query("INSERT INTO users VALUES (0,'$login','$email','$passwordToken');");
}

?>