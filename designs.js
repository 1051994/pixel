var hright,width,color;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
 event.preventDefault();
height=$('#inputHeight').val();
  
width=$('#inputWeight').val();
  makeGrid(height,width);
  console.log('Height: '+height+'gnd width:'+width);
})
function makeGrid(x,y) {
 $('tr').remove();
  for (i=1;i<=x;i++){
    $('#pixelCavans').append('<tr id=table'+i+'></tr>');
    for(var j=1;j <=1;j++){
      $('#table'+i).append('<td></td>');
    }
  }
  $('td').click(function addcolor(){
    color=$('#colorPicker').val();
    if($(this).attr('style')){
      $(this).removeAttr('style')
    }else{
      $(this).alert('style','background-color:'+color);
    }
})
}
