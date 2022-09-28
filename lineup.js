let dispLineUp = document.getElementById("disp")
let InputGoalKeeper = document.getElementById("g_K").value
let InputRightBack = document.getElementById("R_B").value
let InputCenterBack1 = document.getElementById("C_B1").value
let InputCenterBack2 = document.getElementById("C_B2").value
let InputLeftBack = document.getElementById("L_B").value
let InputCentralMidfielder = document.getElementById("C_M").value
let InputDefensiveMidfielder = document.getElementById("D_M").value
let InputAttackingMidfielder = document.getElementById("A_M").value
let InputLeftWingForward = document.getElementById("L_WF").value
let InputCenterForward = document.getElementById("C_F").value
let InputRightWingForward = document.getElementById("R_WF").value
showLine.style.display="none"
showface.style.display="block"
showface2.style.display="block"

class Club {
    constructor (name, GK, LB, CB1, CB2, RB, CM, DM, AM, LWF, CF, RWF) {
        this.name=name
        this.GK=GK
        this.LB=LB
        this.CB1=CB1
        this.CB2=CB2
        this.RB=RB
        this.CM=CM
        this.DM=DM
        this.AM=AM
        this.LWF=LWF
        this.CF=CF
        this.RWF=RWF
    }
   
}
 let myClub = new Club(teamName, goalKeeper, leftBack, centerBack1, centerBack2, rightBack, centralMidfielder, defensiveMidfielder, attackingMidfielder,leftWingForward, centerForward, rightWingForward)

function pick11() {
    if (g_K.value==""){
        alert("select  Goalkeeper")
    }else if (L_B.value==""){
        alert("select  Leftback")
    }else if (C_B1=="") {
        alert("select CB1")
    }else if (C_B2=="") {
        alert("select CB2")
     }else if (R_B=="") {
        alert("select Rightback")
     }else if (C_M=="") {
        alert("select Central Midlfielder")
     }else if (D_M=="") {
        alert("select Defensive Midlfielder")
     }else if (A_M=="") {
        alert("select Attacking Midlfielder")
     }else if (L_WF=="") {
        alert("select Left Wing Forward")
     }else if (R_WF=="") {
        alert("select Right Wing Forward")
     }else if (C_F=="") {
        alert("select Center Forward")
     }else{
    showface.style.display ="none"
    showLine.style.display="block"
    showface2.style.display="none"
//  console.log(g_K.value,L_B.value);
   //console.log(InputGoalKeeper,InputLeftBack,InputCenterBack1,InputCenterBack2,InputRightBack,InputCentralMidfielder,InputDefensiveMidfielder,InputAttackingMidfielder,InputLeftWingForward,InputCenterForward,InputRightWingForward)
      disp.innerHTML += `
      <div class="player GK"><i class="fa-solid fa-user fa-3x"></i><br><span>${g_K.value}<span></div>
      <div class="player" id="Lb"><i class="fa-solid fa-user fa-3x"></i><br><span>${L_B.value}<span></div>
 
      <div class="player" id="Cb1"><i class="fa-solid fa-user fa-3x"></i><br><span>${C_B1.value}<span></div>
      <div class="player" id="Cb2"><i class="fa-solid fa-user fa-3x"></i><br><span>${C_B2.value}<span></div>
     
      <div class="player" id="Rb"><i class="fa-solid fa-user fa-3x"></i><br><span>${R_B.value}</span></div>
      <div class="player" id="Cm"><i class="fa-solid fa-user fa-3x"></i><br><span>${C_M.value}</span></div>
     
      <div class="player" id="Dm"><i class="fa-solid fa-user fa-3x"></i><br><span>${D_M.value}</span></div>
      <div class="player" id="Am"><i class="fa-solid fa-user fa-3x"></i><br><span>${A_M.value}</span></div>
     
      <div class="player" id="Lwf"><i class="fa-solid fa-user fa-3x"></i><br><span>${L_WF.value}</span></div>
      <div class="player" id="Cf"><i class="fa-solid fa-user fa-3x"></i><br><span>${C_F.value}</span></div>
     
     <div class="player" id="Rwf"><i class="fa-solid fa-user fa-3x"></i><br><span>${R_WF.value}</span></div>
     `
    
 }
}
