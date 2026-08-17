enum Priority{
    Normal = "Normal",
    Priority = "Priority",
    Urgent = "Urgent"
}
  


abstract class Luggage{
        protected weight: number;
        protected description: string;
        protected priority: Priority;
        protected readonly fee: number = 5.20;
    
    
    constructor(weight: number, description: string, priority: Priority){
        this.weight = weight;
        this.description = description;
        this.priority = priority;
    }

    getWeight(): number{
        return this.weight;
    }

    setWeight(weight: number){
        this.weight = weight;
    }

    getDescription(): string{
        return this.description;
    }

    getPriority():Priority{
        return this.priority
    }

    abstract getPrice(): number;
    abstract toString(): string;

    getInsuranceValue(): number{
        return 0;
    }

    setInsuranceValue(value: number): string{
        return "Insurance is only applicable to fragile luggage.";
    }

}