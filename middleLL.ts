class ListNode {
    val: number
    next: ListNode | null
    constructor(val: number = 0, next: ListNode | null = null) {
        this.val = val
        this.next = next
    }
}

const head = new ListNode(1,
    new ListNode(
        2,
        new ListNode(
            3,
            new ListNode(
                4,
                new ListNode(
                    5
                )
            )
        )
    )
)

function middleNode(head: ListNode | null): ListNode | null {
    let slow = head
    let fast = head

    while (fast !== null && fast.next !== null) {
        slow = slow!.next
        fast = fast.next.next
    }
    return slow
} console.log(middleNode(head)?.val)