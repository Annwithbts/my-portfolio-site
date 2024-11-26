class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  get Make() {
    return this.make;
  }

  set Make(make) {
    if (typeof make === "string" && make.trim() !== "") {
      this.make = make;
    } else {
      console.error("Invalid make");
    }
  }

  get Model() {
    return this.model;
  }

  set Model(model) {
    if (typeof model === "string" && model.trim() !== "") {
      this.model = model;
    } else {
      console.error("Invalid model");
    }
  }

  get Year() {
    return this.year;
  }

  set Year(year) {
    if (typeof year === "number" && year > 1885 && year <= new Date().getFullYear()) {
      this.year = year;
    } else {
      console.error("Invalid year");
    }
  }
}

class Car extends Vehicle {
  constructor(make, model, year, passengerCapacity) {
    super(make, model, year);
    this.passengerCapacity = passengerCapacity;
  }

  get PassengerCapacity() {
    return this.passengerCapacity;
  }

  set PassengerCapacity(capacity) {
    if (typeof capacity === "number" && capacity > 0) {
      this.passengerCapacity = capacity;
    } else {
      console.error("Invalid passenger capacity");
    }
  }
}

class Truck extends Vehicle {
  constructor(make, model, year, cargoCapacity) {
    super(make, model, year);
    this.cargoCapacity = cargoCapacity;
  }

  get CargoCapacity() {
    return this.cargoCapacity;
  }

  set CargoCapacity(capacity) {
    if (typeof capacity === "number" && capacity > 0) {
      this.cargoCapacity = capacity;
    } else {
      console.error("Invalid cargo capacity");
    }
  }
}

class VehicleInventory {
  constructor() {
    this.inventory = [];
  }

  addVehicle(vehicle) {
    if (this.inventory.length < 10) {
      this.inventory.push(vehicle);
      console.log(`Added to inventory: ${vehicle.Make} ${vehicle.Model}`);
    } else {
      console.error("Inventory is full! Cannot add more vehicles.");
    }
  }

  listVehicles() {
    console.log("\nInventory List:");
    this.inventory.forEach(vehicle => {
      console.log(
        `Make: ${vehicle.Make}, Model: ${vehicle.Model}, Year: ${vehicle.Year}`
      );
      if (vehicle instanceof Car) {
        console.log(`Passenger Capacity: ${vehicle.PassengerCapacity}`);
      }
      if (vehicle instanceof Truck) {
        console.log(`Cargo Capacity: ${vehicle.CargoCapacity}`);
      }
    });
  }
}

const inventory = new VehicleInventory();

function createVehicles() {
  const car1 = new Car("Toyota", "Camry", 2020, 5);
  const car2 = new Car("Honda", "Civic", 2021, 4);
  const car3 = new Car("BMW", "X5", 2022, 7);
  const car4 = new Car("Tesla", "Model S", 2023, 5);
  const car5 = new Car("Ford", "Fusion", 2020, 5);
  const truck1 = new Truck("Ford", "F-150", 2021, 1200);
  const truck2 = new Truck("Chevrolet", "Silverado", 2022, 1500);
  const truck3 = new Truck("RAM", "1500", 2023, 1800);
  const truck4 = new Truck("Nissan", "Titan", 2022, 1600);
  const truck5 = new Truck("GMC", "Sierra", 2023, 1400);

  return [car1, car2, car3, car4, car5, truck1, truck2, truck3, truck4, truck5];
}

function addVehiclesToInventory(vehicles) {
  vehicles.forEach(vehicle => inventory.addVehicle(vehicle));
} 

//to test the code
function testInventory() {
  const vehicles = createVehicles();

  addVehiclesToInventory(vehicles);

//try to change 
  vehicles[0].Make = "Lexus"; 
  vehicles[0].Model = "RX";
  vehicles[0].Year = 2023;
  vehicles[5].CargoCapacity = 2000; 
  inventory.listVehicles();
}

testInventory();
