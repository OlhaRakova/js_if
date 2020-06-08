function resul1(){
    var n1, n2, result;
    n1 =  document.getElementById('a1').value;
    n2  =  document.getElementById('a2').value;

    if(n1>n2){
        result=n1;
    }
    else{
        result=n2;
    }
    document.getElementById('result1').innerHTML = result;
}
function resul2(){
    var n1, n2, result;
    n1 =  document.getElementById('b1').value;
    n2  =  document.getElementById('b2').value;
    n3  =  document.getElementById('b3').value;

    if(n1>n2 && n2>n3){
        result=n1;
    }
    else if (n2>n1 && n2>n3){
        result=n2;
    }
    else{
        result=n3;
    }
    document.getElementById('result2').innerHTML = result;
}
function resul3(){
    var n1, n2, result;
    n1 =  document.getElementById('x').value;
    n2  =  document.getElementById('y').value;

    if(n1>0 && n2>0 && n1!=0 && n2!=0){
        result="1 четверть";
    }
    else if (n1<0 && n2>0 && n1!=0 && n2!=0){
        result="2 четверть";
    }
    else if (n1<0 && n2<0 && n1!=0 && n2!=0){
        result="3 четверть";
    }
    else if (n1>0 && n2<0 && n1!=0 && n2!=0){
        result="4 четверть";
    }
    else{
        result="Ошибка";
    }
    document.getElementById('result3').innerHTML = result;
}
function resul4(){
    var n1, n2, result_1, result_2;
    n1  =  document.getElementById('k').value;
   n2  =  document.getElementById('l').value;

    if (parseInt(n1)==n1 && parseInt(n2)==n2){
        if(n1!=n){
            if(n1>n2){
                n2=n1;
            }
            else{
                n1=n2;
            }
        }
        else{
            n1=0;
            n2=0;
        }
    }
    else if (parseInt(n1)!=n1 && parseInt(n2)==n2){
        n1='Не целое число';
    }
    else if (parseInt(n1)==n1 && parseInt(n2)!=n2){
        n2='Не целое число';
    }
    else{
        n1='Не целое число';
        n2='Не целое число';
    }

    result_1=n1
    result_2=n2
    document.getElementById('resultn4_1').innerHTML = result_1;
    document.getElementById('resultn4_2').innerHTML = result_2;
}
function resul5(){
    var n1, result;
    n1  =  document.getElementById('c1').value;

    if (parseInt(n1)==n1){
        if(n1>=10 && n1<100){
            if(n1%2==0){
                result='Двузначное четное число';
            }
            else{
                result='Двузначное нечетное число';
            }
        }
        else{
            if(n1%2==0){
                result='Недвузначное четное число';
            }
            else{
                result='Недвузначное нечетное число';
            }
        }
    }
    else{
        result='Не целое число'
    }
    document.getElementById('result5').innerHTML = result;
}
function resul6(){
    var n1, result;
    n1  =  document.getElementById('c2').value;
    if (n1>0){
        if (n1%2==0 && n1%3==0){
            result='Число кратно 2 и 3 ';
        }
        else if (n1%2==0 && n1%5!=0){
            result='Число кратно 2 и не кратно 5';
        }
        else if (n1<3){
            result='Число Є (0;3)';
        }
        else{
            result='Ошибка';
        }
    }
    else if (n1>=-2 && n1<=0){
        result='Число [-2;0]';
    }
    else {
        result='Ошибка';
    }
    document.getElementById('result6').innerHTML = result;
}
function resul8(){
    var number, result;
    number  =  document.getElementById('a').value;
    if (number>=100 && number<1000){
        if ((number-number%100)/100==number%10){
            result='Трехзначное число полиндром';
        }
        else{
            result='Трехзначное число не полиндром';
        }
    }
    else {
        result='Ошибка';
    }
    document.getElementById('result_multi_8').innerHTML = result;
}
function resul9(){
    var n1, n2, result;
    n1  =  document.getElementById('hour').value;
    n2  =  document.getElementById('minute').value;
    if (n1>=0 && n1<24 && n2>=0 && n2<60){
        if (n1>6 && n1<12){
            result='Доброе утро'
        }
        else if (n1>=12 && n1<18){
            result='Добрый день';
        }
        else if (n1>=18 && n1<24){
            result='Добрый вечер';
        }
        else{
            result='Спокойной ночи';
        }
    }
    else {
        result='Ошибка'
    }
    document.getElementById('result_multi_9').innerHTML = result;
}
function resul10(){
    var number, result;
    number  =  document.getElementById('num').value;
    if (number%10==5){
        result='исло заканчивается на 5 => делится на 5';
        }
    else if (number%10==0){
        result='число заканчивается на 0, => делится на 5';
    }
    else {
        result=' не делится на 5';
    }
    document.getElementById('result_multi_10').innerHTML = result;
}

function resul11(){
    var a, b, c, d, result;
    a  =  document.getElementById('x_1').value;
    b  =  document.getElementById('y_1').value;
    c  =  document.getElementById('z_1').value;
    d  =  document.getElementById('a_1').value;

    if(a<d && b<d){
        result='Кирпич пройдет';
    }
    else if (a<d && c<d){
        result='Кирпич пройдет';
    }
    else if (b<d && c<d){
        result='Кирпич пройдет';
    }
    else if ((a>=d && b>=d) || (a>=d && c>=d) || (b>=d && c>=d)){
        result ='Кирпич не пройдет';
    }
    document.getElementById('result_multi_11').innerHTML = result;
}

function resul12(){
    var a, b, result;
    a  =  document.getElementById('x_2').value;
    b  =  document.getElementById('y_2').value;

    if(a>0){
        if (a>b){
            result=a;
        }
        else {
            result=b;
        }
    }
    else if (a<=0) {
        if (a<b){
            result=a;
        }
        else {
            result=b;
        }
    }
    document.getElementById('result_multi_12').innerHTML = result;
}

function resul13(){
    var a, b, c, d, result_a, result_b;
    a  =  document.getElementById('x_3').value;
    b  =  document.getElementById('y_3').value;
    
    c=a;
    d=b;

    if (a>b){
        b=c/2+d/2;
        a=c*d;
        result_a=a;
        result_b=b;
    }
    else {
        a=c/2+d/2;
        b=c*d;
        result_b=b;
        result_a=a;
        }
    document.getElementById('result_multi_13_1').innerHTML = result_a;
    document.getElementById('result_multi_13_2').innerHTML = result_b;
}

function resul14(){
    var a, b, result;
    a  =  document.getElementById('x_4').value;
    b  =  document.getElementById('y_4').value;

    if (a%2==0){
        if (a>b){
            result=a;
        }
        else{
            result=b;
        }
    }
    else {
        result=a/2+b/2
        }
    document.getElementById('result_multi_14').innerHTML = result;
}

function resul15(){
    var a, b, result_ed, result_ost;
    a  =  document.getElementById('p_15').value;
    b  =  document.getElementById('t_15').value;

    if (a>b){
        result_ed=a%10;
        result_ost=result_ed%3;
    }
    else {
        result_ed=b%10;
        result_ost=result_ed%3;
    }
    document.getElementById('result_multi_15_1').innerHTML = result_ed;
    document.getElementById('result_multi_15_2').innerHTML = result_ost;    
}