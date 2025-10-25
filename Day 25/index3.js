const getData = () => {
    
        const name1 = document.getElementById('name1').value
    const email1 = document.getElementById('email1').value
    const cour1 = document.getElementById('cour1').value
    const feed1 = document.getElementById('feed1').value

    document.getElementById('namespc').innerHTML=name1
    document.getElementById('emailspc').innerHTML=email1
    document.getElementById('courcespc').innerHTML=cour1
    document.getElementById('feedspc').innerHTML=feed1

     let jsonData = JSON.stringify(details)
    console.log(jsonData)

      sessionStorage.setItem("userDetails",jsonData)  
      alert("successfully stored the data")
    } 
    const clearData=()=>{
      sessionStorage.clear()
      document.getElementById('name1').value=''
      document.getElementById('email1').value=''
      document.getElementById('cour1').value=''
      document.getElementById('feed1').value=''

      
    }
