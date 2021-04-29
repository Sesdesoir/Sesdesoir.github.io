
const newPost = async (event) => {
    const post_title = document.querySelector(`#newTitle`).value.trim();
    const postBody = document.querySelector(`#newPost`).value.trim();
    const response = await fetch(`/api/posts/post`, {
      method: 'POST',
      body: JSON.stringify({"post_title": post_title, "post_body": postBody }),
      headers: {
        'Content-Type': 'application/json',
      },
      
    });
  
    if (response.ok) {
        document.location.reload();
    } else {
      alert('Failed to post comment');
    }  
  }

let submitButton = document.querySelector("#newPostSubmit");
    submitButton.addEventListener("click", newPost);
