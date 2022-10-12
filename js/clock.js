
function showTime() {

    let t=new Date();

    let hour=t.getHours();
    if (hour<10){
        hour="0"+ hour;
    }

    let minute=t.getMinutes();
    if (minute<10){
        minute="0"+ minute;
    }

    let second=t.getSeconds();
    if (second<10){
        second="0"+ second;
    }

    let day=t.getDay();
    if (day==1){
        day="Pzartesi";
    }
    else if (day==2){
        day="Salı";
    }
    else if (day==3){
        day="Çarşamba";
    }
    else if (day==4){
        day="Perşembe";
    }
    else if (day==5){
        day="Cuma";
    }
    else if (day==6){
        day="Cumartesi";
    }
    if (day==0){
        day="Pazar";
    }

    let time=document.querySelector("#myClock");
    time.innerHTML=hour + ":" + minute + ":" + second + " " + day;
    setTimeout(showTime, 1000);
}
showTime();



let myclock = document.querySelector("#myclock")
document.body.style.transition="all 0.8s"       //Body'nin geçiş hızı ( 1 = 1 saniyede yavaşça , 0 = anlık)
setInterval(() => {     //setInterval  aşağıdaki kod dizimlerini içeren Callback fonksiyon.(Belirli aralıklarla işlemleri yapar)
let d = new Date();  
let hours =d.getHours();
let mins =d.getMinutes();
let secs =d.getSeconds();
hours = hours < 10 ? "0" + hours : hours        //
mins = mins < 10 ? "0" + mins : mins            //  Eğer saat , dakika , saniye 10'dan küçükse başına 0 koyar
secs = secs < 10 ? "0" + secs : secs            //
clock.innerHTML = `${hours} : ${mins} : ${secs}`//  clock olarak seçtiğimiz elementin innerHTML'ini düzenler
clock.style.color =  `rgb(${hours*10},${mins*4},${secs*4})`    //clock elementinin style'ını düzenler
document.body.style.background = `rgba(${hours *10},${mins * 4  },${secs *  4 },0.85)`//body objesinin arkaplan rengini düzenler

}, 1000);   //yukarıdaki işlemleri 1000 ms aralıklarla tekrarlar.
 let day = document.querySelector("#text3")      //ID'si text3 olan ilk öğeyi seçer
var today = new Date();     //4. satırdakinin kardeşi
var dd = String(today.getDate()).padStart(2, '0');      //
 var mm = String(today.getMonth() + 1).padStart(2, '0'); //  5-10. satırlar arasındaki işlemin farklı yazım biçimi
var yyyy = today.getFullYear();                         //

today = mm + '/' + dd + '/' + yyyy;     //Basit String birleştirme (Template Literal kullanılmadan)

setTimeout(() => {  //setTimeout  aşağıdaki kod dizimlerini içeren Callback fonksiyon.
//(İşlemi belli miktar bekleyip 1 kere yapar)
  day.innerHTML = today //+ " tarihinde"    //Basit string birleştirme
}, 3000);   //yukarıdaki işlemi 3000 ms sonra gerçekleştir.

let getName = prompt("Lütfen adınızı girin.")           //kullanıcıdan adını alır ve değişkene atar
 let selectName = document.querySelector("#myName")      //ID'si myName olan ilk öğeyi seçer
 selectName.innerHTML = `${getName? getName : "Kullani Bilginiz Bulunamadi :("}`
 
 

 

