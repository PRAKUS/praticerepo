/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 

$(document).ready(function(){
  
    var editor = CodeMirror.fromTextArea(document.getElementById("ide"), {
        lineNumbers: true,
        styleActiveLine: true,
        matchBrackets: true
      });
       editor.setSize("100%","100%");
   function theme(){
      var option=$("#theme_selector").val();
      editor.setOption("theme",option);
    }
      
    $( "#theme_selector" ).change( theme );
        theme();
       
      function langauge()
      {
          var option2=$("#langauge_selector").val();
          editor.setOption("mode",option2);
          console.log(option2);
      }
    $("#langauge_selector").change(langauge);
      langauge();
      
    $("#Testcase").click(function()
    {
        document.getElementById("Testcase").style.borderBottomColor="#20fc8f";
        document.getElementById("Console").style.borderBottomColor="#353535";
    });
     $("#Console").click(function()
    {
        document.getElementById("Console").style.borderBottomColor="#20fc8f";
         document.getElementById("Testcase").style.borderBottomColor="#353535";
    });
    $("#pull-down-button").click(function()
    {
        $(".testcase-tab").height("0");
        $("#texteditor").height("90%");
        editor.setSize("100%","100%");
        $(".btn-testcase").hide();
        $("#pull-down-button").hide();
        $("#pull-up-button").show();
         
    });
    $("#pull-up-button").click(function()
    {
        $(".testcase-tab").height("25%");
        $("#texteditor").height("65%");
        $(".btn-testcase").show();
        $("#pull-up-button").hide();
        $("#pull-down-button").show();
         
    });
    $("#question-list").click(function()
    {
        $("#question_tab").fadeIn();
        $("#Git_Hub").hide();
        $("#peer-to-peer").hide();
        $("#leader_board").hide();
        
        
    });
    $("#github").click(function()
    {
        $("#question_tab").hide();
        $("#Git_Hub").fadeIn();
        $("#peer_to_peer").hide();
        $("#leader_board").hide();
        $("#commenttab").hide();
        $("#bookmarktab").hide();
        document.getElementById("pagename").innerHTML="GITHUB";
    });
    $("#peertopeer").click(function()
    {
        $("#question_tab").hide();
        $("#Git_Hub").hide();
        $("#peer_to_peer").fadeIn();
        $("#leader_board").hide();
        $("#commenttab").hide();
         $("#bookmarktab").hide();
         document.getElementById("pagename").innerHTML="peer to peer";
    });
    $("#LeaderBoard").click(function()
    {
        $("#question_tab").hide();
        $("#Git_Hub").hide();
        $("#peer_to_peer").hide();
        $("#leader_board").fadeIn(1000);
        $("#commenttab").hide();
         $("#bookmarktab").hide();
         document.getElementById("pagename").innerHTML="Leader Board";
    });
    $("#Comment").click(function()
    {
        $("#question_tab").hide();
        $("#Git_Hub").hide();
        $("#peer_to_peer").hide();
        $("#leader_board").hide();
        $("#commenttab").fadeIn();
         $("#bookmarktab").hide();
         document.getElementById("pagename").innerHTML="Comment";
        
    });
    $("#BookMark").click(function()
    {
        $("#question_tab").hide();
        $("#Git_Hub").hide();
        $("#peer_to_peer").hide();
        $("#leader_board").hide();
        $("#commenttab").hide();
         $("#bookmarktab").fadeIn(1000);
         document.getElementById("pagename").innerHTML="Your Bookmarks";
    });
});
