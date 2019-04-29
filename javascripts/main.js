changeTab = (evt, id) => {
    let tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    let tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].className = tabcontent[i].className.replace(" active", "");
    }
    document.getElementById(id).className += " active";
    // document.getElementById(id).style.transition = "visibility 1s";
    document.getElementById(id).style.display = "block";
    evt.currentTarget.className += " active";
    // document.getElementById(id).style.visibility = "visible";
    // document.getElementById(id).style.opacity = 100;
    // -webkit-transition: display 1s; /* Safari */
    // evt.currentTarget.className += " active" ;
    // console.log(document.getElementById(id).className);
    // document.getElementById(id).className += " active";
}