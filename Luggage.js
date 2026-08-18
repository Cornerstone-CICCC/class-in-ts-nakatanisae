export class Luggage {
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
