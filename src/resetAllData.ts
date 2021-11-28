import AppConfig from "./appConfig";
import getMerchandises, { Merchandise } from "./merchandises";

function ResetAllData() {
    const config = AppConfig();

    document.querySelector<HTMLElement>(`#${config.hamburger}`)!.innerHTML = "0";
    document.querySelector<HTMLElement>(`#${config.userAge}`)!.innerHTML = "20";
    document.querySelector<HTMLElement>(`#${config.passedDays}`)!.innerHTML = "0";
    document.querySelector<HTMLElement>(`#${config.money}`)!.innerHTML = "50000";

    getMerchandises().map(merchandise => {
        document.querySelector<HTMLElement>(`#${merchandise.name.replace(/\s+/g, "")}`)!.innerHTML = "0";
    })

}

export default ResetAllData;