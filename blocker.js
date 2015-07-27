function blocker() {
    // Creates an array of the <a> tags on the page
    var link = document.getElementsByTagName("a");
    console.log("BEGIN. link[0] = ", link[0]);
    // Cur contains only the current <a> tag's href link
    var cur = link[0].attributes.href;
    console.log("cur = ",cur);
    for (i = 0; i < link.length; i++) {
        console.log("NEXT");
        // Sets cur to the next link
        cur = link[i];
        //If the URL does not contain "uwaterloo.ca"
        if(cur.href.indexOf("uwaterloo.ca") <= -1) {
            alert("Blocked URL");
            // Remove link
            link[i].removeAttribute("href", "");
            console.log("Link has been set to Home");
        }
    }
}

blocker();