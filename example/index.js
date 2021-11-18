import { Blockchain, Block, range } from '../index.js';

const chain = new Blockchain();

for (const n of range(10)) {
  const block = new Block(`Block ${n + 1}`);
  chain.mine(block);
}

while (chain.head) {
  console.log(chain.head);
  chain.head = chain.head.next;
}