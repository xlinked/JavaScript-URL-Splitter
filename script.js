//URL Splitter
function func() {
    var str = document.getElementById("string").value
    var remove = str.split("://").join(",").replaceAll(".",",")

    var array = remove.split("/")
    document.getElementById("result").innerHTML = array
    console.log(array)
};
    


