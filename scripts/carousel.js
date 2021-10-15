document.querySelector(".songs-content")
    .addEventListener("wheel", event => {
    if(event.deltaY < 0){
        moveRight(event)
    } else {
        moveLeft(event)
    }
})

async function moveRight (event){
    await event.target.scrollBy(-300, 0);
}

async function moveLeft (event){
    await event.target.scrollBy(300, 0)
}