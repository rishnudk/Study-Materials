var mergeTwoLists = function(list1, list2) {
    // Create a dummy node to simplify edge cases
    let dummy = new ListNode(-1);
    let current = dummy;
    
    // Traverse both lists while both are not null
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    
    // Attach the remaining nodes (if any)
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }
    
    // The merged list starts from dummy.next
    return dummy.next;
};
