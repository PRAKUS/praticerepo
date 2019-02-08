/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
  var set1=document.getElementById("progressset1").value;var set2=document.getElementById("progressset2").value;
  var set3=document.getElementById("progressset3").value;var set4=document.getElementById("progressset4").value;
  var set5=document.getElementById("progressset5").value;var set6=document.getElementById("progressset6").value;
  var set7=document.getElementById("progressset7").value;var set8=document.getElementById("progressset8").value;
  var set9=document.getElementById("progressset9").value;var set10=document.getElementById("progressset10").value;
  var set11=document.getElementById("progressset11").value;var set12=document.getElementById("progressset12").value;
  if(set1!==100)
    {
      $("#set2,#set3,#set4,#set5,#set6,#set7,#set8,#set9,#set10,#set11,#set12,#set13").addClass("lockSet");
      $("#set2,#set3,#set4,#set5,#set6,#set7,#set8,#set9,#set10,#set11,#set12,#set13").removeClass("set");
      $("#Set2StartButton,#Set3StartButton,\n\
          #Set4StartButton,#Set5StartButton,#Set6StartButton,\n\
          #Set7StartButton,#Set8StartButton,#Set9StartButton,\n\
          #Set10StartButton,#Set11StartButton,#Set12StartButton,\n\
          #Set13StartButton").hide();
        document.getElementById("progressset2").value=0;
        document.getElementById("progressset3").value=0;
        document.getElementById("progressset4").value=0;
        document.getElementById("progressset5").value=0;
        document.getElementById("progressset6").value=0;
        document.getElementById("progressset7").value=0;
        document.getElementById("progressset8").value=0;
        document.getElementById("progressset9").value=0;
        document.getElementById("progressset10").value=0;
        document.getElementById("progressset11").value=0;
        document.getElementById("progressset12").value=0;
        document.getElementById("progressset13").value=0;
    }
    else
    {
       $("#set2").removeClass("lockSet");
       $("#set2").addClass("set");
       $("#CardLock2").hide();
       
    }
  
   
    
    
$("#card1").HTMLSVGconnect({
    stroke:"silver",
    strokeWidth:2,
    paths:[{start:"#card1",end:"#card2"},
            {start:"#card2",end:"#card3"},
            {start:"#card3",end:"#card4"},
            {start:"#card4",end:"#card5"},
            {start:"#card5",end:"#card6"},
            {start:"#card6",end:"#card7"},
            {start:"#card7",end:"#card8"},
            {start:"#card8",end:"#card9"},
            {start:"#card9",end:"#card10"},
            {start:"#card10",end:"#card11"},
            {start:"#card11",end:"#card12"},
            {start:"#card12",end:"#card13"}]
    
});
