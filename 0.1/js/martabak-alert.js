document.write('<div class="alert succes hide"><span class="icon"></span><span class="msg"></span><span class="close-btn"><span class="fas fa-times closeicon"></span></span></div>');

function alertSucces($message) {
    var ngisialert = document.querySelector('.msg');
    ngisialert.innerHTML = $message;
    $('.alert').removeClass('danger'),
        $('.alert').removeClass('warning'),
        $('.icon').removeClass('fas fa-times-circle'),
        $('.icon').removeClass('fas fa-exclamation-triangle'),

        //add
        $('.alert').addClass('succes'),
        $('.icon').addClass('fas fa-check-circle'),

        $('.alert').removeClass('hide'),
        $('.alert').addClass('show')
    $('.alert').addClass('showAlert')
    setTimeout(() => {
        $('.alert').removeClass('show'),
            $('.alert').addClass('hide')
    }, 5000);
}

function alertWarning($message) {
    var ngisialert = document.querySelector('.msg');
    ngisialert.innerHTML = $message;

    $('.alert').removeClass('danger'),
        $('.alert').removeClass('succes'),
        $('.icon').removeClass('fas fa-times-circle'),
        $('.icon').removeClass('fas fa-check-circle'),

        //add
        $('.alert').addClass('warning'),
        $('.icon').addClass('fas fa-exclamation-triangle'),


        $('.alert').removeClass('hide'),
        $('.alert').addClass('show')
    $('.alert').addClass('showAlert')
    setTimeout(() => {
        $('.alert').removeClass('show'),
            $('.alert').addClass('hide')
    }, 5000);
}

function alertDanger($message) {
    var ngisialert = document.querySelector('.msg');
    ngisialert.innerHTML = $message;
    //remove

    $('.alert').removeClass('succes'),
        $('.alert').removeClass('warning'),
        $('.icon').removeClass('fas fa-check-circle'),
        $('.icon').removeClass('fas fa-exclamation-triangle'),

        //add
        $('.alert').addClass('danger'),
        $('.icon').addClass('fas fa-times-circle'),

        $('.alert').removeClass('hide'),
        $('.alert').addClass('show')
    $('.alert').addClass('showAlert')
    setTimeout(() => {
        $('.alert').removeClass('show'),
            $('.alert').addClass('hide')
    }, 5000);
}