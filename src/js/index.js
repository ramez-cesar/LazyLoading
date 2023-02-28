const btnAddImage = document.querySelector('#add_image')
const btnRemoveImage = document.querySelector('#remove_image')
const imagesContainer = document.querySelector('.images-container')


btnAddImage.addEventListener('click', () => {
    const initialValue = 1
    const finalValue = 123
    
    const randomValue = Math.floor(Math.random() * (finalValue - initialValue) + initialValue)
    
    addImage(randomValue)
})


btnRemoveImage.addEventListener('click', () => {
    imagesContainer.innerHTML = ""
})


function addImage(id) {
    const div = document.createElement('div')
    const image = document.createElement('img')
    const figure = document.createElement('figure')

    image.setAttribute('src', `https://randomfox.ca/images/${id}.jpg`)

    div.append(figure)
    figure.append(image)
    imagesContainer.append(div)
}