import Decimal from "decimal.js";
import AppConfig from "../appConfig";
import DisplayBlock from "../diplayBlock";
import DisplayNone from "../displayNone";
import getMerchandises, { Merchandise } from "../merchandises";
import ResetAllData from "../resetAllData";
import SaveData from "../saveData";
import GetDetail from "./detail";

const Main = (inputName: string, savedData: string | null) => {
  const config = AppConfig();
  const AMOUNT_PER_A_CLICK = 25;

  let jsonDecorded = savedData !== null ? JSON.parse(savedData) : null;

  let mainContainer = document.getElementById("mainContainer");
  mainContainer?.classList.add("d-flex", "bg-navy", "d-block", "p-2");

  let numberOfAmountP = document.createElement("p");

  let leftSection = document.createElement("div");
  leftSection.classList.add("col-4", "bg-dark");
  let subLeftSectionContainer = document.createElement("div");
  subLeftSectionContainer.classList.add(
    "bg-dark",
    "d-flex",
    "flex-column",
    "pt-2"
  );

  let hamburgerSection = document.createElement("div");
  hamburgerSection.classList.add("bg-navy", "pt-2");

  let upperHamburgerDiv = document.createElement("div");
  upperHamburgerDiv.classList.add(
    "d-flex",
    "flex-row",
    "justify-content-center"
  );

  let numberOfhamburgersP = document.createElement("p");
  numberOfhamburgersP.classList.add("text-white", "font-weight-bold", "pr-1");
  numberOfhamburgersP.innerHTML =
    jsonDecorded !== null ? jsonDecorded[0].userData.hamburgers : "0";
  numberOfhamburgersP.id = config.hamburger;
  upperHamburgerDiv.append(numberOfhamburgersP);

  // Hamburger component in upper left section
  let BurgersP = document.createElement("div");
  BurgersP.classList.add("text-white", "font-weight-bold", "pl-1");
  BurgersP.innerHTML = "Burgers";
  upperHamburgerDiv.append(BurgersP);
  hamburgerSection.append(upperHamburgerDiv);

  let lowerHamburgerDiv = document.createElement("div");
  lowerHamburgerDiv.classList.add(
    "d-flex",
    "flex-row",
    "justify-content-center",
    "pb-2"
  );

  let oneClickP = document.createElement("p");
  oneClickP.classList.add("text-white", "font-weight-bold");
  oneClickP.innerHTML = `one click ￥${AMOUNT_PER_A_CLICK}`;
  lowerHamburgerDiv.append(oneClickP);
  hamburgerSection.append(lowerHamburgerDiv);

  subLeftSectionContainer.append(hamburgerSection);

  let hamburgerImgDiv = document.createElement("div");
  hamburgerImgDiv.classList.add(
    "d-flex",
    "align-items-center",
    "justify-content-center",
    "mt-5",
    "hover"
  );

  // Hamburger image in lower left section
  let hamburgerImg = document.createElement("img");
  hamburgerImg.src = config.hamburgerImg;
  hamburgerImg.height = 180;
  hamburgerImg.width = 280;
  hamburgerImg.addEventListener("click", function () {
    let numberOfFlipMachine = new Decimal(
      document.querySelector<HTMLElement>(
        `#${getMerchandises()[0].name.replace(/\s+/g, "")}`
      )!.innerHTML
    );
    numberOfhamburgersP.innerHTML = new Decimal(numberOfhamburgersP.innerHTML)
      .plus(numberOfFlipMachine.plus(1))
      .toString();
    numberOfAmountP.innerHTML = new Decimal(numberOfAmountP.innerHTML)
      .plus(new Decimal(numberOfFlipMachine.plus(1)).times(AMOUNT_PER_A_CLICK))
      .toString();
  });
  hamburgerImgDiv.append(hamburgerImg);
  subLeftSectionContainer.append(hamburgerImgDiv);
  leftSection.append(subLeftSectionContainer);
  mainContainer?.append(leftSection);

  let rightSection = document.createElement("div");
  rightSection.classList.add("col-8", "pl-2", "pr-0");
  let subRightSectionContainer = document.createElement("div");
  subRightSectionContainer.classList.add("d-flex", "flex-column");

  let upperAreaDiv = document.createElement("div");
  upperAreaDiv.classList.add("container");
  let middleAreaDiv = document.createElement("div");
  let lowerAreaDiv = document.createElement("div");
  lowerAreaDiv.classList.add(
    "d-flex",
    "flex-row",
    "justify-content-end",
    "pr-4",
    "py-2"
  );

  upperAreaDiv.append(getUserInfoDiv(numberOfAmountP, inputName, jsonDecorded));
  subRightSectionContainer.append(upperAreaDiv);

  middleAreaDiv.classList.add("bg-dark");
  getMerchandiseCards(middleAreaDiv, jsonDecorded);
  let detailDiv = document.createElement("div");
  detailDiv.id = "detail";
  middleAreaDiv.append(detailDiv);
  subRightSectionContainer.append(middleAreaDiv);

  // Clear button and save button in lower right section
  let clearButtonDiv = document.createElement("div");
  let clearButtonImg = document.createElement("img");
  clearButtonImg.classList.add("hover", "pr-1");
  clearButtonImg.src = "/assets/img/x-square-fill.svg";
  clearButtonImg.addEventListener("click", function () {
    if (confirm("全データをクリアしますか?")) {
      ResetAllData();
    }
  });
  clearButtonDiv.append(clearButtonImg);
  lowerAreaDiv.append(clearButtonDiv);
  let saveButtonDiv = document.createElement("div");
  let saveButtonImg = document.createElement("img");
  saveButtonImg.classList.add("hover", "pl-1");
  saveButtonImg.src = "/assets/img/save-fill.svg";
  saveButtonImg.addEventListener("click", function () {
    SaveData();
    alert("データを保存しました。再開時は現在のユーザー名を指定してください。");
  });
  saveButtonDiv.append(saveButtonImg);
  lowerAreaDiv.append(saveButtonDiv);

  subRightSectionContainer.append(lowerAreaDiv);

  rightSection.append(subRightSectionContainer);
  mainContainer?.append(rightSection);

  DisplayBlock(mainContainer);
  let loginContainer = document.getElementById("loginContainer");
  DisplayNone(loginContainer);
};

