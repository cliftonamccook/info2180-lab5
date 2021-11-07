window.onload = () => {
    document.getElementsByTagName("input")[0] = '';
    let button = document.getElementById("lookup");
    button.addEventListener("click", getCountryInfo);
};

function getCountryInfo(event) {
    event.preventDefault();
    let actionScript = "world.php";
    let key = document.getElementsByTagName("input")[0].name;
    let val = document.getElementsByTagName("input")[0].value;
    let url = actionScript+'?'+key+'='+val;
    fetch(url)
    .then(response => {
        if(response.ok) {
            return response.text();
        } else {
            return Promise.reject("Promise rejected");
        }
    })
    .then(data => {document.getElementById("result").innerHTML = data;})
    .catch(error => alert("Error fetching data: " + error));
}