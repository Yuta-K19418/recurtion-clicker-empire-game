import AppConfig from "../appConfig";

const Main = () => {
  const config = AppConfig();

  let mainContainer = document.getElementById("main");

  let subContainer = document.createElement("div");
  subContainer.classList.add("d-flex", "col-11", "bg-navy", "d-block");
  // subContainer.style.height = "100vh";
  subContainer.id = "mainContainer";

  let leftSection = document.createElement("div");
  leftSection.classList.add("bg-dark","col-4", "my-2", "mx-1");

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

  mainContainer?.append(subContainer);
}

function GetMainPage(){
  return Main();
}

export default GetMainPage;