function DisplayBlock(element: HTMLElement | null){
  element?.classList.remove("d-none");
  element?.classList.add("d-block");
}

export default DisplayBlock;