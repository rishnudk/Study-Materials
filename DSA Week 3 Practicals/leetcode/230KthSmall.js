


var kthSmallest = function(root, k) {
    const inorder = [];
    function dfs(node) {
        if (!node) return;
        dfs(node.left);
        inorder.push(node.val);
        dfs(node.right);
    }
    dfs(root);
    return inorder[k - 1];
};