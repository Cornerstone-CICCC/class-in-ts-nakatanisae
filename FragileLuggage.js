import { Luggage } from './Luggage.js';
import { Priority } from './Priority.js';
export class FragileLuggage extends Luggage {
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
