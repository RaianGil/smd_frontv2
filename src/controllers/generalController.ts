export const initPopup = () => {
    $(".p-popup").hide()
    $(".p-popup").removeClass("d-none")
    $('.bgPop').click(function(){
        $(".p-popup").fadeOut("fast", function(){
        })
    })
}
