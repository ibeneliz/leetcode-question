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

//readList(head);

let fourthNode = new ListNode(40);

function insertAtKthPos(head,k,node){
    console.log(head);
    while(k--){
        head = head.next;
    }
    node.next = head.next;
    head.next = node;
    console.log(head);
}

insertAtKthPos(head,2,fourthNode);

readList(head);