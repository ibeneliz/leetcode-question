var reverseList = function(head) {
    let prev = null;
    let cur = head;
    while(cur){
        let nn = cur.next;
        cur.next = prev;
        prev = cur;
        cur = nn;
    }
    return prev;
};