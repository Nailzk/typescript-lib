import { PackageInterface } from "./interfaces/package.interface";
import { MarketsPackage } from "./markets-package";
import { UsersInvestment } from "./user-investment";

export class Packages {
  packagesArray: PackageInterface[] = [];
  constructor(packages: PackageInterface[]) {
    this.packagesArray = packages;
  }

  getPackages(): PackageInterface[] {
    return this.packagesArray;
  }
}


const packages = new Packages([{
  id: 'nvda',
  amout: 5,
},
{
  id: 'tsla',
  amout: 254,
},
{
  id: 'msft',
  amout: 22,
},
{
  id: 'appl',
  amout: 234,
},
]);

const marketsPackage = new MarketsPackage();
const user = new UsersInvestment({
  userId: 1,
  name: 'Ivan',
  amount: marketsPackage.calculateSum(packages.getPackages())
});


console.log(user.applyInvest(user.user, marketsPackage, packages));

