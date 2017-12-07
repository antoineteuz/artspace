$(function() {
  /** slider options **/
  const options = {
    width: 1200,
    height: 700,
    navigation: {
      active: false
    },
    pagination: {
      active: false
    }
  };

  /** create slider **/
  $(".start-slider").slidesjs(options);
  $(".blog-slider").slidesjs(options);
});