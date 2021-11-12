import AppConfig from "./appConfig";
import GetLoginPage from "./components/login";
import GetMainPage from "./components/main";
import DisplayBlock from "./diplayBlock";

let main = document.getElementById("main");
main?.classList.add("vh-100", "bg-dark", "d-flex", "flex-column", "justify-content-center", "align-items-center");
let login = document.createElement("div");
login.id = "loginContainer";
main?.append(login);

// GetLoginPage();

// const config = AppConfig();
// DisplayBlock(config.loginPage);

GetMainPage();