const imageProfileCheck = document.querySelector("#new-profile")
const foto = document.querySelector("input#foto")
const outPreview = document.querySelector("#new")
const deleteImage = document.querySelector("#deleteImage") 


const loaderFile = function(event){
    const reader = new FileReader();
    reader.onload = function(){
        outPreview.style.display = 'block'
        outPreview.style.backgroundImage = `url("${reader.result}")`
        imageProfileCheck.style.backgroundImage = `url("${reader.result}")`
    }
    reader.readAsDataURL(event.target.files[0])
}

deleteImage.addEventListener('click', function clear(){
    outPreview.style.display = 'none'
    outPreview.style.backgroundImage = `url("")`
    imageProfileCheck.style.backgroundImage = `url("")`
    foto.value = ''
})


/* buttons */
const cancelButton = document.querySelector("button#cancel")
const checkButton = document.querySelector("button#check")
const settingProfile = document.querySelector(".user-setting")
const modalWrapper = document.querySelector(".modal-wrapper")
const clearName = document.querySelector('button.clear')

const nameCheck = document.querySelector('h2#nameCheck')
const subNameCheck = document.querySelector('h2#subNameCheck')

const inputName = document.querySelector("input#name")
const inputSubName = document.querySelector("input#subName")


settingProfile.addEventListener('click', ()=> {
    modalWrapper.classList.add('active')
})

clearName.addEventListener('click', ()=> {
    inputName.value = ""
    inputSubName.value = ""
})


cancelButton.addEventListener('click', ()=>{
    modalWrapper.classList.remove('active')
})

checkButton.addEventListener('click', ()=>{
    
    nameCheck.innerText = inputName.value
    subNameCheck.innerText = inputSubName.value
    
    modalWrapper.classList.remove('active')
    if(inputName.value == ""){
        inputName.value = "Nameee"
    }
})


