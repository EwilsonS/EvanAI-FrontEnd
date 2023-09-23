export function loadPortfolio() {
  document.addEventListener("DOMContentLoaded", function () {
  let y = window.scrollY;
  if (y === 0) {
    document.querySelectorAll('.side-nav, .home').forEach(element => {
      element.style.display = 'none';
    });
  }

  // Smooth scrolling
    document.querySelectorAll(".scroll").forEach(link => {
      link.addEventListener('click', function (event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          const target = document.querySelector(hash);
          if (target) {
            window.scrollTo({
              top: target.offsetTop,
              behavior: "smooth"
            });
          }
        }
      });
    });

    // Show side nav on scroll
    window.addEventListener("scroll", function () {
      let y = window.scrollY;
      if (y > 505) {
        document.querySelectorAll('.side-nav, .home').forEach(element => {
          element.style.display = 'block';
        });
      } else {
        document.querySelectorAll('.side-nav, .home').forEach(element => {
          element.style.display = 'none';
        });
      }
    });

    function getBlogPosts() {
      let queryUrl = `https://www.googleapis.com/blogger/v3/blogs/3943554857418853370/posts?key=AIzaSyA9RAPlHjpSqJPYQx5z80rBVNWaRK4M3us`;
      let posts = [];

      fetch(queryUrl)
        .then(response => response.json())
        .then(res => {
          document.querySelectorAll('.bcount').forEach(element => {
            element.textContent = res.items.length;
          });

          for (let i = 0; i < 4; i++) {
            posts.push(res.items[i]);
            let pubDate = new Date(posts[i].published).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric"
            });

            let blogCard = document.createElement('div');
            blogCard.className = 'card p-2 mb-3 rounded-0';
            blogCard.id = 'blog-card';
            blogCard.style.border = 'none'
            blogCard.innerHTML = `
              <h5 class="text-center" id="blog-title"><a class="text-dark" href="${posts[i].url}">${posts[i].title}</a></h5>
              <h6 class="text-center"><small>Written by <span class='font-weight-bold'>${posts[i].author.displayName}</span> <span class='text-secondary font-italic'>on ${pubDate}</span></small></h6>
              <p id="blog-content">${posts[i].content}</p>
            `;
            document.querySelector('.blog-posts').appendChild(blogCard);
          }
        })
        .catch(error => {
          console.error("Error fetching blog posts: ", error);
        });
    }

    getBlogPosts();
  })
}