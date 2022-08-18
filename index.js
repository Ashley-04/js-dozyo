// アコーディオン

//   Jquery
$('.More__btn').on("click", function () {
    $(this).prev().slideToggle();
    $(this).toggleClass('read');
});


//   JS
let more_default = document.getElementsByClassName('More__content__js')[0];
let more_height = more_default.clientHeight+'px';
more_default.style.height = 0;

let more = document.getElementById('More__js');
more.addEventListener('click', function () {
    this.previousElementSibling.classList.toggle('open');
    if(this.previousElementSibling.classList.contains('open')){
      this.previousElementSibling.style.height = more_height;
    }else{
      this.previousElementSibling.style.height = 0;
    }
    this.classList.toggle('read');
});

// ポップアップ
//  jQuery
$('.Detail_btn').on('click', function () {
    $(this).next().removeClass('open');
    $(this).next().fadeIn(500);
});
$('.close').on('click', function () {
    $(this).parent().fadeOut(500);
});

// JavaScript
let js_btn = document.querySelector('.Detail_btn_js');
js_btn.addEventListener('click', function () {
    document.getElementsByClassName('Detail_c_js')[0].classList.add("open");
});
document.getElementById('close_js').addEventListener('click', function () {
    document.getElementsByClassName('Detail_c_js')[0].classList.remove("open");
});