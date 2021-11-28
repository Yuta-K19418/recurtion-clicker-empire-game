import AppConfig from "./appConfig";
import GetLoginPage from "./components/login";
import DisplayBlock from "./diplayBlock";
import DisplayNone from "./displayNone";

let main = document.getElementById("main");
main?.classList.add("bg-dark", "d-flex", "justify-content-center", "p-md-5");
main!.style.height = "100vh";
let loginContainer = document.createElement("div");
loginContainer.id = "loginContainer";
let mainContainer = document.createElement("div");
mainContainer.id = "mainContainer";
main?.append(loginContainer, mainContainer);

GetLoginPage();

const config = AppConfig();
DisplayBlock(config.loginPage);
DisplayNone(config.mainPage);