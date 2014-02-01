function start(){
    debugger;
    var xmlhttp, data, items;

    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET","xml/list.xml",false);
    xmlhttp.send();
    parser=new DOMParser();
    data = parser.parseFromString(xmlhttp.responseXML, "application/xml");
    alert(data);
}