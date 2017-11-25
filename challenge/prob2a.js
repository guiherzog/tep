/* Start of Methods to read input */
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}
/* End of Methods to read input */

// Naive method to verify if a number is divisible by 4 and/or 7.
function isLucky(n){
    for (let i = 0; i <= parseInt(n/7); i++){
        for (let j = 0; j <= parseInt(n/4); j++){
            if (i*7 + j*4 == n)
        		return console.log('Yes');        
        }
    } 
    return console.log('No');
}

function main() {
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        var n = parseInt(readLine());
        isLucky(n);
    }
}
