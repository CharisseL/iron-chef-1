(function(){
  'use strict';

  $(document).ready(function(){
    $('#hide').click(hide);
    $('#show').click(show);
    $('form').submit(addRecipe);
    $('#recipes').on('click', '.delete', delRecipe);
  });

  function delRecipe(){
    var id = $(this).closest('.recipe').attr('data-recipe-id');
        type = 'delete',
        url = '/recipes/' + id;
}

  function addRecipe(e){
    var data = $('form').serialize(),
        type = $('form').attr('method'),
        url  = $('form').attr('action');
    
    $.ajax({url:url, type:type, dataType:'json', success:function(data){
      console.log(data);
    }});
}

    $('input, textarea').val('');

    $.ajax({url:url, type:type, data:data, dataType:'html', success:function(html){
      var $recipe = $(html);
      $recipe.css('display', 'none');
      $('#recipes').prepend($recipe);
      $recipe.fadeIn(3000);
    }});

    e.preventDefault();
  }
   
  function show(){
    $('form').fadeIn();
  }
  function hide(){
    $('form').fadeOut();
  }

})();

