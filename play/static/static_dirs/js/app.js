$(function () {
    $('ul.tab-nav li a.button').click(function () {
        var href = $(this).attr('href');

        $('li a.active.button', $(this).parent().parent()).removeClass('active');
        $(this).addClass('active');

        $('.tab-pane.active', $(href).parent()).removeClass('active');
        $(href).addClass('active');

        return false;
    });
});

$(function () {
    $('div.side_btn').click(function () {
        var href = 'div'+$(this).attr('id');
        console.log(href);
        $('div.side_btn').removeClass('active');
        $(this).addClass('active');

        $('.tab-pane.active').removeClass('active');
        $("#"+href).addClass('active');


        return false;
    });
});

