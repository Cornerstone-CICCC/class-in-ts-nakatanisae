enum Priority {
    Normal = "Normal",
    Priority = "Priority",
    Urgent = "Urgent"
}



abstract class Luggage {
    protected weight: number;
    protected description: string;
    protected priority: Priority;
    protected readonly fee: number = 5.20;


    constructor(weight: number, description: string, priority: Priority) {
        this.weight = weight;
        this.description = description;
        this.priority = priority;
    }

    getWeight(): number {
        return this.weight;
    }

    setWeight(weight: number) {
        this.weight = weight;
    }

    getDescription(): string {
        return this.description;
    }

    getPriority(): Priority {
        return this.priority
    }

    abstract getPrice(): number;
    abstract toString(): string;

    getInsuranceValue(): number {
        return 0;
    }

    setInsuranceValue(value: number): string {
        return "Insurance is only applicable to fragile luggage.";
    }

}

class RegularLuggage extends Luggage {

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

class FragileLuggage extends Luggage {

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

class CarryOnLuggage extends Luggage {
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