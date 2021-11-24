import AppConfig from "../appConfig";
import getMerchandises from "../merchandises";

const Main = () => {
  const config = AppConfig();
  const AMOUNT_PER_A_CLICK = 25;

  let mainContainer = document.getElementById("main");

  let subContainer = document.createElement("div");
  subContainer.classList.add("d-flex", "bg-navy", "d-block", "my-5", "mx-3");
  subContainer.style.height = "100vh";
  subContainer.id = "mainContainer";

  let numberOfAmountP = document.createElement("p");
  
  let leftSection = document.createElement("div");
  leftSection.classList.add("bg-dark","col-5", "my-2", "mx-5");

  let hamburgerSection = document.createElement("div");
  hamburgerSection.classList.add("bg-navy", "m-1");

  let upperHamburgerDiv = document.createElement("div");
  upperHamburgerDiv.classList.add("d-flex", "flex-row", "justify-content-center","py-1", "pb-2");

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

  leftSection.append(hamburgerSection);

  let hamburgerImgDiv = document.createElement("div");
  hamburgerImgDiv.classList.add("d-flex", "align-items-start", "justify-content-center", "py-5", "hover");
  
  // Hamburger image in lower left section
  let hamburgerImg = document.createElement("img");
  hamburgerImg.src = config.hamburgerImg;
  hamburgerImg.height = 200;
  hamburgerImg.width = 300;
  hamburgerImg.addEventListener("click", function(){
    numberOfhamburgersP.innerHTML = (parseInt(numberOfhamburgersP.innerHTML) + 1).toString();
    numberOfAmountP.innerHTML = (parseInt(numberOfAmountP.innerHTML) + AMOUNT_PER_A_CLICK).toString();
  });
  hamburgerImgDiv.append(hamburgerImg);
  leftSection.append(hamburgerImgDiv);
  subContainer.append(leftSection);


  let rightSection = document.createElement("div");
  rightSection.classList.add("d-flex", "flex-column");

  let upperAreaDiv = document.createElement("div");
  let middleAreaDiv = document.createElement("div");
  let lowerAreaDiv = document.createElement("div");
  lowerAreaDiv.classList.add("d-flex", "flex-row", "justify-content-center");

  upperAreaDiv.append(getUserInfoDiv(numberOfAmountP));
  rightSection.append(upperAreaDiv);
  
  middleAreaDiv.classList.add("bg-dark");
  getMerchandiseCards(middleAreaDiv);
  middleAreaDiv.style.overflowY = "scroll";
  rightSection.append(middleAreaDiv);
  
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

  rightSection.append(lowerAreaDiv);
  

  subContainer.append(rightSection);

  mainContainer?.append(subContainer);
}

function getUserInfoDiv(numberOfAmountP: HTMLElement): HTMLElement{

  // User information
  // 1.User name
  let userInfoDiv = document.createElement("div");
  userInfoDiv.classList.add("d-flex","flex-wrap", "bg-dark", "my-2");
  let nameDiv = document.createElement("div");
  nameDiv.classList.add("text-center", "bg-navy", "col-5", "m-1", "p-2");
  let nameP = document.createElement("p");
  nameP.classList.add("text-white", "font-weight-bold");
  nameP.innerHTML = "test";
  nameDiv.append(nameP);
  userInfoDiv.append(nameDiv);
  
  // 2.User age
  let ageDiv = document.createElement("div");
  ageDiv.classList.add("d-flex", "flex-row", "justify-content-center", "bg-navy", "col-5", "m-1", "p-2");
  let numberOfAgeP = document.createElement("p");
  numberOfAgeP.classList.add("text-white", "font-weight-bold","pr-1");
  numberOfAgeP.innerHTML = "1";
  ageDiv.append(numberOfAgeP);
  let ageP = document.createElement("p");
  ageP.classList.add("text-white", "font-weight-bold");
  ageP.innerHTML = "years old";
  ageDiv.append(ageP);
  userInfoDiv.append(ageDiv);

  // 3.Passed days
  let daysDiv = document.createElement("div");
  daysDiv.classList.add("d-flex", "flex-row", "justify-content-center", "bg-navy", "col-5", "m-1", "p-2");
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
  amountDiv .classList.add("d-flex", "flex-row", "justify-content-center", "bg-navy", "col-5", "m-1", "p-2");
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
  merchandises.map(merchandise => {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("d-flex", "flex-row", "bg-navy", "m-1", "p-3","hover");
    let merchandiseImg = document.createElement("img");
    merchandiseImg.src = merchandise.imageUrl;
    merchandiseImg.height = 150;
    merchandiseImg.width = 150;
    cardDiv.append(merchandiseImg);

    let detailDiv = document.createElement("div");
    detailDiv.classList.add("d-flex", "flex-column", "justify-content-center", "ml-3");
    
    let firstLineDiv = document.createElement("div");
    firstLineDiv.classList.add("d-flex", "align-items-center", "bg-navy");
    let merchandiseNameH3 = document.createElement("h3");
    merchandiseNameH3.classList.add("text-white", "font-weight-bold", "pr-1");
    merchandiseNameH3.innerHTML = merchandise.name;
    firstLineDiv.append(merchandiseNameH3);
    let purchaseQuantityH3 = document.createElement("h3");
    purchaseQuantityH3 .classList.add("text-white", "font-weight-bold", "pl-1");
    purchaseQuantityH3.innerHTML = "0";
    firstLineDiv.append(purchaseQuantityH3);
    detailDiv.append(firstLineDiv);

    let secondLineDiv = document.createElement("div");
    secondLineDiv.classList.add("d-flex", "justify-content-between", "bg-navy");
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
    middleAreaDiv.append(cardDiv);
  });
}

function GetMainPage(){
  return Main();
}

export default GetMainPage;
