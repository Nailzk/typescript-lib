import { Id } from "./user.interface";

export interface PackageInterface {
    id: Id;
    amout: number;
    descriptiom?: string;
    part?: number;
    lastPrice?: string;
}