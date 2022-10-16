$("#search").on("keyup", function() {
        var value = $(this).val().toUpperCase();
        
        $("#stores a").each(function(index) {      
                $row = $(this);            
                var id = $row.text().toUpperCase();           
                //All match
                //if (id.indexOf(value) == -1) {
                //For startWith Match
                  if (!id.startsWith(value)) {
                    $row.hide();
                }
                else {
                    $row.show();
                }
        });
    });
