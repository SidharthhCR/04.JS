const getdata = () => {
try {
    const name1 = document.getElementById("iname").value;
    const email1 = document.getElementById("iemail").value;

    let details = { name1, email1 }
    console.log(details);

    let jsonData = JSON.stringify(details)
    console.log(jsonData)

    localStorage.setItem("userDetails",jsonData)
    alert("successfully stored in local storage")
//to navigate
    window.location="./index2.html"

    
} catch (error) {
    console.log(error)
    alert("Error occured")
}
};
