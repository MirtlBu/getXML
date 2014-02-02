var fired = true;
function start(){
    var xmlhttp;
    if(fired){
        fired = false;
        if (window.XMLHttpRequest)
        {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp=new XMLHttpRequest();
        }
        else
        {// code for IE6, IE5
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.open("GET","xml/list.xml",true);
        xmlhttp.setRequestHeader('Content-Type', 'text/xml');
        xmlhttp.onreadystatechange = function () {
            debugger;
            if (xmlhttp.readyState == 4) {
                var a = document.getElementsByTagName("body")[0];
                a.removeChild(a.childNodes[3]);
                var string = xmlhttp.responseText;
                var wrap = (new DOMParser()).parseFromString(string, "text/xml");
                var titles = wrap.getElementsByTagName("title");
                var pictures = wrap.getElementsByTagName("picture");
                var links = wrap.getElementsByTagName("link");
                var descriptions = wrap.getElementsByTagName("description");
                for(var i = 0; i < titles.length; i++){
                    var newdiv = document.createElement("div");
                    document.getElementById("wrap").appendChild(newdiv);
                    var pTitle = document.createElement("p");
                    pTitle.className = "title";
                    pTitle.appendChild(document.createTextNode(titles[i].innerHTML));
                    var pPic = document.createElement("img");
                    pPic.className = "picture";
                    pPic.setAttribute("src", pictures[i].innerHTML);
                    var pLink = document.createElement("a");
                    pLink.className = "link";
                    pLink.setAttribute("href",links[i].innerHTML);
                    pLink.appendChild(document.createTextNode(links[i].innerHTML));
                    var pDesc = document.createElement("P");
                    pDesc.className = "description";
                    pDesc.appendChild(document.createTextNode(descriptions[i].innerHTML));
                    newdiv.appendChild(pTitle);
                    newdiv.appendChild(pPic);
                    newdiv.appendChild(pLink);
                    newdiv.appendChild(pDesc);
                }
            }
        };
        xmlhttp.send();
    }
}