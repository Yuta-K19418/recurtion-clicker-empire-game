import AppConfig from "../appConfig";
import DisplayNone from "../displayNone";
import getMerchandises from "../merchandises";

const Main = () => {
  const config = AppConfig();
  const AMOUNT_PER_A_CLICK = 25;

  let mainContainer = document.getElementById("main");
  mainContainer!.style.height = "100vh";

  let subContainer = document.createElement("div");
  subContainer.classList.add("d-flex", "bg-navy", "d-block", "p-2");
  subContainer.id = "mainContainer";

  let numberOfAmountP = document.createElement("p");
  
  let leftSection = document.createElement("div");
  leftSection.classList.add("col-4", "bg-dark");
  let subLeftSectionContainer = document.createElement("div");
  subLeftSectionContainer.classList.add("bg-dark", "d-flex", "flex-column", "pt-2");

  let hamburgerSection = document.createElement("div");
  hamburgerSection.classList.add("bg-navy", "pt-2");

  let upperHamburgerDiv = document.createElement("div");
  upperHamburgerDiv.classList.add("d-flex", "flex-row", "justify-content-center");

  let numberOfhamburgersP = document.createElement("p");
  numberOfhamburgersP.classList.add("text-white", "font-weight-bold", "pr-1");
  numberOfhamburgersP.innerHTML = "0";
  upperHamburgerDiv.append(numberOfhamburgersP);

  // Hamburger component in upper left section
  let BurgersP = document.createElement("div");
  BurgersP.classList.add("text-white", "font-weight-bold", "pl-1");
  BurgersP.innerHTML = "Burgers";
  upperHamburgerDiv.append(BurgersP);
  hamburgerSection.append(upperHamburgerDiv);

  let lowerHamburgerDiv = document.createElement("div");
  lowerHamburgerDiv.classList.add("d-flex", "flex-row", "justify-content-center", "pb-2");

  let oneClickP = document.createElement("p");
  oneClickP.classList.add("text-white", "font-weight-bold");
  oneClickP.innerHTML = `one click ￥${AMOUNT_PER_A_CLICK}`;
  lowerHamburgerDiv.append(oneClickP);
  hamburgerSection.append(lowerHamburgerDiv);

  subLeftSectionContainer.append(hamburgerSection);

  let hamburgerImgDiv = document.createElement("div");
  hamburgerImgDiv.classList.add("d-flex", "align-items-center", "justify-content-center", "mt-5", "hover");
  
  // Hamburger image in lower left section
  let hamburgerImg = document.createElement("img");
  hamburgerImg.src = config.hamburgerImg;
  hamburgerImg.height = 180;
  hamburgerImg.width = 280;
  hamburgerImg.addEventListener("click", function(){
    numberOfhamburgersP.innerHTML = (parseInt(numberOfhamburgersP.innerHTML) + 1).toString();
    numberOfAmountP.innerHTML = (parseInt(numberOfAmountP.innerHTML) + AMOUNT_PER_A_CLICK).toString();
  });
  hamburgerImgDiv.append(hamburgerImg);
  subLeftSectionContainer.append(hamburgerImgDiv);
  leftSection.append(subLeftSectionContainer);
  subContainer.append(leftSection);


  let rightSection = document.createElement("div");
  rightSection.classList.add("col-8", "pl-2", "pr-0");
  let subRightSectionContainer = document.createElement("div");
  subRightSectionContainer.classList.add("d-flex", "flex-column");

  let upperAreaDiv = document.createElement("div");
  upperAreaDiv.classList.add("container");
  let middleAreaDiv = document.createElement("div");
  let lowerAreaDiv = document.createElement("div");
  lowerAreaDiv.classList.add("d-flex", "flex-row", "justify-content-end", "pr-4", "py-2");

  upperAreaDiv.append(getUserInfoDiv(numberOfAmountP));
  subRightSectionContainer.append(upperAreaDiv);
  
  middleAreaDiv.classList.add("bg-dark");
  getMerchandiseCards(middleAreaDiv);
  middleAreaDiv.style.overflowY = "scroll";
  middleAreaDiv.style.height = "70vh";
  subRightSectionContainer.append(middleAreaDiv);
  
  // Clear button and save button in lower right section
  let backButtonDiv = document.createElement("div");
  let backButtonImg = document.createElement("img");
  backButtonImg.classList.add("hover", "pr-1");
  backButtonImg.src = "/assets/img/x-square-fill.svg";
  backButtonDiv.append(backButtonImg);
  lowerAreaDiv.append(backButtonDiv);
  let saveButtonDiv = document.createElement("div");
  let saveButtonImg = document.createElement("img");
  saveButtonImg.classList.add("hover", "pl-1");
  saveButtonImg.src = "/assets/img/save-fill.svg";
  saveButtonDiv.append(saveButtonImg);
  lowerAreaDiv.append(saveButtonDiv);

  subRightSectionContainer.append(lowerAreaDiv);
  
  rightSection.append(subRightSectionContainer);
  subContainer.append(rightSection);

  mainContainer?.append(subContainer);
}

