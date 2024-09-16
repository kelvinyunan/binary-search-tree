class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor(arr) {
        this.root = buildTree(arr);
    }
}

function buildTree(arr) {
    //let start = 0;
    //let end = arr.length - 1;
    let mid = Math.floor(arr.length / 2);

    if (arr.length == 2) {
        let root = new Node(arr[1], new Node(arr[0], null, null), null);
        return root
    }

    if (arr.length == 1) {
        let root = new Node(arr[0], null, null)
        return root
    }
    
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid + 1);
    let root = new Node(arr[mid], buildTree(leftArr), buildTree(rightArr));
    
    return root;
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
        return;
    }
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};
                    //0 1 2 3 4 5 6 7 8
//const x = new Tree([1,2,3,4,5,6,7,8,9])
prettyPrint(buildTree([1,2,3,4,5,6,7,8,9]))
// [1,2,3,4,5,6,7,8,9] test array
