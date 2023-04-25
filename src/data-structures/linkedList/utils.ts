export class SinglyNode<T> {
  data: T
  next: SinglyNode<T> | null

  constructor(value: T) {
    this.data = value
    this.next = null
  }
}
