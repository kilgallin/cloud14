function loadHeader(){
    var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function() {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
            //alert(xmlhttp.responseText);
            document.getElementById("header").innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET","header.html",true);
    xmlhttp.send();
}