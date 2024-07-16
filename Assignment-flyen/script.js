const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
      // border:"red"
    },
  
    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      428: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 4
      }
    }
  });

  function showModal() {
        document.querySelector('.overlay').classList.add('showovelay');
        document.querySelector('.popup').classList.add('showpopup');
    }
    function closeModal() {
        document.querySelector('.overlay').classList.remove('showovelay');
        document.querySelector('.popup').classList.remove('showpopup');
    }
    var btnlogin = document.querySelector(".btnprimary");
    btnlogin.addEventListener("click", showModal);

    var close = document.querySelector("span");
    close.addEventListener("click", closeModal)

    // JavaScript to change the image based on different content clicks
    document.getElementById('content1').addEventListener('click', function () {
        changeImage("/img/image.png", "Image 1");
    });

    document.getElementById('content2').addEventListener('click', function () {
        changeImage("/img/pro-img2.webp", "Image 2");
    });

    document.getElementById('content3').addEventListener('click', function () {
        changeImage("/img/pro-img3.webp", "Image 3");
    });

    function changeImage(imageSrc, altText) {
        var image = document.getElementById('myImage');
        image.src = imageSrc;
        image.alt = altText;
    }
    function changeImage(imageSrc, altText) {
        var image = document.getElementById('myImage');

        // Fade out effect
        image.style.opacity = 0.2;

        setTimeout(function () {
            image.src = imageSrc;
            image.alt = altText;

            // Fade in effect
            image.style.opacity = 1;
        }, 400);
    }