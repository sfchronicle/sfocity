
["tech","culture","baby","adventure","overpack","terminal"].forEach(function(section){
  document.getElementById("button"+section).addEventListener("click", function() {
    var sectionElements = document.getElementsByClassName("section");
    var buttonElements = document.getElementsByClassName("button");
    for(var i = 0; i < sectionElements.length; i++){
      sectionElements[i].className = "section";
      buttonElements[i].className = "button";
    };
    document.getElementById("section"+section).className += " selected";
    document.getElementById("button"+section).className += " selected";
  });
});


