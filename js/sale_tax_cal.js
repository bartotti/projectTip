class SaleTaxCalculator {
  constructor() {
    this.select_tax_amount = document.getElementById("tax-rate-select");
    this.calculate_button = document.getElementById("calculate-tax-button");
    this.amount_input = document.getElementById("user-amount-input");
    this.display = document.getElementById("display-after-tax");
    this.calculate_button.addEventListener(
      "click",
      this.calculate_sale_tax.bind(this)
    );
  }

  calculate_sale_tax() {
    const amount = parseFloat(this.amount_input.value);
    if (!amount) {
      alert("Please Enter an amount");
      return;
    }
    const tax_percentage = parseFloat(this.select_tax_amount.value);
    const tax = amount * tax_percentage;
    const total_amount = tax + amount;
    this.display.textContent = `The sales tax is ${total_amount}.`;
  }
}

