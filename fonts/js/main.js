$(function () {
    //togglenav
    $('.toggleNav').on("click", function () {

        $('.navigation ul').toggleClass('open');
    });

    //snippets
    $('.tab-section ul li').on('click', function () {
        var $panel = $(this).closest('.tab-section');
        $panel.find('.tabs li.active').removeClass('active');
        $(this).addClass('active');
        var panelToShow = $(this).attr('rel');

        $panel.find('.section.active').slideUp(300, showNextPanel);

        function showNextPanel() {
            $(this).removeClass('active');
            $('#' + panelToShow).slideDown(300, function () {
                $(this).addClass('active');
            });
        }
    });


});
