
$(function(){
    const sound=document.getElementById('intro');

    $('#wrapper2').hide();
    $('.start').on('click',function(){
        $('#wrapper').hide();
        $('#wrapper2').show();
        sound.play();
        sound.volume=0.4;
    });
    $('.st>a').on('click',function(){
        window.location.href="game.html";
    });
});
