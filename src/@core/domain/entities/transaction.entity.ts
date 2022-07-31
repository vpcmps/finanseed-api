import crypto from 'crypto';
import { Direction } from '../enums/direction.enum';

export class Transaction {
  id: string;
  constructor(public props: TransactionProps, id?: string) {
    this.id = id || crypto.randomUUID();
    this.props = { ...props, tags: props.tags || [] };
  }

  get value() {
    return this.props.value;
  }
}

type TransactionProps = {
  name: string;
  value: number;
  direction: Direction;
  tags?: Tag[];
};

type Tag = {
  id: string;
  name: string;
};
