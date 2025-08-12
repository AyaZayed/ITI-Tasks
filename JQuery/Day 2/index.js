// ** SIDEBAR **

$('.sidebar-opener').hover(function () {
        $('aside').show();

}, function () {
        $('aside').hide();
}
);

// ** SLIDER **

const images = [

        {
                src: "https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyfGVufDB8MHwwfHx8MA%3D%3D",
                alt: "selective focus photography of pink petaled flower"
        }, {
                src: "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zmxvd2VyfGVufDB8MHwwfHx8MA%3D%3D",
                alt: "pink flower"
        },
        {
                src: "https://plus.unsplash.com/premium_photo-1721475188278-9f1ff9201f74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2VyfGVufDB8MHwwfHx8MA%3D%3D",
                alt: "A white flower with a yellow center on a gray background"
        },
        {
                src: "https://plus.unsplash.com/premium_photo-1720794774002-53c5bb1b18ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGZsb3dlcnxlbnwwfDB8MHx8fDA%3D",
                alt: "A white flower with a yellow center on a gray background"
        },
]

let currentImgIdx = 0
function setImgToIdx(idx) {
        $('.slider img').attr("src", images[idx].src)
                .attr("alt", images[idx].alt);
}

$('.gallery .imgs-list img').click(function () {
        const clickedImgIdx = images.findIndex((img) => img.src === $(this).attr("src"))
        currentImgIdx = clickedImgIdx
        setImgToIdx(clickedImgIdx)
        $('.gallery .slider').show();
});

$('.slider').on('click', '.fa-arrow-right', function () {
        setImgToIdx(currentImgIdx)
        currentImgIdx++
        if (currentImgIdx === images.length) currentImgIdx = 0
});

$('.slider .fa-arrow-left').click(function () {
        setImgToIdx(currentImgIdx)
        if (currentImgIdx === 0) currentImgIdx = images.length
        currentImgIdx--
});