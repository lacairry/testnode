function alert(str){
    console.log(str);
}

new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000); // (*)
    setTimeout(() => resolve(1), 5000); // (*)
    setTimeout(() => resolve(1), 10000); // (*)

}).then(function(result) { // (**)

    alert(result); // 1
    return result * 2;

}).then(function(result) { // (***)

    alert(result); // 2
    setTimeout(()=>{alert("Here");}, 2000);
    return result * 2;

}).then(function(result) {

    alert(result); // 4
    return result * 2;

});