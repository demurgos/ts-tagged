/**
 * Represents a tagged type.
 *
 * It prevents you from assigning values values of the same base type but with different names.
 * Untagged variables are always assignable to and from variables with tagged types.
 *
 * You should never rely on the `__tsName` implementation detail: this property is used for type checking and should
 * never exist at runtime.
 *
 * @param T Base type
 * @param N Name type
 */
export type Tagged<T, N extends string> = T & {__tsName?: N};
