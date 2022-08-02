import crypto from 'crypto';
import { Direction } from '../enums/direction.enum';

export class Transaction {
  id: string;
  created_at: Date;
  constructor(public props: TransactionProps, id?: string, created_at?: Date) {
    this.id = id || crypto.randomUUID();
    this.created_at = created_at || new Date();
    this.props = {
      ...props,
      tags: props.tags || [],
    };
  }

  get value() {
    return this.props.value;
  }

  get direction() {
    return this.props.direction;
  }

  get tags() {
    return this.props.tags;
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
