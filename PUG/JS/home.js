var array;
var cardNewProduct = '';
var cardfeaturedProducts = '';
var cardSale = '';
var cardSale2 = '';
var controlCar = '';
var item = '';
$(window).on('load', function () {
    axios.get('http://localhost:3000/featuredProducts').then(function (res) {
        array = res.data;
        console.log(array);
        array.forEach(function (element) {
            cardNewProduct += '<div class="card">' +
                '<img class="card-img-top" src="' + element.src + '" alt="">' +
                '<div class="card-body">' +
                ' <h5 class="card-title">' + element.ten + '</h5>' +
                '<div class="star"><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><i class="fa fa-star-half checked" aria-hidden="true"> </i></div>' +
                '<p class="card-text">' + element.price + '<strike>250.000 đ</strike></p>' +
                '</div>' +
                '</div>'
        });
    }).catch(function (error) {
        console.log(error);
    }).finally(function () {
        document.getElementById('title').insertAdjacentHTML('afterbegin', cardNewProduct);
    });
    axios.get('http://localhost:3000/newProducts').then(function (res) {
        cardfeaturedProducts = '<div class="container-home__best__list__list1">' +
            '<div class="container-home__best__list__list1__Cardbig">' +
            '<div class="card" id="pro-1" Onclick="" productID="1">' +
            '<div class="card__status"><p class="card__status__p">New</p></div>' +
            '<div class="hovereffect"><img class="img-responsive card-img-top" src="' + res.data[0].src + '" alt=""><div class="overlay"><div class="card__action"><p class="card__status__p">MUA NGAY</p></div><div class="card__search"><img src="../../IMG/icon-search-ct.png" alt=""></div></div></div>' +
            '<div class="card-body"> ' +
            '<h5 class="card-title">' + res.data[0].ten + '</h5>' +
            '<div class="star"><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><i class="fa fa-star-half checked" aria-hidden="true"> </i></div>' +
            '<p class="card-text">250.000 đ</p>' +
            '</div>' +
            '</div>' +
            '<div class="container-home__best__list__list1__listCard">' +
            '<div class="card" id="pro-2" productID="2"><div class="hovereffect"><img class="img-responsive card-img-top" src="' + res.data[1].src + '" alt=""><div class="overlay"></div></div>' +
            '<div class="card-body"> ' +
            '<h5 class="card-title">' + res.data[1].ten + '</h5>' +
            '<div class="star"><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><i class="fa fa-star-half checked" aria-hidden="true"> </i></div>' +
            '<p class="card-text">250.000 đ</p>' +
            '</div>' +
            '</div>' +
            '<div class="card" id="pro-3"><div class="hovereffect"><img class="img-responsive card-img-top" src="' + res.data[2].src + '" alt=""><div class="overlay"></div></div>' +
            '<div class="card-body"> ' +
            '<h5 class="card-title">' + res.data[2].ten + '</h5>' +
            '<div class="star"><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><i class="fa fa-star-half checked" aria-hidden="true"> </i></div>' +
            '<p class="card-text">250.000 đ</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="container-home__best__list__list2"> ' +
            '<div class="container-home__best__list__list2__listCard">' +
            '<div class="card">' +
            '<div class="card__status"> ' +
            '<p class="card__status__p">-50%</p>' +
            '</div><div class="hovereffect"><img class="img-responsive card-img-top" src="../../IMG/spx2-5.png" alt=""><div class="overlay"></div></div>' +
            '<div class="card-body"> ' +
            '<h5 class="card-title">Cây dạ lam</h5>' +
            '<div class="star"><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><i class="fa fa-star-half checked" aria-hidden="true"> </i></div>' +
            '<p class="card-text">250.000 đ</p>' +
            '</div>' +
            '</div>' +
            '<div class="card">' +
            '<div class="card__status"> ' +
            '<p class="card__status__p">New</p>' +
            '</div><div class="hovereffect"><img class="img-responsive card-img-top" src="../../IMG/spx2-15.png" alt=""><div class="overlay"></div></div>' +
            '<div class="card-body"> ' +
            '<h5 class="card-title">Cây danh dự</h5>' +
            '<div class="star"><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><i class="fa fa-star-half checked" aria-hidden="true"> </i></div>' +
            '<p class="card-text">250.000 đ</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="container-home__best__list__list2__Cardbig">' +
            '<div class="card">' +
            '<div class="card__status"> ' +
            '<p class="card__status__p">-50%</p>' +
            '</div><div class="hovereffect"><img class="img-responsive card-img-top" src="../../IMG/spx2-3.png" alt=""><div class="overlay"></div></div>' +
            '<div class="card-body"> ' +
            '<h5 class="card-title">Cây đa gốc nhỏ</h5>' +
            '<div class="star"><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><i class="fa fa-star-half checked" aria-hidden="true"> </i></div>' +
            '<p class="card-text">250.000 đ</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>'
    }).catch(function (error) {
        console.log(error);
    }).finally(function () {
        document.getElementById('container-home-featuredProducts').insertAdjacentHTML('afterbegin', cardfeaturedProducts);
    });
    cardSale = '<div id="carousel-example-generic" class="carousel slide ' +
        'hidden-xs" data-ride="carousel">' +
        '<!-- Wrapper for slides -->' +
        '<div class="carousel-inner" id="carousel-inner">' +
        '<div class="item active">' +
        '<div class="row">' +
        '<div class="col-sm-4">' +
        '<div class="col-item">' +
        '<div class="photo">' +
        '<img' +
        ' src="../../IMG/spx2-6.png"' +
        ' class="img-responsive" alt="a"' +
        '/>' +
        '</div>' +
        '<div class="info">' +
        '<div class="row">' +
        '<div class="price col-md-12">' +
        '<h5 class="card-title">Cay Chan Chim</h5>' +
        '<div class="star">' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<i class="fa fa-star-half checked" aria-hidden="true"></i>' +
        '</div>' +
        '</div>' +
        '<div class="col-md-12">' +
        '<h5 class="price-text-color"> $149.99</h5>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="col-sm-4">' +
        '<div class="col-item">' +
        '<div class="photo">' +
        '<img' +
        ' src="../../IMG/spx2-6.png"' +
        ' class="img-responsive" alt="a"' +
        '/>' +
        '</div>' +
        '<div class="info">' +
        '<div class="row">' +
        '<div class="price col-md-12">' +
        '<h5 class="card-title">Cay Chan Chim</h5>' +
        '<div class="star">' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<i class="fa fa-star-half checked" aria-hidden="true"></i>' +
        '</div>' +
        '</div>' +
        '<div class="col-md-12">' +
        '<h5 class="price-text-color"> $149.99</h5>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="col-sm-4">' +
        '<div class="col-item">' +
        '<div class="photo">' +
        '<img' +
        ' src="../../IMG/spx2-6.png"' +
        ' class="img-responsive" alt="a"' +
        '/>' +
        '</div>' +
        '<div class="info">' +
        '<div class="row">' +
        '<div class="price col-md-12">' +
        '<h5 class="card-title">Cay Chan Chim</h5>' +
        '<div class="star">' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<i class="fa fa-star-half checked" aria-hidden="true"></i>' +
        '</div>' +
        '</div>' +
        '<div class="col-md-12">' +
        '<h5 class="price-text-color"> $149.99</h5>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +

        '</div>' +
        '<div class="item">' +
        '<div class="row">' +
        '<div class="col-sm-4">' +
        '<div class="col-item">' +
        '<div class="photo">' +
        '<img' +
        ' src="../../IMG/spx2-4.png"' +
        ' class="img-responsive" alt="a"' +
        '/>' +
        '</div>' +
        '<div class="info">' +
        '<div class="row">' +
        '<div class="price col-md-12">' +
        '<h5 class="card-title">Cay Chan Chim</h5>' +
        '<div class="star">' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<i class="fa fa-star-half checked" aria-hidden="true"></i>' +
        '</div>' +
        '</div>' +
        '<div class="col-md-12">' +
        '<h5 class="price-text-color"> $149.99</h5>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="col-sm-4">' +
        '<div class="col-item">' +
        '<div class="photo">' +
        '<img' +
        ' src="../../IMG/spx2-5.png"' +
        ' class="img-responsive" alt="a"' +
        '/>' +
        '</div>' +
        '<div class="info">' +
        '<div class="row">' +
        '<div class="price col-md-12">' +
        '<h5 class="card-title">Cay Chan Chim</h5>' +
        '<div class="star">' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<i class="fa fa-star-half checked" aria-hidden="true"></i>' +
        '</div>' +
        '</div>' +
        '<div class="col-md-12">' +
        '<h5 class="price-text-color"> $149.99</h5>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="col-sm-4">' +
        '<div class="col-item">' +
        '<div class="photo">' +
        '<img' +
        ' src="../../IMG/spx2-11.png"' +
        ' class="img-responsive" alt="a"' +
        '/>' +
        '</div>' +
        '<div class="info">' +
        '<div class="row">' +
        '<div class="price col-md-12">' +
        '<h5 class="card-title">Cay Chan Chim</h5>' +
        '<div class="star">' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<i class="fa fa-star-half checked" aria-hidden="true"></i>' +
        '</div>' +
        '</div>' +
        '<div class="col-md-12">' +
        '<h5 class="price-text-color"> $149.99</h5>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';

    cardSale += '<div id="carousel-example-generic1" class="carousel slide ' +
        'hidden-xs" data-ride="carousel">' +
        '<!-- Wrapper for slides -->' +
        '<div class="carousel-inner" id="carousel-inner">' +
        '<div class="item active">' +
        '<div class="row">' +
        '<div class="col-sm-4">' +
        '<div class="col-item">' +
        '<div class="photo">' +
        '<img' +
        ' src="../../IMG/spx2-6.png"' +
        ' class="img-responsive" alt="a"' +
        '/>' +
        '</div>' +
        '<div class="info">' +
        '<div class="row">' +
        '<div class="price col-md-12">' +
        '<h5 class="card-title">Cay Chan Chim</h5>' +
        '<div class="star">' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<i class="fa fa-star-half checked" aria-hidden="true"></i>' +
        '</div>' +
        '</div>' +
        '<div class="col-md-12">' +
        '<h5 class="price-text-color"> $149.99</h5>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="col-sm-4">' +
        '<div class="col-item">' +
        '<div class="photo">' +
        '<img' +
        ' src="../../IMG/spx2-6.png"' +
        ' class="img-responsive" alt="a"' +
        '/>' +
        '</div>' +
        '<div class="info">' +
        '<div class="row">' +
        '<div class="price col-md-12">' +
        '<h5 class="card-title">Cay Chan Chim</h5>' +
        '<div class="star">' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<i class="fa fa-star-half checked" aria-hidden="true"></i>' +
        '</div>' +
        '</div>' +
        '<div class="col-md-12">' +
        '<h5 class="price-text-color"> $149.99</h5>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="col-sm-4">' +
        '<div class="col-item">' +
        '<div class="photo">' +
        '<img' +
        ' src="../../IMG/spx2-6.png"' +
        ' class="img-responsive" alt="a"' +
        '/>' +
        '</div>' +
        '<div class="info">' +
        '<div class="row">' +
        '<div class="price col-md-12">' +
        '<h5 class="card-title">Cay Chan Chim</h5>' +
        '<div class="star">' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<i class="fa fa-star-half checked" aria-hidden="true"></i>' +
        '</div>' +
        '</div>' +
        '<div class="col-md-12">' +
        '<h5 class="price-text-color"> $149.99</h5>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +

        '</div>' +
        '<div class="item">' +
        '<div class="row">' +
        '<div class="col-sm-4">' +
        '<div class="col-item">' +
        '<div class="photo">' +
        '<img' +
        ' src="../../IMG/spx2-4.png"' +
        ' class="img-responsive" alt="a"' +
        '/>' +
        '</div>' +
        '<div class="info">' +
        '<div class="row">' +
        '<div class="price col-md-12">' +
        '<h5 class="card-title">Cay Chan Chim</h5>' +
        '<div class="star">' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<i class="fa fa-star-half checked" aria-hidden="true"></i>' +
        '</div>' +
        '</div>' +
        '<div class="col-md-12">' +
        '<h5 class="price-text-color"> $149.99</h5>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="col-sm-4">' +
        '<div class="col-item">' +
        '<div class="photo">' +
        '<img' +
        ' src="../../IMG/spx2-5.png"' +
        ' class="img-responsive" alt="a"' +
        '/>' +
        '</div>' +
        '<div class="info">' +
        '<div class="row">' +
        '<div class="price col-md-12">' +
        '<h5 class="card-title">Cay Chan Chim</h5>' +
        '<div class="star">' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<i class="fa fa-star-half checked" aria-hidden="true"></i>' +
        '</div>' +
        '</div>' +
        '<div class="col-md-12">' +
        '<h5 class="price-text-color"> $149.99</h5>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="col-sm-4">' +
        '<div class="col-item">' +
        '<div class="photo">' +
        '<img' +
        ' src="../../IMG/spx2-11.png"' +
        ' class="img-responsive" alt="a"' +
        '/>' +
        '</div>' +
        '<div class="info">' +
        '<div class="row">' +
        '<div class="price col-md-12">' +
        '<h5 class="card-title">Cay Chan Chim</h5>' +
        '<div class="star">' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<i class="fa fa-star-half checked" aria-hidden="true"></i>' +
        '</div>' +
        '</div>' +
        '<div class="col-md-12">' +
        '<h5 class="price-text-color"> $149.99</h5>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
    document.getElementById('container-home__sell__list__sale').insertAdjacentHTML('afterbegin', cardSale);
    controlCar = '<div class="controls pull-right hidden-xs">' +
        '<a class="left fa fa-chevron-left btn btn-primary" href="#carousel-example-generic1" data-slide="prev"></a>' +
        '<a class="right fa fa-chevron-right btn btn-primary" href="#carousel-example-generic" data-slide="next"></a>' +
        '</div>';
    document.getElementById('title__sale').insertAdjacentHTML('afterbegin', controlCar);
});




