$(document).ready(function() {
    var $window = $(window);
        function checkWidth() {
        if ($window.width() <= 768) {
            $('#toggle-flex')
              .removeClass('flex-row-reverse')
              .removeClass('m-4')
              .addClass('flex-column');

            $('#toggle-padding-video')
              .removeClass('pl-5');
            };

            $('#toggle-padding-edTech')
              .removeClass('p-4');

        if ($window.width() > 768) {
            $('#toggle-flex')
              .removeClass('flex-column')
              .addClass('flex-row-reverse')
              .addClass('m-4');

            $('#toggle-padding-video')
            .addClass('pl-5');

            $('#toggle-padding-edTech')
              .addClass('p-4');
        }
    }
    checkWidth();
    $(window).resize(checkWidth);
});
