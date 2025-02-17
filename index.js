function validateCreditCard(number) {
  const regex = {
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard: /^5[1-5][0-9]{14}$/,
    amex: /^3[47][0-9]{13}$/,
    discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
  };

  let cardType = null;

  if (regex.visa.test(number)) {
    cardType = "visa";
  } else if (regex.mastercard.test(number)) {
    cardType = "mastercard";
  } else if (regex.amex.test(number)) {
    cardType = "amex";
  } else if (regex.discover.test(number)) {
    cardType = "discover";
  }

  if (cardType) {
    document.getElementById("bandeira").src = `${cardType}.png`;
    return true;
  } else {
    document.getElementById("bandeira").src = "base1.png";
    return false;
  }
}
