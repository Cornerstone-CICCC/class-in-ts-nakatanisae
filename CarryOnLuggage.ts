import { Luggage } from './Luggage.js';
import { Priority } from './Priority.js';

export class CarryOnLuggage extends Luggage {
    constructor(weight: number, description: string, priority: Priority) {
        super(weight, description, priority)
    }

    getPrice(): number {
        const extraWeightCarry = this.weight - 5

        if (this.weight <= 5) {
            return 0
        } else {
            return this.fee * 3 * extraWeightCarry
        };

    }

    toString(): string {
        return `${this.description} (Carry-on)`
    }

}

