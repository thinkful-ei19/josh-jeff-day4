$(function() {

  $('#js-shopping-list-form').submit(function(event){
    event.preventDefault();

    let items = $('.js-shopping-list-entry').val();
    $('.js-shopping-list-entry').val('');

    $('.shopping-list').append(`<li>
        <span class="shopping-item">${items}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
  });

    $('shopping-item-toggle').on("click", function(){
      $( ".shopping-item" ).toggle('shopping-item__checked')
        
    })


});



