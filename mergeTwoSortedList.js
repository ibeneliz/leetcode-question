function ListNode(val){
    this.val = val;
    this.next = null;
}
var mergeTwoLists = function(list1, list2) {
    let res = new ListNode(-1);
    let itr = res;
    while(list1 && list2){
        if(list1.val < list2.val){
            itr.next = list1;
            list1 = list1.next;
        }else{
            itr.next = list2;
            list2 = list2.next;
        console.log("list2.next",list2);
        }
        itr=itr.next
    }
    console.log(res);
    if(list1){
        itr.next =list1;
    }
    if(list2){
        itr.next =list2;
    }
    return res.next;
};