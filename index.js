const memeCallBtnEl = document.querySelector('.meme-call-btn')
const memeContainerEl = document.querySelector('.meme-container')
const memeImgEl = document.querySelector('.meme-img')
const memeNameEl = document.querySelector('.meme-name')

const api = '1800197c285a45b599e6d944876f40e8'
const url = 'https://api.humorapi.com/memes/random'
const options = {
  method: 'GET',
  headers: {
    'x-api-key': '1800197c285a45b599e6d944876f40e8',
  },
}

memeCallBtnEl.addEventListener('click', async function () {
  try {
    memeCallBtnEl.disabled = true
    memeCallBtnEl.innerText = 'Вызываю...'
    memeNameEl.innerText = 'Вызываю...'
    memeImgEl.src = 'spinner.svg'
    const response = await fetch(url, options)
    const data = await response.json()
    memeCallBtnEl.disabled = false
    memeCallBtnEl.innerText = 'Вызвать мем'
    memeContainerEl.style.display = 'block'
    memeImgEl.src = data.url
    memeNameEl.innerText = data.description
  } catch (error) {
    console.log(error)
    memeCallBtnEl.disabled = false
    memeCallBtnEl.innerText = 'Вызвать мем'
    memeNameEl.innerText = 'Ошибка случилась, попробуй ещё раз'
  }
})
