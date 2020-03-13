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
(() => {
    class ListNode {
        value: number = 0;
        next: ListNode | undefined = undefined
        constructor(value: number = 0) {
            this.value = value
        }
    }
    class AddTwoNumbers {
        solution(listNode1: ListNode | undefined, listNode2: ListNode | undefined) {
            let listNode3 = new ListNode(0)
            let next = listNode3
            let params = 0
            let value = 0
            let value1 = 0
            let value2 = 0
            while (listNode1 || listNode2) {
                value1 = (listNode1 && listNode1.value) ? listNode1.value : 0
                value2 = (listNode2 && listNode2.value) ? listNode2.value : 0
                value = value1 + value2 + params
                params = Math.floor(value / 10)
                value = value % 10
                next.next = new ListNode(value)
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
    }

    function createListByArr(arr: number[]): ListNode | undefined {
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
    let listNode1 = createListByArr([9, 9, 9, 9])
    let listNode2 = createListByArr([9, 9, 9, 9])
    let addTwoNumbers = new AddTwoNumbers()
    let listNode3 = addTwoNumbers.solution(listNode1, listNode2)
    while (listNode3) {
        console.log(listNode3.value)
        listNode3 = listNode3.next
    }
})()
