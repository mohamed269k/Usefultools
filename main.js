
function myFunction() {
  var x = document.getElementById("myText").value;
  var y = x * 0.025;
  
  var roundedvalue = y.toFixed(2) +  " درهم"
  document.getElementById("demo").innerHTML = roundedvalue;
  if (x < 25500 && x > 0) {
    document.getElementById("demo").innerHTML = ""
    document.getElementById("myparag2").innerHTML = "الزكاة غير مفروضة عليك"
    setTimeout(clearform, 3000)
    
  }
  if (x < 1) {
    clearresult()
    deleteinvald()
  }
}
function deleteinvald() {
  document.getElementById("myparag1").innerHTML = "غلط، عليك إدخال قيمة رقمية"
  setTimeout(clearform, 3000)
  //document.getElementById("demo").innerHTML = ""
}
function clearform() {
  document.getElementById("demo").innerHTML = "";
  document.getElementById("myText").value = "";
  document.getElementById("myparag1").innerHTML = "";
  document.getElementById("myparag2").innerHTML = "";
}

function clearresult() {
  document.getElementById("demo").innerHTML = ""
}
// Date object
const date = new Date();

let currentDay= String(date.getDate()).padStart(2, '0');

let currentMonth = String(date.getMonth()+1).padStart(2,"0");

let currentYear = date.getFullYear();

// we will display the date as DD-MM-YYYY 

let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;

jQuery(function($) {
  var datetiming = currentDate
  document.getElementById("prayerdisplay").innerHTML = datetiming
  $.getJSON('https://muslimsalat.com/rabat/' + datetiming + '/daily.json?key=9d265db826f40259089e991b4fd2a766&jsoncallback=?', function(times)
  {
    $('.prayerTimesExample')
      .append('<h1 id="salath1o">اوقات الصلاة في الرباط '+ times.title + '</h1>')
      .append('<h3 id="salatuk">Fajr: ' + times.items[0].fajr + '</h3>')
      .append('<h3 id="salatuk">Dhuhr: ' + times.items[0].dhuhr + '</h3>')
      .append('<h3 id="salatuk">Asr: ' + times.items[0].asr + '</h3>')
      .append('<h3 id="salatuk">Maghrib: ' + times.items[0].maghrib + '</h3>')
      .append('<h3 id="salatuk">Isha: ' + times.items[0].isha + '</h3>')
  });
});
function myFunction16() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
