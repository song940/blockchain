import { Block } from './block.js';

export function* range(n) {
  for (var i = 0; i < n; i++) {
    yield i;
  }
}

export class Blockchain {
  constructor({ diff = 20, maxNonce = 2 ** 32 } = {}) {
    const block = new Block("Genesis");
    this.block = this.head = block;
    this.maxNonce = maxNonce;
    this.target = 2 ** (256 - diff);
  }
  add(block) {
    block.blockNo = this.block.blockNo + 1;
    block.previous_hash = this.block.hash();
    this.block = this.block.next = block;
  }
  mine(block) {
    for (const n of range(this.maxNonce)) {
      if (parseInt(block.hash(), 16) < this.target) {
        this.add(block);
        break;
      } else {
        block.nonce += 1;
      }
    }
  }
}
