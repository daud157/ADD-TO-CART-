// const { colors } = require("prompt");

let productlist=document.querySelector('#productlist');
let list=document.querySelector('#list');
var bt=document.getElementById('#bt');
let tottal=document.querySelector('#tottal');


const removefunction=(rem)=>{
 
    
  let t;
  let p=tottal.innerHTML;
  // var numbersArray = p.match(/\d+/g);
  let numbersString = p.replace(/\D/g, "");
  console.log(numbersString)
  let par=rem.parentElement;
  let k=parseInt(rem.previousElementSibling.innerHTML);
  par.remove();
 
  tottal.innerHTML="Tottal Amount is " +eval(numbersString-k);
  let last=tottal.innerHTML.replace(/\D/g,"");
  if(last==0){
   tottal.innerHTML="Your Cart Is Empty"
  }
  else
  tottal.innerHTML="  Your Tottal Amount is " +eval(numbersString-k);
}
  
const addToCart=(add)=>{

  let total=0;
  const clone=add.parentElement;
  const clonedNode = clone.cloneNode(true);
  list.appendChild(clonedNode);

console.log("btn")
    list.childNodes.forEach(div=> {
    let Addtocartbtn= div.firstChild.nextElementSibling.nextElementSibling.nextElementSibling;
    Addtocartbtn.innerHTML="Remove From Cart";
    // Addtocartbtn.style.background="red";
  // let o=div.firstChild.nextElementSibling.nextElementSibling.innerHTML
  // div.firstChild.nextElementSibling.nextElementSibling.innerHTML="RS"+o;
  
     
   
    // let n=parseInt(div.firstChild.nextElementSibling.nextElementSibling.innerHTML);
    let n=parseInt(div.firstChild.nextElementSibling.nextElementSibling.innerHTML);
    // let r=p.replace(/\D/g,"");

    console.log(n)
    total=eval(total+n);
    
    Addtocartbtn.setAttribute("onclick", "removefunction(this)");
    div.style.margin="10px"
    div.style.height="150px"
    div.style.width="150px"
    div.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.style.fontSize="13px"
    div.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.style.width="130px"
    div.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.style.textAlign="Left"
    // div.firstChild.style.borderradius="10px"
    div.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.style.padding="8px"
    div.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.style.marginLeft="20px"

  });
  
  tottal.innerHTML="Your Tottal Amount is  "+total;
   


  
}
