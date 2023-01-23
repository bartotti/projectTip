class dinnerCalculator {
  constructor() {
    this.data_tax = new Array(0.15, 0.18, 0.2, 0.22);
    this.dinner_amount_input = document.getElementById('dinner-amount-input');

    this.select_local_tax = document.getElementById('local-tax-rate-select');

    this.do_math_button = document.getElementById('do-math-button');

    this.display_15 = document.getElementById('15%');
    this.display_18 = document.getElementById('18%');
    this.display_20 = document.getElementById('20%');
    this.display_22 = document.getElementById('22%');
    this.display_total_amount = document.getElementById('dinner-total-amount');
    this.do_math_button.addEventListener('click', this.calculateTip.bind(this));
  }

  calculateTip() {
    const total_dinner_amount = parseFloat(this.dinner_amount_input.value);

    const select_local_tax = parseFloat(this.select_local_tax.value);

    const after_tax_amount = total_dinner_amount * select_local_tax;
    const total_amount_after_tax = after_tax_amount + total_dinner_amount;
    console.log(total_amount_after_tax);
    this.display_total_amount.textContent = total_amount_after_tax;
    const temp1 = total_dinner_amount * this.data_tax[0];
    const temp11 = temp1 + total_amount_after_tax;
    this.display_15.textContent = `15% = ${temp1} | TotalAmount = ${temp11.toFixed(
      2,
    )}`;

    const temp2 = total_dinner_amount * this.data_tax[1];
    const temp22 = temp2 + total_amount_after_tax;
    this.display_18.textContent = `18% = ${temp2} | TotalAmount = ${temp22.toFixed(
      2,
    )}`;

    const temp3 = total_dinner_amount * this.data_tax[2];
    const temp33 = temp3 + total_amount_after_tax;
    this.display_20.textContent = `20% = ${temp3} | TotalAmount = ${temp33.toFixed(
      2,
    )}`;

    const temp4 = total_dinner_amount * this.data_tax[3];
    const temp44 = temp4 + total_amount_after_tax;
    this.display_22.textContent = `22% = ${temp4} | TotalAmount = ${temp44.toFixed(
      2,
    )}`;
  }
}

