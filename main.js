var $imgWrapper = $('.imgWrapper')
var $icons = $('.icon')
var timerID
var count = 1

bindIcons()
autoPlay()
listenToMouse()

function bindIcons() {
    $icons.on('click', function (xxx) {
        var index = $(xxx.currentTarget).index()
        $imgWrapper.css({
            transform: `translateX(-${index*800}px)`
        })
        $(xxx.currentTarget).addClass('active').siblings().removeClass('active')
        count = index
    })
}

function autoPlay() {
    timerID = setInterval(() => {
        let n = count % 5
        $icons.eq(n).trigger('click')
        count += 1
    }, 2500)
}

function stopPlay() {
    window.clearInterval(timerID)
}

function listenToMouse() {
    $imgWrapper.on('mouseenter', function () {
        stopPlay()
    }).on('mouseleave', function () {
        autoPlay()
    })
}