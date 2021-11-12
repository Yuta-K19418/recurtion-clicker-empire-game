function DisplayNone(element: HTMLElement | null){
  element?.classList.remove("d-block");
  element?.classList.add("d-none");
}

export default DisplayNone;