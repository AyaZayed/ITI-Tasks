'use strict';

$('.tab-header').on('click', function () {
        const index = $(this).index();

        $(".tab").removeClass("active");
        $(this).addClass("active");

        $(".tab-content").eq(index).addClass("active");
})

$('form').submit(function (e) {
        e.preventDefault();

        const todo = $("input#todo").val();
        if (todo) {
                $(".todo-list").append(`<li><p>- ${todo}</p> <span class="delete-btn">Delete</span></li>`);
                $("input#todo").val("");
        }
});

$('.todo-list').on('click', 'li p', function () {
        $(this).toggleClass("complete");
});

$('.todo-list').on('click', '.delete-btn', function () {
        $(this).parent().remove()
});