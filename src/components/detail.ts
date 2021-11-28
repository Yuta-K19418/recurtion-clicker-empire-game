import Decimal from "decimal.js";
import AppConfig from "../appConfig";
import DisplayBlock from "../diplayBlock";
import DisplayNone from "../displayNone";
import { Merchandise } from "../merchandises";

const Detail = (merchandise: Merchandise) => {
  let mainContainer = document.getElementById("detail");
  mainContainer?.classList.add("bg-navy", "m-1");
  let subContainer = document.createElement("div");
  subContainer.classList.add("p-5", "mx-5");
  // subContainer.style.height = "69vh";
  // subContainer.style.width = "47vh";

  let upperAreaDiv = document.createElement("div");
  upperAreaDiv.classList.add(
    "d-flex",
    "justify-content-between",
    "align-items-center",
    "py-5"
  );

  let dataDiv = document.createElement("div");
  dataDiv.classList.add("d-flex", "flex-column", "mr-5", "pr-5");
  let nameP = document.createElement("p");
  nameP.classList.add("text-white", "font-weight-bold");
  nameP.innerHTML = merchandise.name;
  dataDiv.append(nameP);
  let maxNumberOfPurchasesP = document.createElement("p");
  maxNumberOfPurchasesP.classList.add("text-white", "font-weight-bold");
  maxNumberOfPurchasesP.innerHTML = `Max purchases: ${
    merchandise.maxNumberOfPurchases !== -1
      ? merchandise.maxNumberOfPurchases
      : "∞"
  }`;
  dataDiv.append(maxNumberOfPurchasesP);
  let priceDiv = document.createElement("div");
  priceDiv.classList.add("d-flex", "flex-row");
  let priceStatementP = document.createElement("p");
  priceStatementP.classList.add("text-white", "font-weight-bold");
  priceStatementP.innerHTML = "Price: ";
  priceDiv.append(priceStatementP);
  let priceP = document.createElement("p");
  priceP.classList.add("text-white", "font-weight-bold");
  priceP.innerHTML = merchandise.price.toString();
  priceDiv.append(priceP);
  dataDiv.append(priceDiv);
  let unitPriceP = document.createElement("p");
  unitPriceP.classList.add("text-white", "font-weight-bold");
  unitPriceP.innerHTML = `Get ￥ ${merchandise.unitPrice} /${merchandise.unit}`;
  dataDiv.append(unitPriceP);
  upperAreaDiv.append(dataDiv);

  let merchandiseImg = document.createElement("img");
  merchandiseImg.classList.add("ml-5");
  merchandiseImg.src = merchandise.imageUrl;
  merchandiseImg.height = 100;
  merchandiseImg.width = 100;
  upperAreaDiv.append(merchandiseImg);

  let middleAreaDiv = document.createElement("div");
  middleAreaDiv.classList.add("d-flex", "flex-column", "mb-5");
  let sentenseP = document.createElement("p");
  sentenseP.classList.add("text-white", "font-weight-bold");
  sentenseP.innerHTML = "How many would you like to buy?";
  middleAreaDiv.append(sentenseP);
  let inputNumberOfPurchases = document.createElement("input");
  inputNumberOfPurchases.classList.add("form-control");
  inputNumberOfPurchases.type = "number";
  inputNumberOfPurchases.value = "0";
  let totalDiv = document.createElement("div");
  totalDiv.classList.add("d-flex", "flex-row", "justify-content-end");
  let totalP = document.createElement("p");
  totalP.classList.add("text-white", "font-weight-bold");
  totalP.innerHTML = "total: ￥";
  totalDiv.append(totalP);
  let totalPriceP = document.createElement("p");
  totalPriceP.classList.add("text-white", "font-weight-bold");
  totalPriceP.innerHTML = "0";
  totalDiv.append(totalPriceP);
  inputNumberOfPurchases.addEventListener("change", function (e) {
    totalPriceP.innerHTML = new Decimal(priceP.innerHTML)
      .times(new Decimal(inputNumberOfPurchases.value))
      .toString();
  });
  middleAreaDiv.append(inputNumberOfPurchases, totalDiv);

  let lowerAreaDiv = document.createElement("div");
  lowerAreaDiv.classList.add("d-flex", "justify-content-between", "py-3");

  // Go Back Button
  let goBackButton = document.createElement("button");
  goBackButton.classList.add(
    "btn",
    "btn-outline-primary",
    "bg-white",
    "px-5",
    "hover"
  );
  goBackButton.innerHTML = "Go Back";
  goBackButton.addEventListener("click", function () {
    let container = document.getElementById("detail");
    while (container?.lastChild) {
      container.removeChild(container.lastChild);
    }
    DisplayNone(container);
    let cardsDiv = document.getElementById("cards");
    DisplayBlock(cardsDiv);
  });
  lowerAreaDiv.append(goBackButton);

  // Purchase Button
  let purchaseButton = document.createElement("button");
  purchaseButton.classList.add("btn", "btn-primary", "px-5", "hover");
  purchaseButton.innerHTML = "Purchase";
  purchaseButton.addEventListener("click", function () {
    const config = AppConfig();
    let money = document.getElementById(config.money);
    if (Number(money!.innerHTML) >= Number(totalPriceP.innerHTML)) {
      money!.innerHTML = new Decimal(money!.innerHTML)
        .minus(new Decimal(totalPriceP.innerHTML))
        .toString();
      let numberOfPurchases = document.getElementById(
        nameP.innerHTML.replace(/\s+/g, "")
      );
      numberOfPurchases!.innerHTML = new Decimal(numberOfPurchases!.innerHTML)
        .plus(new Decimal(inputNumberOfPurchases.value))
        .toString();
    } else {
      alert("所持金が足りません。");
    }
  });
  lowerAreaDiv.append(purchaseButton);

  subContainer.append(upperAreaDiv);
  subContainer.append(middleAreaDiv);
  subContainer.append(lowerAreaDiv);
  mainContainer?.append(subContainer);
  DisplayBlock(mainContainer);
};

function GetDetail(merchandise: Merchandise) {
  return Detail(merchandise);
}

export default GetDetail;
