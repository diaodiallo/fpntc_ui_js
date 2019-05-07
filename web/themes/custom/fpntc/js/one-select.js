Drupal.behaviors.myBehavior = {
  attach: function (context, settings) {

    var limitSelection = function () {
      jQuery(".entity-browser-training-list-items-browser-form input[type=checkbox]").on("click", function () {
        if (jQuery(this).prop('checked')) {
          jQuery(".entity-browser-training-list-items-browser-form input[type=checkbox]").each(function () {
            if (jQuery(this).prop('checked')) {
            }
            else {
              jQuery(this).prop('disabled', true);
            }
          });
        }
        else {
          jQuery(".entity-browser-training-list-items-browser-form input[type=checkbox]").each(function () {
            jQuery(this).prop('disabled', false);
          });
        }
      });
    };
    limitSelection();
    //When the user paged the table @Class : parent of the table
    jQuery(".view-training-list-item-browser-search-api", context).on('change', function () {
      limitSelection();
    });

  }
};
