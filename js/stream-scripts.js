var cycle = 1;

$(document).ready(function() {

  $('#me').click(function(){
    switch (cycle){
    case 0:
      $('#me').attr('src', 'img/winterhead.jpg');
      $('#nav').css({'background-color': '#0074d9'});
      cycle++;
      break;
    case 1:
      $('#me').attr('src', 'img/fallhead.jpg');
      $('#nav').css({'background-color': '#ff851b'});
      cycle++;
      break;
    case 2:
      $('#me').attr('src', 'img/summerhead.jpg');
      $('#nav').css({'background-color': '#3d9970'});
      cycle++;
      break;
    case 3:
      $('#me').attr('src', 'img/springhead.jpg');
      $('#nav').css({'background-color': '#85144b'});
      cycle = 0;
      break;
    default:
      cycle = 0;
    }
  });
});
