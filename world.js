window.onload = () => {
    document.getElementsByTagName("input")[0] = '';
    let button = document.getElementById("lookup");
    let city = document.getElementById("lookup-cities");
    button.addEventListener("click", getCountryInfo);
    city.addEventListener("click", getCityInfo);
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


function getCityInfo() {
    let context = 'cities';
    let actionScript = "world.php";
    let key = document.getElementsByTagName("input")[0].name;
    let val = document.getElementsByTagName("input")[0].value;
    let url = actionScript+'?'+key+'='+val+'&'+'context'+'='+context;
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
