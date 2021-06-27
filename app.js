const url = "https://zenquotes.io/api/random";
const proxy = "https://cors-anywhere.herokuapp.com/";
var quoteText = "Loading...";
var quoteAuthor = "";

document.getElementById("text").innerHTML = quoteText;
document.getElementById("author").innerHTML = quoteAuthor;

const backgroundColors = ["blue", "green", "purple", "orange", "red", "brown"];

function changeColors() {
    var randNum = Math.floor(Math.random() * backgroundColors.length);
    $(".container-fluid,.btn").css("background-color", backgroundColors[randNum]);
    $("#text,#author,.fab").css("color", backgroundColors[randNum]);
}

function loadQuote() {
    setTimeout(function () {
        $.ajax({
            url: proxy + url,
            dataType: "json",
            success: function (data) {
                changeColors();

                $("#twitter-icon").addClass("fa-twitter-square");

                quoteText = data[0]["q"];
                $("#text").html(quoteText);
                quoteAuthor = data[0]["a"];
                $("#author").html("- " + quoteAuthor);

                $("h2,h4,.btn,.fab").fadeIn(1000);

                var quoteSplitStr = quoteText.split(" ");
                var quoteUrlString = quoteSplitStr.join("%20");
                var authorSplitStr = quoteAuthor.split(" ");
                var authorUrlString = authorSplitStr.join("%20");

                var twitterURL = "https://twitter.com/intent/tweet?text=";
                var result = twitterURL + quoteUrlString + " -" + authorUrlString;
                $("a").attr("href", result);
            }
        });
    }, 1000);
}

function newQuote() {
    // $("#new-quote").click(function () {
    $("h2,h4,.btn,.fab").fadeOut(1000);

    loadQuote();
}

loadQuote();
