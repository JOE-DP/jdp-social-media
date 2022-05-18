let deleteButtons = document.querySelectorAll('.delete-button')
Array.from(deleteButtons).forEach(item => item.addEventListener('click', deletePost))

let likeButtons = document.querySelectorAll('.likes')
Array.from(likeButtons).forEach(item => item.addEventListener('click', likePost))

function deletePost(){
    let deleteItemId = this.parentNode.dataset.id
    fetch('/home/delete', {
        method: 'delete', 
        headers: {'content-type': 'application/json'}, 
        body: JSON.stringify({'deleteItemId': deleteItemId})
    })
    .then(() => window.location.reload())
}

function likePost(){
    let likeItem = this.parentNode.dataset.id
    fetch('/home/like', {
        method: 'put', 
        headers: {'content-type': 'application/json'}, 
        body: JSON.stringify({'likeItemId': likeItem})
    })
    .then(() => window.location.reload())
}