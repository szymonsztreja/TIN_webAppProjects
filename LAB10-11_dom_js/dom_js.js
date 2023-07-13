function addDiv(){
    var elementDiv = document.createElement("div");
    elementDiv.style.cssText = 'background-color: #264653; height: 50px;';
    // (button)[0] inserts before first button in html
    var firstButton = document.getElementsByTagName("button")[0];
    document.body.insertBefore(elementDiv, firstButton);
}

function deleteDiv(){
    var delDiv = document.getElementsByTagName("div")[0];
    delDiv.remove();
}

function changeDiv3BckgrndClr() {
    var elem3 = document.getElementsByTagName("div")[2];
    elem3.style.cssText = "background-color: white;";
}

function textAllDivs(){
    var divs = document.getElementsByTagName("div");
    for( div of divs){
        div.innerHTML = "nowy tekst";
        div.style.cssText = "text-align: center; padding: 0 0; line-height: 50px;";
    }
}