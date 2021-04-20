export class EnsureModuleLoadOnceGuard {
  constructor(targetModule: any) {
    if (targetModule) {
      throw new Error(`${targetModule.constructor.name} has already be imported. Import this module in the AppModule only.`);
    }
  }
}
