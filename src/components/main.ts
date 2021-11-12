import AppConfig from "../appConfig";

const Main = () => {
  const config = AppConfig();

  let mainContainer = document.getElementById("main");

  let subContainer = document.createElement("div");
  subContainer.classList.add("d-flex", "bg-navy", "d-block", "my-5", "mx-3");
  subContainer.style.height = "100vh";
  subContainer.id = "mainContainer";

  let leftSection = document.createElement("div");
  leftSection.classList.add("bg-dark","col-3", "my-2", "mx-1");

  let hamburgerSection = document.createElement("div");
  hamburgerSection.classList.add("bg-navy", "m-1");

  let upperHamburgerDiv = document.createElement("div");
  upperHamburgerDiv.classList.add("d-flex", "flex-row", "justify-content-center","py-1", "pb-2");

  let numberOfhamburgersP = document.createElement("p");
  numberOfhamburgersP.classList.add("text-white", "font-weight-bold", "pr-1");
  numberOfhamburgersP.innerHTML = "0";
  upperHamburgerDiv.append(numberOfhamburgersP);

  let BurgersP = document.createElement("div");
  BurgersP.classList.add("text-white", "font-weight-bold", "pl-1");
  BurgersP.innerHTML = "Burgers";
  upperHamburgerDiv.append(BurgersP);
  hamburgerSection.append(upperHamburgerDiv);

  let lowerHamburgerDiv = document.createElement("div");
  lowerHamburgerDiv.classList.add("d-flex", "flex-row", "justify-content-center", "pb-2");

  let oneClickP = document.createElement("p");
  oneClickP.classList.add("text-white", "font-weight-bold");
  oneClickP.innerHTML = "one click ￥25";
  lowerHamburgerDiv.append(oneClickP);
  hamburgerSection.append(lowerHamburgerDiv);

  leftSection.append(hamburgerSection);

  let hamburgerImgDiv = document.createElement("div");
  hamburgerImgDiv.classList.add("d-flex", "align-items-start", "justify-content-center", "py-5");
  
  let hamburgerImg = document.createElement("img");
  hamburgerImg.src = config.hamburgerImg;
  hamburgerImg.height = 300;
  hamburgerImg.width = 400;
  hamburgerImgDiv.append(hamburgerImg);
  leftSection.append(hamburgerImgDiv);
  subContainer.append(leftSection);


  let rightSection = document.createElement("div");
  rightSection.classList.add("col-9");
  let userInfoDiv = document.createElement("div");
  userInfoDiv.classList.add("d-flex","flex-wrap", "bg-dark", "my-2", "col-9");
  let nameDiv = document.createElement("div");
  nameDiv.classList.add("text-center", "bg-navy", "col-5", "m-1", "p-2");
  let nameP = document.createElement("p");
  nameP.classList.add("text-white", "font-weight-bold");
  nameP.innerHTML = "test";
  nameDiv.append(nameP);
  userInfoDiv.append(nameDiv);
  
  let ageDiv = document.createElement("div");
  ageDiv.classList.add("text-center", "bg-navy", "col-5", "m-1", "p-2");
  let ageP = document.createElement("p");
  ageP.classList.add("text-white", "font-weight-bold");
  ageP.innerHTML = "1 years old";
  ageDiv.append(ageP);
  userInfoDiv.append(ageDiv);

  let daysDiv = document.createElement("div");
  daysDiv.classList.add("text-center", "bg-navy", "col-5", "m-1", "p-2");
  let daysP = document.createElement("p");
  daysP.classList.add("text-white", "font-weight-bold");
  daysP.innerHTML = "1 days";
  daysDiv.append(daysP);
  userInfoDiv.append(daysDiv);

  let amountDiv = document.createElement("div");
  amountDiv.classList.add("text-center", "bg-navy", "col-5", "m-1", "p-2");
  let amountP = document.createElement("p");
  amountP.classList.add("text-white", "font-weight-bold");
  amountP.innerHTML = "¥100";
  amountDiv.append(amountP);
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