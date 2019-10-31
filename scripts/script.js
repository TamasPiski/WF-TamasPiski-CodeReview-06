var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Place = /** @class */ (function () {
    function Place(name, city, zip, address, img) {
        if (img === void 0) { img = "../img/bock.jpg"; }
        this.name = name;
        this.city = city;
        this.zip = zip;
        this.address = address;
        this.img = img;
    }
    Place.prototype.display = function () {
        var output = document.getElementById("output");
        output.innerHTML +=
            "\n            <div class=\"box\">\n                <p>" + this.constructor.name + "</p>\n                <h2>" + this.city + "</h2>\n                <img src=\"" + this.img + "\">\n                <p>" + this.name + "</p>\n                <p>" + this.address + "</p>\n                <p>" + this.zip + "</p>\n            </div>\n        ";
    };
    return Place;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(name, city, zip, address, img, telNumber, type, web) {
        var _this = _super.call(this, name, city, zip, address, img) || this;
        _this.telNumber = telNumber;
        _this.type = type;
        _this.web = web;
        return _this;
    }
    Restaurant.prototype.display = function () {
        var output = document.getElementById("output");
        output.innerHTML +=
            "\n            <div class=\"box\">\n                <p>" + this.constructor.name + "</p>\n                <h2>" + this.city + "</h2>\n                <img src=\"" + this.img + "\">\n                <p>" + this.name + "</p>\n                <p>" + this.type + "</p>\n                <p>" + this.address + "</p>                \n                <p>" + this.zip + "</p>\n                <p>" + this.telNumber + "</p>\n                <p>" + this.web + "</p>\n            </div>\n        ";
    };
    return Restaurant;
}(Place));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, city, zip, address, img, eventDate, eventTime, eventPrice) {
        var _this = _super.call(this, name, city, zip, address, img) || this;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.eventPrice = eventPrice;
        return _this;
    }
    Events.prototype.display = function () {
        var output = document.getElementById("output");
        output.innerHTML +=
            "\n            <div class=\"box\">\n                <p>" + this.constructor.name + "</p>\n                <h2>" + this.city + "</h2>\n                <img src=\"" + this.img + "\">\n                <p>" + this.name + "</p>\n                <p>" + this.eventDate + "</p>\n                <p>" + this.address + "</p>                \n                <p>" + this.zip + "</p>\n                <p>" + this.eventTime + "</p>\n                <p>" + this.eventPrice + "</p>\n            </div>\n        ";
    };
    return Events;
}(Place));
function createForm() {
    var button = document.getElementById("add");
    var select = document.querySelector("#what");
    var form = document.getElementById("inputform");
    button.addEventListener("click", function () {
        if (select.value == "Place") {
            form.innerHTML = "\n            <input id =\"name\" placeholder=\"Name\" type=\"text\"><br>\n            <input id =\"city\" placeholder=\"City\" type=\"text\"><br>\n            <input id =\"zip\" placeholder=\"ZIP\" type=\"number\"><br>\n            <input id =\"address\" placeholder=\"Address\" type=\"text\"><br>\n            <button id=\"submit\">Submit</button>\n            ";
        }
        if (select.value == "Restaurant") {
            form.innerHTML = "\n            <input id =\"name\" placeholder=\"Name\" type=\"text\"><br>\n            <input id =\"city\" placeholder=\"City\" type=\"text\"><br>\n            <input id =\"zip\" placeholder=\"ZIP\" type=\"number\"><br>\n            <input id =\"address\" placeholder=\"Address\" type=\"text\"><br>\n            <input id =\"telnumber\" placeholder=\"Phone number\" type=\"number\"><br>\n            <input id =\"type\" placeholder=\"Type\" type=\"text\"><br>\n            <input id =\"web\" placeholder=\"Webpage\" type=\"text\"><br>\n            <button id=\"submit\">Submit</button>\n            ";
        }
        if (select.value == "Events") {
            form.innerHTML = "\n            <input id =\"name\" placeholder=\"Name\" type=\"text\"><br>\n            <input id =\"city\" placeholder=\"City\" type=\"text\"><br>\n            <input id =\"zip\" placeholder=\"ZIP\" type=\"number\"><br>\n            <input id =\"address\" placeholder=\"Address\" type=\"text\"><br>\n            <input id =\"date\" placeholder=\"Event Date\" type=\"text\"><br>\n            <input id =\"time\" placeholder=\"Event Time\" type=\"text\"><br>\n            <input id =\"price\" placeholder=\"Ticket Price\" type=\"number\"><br>\n            <button id=\"submit\">Submit</button>\n            ";
        }
        var submit = document.getElementById("submit");
        submit.addEventListener("click", function () {
            createNewPlace(select.value);
        });
    });
}
function createNewPlace(type) {
    switch (type) {
        case "Place":
            data.push(new Place(document.getElementById('name').value, document.getElementById("city").value, document.getElementById("zip").value, document.getElementById("address").value));
            break;
        case "Restaurant":
            data.push(new Restaurant(document.getElementById('name').value, document.getElementById("city").value, document.getElementById("zip").value, document.getElementById("address").value, undefined, document.getElementById("telnumber").value, document.getElementById("type").value, document.getElementById("web").value));
            break;
        case "Events":
            data.push(new Events(document.getElementById('name').value, document.getElementById("city").value, document.getElementById("zip").value, document.getElementById("address").value, undefined, document.getElementById("date").value, document.getElementById("time").value, document.getElementById("price").value));
            break;
    }
    document.getElementById("inputform").innerHTML = "";
    displayAll();
    createForm();
}
var data = [
    new Restaurant("Bock", "Villany", 7722, "Batthyany Lajos u. 22", "../img/bock.jpg", 24646, "Hungarian", "www.bock.hu"),
    new Restaurant("Vapiano", "Vienna", 1010, "Kartnerstrasse 10", "../img/bock.jpg", 56545, "Italian", "www.vapiano.at"),
    new Events("Bock", "Villany", 7722, "Batthyany Lajos u. 22", "../img/bock.jpg", "01.01.2019", "18:00", 100),
    new Events("Go-kart race", "London", 2456, "Church street 5.", "../img/bock.jpg", "01.11.2021", "12:00", 38),
    new Place("Home", "Vienna", 1170, "Kettenbruckengasse 4.", "../img/bock.jpg"),
    new Place("Something", "Somewhere", 1170, "Staphansplacc 1", "../img/bock.jpg")
];
function displayAll() {
    document.getElementById('output').innerHTML = "";
    data.forEach(function (item) {
        item.display();
    });
}
displayAll();
createForm();
