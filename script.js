const userInput = document.querySelector('.user-input')
const btn = document.querySelector('.btn')
const outputBox = document.querySelector('.output-box')

const serverUrl ='https://api.funtranslations.com/translate/navi.json'

const generateTranslationUrl = (input) => `${serverUrl}?text=${input}`

const clickHandler = async () => {
    try{
        const userInputText = userInput.value
        const res = await fetch(generateTranslationUrl(userInputText))
        const data = await res.json()
        console.log(data)
        outputBox.innerText = data.contents.translated
    }catch(error){
        console.log(error)
        alert('Something Went Wrong!!! Please Try Again Later')
    }
}

btn.addEventListener('click', clickHandler)
    