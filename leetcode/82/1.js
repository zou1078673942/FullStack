var deleteDuplicates = function(head) {
    if(!head || !head.next)
        return head
    let p1 = new ListNode()
    p1.next = head
    let p2 = p1   
    while(p2.next && p2.next.next){
        if(p2.next.val === p2.next.next.val){
            let val = p2.next.val
            while(p2.next && p2.next.val === val){
                p2.next = p2.next.next
            }
        }else{
            p2 = p2.next
        }
    }
    return p1.next
}