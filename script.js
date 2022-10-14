

let profileMenu = document.getElementById("profileMenu");
function toggleMenu()
{
    profileMenu.classList.toggle("open-menu");

}


let sidebarActivity = document.getElementById("sidebarActivity");
let moreLink = document.getElementById("showMoreLink");
function toggleActivity()
{
   sidebarActivity.classList.toggle("open-activity");

   if (sidebarActivity.classList.contains("open-activity"))
   {
    moreLink.innerHTML= "Show Less <b>-</b>";
   }
   else
   {
    moreLink.innerHTML= "Show more <b>+</b>";
   }

}


var loader=document.getElementById("preloader");
window.addEventListener("load" ,function()  //after loading remove it
{
  loader.style.display="none";
})





var moon =document.getElementById("moon"); 
var displayText = document.getElementById("displayText");//id="displayText"
moon.onclick =function() //when clicking on the icon
{
  document.body.classList.toggle("dark-theme"); //add the dark theme and change some icons
 
   if(body.classList.contains("dark-theme"))
   {
    displayText.innerHTML = "Display light mode";

   }
   else
   {
    displayText.innerHTML = "Display Dark mode";

   }
}



