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

// Method to check if a number is divisible by 7 and/or 4.
function isLucky(n){
    // n = 4x + 7y => x = n - 7y / 4
    if ((n % 7) % 4 == 0){
        return console.log('Yes');
    } else {
        let i = 1;
        while (i*4 != 28){
            if (n - i*4 < 0)
                return console.log('No');
            if ((n - i*4) % 7 == 0)
                return console.log('Yes');
            i++;
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
