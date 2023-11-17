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
dfs(graph, "a")