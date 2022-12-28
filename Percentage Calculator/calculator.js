var numFeild1=document.getElementById('numFeild1');
var numFeild2=document.getElementById('numField2');
var resultFeild=document.getElementById('resultFeild');
var form=document.getElementById('xIsWhatPercentOfy');

console.log(form);
if(form){
    form.addEventListener('submit',function(event){
        if(!numFeild1.value || !numFeild2.value){ //Validation
            alert("Please enter values in the feilds")
        }
        else{
            var x=parseFloat(numFeild1.value);
            var y=parseFloat(numFeild2.value);
            var result=x/y;
            var persent =result*100;
            resultFeild.innerText="Answer is: "+persent+"%";
            event.preventDefault();//keep the data on the screen and doesn't refresh it
        }
    });
}

