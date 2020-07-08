var deleteDuplicates = function(head) {
    if(!head || !head.next) {
        return head;
    }
    let dummy = new ListNode();
    dummy.next = head;
    let cur = dummy;
    // cur后面至少有两个节点
    while(cur.next && cur.next.next) {
        if(cur.next.val === cur.next.next.val) {
            let val = cur.next.val;
            while(cur.next && cur.next.val === val) {
                cur.next = cur.next.next
            }
        }else {
            cur = cur.next
        }
    }
    return dummy.next;
};