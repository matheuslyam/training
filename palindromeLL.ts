function isPalindrome(head: ListNode | null): boolean {

	const arr: number[] = []

	while (head !== null) {

		arr.push(head.val)
		head = head.next

	}
	
	const rra = [...arr].reverse()

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== rra[i]) {
			return false
		}
	} return true
}