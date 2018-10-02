fetch('http://jservice.io/api/category?id=2537')
.then(response => response.json())
.then(json => console.log(json))


function postAnswer(url) {
    const formData = new FormData()
    const fileField = document.querySelector("main")

    formData.appendChild();

    return fetch(url) {
        method: 'POST'
        body: formData;
    }
}