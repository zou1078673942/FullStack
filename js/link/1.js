var oddEvenList = function (head) {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
    let l1 = new ListNode(null,null),l1Current = l1
    let l2 = new ListNode(null,null),l2Current = l2
    let current = head,i=1
    while (current){
        // console.log(current)
        if(i%2 !== 0){
            l1Current.next = current
            l1Current = l1Current.next
        }else{
            l2Current.next = current
            l2Current = l2Current.next
            console.log(l2)
        }
        i++;
        current = current.next
    }
    if(i%2!==0){
        l1Current.next = null
    }
    else{
        l2Current.next = null
    }
    l1Current.next = l2.next
    console.log(l1.next)
};
oddEvenList({ val: 1, next: { val: 2, next: {val: 3, next: { val: 4, next: {val: 5,next: null}}} } });

