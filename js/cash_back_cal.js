class cashBack{
    constructor(){
        this.cash_back_price_input = document.getElementById("cash-back-price-input");
        this.select_percenetage = document.getElementById("cash-back-select");
        this.cash_back_button = document.getElementById("cash-back-button");
        this.display_cash_back = document.getElementById("display-cash-back");
        this.cash_back_button.addEventListener("click", this.cashBackCal.bind(this));
    }
    cashBackCal(){
        const price = parseFloat(this.cash_back_price_input.value);
        const select = parseFloat(this.select_percenetage.value);
        const temp = price * select;
        console.log("myname is price" + price)
        console.log("myname is select"+ select)
        console.log(temp)
        this.display_cash_back.textContent = `CashBack: ${temp}`
    }
}
