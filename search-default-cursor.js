Drupal.behaviors.makeCursorOnSearch = {
  attach: function (context, settings) {
      jQuery(".expander").on("click", function () {
        jQuery("#edit-keys").ready(function () {
          if (jQuery("div[aria-expanded='true']")) {
            jQuery("#edit-keys").focus();
          }
        })
      });
  }
};