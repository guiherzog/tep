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
    var n = parseInt(readLine());
    c = readLine().split(' ');
    c = c.map(Number);
    let smallest = 1000000;
    let secondSmallest = 1000000;
    let count = 0;
    let hF = 0;
    c.forEach(n =>  {
        if (n < smallest){
            smallest = n;
            count = 1;
            return
        }
        if (n == smallest){
            count++;
            return
        }
        if (n < secondSmallest)
            secondSmallest = n;
    })
    
    console.log(`${count == 1 ? (smallest*2 > secondSmallest ? secondSmallest : smallest*2) : smallest} ${count == 1? count : c.length}`)
 
}
