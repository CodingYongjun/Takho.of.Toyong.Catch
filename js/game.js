$(function() {
    let trans = 0;
    let score = 0;
    let second =60;
    let time;
    let counter;
    let clickable = false;
    let num = 0;
    let difficulty = 1000;

    $('.ez').on('click', function() {
        difficulty = 1000;
        $('#step').hide();
        $('#wrapper').show();
        $('.step_img').addClass('ez');
        $('.step_img').removeClass('n');
        counter = setInterval(gameEnd, 1000);
        time = setInterval(randomTarget, 1000);
    });
    $('.n').on('click', function() {
        difficulty = 600;
        $('#step').hide();
        $('#wrapper').show();
        $('.step_img').addClass('n');
        $('.step_img').removeClass('ez');
        counter = setInterval(gameEnd, 1000);
        time = setInterval(randomTarget, 1000);
    });
    $('.hd').on('click', function() {
        difficulty = 400;
        $('#step').hide();
        $('#wrapper').show();
        $('.step_img').removeClass('ez');
        $('.step_img').removeClass('n');
        counter = setInterval(gameEnd, 1000);
        time = setInterval(randomTarget, 1000);
    });

    function gameEnd() {
        second--;
        $('.time').text(second);
        if (second == 0) {
            clearInterval(counter);
            clearInterval(time);
            $('#wrapper').hide();
            $('#end').show();
            $('#end').find('.end_score').text(score);
        }
        if (difficulty == 1000) {
            if (score > 35) {
                $('.shoes').css('background-image', 'url("img/end2.png")');
                $('.result').css('background-image', 'url("img/end2_1.png")');
                $('.mood').css('background-image', 'url("img/end2_2.png")');
            }
            if (score > 55) {
                $('.shoes').css('background-image', 'url("img/end3.png")');
                $('.result').css('background-image', 'url("img/end3_1.png")');
                $('.mood').css('background-image', 'url("img/end3_2.png")');
            }
        } else if (difficulty == 600) {
            if (score > 30) {
                $('.shoes').css('background-image', 'url("img/end2.png")');
                $('.result').css('background-image', 'url("img/end2_1.png")');
                $('.mood').css('background-image', 'url("img/end2_2.png")');
            }
            if (score > 45) {
                $('.shoes').css('background-image', 'url("img/end3.png")');
                $('.result').css('background-image', 'url("img/end3_1.png")');
                $('.mood').css('background-image', 'url("img/end3_2.png")');
            }
        } else {
            if (score > 15) {
                $('.shoes').css('background-image', 'url("img/end2.png")');
                $('.result').css('background-image', 'url("img/end2_1.png")');
                $('.mood').css('background-image', 'url("img/end2_2.png")');
            }
            if (score > 30) {
                $('.shoes').css('background-image', 'url("img/end3.png")');
                $('.result').css('background-image', 'url("img/end3_1.png")');
                $('.mood').css('background-image', 'url("img/end3_2.png")');
            }
        }
    }

    function randomTarget() {
        let randomNum = Math.floor(Math.random() * 9) + 1;
        $('.to' + randomNum).addClass('active');
        clickable = true;
        $('.game_box>div>div').css('background-image', 'url("img/toyong.png")')
        setTimeout(function() {
            $('.to' + randomNum).removeClass('active');
        }, difficulty);
    }

    $('.game_box>div').children('div').click(function(event) {
        event.stopPropagation();
    });
    $('.game_box>div>div').on('click', function() {
        if (clickable) {
            score++;
            $('.score_time>.score').text(score);
            clickable = false;
            $(this).css('background-image', 'url("img/hit.png")')
        }
    });
    $('.replay').on('click', function() {
        second = 60;
        score = 0;
        clickable = false;
        time = setInterval(randomTarget, 1000);
        counter = setInterval(gameEnd, 1000);
        $('#wrapper').show();
        $('#wrapper').find('.score').text(score);
        $('#wrapper').find('.time').text(second);
        $('#end').hide();
    });
    $('.step').on('click', function() {
        second = 60;
        score = 0;
        clickable = false;
        $('#step').show();
        $('#wrapper').find('.score').text(score);
        $('#wrapper').find('.time').text(second);
        $('#end').hide();
    });
});