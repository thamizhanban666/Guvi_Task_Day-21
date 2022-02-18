let d = document.getElementById("div");  
btnfun = () => {
  let i = 10;
  let a = (f)=>{
    setTimeout(() => {
      if(i>=1){ 
        d.innerText = i;
      }
      if(i==0){
        d.innerText = "Happy Independence Day";
        return;
      }
      i--;
      f(a);
    },1000);
  }
  let b = (f)=>{
    f(b);
  }
  a(b);
}