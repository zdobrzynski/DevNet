$(function () {
    //Random attention seeker on Happy Birthday
    var attentions = ["bounce", "flash", "pulse", "rubberBand", "shake", "swing"];

    $('#Greeting').addClass('animated ' + attentions[Math.floor(Math.random() * (5 - 0))]);

    //Makes all check boxes unchecked initially
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);

    });

    //Animates balloons on selection
    $('.form-check-input').on('change', function () {

        $('#' + 'img' + this.id).css('visibility', 'visible')

        $(this).is(':checked') ?
            $('#' + 'img' + this.id).removeClass().addClass('animated fadeInDownBig') :
            $('#' + 'img' + this.id).addClass('animated fadeOutDown')
    });

    //Checks if any boxes are checked
    $("#balloonSubmit").click(function () {
        var flag = false;
        $('.form-check-input').each(function () {

            $(this).is(':checked') ?
                flag = true :
                flag = flag
        })

        if (flag == false) {
            $('#Warning').toast('show');
        }

    });

    //Check or Uncheck all boxes
    var counter = 1;
    $('#togglecb').on('click', function () {
        $('.form-check-input').each(function () {

            counter % 2 > 0 ?
                $(this).prop('checked', true) :
                $(this).prop('checked', false)

        });
        counter++;
    });

    //Changes color of Happy Birthday
    $('.form-check-input').hover(
        function () {
            $("#Greeting").addClass("hover" + this.id);
        },
        function () {
            $("#Greeting").removeClass("hover" + this.id);
        }
    )

    $('.form-check-input').on('change', function () {

        $('#' + 'img' + this.id).css('visibility', 'visible')

        $(this).is(':checked') ?
            $('#' + 'img' + this.id).removeClass().addClass('animated fadeInDownBig') :
            $('#' + 'img' + this.id).addClass('animated fadeOutDown')
    });

    //Display Toast
    $("#toa").click(function () {
        var sound = new Audio();
        sound.src = toast.wav;
        sound.play;
        $('.toast').toast('show');
       
    });

    $('#birthday').pickadate();
});