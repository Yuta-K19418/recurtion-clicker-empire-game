import AppConfig from "./appConfig";
import getMerchandises, { Merchandise } from "./merchandises";

function SaveData() {
    const config = AppConfig();
    let merchandisesStringList: string[] = [];
    getMerchandises().map(merchandise => {
        let element = document.querySelector<HTMLElement>(`#${merchandise.name.replace(/\s+/g, "")}`);
        merchandisesStringList.push(`${element?.id}: ${element?.innerHTML}`);
    })

    const jsonString = `[{
        userName: ${document.querySelector<HTMLElement>(`#${config.userName}`)!.innerHTML},
        userData: {
            userAge: ${document.querySelector<HTMLElement>(`#${config.userAge}`)!.innerHTML},
            passedDays: ${document.querySelector<HTMLElement>(`#${config.passedDays}`)!.innerHTML},
            money: ${document.querySelector<HTMLElement>(`#${config.money}`)!.innerHTML},
            hamburgers: ${document.querySelector<HTMLElement>(`#${config.hamburger}`)!.innerHTML},
            ${merchandisesStringList.join(",")}
        }        
    }]`;

    let userName = document.querySelector<HTMLElement>(`#${config.userName}`)!.innerHTML;

    localStorage.setItem(userName, jsonString);
    console.log(jsonString);
}

export default SaveData;