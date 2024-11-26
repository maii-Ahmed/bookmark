/*var demo =document.querySelector(".demo");
var button =document.querySelector("button");

button.addEventListener('click' ,function(){
    
    var r =Math.floor(Math.random() * 255);
    var g =Math.floor(Math.random() * 255);
    var b =Math.floor(Math.random() * 255);

    demo.style.backgroundColor =`rgb(${r} , ${g} ,${b})`
    
})*/

var siteNameInput = document.getElementById('siteNameInput');
var siteUrlInput = document.getElementById('siteUrlInput');
var button = document.getElementById('Submit'); 
var model =document.querySelector('.box-info');
var closeBtn=document.getElementById('closebtn');
var overlay =document.querySelector('.overlay')
var arr =JSON.parse(localStorage.getItem('arr'))|| [];
showData();


function addSite() {
    if (!siteNameInput.classList.contains('is-invalid') && !siteUrlInput.classList.contains('is-invalid')) {
        var Sites = {
            siteName: siteNameInput.value,
            siteUrl: siteUrlInput.value
        };
        arr.push(Sites);
        localStorage.setItem('arr', JSON.stringify(arr));
        showData();
        clearDate();
        clearValidate();
        
    } else {
       model.classList.remove('d-none');
        overlay.style.display = 'block'; 

    }
}
function clearDate()
{
    siteNameInput.value = ""; 
    siteUrlInput.value = ""; 
}
function showData() {
    var container = "";
    for (var i = 0; i < arr.length; i++) {
        container += `
        <tr>
        <td>${i + 1}</td>
        <td>${arr[i].siteName}</td>
        <td><button class="btn btn-success" onclick="window.open('${arr[i].siteUrl}', '_blank')">Visit</button></td>
        <td><button class="btn btn-danger" onclick="deleteSite(${i})">Delete</button></td>
        </tr>
        `;
    }
    document.getElementById('tbody').innerHTML = container; 
}
function deleteSite(index) {
    arr.splice(index, 1); 
    localStorage.setItem('arr', JSON.stringify(arr)); 
    showData();
}

function validateName() {
    var siteNamePattern=/^[a-zA-Z\s\-][a-zA-Z\s\-][a-zA-Z\s\-]+$/;
    var siteUrlPattern=/^(https?:\/\/[^\s]+)/;
    if(siteNamePattern.test(siteNameInput.value.trim()))
    {
       siteNameInput.classList.remove('is-invalid');
       siteNameInput.classList.add('is-valid');
       
    }
    else{
        siteNameInput.classList.remove('is-valid');
       siteNameInput.classList.add('is-invalid');
    }

     if(siteUrlPattern.test(siteUrlInput.value.trim()))
    {
       siteUrlInput.classList.remove('is-invalid');
       siteUrlInput.classList.add('is-valid');
       
    }
    else{
        siteUrlInput.classList.remove('is-valid');
       siteUrlInput.classList.add('is-invalid');
    }
    
   
        
    }


siteNameInput.addEventListener('input', validateName);
siteUrlInput.addEventListener('input', validateName);


function clearValidate()
{
    siteNameInput.classList.remove('is-valid');
    siteUrlInput.classList.remove('is-valid');
}

closeBtn.addEventListener('click' ,function()
{
    model.classList.remove('d-block');
    model.classList.add('d-none');

});
//  close modal when click on each place on page!
/*overlay.addEventListener('click', function() {
    model.classList.remove('d-block');
    model.classList.add('d-none');
    overlay.style.display = 'none'; 
});*/





