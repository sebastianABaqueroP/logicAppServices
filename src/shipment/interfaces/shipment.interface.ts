import { Document } from 'mongoose';

export interface Shipment extends Document {
    readonly portFrom: string;
    readonly portTo: string;
    readonly merchandise: string;
    readonly price: number;
    readonly containerType: string;
    readonly insurance: string;
    readonly created_at: Date;
}
