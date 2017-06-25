function Phone(brand, price, color, RAM) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.RAM = RAM;
}

Phone.prototype.printInfo = function () {
    console.log("The phone brand is " + this.brand + " and the price is " + this.price + ", color is " + this.color + ", weight is " + this.RAM + ".");
}

var iPhone6S = new Phone('Apple', 2800, 'gold', 2 + 'GB');
iPhone6S.printInfo();

var SamsungGalaxy6 = new Phone('Samsung', 1800, 'white', 3 + 'GB');
SamsungGalaxy6.printInfo();

var OnePlusOne = new Phone('OnePlus', 1500, 'black', 3 + 'GB');
OnePlusOne.printInfo();

var LgK10 = new Phone('LG', 800, "grey", 2 + 'GB')
LgK10.printInfo();