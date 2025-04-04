
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model UserSchema
 * 
 */
export type UserSchema = $Result.DefaultSelection<Prisma.$UserSchemaPayload>
/**
 * Model ClientSchema
 * 
 */
export type ClientSchema = $Result.DefaultSelection<Prisma.$ClientSchemaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserSchemas
 * const userSchemas = await prisma.userSchema.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more UserSchemas
   * const userSchemas = await prisma.userSchema.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.userSchema`: Exposes CRUD operations for the **UserSchema** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSchemas
    * const userSchemas = await prisma.userSchema.findMany()
    * ```
    */
  get userSchema(): Prisma.UserSchemaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clientSchema`: Exposes CRUD operations for the **ClientSchema** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientSchemas
    * const clientSchemas = await prisma.clientSchema.findMany()
    * ```
    */
  get clientSchema(): Prisma.ClientSchemaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    UserSchema: 'UserSchema',
    ClientSchema: 'ClientSchema'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "userSchema" | "clientSchema"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UserSchema: {
        payload: Prisma.$UserSchemaPayload<ExtArgs>
        fields: Prisma.UserSchemaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSchemaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchemaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSchemaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchemaPayload>
          }
          findFirst: {
            args: Prisma.UserSchemaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchemaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSchemaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchemaPayload>
          }
          findMany: {
            args: Prisma.UserSchemaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchemaPayload>[]
          }
          create: {
            args: Prisma.UserSchemaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchemaPayload>
          }
          createMany: {
            args: Prisma.UserSchemaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSchemaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchemaPayload>[]
          }
          delete: {
            args: Prisma.UserSchemaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchemaPayload>
          }
          update: {
            args: Prisma.UserSchemaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchemaPayload>
          }
          deleteMany: {
            args: Prisma.UserSchemaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSchemaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSchemaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchemaPayload>[]
          }
          upsert: {
            args: Prisma.UserSchemaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchemaPayload>
          }
          aggregate: {
            args: Prisma.UserSchemaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSchema>
          }
          groupBy: {
            args: Prisma.UserSchemaGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSchemaGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSchemaCountArgs<ExtArgs>
            result: $Utils.Optional<UserSchemaCountAggregateOutputType> | number
          }
        }
      }
      ClientSchema: {
        payload: Prisma.$ClientSchemaPayload<ExtArgs>
        fields: Prisma.ClientSchemaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientSchemaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSchemaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientSchemaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSchemaPayload>
          }
          findFirst: {
            args: Prisma.ClientSchemaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSchemaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientSchemaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSchemaPayload>
          }
          findMany: {
            args: Prisma.ClientSchemaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSchemaPayload>[]
          }
          create: {
            args: Prisma.ClientSchemaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSchemaPayload>
          }
          createMany: {
            args: Prisma.ClientSchemaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientSchemaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSchemaPayload>[]
          }
          delete: {
            args: Prisma.ClientSchemaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSchemaPayload>
          }
          update: {
            args: Prisma.ClientSchemaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSchemaPayload>
          }
          deleteMany: {
            args: Prisma.ClientSchemaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientSchemaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientSchemaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSchemaPayload>[]
          }
          upsert: {
            args: Prisma.ClientSchemaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSchemaPayload>
          }
          aggregate: {
            args: Prisma.ClientSchemaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientSchema>
          }
          groupBy: {
            args: Prisma.ClientSchemaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientSchemaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientSchemaCountArgs<ExtArgs>
            result: $Utils.Optional<ClientSchemaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    userSchema?: UserSchemaOmit
    clientSchema?: ClientSchemaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model UserSchema
   */

  export type AggregateUserSchema = {
    _count: UserSchemaCountAggregateOutputType | null
    _avg: UserSchemaAvgAggregateOutputType | null
    _sum: UserSchemaSumAggregateOutputType | null
    _min: UserSchemaMinAggregateOutputType | null
    _max: UserSchemaMaxAggregateOutputType | null
  }

  export type UserSchemaAvgAggregateOutputType = {
    user_id: number | null
    Experience: number | null
    Rating: number | null
  }

  export type UserSchemaSumAggregateOutputType = {
    user_id: number | null
    Experience: number | null
    Rating: number | null
  }

  export type UserSchemaMinAggregateOutputType = {
    user_id: number | null
    Name: string | null
    Email: string | null
    Password: string | null
    Experience: number | null
    Rating: number | null
  }

  export type UserSchemaMaxAggregateOutputType = {
    user_id: number | null
    Name: string | null
    Email: string | null
    Password: string | null
    Experience: number | null
    Rating: number | null
  }

  export type UserSchemaCountAggregateOutputType = {
    user_id: number
    Name: number
    Email: number
    Password: number
    Experience: number
    Rating: number
    Skills: number
    _all: number
  }


  export type UserSchemaAvgAggregateInputType = {
    user_id?: true
    Experience?: true
    Rating?: true
  }

  export type UserSchemaSumAggregateInputType = {
    user_id?: true
    Experience?: true
    Rating?: true
  }

  export type UserSchemaMinAggregateInputType = {
    user_id?: true
    Name?: true
    Email?: true
    Password?: true
    Experience?: true
    Rating?: true
  }

  export type UserSchemaMaxAggregateInputType = {
    user_id?: true
    Name?: true
    Email?: true
    Password?: true
    Experience?: true
    Rating?: true
  }

  export type UserSchemaCountAggregateInputType = {
    user_id?: true
    Name?: true
    Email?: true
    Password?: true
    Experience?: true
    Rating?: true
    Skills?: true
    _all?: true
  }

  export type UserSchemaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSchema to aggregate.
     */
    where?: UserSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSchemas to fetch.
     */
    orderBy?: UserSchemaOrderByWithRelationInput | UserSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSchemas
    **/
    _count?: true | UserSchemaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSchemaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSchemaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSchemaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSchemaMaxAggregateInputType
  }

  export type GetUserSchemaAggregateType<T extends UserSchemaAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSchema]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSchema[P]>
      : GetScalarType<T[P], AggregateUserSchema[P]>
  }




  export type UserSchemaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSchemaWhereInput
    orderBy?: UserSchemaOrderByWithAggregationInput | UserSchemaOrderByWithAggregationInput[]
    by: UserSchemaScalarFieldEnum[] | UserSchemaScalarFieldEnum
    having?: UserSchemaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSchemaCountAggregateInputType | true
    _avg?: UserSchemaAvgAggregateInputType
    _sum?: UserSchemaSumAggregateInputType
    _min?: UserSchemaMinAggregateInputType
    _max?: UserSchemaMaxAggregateInputType
  }

  export type UserSchemaGroupByOutputType = {
    user_id: number
    Name: string
    Email: string
    Password: string
    Experience: number
    Rating: number
    Skills: string[]
    _count: UserSchemaCountAggregateOutputType | null
    _avg: UserSchemaAvgAggregateOutputType | null
    _sum: UserSchemaSumAggregateOutputType | null
    _min: UserSchemaMinAggregateOutputType | null
    _max: UserSchemaMaxAggregateOutputType | null
  }

  type GetUserSchemaGroupByPayload<T extends UserSchemaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSchemaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSchemaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSchemaGroupByOutputType[P]>
            : GetScalarType<T[P], UserSchemaGroupByOutputType[P]>
        }
      >
    >


  export type UserSchemaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    Name?: boolean
    Email?: boolean
    Password?: boolean
    Experience?: boolean
    Rating?: boolean
    Skills?: boolean
  }, ExtArgs["result"]["userSchema"]>

  export type UserSchemaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    Name?: boolean
    Email?: boolean
    Password?: boolean
    Experience?: boolean
    Rating?: boolean
    Skills?: boolean
  }, ExtArgs["result"]["userSchema"]>

  export type UserSchemaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    Name?: boolean
    Email?: boolean
    Password?: boolean
    Experience?: boolean
    Rating?: boolean
    Skills?: boolean
  }, ExtArgs["result"]["userSchema"]>

  export type UserSchemaSelectScalar = {
    user_id?: boolean
    Name?: boolean
    Email?: boolean
    Password?: boolean
    Experience?: boolean
    Rating?: boolean
    Skills?: boolean
  }

  export type UserSchemaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "Name" | "Email" | "Password" | "Experience" | "Rating" | "Skills", ExtArgs["result"]["userSchema"]>

  export type $UserSchemaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSchema"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      Name: string
      Email: string
      Password: string
      Experience: number
      Rating: number
      Skills: string[]
    }, ExtArgs["result"]["userSchema"]>
    composites: {}
  }

  type UserSchemaGetPayload<S extends boolean | null | undefined | UserSchemaDefaultArgs> = $Result.GetResult<Prisma.$UserSchemaPayload, S>

  type UserSchemaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSchemaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSchemaCountAggregateInputType | true
    }

  export interface UserSchemaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSchema'], meta: { name: 'UserSchema' } }
    /**
     * Find zero or one UserSchema that matches the filter.
     * @param {UserSchemaFindUniqueArgs} args - Arguments to find a UserSchema
     * @example
     * // Get one UserSchema
     * const userSchema = await prisma.userSchema.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSchemaFindUniqueArgs>(args: SelectSubset<T, UserSchemaFindUniqueArgs<ExtArgs>>): Prisma__UserSchemaClient<$Result.GetResult<Prisma.$UserSchemaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSchema that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSchemaFindUniqueOrThrowArgs} args - Arguments to find a UserSchema
     * @example
     * // Get one UserSchema
     * const userSchema = await prisma.userSchema.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSchemaFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSchemaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSchemaClient<$Result.GetResult<Prisma.$UserSchemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSchema that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSchemaFindFirstArgs} args - Arguments to find a UserSchema
     * @example
     * // Get one UserSchema
     * const userSchema = await prisma.userSchema.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSchemaFindFirstArgs>(args?: SelectSubset<T, UserSchemaFindFirstArgs<ExtArgs>>): Prisma__UserSchemaClient<$Result.GetResult<Prisma.$UserSchemaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSchema that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSchemaFindFirstOrThrowArgs} args - Arguments to find a UserSchema
     * @example
     * // Get one UserSchema
     * const userSchema = await prisma.userSchema.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSchemaFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSchemaFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSchemaClient<$Result.GetResult<Prisma.$UserSchemaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSchemas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSchemaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSchemas
     * const userSchemas = await prisma.userSchema.findMany()
     * 
     * // Get first 10 UserSchemas
     * const userSchemas = await prisma.userSchema.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userSchemaWithUser_idOnly = await prisma.userSchema.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UserSchemaFindManyArgs>(args?: SelectSubset<T, UserSchemaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSchemaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSchema.
     * @param {UserSchemaCreateArgs} args - Arguments to create a UserSchema.
     * @example
     * // Create one UserSchema
     * const UserSchema = await prisma.userSchema.create({
     *   data: {
     *     // ... data to create a UserSchema
     *   }
     * })
     * 
     */
    create<T extends UserSchemaCreateArgs>(args: SelectSubset<T, UserSchemaCreateArgs<ExtArgs>>): Prisma__UserSchemaClient<$Result.GetResult<Prisma.$UserSchemaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSchemas.
     * @param {UserSchemaCreateManyArgs} args - Arguments to create many UserSchemas.
     * @example
     * // Create many UserSchemas
     * const userSchema = await prisma.userSchema.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSchemaCreateManyArgs>(args?: SelectSubset<T, UserSchemaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSchemas and returns the data saved in the database.
     * @param {UserSchemaCreateManyAndReturnArgs} args - Arguments to create many UserSchemas.
     * @example
     * // Create many UserSchemas
     * const userSchema = await prisma.userSchema.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSchemas and only return the `user_id`
     * const userSchemaWithUser_idOnly = await prisma.userSchema.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSchemaCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSchemaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSchemaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSchema.
     * @param {UserSchemaDeleteArgs} args - Arguments to delete one UserSchema.
     * @example
     * // Delete one UserSchema
     * const UserSchema = await prisma.userSchema.delete({
     *   where: {
     *     // ... filter to delete one UserSchema
     *   }
     * })
     * 
     */
    delete<T extends UserSchemaDeleteArgs>(args: SelectSubset<T, UserSchemaDeleteArgs<ExtArgs>>): Prisma__UserSchemaClient<$Result.GetResult<Prisma.$UserSchemaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSchema.
     * @param {UserSchemaUpdateArgs} args - Arguments to update one UserSchema.
     * @example
     * // Update one UserSchema
     * const userSchema = await prisma.userSchema.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSchemaUpdateArgs>(args: SelectSubset<T, UserSchemaUpdateArgs<ExtArgs>>): Prisma__UserSchemaClient<$Result.GetResult<Prisma.$UserSchemaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSchemas.
     * @param {UserSchemaDeleteManyArgs} args - Arguments to filter UserSchemas to delete.
     * @example
     * // Delete a few UserSchemas
     * const { count } = await prisma.userSchema.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSchemaDeleteManyArgs>(args?: SelectSubset<T, UserSchemaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSchemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSchemaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSchemas
     * const userSchema = await prisma.userSchema.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSchemaUpdateManyArgs>(args: SelectSubset<T, UserSchemaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSchemas and returns the data updated in the database.
     * @param {UserSchemaUpdateManyAndReturnArgs} args - Arguments to update many UserSchemas.
     * @example
     * // Update many UserSchemas
     * const userSchema = await prisma.userSchema.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSchemas and only return the `user_id`
     * const userSchemaWithUser_idOnly = await prisma.userSchema.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserSchemaUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSchemaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSchemaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSchema.
     * @param {UserSchemaUpsertArgs} args - Arguments to update or create a UserSchema.
     * @example
     * // Update or create a UserSchema
     * const userSchema = await prisma.userSchema.upsert({
     *   create: {
     *     // ... data to create a UserSchema
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSchema we want to update
     *   }
     * })
     */
    upsert<T extends UserSchemaUpsertArgs>(args: SelectSubset<T, UserSchemaUpsertArgs<ExtArgs>>): Prisma__UserSchemaClient<$Result.GetResult<Prisma.$UserSchemaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSchemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSchemaCountArgs} args - Arguments to filter UserSchemas to count.
     * @example
     * // Count the number of UserSchemas
     * const count = await prisma.userSchema.count({
     *   where: {
     *     // ... the filter for the UserSchemas we want to count
     *   }
     * })
    **/
    count<T extends UserSchemaCountArgs>(
      args?: Subset<T, UserSchemaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSchemaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSchema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSchemaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserSchemaAggregateArgs>(args: Subset<T, UserSchemaAggregateArgs>): Prisma.PrismaPromise<GetUserSchemaAggregateType<T>>

    /**
     * Group by UserSchema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSchemaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserSchemaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSchemaGroupByArgs['orderBy'] }
        : { orderBy?: UserSchemaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserSchemaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSchemaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSchema model
   */
  readonly fields: UserSchemaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSchema.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSchemaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserSchema model
   */ 
  interface UserSchemaFieldRefs {
    readonly user_id: FieldRef<"UserSchema", 'Int'>
    readonly Name: FieldRef<"UserSchema", 'String'>
    readonly Email: FieldRef<"UserSchema", 'String'>
    readonly Password: FieldRef<"UserSchema", 'String'>
    readonly Experience: FieldRef<"UserSchema", 'Int'>
    readonly Rating: FieldRef<"UserSchema", 'Int'>
    readonly Skills: FieldRef<"UserSchema", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * UserSchema findUnique
   */
  export type UserSchemaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchema
     */
    select?: UserSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSchema
     */
    omit?: UserSchemaOmit<ExtArgs> | null
    /**
     * Filter, which UserSchema to fetch.
     */
    where: UserSchemaWhereUniqueInput
  }

  /**
   * UserSchema findUniqueOrThrow
   */
  export type UserSchemaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchema
     */
    select?: UserSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSchema
     */
    omit?: UserSchemaOmit<ExtArgs> | null
    /**
     * Filter, which UserSchema to fetch.
     */
    where: UserSchemaWhereUniqueInput
  }

  /**
   * UserSchema findFirst
   */
  export type UserSchemaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchema
     */
    select?: UserSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSchema
     */
    omit?: UserSchemaOmit<ExtArgs> | null
    /**
     * Filter, which UserSchema to fetch.
     */
    where?: UserSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSchemas to fetch.
     */
    orderBy?: UserSchemaOrderByWithRelationInput | UserSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSchemas.
     */
    cursor?: UserSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSchemas.
     */
    distinct?: UserSchemaScalarFieldEnum | UserSchemaScalarFieldEnum[]
  }

  /**
   * UserSchema findFirstOrThrow
   */
  export type UserSchemaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchema
     */
    select?: UserSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSchema
     */
    omit?: UserSchemaOmit<ExtArgs> | null
    /**
     * Filter, which UserSchema to fetch.
     */
    where?: UserSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSchemas to fetch.
     */
    orderBy?: UserSchemaOrderByWithRelationInput | UserSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSchemas.
     */
    cursor?: UserSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSchemas.
     */
    distinct?: UserSchemaScalarFieldEnum | UserSchemaScalarFieldEnum[]
  }

  /**
   * UserSchema findMany
   */
  export type UserSchemaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchema
     */
    select?: UserSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSchema
     */
    omit?: UserSchemaOmit<ExtArgs> | null
    /**
     * Filter, which UserSchemas to fetch.
     */
    where?: UserSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSchemas to fetch.
     */
    orderBy?: UserSchemaOrderByWithRelationInput | UserSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSchemas.
     */
    cursor?: UserSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSchemas.
     */
    skip?: number
    distinct?: UserSchemaScalarFieldEnum | UserSchemaScalarFieldEnum[]
  }

  /**
   * UserSchema create
   */
  export type UserSchemaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchema
     */
    select?: UserSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSchema
     */
    omit?: UserSchemaOmit<ExtArgs> | null
    /**
     * The data needed to create a UserSchema.
     */
    data: XOR<UserSchemaCreateInput, UserSchemaUncheckedCreateInput>
  }

  /**
   * UserSchema createMany
   */
  export type UserSchemaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSchemas.
     */
    data: UserSchemaCreateManyInput | UserSchemaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSchema createManyAndReturn
   */
  export type UserSchemaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchema
     */
    select?: UserSchemaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSchema
     */
    omit?: UserSchemaOmit<ExtArgs> | null
    /**
     * The data used to create many UserSchemas.
     */
    data: UserSchemaCreateManyInput | UserSchemaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSchema update
   */
  export type UserSchemaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchema
     */
    select?: UserSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSchema
     */
    omit?: UserSchemaOmit<ExtArgs> | null
    /**
     * The data needed to update a UserSchema.
     */
    data: XOR<UserSchemaUpdateInput, UserSchemaUncheckedUpdateInput>
    /**
     * Choose, which UserSchema to update.
     */
    where: UserSchemaWhereUniqueInput
  }

  /**
   * UserSchema updateMany
   */
  export type UserSchemaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSchemas.
     */
    data: XOR<UserSchemaUpdateManyMutationInput, UserSchemaUncheckedUpdateManyInput>
    /**
     * Filter which UserSchemas to update
     */
    where?: UserSchemaWhereInput
    /**
     * Limit how many UserSchemas to update.
     */
    limit?: number
  }

  /**
   * UserSchema updateManyAndReturn
   */
  export type UserSchemaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchema
     */
    select?: UserSchemaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSchema
     */
    omit?: UserSchemaOmit<ExtArgs> | null
    /**
     * The data used to update UserSchemas.
     */
    data: XOR<UserSchemaUpdateManyMutationInput, UserSchemaUncheckedUpdateManyInput>
    /**
     * Filter which UserSchemas to update
     */
    where?: UserSchemaWhereInput
    /**
     * Limit how many UserSchemas to update.
     */
    limit?: number
  }

  /**
   * UserSchema upsert
   */
  export type UserSchemaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchema
     */
    select?: UserSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSchema
     */
    omit?: UserSchemaOmit<ExtArgs> | null
    /**
     * The filter to search for the UserSchema to update in case it exists.
     */
    where: UserSchemaWhereUniqueInput
    /**
     * In case the UserSchema found by the `where` argument doesn't exist, create a new UserSchema with this data.
     */
    create: XOR<UserSchemaCreateInput, UserSchemaUncheckedCreateInput>
    /**
     * In case the UserSchema was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSchemaUpdateInput, UserSchemaUncheckedUpdateInput>
  }

  /**
   * UserSchema delete
   */
  export type UserSchemaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchema
     */
    select?: UserSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSchema
     */
    omit?: UserSchemaOmit<ExtArgs> | null
    /**
     * Filter which UserSchema to delete.
     */
    where: UserSchemaWhereUniqueInput
  }

  /**
   * UserSchema deleteMany
   */
  export type UserSchemaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSchemas to delete
     */
    where?: UserSchemaWhereInput
    /**
     * Limit how many UserSchemas to delete.
     */
    limit?: number
  }

  /**
   * UserSchema without action
   */
  export type UserSchemaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchema
     */
    select?: UserSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSchema
     */
    omit?: UserSchemaOmit<ExtArgs> | null
  }


  /**
   * Model ClientSchema
   */

  export type AggregateClientSchema = {
    _count: ClientSchemaCountAggregateOutputType | null
    _avg: ClientSchemaAvgAggregateOutputType | null
    _sum: ClientSchemaSumAggregateOutputType | null
    _min: ClientSchemaMinAggregateOutputType | null
    _max: ClientSchemaMaxAggregateOutputType | null
  }

  export type ClientSchemaAvgAggregateOutputType = {
    client_id: number | null
  }

  export type ClientSchemaSumAggregateOutputType = {
    client_id: number | null
  }

  export type ClientSchemaMinAggregateOutputType = {
    client_id: number | null
    client_name: string | null
    Email: string | null
    Password: string | null
    Organization: string | null
  }

  export type ClientSchemaMaxAggregateOutputType = {
    client_id: number | null
    client_name: string | null
    Email: string | null
    Password: string | null
    Organization: string | null
  }

  export type ClientSchemaCountAggregateOutputType = {
    client_id: number
    client_name: number
    Email: number
    Password: number
    Organization: number
    _all: number
  }


  export type ClientSchemaAvgAggregateInputType = {
    client_id?: true
  }

  export type ClientSchemaSumAggregateInputType = {
    client_id?: true
  }

  export type ClientSchemaMinAggregateInputType = {
    client_id?: true
    client_name?: true
    Email?: true
    Password?: true
    Organization?: true
  }

  export type ClientSchemaMaxAggregateInputType = {
    client_id?: true
    client_name?: true
    Email?: true
    Password?: true
    Organization?: true
  }

  export type ClientSchemaCountAggregateInputType = {
    client_id?: true
    client_name?: true
    Email?: true
    Password?: true
    Organization?: true
    _all?: true
  }

  export type ClientSchemaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientSchema to aggregate.
     */
    where?: ClientSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientSchemas to fetch.
     */
    orderBy?: ClientSchemaOrderByWithRelationInput | ClientSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientSchemas
    **/
    _count?: true | ClientSchemaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientSchemaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSchemaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientSchemaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientSchemaMaxAggregateInputType
  }

  export type GetClientSchemaAggregateType<T extends ClientSchemaAggregateArgs> = {
        [P in keyof T & keyof AggregateClientSchema]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientSchema[P]>
      : GetScalarType<T[P], AggregateClientSchema[P]>
  }




  export type ClientSchemaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientSchemaWhereInput
    orderBy?: ClientSchemaOrderByWithAggregationInput | ClientSchemaOrderByWithAggregationInput[]
    by: ClientSchemaScalarFieldEnum[] | ClientSchemaScalarFieldEnum
    having?: ClientSchemaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientSchemaCountAggregateInputType | true
    _avg?: ClientSchemaAvgAggregateInputType
    _sum?: ClientSchemaSumAggregateInputType
    _min?: ClientSchemaMinAggregateInputType
    _max?: ClientSchemaMaxAggregateInputType
  }

  export type ClientSchemaGroupByOutputType = {
    client_id: number
    client_name: string
    Email: string
    Password: string
    Organization: string | null
    _count: ClientSchemaCountAggregateOutputType | null
    _avg: ClientSchemaAvgAggregateOutputType | null
    _sum: ClientSchemaSumAggregateOutputType | null
    _min: ClientSchemaMinAggregateOutputType | null
    _max: ClientSchemaMaxAggregateOutputType | null
  }

  type GetClientSchemaGroupByPayload<T extends ClientSchemaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientSchemaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientSchemaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientSchemaGroupByOutputType[P]>
            : GetScalarType<T[P], ClientSchemaGroupByOutputType[P]>
        }
      >
    >


  export type ClientSchemaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    client_id?: boolean
    client_name?: boolean
    Email?: boolean
    Password?: boolean
    Organization?: boolean
  }, ExtArgs["result"]["clientSchema"]>

  export type ClientSchemaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    client_id?: boolean
    client_name?: boolean
    Email?: boolean
    Password?: boolean
    Organization?: boolean
  }, ExtArgs["result"]["clientSchema"]>

  export type ClientSchemaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    client_id?: boolean
    client_name?: boolean
    Email?: boolean
    Password?: boolean
    Organization?: boolean
  }, ExtArgs["result"]["clientSchema"]>

  export type ClientSchemaSelectScalar = {
    client_id?: boolean
    client_name?: boolean
    Email?: boolean
    Password?: boolean
    Organization?: boolean
  }

  export type ClientSchemaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"client_id" | "client_name" | "Email" | "Password" | "Organization", ExtArgs["result"]["clientSchema"]>

  export type $ClientSchemaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClientSchema"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      client_id: number
      client_name: string
      Email: string
      Password: string
      Organization: string | null
    }, ExtArgs["result"]["clientSchema"]>
    composites: {}
  }

  type ClientSchemaGetPayload<S extends boolean | null | undefined | ClientSchemaDefaultArgs> = $Result.GetResult<Prisma.$ClientSchemaPayload, S>

  type ClientSchemaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientSchemaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientSchemaCountAggregateInputType | true
    }

  export interface ClientSchemaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClientSchema'], meta: { name: 'ClientSchema' } }
    /**
     * Find zero or one ClientSchema that matches the filter.
     * @param {ClientSchemaFindUniqueArgs} args - Arguments to find a ClientSchema
     * @example
     * // Get one ClientSchema
     * const clientSchema = await prisma.clientSchema.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientSchemaFindUniqueArgs>(args: SelectSubset<T, ClientSchemaFindUniqueArgs<ExtArgs>>): Prisma__ClientSchemaClient<$Result.GetResult<Prisma.$ClientSchemaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClientSchema that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientSchemaFindUniqueOrThrowArgs} args - Arguments to find a ClientSchema
     * @example
     * // Get one ClientSchema
     * const clientSchema = await prisma.clientSchema.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientSchemaFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientSchemaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientSchemaClient<$Result.GetResult<Prisma.$ClientSchemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientSchema that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientSchemaFindFirstArgs} args - Arguments to find a ClientSchema
     * @example
     * // Get one ClientSchema
     * const clientSchema = await prisma.clientSchema.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientSchemaFindFirstArgs>(args?: SelectSubset<T, ClientSchemaFindFirstArgs<ExtArgs>>): Prisma__ClientSchemaClient<$Result.GetResult<Prisma.$ClientSchemaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientSchema that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientSchemaFindFirstOrThrowArgs} args - Arguments to find a ClientSchema
     * @example
     * // Get one ClientSchema
     * const clientSchema = await prisma.clientSchema.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientSchemaFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientSchemaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientSchemaClient<$Result.GetResult<Prisma.$ClientSchemaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClientSchemas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientSchemaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientSchemas
     * const clientSchemas = await prisma.clientSchema.findMany()
     * 
     * // Get first 10 ClientSchemas
     * const clientSchemas = await prisma.clientSchema.findMany({ take: 10 })
     * 
     * // Only select the `client_id`
     * const clientSchemaWithClient_idOnly = await prisma.clientSchema.findMany({ select: { client_id: true } })
     * 
     */
    findMany<T extends ClientSchemaFindManyArgs>(args?: SelectSubset<T, ClientSchemaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientSchemaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClientSchema.
     * @param {ClientSchemaCreateArgs} args - Arguments to create a ClientSchema.
     * @example
     * // Create one ClientSchema
     * const ClientSchema = await prisma.clientSchema.create({
     *   data: {
     *     // ... data to create a ClientSchema
     *   }
     * })
     * 
     */
    create<T extends ClientSchemaCreateArgs>(args: SelectSubset<T, ClientSchemaCreateArgs<ExtArgs>>): Prisma__ClientSchemaClient<$Result.GetResult<Prisma.$ClientSchemaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClientSchemas.
     * @param {ClientSchemaCreateManyArgs} args - Arguments to create many ClientSchemas.
     * @example
     * // Create many ClientSchemas
     * const clientSchema = await prisma.clientSchema.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientSchemaCreateManyArgs>(args?: SelectSubset<T, ClientSchemaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClientSchemas and returns the data saved in the database.
     * @param {ClientSchemaCreateManyAndReturnArgs} args - Arguments to create many ClientSchemas.
     * @example
     * // Create many ClientSchemas
     * const clientSchema = await prisma.clientSchema.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClientSchemas and only return the `client_id`
     * const clientSchemaWithClient_idOnly = await prisma.clientSchema.createManyAndReturn({
     *   select: { client_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientSchemaCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientSchemaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientSchemaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClientSchema.
     * @param {ClientSchemaDeleteArgs} args - Arguments to delete one ClientSchema.
     * @example
     * // Delete one ClientSchema
     * const ClientSchema = await prisma.clientSchema.delete({
     *   where: {
     *     // ... filter to delete one ClientSchema
     *   }
     * })
     * 
     */
    delete<T extends ClientSchemaDeleteArgs>(args: SelectSubset<T, ClientSchemaDeleteArgs<ExtArgs>>): Prisma__ClientSchemaClient<$Result.GetResult<Prisma.$ClientSchemaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClientSchema.
     * @param {ClientSchemaUpdateArgs} args - Arguments to update one ClientSchema.
     * @example
     * // Update one ClientSchema
     * const clientSchema = await prisma.clientSchema.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientSchemaUpdateArgs>(args: SelectSubset<T, ClientSchemaUpdateArgs<ExtArgs>>): Prisma__ClientSchemaClient<$Result.GetResult<Prisma.$ClientSchemaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClientSchemas.
     * @param {ClientSchemaDeleteManyArgs} args - Arguments to filter ClientSchemas to delete.
     * @example
     * // Delete a few ClientSchemas
     * const { count } = await prisma.clientSchema.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientSchemaDeleteManyArgs>(args?: SelectSubset<T, ClientSchemaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientSchemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientSchemaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientSchemas
     * const clientSchema = await prisma.clientSchema.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientSchemaUpdateManyArgs>(args: SelectSubset<T, ClientSchemaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientSchemas and returns the data updated in the database.
     * @param {ClientSchemaUpdateManyAndReturnArgs} args - Arguments to update many ClientSchemas.
     * @example
     * // Update many ClientSchemas
     * const clientSchema = await prisma.clientSchema.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClientSchemas and only return the `client_id`
     * const clientSchemaWithClient_idOnly = await prisma.clientSchema.updateManyAndReturn({
     *   select: { client_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientSchemaUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientSchemaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientSchemaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClientSchema.
     * @param {ClientSchemaUpsertArgs} args - Arguments to update or create a ClientSchema.
     * @example
     * // Update or create a ClientSchema
     * const clientSchema = await prisma.clientSchema.upsert({
     *   create: {
     *     // ... data to create a ClientSchema
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientSchema we want to update
     *   }
     * })
     */
    upsert<T extends ClientSchemaUpsertArgs>(args: SelectSubset<T, ClientSchemaUpsertArgs<ExtArgs>>): Prisma__ClientSchemaClient<$Result.GetResult<Prisma.$ClientSchemaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClientSchemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientSchemaCountArgs} args - Arguments to filter ClientSchemas to count.
     * @example
     * // Count the number of ClientSchemas
     * const count = await prisma.clientSchema.count({
     *   where: {
     *     // ... the filter for the ClientSchemas we want to count
     *   }
     * })
    **/
    count<T extends ClientSchemaCountArgs>(
      args?: Subset<T, ClientSchemaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientSchemaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientSchema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientSchemaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientSchemaAggregateArgs>(args: Subset<T, ClientSchemaAggregateArgs>): Prisma.PrismaPromise<GetClientSchemaAggregateType<T>>

    /**
     * Group by ClientSchema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientSchemaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientSchemaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientSchemaGroupByArgs['orderBy'] }
        : { orderBy?: ClientSchemaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientSchemaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientSchemaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClientSchema model
   */
  readonly fields: ClientSchemaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientSchema.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientSchemaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClientSchema model
   */ 
  interface ClientSchemaFieldRefs {
    readonly client_id: FieldRef<"ClientSchema", 'Int'>
    readonly client_name: FieldRef<"ClientSchema", 'String'>
    readonly Email: FieldRef<"ClientSchema", 'String'>
    readonly Password: FieldRef<"ClientSchema", 'String'>
    readonly Organization: FieldRef<"ClientSchema", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ClientSchema findUnique
   */
  export type ClientSchemaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSchema
     */
    select?: ClientSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientSchema
     */
    omit?: ClientSchemaOmit<ExtArgs> | null
    /**
     * Filter, which ClientSchema to fetch.
     */
    where: ClientSchemaWhereUniqueInput
  }

  /**
   * ClientSchema findUniqueOrThrow
   */
  export type ClientSchemaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSchema
     */
    select?: ClientSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientSchema
     */
    omit?: ClientSchemaOmit<ExtArgs> | null
    /**
     * Filter, which ClientSchema to fetch.
     */
    where: ClientSchemaWhereUniqueInput
  }

  /**
   * ClientSchema findFirst
   */
  export type ClientSchemaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSchema
     */
    select?: ClientSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientSchema
     */
    omit?: ClientSchemaOmit<ExtArgs> | null
    /**
     * Filter, which ClientSchema to fetch.
     */
    where?: ClientSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientSchemas to fetch.
     */
    orderBy?: ClientSchemaOrderByWithRelationInput | ClientSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientSchemas.
     */
    cursor?: ClientSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientSchemas.
     */
    distinct?: ClientSchemaScalarFieldEnum | ClientSchemaScalarFieldEnum[]
  }

  /**
   * ClientSchema findFirstOrThrow
   */
  export type ClientSchemaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSchema
     */
    select?: ClientSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientSchema
     */
    omit?: ClientSchemaOmit<ExtArgs> | null
    /**
     * Filter, which ClientSchema to fetch.
     */
    where?: ClientSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientSchemas to fetch.
     */
    orderBy?: ClientSchemaOrderByWithRelationInput | ClientSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientSchemas.
     */
    cursor?: ClientSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientSchemas.
     */
    distinct?: ClientSchemaScalarFieldEnum | ClientSchemaScalarFieldEnum[]
  }

  /**
   * ClientSchema findMany
   */
  export type ClientSchemaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSchema
     */
    select?: ClientSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientSchema
     */
    omit?: ClientSchemaOmit<ExtArgs> | null
    /**
     * Filter, which ClientSchemas to fetch.
     */
    where?: ClientSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientSchemas to fetch.
     */
    orderBy?: ClientSchemaOrderByWithRelationInput | ClientSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientSchemas.
     */
    cursor?: ClientSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientSchemas.
     */
    skip?: number
    distinct?: ClientSchemaScalarFieldEnum | ClientSchemaScalarFieldEnum[]
  }

  /**
   * ClientSchema create
   */
  export type ClientSchemaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSchema
     */
    select?: ClientSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientSchema
     */
    omit?: ClientSchemaOmit<ExtArgs> | null
    /**
     * The data needed to create a ClientSchema.
     */
    data: XOR<ClientSchemaCreateInput, ClientSchemaUncheckedCreateInput>
  }

  /**
   * ClientSchema createMany
   */
  export type ClientSchemaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClientSchemas.
     */
    data: ClientSchemaCreateManyInput | ClientSchemaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClientSchema createManyAndReturn
   */
  export type ClientSchemaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSchema
     */
    select?: ClientSchemaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientSchema
     */
    omit?: ClientSchemaOmit<ExtArgs> | null
    /**
     * The data used to create many ClientSchemas.
     */
    data: ClientSchemaCreateManyInput | ClientSchemaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClientSchema update
   */
  export type ClientSchemaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSchema
     */
    select?: ClientSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientSchema
     */
    omit?: ClientSchemaOmit<ExtArgs> | null
    /**
     * The data needed to update a ClientSchema.
     */
    data: XOR<ClientSchemaUpdateInput, ClientSchemaUncheckedUpdateInput>
    /**
     * Choose, which ClientSchema to update.
     */
    where: ClientSchemaWhereUniqueInput
  }

  /**
   * ClientSchema updateMany
   */
  export type ClientSchemaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClientSchemas.
     */
    data: XOR<ClientSchemaUpdateManyMutationInput, ClientSchemaUncheckedUpdateManyInput>
    /**
     * Filter which ClientSchemas to update
     */
    where?: ClientSchemaWhereInput
    /**
     * Limit how many ClientSchemas to update.
     */
    limit?: number
  }

  /**
   * ClientSchema updateManyAndReturn
   */
  export type ClientSchemaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSchema
     */
    select?: ClientSchemaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientSchema
     */
    omit?: ClientSchemaOmit<ExtArgs> | null
    /**
     * The data used to update ClientSchemas.
     */
    data: XOR<ClientSchemaUpdateManyMutationInput, ClientSchemaUncheckedUpdateManyInput>
    /**
     * Filter which ClientSchemas to update
     */
    where?: ClientSchemaWhereInput
    /**
     * Limit how many ClientSchemas to update.
     */
    limit?: number
  }

  /**
   * ClientSchema upsert
   */
  export type ClientSchemaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSchema
     */
    select?: ClientSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientSchema
     */
    omit?: ClientSchemaOmit<ExtArgs> | null
    /**
     * The filter to search for the ClientSchema to update in case it exists.
     */
    where: ClientSchemaWhereUniqueInput
    /**
     * In case the ClientSchema found by the `where` argument doesn't exist, create a new ClientSchema with this data.
     */
    create: XOR<ClientSchemaCreateInput, ClientSchemaUncheckedCreateInput>
    /**
     * In case the ClientSchema was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientSchemaUpdateInput, ClientSchemaUncheckedUpdateInput>
  }

  /**
   * ClientSchema delete
   */
  export type ClientSchemaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSchema
     */
    select?: ClientSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientSchema
     */
    omit?: ClientSchemaOmit<ExtArgs> | null
    /**
     * Filter which ClientSchema to delete.
     */
    where: ClientSchemaWhereUniqueInput
  }

  /**
   * ClientSchema deleteMany
   */
  export type ClientSchemaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientSchemas to delete
     */
    where?: ClientSchemaWhereInput
    /**
     * Limit how many ClientSchemas to delete.
     */
    limit?: number
  }

  /**
   * ClientSchema without action
   */
  export type ClientSchemaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSchema
     */
    select?: ClientSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientSchema
     */
    omit?: ClientSchemaOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserSchemaScalarFieldEnum: {
    user_id: 'user_id',
    Name: 'Name',
    Email: 'Email',
    Password: 'Password',
    Experience: 'Experience',
    Rating: 'Rating',
    Skills: 'Skills'
  };

  export type UserSchemaScalarFieldEnum = (typeof UserSchemaScalarFieldEnum)[keyof typeof UserSchemaScalarFieldEnum]


  export const ClientSchemaScalarFieldEnum: {
    client_id: 'client_id',
    client_name: 'client_name',
    Email: 'Email',
    Password: 'Password',
    Organization: 'Organization'
  };

  export type ClientSchemaScalarFieldEnum = (typeof ClientSchemaScalarFieldEnum)[keyof typeof ClientSchemaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserSchemaWhereInput = {
    AND?: UserSchemaWhereInput | UserSchemaWhereInput[]
    OR?: UserSchemaWhereInput[]
    NOT?: UserSchemaWhereInput | UserSchemaWhereInput[]
    user_id?: IntFilter<"UserSchema"> | number
    Name?: StringFilter<"UserSchema"> | string
    Email?: StringFilter<"UserSchema"> | string
    Password?: StringFilter<"UserSchema"> | string
    Experience?: IntFilter<"UserSchema"> | number
    Rating?: IntFilter<"UserSchema"> | number
    Skills?: StringNullableListFilter<"UserSchema">
  }

  export type UserSchemaOrderByWithRelationInput = {
    user_id?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Experience?: SortOrder
    Rating?: SortOrder
    Skills?: SortOrder
  }

  export type UserSchemaWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    Email?: string
    AND?: UserSchemaWhereInput | UserSchemaWhereInput[]
    OR?: UserSchemaWhereInput[]
    NOT?: UserSchemaWhereInput | UserSchemaWhereInput[]
    Name?: StringFilter<"UserSchema"> | string
    Password?: StringFilter<"UserSchema"> | string
    Experience?: IntFilter<"UserSchema"> | number
    Rating?: IntFilter<"UserSchema"> | number
    Skills?: StringNullableListFilter<"UserSchema">
  }, "user_id" | "Email">

  export type UserSchemaOrderByWithAggregationInput = {
    user_id?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Experience?: SortOrder
    Rating?: SortOrder
    Skills?: SortOrder
    _count?: UserSchemaCountOrderByAggregateInput
    _avg?: UserSchemaAvgOrderByAggregateInput
    _max?: UserSchemaMaxOrderByAggregateInput
    _min?: UserSchemaMinOrderByAggregateInput
    _sum?: UserSchemaSumOrderByAggregateInput
  }

  export type UserSchemaScalarWhereWithAggregatesInput = {
    AND?: UserSchemaScalarWhereWithAggregatesInput | UserSchemaScalarWhereWithAggregatesInput[]
    OR?: UserSchemaScalarWhereWithAggregatesInput[]
    NOT?: UserSchemaScalarWhereWithAggregatesInput | UserSchemaScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"UserSchema"> | number
    Name?: StringWithAggregatesFilter<"UserSchema"> | string
    Email?: StringWithAggregatesFilter<"UserSchema"> | string
    Password?: StringWithAggregatesFilter<"UserSchema"> | string
    Experience?: IntWithAggregatesFilter<"UserSchema"> | number
    Rating?: IntWithAggregatesFilter<"UserSchema"> | number
    Skills?: StringNullableListFilter<"UserSchema">
  }

  export type ClientSchemaWhereInput = {
    AND?: ClientSchemaWhereInput | ClientSchemaWhereInput[]
    OR?: ClientSchemaWhereInput[]
    NOT?: ClientSchemaWhereInput | ClientSchemaWhereInput[]
    client_id?: IntFilter<"ClientSchema"> | number
    client_name?: StringFilter<"ClientSchema"> | string
    Email?: StringFilter<"ClientSchema"> | string
    Password?: StringFilter<"ClientSchema"> | string
    Organization?: StringNullableFilter<"ClientSchema"> | string | null
  }

  export type ClientSchemaOrderByWithRelationInput = {
    client_id?: SortOrder
    client_name?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Organization?: SortOrderInput | SortOrder
  }

  export type ClientSchemaWhereUniqueInput = Prisma.AtLeast<{
    client_id?: number
    Email?: string
    AND?: ClientSchemaWhereInput | ClientSchemaWhereInput[]
    OR?: ClientSchemaWhereInput[]
    NOT?: ClientSchemaWhereInput | ClientSchemaWhereInput[]
    client_name?: StringFilter<"ClientSchema"> | string
    Password?: StringFilter<"ClientSchema"> | string
    Organization?: StringNullableFilter<"ClientSchema"> | string | null
  }, "client_id" | "Email">

  export type ClientSchemaOrderByWithAggregationInput = {
    client_id?: SortOrder
    client_name?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Organization?: SortOrderInput | SortOrder
    _count?: ClientSchemaCountOrderByAggregateInput
    _avg?: ClientSchemaAvgOrderByAggregateInput
    _max?: ClientSchemaMaxOrderByAggregateInput
    _min?: ClientSchemaMinOrderByAggregateInput
    _sum?: ClientSchemaSumOrderByAggregateInput
  }

  export type ClientSchemaScalarWhereWithAggregatesInput = {
    AND?: ClientSchemaScalarWhereWithAggregatesInput | ClientSchemaScalarWhereWithAggregatesInput[]
    OR?: ClientSchemaScalarWhereWithAggregatesInput[]
    NOT?: ClientSchemaScalarWhereWithAggregatesInput | ClientSchemaScalarWhereWithAggregatesInput[]
    client_id?: IntWithAggregatesFilter<"ClientSchema"> | number
    client_name?: StringWithAggregatesFilter<"ClientSchema"> | string
    Email?: StringWithAggregatesFilter<"ClientSchema"> | string
    Password?: StringWithAggregatesFilter<"ClientSchema"> | string
    Organization?: StringNullableWithAggregatesFilter<"ClientSchema"> | string | null
  }

  export type UserSchemaCreateInput = {
    Name: string
    Email: string
    Password: string
    Experience: number
    Rating: number
    Skills?: UserSchemaCreateSkillsInput | string[]
  }

  export type UserSchemaUncheckedCreateInput = {
    user_id?: number
    Name: string
    Email: string
    Password: string
    Experience: number
    Rating: number
    Skills?: UserSchemaCreateSkillsInput | string[]
  }

  export type UserSchemaUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Experience?: IntFieldUpdateOperationsInput | number
    Rating?: IntFieldUpdateOperationsInput | number
    Skills?: UserSchemaUpdateSkillsInput | string[]
  }

  export type UserSchemaUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Experience?: IntFieldUpdateOperationsInput | number
    Rating?: IntFieldUpdateOperationsInput | number
    Skills?: UserSchemaUpdateSkillsInput | string[]
  }

  export type UserSchemaCreateManyInput = {
    user_id?: number
    Name: string
    Email: string
    Password: string
    Experience: number
    Rating: number
    Skills?: UserSchemaCreateSkillsInput | string[]
  }

  export type UserSchemaUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Experience?: IntFieldUpdateOperationsInput | number
    Rating?: IntFieldUpdateOperationsInput | number
    Skills?: UserSchemaUpdateSkillsInput | string[]
  }

  export type UserSchemaUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Experience?: IntFieldUpdateOperationsInput | number
    Rating?: IntFieldUpdateOperationsInput | number
    Skills?: UserSchemaUpdateSkillsInput | string[]
  }

  export type ClientSchemaCreateInput = {
    client_name: string
    Email: string
    Password: string
    Organization?: string | null
  }

  export type ClientSchemaUncheckedCreateInput = {
    client_id?: number
    client_name: string
    Email: string
    Password: string
    Organization?: string | null
  }

  export type ClientSchemaUpdateInput = {
    client_name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Organization?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientSchemaUncheckedUpdateInput = {
    client_id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Organization?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientSchemaCreateManyInput = {
    client_id?: number
    client_name: string
    Email: string
    Password: string
    Organization?: string | null
  }

  export type ClientSchemaUpdateManyMutationInput = {
    client_name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Organization?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientSchemaUncheckedUpdateManyInput = {
    client_id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Organization?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserSchemaCountOrderByAggregateInput = {
    user_id?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Experience?: SortOrder
    Rating?: SortOrder
    Skills?: SortOrder
  }

  export type UserSchemaAvgOrderByAggregateInput = {
    user_id?: SortOrder
    Experience?: SortOrder
    Rating?: SortOrder
  }

  export type UserSchemaMaxOrderByAggregateInput = {
    user_id?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Experience?: SortOrder
    Rating?: SortOrder
  }

  export type UserSchemaMinOrderByAggregateInput = {
    user_id?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Experience?: SortOrder
    Rating?: SortOrder
  }

  export type UserSchemaSumOrderByAggregateInput = {
    user_id?: SortOrder
    Experience?: SortOrder
    Rating?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClientSchemaCountOrderByAggregateInput = {
    client_id?: SortOrder
    client_name?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Organization?: SortOrder
  }

  export type ClientSchemaAvgOrderByAggregateInput = {
    client_id?: SortOrder
  }

  export type ClientSchemaMaxOrderByAggregateInput = {
    client_id?: SortOrder
    client_name?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Organization?: SortOrder
  }

  export type ClientSchemaMinOrderByAggregateInput = {
    client_id?: SortOrder
    client_name?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Organization?: SortOrder
  }

  export type ClientSchemaSumOrderByAggregateInput = {
    client_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserSchemaCreateSkillsInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserSchemaUpdateSkillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}