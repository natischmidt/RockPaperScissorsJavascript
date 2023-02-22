
$(document).ready(function(){
    $('.btn-rock').click(function() {
        ichoserock();
    });
});

function ichoserock(){
    $('.btn-rock').animate({ width: '100px', height: '200px'});

}
