let deleteButtons = document.querySelectorAll('.delete-button')
Array.from(deleteButtons).forEach(item => item.addEventListener('click', deletePost))

function deletePost(){
    let deleteItemId = this.parentNode.dataset.id
    fetch('/home/delete', {
        method: 'delete', 
        headers: {'content-type': 'application/json'}, 
        body: JSON.stringify({'deleteItemId': deleteItemId})
    })
    .then(() => window.location.reload())
}