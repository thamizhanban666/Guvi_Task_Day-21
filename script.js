function btnfun() {
  let i = 10;
  let a = (f)=>{
    let d = document.createElement("div");
    d.classList.add("fs-3");
    document.getElementById("maindiv").appendChild(d);  
    console.log(i);
    d.innerText = i;
    if(i==1){
      console.log("Happy Independence Day") ;
      let d1 = document.createElement("div");
      d1.classList.add("fs-3");
      document.getElementById("maindiv").appendChild(d1);
      d1.innerText = "Happy Independence Day";
      return;
    }
    i--;
    f(a);
  }
  let b = (f)=>{
    f(b);
  }
  a(b);
}