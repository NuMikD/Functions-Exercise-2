"use strict";
{
 let position;
 let distance = 5;
let posDir;
let negDir;
 
function pos() {
  position = 0;
  if(posDir);
}
pos();
  
  function moveForward(){
    posDir = position += distance++;

    console.log(posDir);
  } 

  moveForward(distance);

  function moveBackward() {
    distance = 3;
    negDir = position -= distance--;

    console.log(negDir);
  }
  
  moveBackward();

  function turnAround() {

    // if(position){
    //   position.reverse();
    // }

    console.log();
  }
turnAround(position);
}
