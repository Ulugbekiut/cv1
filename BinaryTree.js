/*  
1. at most 2 children per node 
2. Exactly one root
3. Exactly one root from root to any node

*/
class Node {
    constructor(val){
        this.val =val;
        this.right = null;
        this.left = null;
    }
}

const a = new Node("a")
const b= new Node("b")
const c = new Node("c")
const d = new Node("d")
const e = new Node("e")
const f = new Node("f")

a.left = b;
a.right = c;
b.left =d;
b.right = e;
c.right =f;


//dfs depth first traversal 
// dfs  always use stact data structure 
// Time O(n)
//Space O(n) Iterative version 

const depthFirstSearch = (root)  => {
    const stack = [root];
    while(stack.length >0){
        const current = stack.pop();
        console.log(current.val);
        if(current.right) stack.push(current.right)
        if(current.left) stack.push(current.left)

    }
}

console.log(depthFirstSearch(a));