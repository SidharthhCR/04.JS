const displayData=(value)=>{
    //document.getElementById('result').value
    result.value += value
}
const clearAll=()=>{
    result.value=""
}
const calculate=()=>{
    try {
        if (result.value==""){
            result.value="Enter a valid input"
        }
        else{
            result.value=eval(result.value) 
        }
       
    } catch (error) {
        result.value="Invalid Input"
    }
}
const deletAll=()=>{
    result.value=result.value.slice(0,-1)
}