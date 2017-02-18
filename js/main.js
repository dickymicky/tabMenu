'use strict';

$(document).ready(function(){

    /*
    var $tabMenu = $('.tab_menu li'),
        $tabContent = $('.tab_contents li'),
        oldIndex = null,
        currentIndex = 0;

    $tabMenu.on('click', function(){
        //��ȣ ����
        oldIndex = currentIndex;
        currentIndex = $(this).index();

        //�޴� ���� ���
        $tabMenu.not($(this)).removeClass('active');
        $(this).addClass('active');

        //�̹��� ���� ���
        $tabContent.eq(oldIndex).hide();
        $tabContent.eq(currentIndex).show();
    });
    */

    var tab = new TabMenu();

});


function TabMenu(){
    this.init();
    this.initEvent();
}

TabMenu.prototype = {

    //���� ����
    init: function(){
        this.$tabMenu = $('.tab_menu li');
        this.$tabContent = $('.tab_contents li');
        this.oldIndex = null;
        this.currentIndex = 0;
    },

    //�������ڸ��� ������ �̺�Ʈ��
    initEvent: function(){
        var _this = this;

        this.$tabMenu.on('click', function(){
            _this.renewIndex($(this));
            _this.toggleMenu($(this));
            _this.toggleContent();
        });
    },

    //��ȣ ���� ���
    renewIndex: function($this){
        this.oldIndex = this.currentIndex;
        this.currentIndex = $this.index();
    },

    //�޴� ���� ���
    toggleMenu: function($this){
        this.$tabMenu.not($this).removeClass('active');
        $this.addClass('active');
    },

    //�̹��� ���� ���
    toggleContent: function(){
        this.$tabContent.eq(this.oldIndex).hide();
        this.$tabContent.eq(this.currentIndex).show();
    }

};