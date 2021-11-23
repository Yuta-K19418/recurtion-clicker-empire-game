import AppConfig from "../appConfig";

const Main = () => {
  const config = AppConfig();
  const AMOUNT_PER_A_CLICK = 25;

  let mainContainer = document.getElementById("main");

  let subContainer = document.createElement("div");
  subContainer.classList.add("d-flex", "bg-navy", "d-block", "my-5", "mx-3");
  subContainer.style.height = "100vh";
  subContainer.id = "mainContainer";

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
  //rightSection.classList.add("col-10");

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
  let numberOfAmountP = document.createElement("p");
  numberOfAmountP .classList.add("text-white", "font-weight-bold");
  numberOfAmountP.innerHTML = "0";
  amountDiv.append(numberOfAmountP);
  userInfoDiv.append(amountDiv);

  rightSection.append(userInfoDiv);
  
  let upperAreaDiv = document.createElement("div");
  let middleAreaDiv = document.createElement("div");
  let lowerAreaDiv = document.createElement("div");

  subContainer.append(rightSection);

  mainContainer?.append(subContainer);
}

function GetMainPage(){
  return Main();
}

export default GetMainPage;