onmessage = function(event) {
    /*var arr = event.data;
    var uppercased = arr.map(function (element) {
        return element.toUpperCase();
        console.log(uppercased);

    });*/
    event.data.innerHTML = 'Hello World!';
    postMessage({message: 'done'});
};