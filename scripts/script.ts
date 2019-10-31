class Place {
    name : string;
    city : string;
    zip : number;
    address : string;
    img : string;

    constructor(name : string, city : string, zip : number, address : string, img:string= "../img/bock.jpg") {
        this.name = name;
        this.city = city;
        this.zip = zip;
        this.address = address;
        this.img = img;
    }
    display () {
        let output = document.getElementById("output");
        output.innerHTML += 
        `
            <div class="box">
                <p>${this.constructor.name}</p>
                <h2>${this.city}</h2>
                <img src="${this.img}">
                <p>${this.name}</p>
                <p>${this.address}</p>
                <p>${this.zip}</p>
            </div>
        `;
    }
}


class Restaurant extends Place{

    telNumber : number;
    type : string;
    web : string; 

    constructor(name: string, city : string, zip : number, address : string, img : string, telNumber : number, type : string, web : string) {

    super(name, city, zip, address, img);
    this.telNumber = telNumber;
    this.type = type;
    this.web = web;
    }

    display () {
        let output = document.getElementById("output");
        output.innerHTML += 
        `
            <div class="box">
                <p>${this.constructor.name}</p>
                <h2>${this.city}</h2>
                <img src="${this.img}">
                <p>${this.name}</p>
                <p>${this.type}</p>
                <p>${this.address}</p>                
                <p>${this.zip}</p>
                <p>${this.telNumber}</p>
                <p>${this.web}</p>
            </div>
        `;
    }

}

class Events extends Place {

    eventDate : string;
    eventTime : string;
    eventPrice: number;

    constructor(name: string, city : string, zip : number, address : string, img : string, eventDate : string, eventTime : string, eventPrice : number) {
    
    super(name, city, zip, address, img);
    this.eventDate = eventDate;
    this.eventTime = eventTime;
    this.eventPrice = eventPrice;
    }

    display () {
        let output = document.getElementById("output");
        output.innerHTML += 
        `
            <div class="box">
                <p>${this.constructor.name}</p>
                <h2>${this.city}</h2>
                <img src="${this.img}">
                <p>${this.name}</p>
                <p>${this.eventDate}</p>
                <p>${this.address}</p>                
                <p>${this.zip}</p>
                <p>${this.eventTime}</p>
                <p>${this.eventPrice}</p>
            </div>
        `;
    }
}

function createForm() {
    let button:HTMLButtonElement = document.getElementById("add");
    let select:Element = document.querySelector("#what");
    let form: HTMLElement = document.getElementById("inputform");
    button.addEventListener("click", function(){
        if (select.value == "Place") {
            form.innerHTML = `
            <input id ="name" placeholder="Name" type="text"><br>
            <input id ="city" placeholder="City" type="text"><br>
            <input id ="zip" placeholder="ZIP" type="number"><br>
            <input id ="address" placeholder="Address" type="text"><br>
            <button id="submit">Submit</button>
            `
        }
        if (select.value == "Restaurant") {
            form.innerHTML = `
            <input id ="name" placeholder="Name" type="text"><br>
            <input id ="city" placeholder="City" type="text"><br>
            <input id ="zip" placeholder="ZIP" type="number"><br>
            <input id ="address" placeholder="Address" type="text"><br>
            <input id ="telnumber" placeholder="Phone number" type="number"><br>
            <input id ="type" placeholder="Type" type="text"><br>
            <input id ="web" placeholder="Webpage" type="text"><br>
            <button id="submit">Submit</button>
            `
        }
        if (select.value == "Events") {
            form.innerHTML = `
            <input id ="name" placeholder="Name" type="text"><br>
            <input id ="city" placeholder="City" type="text"><br>
            <input id ="zip" placeholder="ZIP" type="number"><br>
            <input id ="address" placeholder="Address" type="text"><br>
            <input id ="date" placeholder="Event Date" type="text"><br>
            <input id ="time" placeholder="Event Time" type="text"><br>
            <input id ="price" placeholder="Ticket Price" type="number"><br>
            <button id="submit">Submit</button>
            `
        }
        let submit:HTMLElement = document.getElementById("submit");
        submit.addEventListener("click", function(){
            createNewPlace(select.value)
        })
    })
}

function createNewPlace(type:string){
    switch(type) {
        case "Place" :
            data.push(
                new Place(
                    document.getElementById('name').value,
                    document.getElementById("city").value,
                    document.getElementById("zip").value,
                    document.getElementById("address").value
                )
            )
            break;

        case "Restaurant" :
            data.push(
                new Restaurant(
                    document.getElementById('name').value,
                    document.getElementById("city").value,
                    document.getElementById("zip").value,
                    document.getElementById("address").value,
                    undefined,
                    document.getElementById("telnumber").value,
                    document.getElementById("type").value,
                    document.getElementById("web").value
                )
            )
        break;

        case "Events" :
            data.push(
                new Events(
                    document.getElementById('name').value,
                    document.getElementById("city").value,
                    document.getElementById("zip").value,
                    document.getElementById("address").value,
                    undefined,
                    document.getElementById("date").value,
                    document.getElementById("time").value,
                    document.getElementById("price").value
                )
            )
            break;
    }
    document.getElementById("inputform").innerHTML = ``
    displayAll()
    createForm()    
}
 
let data:Place[] = [
    new Restaurant("Bock", "Villany", 7722, "Batthyany Lajos u. 22", "../img/bock.jpg", 24646, "Hungarian", "www.bock.hu"),
    new Restaurant("Vapiano", "Vienna", 1010, "Kartnerstrasse 10", "../img/bock.jpg", 56545, "Italian", "www.vapiano.at"),
    new Events("Bock", "Villany", 7722, "Batthyany Lajos u. 22", "../img/bock.jpg", "01.01.2019", "18:00", 100 ),
    new Events("Go-kart race", "London", 2456, "Church street 5.", "../img/bock.jpg", "01.11.2021", "12:00", 38),
    new Place("Home", "Vienna", 1170, "Kettenbruckengasse 4.", "../img/bock.jpg"),
    new Place("Something", "Somewhere", 1170, "Staphansplacc 1", "../img/bock.jpg")
] 

function displayAll() {
    document.getElementById('output').innerHTML = ""
    data.forEach(item=> {
        item.display()
    }) 
}
displayAll()
createForm()