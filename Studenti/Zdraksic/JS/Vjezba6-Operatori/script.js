var x = "Lorem ipsum",
    y = 2345,
    z = "2345",
    q = false;

    var trueFalse = !!"false" == !!"true";
    console.log(trueFalse);

    console.log(q || x || y || z);

    var num = 6;
    num--;
    console.log(num);

    var price = 26.5;
    var taxRate = 0.082;

    var totalPrice = price + (price * taxRate);
    console.log(totalPrice);
    console.log(totalPrice.toFixed(2));
    


 