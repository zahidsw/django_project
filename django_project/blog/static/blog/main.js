$(document).ready(function() {
if ( $.fn.dataTable.isDataTable( '#example' ) ) {
    table = $('#example').DataTable();
}
else {
    table = $('#example').DataTable( {
    "paging" :  false,
    "odering": false,
    "info": false,
    "bFilter": false
    } );
}
   document.getElementById("my_dataviz").style.display = "none";
   document.getElementById("bmi").style.display = "none";
   $('#inputState').change (function () {
              var val = this.value;
                //selected value
               var element = $(this).find('option:selected');  // assign selected element
               var myTag = element.attr("aTag");              // get attribute by name
               if(val == "histogram"){
               document.getElementById("example").style.display = "none";
               document.getElementById("bmi").style.display = "none";
               document.getElementById("my_dataviz").style.display = "inline";
               }else if(val == "bmi"){
               document.getElementById("example").style.display = "none";
               document.getElementById("bmi").style.display = "inline";
               document.getElementById("my_dataviz").style.display = "none";
               }else if(val == "choose"){
               $("#example").show();
               document.getElementById("bmi").style.display ="none";
               document.getElementById("my_dataviz").style.display = "none";
               }
    });

});