function getUserInfoDiv(
  numberOfAmountP: HTMLElement,
  inputName: string,
  jsonDecorded: any
): HTMLElement {
  const config = AppConfig();

  // User information
  // 1.User name
  let userInfoDiv = document.createElement("div");
  userInfoDiv.classList.add("row", "bg-dark", "my-2");
  let nameDiv = document.createElement("div");
  nameDiv.classList.add("text-center", "bg-navy", "col", "m-1", "py-2");
  let nameP = document.createElement("p");
  nameP.classList.add("text-white", "font-weight-bold");
  nameP.innerHTML =
    jsonDecorded !== null ? jsonDecorded[0].userName : inputName;
  nameP.id = config.userName;
  nameDiv.append(nameP);
  userInfoDiv.append(nameDiv);

  // 2.User age
  let ageDiv = document.createElement("div");
  ageDiv.classList.add(
    "d-flex",
    "flex-row",
    "justify-content-center",
    "bg-navy",
    "col",
    "m-1",
    "py-2"
  );
  let numberOfAgeP = document.createElement("p");
  numberOfAgeP.classList.add("text-white", "font-weight-bold", "pr-1");
  numberOfAgeP.innerHTML =
    jsonDecorded !== null ? jsonDecorded[0].userData.userAge : "20";
  numberOfAgeP.id = config.userAge;
  ageDiv.append(numberOfAgeP);
  let ageP = document.createElement("p");
  ageP.classList.add("text-white", "font-weight-bold");
  ageP.innerHTML = "years old";
  ageDiv.append(ageP);
  userInfoDiv.append(ageDiv);

  let breakDiv = document.createElement("div");
  breakDiv.classList.add("w-100");
  userInfoDiv.append(breakDiv);

  // 3.Passed days
  let daysDiv = document.createElement("div");
  daysDiv.classList.add(
    "d-flex",
    "flex-row",
    "justify-content-center",
    "bg-navy",
    "col",
    "m-1",
    "py-2"
  );
  let numberOfDaysP = document.createElement("p");
  numberOfDaysP.classList.add("text-white", "font-weight-bold", "pr-1");
  numberOfDaysP.innerHTML =
    jsonDecorded !== null ? jsonDecorded[0].userData.passedDays : "0";
  numberOfDaysP.id = config.passedDays;
  setInterval(function () {
    numberOfDaysP.innerHTML = new Decimal(numberOfDaysP.innerHTML)
      .plus(1)
      .toString();
    if (new Decimal(numberOfDaysP.innerHTML).modulo(365).equals(0)) {
      numberOfAgeP.innerHTML = new Decimal(numberOfAgeP.innerHTML)
        .plus(1)
        .toString();
    }

    let totalAmount = new Decimal(0);
    getMerchandises().map((merchandise) => {
      let numberOfPurchases = new Decimal(
        document.querySelector<HTMLElement>(
          `#${merchandise.name.replace(/\s+/g, "")}`
        )!.innerHTML
      );
      totalAmount = totalAmount.plus(
        merchandise.unit === config.Second
          ? numberOfPurchases.times(merchandise.unitPrice)
          : 0
      );
    });
    numberOfAmountP.innerHTML = new Decimal(numberOfAmountP.innerHTML)
      .plus(totalAmount)
      .toString();
  }, 1000);
  daysDiv.append(numberOfDaysP);
  let daysP = document.createElement("p");
  daysP.classList.add("text-white", "font-weight-bold");
  daysP.innerHTML = "days";
  daysDiv.append(daysP);
  userInfoDiv.append(daysDiv);

  // 4.Amount
  let amountDiv = document.createElement("div");
  amountDiv.classList.add(
    "d-flex",
    "flex-row",
    "justify-content-center",
    "bg-navy",
    "col",
    "m-1",
    "py-2"
  );
  let currencyP = document.createElement("p");
  currencyP.classList.add("text-white", "font-weight-bold");
  currencyP.innerHTML = "¥";
  amountDiv.append(currencyP);
  numberOfAmountP.classList.add("text-white", "font-weight-bold");
  numberOfAmountP.innerHTML =
    jsonDecorded !== null ? jsonDecorded[0].userData.money : "50000";
  numberOfAmountP.id = config.money;
  amountDiv.append(numberOfAmountP);
  userInfoDiv.append(amountDiv);
  return userInfoDiv;
}

