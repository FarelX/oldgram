const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const sectionEl = document.getElementById("section-el");

function renderPost() {
  sectionEl.innerHTML = ``;
  for (i = 0; i < posts.length; i++) {
    sectionEl.innerHTML += `
<div class="profile">
          <img src="${posts[i].avatar}" alt="" class="photo-profile" />
          <div class="profile-info">
            <h2 class="profile-name">${posts[i].name}</h2>
            <h3 class="profile-location">${posts[i].location}</h3>
          </div>
        </div>
        <div class="posts">
          <img src="${posts[i].post}" class="post-image" alt="" id="posts"/>
        </div>
        <div class="interactions">
          <img
            src="images/icon-heart.png"
            alt="Like"
            class="interaction-icon"
            id="like-btn-${i}"
          />
          <img
            src="images/icon-comment.png"
            alt="Comment"
            class="interaction-icon"
          />
          <img
            src="images/icon-dm.png"
            alt="direct message"
            class="interaction-icon"
          />
        </div>
        <div class="likes" id="post-likes-${i}">${posts[i].likes} likes</div>
        <div class="comments">
          <span class="bold">${posts[i].username}</span> ${posts[i].comment}
        </div>
        `;
  }
  for (let i = 0; i < posts.length; i++) {
    document
      .getElementById(`like-btn-${i}`)
      .addEventListener("click", function () {
        posts[i].likes++;
        document.getElementById(`post-likes-${i}`).textContent =
          posts[i].likes + " likes";
      });
  }
}
renderPost();
const profileName = document.getElementById("profile-name");
const profileLocation = document.getElementById("profile-location");
const likesBtn = document.getElementById("like-icon");
const postLikes = document.getElementById("post-likes");
for (i = 0; i < posts.length; i++) {}
profileName.textContent = posts[0].name;
profileLocation.textContent = posts[0].location;
postLikes.textContent = posts[0].likes + " likes";

likesBtn.addEventListener("dblclick", function () {
  posts[0].likes++;
  postLikes.textContent = posts[0].likes + " likes";
  document.getElementById;
});
