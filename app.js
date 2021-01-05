class Car {
 constructor(
    brand, 
    model, 
    color, 
    coupe, 
    xenon) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.coupe = coupe;
        this.xenon = xenon;
    }
}

car1 = new Car ("Seat", "Whatever", "Blue", false, true);
car2 = new Car ("Volvo", "V1", "Green", false, false);


console.log(car1.color);
