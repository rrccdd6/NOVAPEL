$(function() {

    $('.btn-link[aria-expanded="true"]').closest('.accordion-item').addClass('active');
    $('.collapse').on('show.bs.collapse', function() {
        $(this).closest('.accordion-item').addClass('active');
    });

    $('.collapse').on('hidden.bs.collapse', function() {
        $(this).closest('.accordion-item').removeClass('active');
    });



});


const detectLanguage = (defaultLang = 'pt-BR') =>
    navigator.language ||
    (Array.isArray(navigator.languages) && navigator.languages[0]) ||
    defaultLang;