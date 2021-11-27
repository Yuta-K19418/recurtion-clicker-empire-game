import AppConfig from "./appConfig";
import GetLoginPage from "./components/login";
import GetMainPage from "./components/main";
import DisplayBlock from "./diplayBlock";

let main = document.getElementById("main");
main?.classList.add("bg-dark", "d-flex", "justify-content-center", "p-md-5");
let login = document.createElement("div");
login.id = "loginContainer";
main?.append(login);

// GetLoginPage();

// const config = AppConfig();
// DisplayBlock(config.loginPage);

GetMainPage();