function getMerchandiseCards(middleAreaDiv: HTMLDivElement, jsonDecorded: any) {
  const merchandises = getMerchandises();
  let container = document.createElement("div");
  container.id = "cards";
  container.style.overflowY = "scroll";
  container.style.height = "65vh";
  DisplayBlock(container);
  merchandises.map((merchandise) => {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add(
      "d-flex",
      "flex-row",
      "bg-navy",
      "m-1",
      "p-3",
      "hover"
    );
    cardDiv.addEventListener("click", function () {
      DisplayNone(container);
      GetDetail(merchandise);
    });
    let merchandiseImg = document.createElement("img");
    merchandiseImg.src = merchandise.imageUrl;
    merchandiseImg.height = 100;
    merchandiseImg.width = 100;
    cardDiv.append(merchandiseImg);

    let detailDiv = document.createElement("div");
    detailDiv.classList.add(
      "d-flex",
      "flex-column",
      "align-items-center",
      "ml-3",
      "col"
    );

    let firstLineDiv = document.createElement("div");
    firstLineDiv.classList.add(
      "d-flex",
      "justify-content-between",
      "align-items-center",
      "bg-navy",
      "col",
      "px-0"
    );
    let merchandiseNameH4 = document.createElement("h4");
    merchandiseNameH4.classList.add("text-white", "font-weight-bold", "pr-1");
    merchandiseNameH4.innerHTML = merchandise.name;
    firstLineDiv.append(merchandiseNameH4);
    let purchaseQuantityH4 = document.createElement("h4");
    purchaseQuantityH4.classList.add("text-white", "font-weight-bold", "pl-1");
    purchaseQuantityH4.innerHTML =
      jsonDecorded !== null
        ? jsonDecorded[0].userData[merchandise.name.replace(/\s+/g, "")]
        : "0";
    purchaseQuantityH4.id = merchandise.name.replace(/\s+/g, "");
    firstLineDiv.append(purchaseQuantityH4);
    detailDiv.append(firstLineDiv);

    let secondLineDiv = document.createElement("div");
    secondLineDiv.classList.add(
      "d-flex",
      "justify-content-between",
      "align-items-center",
      "bg-navy",
      "col",
      "px-0"
    );
    let priceDiv = document.createElement("div");
    priceDiv.classList.add("d-flex", "flex-row");
    let currencyP1 = document.createElement("p");
    currencyP1.classList.add("text-white", "font-weight-bold", "pr-1");
    currencyP1.innerHTML = "\\";
    priceDiv.append(currencyP1);
    let priceP = document.createElement("p");
    priceP.classList.add("text-white", "font-weight-bold");
    priceP.innerHTML = merchandise.price.toLocaleString();
    priceDiv.append(priceP);
    secondLineDiv.append(priceDiv);
    let unitPriceDiv = document.createElement("div");
    unitPriceDiv.classList.add("d-flex", "flex-row");
    let currencyP2 = document.createElement("p");
    currencyP2.classList.add("text-success", "font-weight-bold", "pr-1");
    currencyP2.innerHTML = "\\";
    unitPriceDiv.append(currencyP2);
    let unitPriceP = document.createElement("p");
    unitPriceP.classList.add("text-success", "font-weight-bold", "pr-1");
    unitPriceP.innerHTML = merchandise.unitPrice.toLocaleString();
    unitPriceDiv.append(unitPriceP);
    let unitP = document.createElement("p");
    unitP.classList.add("text-success", "font-weight-bold");
    unitP.innerHTML = `/${merchandise.unit}`;
    unitPriceDiv.append(unitP);
    secondLineDiv.append(unitPriceDiv);
    detailDiv.append(secondLineDiv);

    cardDiv.append(detailDiv);
    container.append(cardDiv);
    middleAreaDiv.append(container);
  });
}

function GetMainPage(inputName: string, savedData: string | null) {
  return Main(inputName, savedData);
}

export default GetMainPage;
