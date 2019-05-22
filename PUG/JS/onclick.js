
$(document).on('click', '.card', function () {
    var proID = $(this).attr('productID');
    console.log(proID);
    var proName = $(this).find('h5').text();
    var proPri = $(this).find('.card-text').text();
    var object = {
        id: proID,
        name: proName,
        price: proPri
    }
    window.location="http://localhost:5500/INDEX/Home/detail.html?id="+proID;
   
});

