import { InvestType } from "./ENUMs/invest-type.enum";
import { UserInvestment } from "interfaces/user.interface";
import { Packages } from "./index";
import { MarketsPackage } from './markets-package';

export class UsersInvestment {
    user: UserInvestment;
    constructor(user: UserInvestment) {
        this.user = user;
    }
    applyInvest(user: UserInvestment, marketsPackage: MarketsPackage, _packages: Packages): UserInvestment {
        const packages = marketsPackage.calculateFraction(_packages.getPackages());
        user.type = InvestType.INVEST;
        user.amount = marketsPackage.calculateSum(packages);

        return user;
    }
}
