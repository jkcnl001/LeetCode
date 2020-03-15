/**
    You are given two non-empty linked lists representing two non-negative integers. 
    The digits are stored in reverse order and each of their nodes contain a single digit.
    Add the two numbers and return it as a linked list.
    You may assume the two numbers do not contain any leading zero, except the number 0 itself.
    Example:
        Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
        Output: 7 -> 0 -> 8
        Explanation: 342 + 465 = 807
 */
export class ListNode {
    value: number;
    next: ListNode | undefined;
    constructor(value: number = 0) {
        this.value = value
    }
    createListByArr(arr: number[]): ListNode | undefined {
        if (arr.length == 0) {
            return
        }
        let head = new ListNode(arr[0])
        let next = head
        for (let i = 1, length = arr.length; i < length; ++i) {
            next.next = new ListNode(arr[i])
            next = next.next
        }
        return head
    }
}
export default [
    function (listNode1: ListNode | undefined, listNode2: ListNode | undefined): ListNode | undefined {
        const listNode3 = new ListNode()
        let params = 0
        let next = listNode3
        let [value1, value2, value3] = [0, 0, 0];
        while (listNode1 || listNode2) {
            value1 = (listNode1 && listNode1.value) ? listNode1.value : 0
            value2 = (listNode2 && listNode2.value) ? listNode2.value : 0
            value3 = value1 + value2 + params
            params = Math.floor(value3 / 10)
            value3 = value3 % 10
            next.next = new ListNode(value3)
            if (listNode1 != undefined) {
                listNode1 = listNode1.next
            }
            if (listNode2 != undefined) {
                listNode2 = listNode2.next
            }
            next = next.next
        }
        if (params) {
            next.next = new ListNode(params)
        }
        return listNode3.next
    }
]
