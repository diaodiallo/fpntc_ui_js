Drupal.behaviors.confirm = {
  attach: function(context, settings) {

    var removeButtons = jQuery('.remove-button');
    jQuery(removeButtons).on('click',function(){ console.log('hey'); });

  }
};