"use strict"
 var hours=["6am:" ,'7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: '];
//seattle
var seattleCookies = {
    location: 'seattle',
    minCust: 23,
    maxCust: 65,
    avgCookieSale: 6.3,

   custPerHr :function () {
         var custemerPerHour=Math.ceil(Math.random() * ((this.maxCust) - (this.minCust)) + this.minCust);
         return custemerPerHour;
      },
    cookiesPerHr :function () {
        var numOfCookies= Math.ceil(this.avgCookieSale * this.custPerHr())
        return numOfCookies;
      },
    
    
    };
    var seattlecookiesPerHrArr= [];
    for (var i=0;i<hours.length;i++){
        seattlecookiesPerHrArr.push(seattleCookies.cookiesPerHr())
    }
    var seatleTotal=0;
    for (i=0;i<hours.length;i+1){
     seatleTotal =seatleTotal+seattlecookiesPerHrArr[i]
    }
    
    
   // document.getElementByld('seattle');
  //  document.write(seattlecookiesPerHrArr);

 
//seattlecookies.calNumOfCookies(seattlecookies.minCust,seattlecookies.maxCust)


//Tokyo
var Tokyocookies={
    location:'Tokyo',
    minCust:3,
    maxCust:24,
    avgCookieSale:1.2,
    custPerHr :function () {
        var custemerPerHour=Math.ceil(Math.random() * ((this.maxCust) - (this.minCust)) + this.minCust);
        return custemerPerHour;
     },
   cookiesPerHr :function () {
       var numOfCookies= Math.ceil(this.avgCookieSale * this.custPerHr())
       return numOfCookies;
     },
   
   
}
var TokyocookiesPerHrArr= [];
for (var i=0;i<hours.length;i++){
    TokyocookiesPerHrArr.push(hours[i],Tokyocookies.cookiesPerHr())
}
var TokyoTotal=0;
    for (i=0;i<hours.length;i+1){
     TokyoTotal =TokyoTotal+TokyocookiesPerHrArr[i]
    }
document.write(TokyocookiesPerHrArr);
//Dubai
var DubaiCookies={
    location:'Dubai',
    minCust:11,
    maxCust:38,
    avgCookieSale:3.7,
    custPerHr :function () {
        var custemerPerHour=Math.ceil(Math.random() * ((this.maxCust) - (this.minCust)) + this.minCust);
        return custemerPerHour;
     },
   cookiesPerHr :function () {
       var numOfCookies= Math.ceil(this.avgCookieSale * this.custPerHr())
       return numOfCookies;
     },
   
   
}
var DubaicookiesPerHrArr= [];
for (var i=0;i<hours.length;i++){
    DubaicookiesPerHrArr.push(hours[i],DubaiCookies.cookiesPerHr())
}
var DubaiTotal=0;
    for (i=0;i<hours.length;i+1){
        DubaiTotal =DubaiTotal+DubaicookiesPerHrArr[i]
    }
document.write(DubaicookiesPerHrArr);
//Paris
var ParisCookies={
    location:'Paris',
    minCust:20,
    maxCust:38,
    avgCookieSale:2.3,
    custPerHr :function () {
        var custemerPerHour=Math.ceil(Math.random() * ((this.maxCust) - (this.minCust)) + this.minCust);
        return custemerPerHour;
     },
   cookiesPerHr :function () {
       var numOfCookies= Math.ceil(this.avgCookieSale * this.custPerHr())
       return numOfCookies;
     },
   
   
}
var PariscookiesPerHrArr= [];
for (var i=0;i<hours.length;i++){
    PariscookiesPerHrArr.push(hours[i],ParisCookies.cookiesPerHr())
}
var ParisTotal=0;
    for (i=0;i<hours.length;i+1){
        ParisTotal =ParisTotal+PariscookiesPerHrArr[i]
    }
document.write(PariscookiesPerHrArr);
//Lima
var LimaCookies={
    location:'Lima',
    minCust:2,
    maxCust:16,
    avgCookieSale:4.6,
    custPerHr :function () {
        var custemerPerHour=Math.ceil(Math.random() * ((this.maxCust) - (this.minCust)) + this.minCust);
        return custemerPerHour;
     },
   cookiesPerHr :function () {
       var numOfCookies= Math.ceil(this.avgCookieSale * this.custPerHr())
       return numOfCookies;
     },
   
     
}
var LimacookiesPerHrArr= [];
for (var i=0;i<hours.length;i++){
    LimacookiesPerHrArr.push(hours[i],LimaCookies.cookiesPerHr())
}
var LimaTotal=0;
    for (i=0;i<hours.length;i+1){
        LimaTotal =LimaTotal+LimacookiesPerHrArr[i]
    }
document.write(LimacookiesPerHrArr);
