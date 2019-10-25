(() => {
    class ListNode {
        val: number = 0;
        next: ListNode | undefined = undefined
        constructor(val: number) {
            this.val = val
        }
    }

    class AddTwoNumbers {
        solution(l1: ListNode | undefined, l2: ListNode | undefined) {
            let l3 = new ListNode(0)
            let next = l3
            let params = 0
            let val = 0
            let val1 = 0
            let val2 = 0
            while (l1 || l2) {
                val1 = (l1 && l1.val) ? l1.val : 0
                val2 = (l2 && l2.val) ? l2.val : 0
                val = val1 + val2 + params
                params = Math.floor(val / 10)
                val = val % 10
                next.next = new ListNode(val)
                if (l1 != undefined) {
                    l1 = l1.next
                }
                if (l2 != undefined) {
                    l2 = l2.next
                }
                next = next.next
            }
            if (params) {
                next.next = new ListNode(params)
            }
            return l3.next
        }
    }
    let createListByArr = (arr: number[]): ListNode | undefined => {
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
    let l1 = createListByArr([2, 4, 3])
    let l2 = createListByArr([5, 6, 4])
    let addTwoNumbers = new AddTwoNumbers()
    console.log(addTwoNumbers.solution(l1, l2))
})()
