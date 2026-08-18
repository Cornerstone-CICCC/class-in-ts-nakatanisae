import { Luggage } from './Luggage.js';
import { Priority } from './Priority.js';

export class RegularLuggage extends Luggage {

    constructor(weight: number, description: string, priority: Priority) {
        super(weight, description, priority);
    }

    getPrice(): number {
        if (this.weight <= 23) {
            return 0
        };

        const extraWeight = this.weight - 23

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

    toString(): string {
        return `${this.description} (Regular)`
    }

}