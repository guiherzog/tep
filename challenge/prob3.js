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

function addNode(u, v, w){
    if (tree[u] == undefined){            
        tree[u] = {[v]: w};
    }
    else
        tree[u][v] = w;

    if (tree[v] == undefined){
        tree[v] = {[u]: w};
    }
    else
        tree[v][u] = w;
}

function backtrack(nodes, parent, sum){
    // Para cada nó
    if (nodes.length == 0){
        // Coloca a soma total
        m.push(sum);
        return ;
    }

    for (node of nodes){
        if (parent != null){
            newNodes = Object.keys(tree[node]).filter(x => x != 'visited' && !tree[x].visited)
            tree[node].visited = true;
            console.log(newNodes);
            console.log(`${parent} ${node} ${tree[node][parent]}`);
            backtrack(newNodes, node, sum+tree[node][parent]);
            tree[node].visited = false;
        }
        else{
            newNodes = nodes.filter(n => n != node && n != 'visited');
            console.log(newNodes);
            console.log(`${parent} ${node} ${tree[node][parent]}`);
            tree[node].visited = true;
            backtrack(newNodes, node, sum);
            tree[node].visited = false;
        }

    }
}

let nodes = []
let m = [];
let tree = {};
function main() {
    var n = parseInt(readLine());
    for(var a0 = 0; a0 < n-1; a0++){
        var u_temp = readLine().split(' ');
        var u = parseInt(u_temp[0]);
        var v = parseInt(u_temp[1]);
        var w = parseInt(u_temp[2]);
        
        // Adiciona os nós na tree.
        addNode(u,v,w);
    }
    
    console.log(tree);
    
    // Sorteia todas as permutações de nós.
    backtrack(Object.keys(tree), null, 0);
    
    console.log(m);

}
