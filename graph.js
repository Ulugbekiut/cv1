//graph is a collection of nodes and edges

const graph = {
    a: ["b", "c" ], 
    b: ["d"],
    c: ["e"],
    d: ["f"],
    e: [],
    f: []
}
const dfs = (graph, source ) => {
    let stack = [source];
    while(stack.length>0){
        let current = stack.pop();
        console.log(current);
        for( let neighbor of graph[current]){
            stack.push(neighbor)
        }
    }
}
// dfs(graph, "a")


/// dfs recursive way 
const dfs1 =( graph, source)=> {
    console.log(source);
    for(let neighbor of graph[source]){
        dfs1(graph, neighbor)
    }
}

// dfs1(graph, "a")  


const bfs = (graph, source) => {
    let queue = [source];
    while(queue.length > 0 ){
        let current= queue.shift();
        console.log(current)
        for(let n of graph[current]){
            queue.push(n)
        }
    }
}
// bfs(graph, "a")


function hasPath (graph, src, dest) {
    if (src === dest) {
      console.log(  "has path is ", true)
    }
    for(let neighbor of graph[src]){
        if( hasPath(graph, neighbor, dest) === true) {
            return true
        }
    }
  console.log(false)
}
hasPath(graph, "b", "e")