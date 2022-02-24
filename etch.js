let box= document.querySelector('#container');
let buttons = document.querySelectorAll('button');
let newT =16;
drawGrid();
changeColor();
function drawGrid()
{
    for(let i=0;i<newT;i++)                     // creates the div, i.e: rows 
    {
    let div = document.createElement('div');
    box.appendChild(div);                       // adds the created div node to the box node ( which has the main container)
    for(let j =0;j<newT;j++)                    // creates the columns for each row
    {
        newDiv = document.createElement('div');
        div.appendChild(newDiv);            // Adds the created newDiv to the div node ( columns comes up )
      }
    }
}
function changeColor()
    {
        let sq = document.querySelectorAll("div");    // selects all the divs inside the document/file and returns a nodelist
        let myArr = Array.from(sq);                    //creates array from the nodelist
        let a = (newT*newT)+(newT-1);                  // inluding all divs, there will be a increase in the divs than thought, as each row is calculated as a div, thus makinng the count of div greater eveytime 
        for(let i =0;i<=((a));i++)                     //loops and goes through the array one by one
        {
          myArr[i].addEventListener('mouseover',()=>{    //change color
          myArr[i].style.backgroundColor = "yellow";
          });
        }
    }
buttons.forEach((button)=>{
  button.addEventListener('click',()=>{
    let t = button.value;
    if(t ==='reset')
    {
    newT = prompt("Enter the grid layout you wish to have (a*a)","Maximum is 100");
    removeAllChildNodes(box);
    drawGrid();
    changeColor();
    }
    else if(t === 'colour')
    {
    RandomColor();
    }
    });
});
function removeAllChildNodes(parent)                            // to remove all childnodes from the parent
{
  while (parent.firstChild)                                   // while the first child is true, it will remove the first child, as its a live list, the second child becomes the first child, once its removed. 
  {
    parent.removeChild(parent.firstChild);
  }
}
function RandomColor()
{
  let sq = document.querySelectorAll("div");
  let myArr = Array.from(sq);       
  let a =((newT*newT)+(newT-1));    
  for(let i =0;i<=((a));i++)   
  {
    myArr[i].addEventListener('mouseenter',()=>{
    let c = Math.floor(Math.random()*16777215).toString(16);
    myArr[i].style.backgroundColor = "#"+c ;
    });
  }
}

