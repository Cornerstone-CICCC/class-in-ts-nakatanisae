import { Luggage } from './Luggage.js';
import { Priority } from './Priority.js';

export class FragileLuggage extends Luggage {

    private insurance: number;

    constructor(weight: number, description: string, priority: Priority, insurance: number) {
        super(weight, description, priority)
        this.insurance = insurance;
    }

    getInsuranceValue(): number {
        return this.insurance
    }

    setInsuranceValue(value: number): void {
        this.insurance = value;
    }

    getPrice(): number {
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

    toString(): string {
        return `${this.description} (Fragile) - Insurance: ${this.insurance}`
    }

}