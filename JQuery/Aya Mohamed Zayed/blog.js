// ** BLOG POSTS **

$(document).ready(function () {
        let allPosts = []
        let shownCount = 10

        $.get("https://jsonplaceholder.typicode.com/posts", function (data) {
                allPosts = data
                displayPosts(allPosts.slice(0, shownCount))
        });

        $('#load-more').click(function () {
                shownCount += 10
                displayPosts(allPosts.slice(0, shownCount))
        });

        $('#search').on('input', function () {
                const filteredPosts = allPosts.filter((post) => post.title.toLowerCase().includes(this.value.toLowerCase()));
                shownCount = 10;
                displayPosts(filteredPosts.slice(0, shownCount));
        });
});


function displayPosts(posts) {
        $('.posts-container').empty();
        posts.forEach(post => {
                $('.posts-container').append(`
        <div class="post-card">
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        </div>
      `);
        });
}
