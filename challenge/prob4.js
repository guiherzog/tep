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

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var r = parseInt(n_temp[1]);
    for(var a0 = 0; a0 < n-1; a0++){
        var x_temp = readLine().split(' ');
        var x = parseInt(x_temp[0]);
        var y = parseInt(x_temp[1]);
    }

}
