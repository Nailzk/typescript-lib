export function Roles(...params: string[]) {
      return <T extends { new(...args: any[]): {} }>(constructor: T) {
            if (!params) {
                  return {}
            }
            constructor.prototype.params = params;

            return constructor;
      }
}