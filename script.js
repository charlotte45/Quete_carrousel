$(document).ready(function() {

    let $carrousel = $('#carrousel'),
        $img = $('#carrousel img'),
        indexImg = $img.length -1,
        i = 0,
        $currentImg = $img.eq(i);

    $img.css('display', 'none');
    $currentImg.fadeIn(1000);

    $('.next').click(function() {
        i++;

        if( i <= indexImg) {
            $img.css('display', 'none');
            $currentImg = $img.eq(i);
            $currentImg.fadeIn(1000);
        } else {
            i = -1;
        }
    });

    $('.prev').click(function() {
        i--;

        if( i >= 0) {
            $img.css('display', 'none');
            $currentImg = $img.eq(i);
            $currentImg.fadeIn(1000);
        } else {
            i = 4;
        }
    });

    function slideImg() {

        setTimeout(function() {

            if(i < indexImg) {
                i++;
            } else {
                i = 0;
            }

            $img.css('display', 'none');
            $currentImg = $img.eq(i);
            $currentImg.fadeIn(1000);
            slideImg();

        }, 3000);
    }
    slideImg();


});