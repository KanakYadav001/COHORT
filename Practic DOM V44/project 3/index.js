let post = document.querySelector(".post");

let like = document.querySelector(".like");

post.addEventListener("dblclick", function () {
  like.style.display = "block";

  setTimeout(function () {
    like.style.display = "none";
  }, 700);
});
