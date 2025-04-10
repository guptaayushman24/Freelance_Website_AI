
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
 * Model ProfileSchema
 * 
 */
export type ProfileSchema = $Result.DefaultSelection<Prisma.$ProfileSchemaPayload>
/**
 * Model JobSchema
 * 
 */
export type JobSchema = $Result.DefaultSelection<Prisma.$JobSchemaPayload>
/**
 * Model ApplyJob
 * 
 */
export type ApplyJob = $Result.DefaultSelection<Prisma.$ApplyJobPayload>

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

  /**
   * `prisma.profileSchema`: Exposes CRUD operations for the **ProfileSchema** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProfileSchemas
    * const profileSchemas = await prisma.profileSchema.findMany()
    * ```
    */
  get profileSchema(): Prisma.ProfileSchemaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobSchema`: Exposes CRUD operations for the **JobSchema** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobSchemas
    * const jobSchemas = await prisma.jobSchema.findMany()
    * ```
    */
  get jobSchema(): Prisma.JobSchemaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.applyJob`: Exposes CRUD operations for the **ApplyJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApplyJobs
    * const applyJobs = await prisma.applyJob.findMany()
    * ```
    */
  get applyJob(): Prisma.ApplyJobDelegate<ExtArgs, ClientOptions>;
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
    ClientSchema: 'ClientSchema',
    ProfileSchema: 'ProfileSchema',
    JobSchema: 'JobSchema',
    ApplyJob: 'ApplyJob'
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
      modelProps: "userSchema" | "clientSchema" | "profileSchema" | "jobSchema" | "applyJob"
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
      ProfileSchema: {
        payload: Prisma.$ProfileSchemaPayload<ExtArgs>
        fields: Prisma.ProfileSchemaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileSchemaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileSchemaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileSchemaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileSchemaPayload>
          }
          findFirst: {
            args: Prisma.ProfileSchemaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileSchemaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileSchemaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileSchemaPayload>
          }
          findMany: {
            args: Prisma.ProfileSchemaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileSchemaPayload>[]
          }
          create: {
            args: Prisma.ProfileSchemaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileSchemaPayload>
          }
          createMany: {
            args: Prisma.ProfileSchemaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileSchemaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileSchemaPayload>[]
          }
          delete: {
            args: Prisma.ProfileSchemaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileSchemaPayload>
          }
          update: {
            args: Prisma.ProfileSchemaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileSchemaPayload>
          }
          deleteMany: {
            args: Prisma.ProfileSchemaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileSchemaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileSchemaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileSchemaPayload>[]
          }
          upsert: {
            args: Prisma.ProfileSchemaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileSchemaPayload>
          }
          aggregate: {
            args: Prisma.ProfileSchemaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfileSchema>
          }
          groupBy: {
            args: Prisma.ProfileSchemaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileSchemaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileSchemaCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileSchemaCountAggregateOutputType> | number
          }
        }
      }
      JobSchema: {
        payload: Prisma.$JobSchemaPayload<ExtArgs>
        fields: Prisma.JobSchemaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobSchemaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSchemaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobSchemaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSchemaPayload>
          }
          findFirst: {
            args: Prisma.JobSchemaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSchemaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobSchemaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSchemaPayload>
          }
          findMany: {
            args: Prisma.JobSchemaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSchemaPayload>[]
          }
          create: {
            args: Prisma.JobSchemaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSchemaPayload>
          }
          createMany: {
            args: Prisma.JobSchemaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobSchemaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSchemaPayload>[]
          }
          delete: {
            args: Prisma.JobSchemaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSchemaPayload>
          }
          update: {
            args: Prisma.JobSchemaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSchemaPayload>
          }
          deleteMany: {
            args: Prisma.JobSchemaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobSchemaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobSchemaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSchemaPayload>[]
          }
          upsert: {
            args: Prisma.JobSchemaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSchemaPayload>
          }
          aggregate: {
            args: Prisma.JobSchemaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobSchema>
          }
          groupBy: {
            args: Prisma.JobSchemaGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobSchemaGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobSchemaCountArgs<ExtArgs>
            result: $Utils.Optional<JobSchemaCountAggregateOutputType> | number
          }
        }
      }
      ApplyJob: {
        payload: Prisma.$ApplyJobPayload<ExtArgs>
        fields: Prisma.ApplyJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplyJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplyJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplyJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplyJobPayload>
          }
          findFirst: {
            args: Prisma.ApplyJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplyJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplyJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplyJobPayload>
          }
          findMany: {
            args: Prisma.ApplyJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplyJobPayload>[]
          }
          create: {
            args: Prisma.ApplyJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplyJobPayload>
          }
          createMany: {
            args: Prisma.ApplyJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplyJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplyJobPayload>[]
          }
          delete: {
            args: Prisma.ApplyJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplyJobPayload>
          }
          update: {
            args: Prisma.ApplyJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplyJobPayload>
          }
          deleteMany: {
            args: Prisma.ApplyJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplyJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplyJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplyJobPayload>[]
          }
          upsert: {
            args: Prisma.ApplyJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplyJobPayload>
          }
          aggregate: {
            args: Prisma.ApplyJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplyJob>
          }
          groupBy: {
            args: Prisma.ApplyJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplyJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplyJobCountArgs<ExtArgs>
            result: $Utils.Optional<ApplyJobCountAggregateOutputType> | number
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
    profileSchema?: ProfileSchemaOmit
    jobSchema?: JobSchemaOmit
    applyJob?: ApplyJobOmit
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
   * Count Type UserSchemaCountOutputType
   */

  export type UserSchemaCountOutputType = {
    ApplyJob: number
  }

  export type UserSchemaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ApplyJob?: boolean | UserSchemaCountOutputTypeCountApplyJobArgs
  }

  // Custom InputTypes
  /**
   * UserSchemaCountOutputType without action
   */
  export type UserSchemaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchemaCountOutputType
     */
    select?: UserSchemaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserSchemaCountOutputType without action
   */
  export type UserSchemaCountOutputTypeCountApplyJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplyJobWhereInput
  }


  /**
   * Count Type ClientSchemaCountOutputType
   */

  export type ClientSchemaCountOutputType = {
    jobschema: number
    ApplyJobs: number
  }

  export type ClientSchemaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobschema?: boolean | ClientSchemaCountOutputTypeCountJobschemaArgs
    ApplyJobs?: boolean | ClientSchemaCountOutputTypeCountApplyJobsArgs
  }

  // Custom InputTypes
  /**
   * ClientSchemaCountOutputType without action
   */
  export type ClientSchemaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSchemaCountOutputType
     */
    select?: ClientSchemaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientSchemaCountOutputType without action
   */
  export type ClientSchemaCountOutputTypeCountJobschemaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobSchemaWhereInput
  }

  /**
   * ClientSchemaCountOutputType without action
   */
  export type ClientSchemaCountOutputTypeCountApplyJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplyJobWhereInput
  }


  /**
   * Count Type ProfileSchemaCountOutputType
   */

  export type ProfileSchemaCountOutputType = {
    applyJobs: number
  }

  export type ProfileSchemaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applyJobs?: boolean | ProfileSchemaCountOutputTypeCountApplyJobsArgs
  }

  // Custom InputTypes
  /**
   * ProfileSchemaCountOutputType without action
   */
  export type ProfileSchemaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileSchemaCountOutputType
     */
    select?: ProfileSchemaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfileSchemaCountOutputType without action
   */
  export type ProfileSchemaCountOutputTypeCountApplyJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplyJobWhereInput
  }


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
    Profile?: boolean | UserSchema$ProfileArgs<ExtArgs>
    ApplyJob?: boolean | UserSchema$ApplyJobArgs<ExtArgs>
    _count?: boolean | UserSchemaCountOutputTypeDefaultArgs<ExtArgs>
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
  export type UserSchemaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Profile?: boolean | UserSchema$ProfileArgs<ExtArgs>
    ApplyJob?: boolean | UserSchema$ApplyJobArgs<ExtArgs>
    _count?: boolean | UserSchemaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserSchemaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserSchemaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserSchemaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSchema"
    objects: {
      Profile: Prisma.$ProfileSchemaPayload<ExtArgs> | null
      ApplyJob: Prisma.$ApplyJobPayload<ExtArgs>[]
    }
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
    Profile<T extends UserSchema$ProfileArgs<ExtArgs> = {}>(args?: Subset<T, UserSchema$ProfileArgs<ExtArgs>>): Prisma__ProfileSchemaClient<$Result.GetResult<Prisma.$ProfileSchemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ApplyJob<T extends UserSchema$ApplyJobArgs<ExtArgs> = {}>(args?: Subset<T, UserSchema$ApplyJobArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplyJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserSchemaInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserSchemaInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserSchemaInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserSchemaInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserSchemaInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserSchemaInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserSchemaInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserSchemaInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserSchemaInclude<ExtArgs> | null
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
   * UserSchema.Profile
   */
  export type UserSchema$ProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileSchema
     */
    select?: ProfileSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileSchema
     */
    omit?: ProfileSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileSchemaInclude<ExtArgs> | null
    where?: ProfileSchemaWhereInput
  }

  /**
   * UserSchema.ApplyJob
   */
  export type UserSchema$ApplyJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplyJob
     */
    select?: ApplyJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplyJob
     */
    omit?: ApplyJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplyJobInclude<ExtArgs> | null
    where?: ApplyJobWhereInput
    orderBy?: ApplyJobOrderByWithRelationInput | ApplyJobOrderByWithRelationInput[]
    cursor?: ApplyJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplyJobScalarFieldEnum | ApplyJobScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSchemaInclude<ExtArgs> | null
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
    jobschema?: boolean | ClientSchema$jobschemaArgs<ExtArgs>
    ApplyJobs?: boolean | ClientSchema$ApplyJobsArgs<ExtArgs>
    _count?: boolean | ClientSchemaCountOutputTypeDefaultArgs<ExtArgs>
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
  export type ClientSchemaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobschema?: boolean | ClientSchema$jobschemaArgs<ExtArgs>
    ApplyJobs?: boolean | ClientSchema$ApplyJobsArgs<ExtArgs>
    _count?: boolean | ClientSchemaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientSchemaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientSchemaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientSchemaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClientSchema"
    objects: {
      jobschema: Prisma.$JobSchemaPayload<ExtArgs>[]
      ApplyJobs: Prisma.$ApplyJobPayload<ExtArgs>[]
    }
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
    jobschema<T extends ClientSchema$jobschemaArgs<ExtArgs> = {}>(args?: Subset<T, ClientSchema$jobschemaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobSchemaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ApplyJobs<T extends ClientSchema$ApplyJobsArgs<ExtArgs> = {}>(args?: Subset<T, ClientSchema$ApplyJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplyJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSchemaInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSchemaInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSchemaInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSchemaInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSchemaInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSchemaInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSchemaInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSchemaInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSchemaInclude<ExtArgs> | null
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
   * ClientSchema.jobschema
   */
  export type ClientSchema$jobschemaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSchema
     */
    select?: JobSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSchema
     */
    omit?: JobSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSchemaInclude<ExtArgs> | null
    where?: JobSchemaWhereInput
    orderBy?: JobSchemaOrderByWithRelationInput | JobSchemaOrderByWithRelationInput[]
    cursor?: JobSchemaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobSchemaScalarFieldEnum | JobSchemaScalarFieldEnum[]
  }

  /**
   * ClientSchema.ApplyJobs
   */
  export type ClientSchema$ApplyJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplyJob
     */
    select?: ApplyJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplyJob
     */
    omit?: ApplyJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplyJobInclude<ExtArgs> | null
    where?: ApplyJobWhereInput
    orderBy?: ApplyJobOrderByWithRelationInput | ApplyJobOrderByWithRelationInput[]
    cursor?: ApplyJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplyJobScalarFieldEnum | ApplyJobScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSchemaInclude<ExtArgs> | null
  }


  /**
   * Model ProfileSchema
   */

  export type AggregateProfileSchema = {
    _count: ProfileSchemaCountAggregateOutputType | null
    _avg: ProfileSchemaAvgAggregateOutputType | null
    _sum: ProfileSchemaSumAggregateOutputType | null
    _min: ProfileSchemaMinAggregateOutputType | null
    _max: ProfileSchemaMaxAggregateOutputType | null
  }

  export type ProfileSchemaAvgAggregateOutputType = {
    profile_id: number | null
    userid: number | null
  }

  export type ProfileSchemaSumAggregateOutputType = {
    profile_id: number | null
    userid: number | null
  }

  export type ProfileSchemaMinAggregateOutputType = {
    profile_id: number | null
    About: string | null
    userid: number | null
  }

  export type ProfileSchemaMaxAggregateOutputType = {
    profile_id: number | null
    About: string | null
    userid: number | null
  }

  export type ProfileSchemaCountAggregateOutputType = {
    profile_id: number
    About: number
    ProjectLink: number
    userid: number
    _all: number
  }


  export type ProfileSchemaAvgAggregateInputType = {
    profile_id?: true
    userid?: true
  }

  export type ProfileSchemaSumAggregateInputType = {
    profile_id?: true
    userid?: true
  }

  export type ProfileSchemaMinAggregateInputType = {
    profile_id?: true
    About?: true
    userid?: true
  }

  export type ProfileSchemaMaxAggregateInputType = {
    profile_id?: true
    About?: true
    userid?: true
  }

  export type ProfileSchemaCountAggregateInputType = {
    profile_id?: true
    About?: true
    ProjectLink?: true
    userid?: true
    _all?: true
  }

  export type ProfileSchemaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileSchema to aggregate.
     */
    where?: ProfileSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileSchemas to fetch.
     */
    orderBy?: ProfileSchemaOrderByWithRelationInput | ProfileSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProfileSchemas
    **/
    _count?: true | ProfileSchemaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileSchemaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSchemaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileSchemaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileSchemaMaxAggregateInputType
  }

  export type GetProfileSchemaAggregateType<T extends ProfileSchemaAggregateArgs> = {
        [P in keyof T & keyof AggregateProfileSchema]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfileSchema[P]>
      : GetScalarType<T[P], AggregateProfileSchema[P]>
  }




  export type ProfileSchemaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileSchemaWhereInput
    orderBy?: ProfileSchemaOrderByWithAggregationInput | ProfileSchemaOrderByWithAggregationInput[]
    by: ProfileSchemaScalarFieldEnum[] | ProfileSchemaScalarFieldEnum
    having?: ProfileSchemaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileSchemaCountAggregateInputType | true
    _avg?: ProfileSchemaAvgAggregateInputType
    _sum?: ProfileSchemaSumAggregateInputType
    _min?: ProfileSchemaMinAggregateInputType
    _max?: ProfileSchemaMaxAggregateInputType
  }

  export type ProfileSchemaGroupByOutputType = {
    profile_id: number
    About: string
    ProjectLink: string[]
    userid: number
    _count: ProfileSchemaCountAggregateOutputType | null
    _avg: ProfileSchemaAvgAggregateOutputType | null
    _sum: ProfileSchemaSumAggregateOutputType | null
    _min: ProfileSchemaMinAggregateOutputType | null
    _max: ProfileSchemaMaxAggregateOutputType | null
  }

  type GetProfileSchemaGroupByPayload<T extends ProfileSchemaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileSchemaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileSchemaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileSchemaGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileSchemaGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSchemaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    profile_id?: boolean
    About?: boolean
    ProjectLink?: boolean
    userid?: boolean
    user?: boolean | UserSchemaDefaultArgs<ExtArgs>
    applyJobs?: boolean | ProfileSchema$applyJobsArgs<ExtArgs>
    _count?: boolean | ProfileSchemaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profileSchema"]>

  export type ProfileSchemaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    profile_id?: boolean
    About?: boolean
    ProjectLink?: boolean
    userid?: boolean
    user?: boolean | UserSchemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profileSchema"]>

  export type ProfileSchemaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    profile_id?: boolean
    About?: boolean
    ProjectLink?: boolean
    userid?: boolean
    user?: boolean | UserSchemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profileSchema"]>

  export type ProfileSchemaSelectScalar = {
    profile_id?: boolean
    About?: boolean
    ProjectLink?: boolean
    userid?: boolean
  }

  export type ProfileSchemaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"profile_id" | "About" | "ProjectLink" | "userid", ExtArgs["result"]["profileSchema"]>
  export type ProfileSchemaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserSchemaDefaultArgs<ExtArgs>
    applyJobs?: boolean | ProfileSchema$applyJobsArgs<ExtArgs>
    _count?: boolean | ProfileSchemaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfileSchemaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserSchemaDefaultArgs<ExtArgs>
  }
  export type ProfileSchemaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserSchemaDefaultArgs<ExtArgs>
  }

  export type $ProfileSchemaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProfileSchema"
    objects: {
      user: Prisma.$UserSchemaPayload<ExtArgs>
      applyJobs: Prisma.$ApplyJobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      profile_id: number
      About: string
      ProjectLink: string[]
      userid: number
    }, ExtArgs["result"]["profileSchema"]>
    composites: {}
  }

  type ProfileSchemaGetPayload<S extends boolean | null | undefined | ProfileSchemaDefaultArgs> = $Result.GetResult<Prisma.$ProfileSchemaPayload, S>

  type ProfileSchemaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileSchemaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileSchemaCountAggregateInputType | true
    }

  export interface ProfileSchemaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProfileSchema'], meta: { name: 'ProfileSchema' } }
    /**
     * Find zero or one ProfileSchema that matches the filter.
     * @param {ProfileSchemaFindUniqueArgs} args - Arguments to find a ProfileSchema
     * @example
     * // Get one ProfileSchema
     * const profileSchema = await prisma.profileSchema.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileSchemaFindUniqueArgs>(args: SelectSubset<T, ProfileSchemaFindUniqueArgs<ExtArgs>>): Prisma__ProfileSchemaClient<$Result.GetResult<Prisma.$ProfileSchemaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProfileSchema that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileSchemaFindUniqueOrThrowArgs} args - Arguments to find a ProfileSchema
     * @example
     * // Get one ProfileSchema
     * const profileSchema = await prisma.profileSchema.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileSchemaFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileSchemaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileSchemaClient<$Result.GetResult<Prisma.$ProfileSchemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfileSchema that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileSchemaFindFirstArgs} args - Arguments to find a ProfileSchema
     * @example
     * // Get one ProfileSchema
     * const profileSchema = await prisma.profileSchema.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileSchemaFindFirstArgs>(args?: SelectSubset<T, ProfileSchemaFindFirstArgs<ExtArgs>>): Prisma__ProfileSchemaClient<$Result.GetResult<Prisma.$ProfileSchemaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfileSchema that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileSchemaFindFirstOrThrowArgs} args - Arguments to find a ProfileSchema
     * @example
     * // Get one ProfileSchema
     * const profileSchema = await prisma.profileSchema.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileSchemaFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileSchemaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileSchemaClient<$Result.GetResult<Prisma.$ProfileSchemaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProfileSchemas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileSchemaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfileSchemas
     * const profileSchemas = await prisma.profileSchema.findMany()
     * 
     * // Get first 10 ProfileSchemas
     * const profileSchemas = await prisma.profileSchema.findMany({ take: 10 })
     * 
     * // Only select the `profile_id`
     * const profileSchemaWithProfile_idOnly = await prisma.profileSchema.findMany({ select: { profile_id: true } })
     * 
     */
    findMany<T extends ProfileSchemaFindManyArgs>(args?: SelectSubset<T, ProfileSchemaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileSchemaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProfileSchema.
     * @param {ProfileSchemaCreateArgs} args - Arguments to create a ProfileSchema.
     * @example
     * // Create one ProfileSchema
     * const ProfileSchema = await prisma.profileSchema.create({
     *   data: {
     *     // ... data to create a ProfileSchema
     *   }
     * })
     * 
     */
    create<T extends ProfileSchemaCreateArgs>(args: SelectSubset<T, ProfileSchemaCreateArgs<ExtArgs>>): Prisma__ProfileSchemaClient<$Result.GetResult<Prisma.$ProfileSchemaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProfileSchemas.
     * @param {ProfileSchemaCreateManyArgs} args - Arguments to create many ProfileSchemas.
     * @example
     * // Create many ProfileSchemas
     * const profileSchema = await prisma.profileSchema.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileSchemaCreateManyArgs>(args?: SelectSubset<T, ProfileSchemaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProfileSchemas and returns the data saved in the database.
     * @param {ProfileSchemaCreateManyAndReturnArgs} args - Arguments to create many ProfileSchemas.
     * @example
     * // Create many ProfileSchemas
     * const profileSchema = await prisma.profileSchema.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProfileSchemas and only return the `profile_id`
     * const profileSchemaWithProfile_idOnly = await prisma.profileSchema.createManyAndReturn({
     *   select: { profile_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileSchemaCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileSchemaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileSchemaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProfileSchema.
     * @param {ProfileSchemaDeleteArgs} args - Arguments to delete one ProfileSchema.
     * @example
     * // Delete one ProfileSchema
     * const ProfileSchema = await prisma.profileSchema.delete({
     *   where: {
     *     // ... filter to delete one ProfileSchema
     *   }
     * })
     * 
     */
    delete<T extends ProfileSchemaDeleteArgs>(args: SelectSubset<T, ProfileSchemaDeleteArgs<ExtArgs>>): Prisma__ProfileSchemaClient<$Result.GetResult<Prisma.$ProfileSchemaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProfileSchema.
     * @param {ProfileSchemaUpdateArgs} args - Arguments to update one ProfileSchema.
     * @example
     * // Update one ProfileSchema
     * const profileSchema = await prisma.profileSchema.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileSchemaUpdateArgs>(args: SelectSubset<T, ProfileSchemaUpdateArgs<ExtArgs>>): Prisma__ProfileSchemaClient<$Result.GetResult<Prisma.$ProfileSchemaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProfileSchemas.
     * @param {ProfileSchemaDeleteManyArgs} args - Arguments to filter ProfileSchemas to delete.
     * @example
     * // Delete a few ProfileSchemas
     * const { count } = await prisma.profileSchema.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileSchemaDeleteManyArgs>(args?: SelectSubset<T, ProfileSchemaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfileSchemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileSchemaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfileSchemas
     * const profileSchema = await prisma.profileSchema.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileSchemaUpdateManyArgs>(args: SelectSubset<T, ProfileSchemaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfileSchemas and returns the data updated in the database.
     * @param {ProfileSchemaUpdateManyAndReturnArgs} args - Arguments to update many ProfileSchemas.
     * @example
     * // Update many ProfileSchemas
     * const profileSchema = await prisma.profileSchema.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProfileSchemas and only return the `profile_id`
     * const profileSchemaWithProfile_idOnly = await prisma.profileSchema.updateManyAndReturn({
     *   select: { profile_id: true },
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
    updateManyAndReturn<T extends ProfileSchemaUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileSchemaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileSchemaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProfileSchema.
     * @param {ProfileSchemaUpsertArgs} args - Arguments to update or create a ProfileSchema.
     * @example
     * // Update or create a ProfileSchema
     * const profileSchema = await prisma.profileSchema.upsert({
     *   create: {
     *     // ... data to create a ProfileSchema
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfileSchema we want to update
     *   }
     * })
     */
    upsert<T extends ProfileSchemaUpsertArgs>(args: SelectSubset<T, ProfileSchemaUpsertArgs<ExtArgs>>): Prisma__ProfileSchemaClient<$Result.GetResult<Prisma.$ProfileSchemaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProfileSchemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileSchemaCountArgs} args - Arguments to filter ProfileSchemas to count.
     * @example
     * // Count the number of ProfileSchemas
     * const count = await prisma.profileSchema.count({
     *   where: {
     *     // ... the filter for the ProfileSchemas we want to count
     *   }
     * })
    **/
    count<T extends ProfileSchemaCountArgs>(
      args?: Subset<T, ProfileSchemaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileSchemaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProfileSchema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileSchemaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileSchemaAggregateArgs>(args: Subset<T, ProfileSchemaAggregateArgs>): Prisma.PrismaPromise<GetProfileSchemaAggregateType<T>>

    /**
     * Group by ProfileSchema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileSchemaGroupByArgs} args - Group by arguments.
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
      T extends ProfileSchemaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileSchemaGroupByArgs['orderBy'] }
        : { orderBy?: ProfileSchemaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileSchemaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileSchemaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProfileSchema model
   */
  readonly fields: ProfileSchemaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProfileSchema.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileSchemaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserSchemaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserSchemaDefaultArgs<ExtArgs>>): Prisma__UserSchemaClient<$Result.GetResult<Prisma.$UserSchemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    applyJobs<T extends ProfileSchema$applyJobsArgs<ExtArgs> = {}>(args?: Subset<T, ProfileSchema$applyJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplyJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProfileSchema model
   */ 
  interface ProfileSchemaFieldRefs {
    readonly profile_id: FieldRef<"ProfileSchema", 'Int'>
    readonly About: FieldRef<"ProfileSchema", 'String'>
    readonly ProjectLink: FieldRef<"ProfileSchema", 'String[]'>
    readonly userid: FieldRef<"ProfileSchema", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProfileSchema findUnique
   */
  export type ProfileSchemaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileSchema
     */
    select?: ProfileSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileSchema
     */
    omit?: ProfileSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileSchemaInclude<ExtArgs> | null
    /**
     * Filter, which ProfileSchema to fetch.
     */
    where: ProfileSchemaWhereUniqueInput
  }

  /**
   * ProfileSchema findUniqueOrThrow
   */
  export type ProfileSchemaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileSchema
     */
    select?: ProfileSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileSchema
     */
    omit?: ProfileSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileSchemaInclude<ExtArgs> | null
    /**
     * Filter, which ProfileSchema to fetch.
     */
    where: ProfileSchemaWhereUniqueInput
  }

  /**
   * ProfileSchema findFirst
   */
  export type ProfileSchemaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileSchema
     */
    select?: ProfileSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileSchema
     */
    omit?: ProfileSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileSchemaInclude<ExtArgs> | null
    /**
     * Filter, which ProfileSchema to fetch.
     */
    where?: ProfileSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileSchemas to fetch.
     */
    orderBy?: ProfileSchemaOrderByWithRelationInput | ProfileSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfileSchemas.
     */
    cursor?: ProfileSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfileSchemas.
     */
    distinct?: ProfileSchemaScalarFieldEnum | ProfileSchemaScalarFieldEnum[]
  }

  /**
   * ProfileSchema findFirstOrThrow
   */
  export type ProfileSchemaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileSchema
     */
    select?: ProfileSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileSchema
     */
    omit?: ProfileSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileSchemaInclude<ExtArgs> | null
    /**
     * Filter, which ProfileSchema to fetch.
     */
    where?: ProfileSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileSchemas to fetch.
     */
    orderBy?: ProfileSchemaOrderByWithRelationInput | ProfileSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfileSchemas.
     */
    cursor?: ProfileSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfileSchemas.
     */
    distinct?: ProfileSchemaScalarFieldEnum | ProfileSchemaScalarFieldEnum[]
  }

  /**
   * ProfileSchema findMany
   */
  export type ProfileSchemaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileSchema
     */
    select?: ProfileSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileSchema
     */
    omit?: ProfileSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileSchemaInclude<ExtArgs> | null
    /**
     * Filter, which ProfileSchemas to fetch.
     */
    where?: ProfileSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileSchemas to fetch.
     */
    orderBy?: ProfileSchemaOrderByWithRelationInput | ProfileSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProfileSchemas.
     */
    cursor?: ProfileSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileSchemas.
     */
    skip?: number
    distinct?: ProfileSchemaScalarFieldEnum | ProfileSchemaScalarFieldEnum[]
  }

  /**
   * ProfileSchema create
   */
  export type ProfileSchemaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileSchema
     */
    select?: ProfileSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileSchema
     */
    omit?: ProfileSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileSchemaInclude<ExtArgs> | null
    /**
     * The data needed to create a ProfileSchema.
     */
    data: XOR<ProfileSchemaCreateInput, ProfileSchemaUncheckedCreateInput>
  }

  /**
   * ProfileSchema createMany
   */
  export type ProfileSchemaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfileSchemas.
     */
    data: ProfileSchemaCreateManyInput | ProfileSchemaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfileSchema createManyAndReturn
   */
  export type ProfileSchemaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileSchema
     */
    select?: ProfileSchemaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileSchema
     */
    omit?: ProfileSchemaOmit<ExtArgs> | null
    /**
     * The data used to create many ProfileSchemas.
     */
    data: ProfileSchemaCreateManyInput | ProfileSchemaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileSchemaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfileSchema update
   */
  export type ProfileSchemaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileSchema
     */
    select?: ProfileSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileSchema
     */
    omit?: ProfileSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileSchemaInclude<ExtArgs> | null
    /**
     * The data needed to update a ProfileSchema.
     */
    data: XOR<ProfileSchemaUpdateInput, ProfileSchemaUncheckedUpdateInput>
    /**
     * Choose, which ProfileSchema to update.
     */
    where: ProfileSchemaWhereUniqueInput
  }

  /**
   * ProfileSchema updateMany
   */
  export type ProfileSchemaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfileSchemas.
     */
    data: XOR<ProfileSchemaUpdateManyMutationInput, ProfileSchemaUncheckedUpdateManyInput>
    /**
     * Filter which ProfileSchemas to update
     */
    where?: ProfileSchemaWhereInput
    /**
     * Limit how many ProfileSchemas to update.
     */
    limit?: number
  }

  /**
   * ProfileSchema updateManyAndReturn
   */
  export type ProfileSchemaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileSchema
     */
    select?: ProfileSchemaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileSchema
     */
    omit?: ProfileSchemaOmit<ExtArgs> | null
    /**
     * The data used to update ProfileSchemas.
     */
    data: XOR<ProfileSchemaUpdateManyMutationInput, ProfileSchemaUncheckedUpdateManyInput>
    /**
     * Filter which ProfileSchemas to update
     */
    where?: ProfileSchemaWhereInput
    /**
     * Limit how many ProfileSchemas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileSchemaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfileSchema upsert
   */
  export type ProfileSchemaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileSchema
     */
    select?: ProfileSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileSchema
     */
    omit?: ProfileSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileSchemaInclude<ExtArgs> | null
    /**
     * The filter to search for the ProfileSchema to update in case it exists.
     */
    where: ProfileSchemaWhereUniqueInput
    /**
     * In case the ProfileSchema found by the `where` argument doesn't exist, create a new ProfileSchema with this data.
     */
    create: XOR<ProfileSchemaCreateInput, ProfileSchemaUncheckedCreateInput>
    /**
     * In case the ProfileSchema was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileSchemaUpdateInput, ProfileSchemaUncheckedUpdateInput>
  }

  /**
   * ProfileSchema delete
   */
  export type ProfileSchemaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileSchema
     */
    select?: ProfileSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileSchema
     */
    omit?: ProfileSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileSchemaInclude<ExtArgs> | null
    /**
     * Filter which ProfileSchema to delete.
     */
    where: ProfileSchemaWhereUniqueInput
  }

  /**
   * ProfileSchema deleteMany
   */
  export type ProfileSchemaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileSchemas to delete
     */
    where?: ProfileSchemaWhereInput
    /**
     * Limit how many ProfileSchemas to delete.
     */
    limit?: number
  }

  /**
   * ProfileSchema.applyJobs
   */
  export type ProfileSchema$applyJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplyJob
     */
    select?: ApplyJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplyJob
     */
    omit?: ApplyJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplyJobInclude<ExtArgs> | null
    where?: ApplyJobWhereInput
    orderBy?: ApplyJobOrderByWithRelationInput | ApplyJobOrderByWithRelationInput[]
    cursor?: ApplyJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplyJobScalarFieldEnum | ApplyJobScalarFieldEnum[]
  }

  /**
   * ProfileSchema without action
   */
  export type ProfileSchemaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileSchema
     */
    select?: ProfileSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileSchema
     */
    omit?: ProfileSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileSchemaInclude<ExtArgs> | null
  }


  /**
   * Model JobSchema
   */

  export type AggregateJobSchema = {
    _count: JobSchemaCountAggregateOutputType | null
    _avg: JobSchemaAvgAggregateOutputType | null
    _sum: JobSchemaSumAggregateOutputType | null
    _min: JobSchemaMinAggregateOutputType | null
    _max: JobSchemaMaxAggregateOutputType | null
  }

  export type JobSchemaAvgAggregateOutputType = {
    job_id: number | null
    clientid: number | null
  }

  export type JobSchemaSumAggregateOutputType = {
    job_id: number | null
    clientid: number | null
  }

  export type JobSchemaMinAggregateOutputType = {
    job_id: number | null
    clientid: number | null
    Job_titile: string | null
    Job_description: string | null
    Budget: string | null
    Timeline: string | null
  }

  export type JobSchemaMaxAggregateOutputType = {
    job_id: number | null
    clientid: number | null
    Job_titile: string | null
    Job_description: string | null
    Budget: string | null
    Timeline: string | null
  }

  export type JobSchemaCountAggregateOutputType = {
    job_id: number
    clientid: number
    Job_titile: number
    Job_description: number
    Budget: number
    Timeline: number
    _all: number
  }


  export type JobSchemaAvgAggregateInputType = {
    job_id?: true
    clientid?: true
  }

  export type JobSchemaSumAggregateInputType = {
    job_id?: true
    clientid?: true
  }

  export type JobSchemaMinAggregateInputType = {
    job_id?: true
    clientid?: true
    Job_titile?: true
    Job_description?: true
    Budget?: true
    Timeline?: true
  }

  export type JobSchemaMaxAggregateInputType = {
    job_id?: true
    clientid?: true
    Job_titile?: true
    Job_description?: true
    Budget?: true
    Timeline?: true
  }

  export type JobSchemaCountAggregateInputType = {
    job_id?: true
    clientid?: true
    Job_titile?: true
    Job_description?: true
    Budget?: true
    Timeline?: true
    _all?: true
  }

  export type JobSchemaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobSchema to aggregate.
     */
    where?: JobSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobSchemas to fetch.
     */
    orderBy?: JobSchemaOrderByWithRelationInput | JobSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobSchemas
    **/
    _count?: true | JobSchemaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobSchemaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobSchemaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobSchemaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobSchemaMaxAggregateInputType
  }

  export type GetJobSchemaAggregateType<T extends JobSchemaAggregateArgs> = {
        [P in keyof T & keyof AggregateJobSchema]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobSchema[P]>
      : GetScalarType<T[P], AggregateJobSchema[P]>
  }




  export type JobSchemaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobSchemaWhereInput
    orderBy?: JobSchemaOrderByWithAggregationInput | JobSchemaOrderByWithAggregationInput[]
    by: JobSchemaScalarFieldEnum[] | JobSchemaScalarFieldEnum
    having?: JobSchemaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobSchemaCountAggregateInputType | true
    _avg?: JobSchemaAvgAggregateInputType
    _sum?: JobSchemaSumAggregateInputType
    _min?: JobSchemaMinAggregateInputType
    _max?: JobSchemaMaxAggregateInputType
  }

  export type JobSchemaGroupByOutputType = {
    job_id: number
    clientid: number
    Job_titile: string
    Job_description: string
    Budget: string
    Timeline: string
    _count: JobSchemaCountAggregateOutputType | null
    _avg: JobSchemaAvgAggregateOutputType | null
    _sum: JobSchemaSumAggregateOutputType | null
    _min: JobSchemaMinAggregateOutputType | null
    _max: JobSchemaMaxAggregateOutputType | null
  }

  type GetJobSchemaGroupByPayload<T extends JobSchemaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobSchemaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobSchemaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobSchemaGroupByOutputType[P]>
            : GetScalarType<T[P], JobSchemaGroupByOutputType[P]>
        }
      >
    >


  export type JobSchemaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    job_id?: boolean
    clientid?: boolean
    Job_titile?: boolean
    Job_description?: boolean
    Budget?: boolean
    Timeline?: boolean
    client?: boolean | ClientSchemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobSchema"]>

  export type JobSchemaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    job_id?: boolean
    clientid?: boolean
    Job_titile?: boolean
    Job_description?: boolean
    Budget?: boolean
    Timeline?: boolean
    client?: boolean | ClientSchemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobSchema"]>

  export type JobSchemaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    job_id?: boolean
    clientid?: boolean
    Job_titile?: boolean
    Job_description?: boolean
    Budget?: boolean
    Timeline?: boolean
    client?: boolean | ClientSchemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobSchema"]>

  export type JobSchemaSelectScalar = {
    job_id?: boolean
    clientid?: boolean
    Job_titile?: boolean
    Job_description?: boolean
    Budget?: boolean
    Timeline?: boolean
  }

  export type JobSchemaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"job_id" | "clientid" | "Job_titile" | "Job_description" | "Budget" | "Timeline", ExtArgs["result"]["jobSchema"]>
  export type JobSchemaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientSchemaDefaultArgs<ExtArgs>
  }
  export type JobSchemaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientSchemaDefaultArgs<ExtArgs>
  }
  export type JobSchemaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientSchemaDefaultArgs<ExtArgs>
  }

  export type $JobSchemaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobSchema"
    objects: {
      client: Prisma.$ClientSchemaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      job_id: number
      clientid: number
      Job_titile: string
      Job_description: string
      Budget: string
      Timeline: string
    }, ExtArgs["result"]["jobSchema"]>
    composites: {}
  }

  type JobSchemaGetPayload<S extends boolean | null | undefined | JobSchemaDefaultArgs> = $Result.GetResult<Prisma.$JobSchemaPayload, S>

  type JobSchemaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobSchemaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobSchemaCountAggregateInputType | true
    }

  export interface JobSchemaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobSchema'], meta: { name: 'JobSchema' } }
    /**
     * Find zero or one JobSchema that matches the filter.
     * @param {JobSchemaFindUniqueArgs} args - Arguments to find a JobSchema
     * @example
     * // Get one JobSchema
     * const jobSchema = await prisma.jobSchema.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobSchemaFindUniqueArgs>(args: SelectSubset<T, JobSchemaFindUniqueArgs<ExtArgs>>): Prisma__JobSchemaClient<$Result.GetResult<Prisma.$JobSchemaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobSchema that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobSchemaFindUniqueOrThrowArgs} args - Arguments to find a JobSchema
     * @example
     * // Get one JobSchema
     * const jobSchema = await prisma.jobSchema.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobSchemaFindUniqueOrThrowArgs>(args: SelectSubset<T, JobSchemaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobSchemaClient<$Result.GetResult<Prisma.$JobSchemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobSchema that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSchemaFindFirstArgs} args - Arguments to find a JobSchema
     * @example
     * // Get one JobSchema
     * const jobSchema = await prisma.jobSchema.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobSchemaFindFirstArgs>(args?: SelectSubset<T, JobSchemaFindFirstArgs<ExtArgs>>): Prisma__JobSchemaClient<$Result.GetResult<Prisma.$JobSchemaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobSchema that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSchemaFindFirstOrThrowArgs} args - Arguments to find a JobSchema
     * @example
     * // Get one JobSchema
     * const jobSchema = await prisma.jobSchema.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobSchemaFindFirstOrThrowArgs>(args?: SelectSubset<T, JobSchemaFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobSchemaClient<$Result.GetResult<Prisma.$JobSchemaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobSchemas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSchemaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobSchemas
     * const jobSchemas = await prisma.jobSchema.findMany()
     * 
     * // Get first 10 JobSchemas
     * const jobSchemas = await prisma.jobSchema.findMany({ take: 10 })
     * 
     * // Only select the `job_id`
     * const jobSchemaWithJob_idOnly = await prisma.jobSchema.findMany({ select: { job_id: true } })
     * 
     */
    findMany<T extends JobSchemaFindManyArgs>(args?: SelectSubset<T, JobSchemaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobSchemaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobSchema.
     * @param {JobSchemaCreateArgs} args - Arguments to create a JobSchema.
     * @example
     * // Create one JobSchema
     * const JobSchema = await prisma.jobSchema.create({
     *   data: {
     *     // ... data to create a JobSchema
     *   }
     * })
     * 
     */
    create<T extends JobSchemaCreateArgs>(args: SelectSubset<T, JobSchemaCreateArgs<ExtArgs>>): Prisma__JobSchemaClient<$Result.GetResult<Prisma.$JobSchemaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobSchemas.
     * @param {JobSchemaCreateManyArgs} args - Arguments to create many JobSchemas.
     * @example
     * // Create many JobSchemas
     * const jobSchema = await prisma.jobSchema.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobSchemaCreateManyArgs>(args?: SelectSubset<T, JobSchemaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobSchemas and returns the data saved in the database.
     * @param {JobSchemaCreateManyAndReturnArgs} args - Arguments to create many JobSchemas.
     * @example
     * // Create many JobSchemas
     * const jobSchema = await prisma.jobSchema.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobSchemas and only return the `job_id`
     * const jobSchemaWithJob_idOnly = await prisma.jobSchema.createManyAndReturn({
     *   select: { job_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobSchemaCreateManyAndReturnArgs>(args?: SelectSubset<T, JobSchemaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobSchemaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobSchema.
     * @param {JobSchemaDeleteArgs} args - Arguments to delete one JobSchema.
     * @example
     * // Delete one JobSchema
     * const JobSchema = await prisma.jobSchema.delete({
     *   where: {
     *     // ... filter to delete one JobSchema
     *   }
     * })
     * 
     */
    delete<T extends JobSchemaDeleteArgs>(args: SelectSubset<T, JobSchemaDeleteArgs<ExtArgs>>): Prisma__JobSchemaClient<$Result.GetResult<Prisma.$JobSchemaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobSchema.
     * @param {JobSchemaUpdateArgs} args - Arguments to update one JobSchema.
     * @example
     * // Update one JobSchema
     * const jobSchema = await prisma.jobSchema.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobSchemaUpdateArgs>(args: SelectSubset<T, JobSchemaUpdateArgs<ExtArgs>>): Prisma__JobSchemaClient<$Result.GetResult<Prisma.$JobSchemaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobSchemas.
     * @param {JobSchemaDeleteManyArgs} args - Arguments to filter JobSchemas to delete.
     * @example
     * // Delete a few JobSchemas
     * const { count } = await prisma.jobSchema.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobSchemaDeleteManyArgs>(args?: SelectSubset<T, JobSchemaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobSchemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSchemaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobSchemas
     * const jobSchema = await prisma.jobSchema.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobSchemaUpdateManyArgs>(args: SelectSubset<T, JobSchemaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobSchemas and returns the data updated in the database.
     * @param {JobSchemaUpdateManyAndReturnArgs} args - Arguments to update many JobSchemas.
     * @example
     * // Update many JobSchemas
     * const jobSchema = await prisma.jobSchema.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobSchemas and only return the `job_id`
     * const jobSchemaWithJob_idOnly = await prisma.jobSchema.updateManyAndReturn({
     *   select: { job_id: true },
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
    updateManyAndReturn<T extends JobSchemaUpdateManyAndReturnArgs>(args: SelectSubset<T, JobSchemaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobSchemaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobSchema.
     * @param {JobSchemaUpsertArgs} args - Arguments to update or create a JobSchema.
     * @example
     * // Update or create a JobSchema
     * const jobSchema = await prisma.jobSchema.upsert({
     *   create: {
     *     // ... data to create a JobSchema
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobSchema we want to update
     *   }
     * })
     */
    upsert<T extends JobSchemaUpsertArgs>(args: SelectSubset<T, JobSchemaUpsertArgs<ExtArgs>>): Prisma__JobSchemaClient<$Result.GetResult<Prisma.$JobSchemaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobSchemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSchemaCountArgs} args - Arguments to filter JobSchemas to count.
     * @example
     * // Count the number of JobSchemas
     * const count = await prisma.jobSchema.count({
     *   where: {
     *     // ... the filter for the JobSchemas we want to count
     *   }
     * })
    **/
    count<T extends JobSchemaCountArgs>(
      args?: Subset<T, JobSchemaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobSchemaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobSchema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSchemaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobSchemaAggregateArgs>(args: Subset<T, JobSchemaAggregateArgs>): Prisma.PrismaPromise<GetJobSchemaAggregateType<T>>

    /**
     * Group by JobSchema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSchemaGroupByArgs} args - Group by arguments.
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
      T extends JobSchemaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobSchemaGroupByArgs['orderBy'] }
        : { orderBy?: JobSchemaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobSchemaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobSchemaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobSchema model
   */
  readonly fields: JobSchemaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobSchema.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobSchemaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientSchemaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientSchemaDefaultArgs<ExtArgs>>): Prisma__ClientSchemaClient<$Result.GetResult<Prisma.$ClientSchemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the JobSchema model
   */ 
  interface JobSchemaFieldRefs {
    readonly job_id: FieldRef<"JobSchema", 'Int'>
    readonly clientid: FieldRef<"JobSchema", 'Int'>
    readonly Job_titile: FieldRef<"JobSchema", 'String'>
    readonly Job_description: FieldRef<"JobSchema", 'String'>
    readonly Budget: FieldRef<"JobSchema", 'String'>
    readonly Timeline: FieldRef<"JobSchema", 'String'>
  }
    

  // Custom InputTypes
  /**
   * JobSchema findUnique
   */
  export type JobSchemaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSchema
     */
    select?: JobSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSchema
     */
    omit?: JobSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSchemaInclude<ExtArgs> | null
    /**
     * Filter, which JobSchema to fetch.
     */
    where: JobSchemaWhereUniqueInput
  }

  /**
   * JobSchema findUniqueOrThrow
   */
  export type JobSchemaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSchema
     */
    select?: JobSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSchema
     */
    omit?: JobSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSchemaInclude<ExtArgs> | null
    /**
     * Filter, which JobSchema to fetch.
     */
    where: JobSchemaWhereUniqueInput
  }

  /**
   * JobSchema findFirst
   */
  export type JobSchemaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSchema
     */
    select?: JobSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSchema
     */
    omit?: JobSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSchemaInclude<ExtArgs> | null
    /**
     * Filter, which JobSchema to fetch.
     */
    where?: JobSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobSchemas to fetch.
     */
    orderBy?: JobSchemaOrderByWithRelationInput | JobSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobSchemas.
     */
    cursor?: JobSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobSchemas.
     */
    distinct?: JobSchemaScalarFieldEnum | JobSchemaScalarFieldEnum[]
  }

  /**
   * JobSchema findFirstOrThrow
   */
  export type JobSchemaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSchema
     */
    select?: JobSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSchema
     */
    omit?: JobSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSchemaInclude<ExtArgs> | null
    /**
     * Filter, which JobSchema to fetch.
     */
    where?: JobSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobSchemas to fetch.
     */
    orderBy?: JobSchemaOrderByWithRelationInput | JobSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobSchemas.
     */
    cursor?: JobSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobSchemas.
     */
    distinct?: JobSchemaScalarFieldEnum | JobSchemaScalarFieldEnum[]
  }

  /**
   * JobSchema findMany
   */
  export type JobSchemaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSchema
     */
    select?: JobSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSchema
     */
    omit?: JobSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSchemaInclude<ExtArgs> | null
    /**
     * Filter, which JobSchemas to fetch.
     */
    where?: JobSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobSchemas to fetch.
     */
    orderBy?: JobSchemaOrderByWithRelationInput | JobSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobSchemas.
     */
    cursor?: JobSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobSchemas.
     */
    skip?: number
    distinct?: JobSchemaScalarFieldEnum | JobSchemaScalarFieldEnum[]
  }

  /**
   * JobSchema create
   */
  export type JobSchemaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSchema
     */
    select?: JobSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSchema
     */
    omit?: JobSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSchemaInclude<ExtArgs> | null
    /**
     * The data needed to create a JobSchema.
     */
    data: XOR<JobSchemaCreateInput, JobSchemaUncheckedCreateInput>
  }

  /**
   * JobSchema createMany
   */
  export type JobSchemaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobSchemas.
     */
    data: JobSchemaCreateManyInput | JobSchemaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobSchema createManyAndReturn
   */
  export type JobSchemaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSchema
     */
    select?: JobSchemaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobSchema
     */
    omit?: JobSchemaOmit<ExtArgs> | null
    /**
     * The data used to create many JobSchemas.
     */
    data: JobSchemaCreateManyInput | JobSchemaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSchemaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobSchema update
   */
  export type JobSchemaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSchema
     */
    select?: JobSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSchema
     */
    omit?: JobSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSchemaInclude<ExtArgs> | null
    /**
     * The data needed to update a JobSchema.
     */
    data: XOR<JobSchemaUpdateInput, JobSchemaUncheckedUpdateInput>
    /**
     * Choose, which JobSchema to update.
     */
    where: JobSchemaWhereUniqueInput
  }

  /**
   * JobSchema updateMany
   */
  export type JobSchemaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobSchemas.
     */
    data: XOR<JobSchemaUpdateManyMutationInput, JobSchemaUncheckedUpdateManyInput>
    /**
     * Filter which JobSchemas to update
     */
    where?: JobSchemaWhereInput
    /**
     * Limit how many JobSchemas to update.
     */
    limit?: number
  }

  /**
   * JobSchema updateManyAndReturn
   */
  export type JobSchemaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSchema
     */
    select?: JobSchemaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobSchema
     */
    omit?: JobSchemaOmit<ExtArgs> | null
    /**
     * The data used to update JobSchemas.
     */
    data: XOR<JobSchemaUpdateManyMutationInput, JobSchemaUncheckedUpdateManyInput>
    /**
     * Filter which JobSchemas to update
     */
    where?: JobSchemaWhereInput
    /**
     * Limit how many JobSchemas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSchemaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobSchema upsert
   */
  export type JobSchemaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSchema
     */
    select?: JobSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSchema
     */
    omit?: JobSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSchemaInclude<ExtArgs> | null
    /**
     * The filter to search for the JobSchema to update in case it exists.
     */
    where: JobSchemaWhereUniqueInput
    /**
     * In case the JobSchema found by the `where` argument doesn't exist, create a new JobSchema with this data.
     */
    create: XOR<JobSchemaCreateInput, JobSchemaUncheckedCreateInput>
    /**
     * In case the JobSchema was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobSchemaUpdateInput, JobSchemaUncheckedUpdateInput>
  }

  /**
   * JobSchema delete
   */
  export type JobSchemaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSchema
     */
    select?: JobSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSchema
     */
    omit?: JobSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSchemaInclude<ExtArgs> | null
    /**
     * Filter which JobSchema to delete.
     */
    where: JobSchemaWhereUniqueInput
  }

  /**
   * JobSchema deleteMany
   */
  export type JobSchemaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobSchemas to delete
     */
    where?: JobSchemaWhereInput
    /**
     * Limit how many JobSchemas to delete.
     */
    limit?: number
  }

  /**
   * JobSchema without action
   */
  export type JobSchemaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSchema
     */
    select?: JobSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSchema
     */
    omit?: JobSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSchemaInclude<ExtArgs> | null
  }


  /**
   * Model ApplyJob
   */

  export type AggregateApplyJob = {
    _count: ApplyJobCountAggregateOutputType | null
    _avg: ApplyJobAvgAggregateOutputType | null
    _sum: ApplyJobSumAggregateOutputType | null
    _min: ApplyJobMinAggregateOutputType | null
    _max: ApplyJobMaxAggregateOutputType | null
  }

  export type ApplyJobAvgAggregateOutputType = {
    applyjobid: number | null
    clientid: number | null
    userid: number | null
  }

  export type ApplyJobSumAggregateOutputType = {
    applyjobid: number | null
    clientid: number | null
    userid: number | null
  }

  export type ApplyJobMinAggregateOutputType = {
    applyjobid: number | null
    clientid: number | null
    userid: number | null
    jobtitle: string | null
    budget: string | null
    timeline: string | null
  }

  export type ApplyJobMaxAggregateOutputType = {
    applyjobid: number | null
    clientid: number | null
    userid: number | null
    jobtitle: string | null
    budget: string | null
    timeline: string | null
  }

  export type ApplyJobCountAggregateOutputType = {
    applyjobid: number
    clientid: number
    userid: number
    jobtitle: number
    budget: number
    timeline: number
    _all: number
  }


  export type ApplyJobAvgAggregateInputType = {
    applyjobid?: true
    clientid?: true
    userid?: true
  }

  export type ApplyJobSumAggregateInputType = {
    applyjobid?: true
    clientid?: true
    userid?: true
  }

  export type ApplyJobMinAggregateInputType = {
    applyjobid?: true
    clientid?: true
    userid?: true
    jobtitle?: true
    budget?: true
    timeline?: true
  }

  export type ApplyJobMaxAggregateInputType = {
    applyjobid?: true
    clientid?: true
    userid?: true
    jobtitle?: true
    budget?: true
    timeline?: true
  }

  export type ApplyJobCountAggregateInputType = {
    applyjobid?: true
    clientid?: true
    userid?: true
    jobtitle?: true
    budget?: true
    timeline?: true
    _all?: true
  }

  export type ApplyJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplyJob to aggregate.
     */
    where?: ApplyJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplyJobs to fetch.
     */
    orderBy?: ApplyJobOrderByWithRelationInput | ApplyJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplyJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplyJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplyJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApplyJobs
    **/
    _count?: true | ApplyJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplyJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplyJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplyJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplyJobMaxAggregateInputType
  }

  export type GetApplyJobAggregateType<T extends ApplyJobAggregateArgs> = {
        [P in keyof T & keyof AggregateApplyJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplyJob[P]>
      : GetScalarType<T[P], AggregateApplyJob[P]>
  }




  export type ApplyJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplyJobWhereInput
    orderBy?: ApplyJobOrderByWithAggregationInput | ApplyJobOrderByWithAggregationInput[]
    by: ApplyJobScalarFieldEnum[] | ApplyJobScalarFieldEnum
    having?: ApplyJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplyJobCountAggregateInputType | true
    _avg?: ApplyJobAvgAggregateInputType
    _sum?: ApplyJobSumAggregateInputType
    _min?: ApplyJobMinAggregateInputType
    _max?: ApplyJobMaxAggregateInputType
  }

  export type ApplyJobGroupByOutputType = {
    applyjobid: number
    clientid: number
    userid: number
    jobtitle: string
    budget: string
    timeline: string
    _count: ApplyJobCountAggregateOutputType | null
    _avg: ApplyJobAvgAggregateOutputType | null
    _sum: ApplyJobSumAggregateOutputType | null
    _min: ApplyJobMinAggregateOutputType | null
    _max: ApplyJobMaxAggregateOutputType | null
  }

  type GetApplyJobGroupByPayload<T extends ApplyJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplyJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplyJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplyJobGroupByOutputType[P]>
            : GetScalarType<T[P], ApplyJobGroupByOutputType[P]>
        }
      >
    >


  export type ApplyJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    applyjobid?: boolean
    clientid?: boolean
    userid?: boolean
    jobtitle?: boolean
    budget?: boolean
    timeline?: boolean
    user?: boolean | UserSchemaDefaultArgs<ExtArgs>
    client?: boolean | ClientSchemaDefaultArgs<ExtArgs>
    profile?: boolean | ProfileSchemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applyJob"]>

  export type ApplyJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    applyjobid?: boolean
    clientid?: boolean
    userid?: boolean
    jobtitle?: boolean
    budget?: boolean
    timeline?: boolean
    user?: boolean | UserSchemaDefaultArgs<ExtArgs>
    client?: boolean | ClientSchemaDefaultArgs<ExtArgs>
    profile?: boolean | ProfileSchemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applyJob"]>

  export type ApplyJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    applyjobid?: boolean
    clientid?: boolean
    userid?: boolean
    jobtitle?: boolean
    budget?: boolean
    timeline?: boolean
    user?: boolean | UserSchemaDefaultArgs<ExtArgs>
    client?: boolean | ClientSchemaDefaultArgs<ExtArgs>
    profile?: boolean | ProfileSchemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applyJob"]>

  export type ApplyJobSelectScalar = {
    applyjobid?: boolean
    clientid?: boolean
    userid?: boolean
    jobtitle?: boolean
    budget?: boolean
    timeline?: boolean
  }

  export type ApplyJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"applyjobid" | "clientid" | "userid" | "jobtitle" | "budget" | "timeline", ExtArgs["result"]["applyJob"]>
  export type ApplyJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserSchemaDefaultArgs<ExtArgs>
    client?: boolean | ClientSchemaDefaultArgs<ExtArgs>
    profile?: boolean | ProfileSchemaDefaultArgs<ExtArgs>
  }
  export type ApplyJobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserSchemaDefaultArgs<ExtArgs>
    client?: boolean | ClientSchemaDefaultArgs<ExtArgs>
    profile?: boolean | ProfileSchemaDefaultArgs<ExtArgs>
  }
  export type ApplyJobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserSchemaDefaultArgs<ExtArgs>
    client?: boolean | ClientSchemaDefaultArgs<ExtArgs>
    profile?: boolean | ProfileSchemaDefaultArgs<ExtArgs>
  }

  export type $ApplyJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApplyJob"
    objects: {
      user: Prisma.$UserSchemaPayload<ExtArgs>
      client: Prisma.$ClientSchemaPayload<ExtArgs>
      profile: Prisma.$ProfileSchemaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      applyjobid: number
      clientid: number
      userid: number
      jobtitle: string
      budget: string
      timeline: string
    }, ExtArgs["result"]["applyJob"]>
    composites: {}
  }

  type ApplyJobGetPayload<S extends boolean | null | undefined | ApplyJobDefaultArgs> = $Result.GetResult<Prisma.$ApplyJobPayload, S>

  type ApplyJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplyJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplyJobCountAggregateInputType | true
    }

  export interface ApplyJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApplyJob'], meta: { name: 'ApplyJob' } }
    /**
     * Find zero or one ApplyJob that matches the filter.
     * @param {ApplyJobFindUniqueArgs} args - Arguments to find a ApplyJob
     * @example
     * // Get one ApplyJob
     * const applyJob = await prisma.applyJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplyJobFindUniqueArgs>(args: SelectSubset<T, ApplyJobFindUniqueArgs<ExtArgs>>): Prisma__ApplyJobClient<$Result.GetResult<Prisma.$ApplyJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApplyJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplyJobFindUniqueOrThrowArgs} args - Arguments to find a ApplyJob
     * @example
     * // Get one ApplyJob
     * const applyJob = await prisma.applyJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplyJobFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplyJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplyJobClient<$Result.GetResult<Prisma.$ApplyJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApplyJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplyJobFindFirstArgs} args - Arguments to find a ApplyJob
     * @example
     * // Get one ApplyJob
     * const applyJob = await prisma.applyJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplyJobFindFirstArgs>(args?: SelectSubset<T, ApplyJobFindFirstArgs<ExtArgs>>): Prisma__ApplyJobClient<$Result.GetResult<Prisma.$ApplyJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApplyJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplyJobFindFirstOrThrowArgs} args - Arguments to find a ApplyJob
     * @example
     * // Get one ApplyJob
     * const applyJob = await prisma.applyJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplyJobFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplyJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplyJobClient<$Result.GetResult<Prisma.$ApplyJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApplyJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplyJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApplyJobs
     * const applyJobs = await prisma.applyJob.findMany()
     * 
     * // Get first 10 ApplyJobs
     * const applyJobs = await prisma.applyJob.findMany({ take: 10 })
     * 
     * // Only select the `applyjobid`
     * const applyJobWithApplyjobidOnly = await prisma.applyJob.findMany({ select: { applyjobid: true } })
     * 
     */
    findMany<T extends ApplyJobFindManyArgs>(args?: SelectSubset<T, ApplyJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplyJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApplyJob.
     * @param {ApplyJobCreateArgs} args - Arguments to create a ApplyJob.
     * @example
     * // Create one ApplyJob
     * const ApplyJob = await prisma.applyJob.create({
     *   data: {
     *     // ... data to create a ApplyJob
     *   }
     * })
     * 
     */
    create<T extends ApplyJobCreateArgs>(args: SelectSubset<T, ApplyJobCreateArgs<ExtArgs>>): Prisma__ApplyJobClient<$Result.GetResult<Prisma.$ApplyJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApplyJobs.
     * @param {ApplyJobCreateManyArgs} args - Arguments to create many ApplyJobs.
     * @example
     * // Create many ApplyJobs
     * const applyJob = await prisma.applyJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplyJobCreateManyArgs>(args?: SelectSubset<T, ApplyJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApplyJobs and returns the data saved in the database.
     * @param {ApplyJobCreateManyAndReturnArgs} args - Arguments to create many ApplyJobs.
     * @example
     * // Create many ApplyJobs
     * const applyJob = await prisma.applyJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApplyJobs and only return the `applyjobid`
     * const applyJobWithApplyjobidOnly = await prisma.applyJob.createManyAndReturn({
     *   select: { applyjobid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplyJobCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplyJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplyJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApplyJob.
     * @param {ApplyJobDeleteArgs} args - Arguments to delete one ApplyJob.
     * @example
     * // Delete one ApplyJob
     * const ApplyJob = await prisma.applyJob.delete({
     *   where: {
     *     // ... filter to delete one ApplyJob
     *   }
     * })
     * 
     */
    delete<T extends ApplyJobDeleteArgs>(args: SelectSubset<T, ApplyJobDeleteArgs<ExtArgs>>): Prisma__ApplyJobClient<$Result.GetResult<Prisma.$ApplyJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApplyJob.
     * @param {ApplyJobUpdateArgs} args - Arguments to update one ApplyJob.
     * @example
     * // Update one ApplyJob
     * const applyJob = await prisma.applyJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplyJobUpdateArgs>(args: SelectSubset<T, ApplyJobUpdateArgs<ExtArgs>>): Prisma__ApplyJobClient<$Result.GetResult<Prisma.$ApplyJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApplyJobs.
     * @param {ApplyJobDeleteManyArgs} args - Arguments to filter ApplyJobs to delete.
     * @example
     * // Delete a few ApplyJobs
     * const { count } = await prisma.applyJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplyJobDeleteManyArgs>(args?: SelectSubset<T, ApplyJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApplyJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplyJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApplyJobs
     * const applyJob = await prisma.applyJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplyJobUpdateManyArgs>(args: SelectSubset<T, ApplyJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApplyJobs and returns the data updated in the database.
     * @param {ApplyJobUpdateManyAndReturnArgs} args - Arguments to update many ApplyJobs.
     * @example
     * // Update many ApplyJobs
     * const applyJob = await prisma.applyJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApplyJobs and only return the `applyjobid`
     * const applyJobWithApplyjobidOnly = await prisma.applyJob.updateManyAndReturn({
     *   select: { applyjobid: true },
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
    updateManyAndReturn<T extends ApplyJobUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplyJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplyJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApplyJob.
     * @param {ApplyJobUpsertArgs} args - Arguments to update or create a ApplyJob.
     * @example
     * // Update or create a ApplyJob
     * const applyJob = await prisma.applyJob.upsert({
     *   create: {
     *     // ... data to create a ApplyJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApplyJob we want to update
     *   }
     * })
     */
    upsert<T extends ApplyJobUpsertArgs>(args: SelectSubset<T, ApplyJobUpsertArgs<ExtArgs>>): Prisma__ApplyJobClient<$Result.GetResult<Prisma.$ApplyJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApplyJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplyJobCountArgs} args - Arguments to filter ApplyJobs to count.
     * @example
     * // Count the number of ApplyJobs
     * const count = await prisma.applyJob.count({
     *   where: {
     *     // ... the filter for the ApplyJobs we want to count
     *   }
     * })
    **/
    count<T extends ApplyJobCountArgs>(
      args?: Subset<T, ApplyJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplyJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApplyJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplyJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApplyJobAggregateArgs>(args: Subset<T, ApplyJobAggregateArgs>): Prisma.PrismaPromise<GetApplyJobAggregateType<T>>

    /**
     * Group by ApplyJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplyJobGroupByArgs} args - Group by arguments.
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
      T extends ApplyJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplyJobGroupByArgs['orderBy'] }
        : { orderBy?: ApplyJobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApplyJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplyJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApplyJob model
   */
  readonly fields: ApplyJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApplyJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplyJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserSchemaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserSchemaDefaultArgs<ExtArgs>>): Prisma__UserSchemaClient<$Result.GetResult<Prisma.$UserSchemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    client<T extends ClientSchemaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientSchemaDefaultArgs<ExtArgs>>): Prisma__ClientSchemaClient<$Result.GetResult<Prisma.$ClientSchemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profile<T extends ProfileSchemaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileSchemaDefaultArgs<ExtArgs>>): Prisma__ProfileSchemaClient<$Result.GetResult<Prisma.$ProfileSchemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ApplyJob model
   */ 
  interface ApplyJobFieldRefs {
    readonly applyjobid: FieldRef<"ApplyJob", 'Int'>
    readonly clientid: FieldRef<"ApplyJob", 'Int'>
    readonly userid: FieldRef<"ApplyJob", 'Int'>
    readonly jobtitle: FieldRef<"ApplyJob", 'String'>
    readonly budget: FieldRef<"ApplyJob", 'String'>
    readonly timeline: FieldRef<"ApplyJob", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ApplyJob findUnique
   */
  export type ApplyJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplyJob
     */
    select?: ApplyJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplyJob
     */
    omit?: ApplyJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplyJobInclude<ExtArgs> | null
    /**
     * Filter, which ApplyJob to fetch.
     */
    where: ApplyJobWhereUniqueInput
  }

  /**
   * ApplyJob findUniqueOrThrow
   */
  export type ApplyJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplyJob
     */
    select?: ApplyJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplyJob
     */
    omit?: ApplyJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplyJobInclude<ExtArgs> | null
    /**
     * Filter, which ApplyJob to fetch.
     */
    where: ApplyJobWhereUniqueInput
  }

  /**
   * ApplyJob findFirst
   */
  export type ApplyJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplyJob
     */
    select?: ApplyJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplyJob
     */
    omit?: ApplyJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplyJobInclude<ExtArgs> | null
    /**
     * Filter, which ApplyJob to fetch.
     */
    where?: ApplyJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplyJobs to fetch.
     */
    orderBy?: ApplyJobOrderByWithRelationInput | ApplyJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplyJobs.
     */
    cursor?: ApplyJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplyJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplyJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplyJobs.
     */
    distinct?: ApplyJobScalarFieldEnum | ApplyJobScalarFieldEnum[]
  }

  /**
   * ApplyJob findFirstOrThrow
   */
  export type ApplyJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplyJob
     */
    select?: ApplyJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplyJob
     */
    omit?: ApplyJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplyJobInclude<ExtArgs> | null
    /**
     * Filter, which ApplyJob to fetch.
     */
    where?: ApplyJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplyJobs to fetch.
     */
    orderBy?: ApplyJobOrderByWithRelationInput | ApplyJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplyJobs.
     */
    cursor?: ApplyJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplyJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplyJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplyJobs.
     */
    distinct?: ApplyJobScalarFieldEnum | ApplyJobScalarFieldEnum[]
  }

  /**
   * ApplyJob findMany
   */
  export type ApplyJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplyJob
     */
    select?: ApplyJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplyJob
     */
    omit?: ApplyJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplyJobInclude<ExtArgs> | null
    /**
     * Filter, which ApplyJobs to fetch.
     */
    where?: ApplyJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplyJobs to fetch.
     */
    orderBy?: ApplyJobOrderByWithRelationInput | ApplyJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApplyJobs.
     */
    cursor?: ApplyJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplyJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplyJobs.
     */
    skip?: number
    distinct?: ApplyJobScalarFieldEnum | ApplyJobScalarFieldEnum[]
  }

  /**
   * ApplyJob create
   */
  export type ApplyJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplyJob
     */
    select?: ApplyJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplyJob
     */
    omit?: ApplyJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplyJobInclude<ExtArgs> | null
    /**
     * The data needed to create a ApplyJob.
     */
    data: XOR<ApplyJobCreateInput, ApplyJobUncheckedCreateInput>
  }

  /**
   * ApplyJob createMany
   */
  export type ApplyJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApplyJobs.
     */
    data: ApplyJobCreateManyInput | ApplyJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApplyJob createManyAndReturn
   */
  export type ApplyJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplyJob
     */
    select?: ApplyJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApplyJob
     */
    omit?: ApplyJobOmit<ExtArgs> | null
    /**
     * The data used to create many ApplyJobs.
     */
    data: ApplyJobCreateManyInput | ApplyJobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplyJobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApplyJob update
   */
  export type ApplyJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplyJob
     */
    select?: ApplyJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplyJob
     */
    omit?: ApplyJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplyJobInclude<ExtArgs> | null
    /**
     * The data needed to update a ApplyJob.
     */
    data: XOR<ApplyJobUpdateInput, ApplyJobUncheckedUpdateInput>
    /**
     * Choose, which ApplyJob to update.
     */
    where: ApplyJobWhereUniqueInput
  }

  /**
   * ApplyJob updateMany
   */
  export type ApplyJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApplyJobs.
     */
    data: XOR<ApplyJobUpdateManyMutationInput, ApplyJobUncheckedUpdateManyInput>
    /**
     * Filter which ApplyJobs to update
     */
    where?: ApplyJobWhereInput
    /**
     * Limit how many ApplyJobs to update.
     */
    limit?: number
  }

  /**
   * ApplyJob updateManyAndReturn
   */
  export type ApplyJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplyJob
     */
    select?: ApplyJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApplyJob
     */
    omit?: ApplyJobOmit<ExtArgs> | null
    /**
     * The data used to update ApplyJobs.
     */
    data: XOR<ApplyJobUpdateManyMutationInput, ApplyJobUncheckedUpdateManyInput>
    /**
     * Filter which ApplyJobs to update
     */
    where?: ApplyJobWhereInput
    /**
     * Limit how many ApplyJobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplyJobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApplyJob upsert
   */
  export type ApplyJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplyJob
     */
    select?: ApplyJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplyJob
     */
    omit?: ApplyJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplyJobInclude<ExtArgs> | null
    /**
     * The filter to search for the ApplyJob to update in case it exists.
     */
    where: ApplyJobWhereUniqueInput
    /**
     * In case the ApplyJob found by the `where` argument doesn't exist, create a new ApplyJob with this data.
     */
    create: XOR<ApplyJobCreateInput, ApplyJobUncheckedCreateInput>
    /**
     * In case the ApplyJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplyJobUpdateInput, ApplyJobUncheckedUpdateInput>
  }

  /**
   * ApplyJob delete
   */
  export type ApplyJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplyJob
     */
    select?: ApplyJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplyJob
     */
    omit?: ApplyJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplyJobInclude<ExtArgs> | null
    /**
     * Filter which ApplyJob to delete.
     */
    where: ApplyJobWhereUniqueInput
  }

  /**
   * ApplyJob deleteMany
   */
  export type ApplyJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplyJobs to delete
     */
    where?: ApplyJobWhereInput
    /**
     * Limit how many ApplyJobs to delete.
     */
    limit?: number
  }

  /**
   * ApplyJob without action
   */
  export type ApplyJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplyJob
     */
    select?: ApplyJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplyJob
     */
    omit?: ApplyJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplyJobInclude<ExtArgs> | null
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


  export const ProfileSchemaScalarFieldEnum: {
    profile_id: 'profile_id',
    About: 'About',
    ProjectLink: 'ProjectLink',
    userid: 'userid'
  };

  export type ProfileSchemaScalarFieldEnum = (typeof ProfileSchemaScalarFieldEnum)[keyof typeof ProfileSchemaScalarFieldEnum]


  export const JobSchemaScalarFieldEnum: {
    job_id: 'job_id',
    clientid: 'clientid',
    Job_titile: 'Job_titile',
    Job_description: 'Job_description',
    Budget: 'Budget',
    Timeline: 'Timeline'
  };

  export type JobSchemaScalarFieldEnum = (typeof JobSchemaScalarFieldEnum)[keyof typeof JobSchemaScalarFieldEnum]


  export const ApplyJobScalarFieldEnum: {
    applyjobid: 'applyjobid',
    clientid: 'clientid',
    userid: 'userid',
    jobtitle: 'jobtitle',
    budget: 'budget',
    timeline: 'timeline'
  };

  export type ApplyJobScalarFieldEnum = (typeof ApplyJobScalarFieldEnum)[keyof typeof ApplyJobScalarFieldEnum]


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
    Profile?: XOR<ProfileSchemaNullableScalarRelationFilter, ProfileSchemaWhereInput> | null
    ApplyJob?: ApplyJobListRelationFilter
  }

  export type UserSchemaOrderByWithRelationInput = {
    user_id?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Experience?: SortOrder
    Rating?: SortOrder
    Skills?: SortOrder
    Profile?: ProfileSchemaOrderByWithRelationInput
    ApplyJob?: ApplyJobOrderByRelationAggregateInput
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
    Profile?: XOR<ProfileSchemaNullableScalarRelationFilter, ProfileSchemaWhereInput> | null
    ApplyJob?: ApplyJobListRelationFilter
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
    jobschema?: JobSchemaListRelationFilter
    ApplyJobs?: ApplyJobListRelationFilter
  }

  export type ClientSchemaOrderByWithRelationInput = {
    client_id?: SortOrder
    client_name?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Organization?: SortOrderInput | SortOrder
    jobschema?: JobSchemaOrderByRelationAggregateInput
    ApplyJobs?: ApplyJobOrderByRelationAggregateInput
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
    jobschema?: JobSchemaListRelationFilter
    ApplyJobs?: ApplyJobListRelationFilter
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

  export type ProfileSchemaWhereInput = {
    AND?: ProfileSchemaWhereInput | ProfileSchemaWhereInput[]
    OR?: ProfileSchemaWhereInput[]
    NOT?: ProfileSchemaWhereInput | ProfileSchemaWhereInput[]
    profile_id?: IntFilter<"ProfileSchema"> | number
    About?: StringFilter<"ProfileSchema"> | string
    ProjectLink?: StringNullableListFilter<"ProfileSchema">
    userid?: IntFilter<"ProfileSchema"> | number
    user?: XOR<UserSchemaScalarRelationFilter, UserSchemaWhereInput>
    applyJobs?: ApplyJobListRelationFilter
  }

  export type ProfileSchemaOrderByWithRelationInput = {
    profile_id?: SortOrder
    About?: SortOrder
    ProjectLink?: SortOrder
    userid?: SortOrder
    user?: UserSchemaOrderByWithRelationInput
    applyJobs?: ApplyJobOrderByRelationAggregateInput
  }

  export type ProfileSchemaWhereUniqueInput = Prisma.AtLeast<{
    profile_id?: number
    userid?: number
    AND?: ProfileSchemaWhereInput | ProfileSchemaWhereInput[]
    OR?: ProfileSchemaWhereInput[]
    NOT?: ProfileSchemaWhereInput | ProfileSchemaWhereInput[]
    About?: StringFilter<"ProfileSchema"> | string
    ProjectLink?: StringNullableListFilter<"ProfileSchema">
    user?: XOR<UserSchemaScalarRelationFilter, UserSchemaWhereInput>
    applyJobs?: ApplyJobListRelationFilter
  }, "profile_id" | "userid">

  export type ProfileSchemaOrderByWithAggregationInput = {
    profile_id?: SortOrder
    About?: SortOrder
    ProjectLink?: SortOrder
    userid?: SortOrder
    _count?: ProfileSchemaCountOrderByAggregateInput
    _avg?: ProfileSchemaAvgOrderByAggregateInput
    _max?: ProfileSchemaMaxOrderByAggregateInput
    _min?: ProfileSchemaMinOrderByAggregateInput
    _sum?: ProfileSchemaSumOrderByAggregateInput
  }

  export type ProfileSchemaScalarWhereWithAggregatesInput = {
    AND?: ProfileSchemaScalarWhereWithAggregatesInput | ProfileSchemaScalarWhereWithAggregatesInput[]
    OR?: ProfileSchemaScalarWhereWithAggregatesInput[]
    NOT?: ProfileSchemaScalarWhereWithAggregatesInput | ProfileSchemaScalarWhereWithAggregatesInput[]
    profile_id?: IntWithAggregatesFilter<"ProfileSchema"> | number
    About?: StringWithAggregatesFilter<"ProfileSchema"> | string
    ProjectLink?: StringNullableListFilter<"ProfileSchema">
    userid?: IntWithAggregatesFilter<"ProfileSchema"> | number
  }

  export type JobSchemaWhereInput = {
    AND?: JobSchemaWhereInput | JobSchemaWhereInput[]
    OR?: JobSchemaWhereInput[]
    NOT?: JobSchemaWhereInput | JobSchemaWhereInput[]
    job_id?: IntFilter<"JobSchema"> | number
    clientid?: IntFilter<"JobSchema"> | number
    Job_titile?: StringFilter<"JobSchema"> | string
    Job_description?: StringFilter<"JobSchema"> | string
    Budget?: StringFilter<"JobSchema"> | string
    Timeline?: StringFilter<"JobSchema"> | string
    client?: XOR<ClientSchemaScalarRelationFilter, ClientSchemaWhereInput>
  }

  export type JobSchemaOrderByWithRelationInput = {
    job_id?: SortOrder
    clientid?: SortOrder
    Job_titile?: SortOrder
    Job_description?: SortOrder
    Budget?: SortOrder
    Timeline?: SortOrder
    client?: ClientSchemaOrderByWithRelationInput
  }

  export type JobSchemaWhereUniqueInput = Prisma.AtLeast<{
    job_id?: number
    AND?: JobSchemaWhereInput | JobSchemaWhereInput[]
    OR?: JobSchemaWhereInput[]
    NOT?: JobSchemaWhereInput | JobSchemaWhereInput[]
    clientid?: IntFilter<"JobSchema"> | number
    Job_titile?: StringFilter<"JobSchema"> | string
    Job_description?: StringFilter<"JobSchema"> | string
    Budget?: StringFilter<"JobSchema"> | string
    Timeline?: StringFilter<"JobSchema"> | string
    client?: XOR<ClientSchemaScalarRelationFilter, ClientSchemaWhereInput>
  }, "job_id">

  export type JobSchemaOrderByWithAggregationInput = {
    job_id?: SortOrder
    clientid?: SortOrder
    Job_titile?: SortOrder
    Job_description?: SortOrder
    Budget?: SortOrder
    Timeline?: SortOrder
    _count?: JobSchemaCountOrderByAggregateInput
    _avg?: JobSchemaAvgOrderByAggregateInput
    _max?: JobSchemaMaxOrderByAggregateInput
    _min?: JobSchemaMinOrderByAggregateInput
    _sum?: JobSchemaSumOrderByAggregateInput
  }

  export type JobSchemaScalarWhereWithAggregatesInput = {
    AND?: JobSchemaScalarWhereWithAggregatesInput | JobSchemaScalarWhereWithAggregatesInput[]
    OR?: JobSchemaScalarWhereWithAggregatesInput[]
    NOT?: JobSchemaScalarWhereWithAggregatesInput | JobSchemaScalarWhereWithAggregatesInput[]
    job_id?: IntWithAggregatesFilter<"JobSchema"> | number
    clientid?: IntWithAggregatesFilter<"JobSchema"> | number
    Job_titile?: StringWithAggregatesFilter<"JobSchema"> | string
    Job_description?: StringWithAggregatesFilter<"JobSchema"> | string
    Budget?: StringWithAggregatesFilter<"JobSchema"> | string
    Timeline?: StringWithAggregatesFilter<"JobSchema"> | string
  }

  export type ApplyJobWhereInput = {
    AND?: ApplyJobWhereInput | ApplyJobWhereInput[]
    OR?: ApplyJobWhereInput[]
    NOT?: ApplyJobWhereInput | ApplyJobWhereInput[]
    applyjobid?: IntFilter<"ApplyJob"> | number
    clientid?: IntFilter<"ApplyJob"> | number
    userid?: IntFilter<"ApplyJob"> | number
    jobtitle?: StringFilter<"ApplyJob"> | string
    budget?: StringFilter<"ApplyJob"> | string
    timeline?: StringFilter<"ApplyJob"> | string
    user?: XOR<UserSchemaScalarRelationFilter, UserSchemaWhereInput>
    client?: XOR<ClientSchemaScalarRelationFilter, ClientSchemaWhereInput>
    profile?: XOR<ProfileSchemaScalarRelationFilter, ProfileSchemaWhereInput>
  }

  export type ApplyJobOrderByWithRelationInput = {
    applyjobid?: SortOrder
    clientid?: SortOrder
    userid?: SortOrder
    jobtitle?: SortOrder
    budget?: SortOrder
    timeline?: SortOrder
    user?: UserSchemaOrderByWithRelationInput
    client?: ClientSchemaOrderByWithRelationInput
    profile?: ProfileSchemaOrderByWithRelationInput
  }

  export type ApplyJobWhereUniqueInput = Prisma.AtLeast<{
    applyjobid?: number
    AND?: ApplyJobWhereInput | ApplyJobWhereInput[]
    OR?: ApplyJobWhereInput[]
    NOT?: ApplyJobWhereInput | ApplyJobWhereInput[]
    clientid?: IntFilter<"ApplyJob"> | number
    userid?: IntFilter<"ApplyJob"> | number
    jobtitle?: StringFilter<"ApplyJob"> | string
    budget?: StringFilter<"ApplyJob"> | string
    timeline?: StringFilter<"ApplyJob"> | string
    user?: XOR<UserSchemaScalarRelationFilter, UserSchemaWhereInput>
    client?: XOR<ClientSchemaScalarRelationFilter, ClientSchemaWhereInput>
    profile?: XOR<ProfileSchemaScalarRelationFilter, ProfileSchemaWhereInput>
  }, "applyjobid">

  export type ApplyJobOrderByWithAggregationInput = {
    applyjobid?: SortOrder
    clientid?: SortOrder
    userid?: SortOrder
    jobtitle?: SortOrder
    budget?: SortOrder
    timeline?: SortOrder
    _count?: ApplyJobCountOrderByAggregateInput
    _avg?: ApplyJobAvgOrderByAggregateInput
    _max?: ApplyJobMaxOrderByAggregateInput
    _min?: ApplyJobMinOrderByAggregateInput
    _sum?: ApplyJobSumOrderByAggregateInput
  }

  export type ApplyJobScalarWhereWithAggregatesInput = {
    AND?: ApplyJobScalarWhereWithAggregatesInput | ApplyJobScalarWhereWithAggregatesInput[]
    OR?: ApplyJobScalarWhereWithAggregatesInput[]
    NOT?: ApplyJobScalarWhereWithAggregatesInput | ApplyJobScalarWhereWithAggregatesInput[]
    applyjobid?: IntWithAggregatesFilter<"ApplyJob"> | number
    clientid?: IntWithAggregatesFilter<"ApplyJob"> | number
    userid?: IntWithAggregatesFilter<"ApplyJob"> | number
    jobtitle?: StringWithAggregatesFilter<"ApplyJob"> | string
    budget?: StringWithAggregatesFilter<"ApplyJob"> | string
    timeline?: StringWithAggregatesFilter<"ApplyJob"> | string
  }

  export type UserSchemaCreateInput = {
    Name: string
    Email: string
    Password: string
    Experience: number
    Rating: number
    Skills?: UserSchemaCreateSkillsInput | string[]
    Profile?: ProfileSchemaCreateNestedOneWithoutUserInput
    ApplyJob?: ApplyJobCreateNestedManyWithoutUserInput
  }

  export type UserSchemaUncheckedCreateInput = {
    user_id?: number
    Name: string
    Email: string
    Password: string
    Experience: number
    Rating: number
    Skills?: UserSchemaCreateSkillsInput | string[]
    Profile?: ProfileSchemaUncheckedCreateNestedOneWithoutUserInput
    ApplyJob?: ApplyJobUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserSchemaUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Experience?: IntFieldUpdateOperationsInput | number
    Rating?: IntFieldUpdateOperationsInput | number
    Skills?: UserSchemaUpdateSkillsInput | string[]
    Profile?: ProfileSchemaUpdateOneWithoutUserNestedInput
    ApplyJob?: ApplyJobUpdateManyWithoutUserNestedInput
  }

  export type UserSchemaUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Experience?: IntFieldUpdateOperationsInput | number
    Rating?: IntFieldUpdateOperationsInput | number
    Skills?: UserSchemaUpdateSkillsInput | string[]
    Profile?: ProfileSchemaUncheckedUpdateOneWithoutUserNestedInput
    ApplyJob?: ApplyJobUncheckedUpdateManyWithoutUserNestedInput
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
    jobschema?: JobSchemaCreateNestedManyWithoutClientInput
    ApplyJobs?: ApplyJobCreateNestedManyWithoutClientInput
  }

  export type ClientSchemaUncheckedCreateInput = {
    client_id?: number
    client_name: string
    Email: string
    Password: string
    Organization?: string | null
    jobschema?: JobSchemaUncheckedCreateNestedManyWithoutClientInput
    ApplyJobs?: ApplyJobUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientSchemaUpdateInput = {
    client_name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Organization?: NullableStringFieldUpdateOperationsInput | string | null
    jobschema?: JobSchemaUpdateManyWithoutClientNestedInput
    ApplyJobs?: ApplyJobUpdateManyWithoutClientNestedInput
  }

  export type ClientSchemaUncheckedUpdateInput = {
    client_id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Organization?: NullableStringFieldUpdateOperationsInput | string | null
    jobschema?: JobSchemaUncheckedUpdateManyWithoutClientNestedInput
    ApplyJobs?: ApplyJobUncheckedUpdateManyWithoutClientNestedInput
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

  export type ProfileSchemaCreateInput = {
    About: string
    ProjectLink?: ProfileSchemaCreateProjectLinkInput | string[]
    user: UserSchemaCreateNestedOneWithoutProfileInput
    applyJobs?: ApplyJobCreateNestedManyWithoutProfileInput
  }

  export type ProfileSchemaUncheckedCreateInput = {
    profile_id?: number
    About: string
    ProjectLink?: ProfileSchemaCreateProjectLinkInput | string[]
    userid: number
    applyJobs?: ApplyJobUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileSchemaUpdateInput = {
    About?: StringFieldUpdateOperationsInput | string
    ProjectLink?: ProfileSchemaUpdateProjectLinkInput | string[]
    user?: UserSchemaUpdateOneRequiredWithoutProfileNestedInput
    applyJobs?: ApplyJobUpdateManyWithoutProfileNestedInput
  }

  export type ProfileSchemaUncheckedUpdateInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    About?: StringFieldUpdateOperationsInput | string
    ProjectLink?: ProfileSchemaUpdateProjectLinkInput | string[]
    userid?: IntFieldUpdateOperationsInput | number
    applyJobs?: ApplyJobUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileSchemaCreateManyInput = {
    profile_id?: number
    About: string
    ProjectLink?: ProfileSchemaCreateProjectLinkInput | string[]
    userid: number
  }

  export type ProfileSchemaUpdateManyMutationInput = {
    About?: StringFieldUpdateOperationsInput | string
    ProjectLink?: ProfileSchemaUpdateProjectLinkInput | string[]
  }

  export type ProfileSchemaUncheckedUpdateManyInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    About?: StringFieldUpdateOperationsInput | string
    ProjectLink?: ProfileSchemaUpdateProjectLinkInput | string[]
    userid?: IntFieldUpdateOperationsInput | number
  }

  export type JobSchemaCreateInput = {
    Job_titile: string
    Job_description: string
    Budget: string
    Timeline: string
    client: ClientSchemaCreateNestedOneWithoutJobschemaInput
  }

  export type JobSchemaUncheckedCreateInput = {
    job_id?: number
    clientid: number
    Job_titile: string
    Job_description: string
    Budget: string
    Timeline: string
  }

  export type JobSchemaUpdateInput = {
    Job_titile?: StringFieldUpdateOperationsInput | string
    Job_description?: StringFieldUpdateOperationsInput | string
    Budget?: StringFieldUpdateOperationsInput | string
    Timeline?: StringFieldUpdateOperationsInput | string
    client?: ClientSchemaUpdateOneRequiredWithoutJobschemaNestedInput
  }

  export type JobSchemaUncheckedUpdateInput = {
    job_id?: IntFieldUpdateOperationsInput | number
    clientid?: IntFieldUpdateOperationsInput | number
    Job_titile?: StringFieldUpdateOperationsInput | string
    Job_description?: StringFieldUpdateOperationsInput | string
    Budget?: StringFieldUpdateOperationsInput | string
    Timeline?: StringFieldUpdateOperationsInput | string
  }

  export type JobSchemaCreateManyInput = {
    job_id?: number
    clientid: number
    Job_titile: string
    Job_description: string
    Budget: string
    Timeline: string
  }

  export type JobSchemaUpdateManyMutationInput = {
    Job_titile?: StringFieldUpdateOperationsInput | string
    Job_description?: StringFieldUpdateOperationsInput | string
    Budget?: StringFieldUpdateOperationsInput | string
    Timeline?: StringFieldUpdateOperationsInput | string
  }

  export type JobSchemaUncheckedUpdateManyInput = {
    job_id?: IntFieldUpdateOperationsInput | number
    clientid?: IntFieldUpdateOperationsInput | number
    Job_titile?: StringFieldUpdateOperationsInput | string
    Job_description?: StringFieldUpdateOperationsInput | string
    Budget?: StringFieldUpdateOperationsInput | string
    Timeline?: StringFieldUpdateOperationsInput | string
  }

  export type ApplyJobCreateInput = {
    jobtitle: string
    budget?: string
    timeline?: string
    user: UserSchemaCreateNestedOneWithoutApplyJobInput
    client: ClientSchemaCreateNestedOneWithoutApplyJobsInput
    profile: ProfileSchemaCreateNestedOneWithoutApplyJobsInput
  }

  export type ApplyJobUncheckedCreateInput = {
    applyjobid?: number
    clientid: number
    userid: number
    jobtitle: string
    budget?: string
    timeline?: string
  }

  export type ApplyJobUpdateInput = {
    jobtitle?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    user?: UserSchemaUpdateOneRequiredWithoutApplyJobNestedInput
    client?: ClientSchemaUpdateOneRequiredWithoutApplyJobsNestedInput
    profile?: ProfileSchemaUpdateOneRequiredWithoutApplyJobsNestedInput
  }

  export type ApplyJobUncheckedUpdateInput = {
    applyjobid?: IntFieldUpdateOperationsInput | number
    clientid?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    jobtitle?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
  }

  export type ApplyJobCreateManyInput = {
    applyjobid?: number
    clientid: number
    userid: number
    jobtitle: string
    budget?: string
    timeline?: string
  }

  export type ApplyJobUpdateManyMutationInput = {
    jobtitle?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
  }

  export type ApplyJobUncheckedUpdateManyInput = {
    applyjobid?: IntFieldUpdateOperationsInput | number
    clientid?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    jobtitle?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
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

  export type ProfileSchemaNullableScalarRelationFilter = {
    is?: ProfileSchemaWhereInput | null
    isNot?: ProfileSchemaWhereInput | null
  }

  export type ApplyJobListRelationFilter = {
    every?: ApplyJobWhereInput
    some?: ApplyJobWhereInput
    none?: ApplyJobWhereInput
  }

  export type ApplyJobOrderByRelationAggregateInput = {
    _count?: SortOrder
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

  export type JobSchemaListRelationFilter = {
    every?: JobSchemaWhereInput
    some?: JobSchemaWhereInput
    none?: JobSchemaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type JobSchemaOrderByRelationAggregateInput = {
    _count?: SortOrder
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

  export type UserSchemaScalarRelationFilter = {
    is?: UserSchemaWhereInput
    isNot?: UserSchemaWhereInput
  }

  export type ProfileSchemaCountOrderByAggregateInput = {
    profile_id?: SortOrder
    About?: SortOrder
    ProjectLink?: SortOrder
    userid?: SortOrder
  }

  export type ProfileSchemaAvgOrderByAggregateInput = {
    profile_id?: SortOrder
    userid?: SortOrder
  }

  export type ProfileSchemaMaxOrderByAggregateInput = {
    profile_id?: SortOrder
    About?: SortOrder
    userid?: SortOrder
  }

  export type ProfileSchemaMinOrderByAggregateInput = {
    profile_id?: SortOrder
    About?: SortOrder
    userid?: SortOrder
  }

  export type ProfileSchemaSumOrderByAggregateInput = {
    profile_id?: SortOrder
    userid?: SortOrder
  }

  export type ClientSchemaScalarRelationFilter = {
    is?: ClientSchemaWhereInput
    isNot?: ClientSchemaWhereInput
  }

  export type JobSchemaCountOrderByAggregateInput = {
    job_id?: SortOrder
    clientid?: SortOrder
    Job_titile?: SortOrder
    Job_description?: SortOrder
    Budget?: SortOrder
    Timeline?: SortOrder
  }

  export type JobSchemaAvgOrderByAggregateInput = {
    job_id?: SortOrder
    clientid?: SortOrder
  }

  export type JobSchemaMaxOrderByAggregateInput = {
    job_id?: SortOrder
    clientid?: SortOrder
    Job_titile?: SortOrder
    Job_description?: SortOrder
    Budget?: SortOrder
    Timeline?: SortOrder
  }

  export type JobSchemaMinOrderByAggregateInput = {
    job_id?: SortOrder
    clientid?: SortOrder
    Job_titile?: SortOrder
    Job_description?: SortOrder
    Budget?: SortOrder
    Timeline?: SortOrder
  }

  export type JobSchemaSumOrderByAggregateInput = {
    job_id?: SortOrder
    clientid?: SortOrder
  }

  export type ProfileSchemaScalarRelationFilter = {
    is?: ProfileSchemaWhereInput
    isNot?: ProfileSchemaWhereInput
  }

  export type ApplyJobCountOrderByAggregateInput = {
    applyjobid?: SortOrder
    clientid?: SortOrder
    userid?: SortOrder
    jobtitle?: SortOrder
    budget?: SortOrder
    timeline?: SortOrder
  }

  export type ApplyJobAvgOrderByAggregateInput = {
    applyjobid?: SortOrder
    clientid?: SortOrder
    userid?: SortOrder
  }

  export type ApplyJobMaxOrderByAggregateInput = {
    applyjobid?: SortOrder
    clientid?: SortOrder
    userid?: SortOrder
    jobtitle?: SortOrder
    budget?: SortOrder
    timeline?: SortOrder
  }

  export type ApplyJobMinOrderByAggregateInput = {
    applyjobid?: SortOrder
    clientid?: SortOrder
    userid?: SortOrder
    jobtitle?: SortOrder
    budget?: SortOrder
    timeline?: SortOrder
  }

  export type ApplyJobSumOrderByAggregateInput = {
    applyjobid?: SortOrder
    clientid?: SortOrder
    userid?: SortOrder
  }

  export type UserSchemaCreateSkillsInput = {
    set: string[]
  }

  export type ProfileSchemaCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileSchemaCreateWithoutUserInput, ProfileSchemaUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileSchemaCreateOrConnectWithoutUserInput
    connect?: ProfileSchemaWhereUniqueInput
  }

  export type ApplyJobCreateNestedManyWithoutUserInput = {
    create?: XOR<ApplyJobCreateWithoutUserInput, ApplyJobUncheckedCreateWithoutUserInput> | ApplyJobCreateWithoutUserInput[] | ApplyJobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplyJobCreateOrConnectWithoutUserInput | ApplyJobCreateOrConnectWithoutUserInput[]
    createMany?: ApplyJobCreateManyUserInputEnvelope
    connect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
  }

  export type ProfileSchemaUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileSchemaCreateWithoutUserInput, ProfileSchemaUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileSchemaCreateOrConnectWithoutUserInput
    connect?: ProfileSchemaWhereUniqueInput
  }

  export type ApplyJobUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ApplyJobCreateWithoutUserInput, ApplyJobUncheckedCreateWithoutUserInput> | ApplyJobCreateWithoutUserInput[] | ApplyJobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplyJobCreateOrConnectWithoutUserInput | ApplyJobCreateOrConnectWithoutUserInput[]
    createMany?: ApplyJobCreateManyUserInputEnvelope
    connect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
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

  export type ProfileSchemaUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileSchemaCreateWithoutUserInput, ProfileSchemaUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileSchemaCreateOrConnectWithoutUserInput
    upsert?: ProfileSchemaUpsertWithoutUserInput
    disconnect?: ProfileSchemaWhereInput | boolean
    delete?: ProfileSchemaWhereInput | boolean
    connect?: ProfileSchemaWhereUniqueInput
    update?: XOR<XOR<ProfileSchemaUpdateToOneWithWhereWithoutUserInput, ProfileSchemaUpdateWithoutUserInput>, ProfileSchemaUncheckedUpdateWithoutUserInput>
  }

  export type ApplyJobUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApplyJobCreateWithoutUserInput, ApplyJobUncheckedCreateWithoutUserInput> | ApplyJobCreateWithoutUserInput[] | ApplyJobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplyJobCreateOrConnectWithoutUserInput | ApplyJobCreateOrConnectWithoutUserInput[]
    upsert?: ApplyJobUpsertWithWhereUniqueWithoutUserInput | ApplyJobUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApplyJobCreateManyUserInputEnvelope
    set?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    disconnect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    delete?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    connect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    update?: ApplyJobUpdateWithWhereUniqueWithoutUserInput | ApplyJobUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApplyJobUpdateManyWithWhereWithoutUserInput | ApplyJobUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApplyJobScalarWhereInput | ApplyJobScalarWhereInput[]
  }

  export type ProfileSchemaUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileSchemaCreateWithoutUserInput, ProfileSchemaUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileSchemaCreateOrConnectWithoutUserInput
    upsert?: ProfileSchemaUpsertWithoutUserInput
    disconnect?: ProfileSchemaWhereInput | boolean
    delete?: ProfileSchemaWhereInput | boolean
    connect?: ProfileSchemaWhereUniqueInput
    update?: XOR<XOR<ProfileSchemaUpdateToOneWithWhereWithoutUserInput, ProfileSchemaUpdateWithoutUserInput>, ProfileSchemaUncheckedUpdateWithoutUserInput>
  }

  export type ApplyJobUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApplyJobCreateWithoutUserInput, ApplyJobUncheckedCreateWithoutUserInput> | ApplyJobCreateWithoutUserInput[] | ApplyJobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplyJobCreateOrConnectWithoutUserInput | ApplyJobCreateOrConnectWithoutUserInput[]
    upsert?: ApplyJobUpsertWithWhereUniqueWithoutUserInput | ApplyJobUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApplyJobCreateManyUserInputEnvelope
    set?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    disconnect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    delete?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    connect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    update?: ApplyJobUpdateWithWhereUniqueWithoutUserInput | ApplyJobUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApplyJobUpdateManyWithWhereWithoutUserInput | ApplyJobUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApplyJobScalarWhereInput | ApplyJobScalarWhereInput[]
  }

  export type JobSchemaCreateNestedManyWithoutClientInput = {
    create?: XOR<JobSchemaCreateWithoutClientInput, JobSchemaUncheckedCreateWithoutClientInput> | JobSchemaCreateWithoutClientInput[] | JobSchemaUncheckedCreateWithoutClientInput[]
    connectOrCreate?: JobSchemaCreateOrConnectWithoutClientInput | JobSchemaCreateOrConnectWithoutClientInput[]
    createMany?: JobSchemaCreateManyClientInputEnvelope
    connect?: JobSchemaWhereUniqueInput | JobSchemaWhereUniqueInput[]
  }

  export type ApplyJobCreateNestedManyWithoutClientInput = {
    create?: XOR<ApplyJobCreateWithoutClientInput, ApplyJobUncheckedCreateWithoutClientInput> | ApplyJobCreateWithoutClientInput[] | ApplyJobUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ApplyJobCreateOrConnectWithoutClientInput | ApplyJobCreateOrConnectWithoutClientInput[]
    createMany?: ApplyJobCreateManyClientInputEnvelope
    connect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
  }

  export type JobSchemaUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<JobSchemaCreateWithoutClientInput, JobSchemaUncheckedCreateWithoutClientInput> | JobSchemaCreateWithoutClientInput[] | JobSchemaUncheckedCreateWithoutClientInput[]
    connectOrCreate?: JobSchemaCreateOrConnectWithoutClientInput | JobSchemaCreateOrConnectWithoutClientInput[]
    createMany?: JobSchemaCreateManyClientInputEnvelope
    connect?: JobSchemaWhereUniqueInput | JobSchemaWhereUniqueInput[]
  }

  export type ApplyJobUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ApplyJobCreateWithoutClientInput, ApplyJobUncheckedCreateWithoutClientInput> | ApplyJobCreateWithoutClientInput[] | ApplyJobUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ApplyJobCreateOrConnectWithoutClientInput | ApplyJobCreateOrConnectWithoutClientInput[]
    createMany?: ApplyJobCreateManyClientInputEnvelope
    connect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type JobSchemaUpdateManyWithoutClientNestedInput = {
    create?: XOR<JobSchemaCreateWithoutClientInput, JobSchemaUncheckedCreateWithoutClientInput> | JobSchemaCreateWithoutClientInput[] | JobSchemaUncheckedCreateWithoutClientInput[]
    connectOrCreate?: JobSchemaCreateOrConnectWithoutClientInput | JobSchemaCreateOrConnectWithoutClientInput[]
    upsert?: JobSchemaUpsertWithWhereUniqueWithoutClientInput | JobSchemaUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: JobSchemaCreateManyClientInputEnvelope
    set?: JobSchemaWhereUniqueInput | JobSchemaWhereUniqueInput[]
    disconnect?: JobSchemaWhereUniqueInput | JobSchemaWhereUniqueInput[]
    delete?: JobSchemaWhereUniqueInput | JobSchemaWhereUniqueInput[]
    connect?: JobSchemaWhereUniqueInput | JobSchemaWhereUniqueInput[]
    update?: JobSchemaUpdateWithWhereUniqueWithoutClientInput | JobSchemaUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: JobSchemaUpdateManyWithWhereWithoutClientInput | JobSchemaUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: JobSchemaScalarWhereInput | JobSchemaScalarWhereInput[]
  }

  export type ApplyJobUpdateManyWithoutClientNestedInput = {
    create?: XOR<ApplyJobCreateWithoutClientInput, ApplyJobUncheckedCreateWithoutClientInput> | ApplyJobCreateWithoutClientInput[] | ApplyJobUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ApplyJobCreateOrConnectWithoutClientInput | ApplyJobCreateOrConnectWithoutClientInput[]
    upsert?: ApplyJobUpsertWithWhereUniqueWithoutClientInput | ApplyJobUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ApplyJobCreateManyClientInputEnvelope
    set?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    disconnect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    delete?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    connect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    update?: ApplyJobUpdateWithWhereUniqueWithoutClientInput | ApplyJobUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ApplyJobUpdateManyWithWhereWithoutClientInput | ApplyJobUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ApplyJobScalarWhereInput | ApplyJobScalarWhereInput[]
  }

  export type JobSchemaUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<JobSchemaCreateWithoutClientInput, JobSchemaUncheckedCreateWithoutClientInput> | JobSchemaCreateWithoutClientInput[] | JobSchemaUncheckedCreateWithoutClientInput[]
    connectOrCreate?: JobSchemaCreateOrConnectWithoutClientInput | JobSchemaCreateOrConnectWithoutClientInput[]
    upsert?: JobSchemaUpsertWithWhereUniqueWithoutClientInput | JobSchemaUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: JobSchemaCreateManyClientInputEnvelope
    set?: JobSchemaWhereUniqueInput | JobSchemaWhereUniqueInput[]
    disconnect?: JobSchemaWhereUniqueInput | JobSchemaWhereUniqueInput[]
    delete?: JobSchemaWhereUniqueInput | JobSchemaWhereUniqueInput[]
    connect?: JobSchemaWhereUniqueInput | JobSchemaWhereUniqueInput[]
    update?: JobSchemaUpdateWithWhereUniqueWithoutClientInput | JobSchemaUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: JobSchemaUpdateManyWithWhereWithoutClientInput | JobSchemaUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: JobSchemaScalarWhereInput | JobSchemaScalarWhereInput[]
  }

  export type ApplyJobUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ApplyJobCreateWithoutClientInput, ApplyJobUncheckedCreateWithoutClientInput> | ApplyJobCreateWithoutClientInput[] | ApplyJobUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ApplyJobCreateOrConnectWithoutClientInput | ApplyJobCreateOrConnectWithoutClientInput[]
    upsert?: ApplyJobUpsertWithWhereUniqueWithoutClientInput | ApplyJobUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ApplyJobCreateManyClientInputEnvelope
    set?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    disconnect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    delete?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    connect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    update?: ApplyJobUpdateWithWhereUniqueWithoutClientInput | ApplyJobUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ApplyJobUpdateManyWithWhereWithoutClientInput | ApplyJobUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ApplyJobScalarWhereInput | ApplyJobScalarWhereInput[]
  }

  export type ProfileSchemaCreateProjectLinkInput = {
    set: string[]
  }

  export type UserSchemaCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserSchemaCreateWithoutProfileInput, UserSchemaUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserSchemaCreateOrConnectWithoutProfileInput
    connect?: UserSchemaWhereUniqueInput
  }

  export type ApplyJobCreateNestedManyWithoutProfileInput = {
    create?: XOR<ApplyJobCreateWithoutProfileInput, ApplyJobUncheckedCreateWithoutProfileInput> | ApplyJobCreateWithoutProfileInput[] | ApplyJobUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ApplyJobCreateOrConnectWithoutProfileInput | ApplyJobCreateOrConnectWithoutProfileInput[]
    createMany?: ApplyJobCreateManyProfileInputEnvelope
    connect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
  }

  export type ApplyJobUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<ApplyJobCreateWithoutProfileInput, ApplyJobUncheckedCreateWithoutProfileInput> | ApplyJobCreateWithoutProfileInput[] | ApplyJobUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ApplyJobCreateOrConnectWithoutProfileInput | ApplyJobCreateOrConnectWithoutProfileInput[]
    createMany?: ApplyJobCreateManyProfileInputEnvelope
    connect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
  }

  export type ProfileSchemaUpdateProjectLinkInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserSchemaUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserSchemaCreateWithoutProfileInput, UserSchemaUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserSchemaCreateOrConnectWithoutProfileInput
    upsert?: UserSchemaUpsertWithoutProfileInput
    connect?: UserSchemaWhereUniqueInput
    update?: XOR<XOR<UserSchemaUpdateToOneWithWhereWithoutProfileInput, UserSchemaUpdateWithoutProfileInput>, UserSchemaUncheckedUpdateWithoutProfileInput>
  }

  export type ApplyJobUpdateManyWithoutProfileNestedInput = {
    create?: XOR<ApplyJobCreateWithoutProfileInput, ApplyJobUncheckedCreateWithoutProfileInput> | ApplyJobCreateWithoutProfileInput[] | ApplyJobUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ApplyJobCreateOrConnectWithoutProfileInput | ApplyJobCreateOrConnectWithoutProfileInput[]
    upsert?: ApplyJobUpsertWithWhereUniqueWithoutProfileInput | ApplyJobUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: ApplyJobCreateManyProfileInputEnvelope
    set?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    disconnect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    delete?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    connect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    update?: ApplyJobUpdateWithWhereUniqueWithoutProfileInput | ApplyJobUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: ApplyJobUpdateManyWithWhereWithoutProfileInput | ApplyJobUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: ApplyJobScalarWhereInput | ApplyJobScalarWhereInput[]
  }

  export type ApplyJobUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<ApplyJobCreateWithoutProfileInput, ApplyJobUncheckedCreateWithoutProfileInput> | ApplyJobCreateWithoutProfileInput[] | ApplyJobUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ApplyJobCreateOrConnectWithoutProfileInput | ApplyJobCreateOrConnectWithoutProfileInput[]
    upsert?: ApplyJobUpsertWithWhereUniqueWithoutProfileInput | ApplyJobUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: ApplyJobCreateManyProfileInputEnvelope
    set?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    disconnect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    delete?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    connect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    update?: ApplyJobUpdateWithWhereUniqueWithoutProfileInput | ApplyJobUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: ApplyJobUpdateManyWithWhereWithoutProfileInput | ApplyJobUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: ApplyJobScalarWhereInput | ApplyJobScalarWhereInput[]
  }

  export type ClientSchemaCreateNestedOneWithoutJobschemaInput = {
    create?: XOR<ClientSchemaCreateWithoutJobschemaInput, ClientSchemaUncheckedCreateWithoutJobschemaInput>
    connectOrCreate?: ClientSchemaCreateOrConnectWithoutJobschemaInput
    connect?: ClientSchemaWhereUniqueInput
  }

  export type ClientSchemaUpdateOneRequiredWithoutJobschemaNestedInput = {
    create?: XOR<ClientSchemaCreateWithoutJobschemaInput, ClientSchemaUncheckedCreateWithoutJobschemaInput>
    connectOrCreate?: ClientSchemaCreateOrConnectWithoutJobschemaInput
    upsert?: ClientSchemaUpsertWithoutJobschemaInput
    connect?: ClientSchemaWhereUniqueInput
    update?: XOR<XOR<ClientSchemaUpdateToOneWithWhereWithoutJobschemaInput, ClientSchemaUpdateWithoutJobschemaInput>, ClientSchemaUncheckedUpdateWithoutJobschemaInput>
  }

  export type UserSchemaCreateNestedOneWithoutApplyJobInput = {
    create?: XOR<UserSchemaCreateWithoutApplyJobInput, UserSchemaUncheckedCreateWithoutApplyJobInput>
    connectOrCreate?: UserSchemaCreateOrConnectWithoutApplyJobInput
    connect?: UserSchemaWhereUniqueInput
  }

  export type ClientSchemaCreateNestedOneWithoutApplyJobsInput = {
    create?: XOR<ClientSchemaCreateWithoutApplyJobsInput, ClientSchemaUncheckedCreateWithoutApplyJobsInput>
    connectOrCreate?: ClientSchemaCreateOrConnectWithoutApplyJobsInput
    connect?: ClientSchemaWhereUniqueInput
  }

  export type ProfileSchemaCreateNestedOneWithoutApplyJobsInput = {
    create?: XOR<ProfileSchemaCreateWithoutApplyJobsInput, ProfileSchemaUncheckedCreateWithoutApplyJobsInput>
    connectOrCreate?: ProfileSchemaCreateOrConnectWithoutApplyJobsInput
    connect?: ProfileSchemaWhereUniqueInput
  }

  export type UserSchemaUpdateOneRequiredWithoutApplyJobNestedInput = {
    create?: XOR<UserSchemaCreateWithoutApplyJobInput, UserSchemaUncheckedCreateWithoutApplyJobInput>
    connectOrCreate?: UserSchemaCreateOrConnectWithoutApplyJobInput
    upsert?: UserSchemaUpsertWithoutApplyJobInput
    connect?: UserSchemaWhereUniqueInput
    update?: XOR<XOR<UserSchemaUpdateToOneWithWhereWithoutApplyJobInput, UserSchemaUpdateWithoutApplyJobInput>, UserSchemaUncheckedUpdateWithoutApplyJobInput>
  }

  export type ClientSchemaUpdateOneRequiredWithoutApplyJobsNestedInput = {
    create?: XOR<ClientSchemaCreateWithoutApplyJobsInput, ClientSchemaUncheckedCreateWithoutApplyJobsInput>
    connectOrCreate?: ClientSchemaCreateOrConnectWithoutApplyJobsInput
    upsert?: ClientSchemaUpsertWithoutApplyJobsInput
    connect?: ClientSchemaWhereUniqueInput
    update?: XOR<XOR<ClientSchemaUpdateToOneWithWhereWithoutApplyJobsInput, ClientSchemaUpdateWithoutApplyJobsInput>, ClientSchemaUncheckedUpdateWithoutApplyJobsInput>
  }

  export type ProfileSchemaUpdateOneRequiredWithoutApplyJobsNestedInput = {
    create?: XOR<ProfileSchemaCreateWithoutApplyJobsInput, ProfileSchemaUncheckedCreateWithoutApplyJobsInput>
    connectOrCreate?: ProfileSchemaCreateOrConnectWithoutApplyJobsInput
    upsert?: ProfileSchemaUpsertWithoutApplyJobsInput
    connect?: ProfileSchemaWhereUniqueInput
    update?: XOR<XOR<ProfileSchemaUpdateToOneWithWhereWithoutApplyJobsInput, ProfileSchemaUpdateWithoutApplyJobsInput>, ProfileSchemaUncheckedUpdateWithoutApplyJobsInput>
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

  export type ProfileSchemaCreateWithoutUserInput = {
    About: string
    ProjectLink?: ProfileSchemaCreateProjectLinkInput | string[]
    applyJobs?: ApplyJobCreateNestedManyWithoutProfileInput
  }

  export type ProfileSchemaUncheckedCreateWithoutUserInput = {
    profile_id?: number
    About: string
    ProjectLink?: ProfileSchemaCreateProjectLinkInput | string[]
    applyJobs?: ApplyJobUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileSchemaCreateOrConnectWithoutUserInput = {
    where: ProfileSchemaWhereUniqueInput
    create: XOR<ProfileSchemaCreateWithoutUserInput, ProfileSchemaUncheckedCreateWithoutUserInput>
  }

  export type ApplyJobCreateWithoutUserInput = {
    jobtitle: string
    budget?: string
    timeline?: string
    client: ClientSchemaCreateNestedOneWithoutApplyJobsInput
    profile: ProfileSchemaCreateNestedOneWithoutApplyJobsInput
  }

  export type ApplyJobUncheckedCreateWithoutUserInput = {
    applyjobid?: number
    clientid: number
    jobtitle: string
    budget?: string
    timeline?: string
  }

  export type ApplyJobCreateOrConnectWithoutUserInput = {
    where: ApplyJobWhereUniqueInput
    create: XOR<ApplyJobCreateWithoutUserInput, ApplyJobUncheckedCreateWithoutUserInput>
  }

  export type ApplyJobCreateManyUserInputEnvelope = {
    data: ApplyJobCreateManyUserInput | ApplyJobCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfileSchemaUpsertWithoutUserInput = {
    update: XOR<ProfileSchemaUpdateWithoutUserInput, ProfileSchemaUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileSchemaCreateWithoutUserInput, ProfileSchemaUncheckedCreateWithoutUserInput>
    where?: ProfileSchemaWhereInput
  }

  export type ProfileSchemaUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileSchemaWhereInput
    data: XOR<ProfileSchemaUpdateWithoutUserInput, ProfileSchemaUncheckedUpdateWithoutUserInput>
  }

  export type ProfileSchemaUpdateWithoutUserInput = {
    About?: StringFieldUpdateOperationsInput | string
    ProjectLink?: ProfileSchemaUpdateProjectLinkInput | string[]
    applyJobs?: ApplyJobUpdateManyWithoutProfileNestedInput
  }

  export type ProfileSchemaUncheckedUpdateWithoutUserInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    About?: StringFieldUpdateOperationsInput | string
    ProjectLink?: ProfileSchemaUpdateProjectLinkInput | string[]
    applyJobs?: ApplyJobUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ApplyJobUpsertWithWhereUniqueWithoutUserInput = {
    where: ApplyJobWhereUniqueInput
    update: XOR<ApplyJobUpdateWithoutUserInput, ApplyJobUncheckedUpdateWithoutUserInput>
    create: XOR<ApplyJobCreateWithoutUserInput, ApplyJobUncheckedCreateWithoutUserInput>
  }

  export type ApplyJobUpdateWithWhereUniqueWithoutUserInput = {
    where: ApplyJobWhereUniqueInput
    data: XOR<ApplyJobUpdateWithoutUserInput, ApplyJobUncheckedUpdateWithoutUserInput>
  }

  export type ApplyJobUpdateManyWithWhereWithoutUserInput = {
    where: ApplyJobScalarWhereInput
    data: XOR<ApplyJobUpdateManyMutationInput, ApplyJobUncheckedUpdateManyWithoutUserInput>
  }

  export type ApplyJobScalarWhereInput = {
    AND?: ApplyJobScalarWhereInput | ApplyJobScalarWhereInput[]
    OR?: ApplyJobScalarWhereInput[]
    NOT?: ApplyJobScalarWhereInput | ApplyJobScalarWhereInput[]
    applyjobid?: IntFilter<"ApplyJob"> | number
    clientid?: IntFilter<"ApplyJob"> | number
    userid?: IntFilter<"ApplyJob"> | number
    jobtitle?: StringFilter<"ApplyJob"> | string
    budget?: StringFilter<"ApplyJob"> | string
    timeline?: StringFilter<"ApplyJob"> | string
  }

  export type JobSchemaCreateWithoutClientInput = {
    Job_titile: string
    Job_description: string
    Budget: string
    Timeline: string
  }

  export type JobSchemaUncheckedCreateWithoutClientInput = {
    job_id?: number
    Job_titile: string
    Job_description: string
    Budget: string
    Timeline: string
  }

  export type JobSchemaCreateOrConnectWithoutClientInput = {
    where: JobSchemaWhereUniqueInput
    create: XOR<JobSchemaCreateWithoutClientInput, JobSchemaUncheckedCreateWithoutClientInput>
  }

  export type JobSchemaCreateManyClientInputEnvelope = {
    data: JobSchemaCreateManyClientInput | JobSchemaCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ApplyJobCreateWithoutClientInput = {
    jobtitle: string
    budget?: string
    timeline?: string
    user: UserSchemaCreateNestedOneWithoutApplyJobInput
    profile: ProfileSchemaCreateNestedOneWithoutApplyJobsInput
  }

  export type ApplyJobUncheckedCreateWithoutClientInput = {
    applyjobid?: number
    userid: number
    jobtitle: string
    budget?: string
    timeline?: string
  }

  export type ApplyJobCreateOrConnectWithoutClientInput = {
    where: ApplyJobWhereUniqueInput
    create: XOR<ApplyJobCreateWithoutClientInput, ApplyJobUncheckedCreateWithoutClientInput>
  }

  export type ApplyJobCreateManyClientInputEnvelope = {
    data: ApplyJobCreateManyClientInput | ApplyJobCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type JobSchemaUpsertWithWhereUniqueWithoutClientInput = {
    where: JobSchemaWhereUniqueInput
    update: XOR<JobSchemaUpdateWithoutClientInput, JobSchemaUncheckedUpdateWithoutClientInput>
    create: XOR<JobSchemaCreateWithoutClientInput, JobSchemaUncheckedCreateWithoutClientInput>
  }

  export type JobSchemaUpdateWithWhereUniqueWithoutClientInput = {
    where: JobSchemaWhereUniqueInput
    data: XOR<JobSchemaUpdateWithoutClientInput, JobSchemaUncheckedUpdateWithoutClientInput>
  }

  export type JobSchemaUpdateManyWithWhereWithoutClientInput = {
    where: JobSchemaScalarWhereInput
    data: XOR<JobSchemaUpdateManyMutationInput, JobSchemaUncheckedUpdateManyWithoutClientInput>
  }

  export type JobSchemaScalarWhereInput = {
    AND?: JobSchemaScalarWhereInput | JobSchemaScalarWhereInput[]
    OR?: JobSchemaScalarWhereInput[]
    NOT?: JobSchemaScalarWhereInput | JobSchemaScalarWhereInput[]
    job_id?: IntFilter<"JobSchema"> | number
    clientid?: IntFilter<"JobSchema"> | number
    Job_titile?: StringFilter<"JobSchema"> | string
    Job_description?: StringFilter<"JobSchema"> | string
    Budget?: StringFilter<"JobSchema"> | string
    Timeline?: StringFilter<"JobSchema"> | string
  }

  export type ApplyJobUpsertWithWhereUniqueWithoutClientInput = {
    where: ApplyJobWhereUniqueInput
    update: XOR<ApplyJobUpdateWithoutClientInput, ApplyJobUncheckedUpdateWithoutClientInput>
    create: XOR<ApplyJobCreateWithoutClientInput, ApplyJobUncheckedCreateWithoutClientInput>
  }

  export type ApplyJobUpdateWithWhereUniqueWithoutClientInput = {
    where: ApplyJobWhereUniqueInput
    data: XOR<ApplyJobUpdateWithoutClientInput, ApplyJobUncheckedUpdateWithoutClientInput>
  }

  export type ApplyJobUpdateManyWithWhereWithoutClientInput = {
    where: ApplyJobScalarWhereInput
    data: XOR<ApplyJobUpdateManyMutationInput, ApplyJobUncheckedUpdateManyWithoutClientInput>
  }

  export type UserSchemaCreateWithoutProfileInput = {
    Name: string
    Email: string
    Password: string
    Experience: number
    Rating: number
    Skills?: UserSchemaCreateSkillsInput | string[]
    ApplyJob?: ApplyJobCreateNestedManyWithoutUserInput
  }

  export type UserSchemaUncheckedCreateWithoutProfileInput = {
    user_id?: number
    Name: string
    Email: string
    Password: string
    Experience: number
    Rating: number
    Skills?: UserSchemaCreateSkillsInput | string[]
    ApplyJob?: ApplyJobUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserSchemaCreateOrConnectWithoutProfileInput = {
    where: UserSchemaWhereUniqueInput
    create: XOR<UserSchemaCreateWithoutProfileInput, UserSchemaUncheckedCreateWithoutProfileInput>
  }

  export type ApplyJobCreateWithoutProfileInput = {
    jobtitle: string
    budget?: string
    timeline?: string
    user: UserSchemaCreateNestedOneWithoutApplyJobInput
    client: ClientSchemaCreateNestedOneWithoutApplyJobsInput
  }

  export type ApplyJobUncheckedCreateWithoutProfileInput = {
    applyjobid?: number
    clientid: number
    jobtitle: string
    budget?: string
    timeline?: string
  }

  export type ApplyJobCreateOrConnectWithoutProfileInput = {
    where: ApplyJobWhereUniqueInput
    create: XOR<ApplyJobCreateWithoutProfileInput, ApplyJobUncheckedCreateWithoutProfileInput>
  }

  export type ApplyJobCreateManyProfileInputEnvelope = {
    data: ApplyJobCreateManyProfileInput | ApplyJobCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type UserSchemaUpsertWithoutProfileInput = {
    update: XOR<UserSchemaUpdateWithoutProfileInput, UserSchemaUncheckedUpdateWithoutProfileInput>
    create: XOR<UserSchemaCreateWithoutProfileInput, UserSchemaUncheckedCreateWithoutProfileInput>
    where?: UserSchemaWhereInput
  }

  export type UserSchemaUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserSchemaWhereInput
    data: XOR<UserSchemaUpdateWithoutProfileInput, UserSchemaUncheckedUpdateWithoutProfileInput>
  }

  export type UserSchemaUpdateWithoutProfileInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Experience?: IntFieldUpdateOperationsInput | number
    Rating?: IntFieldUpdateOperationsInput | number
    Skills?: UserSchemaUpdateSkillsInput | string[]
    ApplyJob?: ApplyJobUpdateManyWithoutUserNestedInput
  }

  export type UserSchemaUncheckedUpdateWithoutProfileInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Experience?: IntFieldUpdateOperationsInput | number
    Rating?: IntFieldUpdateOperationsInput | number
    Skills?: UserSchemaUpdateSkillsInput | string[]
    ApplyJob?: ApplyJobUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ApplyJobUpsertWithWhereUniqueWithoutProfileInput = {
    where: ApplyJobWhereUniqueInput
    update: XOR<ApplyJobUpdateWithoutProfileInput, ApplyJobUncheckedUpdateWithoutProfileInput>
    create: XOR<ApplyJobCreateWithoutProfileInput, ApplyJobUncheckedCreateWithoutProfileInput>
  }

  export type ApplyJobUpdateWithWhereUniqueWithoutProfileInput = {
    where: ApplyJobWhereUniqueInput
    data: XOR<ApplyJobUpdateWithoutProfileInput, ApplyJobUncheckedUpdateWithoutProfileInput>
  }

  export type ApplyJobUpdateManyWithWhereWithoutProfileInput = {
    where: ApplyJobScalarWhereInput
    data: XOR<ApplyJobUpdateManyMutationInput, ApplyJobUncheckedUpdateManyWithoutProfileInput>
  }

  export type ClientSchemaCreateWithoutJobschemaInput = {
    client_name: string
    Email: string
    Password: string
    Organization?: string | null
    ApplyJobs?: ApplyJobCreateNestedManyWithoutClientInput
  }

  export type ClientSchemaUncheckedCreateWithoutJobschemaInput = {
    client_id?: number
    client_name: string
    Email: string
    Password: string
    Organization?: string | null
    ApplyJobs?: ApplyJobUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientSchemaCreateOrConnectWithoutJobschemaInput = {
    where: ClientSchemaWhereUniqueInput
    create: XOR<ClientSchemaCreateWithoutJobschemaInput, ClientSchemaUncheckedCreateWithoutJobschemaInput>
  }

  export type ClientSchemaUpsertWithoutJobschemaInput = {
    update: XOR<ClientSchemaUpdateWithoutJobschemaInput, ClientSchemaUncheckedUpdateWithoutJobschemaInput>
    create: XOR<ClientSchemaCreateWithoutJobschemaInput, ClientSchemaUncheckedCreateWithoutJobschemaInput>
    where?: ClientSchemaWhereInput
  }

  export type ClientSchemaUpdateToOneWithWhereWithoutJobschemaInput = {
    where?: ClientSchemaWhereInput
    data: XOR<ClientSchemaUpdateWithoutJobschemaInput, ClientSchemaUncheckedUpdateWithoutJobschemaInput>
  }

  export type ClientSchemaUpdateWithoutJobschemaInput = {
    client_name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Organization?: NullableStringFieldUpdateOperationsInput | string | null
    ApplyJobs?: ApplyJobUpdateManyWithoutClientNestedInput
  }

  export type ClientSchemaUncheckedUpdateWithoutJobschemaInput = {
    client_id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Organization?: NullableStringFieldUpdateOperationsInput | string | null
    ApplyJobs?: ApplyJobUncheckedUpdateManyWithoutClientNestedInput
  }

  export type UserSchemaCreateWithoutApplyJobInput = {
    Name: string
    Email: string
    Password: string
    Experience: number
    Rating: number
    Skills?: UserSchemaCreateSkillsInput | string[]
    Profile?: ProfileSchemaCreateNestedOneWithoutUserInput
  }

  export type UserSchemaUncheckedCreateWithoutApplyJobInput = {
    user_id?: number
    Name: string
    Email: string
    Password: string
    Experience: number
    Rating: number
    Skills?: UserSchemaCreateSkillsInput | string[]
    Profile?: ProfileSchemaUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserSchemaCreateOrConnectWithoutApplyJobInput = {
    where: UserSchemaWhereUniqueInput
    create: XOR<UserSchemaCreateWithoutApplyJobInput, UserSchemaUncheckedCreateWithoutApplyJobInput>
  }

  export type ClientSchemaCreateWithoutApplyJobsInput = {
    client_name: string
    Email: string
    Password: string
    Organization?: string | null
    jobschema?: JobSchemaCreateNestedManyWithoutClientInput
  }

  export type ClientSchemaUncheckedCreateWithoutApplyJobsInput = {
    client_id?: number
    client_name: string
    Email: string
    Password: string
    Organization?: string | null
    jobschema?: JobSchemaUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientSchemaCreateOrConnectWithoutApplyJobsInput = {
    where: ClientSchemaWhereUniqueInput
    create: XOR<ClientSchemaCreateWithoutApplyJobsInput, ClientSchemaUncheckedCreateWithoutApplyJobsInput>
  }

  export type ProfileSchemaCreateWithoutApplyJobsInput = {
    About: string
    ProjectLink?: ProfileSchemaCreateProjectLinkInput | string[]
    user: UserSchemaCreateNestedOneWithoutProfileInput
  }

  export type ProfileSchemaUncheckedCreateWithoutApplyJobsInput = {
    profile_id?: number
    About: string
    ProjectLink?: ProfileSchemaCreateProjectLinkInput | string[]
    userid: number
  }

  export type ProfileSchemaCreateOrConnectWithoutApplyJobsInput = {
    where: ProfileSchemaWhereUniqueInput
    create: XOR<ProfileSchemaCreateWithoutApplyJobsInput, ProfileSchemaUncheckedCreateWithoutApplyJobsInput>
  }

  export type UserSchemaUpsertWithoutApplyJobInput = {
    update: XOR<UserSchemaUpdateWithoutApplyJobInput, UserSchemaUncheckedUpdateWithoutApplyJobInput>
    create: XOR<UserSchemaCreateWithoutApplyJobInput, UserSchemaUncheckedCreateWithoutApplyJobInput>
    where?: UserSchemaWhereInput
  }

  export type UserSchemaUpdateToOneWithWhereWithoutApplyJobInput = {
    where?: UserSchemaWhereInput
    data: XOR<UserSchemaUpdateWithoutApplyJobInput, UserSchemaUncheckedUpdateWithoutApplyJobInput>
  }

  export type UserSchemaUpdateWithoutApplyJobInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Experience?: IntFieldUpdateOperationsInput | number
    Rating?: IntFieldUpdateOperationsInput | number
    Skills?: UserSchemaUpdateSkillsInput | string[]
    Profile?: ProfileSchemaUpdateOneWithoutUserNestedInput
  }

  export type UserSchemaUncheckedUpdateWithoutApplyJobInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Experience?: IntFieldUpdateOperationsInput | number
    Rating?: IntFieldUpdateOperationsInput | number
    Skills?: UserSchemaUpdateSkillsInput | string[]
    Profile?: ProfileSchemaUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ClientSchemaUpsertWithoutApplyJobsInput = {
    update: XOR<ClientSchemaUpdateWithoutApplyJobsInput, ClientSchemaUncheckedUpdateWithoutApplyJobsInput>
    create: XOR<ClientSchemaCreateWithoutApplyJobsInput, ClientSchemaUncheckedCreateWithoutApplyJobsInput>
    where?: ClientSchemaWhereInput
  }

  export type ClientSchemaUpdateToOneWithWhereWithoutApplyJobsInput = {
    where?: ClientSchemaWhereInput
    data: XOR<ClientSchemaUpdateWithoutApplyJobsInput, ClientSchemaUncheckedUpdateWithoutApplyJobsInput>
  }

  export type ClientSchemaUpdateWithoutApplyJobsInput = {
    client_name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Organization?: NullableStringFieldUpdateOperationsInput | string | null
    jobschema?: JobSchemaUpdateManyWithoutClientNestedInput
  }

  export type ClientSchemaUncheckedUpdateWithoutApplyJobsInput = {
    client_id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Organization?: NullableStringFieldUpdateOperationsInput | string | null
    jobschema?: JobSchemaUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ProfileSchemaUpsertWithoutApplyJobsInput = {
    update: XOR<ProfileSchemaUpdateWithoutApplyJobsInput, ProfileSchemaUncheckedUpdateWithoutApplyJobsInput>
    create: XOR<ProfileSchemaCreateWithoutApplyJobsInput, ProfileSchemaUncheckedCreateWithoutApplyJobsInput>
    where?: ProfileSchemaWhereInput
  }

  export type ProfileSchemaUpdateToOneWithWhereWithoutApplyJobsInput = {
    where?: ProfileSchemaWhereInput
    data: XOR<ProfileSchemaUpdateWithoutApplyJobsInput, ProfileSchemaUncheckedUpdateWithoutApplyJobsInput>
  }

  export type ProfileSchemaUpdateWithoutApplyJobsInput = {
    About?: StringFieldUpdateOperationsInput | string
    ProjectLink?: ProfileSchemaUpdateProjectLinkInput | string[]
    user?: UserSchemaUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileSchemaUncheckedUpdateWithoutApplyJobsInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    About?: StringFieldUpdateOperationsInput | string
    ProjectLink?: ProfileSchemaUpdateProjectLinkInput | string[]
    userid?: IntFieldUpdateOperationsInput | number
  }

  export type ApplyJobCreateManyUserInput = {
    applyjobid?: number
    clientid: number
    jobtitle: string
    budget?: string
    timeline?: string
  }

  export type ApplyJobUpdateWithoutUserInput = {
    jobtitle?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    client?: ClientSchemaUpdateOneRequiredWithoutApplyJobsNestedInput
    profile?: ProfileSchemaUpdateOneRequiredWithoutApplyJobsNestedInput
  }

  export type ApplyJobUncheckedUpdateWithoutUserInput = {
    applyjobid?: IntFieldUpdateOperationsInput | number
    clientid?: IntFieldUpdateOperationsInput | number
    jobtitle?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
  }

  export type ApplyJobUncheckedUpdateManyWithoutUserInput = {
    applyjobid?: IntFieldUpdateOperationsInput | number
    clientid?: IntFieldUpdateOperationsInput | number
    jobtitle?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
  }

  export type JobSchemaCreateManyClientInput = {
    job_id?: number
    Job_titile: string
    Job_description: string
    Budget: string
    Timeline: string
  }

  export type ApplyJobCreateManyClientInput = {
    applyjobid?: number
    userid: number
    jobtitle: string
    budget?: string
    timeline?: string
  }

  export type JobSchemaUpdateWithoutClientInput = {
    Job_titile?: StringFieldUpdateOperationsInput | string
    Job_description?: StringFieldUpdateOperationsInput | string
    Budget?: StringFieldUpdateOperationsInput | string
    Timeline?: StringFieldUpdateOperationsInput | string
  }

  export type JobSchemaUncheckedUpdateWithoutClientInput = {
    job_id?: IntFieldUpdateOperationsInput | number
    Job_titile?: StringFieldUpdateOperationsInput | string
    Job_description?: StringFieldUpdateOperationsInput | string
    Budget?: StringFieldUpdateOperationsInput | string
    Timeline?: StringFieldUpdateOperationsInput | string
  }

  export type JobSchemaUncheckedUpdateManyWithoutClientInput = {
    job_id?: IntFieldUpdateOperationsInput | number
    Job_titile?: StringFieldUpdateOperationsInput | string
    Job_description?: StringFieldUpdateOperationsInput | string
    Budget?: StringFieldUpdateOperationsInput | string
    Timeline?: StringFieldUpdateOperationsInput | string
  }

  export type ApplyJobUpdateWithoutClientInput = {
    jobtitle?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    user?: UserSchemaUpdateOneRequiredWithoutApplyJobNestedInput
    profile?: ProfileSchemaUpdateOneRequiredWithoutApplyJobsNestedInput
  }

  export type ApplyJobUncheckedUpdateWithoutClientInput = {
    applyjobid?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    jobtitle?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
  }

  export type ApplyJobUncheckedUpdateManyWithoutClientInput = {
    applyjobid?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    jobtitle?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
  }

  export type ApplyJobCreateManyProfileInput = {
    applyjobid?: number
    clientid: number
    jobtitle: string
    budget?: string
    timeline?: string
  }

  export type ApplyJobUpdateWithoutProfileInput = {
    jobtitle?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    user?: UserSchemaUpdateOneRequiredWithoutApplyJobNestedInput
    client?: ClientSchemaUpdateOneRequiredWithoutApplyJobsNestedInput
  }

  export type ApplyJobUncheckedUpdateWithoutProfileInput = {
    applyjobid?: IntFieldUpdateOperationsInput | number
    clientid?: IntFieldUpdateOperationsInput | number
    jobtitle?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
  }

  export type ApplyJobUncheckedUpdateManyWithoutProfileInput = {
    applyjobid?: IntFieldUpdateOperationsInput | number
    clientid?: IntFieldUpdateOperationsInput | number
    jobtitle?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
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