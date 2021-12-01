import { PackageInterface } from "interfaces/package.interface";

export class MarketsPackage {
    calculateFraction(packages: PackageInterface[]): PackageInterface[] {
        const sum = this.calculateSum(packages);
        for (let i = 0; i < packages.length; i++) {
            packages[i].lastPrice = Math.floor(Math.random() * 1000) + '$';
            packages[i].part = Number((packages[i].sum / sum).toFixed(10));
        }
        console.log(packages);

        return packages;
    }

    calculateSum(packages: PackageInterface[]): number {
        let sum = 0;
        for (let i = 0; i < packages.length; i++) {
            sum += packages[i].sum;
        }
        return sum;
    }
}


