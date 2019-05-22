$(window).on('load', function () {
    var proArray = [];
    var existing = JSON.parse(JSON.stringify(localStorage.getItem("tranquanlam")));
    console.log(existing);
    existing = existing.split(",");
    for (i = 0; i < existing.length; i++) {
        existing[i] = existing[i].slice(existing[i].indexOf(":") + 1);
        console.log(existing[i]);
    }
    for (i = 0; i < existing.length; i++) {
        var m = existing[i].indexOf("}");
        var f = existing[i].indexOf("\"");

        if (m !== -1) {
            existing[i] = existing[i].slice(0, existing[i].indexOf("}"));
        }
        if (f !== -1) {
            existing[i] = existing[i].slice(1, existing[i].lastIndexOf("\""));
        }
    }
    var number;
    for (i = 0; i < existing.length; i++) {
        number = 1;
        var id = existing[i];
        i++;
        var ten = existing[i];
        i++;
        var price = existing[i];
        i++;
        var src = existing[i];
        var obPro = {
            id: id,
            ten: ten,
            content: price,
            src: src,
            number: 0
        }
        proArray.push(obPro);
    }
    for (i = 0; i < proArray.length; i++) {
        console.log(proArray[i]);
    }
    var tablePro = [];
    var fla = 0;
    proArray.forEach(function (element) {
        if (tablePro.length == 0) {
            tablePro.push(element);
        }
        tablePro.forEach(function (elements) {
            if (element.id == elements.id) {
                elements.number = elements.number + 1;
                fla++;
            } 
        });
        if(fla < 1){
            element.number = element.number + 1;
            tablePro.push(element);
        }
        fla = 0;
    });
    console.log(tablePro);
    var tableBasket = '	<tr>	 ' +
        '	<th>Hình ảnh</th>	 ' +
        '	<th>Tên sản phẩm</th>	 ' +
        '	<th>Đơn giá </th>	 ' +
        '	<th>Số lượng</th>	 ' +
        '	<th>Thành tiền</th>	 ' +
        '	<th>Xóa</th>	 ' +
        '	</tr>	 ';

    for (i = 0; i < tablePro.length; i++) {
        
        tableBasket = tableBasket + '	<tr>	 ' +
            '	<td> <img class="img-product" src="'+ tablePro[i].src+'" alt=""></td>	 ' +
            '	<td class="name-product">'+ tablePro[i].ten+'</td>	 ' +
            '	<td class="price">	 ' +
            '	<p>'+ tablePro[i].content+'</p>	 ' +
            '	</td>	 ' +
            '	<td class="number">	 ' +
            '	<p>'+ tablePro[i].number+'</p>	 ' +
            '	</td>	 ' +
            '	<td class="price-total">	 ' +
            '	<p>'+ parseInt(tablePro[i].content)*tablePro[i].number+'</p>	 ' +
            '	</td>	 ' +
            '	<td id="detele" class="cancel"><img src="../../IMG/Cancel.png" alt=""></td>	 ' +
            '	</tr>	 '
    }
    document.getElementById('basket').insertAdjacentHTML('afterbegin', tableBasket);
});

