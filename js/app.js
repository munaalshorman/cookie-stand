
"use strict"
var hours = ["6am ", '7am ', '8am', '9am', '10am', '11am', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];
var footerRow;
//Shops Object
function Shops(location, min, max, avgCookieSale) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.avgCookieSale = avgCookieSale;
    this.dailySales = 0;
    this.hourlySales = [];
    this.randomCust();
    this.hourlyDailySales();
    // this.renderheaderrow(table);
    // this.rowDataRender();
}
//random number
Shops.prototype.randomCust = function () {
    var range = this.max - this.min;
    var randomCount = Math.random() * range + this.min;
    return Math.ceil(randomCount);

}

Shops.prototype.hourlyDailySales = function () {
    for (var i = 0; i < hours.length; i++) {
        var numOfCookies = Math.ceil(this.randomCust() * this.avgCookieSale);
        this.hourlySales.push(numOfCookies);
        this.dailySales += numOfCookies;
    }

}

//shoplistArray
var shop = [];
shop.push(new Shops('seattle', 23, 65, 6.3));
shop.push(new Shops('tokyo', 3, 24, 1.2));
shop.push(new Shops('dubai', 11, 38, 3.7));
shop.push(new Shops('paris', 20, 38, 2.3));
shop.push(new Shops('lima', 2, 16, 4.6));




//randor shops
///table
var container = document.getElementById('cookiesshops');
var table = document.createElement('table');
container.appendChild(table);

//header row 
function headerRowFunction() {
    var headerRow = document.createElement('tr');
    table.appendChild(headerRow);
    var th = document.createElement('th');
    headerRow.appendChild(th);
    th.textContent = '';
    for (var i = 0; i < hours.length; i++) {
        var th = document.createElement('th');
        headerRow.appendChild(th);
        th.textContent = hours[i];
    }
    var th = document.createElement('th');
    headerRow.appendChild(th);
    th.textContent = 'Daily Location Total';
}



////row data
function dataRowFunction() {

    for (var shopindex = 0; shopindex < shop.length; shopindex++) {
        var currentShop = shop[shopindex];
        var shoprow = document.createElement('tr');
        table.appendChild(shoprow);
        var shopTd = document.createElement('td');
        shoprow.appendChild(shopTd);
        shopTd.textContent = currentShop.location;


        for (var cellIndex = 0; cellIndex < hours.length; cellIndex++) {
            var dataIn = document.createElement('td');
            shoprow.appendChild(dataIn);
            dataIn.textContent = currentShop.hourlySales[cellIndex];

        }

        // totaly daily sales
        shopTd = document.createElement('td');
        shoprow.appendChild(shopTd);
        shopTd.textContent = currentShop.dailySales;
    }

}



//footer Row
function footerRowFunction() {

    var footerRowtr = document.createElement('tr');
    footerRow = footerRowtr;
    table.appendChild(footerRowtr);
    var td = document.createElement('td');
    footerRowtr.appendChild(td);
    td.textContent = 'Totals';
    // tatal for every day
    var megaTotalSalesCookies = 0;
    for (var hourIndex = 0; hourIndex < hours.length; hourIndex++) {
        var td = document.createElement('td');
        footerRowtr.appendChild(td);
        var sum = 0;
        for (var shopIndexCell = 0; shopIndexCell < shop.length; shopIndexCell++) {
            var currentShop = shop[shopIndexCell];

            sum += currentShop.hourlySales[hourIndex];
        }
        // sum all totals
        td.textContent = sum;
        megaTotalSalesCookies += sum;
    }
    var td = document.createElement('td');
    footerRowtr.appendChild(td);
    td.textContent = megaTotalSalesCookies;

}
headerRowFunction(table);
dataRowFunction(table);
footerRowFunction(table);




function renderNewRow() {
    var tr = document.createElement('tr');
    table.appendChild(tr);
    var td = document.createElement('td');
    tr.appendChild(td);
    var currentShop =shop[shop.length-1];
    console.log(currentShop);
    td.textContent = currentShop.location;
    //
    for (var cellIndex = 0; cellIndex < hours.length; cellIndex++) {
        var data = document.createElement('td');
        tr.appendChild(data);
        data.textContent = currentShop.hourlySales[cellIndex];

    }
      // totaly daily sales
     var td = document.createElement('td');
      tr.appendChild(td);
      td.textContent = currentShop.dailySales;
  }



/////////////////Form//////////////////////




//shopsForm.addEventListener('submit',submitHandler(event));
function submitHandler(event) {
    event.preventDefault();

    var location = event.target.location.value;
    var min = parseInt(event.target.min.value);
    var max = parseInt(event.target.max.value);
    var avg = parseFloat(event.target.avg.value);

    var newShop = new Shops(location, min, max, avg);
    //console.log(newShop);

    shop.push(newShop);
    // dataRowFunction(table);
    // console.log(newShop);
    table.removeChild(footerRow);

    // dataRowFunction();

    renderNewRow();
    footerRowFunction();


}

var shopsForm = document.getElementById("CookiesShopForm"); //with html
shopsForm.addEventListener('submit', submitHandler);
