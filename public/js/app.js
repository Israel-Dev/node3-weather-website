const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent = ''

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const searchTerm = search.value
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch(`http://localhost:3000/weather?address=${searchTerm}`)
    .then(response => {
        response.json()
        .then(({error, message, location} = {}) => {
            if (error) {
                return messageOne.textContent = error
            }
            messageOne.textContent = location
            messageTwo.textContent = message
        })
    })
})