function getUserInfoDiv(numberOfAmountP: HTMLElement): HTMLElement{

  // User information
  // 1.User name
  let userInfoDiv = document.createElement("div");
  userInfoDiv.classList.add("row", "bg-dark", "my-2");
  let nameDiv = document.createElement("div");
  nameDiv.classList.add("text-center", "bg-navy", "col", "m-1", "py-2");
  let nameP = document.createElement("p");
  nameP.classList.add("text-white", "font-weight-bold");
  nameP.innerHTML = "test";
  nameDiv.append(nameP);
  userInfoDiv.append(nameDiv);
  
  // 2.User age
  let ageDiv = document.createElement("div");
  ageDiv.classList.add("d-flex", "flex-row", "justify-content-center", "bg-navy", "col", "m-1", "py-2");
  let numberOfAgeP = document.createElement("p");
  numberOfAgeP.classList.add("text-white", "font-weight-bold","pr-1");
  numberOfAgeP.innerHTML = "1";
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
  daysDiv.classList.add("d-flex", "flex-row", "justify-content-center", "bg-navy", "col", "m-1", "py-2");
  let numberOfDaysP = document.createElement("p");
  numberOfDaysP.classList.add("text-white", "font-weight-bold","pr-1");
  numberOfDaysP.innerHTML = "1";
  setInterval(function(){
    numberOfDaysP.innerHTML = (parseInt(numberOfDaysP.innerHTML) + 1).toString();
    if (parseInt(numberOfDaysP.innerHTML) % 365 === 0)
    {
      numberOfAgeP.innerHTML = (parseInt(numberOfAgeP.innerHTML) + 1).toString();
    }
  }, 1000);
  daysDiv.append(numberOfDaysP);
  let daysP = document.createElement("p");
  daysP.classList.add("text-white", "font-weight-bold");
  daysP.innerHTML = "days";
  daysDiv.append(daysP);
  userInfoDiv.append(daysDiv);

  // 4.Amount
  let amountDiv = document.createElement("div");
  amountDiv .classList.add("d-flex", "flex-row", "justify-content-center", "bg-navy", "col", "m-1", "py-2");
  let currencyP = document.createElement("p");
  currencyP .classList.add("text-white", "font-weight-bold",);
  currencyP .innerHTML = "¥";
  amountDiv.append(currencyP);
  numberOfAmountP .classList.add("text-white", "font-weight-bold");
  numberOfAmountP.innerHTML = "0";
  amountDiv.append(numberOfAmountP);
  userInfoDiv.append(amountDiv);
  return userInfoDiv;
}

function getMerchandiseCards(middleAreaDiv: HTMLDivElement) {
  const merchandises = getMerchandises();
  let container = document.createElement("div");
  container.id = "cards";
  merchandises.map(merchandise => {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("d-flex", "flex-row", "bg-navy", "m-1", "p-3","hover");
    cardDiv.addEventListener("click", function(){
      DisplayNone(container);
    });
    let merchandiseImg = document.createElement("img");
    merchandiseImg.src = merchandise.imageUrl;
    merchandiseImg.height = 100;
    merchandiseImg.width = 100;
    cardDiv.append(merchandiseImg);

    let detailDiv = document.createElement("div");
    detailDiv.classList.add("d-flex", "flex-column", "align-items-center", "ml-3", "col");
    
    let firstLineDiv = document.createElement("div");
    firstLineDiv.classList.add("d-flex", "justify-content-between", "align-items-center", "bg-navy", "col", "px-0");
    let merchandiseNameH4 = document.createElement("h4");
    merchandiseNameH4.classList.add("text-white", "font-weight-bold", "pr-1");
    merchandiseNameH4.innerHTML = merchandise.name;
    firstLineDiv.append(merchandiseNameH4);
    let purchaseQuantityH4 = document.createElement("h4");
    purchaseQuantityH4 .classList.add("text-white", "font-weight-bold", "pl-1");
    purchaseQuantityH4.innerHTML = "0";
    firstLineDiv.append(purchaseQuantityH4);
    detailDiv.append(firstLineDiv);

    let secondLineDiv = document.createElement("div");
    secondLineDiv.classList.add("d-flex", "justify-content-between", "align-items-center", "bg-navy", "col", "px-0");
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

function GetMainPage(){
  return Main();
}

export default GetMainPage;

