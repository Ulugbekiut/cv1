var canPlaceFlowers = function(flowerbed, n) {

    let newArr = [0, ...flowerbed, 0]
    for (let i=1; i<newArr.length; i++){
        if(newArr[i]===0 && newArr[i-1] === 0 && newArr[i+1]===0){
            newArr[i]=1; 
            n-=1;
        }
    }
    return n<=0 ? true : false
};
//https://leetcode.com/problems/can-place-flowers/ 


function majorityElement(nums) {
    let candidate = null;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
}


function pivotIndex(nums) {
    let totalSum = nums.reduce((a,b)=>(a+b),0)
    let leftSum= 0;
   for(let i=0; i<nums.length; i++){
       if(leftSum === totalSum -leftSum-nums[i]){
           return i
       }
       leftSum+=nums[i]
   }
   return -1
   }
   
   function levelOrder(root) {
    if (!root) return [];
    
    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const level = [];
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(level);
    }

    return result;
} //Binary tree levelOrder traversal . this question we use bfs and levelsize. Really good for visualizevar cloneGraph = function(node) {
    // Nodes we have already copied
   // DFS approach
var cloneGraph = function(node) {
    // Nodes we have already copied
    const visited = {};

    // DFS function to copy graph
    const dfs = (node) => {
        if (!node) return node;
        // If we have seen this node before, return it
        if (visited[node.val]!=null) return visited[node.val];

        // Create base for copied node
        const root = new Node(node.val);
        // Add this copied node to group of nodes we hav copied
        visited[node.val] = root;

        // Add copied neighbors to the current copied node
        node.neighbors.forEach(n => root.neighbors.push(dfs(n)))
        return root;
    }

    // Return new copied graph
    return dfs(node);
};





