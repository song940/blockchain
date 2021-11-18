import { createHash } from 'crypto';

export class Block {
  constructor(data) {
    this.next = null;
    this.data = data;
    this.nonce = 0;
    this.blockNo = 0;
    this.previous_hash = 0x0;
    this.timestamp = Date.now();
  }
  hash() {
    const h = createHash('sha256');
    h.update(
      this.nonce +
      this.data +
      this.previous_hash +
      this.timestamp +
      this.blockNo
    );
    return h.digest('hex');
  }
}