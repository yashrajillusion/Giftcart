var container = document.querySelector(".container");
var image = ["Images/NY_2022.png","Images/valentine.jpg","Images/Roses.jpg","Images/Hatke.jpg","Images/Birthday-1.jpg"];
var index=0;
function forward(){
  index++;
  if(index > image.length-1){
    index=0;
  }
  container.style.backgroundImage = `url(${image[index]})`;
}
function backward(){
  index--;
  if(index < 0){
    index = image.length - 1;
  }
 container.style.backgroundImage = `url(${image[index]})`;
}