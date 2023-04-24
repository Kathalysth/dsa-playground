class Node<T> {
  data: T
  next: Node<T> | null

  constructor(value: T) {
    this.data = value
    this.next = null
  }
}
let head: Node<string> | null = null

const nodeOne = new Node('Ego')
head = nodeOne

function display(): void {
  while (head !== null) {
    console.log(head.data)
    head = head.next
  }
}

function insert(el: Node<string>): void {
  el.next = head
  head = el
}

insert(new Node('Power'))
insert(new Node('Money'))
insert(new Node('Women'))
display()
