function catPhotosSelect(){
  $('.thumbnail').on('click', function(event) {
    let targetCat = $(this).find('img').attr('src');
    let targetAlt = $(this).find('img').attr('alt');

    $('.hero img').attr('src',targetCat).attr('alt',targetAlt);
});
}

$(catPhotosSelect);