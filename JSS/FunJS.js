//func2
function alena() {
    let nado = document.querySelectorAll('p');
    nado.forEach(function (element) {
        element.style.backgroundColor = "#FF0000";
    })
}

// alena();

//func3
function alibek() {
    let alibek2 = document.querySelectorAll('img');
    alibek2.forEach(function (element) {
        element.style.width = '100px';
        element.style.height = '100px';
        element.style.boxShadow = '10px 15px 25px red';
    })
}

// alibek();

//func4
function zvezda() {
    let zvezda2 = document.querySelectorAll('p');
    let i = 0;
    zvezda2.forEach(function (element) {
        let aliber = element.textContent;
        ++i;
        element.textContent = i + ") " + aliber;
    })
}

// zvezda();

//func5
var num = 0;

function func5() {
    ++num;
    document.getElementById('c4es').textContent = num;
}


function func6(num, pow) {
    alert(Math.pow(num, pow));
}

// func6(2, 3);

function func7(str) {
    let libek2 = document.querySelectorAll(str);
    libek2.forEach(function (elem) {
        elem.style.textDecoration = "UnderLine";
    })
}

// func7('h1');

function func8() {
    var text = prompt('Введите возраст');
    if (text == undefined || text == null || text == '') {
        return func8();
    }
    if (text > 16) {
        alert('Добро пожаловать');
    } else {
        alert('вы ещё молоды');
    }
}

// func8();
function func10() {
    alert('Ошибка');
}

function func10(mass = Array()) {
    if (mass.length == 0) {
        alert('Ошибка');
    } else {
        alert('Длинна массива' + mass.length);
    }
}

var mass = Array(1, 2, 3, 4, 5, 6, 7);

// func10(mass);

function func11() {
    var a = prompt('Введите число');
    if (a >= 10) {
        return a * a;
    } else if (a < 7) {
        return 'Число меньше 7';
    } else if (a == 8 || a == 9) {
        return --a;
    }
}

// // alert(func11());
var textb = document.getElementById('tpers');
var butto = document.getElementById('rando');
var rand = getRandomInt(10);
butto.onclick(func12(butto,rand,textb,3));

function func12(butto, rand, textb, iter) {
    if (iter == 0){
        document.getElementById('opv').textContent = "Вы проиграли";
        return;
    }
    if (textb.value == rand) {
        document.getElementById('opv').textContent = "Вы выиграли";
        return;
    } else if (textb.value > rand) {
        document.getElementById('opv').textContent = "Ваше число больше";
        --iter;
        butto.value = "Кол-во попыток " + iter;
        butto.onclick(func12(butto,rand,textb,iter));
    } else if (textb.value < rand) {
        document.getElementById('opv').textContent = "Ваше число меньше";
        --iter;
        butto.value = "Кол-во попыток " + iter;
        butto.onclick(func12(butto,rand,textb,iter));

    }

}