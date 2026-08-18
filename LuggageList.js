export class ListOfLuggages {
    luggages;
    constructor() {
        this.luggages = [];
    }
    insertLuggage(luggage) {
        this.luggages.push(luggage);
    }
    printAllLuggages() {
        for (const luggage of this.luggages) {
            console.log(luggage.toString());
        }
    }
    priceOfEachLuggage() {
        for (const luggage of this.luggages) {
            console.log(luggage.getPrice());
        }
    }
    totalPrice() {
        const total = this.luggages.reduce(function (sum, luggage) {
            return sum += luggage.getPrice();
        }, 0);
        return total;
    }
    getFragileLuggageWithInsurance() {
        const fragileLuggages = this.luggages.filter(luggage => luggage.getInsuranceValue() > 0);
        const count = fragileLuggages.length;
        const totalInsurance = fragileLuggages.reduce(function (sum, luggage) {
            return sum += luggage.getInsuranceValue();
        }, 0);
        return { count, totalInsurance };
    }
    sortByPrice() {
        this.luggages.sort((a, b) => a.getPrice() - b.getPrice());
    }
    sortByWeight() {
        this.luggages.sort((a, b) => a.getWeight() - b.getWeight());
    }
}
