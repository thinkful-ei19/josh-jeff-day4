$(function () {

  $('#js-shopping-list-form').submit(function (event) {
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

  $('.shopping-list').on("click",'.shopping-item-toggle', function (event) {
    let nameElement = $(event.currentTarget).parent().parent().find('.shopping-item');
    nameElement.toggleClass('shopping-item__checked');
    console.log(nameElement);

  });
  $('.shopping-list').on("click",'.shopping-item-delete', function (event) {
    let liElement = $(event.currentTarget).parent().parent();
    liElement.remove();
   
  })


});