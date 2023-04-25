import { SinglyNode } from '../utils'

export class LinkedList<T> {
  private head: SinglyNode<T> | null

  constructor() {
    this.head = null
  }

  // ** Traversing through the linkedList - O(n) */
  display(): void {
    let current = this.head
    while (current !== null) {
      process.stdout.write(`${current.data} ${current.next ? '-> ' : ''}`)
      current = current.next
    }
    process.stdout.write('\n')
  }

  // ** Adding element to the front of the list - O(1) */
  insert(el: SinglyNode<T>): SinglyNode<T> {
    el.next = this.head
    this.head = el
    return el
  }

  // ** Inserting element at the end of list - O(n) */
  insertTail(el: SinglyNode<T>): SinglyNode<T> {
    let current = this.head

    if (current === null) {
      current = el
      return el
    }
    while (current.next !== null) {
      current = current.next
    }
    current.next = el
    return el
  }
}

export { SinglyNode as Node }
