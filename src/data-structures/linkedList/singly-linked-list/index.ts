import { SinglyNode } from '../utils'

export class LinkedList<T> {
  private head: SinglyNode<T> | null

  constructor() {
    this.head = null
  }

  // ** Traversing through the linkedList - O(n) */
  display(): void {
    while (this.head !== null) {
      console.log(this.head.data)
      this.head = this.head.next
    }
  }

  // ** Adding element to the front of the list - O(1) */
  insert(el: SinglyNode<T>): SinglyNode<T> {
    el.next = this.head
    this.head = el
    return el
  }

  // ** Inserting element at the end of list - O(n) */
  insertTail(el: SinglyNode<T>): void {
    if (this.head === null) {
      this.head = el
    }
  }
}

export { SinglyNode as Node }
