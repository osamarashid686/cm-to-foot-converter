let cm = document.getElementById("cm");
let foot = document.getElementById("feet");
let cmfinalvalue;
let footfinalvalue;
let Feetformual = 0.032808;
let Cmformual = 30.48;
cm.addEventListener('input',function(){
  let cm_value = this.value;
  cmfinalvalue = cm_value/Cmformual;
  if (!Number.isInteger(cmfinalvalue)) {
    cmfinalvalue = cmfinalvalue.toFixed(4);
  }
  foot.value = cmfinalvalue;

})
foot.addEventListener('input',function(){
  footfinalvalue = this.value / Feetformual;
  if (!Number.isInteger(footfinalvalue)) {
   footfinalvalue = footfinalvalue.toFixed(2);
  }
  cm.value = footfinalvalue;
})