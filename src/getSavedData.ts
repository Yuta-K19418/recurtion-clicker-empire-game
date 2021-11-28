function GetSavedData(inputName: string) {
    
    const savedData = localStorage.getItem(inputName);
    if (savedData === null) {
        return null;
    }
    else {
        return savedData;
    }
}

export default GetSavedData;