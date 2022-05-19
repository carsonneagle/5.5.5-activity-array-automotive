//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

class Car extends VehicleModule.Vehicle {
	constructor (make, model, year, color, milage) {
		super (make, model, year, color, milage)
		this.maximumPassengers = 5
		this.passenger = 0
		this.numberOfWheels = 4
		this.maximumSpeed = 160
		this.fuel = 10
		this.needsService = false
	}

	loadPassenger(num) {
		if (this.passenger + num <= this.maximumPassengers) {
			this.passenger += num
		}

		return this.passenger
	}

	start() {
		if (this.fuel > 0) {
			this.started = true
		} else {
			this.started = false
		}

		return this.started
	}

	scheduleService(milage) {
		if (milage > 30000) {
			this.needsService = true
		} else {
			this.needsService = false
		}

		return this.needsService
	}
}

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make) 
console.log(v.make)

let c = new Car("Honda", "Accord", "2001", "White", 25000)
console.log(c.scheduleService(c.mileage))
c.mileage += 10000
console.log(c.scheduleService(c.mileage))

console.log(c.start())

for (let i = 0; i < 3; i++) {
	console.log(c.loadPassenger(2))
}