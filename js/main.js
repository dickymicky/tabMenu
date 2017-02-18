'use strict';

$(document).ready(function(){

    var $tabMenu = $('.tab_menu li'),
        $tabContent = $('.tab_contents li'),
        oldIndex = null,
        currentIndex = 0;

    $tabMenu.on('click', function(){
        oldIndex = currentIndex;
        currentIndex = $(this).index();

        $tabMenu.not($(this)).removeClass('active');
        $(this).addClass('active');

        $tabContent.eq(oldIndex).hide();
        $tabContent.eq(currentIndex).show();
    });

});