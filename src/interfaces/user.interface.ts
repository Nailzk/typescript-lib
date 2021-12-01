import { InvestType } from "../ENUMs/invest-type.enum";

export type Id = number | string;

export interface UserInvestment {
    userId: Id;
    name: string;
    type?: InvestType;
    amount?: number;
}