const currency_con = document.getElementById("currency_con");
const msg = document.querySelector(".msg");
const msg_long = document.querySelector(".msg_details");

currency_con.onsubmit = (e) => {
  e.preventDefault();

  //   get input
  let amount = currency_con.querySelector("input[name='amount']");
  let amount_select = currency_con.querySelector("select[name='currency']");

  if (amount.value == "" || amount_select.value == "") {
    msg.innerHTML = showAlert("All fields are required");
  } else {
    let rate = 0;

    switch (amount_select.value) {
      case "USD":
        rate = 110;
        break;
      case "CAD":
        rate = 81;
        break;
      case "Euro":
        rate = 116;
        break;
      case "Pound":
        rate = 134;
        break;
      case "Rupee":
        rate = 1.32;
        break;
    }

    let fixed_rate = amount.value * rate;
    msg_long.innerHTML = showAlert(
      `${amount.value} ${amount_select.value} = ${fixed_rate.toFixed(2)} BDT`,
      "success"
    );
  }
};
