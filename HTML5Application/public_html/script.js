/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
   var set1=document.getElementById("progressset1").value;
                    if (set1!==100)
                        {
                         $("#set2").removeClass("set");
                         $("#set2").addClass("lockSet");
                         $("#Set2LockPic").hide();
                         $("#Set2StartButton").hide();
                          $("#CardLock").show();
                         document.getElementById("progressset2").value=0;
                        }
                    else
                        {
                         $("#set2").removeClass("lockset");
                         $("#set2").addClass("Set");
                         $("#Set2LockPic").show();
                         $("#CardLock").hide();
                        }

