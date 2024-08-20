function ListNode(val){
    this.val = val;
    this.next = null;
}

let head = new ListNode(10);

let secondNode = new ListNode(20);
head.next = secondNode;

let thirdNode = new ListNode(30);
secondNode.next = thirdNode;

console.log(head);

function readList(head){
    while(head != null){
        console.log(head.val);
        head = head.next;
    }
}

readList(head);