var elInput = document.querySelector(".input");
var elButton = document.querySelector(".button");
var elOutput = document.querySelector(".output");
var elSelect = document.querySelector(".select");
var elPSum = document.querySelector(".pSum");
var elPUsd = document.querySelector(".pUsd");
var elPEuro = document.querySelector(".pEuro");
var elPRub = document.querySelector(".pRub");
var elSpanSum = document.querySelector(".sumSpan");
var elSpanUsd = document.querySelector(".usdSpan");
var elSpanEuro = document.querySelector(".euroSpan");
var elSpanRub = document.querySelector(".rubSpan");

var kursUsd = 11320;
var kursEuro = 12354;
var kursRub = 137;



elButton.addEventListener("click", function (evt){

  evt.preventDefault();
  
  var amount = elInput.value.trim();
  var convertDirectory = elSelect.value;

  if (amount == "") {
    return
  }

  amount == Number(amount);
  if (isNaN(amount)) {
    return
  }

      elPSum.style.display = "none";
      elPUsd.style.display = "none";
      elPEuro.style.display = "none";
      elPRub.style.display = "none";


  switch (convertDirectory) {
    case "sum":
      var usd = (amount / kursUsd).toFixed(2);
      var euro = (amount / kursEuro).toFixed(2);
      var rub = (amount / kursRub).toFixed(2);

      elPUsd.style.display = "block";
      elPEuro.style.display = "block";
      elPRub.style.display = "block";

      elSpanUsd.textContent = usd;
      elSpanEuro.textContent = euro;
      elSpanRub.textContent = rub;
      break;

      case "usd":
      var sum = (amount * kursUsd).toFixed(2);
      var euro = ((amount * kursUsd) / kursEuro).toFixed(2);
      var rub = ((amount * kursUsd) / kursRub).toFixed(2);

      elPSum.style.display = "block";
      elPEuro.style.display = "block";
      elPRub.style.display = "block";

      elSpanSum.textContent = sum;
      elSpanEuro.textContent = euro;
      elSpanRub.textContent = rub;
      break;

      case "euro":
      var sum = (amount * kursEuro).toFixed(2);
      var usd = ((amount * kursEuro) / kursUsd).toFixed(2);
      var rub = ((amount * kursEuro) / kursRub).toFixed(2);

      elPSum.style.display = "block";
      elPUsd.style.display = "block";
      elPRub.style.display = "block";

      elSpanSum.textContent = sum;
      elSpanUsd.textContent = usd;
      elSpanRub.textContent = rub;
      break;

      case "rub":
      var sum = (amount * kursRub).toFixed(2);
      var usd = ((amount * kursRub) / kursUsd).toFixed(2);
      var euro = ((amount * kursRub) / kursEuro).toFixed(2);

      elPSum.style.display = "block";
      elPUsd.style.display = "block";
      elPEuro.style.display = "block";

      elSpanSum.textContent = sum;
      elSpanUsd.textContent = usd;
      elSpanEuro.textContent = euro;
      break;
  
    default:
      break;
  }
})