import { Document } from 'mongoose';

export interface Provider extends Document {
    readonly name: string;
    readonly portTo: Array<Object>;
}