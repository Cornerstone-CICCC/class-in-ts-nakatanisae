import { Luggage } from './Luggage.js';

export class ListOfLuggages{
    private luggages: Luggage[];

    constructor(){
        this.luggages = [];
    }

    insertLuggage(luggage: Luggage):void{
        this.luggages.push(luggage);
    }

    printAllLuggages():void{
        for(const luggage of this.luggages){
            console.log(luggage.toString())
        }
    }

    priceOfEachLuggage():void{
        for(const luggage of this.luggages){
            console.log(luggage.getPrice())
        }
    }

    totalPrice():number{
        const total = this.luggages.reduce(function(sum, luggage){
            return sum += luggage.getPrice();
        }, 0);

        return total;
    }

    getFragileLuggageWithInsurance():{ count: number; totalInsurance: number }{
        const fragileLuggages = this.luggages.filter(luggage => luggage.getInsuranceValue() > 0);
        const count = fragileLuggages.length;
        const totalInsurance = fragileLuggages.reduce(function(sum, luggage){
            return sum += luggage.getInsuranceValue();
        }, 0);

        return {count, totalInsurance};  
    }

    sortByPrice():void{
        this.luggages.sort((a, b) => a.getPrice() - b.getPrice());
    }

    sortByWeight():void{
        this.luggages.sort((a, b) => a.getWeight() - b.getWeight());
    }
}