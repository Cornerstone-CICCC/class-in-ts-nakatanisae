"use strict";
var Priority;
(function (Priority) {
    Priority["Normal"] = "Normal";
    Priority["Priority"] = "Priority";
    Priority["Urgent"] = "Urgent";
})(Priority || (Priority = {}));
class Luggage {
    weight;
    description;
    priority;
    fee = 5.20;
    constructor(weight, description, priority) {
        this.weight = weight;
        this.description = description;
        this.priority = priority;
    }
    getWeight() {
        return this.weight;
    }
    setWeight(weight) {
        this.weight = weight;
    }
    getDescription() {
        return this.description;
    }
    getPriority() {
        return this.priority;
    }
    getInsuranceValue() {
        return 0;
    }
    setInsuranceValue(value) {
        throw new Error("Insurance is only applicable to fragile luggage.");
    }
}
class RegularLuggage extends Luggage {
    constructor(weight, description, priority) {
        super(weight, description, priority);
    }
    getPrice() {
        if (this.weight <= 23) {
            return 0;
        }
        ;
        const extraWeight = this.weight - 23;
        switch (this.priority) {
            case Priority.Normal:
                return this.fee * extraWeight;
            case Priority.Priority:
                return this.fee * 5 * extraWeight;
            case Priority.Urgent:
                return this.fee * 10 * extraWeight;
            default:
                return 0;
        }
    }
    toString() {
        return `${this.description} (Regular)`;
    }
}
class FragileLuggage extends Luggage {
    insurance;
    constructor(weight, description, priority, insurance) {
        super(weight, description, priority);
        this.insurance = insurance;
    }
    getInsuranceValue() {
        return this.insurance;
    }
    setInsuranceValue(value) {
        this.insurance = value;
    }
    getPrice() {
        switch (this.priority) {
            case Priority.Normal:
                return this.insurance;
            case Priority.Priority:
                return this.insurance + this.fee * 5;
            case Priority.Urgent:
                return this.insurance + this.fee * 10;
            default:
                return 0;
        }
    }
    toString() {
        return `${this.description} (Fragile) - Insurance: ${this.insurance}`;
    }
}
class CarryOnLuggage extends Luggage {
    constructor(weight, description, priority) {
        super(weight, description, priority);
    }
    getPrice() {
        const extraWeightCarry = this.weight - 5;
        if (this.weight <= 5) {
            return 0;
        }
        else {
            return this.fee * 3 * extraWeightCarry;
        }
        ;
    }
    toString() {
        return `${this.description} (Carry-on)`;
    }
}
//test
const fragileLuggage = new FragileLuggage(10, "Box with fragile items", Priority.Normal, 100);
const regularLuggage = new RegularLuggage(30, "Luggage full of clothes", Priority.Priority);
const carryOnLuggage = new CarryOnLuggage(6, "Luggage with personal items", Priority.Urgent);
// const list = new ListOfLuggages();
// list.insertLuggage(fragileLuggage);
// list.insertLuggage(regularLuggage);
// list.printAllLuggages();
// list.priceOfEachLuggage();
// console.log(list.totalPrice());
// console.log(list.getFragileLuggageWithInsurance());
