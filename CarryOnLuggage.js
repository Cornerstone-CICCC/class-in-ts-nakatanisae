import { Luggage } from './Luggage.js';
export class CarryOnLuggage extends Luggage {
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
