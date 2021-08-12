window.onscroll = () => {
let nav2 = document.querySelector('.nav2');

    if (window.scrollY < 500) {
        nav2.style.top = '-130px'
    } else {
        nav2.style.top = '0'
    }
}
