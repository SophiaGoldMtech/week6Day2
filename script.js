let counter = 0;

while (counter < 16) {
    $('#container').append('<div class="box"></div>');
    counter++;
};

$('#container').on('click', '.box', function() {
    $(this).toggleClass('clicked')
});