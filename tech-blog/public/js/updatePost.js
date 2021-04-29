const updatePost = async (event) => {
    const id =event.target.getAttribute("data-store");
    console.log(id + " <-----id");
    const post_title = document.querySelector(`#updateTitle${id}`).value.trim();
    const postBody = document.querySelector(`#updatePost${id}`).value.trim();
    
    const response = await fetch(`/api/posts/updatePost/${id}`, {
      method: 'PUT',
      body: JSON.stringify({"post_title": post_title, "post_body": postBody, "id": id }),
      headers: {
        'Content-Type': 'application/json',
      },
      
    });
  
    if (response.ok) {
        document.location.reload();
    } else {
      alert('Failed to update post');
    }  
  }

let updateButton = document.querySelectorAll(".updatePostButton");
updateButton.forEach(button =>{
    button.addEventListener("click", updatePost);
});
    