/**
21. Merge Two Sorted Lists
Solved
Easy
Topics
Companies
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
 */

// function mergeTwoLists(list1, list2) {
//     if (list1 === null) return list2;
//     if (list2 === null) return list1;

//     if(list1.val < list2.val){
//         list1.next = mergeTwoLists(list1.next, list2);
//         return list1;
//     } else{
//         list2.next = mergeTwoLists(list1, list2.next);
//         return list2;
//     }
// }


// Definition for singly-linked list node
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Function to merge two sorted linked lists
var mergeTwoLists = function (list1, list2) {
    if (list1 === null) return list2;
    if (list2 === null) return list1;

    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};

// Helper function to convert an array into a linked list
function arrayToList(arr) {
    if (arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to convert a linked list into an array for easy viewing
function listToArray(list) {
    const arr = [];
    while (list !== null) {
        arr.push(list.val);
        list = list.next;
    }
    return arr;
}

// Example usage:
let list1 = arrayToList([1, 2, 4]);
let list2 = arrayToList([1, 3, 4]);

console.log("Before merge:");
console.log("List 1:", listToArray(list1));
console.log("List 2:", listToArray(list2));

const mergedList = mergeTwoLists(list1, list2);

console.log("Merged list:", listToArray(mergedList));

