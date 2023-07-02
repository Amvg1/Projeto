function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  /* 1. condicional botão liga/desliga:
  if (html.classList.contains('light')) { 
    html.classList.remove('light') 
  } else { 
    html.classList.add('light') 
  } */

  // 2. trocar a imagem junto:
  //pegar a tag img;
  const img = document.querySelector("#profile img")
  
  //condição:
  //substituir a imagem.
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light;
    img.setAttribute("src", "./assets/assets/avatar B 2.png")
    
  } else {
    //senão, manter a imagem normal.
    img.setAttribute("src", "./assets/assets/avatar B.png")
  }
}