/**
 * Oregon Trail-----------------------------------------------------------
 * Test Code is in tests.js
 */



// Create your Classes here.
class Traveler{
    constructor(name){
        this.name = name;
        this.food = 1;
        this.isHealthy = true;
    }

hunt() {
    return this.food += 2;
}
eat(){
    if(this.food <= 0){
    this.isHealthy = false;
    return this.food;
        }
return this.food -= 1;
    }
}

class Hunter extends Traveler{
    constructor(name, food = 2, isHealthy = true){
    super(name);
    this.food = food;
    this.isHealthy = isHealthy;
    }

Hunt(){
    this.food += 5;
    return this.food;
}

eat(){
    if(this.food >= 2){
        this.food -= 2;
    } else if (this.food === 1){
        this.food -= 1;
        this.isHealthy = false
    } else if (this.food <= 0){
        this.food = 0;
        this.isHealthy = false
    }
}

giveFood(traveler, unitsOfFood){
    if (this.food >= unitsOfFood){
        this.food -= unitsOfFood
        traveler.food += unitsOfFood
        }
    }
}

class Doctor extends Traveler{
    constructor (name){
        super (name)
        this.isHealthy = true
        this.food = 1
    }
    heal(traveler){
        if(traveler.isHealthy === false){
            return traveler.isHealthy = true
        }
    }
}



class Wagon{
    constructor(capacity){
        this.capacity = capacity;
        this.passengers = [];

    }
    getAvailableSeatNo(){
        let availableSeatNo = this.capacity - this.passengers.length
        return availableSeatNo
    }
    join (Traveler){
        if(this.getAvailableSeatNo() > 0){
            this.passengers.push(Traveler)
            console.log(`${Traveler.name}is climbing on the wagon!`)
         }else{console.log("The wagon is overencumbered!")}
    }
}

shouldQuarantine(){
    for(let i = 0; i < this.passengers.length; i += 1){
        let Traveler = this.passengers[i]
        if (Traveler.isHealthy === false){
            return true
        }
    }return false
}

/*totalFood(){
    let foodTotal = 0
    for (let i = 0; i < this.passengers.length; i += 1){
        let traveler = this.passengers[i].food
            foodTotal += traveler;
}return foodTotal
}
