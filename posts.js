// Initial posts
let posts = [
  {
    title: "What is Business Automation?",
    content: "Business automation means using systems and tools to reduce manual work..."
  },
  {
    title: "What is Data Intelligence?",
    content: "Data intelligence is the ability to make decisions using data insights..."
  }
];

// Display posts
const container = document.getElementById("post-list");
if(container) {
  posts.forEach(post => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${post.title}</h3>`;
    div.onclick = () => {
      localStorage.setItem("selectedPost", JSON.stringify(post));
      window.location.href = "post.html";
    };
    container.appendChild(div);
  });
}

// Add new post (temporary prompt)
function addPost() {
  const title = prompt("Enter post title:");
  const content = prompt("Enter post content:");
  if(title && content) {
    const newPost = { title, content };
    posts.unshift(newPost); // add to top
    localStorage.setItem("selectedPost", JSON.stringify(newPost));
    alert("Post added! Refresh page to see it in list.");
  }
}

// You can call addPost() from browser console anytime to add new blog
