/**
 * @file
 * Theme hooks for the FPNTC theme.
 */
(function ($, Drupal, Bootstrap) {

  jQuery(".resources-counter").clone().appendTo("#resource-counter");
  jQuery(".training-packages-counter").clone().appendTo("#training-packages-counter");
  jQuery(".topics-counter").clone().appendTo("#topics-counter");

  jQuery('#views-exposed-form-resources-search-page-1').find('label[for=edit-keys]').addClass('sr-only');
  jQuery('#views-exposed-form-resources-search-page-1').find('input#edit-keys').attr('placeholder', 'Search');


  // var isNotMobile = window.matchMedia(" (min-width: 768px)");
  var isNotMobile = Modernizr.mq('(min-width: 768px)');
  if (isNotMobile) {
    jQuery('.dropdown').hover(
        function () {
          jQuery(this).addClass('open').find('>:first-child').click(function () {
            var location;
            location = jQuery(this).attr('href');
            window.location.href = location;
            return false;
          })
        },
        function () {
          jQuery(this).removeClass('open')
        }
    );
  }


  if (window.location.href.indexOf('user') > -1) {
    var hash = document.location.hash;
    if (hash) {
      jQuery('.nav-tabs a[href="' + hash + '"]').tab('show');
    }
    // Change hash for page-reload
    jQuery('.nav-tabs a').on('shown.bs.tab', function (e) {
      window.location.hash = e.target.hash;
    });

  }

  if (window.location.href.indexOf('search') > -1) {
    jQuery(document).ready(function () {
      jQuery('.facets-checkbox:checked').parents('.collapse').attr('class', 'clear-both collapse in');
    });
  }

  jQuery(document).ready(function () {
    jQuery('.sharelink').on('click', function () {
      jQuery('.popover-content input').select();
    });
  });

  var helpText = jQuery('.help-block.description');
  if (helpText.length > 0) {
    jQuery('.help-text-wrapper').append(helpText.html());
    helpText.remove();
  }


})(window.jQuery, window.Drupal, window.Drupal.bootstrap);
