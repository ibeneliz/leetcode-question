function ListNode(val){
    this.val = val;
    this.next = null;
}

let head = new ListNode(10);

let secondNode = new ListNode(20);
head.next = secondNode;

let thirdNode = new ListNode(30);
secondNode.next = thirdNode;

function readList(head){
    while(head != null){
        console.log(head.val);
        head = head.next;
    }
}

//readList(head);

let fourthNode = new ListNode(40);

function insertAtKthPos(head,k,node){
    while(k--){
        head = head.next;
    }
    node.next = head.next;
    head.next = node;
    console.log(head);
}

insertAtKthPos(head,2,fourthNode);

readList(head);

function deleteAtKthPos(head,k){
    while(--k > 0){
        head= head.next;
    }
    let temp = head.next;
    head.next = temp.next;
    temp.next = null;
}

deleteAtKthPos(head,1);
console.log("After deleting");
readList(head);
