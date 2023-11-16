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

// const depthFirstSearch = (root)  => {
//     const stack = [root];
//     while(stack.length >0){
//         const current = stack.pop();
//         console.log(current.val);
//         if(current.right) stack.push(current.right)
//         if(current.left) stack.push(current.left)

//     }
// }

// recursive way 

// const  dfs =(root) => {
//     if(root ===null) return  [];
//     const leftValues = dfs(root.left)
//     const rigthValues = dfs(root.right)
   

//     return [root.val,  ...leftValues, ]
// }


// console.log(dfs(a));

// const breadthFirstTraversal = (root)=> {
//     // no recursive way here , only iterative 

//     const queue = [root]
//     while(queue.length > 0) {
//         const current = queue.shift()
//         console.log(current.val)
//         if(current.left) queue.push(current.left)
//         if(current.right) queue.push(current.right)
//     }
// }

// console.log(breadthFirstTraversal(a))


//  const breadthFirstTraversal = (root, target)=> {
//     // no recursive way here , only iterative 

//     const queue = [root]
//     while(queue.length > 0) {
//         const current = queue.shift()
//       if( current.val === target) return true
//         if(current.left) queue.push(current.left)
//         if(current.right) queue.push(current.right)
//     }
//     return false;
// }

// console.log(breadthFirstTraversal(a, "h"))

// const dfs = (root, target )=> {
//     if (root ===null) return false;
//     if(root.val===target) return true
//   return  dfs(root.left, target) || dfs(root.right, target)
// }
// console.log(dfs(a, ""))

// Find target from Clone
function getTargetCopy(original, cloned, target) {
    let stackOriginal = [original];
    let stackCloned = [cloned];

    while (stackOriginal.length > 0) {
        let nodeOriginal = stackOriginal.pop();
        let nodeCloned = stackCloned.pop();

        if (nodeOriginal === target) {
            return nodeCloned;
        }

        if (nodeOriginal.right) {
            stackOriginal.push(nodeOriginal.right);
            stackCloned.push(nodeCloned.right);
        }
        if (nodeOriginal.left) {
            stackOriginal.push(nodeOriginal.left);
            stackCloned.push(nodeCloned.left);
        }
    }

    return null;
}


//2236 Root equals sum of children
function checkTree(root) {
    // If the root is null, the tree is empty, and the condition is trivially met.
    if (!root) {
        return true;
    }

    // Check the sum for the root node
    if (root.left || root.right) {
        let sum = 0;
        if (root.left) sum += root.left.val;
        if (root.right) sum += root.right.val;

        if (root.val !== sum) {
            return false;
        }
    }

    // Recursively check for the left and right subtrees
    return checkTree(root.left) && checkTree(root.right);
}


//Merge two  trees 
var mergeTrees = function(t1, t2) {
    if (!t1 && !t2) return null;
    const root = new TreeNode(((t1 || 0).val || 0) + ((t2 || 0).val || 0));
    root.left = mergeTrees(t1 && t1.left, t2 && t2.left);
    root.right = mergeTrees(t1 && t1.right, t2 && t2.right);
    return root;
}


//Evaluate boolean binary tree 
var evaluateTree = function(root) {
    // recursive dfs 
    if(!root) return false
    if(!root.left && !root.right && root.val === 1) return true;  
    if(!root.left && !root.right && root.val === 0) return false; 
    if(root.val ===2) return (evaluateTree(root.left) || evaluateTree(root.right))
    if(root.val = 3) return (evaluateTree(root.left) && evaluateTree(root.right))
};