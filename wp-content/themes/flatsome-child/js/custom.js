jQuery(document).ready(function ($) {
    jQuery('.mobile-nav').click(function () {
        var interval_ = setInterval(function () {
            if (jQuery('.mfp-close').length && jQuery('#logo-mobile-append').length == 0) {
                jQuery('.mfp-close').after(`<img id="logo-mobile-append" width="39" height="40" src="/wp-content/uploads/2022/09/logo.png" class="" alt="Reactron Technologies" style=" margin: 15px;">`);
                clearInterval(interval_);
            }
            if (jQuery('#logo-mobile-append').length) {
                clearInterval(interval_);
            }


        }, 10)
    })
});