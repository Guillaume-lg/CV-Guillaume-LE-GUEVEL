function photo(année) {
    var image;
    if (année == 2024) {
        image = "photo foot 1.jpg";
    }
    else if (année == 2023) {
        image = "photo foot 2.jpg"
    }
    else if (année == 2022) {
        image = "photo foot 3.jpg"
    }
    else{
        image = "photo foot 4.jpg"
    }
    document.getElementById("monImage1").src = image;
}

