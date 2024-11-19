$(document).ready(function () {
    // Toggles the visibility of the paragraph when the button is clicked
    $("#toggle-button").on("click", function () {
        $("#paragraph").toggle(); // Toggles visibility
    });

    // Changes the text of the header when hovered over
    $("#main-header").hover(
        function () {
            $(this).text("You are hovering over the header!"); // On mouse enter
        },
        function () {
            $(this).text("Hover over this header"); // On mouse leave
        }
    );
});
