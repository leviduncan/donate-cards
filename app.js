$(document).ready(function () {

    $(".overlay").hide();

    $("#hide").click(function () {
        $(".overlay").hide();
    });
    $("#show").click(function () {
        $(".overlay").show();
    });

    $("#first").click(function () {
        $(".overlay").show();
        let $newTitle = $("#firstTitle").text()
        let $newAmt = $("#firstAmt").text()
        $(".overlay h4").text($newTitle);
        $(".overlay .amt").text($newAmt);
    });

    $("#second").click(function () {
        $(".overlay").show();
        let $newTitle = $("#secondTitle").text()
        let $newAmt = $("#secondAmt").text()
        $(".overlay h4").text($newTitle);
        $(".overlay .amt").text($newAmt);
    });

    $("#third").click(function () {
        $(".overlay").show();
        let $newTitle = $("#thirdTitle").text()
        let $newAmt = $("#thirdAmt").text()
        $(".overlay h4").text($newTitle);
        $(".overlay .amt").text($newAmt);
    });
});