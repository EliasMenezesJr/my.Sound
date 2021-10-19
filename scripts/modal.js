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

deleteImage.addEventListener('click', ()=>{
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

const nameCheck = document.querySelector('h2#nameCheck')
const subNameCheck = document.querySelector('h2#subNameCheck')


settingProfile.addEventListener('click', ()=> {
    modalWrapper.classList.add('active')
})

cancelButton.addEventListener('click', ()=>{
    modalWrapper.classList.remove('active')
})

checkButton.addEventListener('click', ()=>{
    const inputName = document.querySelector("input#name").value
    const inputSubName = document.querySelector("input#subName").value

    nameCheck.innerText = inputName
    subNameCheck.innerText = inputSubName
    
    modalWrapper.classList.remove('active')
})


