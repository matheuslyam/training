function reverseList(head: ListNode | null): ListNode | null {
    
	let prev = null

	while (head) {
		
		let next = head.next
		head.next = prev
		prev = head
		head = next

	} return prev
}