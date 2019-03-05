/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function()
{   
     var editor = CodeMirror.fromTextArea(document.getElementById("ide"), {
        lineNumbers: true,
        styleActiveLine: true,
        matchBrackets: true
      });
       editor.setSize("100%","100%");
    function theme(){
      var option=$("#theme").val();
      editor.setOption("theme",option);
    }
    function langauge()
    {
        var langaugeopt=$("#langauge").val();
        editor.setOption("mode",langaugeopt);
        switch(langaugeopt)
        {
         case("python"):
                document.getElementById("programme_name").innerHTML="name.py";
                break;
        case("javascript"):
                document.getElementById("programme_name").innerHTML="name.js";
                break;
        case("php"):
                document.getElementById("programme_name").innerHTML="name.php";
                break; 
        case("htmlembedded"):
             document.getElementById("programme_name").innerHTML="name.html";
                break; 
        default:
            document.getElementById("programme_name").innerHTML="name";
        
        }
                
        console.log(langaugeopt);
    }
    $("#langauge").change(langauge);
    langauge();
      
    $( "#theme" ).change( theme );
        theme();  
   
   $("#list").click(function()
   {
       $("#default-header,#question-elobration,#list").hide();
       $("#question-header,#questions-list,#close").fadeIn();
       $("#github-main,#peer,#leaderboard,#comments,#bookmarks").hide();
       document.getElementById("header").innerHTML="";
   }); 
   $("#close").click(function()
   {
       $("#list,#default-header").fadeIn();
       $("#close,#question-header,#questions-list").hide();
       $("#github-main,#peer,#leaderboard,#comments,#bookmarks").hide();
   });
   $("#ans1").click(function()
   {
        $("#submit-yes").fadeIn();
        $("#submit-no").hide();
        $("#ans1").css("color","#06e278");
   });
   $("#q1").click(function()
   {
       $("#question-elobration").fadeIn();
       $("#list").fadeIn();
       $("#default-header").fadeIn();
       $("#questions-list").hide();
       $("#close").hide();
       $("#question-header").hide();
   });
   $("#profile-tip").click(function()
   {
       $("#github-main,#peer,#leaderboard,#comments,#bookmarks").hide();
       
       document.getElementById("header").innerHTML="";
   });
   $("#git-tip").click(function()
   {
       $("#peer,#leaderboard,#comments,#bookmarks").hide();
       $("#question-elobration,#list").hide();
        $("#close,#questions-list").hide();
       $("#github-main,#list").fadeIn();
       document.getElementById("header").innerHTML="Your Git submission";
   });
   $("#leadercrown-tip").click(function()
   {
       $("#github-main,#peer,#comments,#bookmarks").hide();
       $("#question-elobration,#list").hide();
        $("#close,#questions-list").hide();
       $("#leaderboard,#list").fadeIn();
        document.getElementById("header").innerHTML="Newbie Leaderboard";
   });
   $("#peers-tip").click(function()
   {
       $("#github-main,#leaderboard,#comments,#bookmarks").hide();
       $("#question-elobration,#list").hide();
        $("#close,#questions-list").hide();
       $("#peer,#list").fadeIn();
       document.getElementById("header").innerHTML="";
   });
   $("#comment-tip").click(function()
   {
       $("#question-elobration").hide();
        $("#close,#questions-list").hide();
       $("#github-main,#peer,#leaderboard,#bookmarks,#list").hide();
       $("#comments,#list").fadeIn();
       document.getElementById("header").innerHTML="Comments";
   });
   $("#bookmark-tip").click(function()
   {
       $("#github-main,#peer,#leaderboard,#comments").hide();
        $("#close,#questions-list").hide();
       $("#bookmarks,#list").fadeIn();
       $("#question-elobration").hide();
       document.getElementById("header").innerHTML="Bookmarks";
   });
   $("#up-btn").click(function()
   {
       $("#down-btn").show();
       $("#up-btn,#testcases,#console-test").hide();
       document.getElementById("console-area").style.height="7%";
       document.getElementById("ide-area").style.height="93%";
       document.getElementById("testcase-title").style.height="100%";

       
   });
   $("#down-btn").click(function()
   {
       $("#up-btn,#testcases,#console-test").show();
       $("#down-btn").hide();
       document.getElementById("console-area").style.height="25%";
       document.getElementById("ide-area").style.height="75%";
       document.getElementById("testcase-title").style.height="25%";
   });
  
   
});