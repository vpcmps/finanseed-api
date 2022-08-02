export interface UseCaseInterface<Type> {
  execute(input: Type);
}
