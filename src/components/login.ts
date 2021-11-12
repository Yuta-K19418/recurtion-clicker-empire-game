import DisplayBlock from "../diplayBlock";
import DisplayNone from "../displayNone";
import GetMainPage from "./main";

const Login = () => {
  let mainContainer = document.getElementById("loginContainer");
  mainContainer?.classList.add("bg-white", "text-center", "p-4");

  let titleDiv = document.createElement("div");
  let titleH2 = document.createElement("h2");
  titleH2.classList.add("pb-3");
  titleH2.innerHTML = "Clicker Empire Game";
  titleDiv.append(titleH2);

  let nameDiv = document.createElement("div");
  nameDiv.classList.add("pb-4");
  let inputName = document.createElement("input");
  inputName.classList.add("form-control");
  inputName.placeholder = "Your name";
  nameDiv.append(inputName);
  
  let buttonDiv = document.createElement("div");
  buttonDiv.classList.add("d-flex", "justify-content-center", "flex-wrap");
  let newButtonDiv = document.createElement("div");
  newButtonDiv.classList.add("col-6", "pl-0");
  let newButton = document.createElement("button");
  newButton.classList.add("btn", "btn-primary", "hover", "col-12");
  newButton.innerHTML = "New";
  newButton.addEventListener("click", function(){
    validateInputName(inputName, mainContainer);
  });
  newButtonDiv.append(newButton);
  buttonDiv.append(newButtonDiv);
  let loginButtonDiv = document.createElement("div");
  loginButtonDiv.classList.add("col-6", "pr-0");
  let loginButton = document.createElement("button");
  loginButton.classList.add("btn", "btn-primary", "hover", "col-12");
  loginButton.innerHTML = "Login";
  loginButton.addEventListener("click", function(){
    validateInputName(inputName, mainContainer);
  });
  loginButtonDiv.append(loginButton);
  buttonDiv.append(loginButtonDiv);

  mainContainer?.append(titleDiv, nameDiv, buttonDiv);
}

const validateInputName = (inputName: HTMLInputElement, mainContainer: HTMLElement | null) => {
  if (inputName.value === null || inputName.value === ""){
    alert("名前を入力してください。");
  } else {
    DisplayNone(mainContainer);
    GetMainPage();
  }
}

function GetLoginPage() {
  return Login();
}

export default GetLoginPage;