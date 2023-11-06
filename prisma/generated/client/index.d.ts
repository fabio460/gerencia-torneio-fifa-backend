
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Torneio
 * 
 */
export type Torneio = $Result.DefaultSelection<Prisma.$TorneioPayload>
/**
 * Model Participantes
 * 
 */
export type Participantes = $Result.DefaultSelection<Prisma.$ParticipantesPayload>
/**
 * Model Jogadores
 * 
 */
export type Jogadores = $Result.DefaultSelection<Prisma.$JogadoresPayload>
/**
 * Model Estatistica
 * 
 */
export type Estatistica = $Result.DefaultSelection<Prisma.$EstatisticaPayload>
/**
 * Model PosicaoNoCampinho
 * 
 */
export type PosicaoNoCampinho = $Result.DefaultSelection<Prisma.$PosicaoNoCampinhoPayload>
/**
 * Model campeonato
 * 
 */
export type campeonato = $Result.DefaultSelection<Prisma.$campeonatoPayload>
/**
 * Model Rodada
 * 
 */
export type Rodada = $Result.DefaultSelection<Prisma.$RodadaPayload>
/**
 * Model TimesDaRodada
 * 
 */
export type TimesDaRodada = $Result.DefaultSelection<Prisma.$TimesDaRodadaPayload>
/**
 * Model tabelaDoCampeonato
 * 
 */
export type tabelaDoCampeonato = $Result.DefaultSelection<Prisma.$tabelaDoCampeonatoPayload>
/**
 * Model Resultados
 * 
 */
export type Resultados = $Result.DefaultSelection<Prisma.$ResultadosPayload>
/**
 * Model TabelaDeResultados
 * 
 */
export type TabelaDeResultados = $Result.DefaultSelection<Prisma.$TabelaDeResultadosPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs>;

  /**
   * `prisma.torneio`: Exposes CRUD operations for the **Torneio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Torneios
    * const torneios = await prisma.torneio.findMany()
    * ```
    */
  get torneio(): Prisma.TorneioDelegate<ExtArgs>;

  /**
   * `prisma.participantes`: Exposes CRUD operations for the **Participantes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participantes
    * const participantes = await prisma.participantes.findMany()
    * ```
    */
  get participantes(): Prisma.ParticipantesDelegate<ExtArgs>;

  /**
   * `prisma.jogadores`: Exposes CRUD operations for the **Jogadores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jogadores
    * const jogadores = await prisma.jogadores.findMany()
    * ```
    */
  get jogadores(): Prisma.JogadoresDelegate<ExtArgs>;

  /**
   * `prisma.estatistica`: Exposes CRUD operations for the **Estatistica** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estatisticas
    * const estatisticas = await prisma.estatistica.findMany()
    * ```
    */
  get estatistica(): Prisma.EstatisticaDelegate<ExtArgs>;

  /**
   * `prisma.posicaoNoCampinho`: Exposes CRUD operations for the **PosicaoNoCampinho** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PosicaoNoCampinhos
    * const posicaoNoCampinhos = await prisma.posicaoNoCampinho.findMany()
    * ```
    */
  get posicaoNoCampinho(): Prisma.PosicaoNoCampinhoDelegate<ExtArgs>;

  /**
   * `prisma.campeonato`: Exposes CRUD operations for the **campeonato** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campeonatoes
    * const campeonatoes = await prisma.campeonato.findMany()
    * ```
    */
  get campeonato(): Prisma.campeonatoDelegate<ExtArgs>;

  /**
   * `prisma.rodada`: Exposes CRUD operations for the **Rodada** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rodadas
    * const rodadas = await prisma.rodada.findMany()
    * ```
    */
  get rodada(): Prisma.RodadaDelegate<ExtArgs>;

  /**
   * `prisma.timesDaRodada`: Exposes CRUD operations for the **TimesDaRodada** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimesDaRodadas
    * const timesDaRodadas = await prisma.timesDaRodada.findMany()
    * ```
    */
  get timesDaRodada(): Prisma.TimesDaRodadaDelegate<ExtArgs>;

  /**
   * `prisma.tabelaDoCampeonato`: Exposes CRUD operations for the **tabelaDoCampeonato** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TabelaDoCampeonatoes
    * const tabelaDoCampeonatoes = await prisma.tabelaDoCampeonato.findMany()
    * ```
    */
  get tabelaDoCampeonato(): Prisma.tabelaDoCampeonatoDelegate<ExtArgs>;

  /**
   * `prisma.resultados`: Exposes CRUD operations for the **Resultados** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resultados
    * const resultados = await prisma.resultados.findMany()
    * ```
    */
  get resultados(): Prisma.ResultadosDelegate<ExtArgs>;

  /**
   * `prisma.tabelaDeResultados`: Exposes CRUD operations for the **TabelaDeResultados** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TabelaDeResultados
    * const tabelaDeResultados = await prisma.tabelaDeResultados.findMany()
    * ```
    */
  get tabelaDeResultados(): Prisma.TabelaDeResultadosDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Usuario: 'Usuario',
    Torneio: 'Torneio',
    Participantes: 'Participantes',
    Jogadores: 'Jogadores',
    Estatistica: 'Estatistica',
    PosicaoNoCampinho: 'PosicaoNoCampinho',
    campeonato: 'campeonato',
    Rodada: 'Rodada',
    TimesDaRodada: 'TimesDaRodada',
    tabelaDoCampeonato: 'tabelaDoCampeonato',
    Resultados: 'Resultados',
    TabelaDeResultados: 'TabelaDeResultados'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'usuario' | 'torneio' | 'participantes' | 'jogadores' | 'estatistica' | 'posicaoNoCampinho' | 'campeonato' | 'rodada' | 'timesDaRodada' | 'tabelaDoCampeonato' | 'resultados' | 'tabelaDeResultados'
      txIsolationLevel: never
    },
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UsuarioFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.UsuarioAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>,
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Torneio: {
        payload: Prisma.$TorneioPayload<ExtArgs>
        fields: Prisma.TorneioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TorneioFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TorneioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TorneioFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TorneioPayload>
          }
          findFirst: {
            args: Prisma.TorneioFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TorneioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TorneioFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TorneioPayload>
          }
          findMany: {
            args: Prisma.TorneioFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TorneioPayload>[]
          }
          create: {
            args: Prisma.TorneioCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TorneioPayload>
          }
          createMany: {
            args: Prisma.TorneioCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TorneioDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TorneioPayload>
          }
          update: {
            args: Prisma.TorneioUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TorneioPayload>
          }
          deleteMany: {
            args: Prisma.TorneioDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TorneioUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TorneioUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TorneioPayload>
          }
          aggregate: {
            args: Prisma.TorneioAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTorneio>
          }
          groupBy: {
            args: Prisma.TorneioGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TorneioGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TorneioFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.TorneioAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.TorneioCountArgs<ExtArgs>,
            result: $Utils.Optional<TorneioCountAggregateOutputType> | number
          }
        }
      }
      Participantes: {
        payload: Prisma.$ParticipantesPayload<ExtArgs>
        fields: Prisma.ParticipantesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipantesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParticipantesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipantesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParticipantesPayload>
          }
          findFirst: {
            args: Prisma.ParticipantesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParticipantesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipantesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParticipantesPayload>
          }
          findMany: {
            args: Prisma.ParticipantesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParticipantesPayload>[]
          }
          create: {
            args: Prisma.ParticipantesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParticipantesPayload>
          }
          createMany: {
            args: Prisma.ParticipantesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ParticipantesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParticipantesPayload>
          }
          update: {
            args: Prisma.ParticipantesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParticipantesPayload>
          }
          deleteMany: {
            args: Prisma.ParticipantesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipantesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ParticipantesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParticipantesPayload>
          }
          aggregate: {
            args: Prisma.ParticipantesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateParticipantes>
          }
          groupBy: {
            args: Prisma.ParticipantesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ParticipantesGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ParticipantesFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ParticipantesAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ParticipantesCountArgs<ExtArgs>,
            result: $Utils.Optional<ParticipantesCountAggregateOutputType> | number
          }
        }
      }
      Jogadores: {
        payload: Prisma.$JogadoresPayload<ExtArgs>
        fields: Prisma.JogadoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JogadoresFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JogadoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JogadoresFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JogadoresPayload>
          }
          findFirst: {
            args: Prisma.JogadoresFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JogadoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JogadoresFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JogadoresPayload>
          }
          findMany: {
            args: Prisma.JogadoresFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JogadoresPayload>[]
          }
          create: {
            args: Prisma.JogadoresCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JogadoresPayload>
          }
          createMany: {
            args: Prisma.JogadoresCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.JogadoresDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JogadoresPayload>
          }
          update: {
            args: Prisma.JogadoresUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JogadoresPayload>
          }
          deleteMany: {
            args: Prisma.JogadoresDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.JogadoresUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.JogadoresUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JogadoresPayload>
          }
          aggregate: {
            args: Prisma.JogadoresAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateJogadores>
          }
          groupBy: {
            args: Prisma.JogadoresGroupByArgs<ExtArgs>,
            result: $Utils.Optional<JogadoresGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.JogadoresFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.JogadoresAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.JogadoresCountArgs<ExtArgs>,
            result: $Utils.Optional<JogadoresCountAggregateOutputType> | number
          }
        }
      }
      Estatistica: {
        payload: Prisma.$EstatisticaPayload<ExtArgs>
        fields: Prisma.EstatisticaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstatisticaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstatisticaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstatisticaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstatisticaPayload>
          }
          findFirst: {
            args: Prisma.EstatisticaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstatisticaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstatisticaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstatisticaPayload>
          }
          findMany: {
            args: Prisma.EstatisticaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstatisticaPayload>[]
          }
          create: {
            args: Prisma.EstatisticaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstatisticaPayload>
          }
          createMany: {
            args: Prisma.EstatisticaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EstatisticaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstatisticaPayload>
          }
          update: {
            args: Prisma.EstatisticaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstatisticaPayload>
          }
          deleteMany: {
            args: Prisma.EstatisticaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EstatisticaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EstatisticaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstatisticaPayload>
          }
          aggregate: {
            args: Prisma.EstatisticaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEstatistica>
          }
          groupBy: {
            args: Prisma.EstatisticaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EstatisticaGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EstatisticaFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.EstatisticaAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.EstatisticaCountArgs<ExtArgs>,
            result: $Utils.Optional<EstatisticaCountAggregateOutputType> | number
          }
        }
      }
      PosicaoNoCampinho: {
        payload: Prisma.$PosicaoNoCampinhoPayload<ExtArgs>
        fields: Prisma.PosicaoNoCampinhoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PosicaoNoCampinhoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PosicaoNoCampinhoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PosicaoNoCampinhoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PosicaoNoCampinhoPayload>
          }
          findFirst: {
            args: Prisma.PosicaoNoCampinhoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PosicaoNoCampinhoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PosicaoNoCampinhoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PosicaoNoCampinhoPayload>
          }
          findMany: {
            args: Prisma.PosicaoNoCampinhoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PosicaoNoCampinhoPayload>[]
          }
          create: {
            args: Prisma.PosicaoNoCampinhoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PosicaoNoCampinhoPayload>
          }
          createMany: {
            args: Prisma.PosicaoNoCampinhoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PosicaoNoCampinhoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PosicaoNoCampinhoPayload>
          }
          update: {
            args: Prisma.PosicaoNoCampinhoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PosicaoNoCampinhoPayload>
          }
          deleteMany: {
            args: Prisma.PosicaoNoCampinhoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PosicaoNoCampinhoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PosicaoNoCampinhoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PosicaoNoCampinhoPayload>
          }
          aggregate: {
            args: Prisma.PosicaoNoCampinhoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePosicaoNoCampinho>
          }
          groupBy: {
            args: Prisma.PosicaoNoCampinhoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PosicaoNoCampinhoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PosicaoNoCampinhoFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.PosicaoNoCampinhoAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.PosicaoNoCampinhoCountArgs<ExtArgs>,
            result: $Utils.Optional<PosicaoNoCampinhoCountAggregateOutputType> | number
          }
        }
      }
      campeonato: {
        payload: Prisma.$campeonatoPayload<ExtArgs>
        fields: Prisma.campeonatoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.campeonatoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$campeonatoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.campeonatoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$campeonatoPayload>
          }
          findFirst: {
            args: Prisma.campeonatoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$campeonatoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.campeonatoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$campeonatoPayload>
          }
          findMany: {
            args: Prisma.campeonatoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$campeonatoPayload>[]
          }
          create: {
            args: Prisma.campeonatoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$campeonatoPayload>
          }
          createMany: {
            args: Prisma.campeonatoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.campeonatoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$campeonatoPayload>
          }
          update: {
            args: Prisma.campeonatoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$campeonatoPayload>
          }
          deleteMany: {
            args: Prisma.campeonatoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.campeonatoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.campeonatoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$campeonatoPayload>
          }
          aggregate: {
            args: Prisma.CampeonatoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCampeonato>
          }
          groupBy: {
            args: Prisma.campeonatoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CampeonatoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.campeonatoFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.campeonatoAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.campeonatoCountArgs<ExtArgs>,
            result: $Utils.Optional<CampeonatoCountAggregateOutputType> | number
          }
        }
      }
      Rodada: {
        payload: Prisma.$RodadaPayload<ExtArgs>
        fields: Prisma.RodadaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RodadaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RodadaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RodadaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RodadaPayload>
          }
          findFirst: {
            args: Prisma.RodadaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RodadaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RodadaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RodadaPayload>
          }
          findMany: {
            args: Prisma.RodadaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RodadaPayload>[]
          }
          create: {
            args: Prisma.RodadaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RodadaPayload>
          }
          createMany: {
            args: Prisma.RodadaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RodadaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RodadaPayload>
          }
          update: {
            args: Prisma.RodadaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RodadaPayload>
          }
          deleteMany: {
            args: Prisma.RodadaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RodadaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RodadaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RodadaPayload>
          }
          aggregate: {
            args: Prisma.RodadaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRodada>
          }
          groupBy: {
            args: Prisma.RodadaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RodadaGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RodadaFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.RodadaAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.RodadaCountArgs<ExtArgs>,
            result: $Utils.Optional<RodadaCountAggregateOutputType> | number
          }
        }
      }
      TimesDaRodada: {
        payload: Prisma.$TimesDaRodadaPayload<ExtArgs>
        fields: Prisma.TimesDaRodadaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimesDaRodadaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimesDaRodadaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimesDaRodadaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimesDaRodadaPayload>
          }
          findFirst: {
            args: Prisma.TimesDaRodadaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimesDaRodadaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimesDaRodadaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimesDaRodadaPayload>
          }
          findMany: {
            args: Prisma.TimesDaRodadaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimesDaRodadaPayload>[]
          }
          create: {
            args: Prisma.TimesDaRodadaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimesDaRodadaPayload>
          }
          createMany: {
            args: Prisma.TimesDaRodadaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TimesDaRodadaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimesDaRodadaPayload>
          }
          update: {
            args: Prisma.TimesDaRodadaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimesDaRodadaPayload>
          }
          deleteMany: {
            args: Prisma.TimesDaRodadaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TimesDaRodadaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TimesDaRodadaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimesDaRodadaPayload>
          }
          aggregate: {
            args: Prisma.TimesDaRodadaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTimesDaRodada>
          }
          groupBy: {
            args: Prisma.TimesDaRodadaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TimesDaRodadaGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TimesDaRodadaFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.TimesDaRodadaAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.TimesDaRodadaCountArgs<ExtArgs>,
            result: $Utils.Optional<TimesDaRodadaCountAggregateOutputType> | number
          }
        }
      }
      tabelaDoCampeonato: {
        payload: Prisma.$tabelaDoCampeonatoPayload<ExtArgs>
        fields: Prisma.tabelaDoCampeonatoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tabelaDoCampeonatoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tabelaDoCampeonatoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tabelaDoCampeonatoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tabelaDoCampeonatoPayload>
          }
          findFirst: {
            args: Prisma.tabelaDoCampeonatoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tabelaDoCampeonatoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tabelaDoCampeonatoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tabelaDoCampeonatoPayload>
          }
          findMany: {
            args: Prisma.tabelaDoCampeonatoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tabelaDoCampeonatoPayload>[]
          }
          create: {
            args: Prisma.tabelaDoCampeonatoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tabelaDoCampeonatoPayload>
          }
          createMany: {
            args: Prisma.tabelaDoCampeonatoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.tabelaDoCampeonatoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tabelaDoCampeonatoPayload>
          }
          update: {
            args: Prisma.tabelaDoCampeonatoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tabelaDoCampeonatoPayload>
          }
          deleteMany: {
            args: Prisma.tabelaDoCampeonatoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.tabelaDoCampeonatoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.tabelaDoCampeonatoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tabelaDoCampeonatoPayload>
          }
          aggregate: {
            args: Prisma.TabelaDoCampeonatoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTabelaDoCampeonato>
          }
          groupBy: {
            args: Prisma.tabelaDoCampeonatoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TabelaDoCampeonatoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.tabelaDoCampeonatoFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.tabelaDoCampeonatoAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.tabelaDoCampeonatoCountArgs<ExtArgs>,
            result: $Utils.Optional<TabelaDoCampeonatoCountAggregateOutputType> | number
          }
        }
      }
      Resultados: {
        payload: Prisma.$ResultadosPayload<ExtArgs>
        fields: Prisma.ResultadosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResultadosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResultadosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResultadosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResultadosPayload>
          }
          findFirst: {
            args: Prisma.ResultadosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResultadosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResultadosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResultadosPayload>
          }
          findMany: {
            args: Prisma.ResultadosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResultadosPayload>[]
          }
          create: {
            args: Prisma.ResultadosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResultadosPayload>
          }
          createMany: {
            args: Prisma.ResultadosCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ResultadosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResultadosPayload>
          }
          update: {
            args: Prisma.ResultadosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResultadosPayload>
          }
          deleteMany: {
            args: Prisma.ResultadosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ResultadosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ResultadosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResultadosPayload>
          }
          aggregate: {
            args: Prisma.ResultadosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateResultados>
          }
          groupBy: {
            args: Prisma.ResultadosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ResultadosGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ResultadosFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ResultadosAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ResultadosCountArgs<ExtArgs>,
            result: $Utils.Optional<ResultadosCountAggregateOutputType> | number
          }
        }
      }
      TabelaDeResultados: {
        payload: Prisma.$TabelaDeResultadosPayload<ExtArgs>
        fields: Prisma.TabelaDeResultadosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TabelaDeResultadosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TabelaDeResultadosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TabelaDeResultadosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TabelaDeResultadosPayload>
          }
          findFirst: {
            args: Prisma.TabelaDeResultadosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TabelaDeResultadosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TabelaDeResultadosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TabelaDeResultadosPayload>
          }
          findMany: {
            args: Prisma.TabelaDeResultadosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TabelaDeResultadosPayload>[]
          }
          create: {
            args: Prisma.TabelaDeResultadosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TabelaDeResultadosPayload>
          }
          createMany: {
            args: Prisma.TabelaDeResultadosCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TabelaDeResultadosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TabelaDeResultadosPayload>
          }
          update: {
            args: Prisma.TabelaDeResultadosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TabelaDeResultadosPayload>
          }
          deleteMany: {
            args: Prisma.TabelaDeResultadosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TabelaDeResultadosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TabelaDeResultadosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TabelaDeResultadosPayload>
          }
          aggregate: {
            args: Prisma.TabelaDeResultadosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTabelaDeResultados>
          }
          groupBy: {
            args: Prisma.TabelaDeResultadosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TabelaDeResultadosGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TabelaDeResultadosFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.TabelaDeResultadosAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.TabelaDeResultadosCountArgs<ExtArgs>,
            result: $Utils.Optional<TabelaDeResultadosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    torneio: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    torneio?: boolean | UsuarioCountOutputTypeCountTorneioArgs
  }

  // Custom InputTypes

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountTorneioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TorneioWhereInput
  }



  /**
   * Count Type TorneioCountOutputType
   */

  export type TorneioCountOutputType = {
    participantes: number
    estatistica: number
    campeonato: number
  }

  export type TorneioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participantes?: boolean | TorneioCountOutputTypeCountParticipantesArgs
    estatistica?: boolean | TorneioCountOutputTypeCountEstatisticaArgs
    campeonato?: boolean | TorneioCountOutputTypeCountCampeonatoArgs
  }

  // Custom InputTypes

  /**
   * TorneioCountOutputType without action
   */
  export type TorneioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TorneioCountOutputType
     */
    select?: TorneioCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TorneioCountOutputType without action
   */
  export type TorneioCountOutputTypeCountParticipantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantesWhereInput
  }


  /**
   * TorneioCountOutputType without action
   */
  export type TorneioCountOutputTypeCountEstatisticaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstatisticaWhereInput
  }


  /**
   * TorneioCountOutputType without action
   */
  export type TorneioCountOutputTypeCountCampeonatoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: campeonatoWhereInput
  }



  /**
   * Count Type ParticipantesCountOutputType
   */

  export type ParticipantesCountOutputType = {
    jogadores: number
  }

  export type ParticipantesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jogadores?: boolean | ParticipantesCountOutputTypeCountJogadoresArgs
  }

  // Custom InputTypes

  /**
   * ParticipantesCountOutputType without action
   */
  export type ParticipantesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantesCountOutputType
     */
    select?: ParticipantesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ParticipantesCountOutputType without action
   */
  export type ParticipantesCountOutputTypeCountJogadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JogadoresWhereInput
  }



  /**
   * Count Type JogadoresCountOutputType
   */

  export type JogadoresCountOutputType = {
    posicaoNoCampinho: number
  }

  export type JogadoresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posicaoNoCampinho?: boolean | JogadoresCountOutputTypeCountPosicaoNoCampinhoArgs
  }

  // Custom InputTypes

  /**
   * JogadoresCountOutputType without action
   */
  export type JogadoresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JogadoresCountOutputType
     */
    select?: JogadoresCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * JogadoresCountOutputType without action
   */
  export type JogadoresCountOutputTypeCountPosicaoNoCampinhoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PosicaoNoCampinhoWhereInput
  }



  /**
   * Count Type CampeonatoCountOutputType
   */

  export type CampeonatoCountOutputType = {
    rodada: number
  }

  export type CampeonatoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rodada?: boolean | CampeonatoCountOutputTypeCountRodadaArgs
  }

  // Custom InputTypes

  /**
   * CampeonatoCountOutputType without action
   */
  export type CampeonatoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampeonatoCountOutputType
     */
    select?: CampeonatoCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CampeonatoCountOutputType without action
   */
  export type CampeonatoCountOutputTypeCountRodadaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RodadaWhereInput
  }



  /**
   * Count Type RodadaCountOutputType
   */

  export type RodadaCountOutputType = {
    mandante: number
    visitante: number
  }

  export type RodadaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mandante?: boolean | RodadaCountOutputTypeCountMandanteArgs
    visitante?: boolean | RodadaCountOutputTypeCountVisitanteArgs
  }

  // Custom InputTypes

  /**
   * RodadaCountOutputType without action
   */
  export type RodadaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RodadaCountOutputType
     */
    select?: RodadaCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * RodadaCountOutputType without action
   */
  export type RodadaCountOutputTypeCountMandanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimesDaRodadaWhereInput
  }


  /**
   * RodadaCountOutputType without action
   */
  export type RodadaCountOutputTypeCountVisitanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimesDaRodadaWhereInput
  }



  /**
   * Count Type TimesDaRodadaCountOutputType
   */

  export type TimesDaRodadaCountOutputType = {
    mandante: number
    visitante: number
  }

  export type TimesDaRodadaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mandante?: boolean | TimesDaRodadaCountOutputTypeCountMandanteArgs
    visitante?: boolean | TimesDaRodadaCountOutputTypeCountVisitanteArgs
  }

  // Custom InputTypes

  /**
   * TimesDaRodadaCountOutputType without action
   */
  export type TimesDaRodadaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimesDaRodadaCountOutputType
     */
    select?: TimesDaRodadaCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TimesDaRodadaCountOutputType without action
   */
  export type TimesDaRodadaCountOutputTypeCountMandanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RodadaWhereInput
  }


  /**
   * TimesDaRodadaCountOutputType without action
   */
  export type TimesDaRodadaCountOutputTypeCountVisitanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RodadaWhereInput
  }



  /**
   * Count Type TabelaDeResultadosCountOutputType
   */

  export type TabelaDeResultadosCountOutputType = {
    resultados: number
  }

  export type TabelaDeResultadosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resultados?: boolean | TabelaDeResultadosCountOutputTypeCountResultadosArgs
  }

  // Custom InputTypes

  /**
   * TabelaDeResultadosCountOutputType without action
   */
  export type TabelaDeResultadosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TabelaDeResultadosCountOutputType
     */
    select?: TabelaDeResultadosCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TabelaDeResultadosCountOutputType without action
   */
  export type TabelaDeResultadosCountOutputTypeCountResultadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultadosWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    email: string | null
    nome: string | null
    senha: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    email: string | null
    nome: string | null
    senha: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    email: number
    nome: number
    senha: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    email?: true
    nome?: true
    senha?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    email?: true
    nome?: true
    senha?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    email?: true
    nome?: true
    senha?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    email: string
    nome: string
    senha: string
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nome?: boolean
    senha?: boolean
    torneio?: boolean | Usuario$torneioArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    email?: boolean
    nome?: boolean
    senha?: boolean
  }

  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    torneio?: boolean | Usuario$torneioArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      torneio: Prisma.$TorneioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      nome: string
      senha: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }


  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsuarioFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Usuario that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsuarioFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UsuarioFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
    **/
    create<T extends UsuarioCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Usuarios.
     *     @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     *     @example
     *     // Create many Usuarios
     *     const usuario = await prisma.usuario.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsuarioCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
    **/
    delete<T extends UsuarioDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsuarioUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsuarioDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsuarioUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
    **/
    upsert<T extends UsuarioUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * @param {UsuarioFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const usuario = await prisma.usuario.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UsuarioFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Usuario.
     * @param {UsuarioAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const usuario = await prisma.usuario.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UsuarioAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    torneio<T extends Usuario$torneioArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$torneioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TorneioPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Usuario model
   */ 
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }


  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }


  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }


  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }


  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }


  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
  }


  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }


  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
  }


  /**
   * Usuario findRaw
   */
  export type UsuarioFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Usuario aggregateRaw
   */
  export type UsuarioAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Usuario.torneio
   */
  export type Usuario$torneioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneio
     */
    select?: TorneioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TorneioInclude<ExtArgs> | null
    where?: TorneioWhereInput
    orderBy?: TorneioOrderByWithRelationInput | TorneioOrderByWithRelationInput[]
    cursor?: TorneioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TorneioScalarFieldEnum | TorneioScalarFieldEnum[]
  }


  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
  }



  /**
   * Model Torneio
   */

  export type AggregateTorneio = {
    _count: TorneioCountAggregateOutputType | null
    _min: TorneioMinAggregateOutputType | null
    _max: TorneioMaxAggregateOutputType | null
  }

  export type TorneioMinAggregateOutputType = {
    id: string | null
    idUsuario: string | null
    nome: string | null
  }

  export type TorneioMaxAggregateOutputType = {
    id: string | null
    idUsuario: string | null
    nome: string | null
  }

  export type TorneioCountAggregateOutputType = {
    id: number
    idUsuario: number
    nome: number
    _all: number
  }


  export type TorneioMinAggregateInputType = {
    id?: true
    idUsuario?: true
    nome?: true
  }

  export type TorneioMaxAggregateInputType = {
    id?: true
    idUsuario?: true
    nome?: true
  }

  export type TorneioCountAggregateInputType = {
    id?: true
    idUsuario?: true
    nome?: true
    _all?: true
  }

  export type TorneioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Torneio to aggregate.
     */
    where?: TorneioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Torneios to fetch.
     */
    orderBy?: TorneioOrderByWithRelationInput | TorneioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TorneioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Torneios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Torneios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Torneios
    **/
    _count?: true | TorneioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TorneioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TorneioMaxAggregateInputType
  }

  export type GetTorneioAggregateType<T extends TorneioAggregateArgs> = {
        [P in keyof T & keyof AggregateTorneio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTorneio[P]>
      : GetScalarType<T[P], AggregateTorneio[P]>
  }




  export type TorneioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TorneioWhereInput
    orderBy?: TorneioOrderByWithAggregationInput | TorneioOrderByWithAggregationInput[]
    by: TorneioScalarFieldEnum[] | TorneioScalarFieldEnum
    having?: TorneioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TorneioCountAggregateInputType | true
    _min?: TorneioMinAggregateInputType
    _max?: TorneioMaxAggregateInputType
  }

  export type TorneioGroupByOutputType = {
    id: string
    idUsuario: string
    nome: string
    _count: TorneioCountAggregateOutputType | null
    _min: TorneioMinAggregateOutputType | null
    _max: TorneioMaxAggregateOutputType | null
  }

  type GetTorneioGroupByPayload<T extends TorneioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TorneioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TorneioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TorneioGroupByOutputType[P]>
            : GetScalarType<T[P], TorneioGroupByOutputType[P]>
        }
      >
    >


  export type TorneioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idUsuario?: boolean
    nome?: boolean
    participantes?: boolean | Torneio$participantesArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    estatistica?: boolean | Torneio$estatisticaArgs<ExtArgs>
    campeonato?: boolean | Torneio$campeonatoArgs<ExtArgs>
    _count?: boolean | TorneioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["torneio"]>

  export type TorneioSelectScalar = {
    id?: boolean
    idUsuario?: boolean
    nome?: boolean
  }

  export type TorneioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participantes?: boolean | Torneio$participantesArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    estatistica?: boolean | Torneio$estatisticaArgs<ExtArgs>
    campeonato?: boolean | Torneio$campeonatoArgs<ExtArgs>
    _count?: boolean | TorneioCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TorneioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Torneio"
    objects: {
      participantes: Prisma.$ParticipantesPayload<ExtArgs>[]
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      estatistica: Prisma.$EstatisticaPayload<ExtArgs>[]
      campeonato: Prisma.$campeonatoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      idUsuario: string
      nome: string
    }, ExtArgs["result"]["torneio"]>
    composites: {}
  }


  type TorneioGetPayload<S extends boolean | null | undefined | TorneioDefaultArgs> = $Result.GetResult<Prisma.$TorneioPayload, S>

  type TorneioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TorneioFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TorneioCountAggregateInputType | true
    }

  export interface TorneioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Torneio'], meta: { name: 'Torneio' } }
    /**
     * Find zero or one Torneio that matches the filter.
     * @param {TorneioFindUniqueArgs} args - Arguments to find a Torneio
     * @example
     * // Get one Torneio
     * const torneio = await prisma.torneio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TorneioFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TorneioFindUniqueArgs<ExtArgs>>
    ): Prisma__TorneioClient<$Result.GetResult<Prisma.$TorneioPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Torneio that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TorneioFindUniqueOrThrowArgs} args - Arguments to find a Torneio
     * @example
     * // Get one Torneio
     * const torneio = await prisma.torneio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TorneioFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TorneioFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TorneioClient<$Result.GetResult<Prisma.$TorneioPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Torneio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TorneioFindFirstArgs} args - Arguments to find a Torneio
     * @example
     * // Get one Torneio
     * const torneio = await prisma.torneio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TorneioFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TorneioFindFirstArgs<ExtArgs>>
    ): Prisma__TorneioClient<$Result.GetResult<Prisma.$TorneioPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Torneio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TorneioFindFirstOrThrowArgs} args - Arguments to find a Torneio
     * @example
     * // Get one Torneio
     * const torneio = await prisma.torneio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TorneioFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TorneioFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TorneioClient<$Result.GetResult<Prisma.$TorneioPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Torneios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TorneioFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Torneios
     * const torneios = await prisma.torneio.findMany()
     * 
     * // Get first 10 Torneios
     * const torneios = await prisma.torneio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const torneioWithIdOnly = await prisma.torneio.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TorneioFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TorneioFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TorneioPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Torneio.
     * @param {TorneioCreateArgs} args - Arguments to create a Torneio.
     * @example
     * // Create one Torneio
     * const Torneio = await prisma.torneio.create({
     *   data: {
     *     // ... data to create a Torneio
     *   }
     * })
     * 
    **/
    create<T extends TorneioCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TorneioCreateArgs<ExtArgs>>
    ): Prisma__TorneioClient<$Result.GetResult<Prisma.$TorneioPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Torneios.
     *     @param {TorneioCreateManyArgs} args - Arguments to create many Torneios.
     *     @example
     *     // Create many Torneios
     *     const torneio = await prisma.torneio.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TorneioCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TorneioCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Torneio.
     * @param {TorneioDeleteArgs} args - Arguments to delete one Torneio.
     * @example
     * // Delete one Torneio
     * const Torneio = await prisma.torneio.delete({
     *   where: {
     *     // ... filter to delete one Torneio
     *   }
     * })
     * 
    **/
    delete<T extends TorneioDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TorneioDeleteArgs<ExtArgs>>
    ): Prisma__TorneioClient<$Result.GetResult<Prisma.$TorneioPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Torneio.
     * @param {TorneioUpdateArgs} args - Arguments to update one Torneio.
     * @example
     * // Update one Torneio
     * const torneio = await prisma.torneio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TorneioUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TorneioUpdateArgs<ExtArgs>>
    ): Prisma__TorneioClient<$Result.GetResult<Prisma.$TorneioPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Torneios.
     * @param {TorneioDeleteManyArgs} args - Arguments to filter Torneios to delete.
     * @example
     * // Delete a few Torneios
     * const { count } = await prisma.torneio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TorneioDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TorneioDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Torneios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TorneioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Torneios
     * const torneio = await prisma.torneio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TorneioUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TorneioUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Torneio.
     * @param {TorneioUpsertArgs} args - Arguments to update or create a Torneio.
     * @example
     * // Update or create a Torneio
     * const torneio = await prisma.torneio.upsert({
     *   create: {
     *     // ... data to create a Torneio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Torneio we want to update
     *   }
     * })
    **/
    upsert<T extends TorneioUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TorneioUpsertArgs<ExtArgs>>
    ): Prisma__TorneioClient<$Result.GetResult<Prisma.$TorneioPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Torneios that matches the filter.
     * @param {TorneioFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const torneio = await prisma.torneio.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: TorneioFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Torneio.
     * @param {TorneioAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const torneio = await prisma.torneio.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: TorneioAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Torneios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TorneioCountArgs} args - Arguments to filter Torneios to count.
     * @example
     * // Count the number of Torneios
     * const count = await prisma.torneio.count({
     *   where: {
     *     // ... the filter for the Torneios we want to count
     *   }
     * })
    **/
    count<T extends TorneioCountArgs>(
      args?: Subset<T, TorneioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TorneioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Torneio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TorneioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TorneioAggregateArgs>(args: Subset<T, TorneioAggregateArgs>): Prisma.PrismaPromise<GetTorneioAggregateType<T>>

    /**
     * Group by Torneio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TorneioGroupByArgs} args - Group by arguments.
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
      T extends TorneioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TorneioGroupByArgs['orderBy'] }
        : { orderBy?: TorneioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TorneioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTorneioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Torneio model
   */
  readonly fields: TorneioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Torneio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TorneioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    participantes<T extends Torneio$participantesArgs<ExtArgs> = {}>(args?: Subset<T, Torneio$participantesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantesPayload<ExtArgs>, T, 'findMany'> | Null>;

    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    estatistica<T extends Torneio$estatisticaArgs<ExtArgs> = {}>(args?: Subset<T, Torneio$estatisticaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstatisticaPayload<ExtArgs>, T, 'findMany'> | Null>;

    campeonato<T extends Torneio$campeonatoArgs<ExtArgs> = {}>(args?: Subset<T, Torneio$campeonatoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$campeonatoPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Torneio model
   */ 
  interface TorneioFieldRefs {
    readonly id: FieldRef<"Torneio", 'String'>
    readonly idUsuario: FieldRef<"Torneio", 'String'>
    readonly nome: FieldRef<"Torneio", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Torneio findUnique
   */
  export type TorneioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneio
     */
    select?: TorneioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TorneioInclude<ExtArgs> | null
    /**
     * Filter, which Torneio to fetch.
     */
    where: TorneioWhereUniqueInput
  }


  /**
   * Torneio findUniqueOrThrow
   */
  export type TorneioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneio
     */
    select?: TorneioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TorneioInclude<ExtArgs> | null
    /**
     * Filter, which Torneio to fetch.
     */
    where: TorneioWhereUniqueInput
  }


  /**
   * Torneio findFirst
   */
  export type TorneioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneio
     */
    select?: TorneioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TorneioInclude<ExtArgs> | null
    /**
     * Filter, which Torneio to fetch.
     */
    where?: TorneioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Torneios to fetch.
     */
    orderBy?: TorneioOrderByWithRelationInput | TorneioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Torneios.
     */
    cursor?: TorneioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Torneios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Torneios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Torneios.
     */
    distinct?: TorneioScalarFieldEnum | TorneioScalarFieldEnum[]
  }


  /**
   * Torneio findFirstOrThrow
   */
  export type TorneioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneio
     */
    select?: TorneioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TorneioInclude<ExtArgs> | null
    /**
     * Filter, which Torneio to fetch.
     */
    where?: TorneioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Torneios to fetch.
     */
    orderBy?: TorneioOrderByWithRelationInput | TorneioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Torneios.
     */
    cursor?: TorneioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Torneios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Torneios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Torneios.
     */
    distinct?: TorneioScalarFieldEnum | TorneioScalarFieldEnum[]
  }


  /**
   * Torneio findMany
   */
  export type TorneioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneio
     */
    select?: TorneioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TorneioInclude<ExtArgs> | null
    /**
     * Filter, which Torneios to fetch.
     */
    where?: TorneioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Torneios to fetch.
     */
    orderBy?: TorneioOrderByWithRelationInput | TorneioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Torneios.
     */
    cursor?: TorneioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Torneios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Torneios.
     */
    skip?: number
    distinct?: TorneioScalarFieldEnum | TorneioScalarFieldEnum[]
  }


  /**
   * Torneio create
   */
  export type TorneioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneio
     */
    select?: TorneioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TorneioInclude<ExtArgs> | null
    /**
     * The data needed to create a Torneio.
     */
    data: XOR<TorneioCreateInput, TorneioUncheckedCreateInput>
  }


  /**
   * Torneio createMany
   */
  export type TorneioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Torneios.
     */
    data: TorneioCreateManyInput | TorneioCreateManyInput[]
  }


  /**
   * Torneio update
   */
  export type TorneioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneio
     */
    select?: TorneioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TorneioInclude<ExtArgs> | null
    /**
     * The data needed to update a Torneio.
     */
    data: XOR<TorneioUpdateInput, TorneioUncheckedUpdateInput>
    /**
     * Choose, which Torneio to update.
     */
    where: TorneioWhereUniqueInput
  }


  /**
   * Torneio updateMany
   */
  export type TorneioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Torneios.
     */
    data: XOR<TorneioUpdateManyMutationInput, TorneioUncheckedUpdateManyInput>
    /**
     * Filter which Torneios to update
     */
    where?: TorneioWhereInput
  }


  /**
   * Torneio upsert
   */
  export type TorneioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneio
     */
    select?: TorneioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TorneioInclude<ExtArgs> | null
    /**
     * The filter to search for the Torneio to update in case it exists.
     */
    where: TorneioWhereUniqueInput
    /**
     * In case the Torneio found by the `where` argument doesn't exist, create a new Torneio with this data.
     */
    create: XOR<TorneioCreateInput, TorneioUncheckedCreateInput>
    /**
     * In case the Torneio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TorneioUpdateInput, TorneioUncheckedUpdateInput>
  }


  /**
   * Torneio delete
   */
  export type TorneioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneio
     */
    select?: TorneioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TorneioInclude<ExtArgs> | null
    /**
     * Filter which Torneio to delete.
     */
    where: TorneioWhereUniqueInput
  }


  /**
   * Torneio deleteMany
   */
  export type TorneioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Torneios to delete
     */
    where?: TorneioWhereInput
  }


  /**
   * Torneio findRaw
   */
  export type TorneioFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Torneio aggregateRaw
   */
  export type TorneioAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Torneio.participantes
   */
  export type Torneio$participantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participantes
     */
    select?: ParticipantesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParticipantesInclude<ExtArgs> | null
    where?: ParticipantesWhereInput
    orderBy?: ParticipantesOrderByWithRelationInput | ParticipantesOrderByWithRelationInput[]
    cursor?: ParticipantesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipantesScalarFieldEnum | ParticipantesScalarFieldEnum[]
  }


  /**
   * Torneio.estatistica
   */
  export type Torneio$estatisticaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estatistica
     */
    select?: EstatisticaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstatisticaInclude<ExtArgs> | null
    where?: EstatisticaWhereInput
    orderBy?: EstatisticaOrderByWithRelationInput | EstatisticaOrderByWithRelationInput[]
    cursor?: EstatisticaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EstatisticaScalarFieldEnum | EstatisticaScalarFieldEnum[]
  }


  /**
   * Torneio.campeonato
   */
  export type Torneio$campeonatoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campeonato
     */
    select?: campeonatoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: campeonatoInclude<ExtArgs> | null
    where?: campeonatoWhereInput
    orderBy?: campeonatoOrderByWithRelationInput | campeonatoOrderByWithRelationInput[]
    cursor?: campeonatoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampeonatoScalarFieldEnum | CampeonatoScalarFieldEnum[]
  }


  /**
   * Torneio without action
   */
  export type TorneioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneio
     */
    select?: TorneioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TorneioInclude<ExtArgs> | null
  }



  /**
   * Model Participantes
   */

  export type AggregateParticipantes = {
    _count: ParticipantesCountAggregateOutputType | null
    _avg: ParticipantesAvgAggregateOutputType | null
    _sum: ParticipantesSumAggregateOutputType | null
    _min: ParticipantesMinAggregateOutputType | null
    _max: ParticipantesMaxAggregateOutputType | null
  }

  export type ParticipantesAvgAggregateOutputType = {
    saldo: number | null
  }

  export type ParticipantesSumAggregateOutputType = {
    saldo: number | null
  }

  export type ParticipantesMinAggregateOutputType = {
    id: string | null
    nome: string | null
    saldo: number | null
    time: string | null
    emblemaDoTime: string | null
    idTorneio: string | null
  }

  export type ParticipantesMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    saldo: number | null
    time: string | null
    emblemaDoTime: string | null
    idTorneio: string | null
  }

  export type ParticipantesCountAggregateOutputType = {
    id: number
    nome: number
    saldo: number
    time: number
    emblemaDoTime: number
    idTorneio: number
    _all: number
  }


  export type ParticipantesAvgAggregateInputType = {
    saldo?: true
  }

  export type ParticipantesSumAggregateInputType = {
    saldo?: true
  }

  export type ParticipantesMinAggregateInputType = {
    id?: true
    nome?: true
    saldo?: true
    time?: true
    emblemaDoTime?: true
    idTorneio?: true
  }

  export type ParticipantesMaxAggregateInputType = {
    id?: true
    nome?: true
    saldo?: true
    time?: true
    emblemaDoTime?: true
    idTorneio?: true
  }

  export type ParticipantesCountAggregateInputType = {
    id?: true
    nome?: true
    saldo?: true
    time?: true
    emblemaDoTime?: true
    idTorneio?: true
    _all?: true
  }

  export type ParticipantesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participantes to aggregate.
     */
    where?: ParticipantesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participantes to fetch.
     */
    orderBy?: ParticipantesOrderByWithRelationInput | ParticipantesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipantesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Participantes
    **/
    _count?: true | ParticipantesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParticipantesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParticipantesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipantesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipantesMaxAggregateInputType
  }

  export type GetParticipantesAggregateType<T extends ParticipantesAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipantes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipantes[P]>
      : GetScalarType<T[P], AggregateParticipantes[P]>
  }




  export type ParticipantesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantesWhereInput
    orderBy?: ParticipantesOrderByWithAggregationInput | ParticipantesOrderByWithAggregationInput[]
    by: ParticipantesScalarFieldEnum[] | ParticipantesScalarFieldEnum
    having?: ParticipantesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipantesCountAggregateInputType | true
    _avg?: ParticipantesAvgAggregateInputType
    _sum?: ParticipantesSumAggregateInputType
    _min?: ParticipantesMinAggregateInputType
    _max?: ParticipantesMaxAggregateInputType
  }

  export type ParticipantesGroupByOutputType = {
    id: string
    nome: string
    saldo: number | null
    time: string | null
    emblemaDoTime: string | null
    idTorneio: string
    _count: ParticipantesCountAggregateOutputType | null
    _avg: ParticipantesAvgAggregateOutputType | null
    _sum: ParticipantesSumAggregateOutputType | null
    _min: ParticipantesMinAggregateOutputType | null
    _max: ParticipantesMaxAggregateOutputType | null
  }

  type GetParticipantesGroupByPayload<T extends ParticipantesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipantesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipantesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipantesGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipantesGroupByOutputType[P]>
        }
      >
    >


  export type ParticipantesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    saldo?: boolean
    time?: boolean
    emblemaDoTime?: boolean
    idTorneio?: boolean
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
    jogadores?: boolean | Participantes$jogadoresArgs<ExtArgs>
    _count?: boolean | ParticipantesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participantes"]>

  export type ParticipantesSelectScalar = {
    id?: boolean
    nome?: boolean
    saldo?: boolean
    time?: boolean
    emblemaDoTime?: boolean
    idTorneio?: boolean
  }

  export type ParticipantesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
    jogadores?: boolean | Participantes$jogadoresArgs<ExtArgs>
    _count?: boolean | ParticipantesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ParticipantesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Participantes"
    objects: {
      torneio: Prisma.$TorneioPayload<ExtArgs>
      jogadores: Prisma.$JogadoresPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      saldo: number | null
      time: string | null
      emblemaDoTime: string | null
      idTorneio: string
    }, ExtArgs["result"]["participantes"]>
    composites: {}
  }


  type ParticipantesGetPayload<S extends boolean | null | undefined | ParticipantesDefaultArgs> = $Result.GetResult<Prisma.$ParticipantesPayload, S>

  type ParticipantesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ParticipantesFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ParticipantesCountAggregateInputType | true
    }

  export interface ParticipantesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Participantes'], meta: { name: 'Participantes' } }
    /**
     * Find zero or one Participantes that matches the filter.
     * @param {ParticipantesFindUniqueArgs} args - Arguments to find a Participantes
     * @example
     * // Get one Participantes
     * const participantes = await prisma.participantes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ParticipantesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ParticipantesFindUniqueArgs<ExtArgs>>
    ): Prisma__ParticipantesClient<$Result.GetResult<Prisma.$ParticipantesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Participantes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ParticipantesFindUniqueOrThrowArgs} args - Arguments to find a Participantes
     * @example
     * // Get one Participantes
     * const participantes = await prisma.participantes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ParticipantesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ParticipantesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ParticipantesClient<$Result.GetResult<Prisma.$ParticipantesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Participantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantesFindFirstArgs} args - Arguments to find a Participantes
     * @example
     * // Get one Participantes
     * const participantes = await prisma.participantes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ParticipantesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ParticipantesFindFirstArgs<ExtArgs>>
    ): Prisma__ParticipantesClient<$Result.GetResult<Prisma.$ParticipantesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Participantes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantesFindFirstOrThrowArgs} args - Arguments to find a Participantes
     * @example
     * // Get one Participantes
     * const participantes = await prisma.participantes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ParticipantesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ParticipantesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ParticipantesClient<$Result.GetResult<Prisma.$ParticipantesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Participantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participantes
     * const participantes = await prisma.participantes.findMany()
     * 
     * // Get first 10 Participantes
     * const participantes = await prisma.participantes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participantesWithIdOnly = await prisma.participantes.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ParticipantesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ParticipantesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Participantes.
     * @param {ParticipantesCreateArgs} args - Arguments to create a Participantes.
     * @example
     * // Create one Participantes
     * const Participantes = await prisma.participantes.create({
     *   data: {
     *     // ... data to create a Participantes
     *   }
     * })
     * 
    **/
    create<T extends ParticipantesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ParticipantesCreateArgs<ExtArgs>>
    ): Prisma__ParticipantesClient<$Result.GetResult<Prisma.$ParticipantesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Participantes.
     *     @param {ParticipantesCreateManyArgs} args - Arguments to create many Participantes.
     *     @example
     *     // Create many Participantes
     *     const participantes = await prisma.participantes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ParticipantesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ParticipantesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Participantes.
     * @param {ParticipantesDeleteArgs} args - Arguments to delete one Participantes.
     * @example
     * // Delete one Participantes
     * const Participantes = await prisma.participantes.delete({
     *   where: {
     *     // ... filter to delete one Participantes
     *   }
     * })
     * 
    **/
    delete<T extends ParticipantesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ParticipantesDeleteArgs<ExtArgs>>
    ): Prisma__ParticipantesClient<$Result.GetResult<Prisma.$ParticipantesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Participantes.
     * @param {ParticipantesUpdateArgs} args - Arguments to update one Participantes.
     * @example
     * // Update one Participantes
     * const participantes = await prisma.participantes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ParticipantesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ParticipantesUpdateArgs<ExtArgs>>
    ): Prisma__ParticipantesClient<$Result.GetResult<Prisma.$ParticipantesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Participantes.
     * @param {ParticipantesDeleteManyArgs} args - Arguments to filter Participantes to delete.
     * @example
     * // Delete a few Participantes
     * const { count } = await prisma.participantes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ParticipantesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ParticipantesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participantes
     * const participantes = await prisma.participantes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ParticipantesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ParticipantesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Participantes.
     * @param {ParticipantesUpsertArgs} args - Arguments to update or create a Participantes.
     * @example
     * // Update or create a Participantes
     * const participantes = await prisma.participantes.upsert({
     *   create: {
     *     // ... data to create a Participantes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participantes we want to update
     *   }
     * })
    **/
    upsert<T extends ParticipantesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ParticipantesUpsertArgs<ExtArgs>>
    ): Prisma__ParticipantesClient<$Result.GetResult<Prisma.$ParticipantesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Participantes that matches the filter.
     * @param {ParticipantesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const participantes = await prisma.participantes.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ParticipantesFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Participantes.
     * @param {ParticipantesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const participantes = await prisma.participantes.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ParticipantesAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Participantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantesCountArgs} args - Arguments to filter Participantes to count.
     * @example
     * // Count the number of Participantes
     * const count = await prisma.participantes.count({
     *   where: {
     *     // ... the filter for the Participantes we want to count
     *   }
     * })
    **/
    count<T extends ParticipantesCountArgs>(
      args?: Subset<T, ParticipantesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipantesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParticipantesAggregateArgs>(args: Subset<T, ParticipantesAggregateArgs>): Prisma.PrismaPromise<GetParticipantesAggregateType<T>>

    /**
     * Group by Participantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantesGroupByArgs} args - Group by arguments.
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
      T extends ParticipantesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipantesGroupByArgs['orderBy'] }
        : { orderBy?: ParticipantesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParticipantesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipantesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Participantes model
   */
  readonly fields: ParticipantesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Participantes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipantesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    torneio<T extends TorneioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TorneioDefaultArgs<ExtArgs>>): Prisma__TorneioClient<$Result.GetResult<Prisma.$TorneioPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    jogadores<T extends Participantes$jogadoresArgs<ExtArgs> = {}>(args?: Subset<T, Participantes$jogadoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JogadoresPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Participantes model
   */ 
  interface ParticipantesFieldRefs {
    readonly id: FieldRef<"Participantes", 'String'>
    readonly nome: FieldRef<"Participantes", 'String'>
    readonly saldo: FieldRef<"Participantes", 'Float'>
    readonly time: FieldRef<"Participantes", 'String'>
    readonly emblemaDoTime: FieldRef<"Participantes", 'String'>
    readonly idTorneio: FieldRef<"Participantes", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Participantes findUnique
   */
  export type ParticipantesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participantes
     */
    select?: ParticipantesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParticipantesInclude<ExtArgs> | null
    /**
     * Filter, which Participantes to fetch.
     */
    where: ParticipantesWhereUniqueInput
  }


  /**
   * Participantes findUniqueOrThrow
   */
  export type ParticipantesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participantes
     */
    select?: ParticipantesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParticipantesInclude<ExtArgs> | null
    /**
     * Filter, which Participantes to fetch.
     */
    where: ParticipantesWhereUniqueInput
  }


  /**
   * Participantes findFirst
   */
  export type ParticipantesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participantes
     */
    select?: ParticipantesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParticipantesInclude<ExtArgs> | null
    /**
     * Filter, which Participantes to fetch.
     */
    where?: ParticipantesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participantes to fetch.
     */
    orderBy?: ParticipantesOrderByWithRelationInput | ParticipantesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participantes.
     */
    cursor?: ParticipantesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participantes.
     */
    distinct?: ParticipantesScalarFieldEnum | ParticipantesScalarFieldEnum[]
  }


  /**
   * Participantes findFirstOrThrow
   */
  export type ParticipantesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participantes
     */
    select?: ParticipantesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParticipantesInclude<ExtArgs> | null
    /**
     * Filter, which Participantes to fetch.
     */
    where?: ParticipantesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participantes to fetch.
     */
    orderBy?: ParticipantesOrderByWithRelationInput | ParticipantesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participantes.
     */
    cursor?: ParticipantesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participantes.
     */
    distinct?: ParticipantesScalarFieldEnum | ParticipantesScalarFieldEnum[]
  }


  /**
   * Participantes findMany
   */
  export type ParticipantesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participantes
     */
    select?: ParticipantesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParticipantesInclude<ExtArgs> | null
    /**
     * Filter, which Participantes to fetch.
     */
    where?: ParticipantesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participantes to fetch.
     */
    orderBy?: ParticipantesOrderByWithRelationInput | ParticipantesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Participantes.
     */
    cursor?: ParticipantesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participantes.
     */
    skip?: number
    distinct?: ParticipantesScalarFieldEnum | ParticipantesScalarFieldEnum[]
  }


  /**
   * Participantes create
   */
  export type ParticipantesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participantes
     */
    select?: ParticipantesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParticipantesInclude<ExtArgs> | null
    /**
     * The data needed to create a Participantes.
     */
    data: XOR<ParticipantesCreateInput, ParticipantesUncheckedCreateInput>
  }


  /**
   * Participantes createMany
   */
  export type ParticipantesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Participantes.
     */
    data: ParticipantesCreateManyInput | ParticipantesCreateManyInput[]
  }


  /**
   * Participantes update
   */
  export type ParticipantesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participantes
     */
    select?: ParticipantesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParticipantesInclude<ExtArgs> | null
    /**
     * The data needed to update a Participantes.
     */
    data: XOR<ParticipantesUpdateInput, ParticipantesUncheckedUpdateInput>
    /**
     * Choose, which Participantes to update.
     */
    where: ParticipantesWhereUniqueInput
  }


  /**
   * Participantes updateMany
   */
  export type ParticipantesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Participantes.
     */
    data: XOR<ParticipantesUpdateManyMutationInput, ParticipantesUncheckedUpdateManyInput>
    /**
     * Filter which Participantes to update
     */
    where?: ParticipantesWhereInput
  }


  /**
   * Participantes upsert
   */
  export type ParticipantesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participantes
     */
    select?: ParticipantesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParticipantesInclude<ExtArgs> | null
    /**
     * The filter to search for the Participantes to update in case it exists.
     */
    where: ParticipantesWhereUniqueInput
    /**
     * In case the Participantes found by the `where` argument doesn't exist, create a new Participantes with this data.
     */
    create: XOR<ParticipantesCreateInput, ParticipantesUncheckedCreateInput>
    /**
     * In case the Participantes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipantesUpdateInput, ParticipantesUncheckedUpdateInput>
  }


  /**
   * Participantes delete
   */
  export type ParticipantesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participantes
     */
    select?: ParticipantesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParticipantesInclude<ExtArgs> | null
    /**
     * Filter which Participantes to delete.
     */
    where: ParticipantesWhereUniqueInput
  }


  /**
   * Participantes deleteMany
   */
  export type ParticipantesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participantes to delete
     */
    where?: ParticipantesWhereInput
  }


  /**
   * Participantes findRaw
   */
  export type ParticipantesFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Participantes aggregateRaw
   */
  export type ParticipantesAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Participantes.jogadores
   */
  export type Participantes$jogadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogadores
     */
    select?: JogadoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JogadoresInclude<ExtArgs> | null
    where?: JogadoresWhereInput
    orderBy?: JogadoresOrderByWithRelationInput | JogadoresOrderByWithRelationInput[]
    cursor?: JogadoresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JogadoresScalarFieldEnum | JogadoresScalarFieldEnum[]
  }


  /**
   * Participantes without action
   */
  export type ParticipantesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participantes
     */
    select?: ParticipantesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParticipantesInclude<ExtArgs> | null
  }



  /**
   * Model Jogadores
   */

  export type AggregateJogadores = {
    _count: JogadoresCountAggregateOutputType | null
    _min: JogadoresMinAggregateOutputType | null
    _max: JogadoresMaxAggregateOutputType | null
  }

  export type JogadoresMinAggregateOutputType = {
    id: string | null
    nome: string | null
    imagemDoJogador: string | null
    nacionalidade: string | null
    imagemDaNacionalidade: string | null
    escudoDoTime: string | null
    posicao: string | null
    overall: string | null
    valorDoJogador: string | null
    time: string | null
    liga: string | null
    linkSoFifa: string | null
    idParticipante: string | null
  }

  export type JogadoresMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    imagemDoJogador: string | null
    nacionalidade: string | null
    imagemDaNacionalidade: string | null
    escudoDoTime: string | null
    posicao: string | null
    overall: string | null
    valorDoJogador: string | null
    time: string | null
    liga: string | null
    linkSoFifa: string | null
    idParticipante: string | null
  }

  export type JogadoresCountAggregateOutputType = {
    id: number
    nome: number
    imagemDoJogador: number
    nacionalidade: number
    imagemDaNacionalidade: number
    escudoDoTime: number
    posicao: number
    overall: number
    valorDoJogador: number
    time: number
    liga: number
    linkSoFifa: number
    idParticipante: number
    _all: number
  }


  export type JogadoresMinAggregateInputType = {
    id?: true
    nome?: true
    imagemDoJogador?: true
    nacionalidade?: true
    imagemDaNacionalidade?: true
    escudoDoTime?: true
    posicao?: true
    overall?: true
    valorDoJogador?: true
    time?: true
    liga?: true
    linkSoFifa?: true
    idParticipante?: true
  }

  export type JogadoresMaxAggregateInputType = {
    id?: true
    nome?: true
    imagemDoJogador?: true
    nacionalidade?: true
    imagemDaNacionalidade?: true
    escudoDoTime?: true
    posicao?: true
    overall?: true
    valorDoJogador?: true
    time?: true
    liga?: true
    linkSoFifa?: true
    idParticipante?: true
  }

  export type JogadoresCountAggregateInputType = {
    id?: true
    nome?: true
    imagemDoJogador?: true
    nacionalidade?: true
    imagemDaNacionalidade?: true
    escudoDoTime?: true
    posicao?: true
    overall?: true
    valorDoJogador?: true
    time?: true
    liga?: true
    linkSoFifa?: true
    idParticipante?: true
    _all?: true
  }

  export type JogadoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jogadores to aggregate.
     */
    where?: JogadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jogadores to fetch.
     */
    orderBy?: JogadoresOrderByWithRelationInput | JogadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JogadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jogadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jogadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jogadores
    **/
    _count?: true | JogadoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JogadoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JogadoresMaxAggregateInputType
  }

  export type GetJogadoresAggregateType<T extends JogadoresAggregateArgs> = {
        [P in keyof T & keyof AggregateJogadores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJogadores[P]>
      : GetScalarType<T[P], AggregateJogadores[P]>
  }




  export type JogadoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JogadoresWhereInput
    orderBy?: JogadoresOrderByWithAggregationInput | JogadoresOrderByWithAggregationInput[]
    by: JogadoresScalarFieldEnum[] | JogadoresScalarFieldEnum
    having?: JogadoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JogadoresCountAggregateInputType | true
    _min?: JogadoresMinAggregateInputType
    _max?: JogadoresMaxAggregateInputType
  }

  export type JogadoresGroupByOutputType = {
    id: string
    nome: string
    imagemDoJogador: string
    nacionalidade: string
    imagemDaNacionalidade: string
    escudoDoTime: string
    posicao: string
    overall: string
    valorDoJogador: string
    time: string
    liga: string
    linkSoFifa: string
    idParticipante: string
    _count: JogadoresCountAggregateOutputType | null
    _min: JogadoresMinAggregateOutputType | null
    _max: JogadoresMaxAggregateOutputType | null
  }

  type GetJogadoresGroupByPayload<T extends JogadoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JogadoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JogadoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JogadoresGroupByOutputType[P]>
            : GetScalarType<T[P], JogadoresGroupByOutputType[P]>
        }
      >
    >


  export type JogadoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    imagemDoJogador?: boolean
    nacionalidade?: boolean
    imagemDaNacionalidade?: boolean
    escudoDoTime?: boolean
    posicao?: boolean
    overall?: boolean
    valorDoJogador?: boolean
    time?: boolean
    liga?: boolean
    linkSoFifa?: boolean
    idParticipante?: boolean
    posicaoNoCampinho?: boolean | Jogadores$posicaoNoCampinhoArgs<ExtArgs>
    participantes?: boolean | ParticipantesDefaultArgs<ExtArgs>
    _count?: boolean | JogadoresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jogadores"]>

  export type JogadoresSelectScalar = {
    id?: boolean
    nome?: boolean
    imagemDoJogador?: boolean
    nacionalidade?: boolean
    imagemDaNacionalidade?: boolean
    escudoDoTime?: boolean
    posicao?: boolean
    overall?: boolean
    valorDoJogador?: boolean
    time?: boolean
    liga?: boolean
    linkSoFifa?: boolean
    idParticipante?: boolean
  }

  export type JogadoresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posicaoNoCampinho?: boolean | Jogadores$posicaoNoCampinhoArgs<ExtArgs>
    participantes?: boolean | ParticipantesDefaultArgs<ExtArgs>
    _count?: boolean | JogadoresCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $JogadoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Jogadores"
    objects: {
      posicaoNoCampinho: Prisma.$PosicaoNoCampinhoPayload<ExtArgs>[]
      participantes: Prisma.$ParticipantesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      imagemDoJogador: string
      nacionalidade: string
      imagemDaNacionalidade: string
      escudoDoTime: string
      posicao: string
      overall: string
      valorDoJogador: string
      time: string
      liga: string
      linkSoFifa: string
      idParticipante: string
    }, ExtArgs["result"]["jogadores"]>
    composites: {}
  }


  type JogadoresGetPayload<S extends boolean | null | undefined | JogadoresDefaultArgs> = $Result.GetResult<Prisma.$JogadoresPayload, S>

  type JogadoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<JogadoresFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: JogadoresCountAggregateInputType | true
    }

  export interface JogadoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Jogadores'], meta: { name: 'Jogadores' } }
    /**
     * Find zero or one Jogadores that matches the filter.
     * @param {JogadoresFindUniqueArgs} args - Arguments to find a Jogadores
     * @example
     * // Get one Jogadores
     * const jogadores = await prisma.jogadores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends JogadoresFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, JogadoresFindUniqueArgs<ExtArgs>>
    ): Prisma__JogadoresClient<$Result.GetResult<Prisma.$JogadoresPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Jogadores that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {JogadoresFindUniqueOrThrowArgs} args - Arguments to find a Jogadores
     * @example
     * // Get one Jogadores
     * const jogadores = await prisma.jogadores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends JogadoresFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JogadoresFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__JogadoresClient<$Result.GetResult<Prisma.$JogadoresPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Jogadores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogadoresFindFirstArgs} args - Arguments to find a Jogadores
     * @example
     * // Get one Jogadores
     * const jogadores = await prisma.jogadores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends JogadoresFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, JogadoresFindFirstArgs<ExtArgs>>
    ): Prisma__JogadoresClient<$Result.GetResult<Prisma.$JogadoresPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Jogadores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogadoresFindFirstOrThrowArgs} args - Arguments to find a Jogadores
     * @example
     * // Get one Jogadores
     * const jogadores = await prisma.jogadores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends JogadoresFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JogadoresFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__JogadoresClient<$Result.GetResult<Prisma.$JogadoresPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Jogadores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogadoresFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jogadores
     * const jogadores = await prisma.jogadores.findMany()
     * 
     * // Get first 10 Jogadores
     * const jogadores = await prisma.jogadores.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jogadoresWithIdOnly = await prisma.jogadores.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends JogadoresFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JogadoresFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JogadoresPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Jogadores.
     * @param {JogadoresCreateArgs} args - Arguments to create a Jogadores.
     * @example
     * // Create one Jogadores
     * const Jogadores = await prisma.jogadores.create({
     *   data: {
     *     // ... data to create a Jogadores
     *   }
     * })
     * 
    **/
    create<T extends JogadoresCreateArgs<ExtArgs>>(
      args: SelectSubset<T, JogadoresCreateArgs<ExtArgs>>
    ): Prisma__JogadoresClient<$Result.GetResult<Prisma.$JogadoresPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Jogadores.
     *     @param {JogadoresCreateManyArgs} args - Arguments to create many Jogadores.
     *     @example
     *     // Create many Jogadores
     *     const jogadores = await prisma.jogadores.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends JogadoresCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JogadoresCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Jogadores.
     * @param {JogadoresDeleteArgs} args - Arguments to delete one Jogadores.
     * @example
     * // Delete one Jogadores
     * const Jogadores = await prisma.jogadores.delete({
     *   where: {
     *     // ... filter to delete one Jogadores
     *   }
     * })
     * 
    **/
    delete<T extends JogadoresDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, JogadoresDeleteArgs<ExtArgs>>
    ): Prisma__JogadoresClient<$Result.GetResult<Prisma.$JogadoresPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Jogadores.
     * @param {JogadoresUpdateArgs} args - Arguments to update one Jogadores.
     * @example
     * // Update one Jogadores
     * const jogadores = await prisma.jogadores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends JogadoresUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, JogadoresUpdateArgs<ExtArgs>>
    ): Prisma__JogadoresClient<$Result.GetResult<Prisma.$JogadoresPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Jogadores.
     * @param {JogadoresDeleteManyArgs} args - Arguments to filter Jogadores to delete.
     * @example
     * // Delete a few Jogadores
     * const { count } = await prisma.jogadores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends JogadoresDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JogadoresDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jogadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogadoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jogadores
     * const jogadores = await prisma.jogadores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends JogadoresUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, JogadoresUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jogadores.
     * @param {JogadoresUpsertArgs} args - Arguments to update or create a Jogadores.
     * @example
     * // Update or create a Jogadores
     * const jogadores = await prisma.jogadores.upsert({
     *   create: {
     *     // ... data to create a Jogadores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jogadores we want to update
     *   }
     * })
    **/
    upsert<T extends JogadoresUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, JogadoresUpsertArgs<ExtArgs>>
    ): Prisma__JogadoresClient<$Result.GetResult<Prisma.$JogadoresPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Jogadores that matches the filter.
     * @param {JogadoresFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const jogadores = await prisma.jogadores.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: JogadoresFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Jogadores.
     * @param {JogadoresAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const jogadores = await prisma.jogadores.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: JogadoresAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Jogadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogadoresCountArgs} args - Arguments to filter Jogadores to count.
     * @example
     * // Count the number of Jogadores
     * const count = await prisma.jogadores.count({
     *   where: {
     *     // ... the filter for the Jogadores we want to count
     *   }
     * })
    **/
    count<T extends JogadoresCountArgs>(
      args?: Subset<T, JogadoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JogadoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jogadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogadoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JogadoresAggregateArgs>(args: Subset<T, JogadoresAggregateArgs>): Prisma.PrismaPromise<GetJogadoresAggregateType<T>>

    /**
     * Group by Jogadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogadoresGroupByArgs} args - Group by arguments.
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
      T extends JogadoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JogadoresGroupByArgs['orderBy'] }
        : { orderBy?: JogadoresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JogadoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJogadoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Jogadores model
   */
  readonly fields: JogadoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Jogadores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JogadoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    posicaoNoCampinho<T extends Jogadores$posicaoNoCampinhoArgs<ExtArgs> = {}>(args?: Subset<T, Jogadores$posicaoNoCampinhoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PosicaoNoCampinhoPayload<ExtArgs>, T, 'findMany'> | Null>;

    participantes<T extends ParticipantesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParticipantesDefaultArgs<ExtArgs>>): Prisma__ParticipantesClient<$Result.GetResult<Prisma.$ParticipantesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Jogadores model
   */ 
  interface JogadoresFieldRefs {
    readonly id: FieldRef<"Jogadores", 'String'>
    readonly nome: FieldRef<"Jogadores", 'String'>
    readonly imagemDoJogador: FieldRef<"Jogadores", 'String'>
    readonly nacionalidade: FieldRef<"Jogadores", 'String'>
    readonly imagemDaNacionalidade: FieldRef<"Jogadores", 'String'>
    readonly escudoDoTime: FieldRef<"Jogadores", 'String'>
    readonly posicao: FieldRef<"Jogadores", 'String'>
    readonly overall: FieldRef<"Jogadores", 'String'>
    readonly valorDoJogador: FieldRef<"Jogadores", 'String'>
    readonly time: FieldRef<"Jogadores", 'String'>
    readonly liga: FieldRef<"Jogadores", 'String'>
    readonly linkSoFifa: FieldRef<"Jogadores", 'String'>
    readonly idParticipante: FieldRef<"Jogadores", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Jogadores findUnique
   */
  export type JogadoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogadores
     */
    select?: JogadoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JogadoresInclude<ExtArgs> | null
    /**
     * Filter, which Jogadores to fetch.
     */
    where: JogadoresWhereUniqueInput
  }


  /**
   * Jogadores findUniqueOrThrow
   */
  export type JogadoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogadores
     */
    select?: JogadoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JogadoresInclude<ExtArgs> | null
    /**
     * Filter, which Jogadores to fetch.
     */
    where: JogadoresWhereUniqueInput
  }


  /**
   * Jogadores findFirst
   */
  export type JogadoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogadores
     */
    select?: JogadoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JogadoresInclude<ExtArgs> | null
    /**
     * Filter, which Jogadores to fetch.
     */
    where?: JogadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jogadores to fetch.
     */
    orderBy?: JogadoresOrderByWithRelationInput | JogadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jogadores.
     */
    cursor?: JogadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jogadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jogadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jogadores.
     */
    distinct?: JogadoresScalarFieldEnum | JogadoresScalarFieldEnum[]
  }


  /**
   * Jogadores findFirstOrThrow
   */
  export type JogadoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogadores
     */
    select?: JogadoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JogadoresInclude<ExtArgs> | null
    /**
     * Filter, which Jogadores to fetch.
     */
    where?: JogadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jogadores to fetch.
     */
    orderBy?: JogadoresOrderByWithRelationInput | JogadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jogadores.
     */
    cursor?: JogadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jogadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jogadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jogadores.
     */
    distinct?: JogadoresScalarFieldEnum | JogadoresScalarFieldEnum[]
  }


  /**
   * Jogadores findMany
   */
  export type JogadoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogadores
     */
    select?: JogadoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JogadoresInclude<ExtArgs> | null
    /**
     * Filter, which Jogadores to fetch.
     */
    where?: JogadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jogadores to fetch.
     */
    orderBy?: JogadoresOrderByWithRelationInput | JogadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jogadores.
     */
    cursor?: JogadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jogadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jogadores.
     */
    skip?: number
    distinct?: JogadoresScalarFieldEnum | JogadoresScalarFieldEnum[]
  }


  /**
   * Jogadores create
   */
  export type JogadoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogadores
     */
    select?: JogadoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JogadoresInclude<ExtArgs> | null
    /**
     * The data needed to create a Jogadores.
     */
    data: XOR<JogadoresCreateInput, JogadoresUncheckedCreateInput>
  }


  /**
   * Jogadores createMany
   */
  export type JogadoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jogadores.
     */
    data: JogadoresCreateManyInput | JogadoresCreateManyInput[]
  }


  /**
   * Jogadores update
   */
  export type JogadoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogadores
     */
    select?: JogadoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JogadoresInclude<ExtArgs> | null
    /**
     * The data needed to update a Jogadores.
     */
    data: XOR<JogadoresUpdateInput, JogadoresUncheckedUpdateInput>
    /**
     * Choose, which Jogadores to update.
     */
    where: JogadoresWhereUniqueInput
  }


  /**
   * Jogadores updateMany
   */
  export type JogadoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jogadores.
     */
    data: XOR<JogadoresUpdateManyMutationInput, JogadoresUncheckedUpdateManyInput>
    /**
     * Filter which Jogadores to update
     */
    where?: JogadoresWhereInput
  }


  /**
   * Jogadores upsert
   */
  export type JogadoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogadores
     */
    select?: JogadoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JogadoresInclude<ExtArgs> | null
    /**
     * The filter to search for the Jogadores to update in case it exists.
     */
    where: JogadoresWhereUniqueInput
    /**
     * In case the Jogadores found by the `where` argument doesn't exist, create a new Jogadores with this data.
     */
    create: XOR<JogadoresCreateInput, JogadoresUncheckedCreateInput>
    /**
     * In case the Jogadores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JogadoresUpdateInput, JogadoresUncheckedUpdateInput>
  }


  /**
   * Jogadores delete
   */
  export type JogadoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogadores
     */
    select?: JogadoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JogadoresInclude<ExtArgs> | null
    /**
     * Filter which Jogadores to delete.
     */
    where: JogadoresWhereUniqueInput
  }


  /**
   * Jogadores deleteMany
   */
  export type JogadoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jogadores to delete
     */
    where?: JogadoresWhereInput
  }


  /**
   * Jogadores findRaw
   */
  export type JogadoresFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Jogadores aggregateRaw
   */
  export type JogadoresAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Jogadores.posicaoNoCampinho
   */
  export type Jogadores$posicaoNoCampinhoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosicaoNoCampinho
     */
    select?: PosicaoNoCampinhoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PosicaoNoCampinhoInclude<ExtArgs> | null
    where?: PosicaoNoCampinhoWhereInput
    orderBy?: PosicaoNoCampinhoOrderByWithRelationInput | PosicaoNoCampinhoOrderByWithRelationInput[]
    cursor?: PosicaoNoCampinhoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PosicaoNoCampinhoScalarFieldEnum | PosicaoNoCampinhoScalarFieldEnum[]
  }


  /**
   * Jogadores without action
   */
  export type JogadoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogadores
     */
    select?: JogadoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JogadoresInclude<ExtArgs> | null
  }



  /**
   * Model Estatistica
   */

  export type AggregateEstatistica = {
    _count: EstatisticaCountAggregateOutputType | null
    _min: EstatisticaMinAggregateOutputType | null
    _max: EstatisticaMaxAggregateOutputType | null
  }

  export type EstatisticaMinAggregateOutputType = {
    id: string | null
    vencedor: string | null
    data: Date | null
    torneioId: string | null
  }

  export type EstatisticaMaxAggregateOutputType = {
    id: string | null
    vencedor: string | null
    data: Date | null
    torneioId: string | null
  }

  export type EstatisticaCountAggregateOutputType = {
    id: number
    vencedor: number
    assistentes: number
    artilheiros: number
    data: number
    torneioId: number
    _all: number
  }


  export type EstatisticaMinAggregateInputType = {
    id?: true
    vencedor?: true
    data?: true
    torneioId?: true
  }

  export type EstatisticaMaxAggregateInputType = {
    id?: true
    vencedor?: true
    data?: true
    torneioId?: true
  }

  export type EstatisticaCountAggregateInputType = {
    id?: true
    vencedor?: true
    assistentes?: true
    artilheiros?: true
    data?: true
    torneioId?: true
    _all?: true
  }

  export type EstatisticaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estatistica to aggregate.
     */
    where?: EstatisticaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estatisticas to fetch.
     */
    orderBy?: EstatisticaOrderByWithRelationInput | EstatisticaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstatisticaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estatisticas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estatisticas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estatisticas
    **/
    _count?: true | EstatisticaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstatisticaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstatisticaMaxAggregateInputType
  }

  export type GetEstatisticaAggregateType<T extends EstatisticaAggregateArgs> = {
        [P in keyof T & keyof AggregateEstatistica]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstatistica[P]>
      : GetScalarType<T[P], AggregateEstatistica[P]>
  }




  export type EstatisticaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstatisticaWhereInput
    orderBy?: EstatisticaOrderByWithAggregationInput | EstatisticaOrderByWithAggregationInput[]
    by: EstatisticaScalarFieldEnum[] | EstatisticaScalarFieldEnum
    having?: EstatisticaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstatisticaCountAggregateInputType | true
    _min?: EstatisticaMinAggregateInputType
    _max?: EstatisticaMaxAggregateInputType
  }

  export type EstatisticaGroupByOutputType = {
    id: string
    vencedor: string | null
    assistentes: string[]
    artilheiros: string[]
    data: Date | null
    torneioId: string
    _count: EstatisticaCountAggregateOutputType | null
    _min: EstatisticaMinAggregateOutputType | null
    _max: EstatisticaMaxAggregateOutputType | null
  }

  type GetEstatisticaGroupByPayload<T extends EstatisticaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstatisticaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstatisticaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstatisticaGroupByOutputType[P]>
            : GetScalarType<T[P], EstatisticaGroupByOutputType[P]>
        }
      >
    >


  export type EstatisticaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vencedor?: boolean
    assistentes?: boolean
    artilheiros?: boolean
    data?: boolean
    torneioId?: boolean
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estatistica"]>

  export type EstatisticaSelectScalar = {
    id?: boolean
    vencedor?: boolean
    assistentes?: boolean
    artilheiros?: boolean
    data?: boolean
    torneioId?: boolean
  }

  export type EstatisticaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
  }


  export type $EstatisticaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estatistica"
    objects: {
      torneio: Prisma.$TorneioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vencedor: string | null
      assistentes: string[]
      artilheiros: string[]
      data: Date | null
      torneioId: string
    }, ExtArgs["result"]["estatistica"]>
    composites: {}
  }


  type EstatisticaGetPayload<S extends boolean | null | undefined | EstatisticaDefaultArgs> = $Result.GetResult<Prisma.$EstatisticaPayload, S>

  type EstatisticaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EstatisticaFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: EstatisticaCountAggregateInputType | true
    }

  export interface EstatisticaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estatistica'], meta: { name: 'Estatistica' } }
    /**
     * Find zero or one Estatistica that matches the filter.
     * @param {EstatisticaFindUniqueArgs} args - Arguments to find a Estatistica
     * @example
     * // Get one Estatistica
     * const estatistica = await prisma.estatistica.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EstatisticaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EstatisticaFindUniqueArgs<ExtArgs>>
    ): Prisma__EstatisticaClient<$Result.GetResult<Prisma.$EstatisticaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Estatistica that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EstatisticaFindUniqueOrThrowArgs} args - Arguments to find a Estatistica
     * @example
     * // Get one Estatistica
     * const estatistica = await prisma.estatistica.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EstatisticaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EstatisticaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EstatisticaClient<$Result.GetResult<Prisma.$EstatisticaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Estatistica that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstatisticaFindFirstArgs} args - Arguments to find a Estatistica
     * @example
     * // Get one Estatistica
     * const estatistica = await prisma.estatistica.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EstatisticaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EstatisticaFindFirstArgs<ExtArgs>>
    ): Prisma__EstatisticaClient<$Result.GetResult<Prisma.$EstatisticaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Estatistica that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstatisticaFindFirstOrThrowArgs} args - Arguments to find a Estatistica
     * @example
     * // Get one Estatistica
     * const estatistica = await prisma.estatistica.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EstatisticaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EstatisticaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EstatisticaClient<$Result.GetResult<Prisma.$EstatisticaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Estatisticas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstatisticaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estatisticas
     * const estatisticas = await prisma.estatistica.findMany()
     * 
     * // Get first 10 Estatisticas
     * const estatisticas = await prisma.estatistica.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estatisticaWithIdOnly = await prisma.estatistica.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EstatisticaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EstatisticaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstatisticaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Estatistica.
     * @param {EstatisticaCreateArgs} args - Arguments to create a Estatistica.
     * @example
     * // Create one Estatistica
     * const Estatistica = await prisma.estatistica.create({
     *   data: {
     *     // ... data to create a Estatistica
     *   }
     * })
     * 
    **/
    create<T extends EstatisticaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EstatisticaCreateArgs<ExtArgs>>
    ): Prisma__EstatisticaClient<$Result.GetResult<Prisma.$EstatisticaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Estatisticas.
     *     @param {EstatisticaCreateManyArgs} args - Arguments to create many Estatisticas.
     *     @example
     *     // Create many Estatisticas
     *     const estatistica = await prisma.estatistica.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EstatisticaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EstatisticaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Estatistica.
     * @param {EstatisticaDeleteArgs} args - Arguments to delete one Estatistica.
     * @example
     * // Delete one Estatistica
     * const Estatistica = await prisma.estatistica.delete({
     *   where: {
     *     // ... filter to delete one Estatistica
     *   }
     * })
     * 
    **/
    delete<T extends EstatisticaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EstatisticaDeleteArgs<ExtArgs>>
    ): Prisma__EstatisticaClient<$Result.GetResult<Prisma.$EstatisticaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Estatistica.
     * @param {EstatisticaUpdateArgs} args - Arguments to update one Estatistica.
     * @example
     * // Update one Estatistica
     * const estatistica = await prisma.estatistica.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EstatisticaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EstatisticaUpdateArgs<ExtArgs>>
    ): Prisma__EstatisticaClient<$Result.GetResult<Prisma.$EstatisticaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Estatisticas.
     * @param {EstatisticaDeleteManyArgs} args - Arguments to filter Estatisticas to delete.
     * @example
     * // Delete a few Estatisticas
     * const { count } = await prisma.estatistica.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EstatisticaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EstatisticaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estatisticas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstatisticaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estatisticas
     * const estatistica = await prisma.estatistica.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EstatisticaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EstatisticaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Estatistica.
     * @param {EstatisticaUpsertArgs} args - Arguments to update or create a Estatistica.
     * @example
     * // Update or create a Estatistica
     * const estatistica = await prisma.estatistica.upsert({
     *   create: {
     *     // ... data to create a Estatistica
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estatistica we want to update
     *   }
     * })
    **/
    upsert<T extends EstatisticaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EstatisticaUpsertArgs<ExtArgs>>
    ): Prisma__EstatisticaClient<$Result.GetResult<Prisma.$EstatisticaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Estatisticas that matches the filter.
     * @param {EstatisticaFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const estatistica = await prisma.estatistica.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: EstatisticaFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Estatistica.
     * @param {EstatisticaAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const estatistica = await prisma.estatistica.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: EstatisticaAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Estatisticas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstatisticaCountArgs} args - Arguments to filter Estatisticas to count.
     * @example
     * // Count the number of Estatisticas
     * const count = await prisma.estatistica.count({
     *   where: {
     *     // ... the filter for the Estatisticas we want to count
     *   }
     * })
    **/
    count<T extends EstatisticaCountArgs>(
      args?: Subset<T, EstatisticaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstatisticaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estatistica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstatisticaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstatisticaAggregateArgs>(args: Subset<T, EstatisticaAggregateArgs>): Prisma.PrismaPromise<GetEstatisticaAggregateType<T>>

    /**
     * Group by Estatistica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstatisticaGroupByArgs} args - Group by arguments.
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
      T extends EstatisticaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstatisticaGroupByArgs['orderBy'] }
        : { orderBy?: EstatisticaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EstatisticaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstatisticaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estatistica model
   */
  readonly fields: EstatisticaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estatistica.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstatisticaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    torneio<T extends TorneioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TorneioDefaultArgs<ExtArgs>>): Prisma__TorneioClient<$Result.GetResult<Prisma.$TorneioPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Estatistica model
   */ 
  interface EstatisticaFieldRefs {
    readonly id: FieldRef<"Estatistica", 'String'>
    readonly vencedor: FieldRef<"Estatistica", 'String'>
    readonly assistentes: FieldRef<"Estatistica", 'String[]'>
    readonly artilheiros: FieldRef<"Estatistica", 'String[]'>
    readonly data: FieldRef<"Estatistica", 'DateTime'>
    readonly torneioId: FieldRef<"Estatistica", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Estatistica findUnique
   */
  export type EstatisticaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estatistica
     */
    select?: EstatisticaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstatisticaInclude<ExtArgs> | null
    /**
     * Filter, which Estatistica to fetch.
     */
    where: EstatisticaWhereUniqueInput
  }


  /**
   * Estatistica findUniqueOrThrow
   */
  export type EstatisticaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estatistica
     */
    select?: EstatisticaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstatisticaInclude<ExtArgs> | null
    /**
     * Filter, which Estatistica to fetch.
     */
    where: EstatisticaWhereUniqueInput
  }


  /**
   * Estatistica findFirst
   */
  export type EstatisticaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estatistica
     */
    select?: EstatisticaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstatisticaInclude<ExtArgs> | null
    /**
     * Filter, which Estatistica to fetch.
     */
    where?: EstatisticaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estatisticas to fetch.
     */
    orderBy?: EstatisticaOrderByWithRelationInput | EstatisticaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estatisticas.
     */
    cursor?: EstatisticaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estatisticas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estatisticas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estatisticas.
     */
    distinct?: EstatisticaScalarFieldEnum | EstatisticaScalarFieldEnum[]
  }


  /**
   * Estatistica findFirstOrThrow
   */
  export type EstatisticaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estatistica
     */
    select?: EstatisticaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstatisticaInclude<ExtArgs> | null
    /**
     * Filter, which Estatistica to fetch.
     */
    where?: EstatisticaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estatisticas to fetch.
     */
    orderBy?: EstatisticaOrderByWithRelationInput | EstatisticaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estatisticas.
     */
    cursor?: EstatisticaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estatisticas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estatisticas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estatisticas.
     */
    distinct?: EstatisticaScalarFieldEnum | EstatisticaScalarFieldEnum[]
  }


  /**
   * Estatistica findMany
   */
  export type EstatisticaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estatistica
     */
    select?: EstatisticaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstatisticaInclude<ExtArgs> | null
    /**
     * Filter, which Estatisticas to fetch.
     */
    where?: EstatisticaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estatisticas to fetch.
     */
    orderBy?: EstatisticaOrderByWithRelationInput | EstatisticaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estatisticas.
     */
    cursor?: EstatisticaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estatisticas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estatisticas.
     */
    skip?: number
    distinct?: EstatisticaScalarFieldEnum | EstatisticaScalarFieldEnum[]
  }


  /**
   * Estatistica create
   */
  export type EstatisticaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estatistica
     */
    select?: EstatisticaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstatisticaInclude<ExtArgs> | null
    /**
     * The data needed to create a Estatistica.
     */
    data: XOR<EstatisticaCreateInput, EstatisticaUncheckedCreateInput>
  }


  /**
   * Estatistica createMany
   */
  export type EstatisticaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Estatisticas.
     */
    data: EstatisticaCreateManyInput | EstatisticaCreateManyInput[]
  }


  /**
   * Estatistica update
   */
  export type EstatisticaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estatistica
     */
    select?: EstatisticaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstatisticaInclude<ExtArgs> | null
    /**
     * The data needed to update a Estatistica.
     */
    data: XOR<EstatisticaUpdateInput, EstatisticaUncheckedUpdateInput>
    /**
     * Choose, which Estatistica to update.
     */
    where: EstatisticaWhereUniqueInput
  }


  /**
   * Estatistica updateMany
   */
  export type EstatisticaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estatisticas.
     */
    data: XOR<EstatisticaUpdateManyMutationInput, EstatisticaUncheckedUpdateManyInput>
    /**
     * Filter which Estatisticas to update
     */
    where?: EstatisticaWhereInput
  }


  /**
   * Estatistica upsert
   */
  export type EstatisticaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estatistica
     */
    select?: EstatisticaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstatisticaInclude<ExtArgs> | null
    /**
     * The filter to search for the Estatistica to update in case it exists.
     */
    where: EstatisticaWhereUniqueInput
    /**
     * In case the Estatistica found by the `where` argument doesn't exist, create a new Estatistica with this data.
     */
    create: XOR<EstatisticaCreateInput, EstatisticaUncheckedCreateInput>
    /**
     * In case the Estatistica was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstatisticaUpdateInput, EstatisticaUncheckedUpdateInput>
  }


  /**
   * Estatistica delete
   */
  export type EstatisticaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estatistica
     */
    select?: EstatisticaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstatisticaInclude<ExtArgs> | null
    /**
     * Filter which Estatistica to delete.
     */
    where: EstatisticaWhereUniqueInput
  }


  /**
   * Estatistica deleteMany
   */
  export type EstatisticaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estatisticas to delete
     */
    where?: EstatisticaWhereInput
  }


  /**
   * Estatistica findRaw
   */
  export type EstatisticaFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Estatistica aggregateRaw
   */
  export type EstatisticaAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Estatistica without action
   */
  export type EstatisticaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estatistica
     */
    select?: EstatisticaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstatisticaInclude<ExtArgs> | null
  }



  /**
   * Model PosicaoNoCampinho
   */

  export type AggregatePosicaoNoCampinho = {
    _count: PosicaoNoCampinhoCountAggregateOutputType | null
    _avg: PosicaoNoCampinhoAvgAggregateOutputType | null
    _sum: PosicaoNoCampinhoSumAggregateOutputType | null
    _min: PosicaoNoCampinhoMinAggregateOutputType | null
    _max: PosicaoNoCampinhoMaxAggregateOutputType | null
  }

  export type PosicaoNoCampinhoAvgAggregateOutputType = {
    x: number | null
    y: number | null
  }

  export type PosicaoNoCampinhoSumAggregateOutputType = {
    x: number | null
    y: number | null
  }

  export type PosicaoNoCampinhoMinAggregateOutputType = {
    id: string | null
    idDoJogador: string | null
    x: number | null
    y: number | null
  }

  export type PosicaoNoCampinhoMaxAggregateOutputType = {
    id: string | null
    idDoJogador: string | null
    x: number | null
    y: number | null
  }

  export type PosicaoNoCampinhoCountAggregateOutputType = {
    id: number
    idDoJogador: number
    x: number
    y: number
    _all: number
  }


  export type PosicaoNoCampinhoAvgAggregateInputType = {
    x?: true
    y?: true
  }

  export type PosicaoNoCampinhoSumAggregateInputType = {
    x?: true
    y?: true
  }

  export type PosicaoNoCampinhoMinAggregateInputType = {
    id?: true
    idDoJogador?: true
    x?: true
    y?: true
  }

  export type PosicaoNoCampinhoMaxAggregateInputType = {
    id?: true
    idDoJogador?: true
    x?: true
    y?: true
  }

  export type PosicaoNoCampinhoCountAggregateInputType = {
    id?: true
    idDoJogador?: true
    x?: true
    y?: true
    _all?: true
  }

  export type PosicaoNoCampinhoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PosicaoNoCampinho to aggregate.
     */
    where?: PosicaoNoCampinhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PosicaoNoCampinhos to fetch.
     */
    orderBy?: PosicaoNoCampinhoOrderByWithRelationInput | PosicaoNoCampinhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PosicaoNoCampinhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PosicaoNoCampinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PosicaoNoCampinhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PosicaoNoCampinhos
    **/
    _count?: true | PosicaoNoCampinhoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PosicaoNoCampinhoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PosicaoNoCampinhoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PosicaoNoCampinhoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PosicaoNoCampinhoMaxAggregateInputType
  }

  export type GetPosicaoNoCampinhoAggregateType<T extends PosicaoNoCampinhoAggregateArgs> = {
        [P in keyof T & keyof AggregatePosicaoNoCampinho]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosicaoNoCampinho[P]>
      : GetScalarType<T[P], AggregatePosicaoNoCampinho[P]>
  }




  export type PosicaoNoCampinhoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PosicaoNoCampinhoWhereInput
    orderBy?: PosicaoNoCampinhoOrderByWithAggregationInput | PosicaoNoCampinhoOrderByWithAggregationInput[]
    by: PosicaoNoCampinhoScalarFieldEnum[] | PosicaoNoCampinhoScalarFieldEnum
    having?: PosicaoNoCampinhoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PosicaoNoCampinhoCountAggregateInputType | true
    _avg?: PosicaoNoCampinhoAvgAggregateInputType
    _sum?: PosicaoNoCampinhoSumAggregateInputType
    _min?: PosicaoNoCampinhoMinAggregateInputType
    _max?: PosicaoNoCampinhoMaxAggregateInputType
  }

  export type PosicaoNoCampinhoGroupByOutputType = {
    id: string
    idDoJogador: string
    x: number
    y: number
    _count: PosicaoNoCampinhoCountAggregateOutputType | null
    _avg: PosicaoNoCampinhoAvgAggregateOutputType | null
    _sum: PosicaoNoCampinhoSumAggregateOutputType | null
    _min: PosicaoNoCampinhoMinAggregateOutputType | null
    _max: PosicaoNoCampinhoMaxAggregateOutputType | null
  }

  type GetPosicaoNoCampinhoGroupByPayload<T extends PosicaoNoCampinhoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PosicaoNoCampinhoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PosicaoNoCampinhoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PosicaoNoCampinhoGroupByOutputType[P]>
            : GetScalarType<T[P], PosicaoNoCampinhoGroupByOutputType[P]>
        }
      >
    >


  export type PosicaoNoCampinhoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idDoJogador?: boolean
    x?: boolean
    y?: boolean
    jogador?: boolean | JogadoresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posicaoNoCampinho"]>

  export type PosicaoNoCampinhoSelectScalar = {
    id?: boolean
    idDoJogador?: boolean
    x?: boolean
    y?: boolean
  }

  export type PosicaoNoCampinhoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jogador?: boolean | JogadoresDefaultArgs<ExtArgs>
  }


  export type $PosicaoNoCampinhoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PosicaoNoCampinho"
    objects: {
      jogador: Prisma.$JogadoresPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      idDoJogador: string
      x: number
      y: number
    }, ExtArgs["result"]["posicaoNoCampinho"]>
    composites: {}
  }


  type PosicaoNoCampinhoGetPayload<S extends boolean | null | undefined | PosicaoNoCampinhoDefaultArgs> = $Result.GetResult<Prisma.$PosicaoNoCampinhoPayload, S>

  type PosicaoNoCampinhoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PosicaoNoCampinhoFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PosicaoNoCampinhoCountAggregateInputType | true
    }

  export interface PosicaoNoCampinhoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PosicaoNoCampinho'], meta: { name: 'PosicaoNoCampinho' } }
    /**
     * Find zero or one PosicaoNoCampinho that matches the filter.
     * @param {PosicaoNoCampinhoFindUniqueArgs} args - Arguments to find a PosicaoNoCampinho
     * @example
     * // Get one PosicaoNoCampinho
     * const posicaoNoCampinho = await prisma.posicaoNoCampinho.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PosicaoNoCampinhoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PosicaoNoCampinhoFindUniqueArgs<ExtArgs>>
    ): Prisma__PosicaoNoCampinhoClient<$Result.GetResult<Prisma.$PosicaoNoCampinhoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PosicaoNoCampinho that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PosicaoNoCampinhoFindUniqueOrThrowArgs} args - Arguments to find a PosicaoNoCampinho
     * @example
     * // Get one PosicaoNoCampinho
     * const posicaoNoCampinho = await prisma.posicaoNoCampinho.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PosicaoNoCampinhoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PosicaoNoCampinhoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PosicaoNoCampinhoClient<$Result.GetResult<Prisma.$PosicaoNoCampinhoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PosicaoNoCampinho that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosicaoNoCampinhoFindFirstArgs} args - Arguments to find a PosicaoNoCampinho
     * @example
     * // Get one PosicaoNoCampinho
     * const posicaoNoCampinho = await prisma.posicaoNoCampinho.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PosicaoNoCampinhoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PosicaoNoCampinhoFindFirstArgs<ExtArgs>>
    ): Prisma__PosicaoNoCampinhoClient<$Result.GetResult<Prisma.$PosicaoNoCampinhoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PosicaoNoCampinho that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosicaoNoCampinhoFindFirstOrThrowArgs} args - Arguments to find a PosicaoNoCampinho
     * @example
     * // Get one PosicaoNoCampinho
     * const posicaoNoCampinho = await prisma.posicaoNoCampinho.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PosicaoNoCampinhoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PosicaoNoCampinhoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PosicaoNoCampinhoClient<$Result.GetResult<Prisma.$PosicaoNoCampinhoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PosicaoNoCampinhos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosicaoNoCampinhoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PosicaoNoCampinhos
     * const posicaoNoCampinhos = await prisma.posicaoNoCampinho.findMany()
     * 
     * // Get first 10 PosicaoNoCampinhos
     * const posicaoNoCampinhos = await prisma.posicaoNoCampinho.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const posicaoNoCampinhoWithIdOnly = await prisma.posicaoNoCampinho.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PosicaoNoCampinhoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PosicaoNoCampinhoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PosicaoNoCampinhoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PosicaoNoCampinho.
     * @param {PosicaoNoCampinhoCreateArgs} args - Arguments to create a PosicaoNoCampinho.
     * @example
     * // Create one PosicaoNoCampinho
     * const PosicaoNoCampinho = await prisma.posicaoNoCampinho.create({
     *   data: {
     *     // ... data to create a PosicaoNoCampinho
     *   }
     * })
     * 
    **/
    create<T extends PosicaoNoCampinhoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PosicaoNoCampinhoCreateArgs<ExtArgs>>
    ): Prisma__PosicaoNoCampinhoClient<$Result.GetResult<Prisma.$PosicaoNoCampinhoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PosicaoNoCampinhos.
     *     @param {PosicaoNoCampinhoCreateManyArgs} args - Arguments to create many PosicaoNoCampinhos.
     *     @example
     *     // Create many PosicaoNoCampinhos
     *     const posicaoNoCampinho = await prisma.posicaoNoCampinho.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PosicaoNoCampinhoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PosicaoNoCampinhoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PosicaoNoCampinho.
     * @param {PosicaoNoCampinhoDeleteArgs} args - Arguments to delete one PosicaoNoCampinho.
     * @example
     * // Delete one PosicaoNoCampinho
     * const PosicaoNoCampinho = await prisma.posicaoNoCampinho.delete({
     *   where: {
     *     // ... filter to delete one PosicaoNoCampinho
     *   }
     * })
     * 
    **/
    delete<T extends PosicaoNoCampinhoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PosicaoNoCampinhoDeleteArgs<ExtArgs>>
    ): Prisma__PosicaoNoCampinhoClient<$Result.GetResult<Prisma.$PosicaoNoCampinhoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PosicaoNoCampinho.
     * @param {PosicaoNoCampinhoUpdateArgs} args - Arguments to update one PosicaoNoCampinho.
     * @example
     * // Update one PosicaoNoCampinho
     * const posicaoNoCampinho = await prisma.posicaoNoCampinho.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PosicaoNoCampinhoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PosicaoNoCampinhoUpdateArgs<ExtArgs>>
    ): Prisma__PosicaoNoCampinhoClient<$Result.GetResult<Prisma.$PosicaoNoCampinhoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PosicaoNoCampinhos.
     * @param {PosicaoNoCampinhoDeleteManyArgs} args - Arguments to filter PosicaoNoCampinhos to delete.
     * @example
     * // Delete a few PosicaoNoCampinhos
     * const { count } = await prisma.posicaoNoCampinho.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PosicaoNoCampinhoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PosicaoNoCampinhoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PosicaoNoCampinhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosicaoNoCampinhoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PosicaoNoCampinhos
     * const posicaoNoCampinho = await prisma.posicaoNoCampinho.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PosicaoNoCampinhoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PosicaoNoCampinhoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PosicaoNoCampinho.
     * @param {PosicaoNoCampinhoUpsertArgs} args - Arguments to update or create a PosicaoNoCampinho.
     * @example
     * // Update or create a PosicaoNoCampinho
     * const posicaoNoCampinho = await prisma.posicaoNoCampinho.upsert({
     *   create: {
     *     // ... data to create a PosicaoNoCampinho
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PosicaoNoCampinho we want to update
     *   }
     * })
    **/
    upsert<T extends PosicaoNoCampinhoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PosicaoNoCampinhoUpsertArgs<ExtArgs>>
    ): Prisma__PosicaoNoCampinhoClient<$Result.GetResult<Prisma.$PosicaoNoCampinhoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more PosicaoNoCampinhos that matches the filter.
     * @param {PosicaoNoCampinhoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const posicaoNoCampinho = await prisma.posicaoNoCampinho.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: PosicaoNoCampinhoFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a PosicaoNoCampinho.
     * @param {PosicaoNoCampinhoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const posicaoNoCampinho = await prisma.posicaoNoCampinho.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: PosicaoNoCampinhoAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of PosicaoNoCampinhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosicaoNoCampinhoCountArgs} args - Arguments to filter PosicaoNoCampinhos to count.
     * @example
     * // Count the number of PosicaoNoCampinhos
     * const count = await prisma.posicaoNoCampinho.count({
     *   where: {
     *     // ... the filter for the PosicaoNoCampinhos we want to count
     *   }
     * })
    **/
    count<T extends PosicaoNoCampinhoCountArgs>(
      args?: Subset<T, PosicaoNoCampinhoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PosicaoNoCampinhoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PosicaoNoCampinho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosicaoNoCampinhoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PosicaoNoCampinhoAggregateArgs>(args: Subset<T, PosicaoNoCampinhoAggregateArgs>): Prisma.PrismaPromise<GetPosicaoNoCampinhoAggregateType<T>>

    /**
     * Group by PosicaoNoCampinho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosicaoNoCampinhoGroupByArgs} args - Group by arguments.
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
      T extends PosicaoNoCampinhoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PosicaoNoCampinhoGroupByArgs['orderBy'] }
        : { orderBy?: PosicaoNoCampinhoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PosicaoNoCampinhoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPosicaoNoCampinhoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PosicaoNoCampinho model
   */
  readonly fields: PosicaoNoCampinhoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PosicaoNoCampinho.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PosicaoNoCampinhoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    jogador<T extends JogadoresDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JogadoresDefaultArgs<ExtArgs>>): Prisma__JogadoresClient<$Result.GetResult<Prisma.$JogadoresPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PosicaoNoCampinho model
   */ 
  interface PosicaoNoCampinhoFieldRefs {
    readonly id: FieldRef<"PosicaoNoCampinho", 'String'>
    readonly idDoJogador: FieldRef<"PosicaoNoCampinho", 'String'>
    readonly x: FieldRef<"PosicaoNoCampinho", 'Float'>
    readonly y: FieldRef<"PosicaoNoCampinho", 'Float'>
  }
    

  // Custom InputTypes

  /**
   * PosicaoNoCampinho findUnique
   */
  export type PosicaoNoCampinhoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosicaoNoCampinho
     */
    select?: PosicaoNoCampinhoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PosicaoNoCampinhoInclude<ExtArgs> | null
    /**
     * Filter, which PosicaoNoCampinho to fetch.
     */
    where: PosicaoNoCampinhoWhereUniqueInput
  }


  /**
   * PosicaoNoCampinho findUniqueOrThrow
   */
  export type PosicaoNoCampinhoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosicaoNoCampinho
     */
    select?: PosicaoNoCampinhoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PosicaoNoCampinhoInclude<ExtArgs> | null
    /**
     * Filter, which PosicaoNoCampinho to fetch.
     */
    where: PosicaoNoCampinhoWhereUniqueInput
  }


  /**
   * PosicaoNoCampinho findFirst
   */
  export type PosicaoNoCampinhoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosicaoNoCampinho
     */
    select?: PosicaoNoCampinhoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PosicaoNoCampinhoInclude<ExtArgs> | null
    /**
     * Filter, which PosicaoNoCampinho to fetch.
     */
    where?: PosicaoNoCampinhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PosicaoNoCampinhos to fetch.
     */
    orderBy?: PosicaoNoCampinhoOrderByWithRelationInput | PosicaoNoCampinhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PosicaoNoCampinhos.
     */
    cursor?: PosicaoNoCampinhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PosicaoNoCampinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PosicaoNoCampinhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PosicaoNoCampinhos.
     */
    distinct?: PosicaoNoCampinhoScalarFieldEnum | PosicaoNoCampinhoScalarFieldEnum[]
  }


  /**
   * PosicaoNoCampinho findFirstOrThrow
   */
  export type PosicaoNoCampinhoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosicaoNoCampinho
     */
    select?: PosicaoNoCampinhoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PosicaoNoCampinhoInclude<ExtArgs> | null
    /**
     * Filter, which PosicaoNoCampinho to fetch.
     */
    where?: PosicaoNoCampinhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PosicaoNoCampinhos to fetch.
     */
    orderBy?: PosicaoNoCampinhoOrderByWithRelationInput | PosicaoNoCampinhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PosicaoNoCampinhos.
     */
    cursor?: PosicaoNoCampinhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PosicaoNoCampinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PosicaoNoCampinhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PosicaoNoCampinhos.
     */
    distinct?: PosicaoNoCampinhoScalarFieldEnum | PosicaoNoCampinhoScalarFieldEnum[]
  }


  /**
   * PosicaoNoCampinho findMany
   */
  export type PosicaoNoCampinhoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosicaoNoCampinho
     */
    select?: PosicaoNoCampinhoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PosicaoNoCampinhoInclude<ExtArgs> | null
    /**
     * Filter, which PosicaoNoCampinhos to fetch.
     */
    where?: PosicaoNoCampinhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PosicaoNoCampinhos to fetch.
     */
    orderBy?: PosicaoNoCampinhoOrderByWithRelationInput | PosicaoNoCampinhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PosicaoNoCampinhos.
     */
    cursor?: PosicaoNoCampinhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PosicaoNoCampinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PosicaoNoCampinhos.
     */
    skip?: number
    distinct?: PosicaoNoCampinhoScalarFieldEnum | PosicaoNoCampinhoScalarFieldEnum[]
  }


  /**
   * PosicaoNoCampinho create
   */
  export type PosicaoNoCampinhoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosicaoNoCampinho
     */
    select?: PosicaoNoCampinhoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PosicaoNoCampinhoInclude<ExtArgs> | null
    /**
     * The data needed to create a PosicaoNoCampinho.
     */
    data: XOR<PosicaoNoCampinhoCreateInput, PosicaoNoCampinhoUncheckedCreateInput>
  }


  /**
   * PosicaoNoCampinho createMany
   */
  export type PosicaoNoCampinhoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PosicaoNoCampinhos.
     */
    data: PosicaoNoCampinhoCreateManyInput | PosicaoNoCampinhoCreateManyInput[]
  }


  /**
   * PosicaoNoCampinho update
   */
  export type PosicaoNoCampinhoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosicaoNoCampinho
     */
    select?: PosicaoNoCampinhoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PosicaoNoCampinhoInclude<ExtArgs> | null
    /**
     * The data needed to update a PosicaoNoCampinho.
     */
    data: XOR<PosicaoNoCampinhoUpdateInput, PosicaoNoCampinhoUncheckedUpdateInput>
    /**
     * Choose, which PosicaoNoCampinho to update.
     */
    where: PosicaoNoCampinhoWhereUniqueInput
  }


  /**
   * PosicaoNoCampinho updateMany
   */
  export type PosicaoNoCampinhoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PosicaoNoCampinhos.
     */
    data: XOR<PosicaoNoCampinhoUpdateManyMutationInput, PosicaoNoCampinhoUncheckedUpdateManyInput>
    /**
     * Filter which PosicaoNoCampinhos to update
     */
    where?: PosicaoNoCampinhoWhereInput
  }


  /**
   * PosicaoNoCampinho upsert
   */
  export type PosicaoNoCampinhoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosicaoNoCampinho
     */
    select?: PosicaoNoCampinhoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PosicaoNoCampinhoInclude<ExtArgs> | null
    /**
     * The filter to search for the PosicaoNoCampinho to update in case it exists.
     */
    where: PosicaoNoCampinhoWhereUniqueInput
    /**
     * In case the PosicaoNoCampinho found by the `where` argument doesn't exist, create a new PosicaoNoCampinho with this data.
     */
    create: XOR<PosicaoNoCampinhoCreateInput, PosicaoNoCampinhoUncheckedCreateInput>
    /**
     * In case the PosicaoNoCampinho was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PosicaoNoCampinhoUpdateInput, PosicaoNoCampinhoUncheckedUpdateInput>
  }


  /**
   * PosicaoNoCampinho delete
   */
  export type PosicaoNoCampinhoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosicaoNoCampinho
     */
    select?: PosicaoNoCampinhoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PosicaoNoCampinhoInclude<ExtArgs> | null
    /**
     * Filter which PosicaoNoCampinho to delete.
     */
    where: PosicaoNoCampinhoWhereUniqueInput
  }


  /**
   * PosicaoNoCampinho deleteMany
   */
  export type PosicaoNoCampinhoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PosicaoNoCampinhos to delete
     */
    where?: PosicaoNoCampinhoWhereInput
  }


  /**
   * PosicaoNoCampinho findRaw
   */
  export type PosicaoNoCampinhoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * PosicaoNoCampinho aggregateRaw
   */
  export type PosicaoNoCampinhoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * PosicaoNoCampinho without action
   */
  export type PosicaoNoCampinhoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosicaoNoCampinho
     */
    select?: PosicaoNoCampinhoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PosicaoNoCampinhoInclude<ExtArgs> | null
  }



  /**
   * Model campeonato
   */

  export type AggregateCampeonato = {
    _count: CampeonatoCountAggregateOutputType | null
    _min: CampeonatoMinAggregateOutputType | null
    _max: CampeonatoMaxAggregateOutputType | null
  }

  export type CampeonatoMinAggregateOutputType = {
    id: string | null
    status: string | null
    data: Date | null
    idTorneio: string | null
  }

  export type CampeonatoMaxAggregateOutputType = {
    id: string | null
    status: string | null
    data: Date | null
    idTorneio: string | null
  }

  export type CampeonatoCountAggregateOutputType = {
    id: number
    status: number
    data: number
    idTorneio: number
    _all: number
  }


  export type CampeonatoMinAggregateInputType = {
    id?: true
    status?: true
    data?: true
    idTorneio?: true
  }

  export type CampeonatoMaxAggregateInputType = {
    id?: true
    status?: true
    data?: true
    idTorneio?: true
  }

  export type CampeonatoCountAggregateInputType = {
    id?: true
    status?: true
    data?: true
    idTorneio?: true
    _all?: true
  }

  export type CampeonatoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which campeonato to aggregate.
     */
    where?: campeonatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of campeonatoes to fetch.
     */
    orderBy?: campeonatoOrderByWithRelationInput | campeonatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: campeonatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` campeonatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` campeonatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned campeonatoes
    **/
    _count?: true | CampeonatoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampeonatoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampeonatoMaxAggregateInputType
  }

  export type GetCampeonatoAggregateType<T extends CampeonatoAggregateArgs> = {
        [P in keyof T & keyof AggregateCampeonato]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampeonato[P]>
      : GetScalarType<T[P], AggregateCampeonato[P]>
  }




  export type campeonatoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: campeonatoWhereInput
    orderBy?: campeonatoOrderByWithAggregationInput | campeonatoOrderByWithAggregationInput[]
    by: CampeonatoScalarFieldEnum[] | CampeonatoScalarFieldEnum
    having?: campeonatoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampeonatoCountAggregateInputType | true
    _min?: CampeonatoMinAggregateInputType
    _max?: CampeonatoMaxAggregateInputType
  }

  export type CampeonatoGroupByOutputType = {
    id: string
    status: string
    data: Date
    idTorneio: string
    _count: CampeonatoCountAggregateOutputType | null
    _min: CampeonatoMinAggregateOutputType | null
    _max: CampeonatoMaxAggregateOutputType | null
  }

  type GetCampeonatoGroupByPayload<T extends campeonatoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampeonatoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampeonatoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampeonatoGroupByOutputType[P]>
            : GetScalarType<T[P], CampeonatoGroupByOutputType[P]>
        }
      >
    >


  export type campeonatoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    data?: boolean
    idTorneio?: boolean
    rodada?: boolean | campeonato$rodadaArgs<ExtArgs>
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
    _count?: boolean | CampeonatoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campeonato"]>

  export type campeonatoSelectScalar = {
    id?: boolean
    status?: boolean
    data?: boolean
    idTorneio?: boolean
  }

  export type campeonatoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rodada?: boolean | campeonato$rodadaArgs<ExtArgs>
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
    _count?: boolean | CampeonatoCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $campeonatoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "campeonato"
    objects: {
      rodada: Prisma.$RodadaPayload<ExtArgs>[]
      torneio: Prisma.$TorneioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: string
      data: Date
      idTorneio: string
    }, ExtArgs["result"]["campeonato"]>
    composites: {}
  }


  type campeonatoGetPayload<S extends boolean | null | undefined | campeonatoDefaultArgs> = $Result.GetResult<Prisma.$campeonatoPayload, S>

  type campeonatoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<campeonatoFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CampeonatoCountAggregateInputType | true
    }

  export interface campeonatoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['campeonato'], meta: { name: 'campeonato' } }
    /**
     * Find zero or one Campeonato that matches the filter.
     * @param {campeonatoFindUniqueArgs} args - Arguments to find a Campeonato
     * @example
     * // Get one Campeonato
     * const campeonato = await prisma.campeonato.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends campeonatoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, campeonatoFindUniqueArgs<ExtArgs>>
    ): Prisma__campeonatoClient<$Result.GetResult<Prisma.$campeonatoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Campeonato that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {campeonatoFindUniqueOrThrowArgs} args - Arguments to find a Campeonato
     * @example
     * // Get one Campeonato
     * const campeonato = await prisma.campeonato.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends campeonatoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, campeonatoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__campeonatoClient<$Result.GetResult<Prisma.$campeonatoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Campeonato that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {campeonatoFindFirstArgs} args - Arguments to find a Campeonato
     * @example
     * // Get one Campeonato
     * const campeonato = await prisma.campeonato.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends campeonatoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, campeonatoFindFirstArgs<ExtArgs>>
    ): Prisma__campeonatoClient<$Result.GetResult<Prisma.$campeonatoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Campeonato that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {campeonatoFindFirstOrThrowArgs} args - Arguments to find a Campeonato
     * @example
     * // Get one Campeonato
     * const campeonato = await prisma.campeonato.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends campeonatoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, campeonatoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__campeonatoClient<$Result.GetResult<Prisma.$campeonatoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Campeonatoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {campeonatoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campeonatoes
     * const campeonatoes = await prisma.campeonato.findMany()
     * 
     * // Get first 10 Campeonatoes
     * const campeonatoes = await prisma.campeonato.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campeonatoWithIdOnly = await prisma.campeonato.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends campeonatoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, campeonatoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$campeonatoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Campeonato.
     * @param {campeonatoCreateArgs} args - Arguments to create a Campeonato.
     * @example
     * // Create one Campeonato
     * const Campeonato = await prisma.campeonato.create({
     *   data: {
     *     // ... data to create a Campeonato
     *   }
     * })
     * 
    **/
    create<T extends campeonatoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, campeonatoCreateArgs<ExtArgs>>
    ): Prisma__campeonatoClient<$Result.GetResult<Prisma.$campeonatoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Campeonatoes.
     *     @param {campeonatoCreateManyArgs} args - Arguments to create many Campeonatoes.
     *     @example
     *     // Create many Campeonatoes
     *     const campeonato = await prisma.campeonato.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends campeonatoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, campeonatoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Campeonato.
     * @param {campeonatoDeleteArgs} args - Arguments to delete one Campeonato.
     * @example
     * // Delete one Campeonato
     * const Campeonato = await prisma.campeonato.delete({
     *   where: {
     *     // ... filter to delete one Campeonato
     *   }
     * })
     * 
    **/
    delete<T extends campeonatoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, campeonatoDeleteArgs<ExtArgs>>
    ): Prisma__campeonatoClient<$Result.GetResult<Prisma.$campeonatoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Campeonato.
     * @param {campeonatoUpdateArgs} args - Arguments to update one Campeonato.
     * @example
     * // Update one Campeonato
     * const campeonato = await prisma.campeonato.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends campeonatoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, campeonatoUpdateArgs<ExtArgs>>
    ): Prisma__campeonatoClient<$Result.GetResult<Prisma.$campeonatoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Campeonatoes.
     * @param {campeonatoDeleteManyArgs} args - Arguments to filter Campeonatoes to delete.
     * @example
     * // Delete a few Campeonatoes
     * const { count } = await prisma.campeonato.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends campeonatoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, campeonatoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campeonatoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {campeonatoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campeonatoes
     * const campeonato = await prisma.campeonato.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends campeonatoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, campeonatoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Campeonato.
     * @param {campeonatoUpsertArgs} args - Arguments to update or create a Campeonato.
     * @example
     * // Update or create a Campeonato
     * const campeonato = await prisma.campeonato.upsert({
     *   create: {
     *     // ... data to create a Campeonato
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campeonato we want to update
     *   }
     * })
    **/
    upsert<T extends campeonatoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, campeonatoUpsertArgs<ExtArgs>>
    ): Prisma__campeonatoClient<$Result.GetResult<Prisma.$campeonatoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Campeonatoes that matches the filter.
     * @param {campeonatoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const campeonato = await prisma.campeonato.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: campeonatoFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Campeonato.
     * @param {campeonatoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const campeonato = await prisma.campeonato.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: campeonatoAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Campeonatoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {campeonatoCountArgs} args - Arguments to filter Campeonatoes to count.
     * @example
     * // Count the number of Campeonatoes
     * const count = await prisma.campeonato.count({
     *   where: {
     *     // ... the filter for the Campeonatoes we want to count
     *   }
     * })
    **/
    count<T extends campeonatoCountArgs>(
      args?: Subset<T, campeonatoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampeonatoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campeonato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampeonatoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CampeonatoAggregateArgs>(args: Subset<T, CampeonatoAggregateArgs>): Prisma.PrismaPromise<GetCampeonatoAggregateType<T>>

    /**
     * Group by Campeonato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {campeonatoGroupByArgs} args - Group by arguments.
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
      T extends campeonatoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: campeonatoGroupByArgs['orderBy'] }
        : { orderBy?: campeonatoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, campeonatoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampeonatoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the campeonato model
   */
  readonly fields: campeonatoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for campeonato.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__campeonatoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    rodada<T extends campeonato$rodadaArgs<ExtArgs> = {}>(args?: Subset<T, campeonato$rodadaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RodadaPayload<ExtArgs>, T, 'findMany'> | Null>;

    torneio<T extends TorneioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TorneioDefaultArgs<ExtArgs>>): Prisma__TorneioClient<$Result.GetResult<Prisma.$TorneioPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the campeonato model
   */ 
  interface campeonatoFieldRefs {
    readonly id: FieldRef<"campeonato", 'String'>
    readonly status: FieldRef<"campeonato", 'String'>
    readonly data: FieldRef<"campeonato", 'DateTime'>
    readonly idTorneio: FieldRef<"campeonato", 'String'>
  }
    

  // Custom InputTypes

  /**
   * campeonato findUnique
   */
  export type campeonatoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campeonato
     */
    select?: campeonatoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: campeonatoInclude<ExtArgs> | null
    /**
     * Filter, which campeonato to fetch.
     */
    where: campeonatoWhereUniqueInput
  }


  /**
   * campeonato findUniqueOrThrow
   */
  export type campeonatoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campeonato
     */
    select?: campeonatoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: campeonatoInclude<ExtArgs> | null
    /**
     * Filter, which campeonato to fetch.
     */
    where: campeonatoWhereUniqueInput
  }


  /**
   * campeonato findFirst
   */
  export type campeonatoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campeonato
     */
    select?: campeonatoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: campeonatoInclude<ExtArgs> | null
    /**
     * Filter, which campeonato to fetch.
     */
    where?: campeonatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of campeonatoes to fetch.
     */
    orderBy?: campeonatoOrderByWithRelationInput | campeonatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for campeonatoes.
     */
    cursor?: campeonatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` campeonatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` campeonatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of campeonatoes.
     */
    distinct?: CampeonatoScalarFieldEnum | CampeonatoScalarFieldEnum[]
  }


  /**
   * campeonato findFirstOrThrow
   */
  export type campeonatoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campeonato
     */
    select?: campeonatoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: campeonatoInclude<ExtArgs> | null
    /**
     * Filter, which campeonato to fetch.
     */
    where?: campeonatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of campeonatoes to fetch.
     */
    orderBy?: campeonatoOrderByWithRelationInput | campeonatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for campeonatoes.
     */
    cursor?: campeonatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` campeonatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` campeonatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of campeonatoes.
     */
    distinct?: CampeonatoScalarFieldEnum | CampeonatoScalarFieldEnum[]
  }


  /**
   * campeonato findMany
   */
  export type campeonatoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campeonato
     */
    select?: campeonatoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: campeonatoInclude<ExtArgs> | null
    /**
     * Filter, which campeonatoes to fetch.
     */
    where?: campeonatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of campeonatoes to fetch.
     */
    orderBy?: campeonatoOrderByWithRelationInput | campeonatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing campeonatoes.
     */
    cursor?: campeonatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` campeonatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` campeonatoes.
     */
    skip?: number
    distinct?: CampeonatoScalarFieldEnum | CampeonatoScalarFieldEnum[]
  }


  /**
   * campeonato create
   */
  export type campeonatoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campeonato
     */
    select?: campeonatoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: campeonatoInclude<ExtArgs> | null
    /**
     * The data needed to create a campeonato.
     */
    data: XOR<campeonatoCreateInput, campeonatoUncheckedCreateInput>
  }


  /**
   * campeonato createMany
   */
  export type campeonatoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many campeonatoes.
     */
    data: campeonatoCreateManyInput | campeonatoCreateManyInput[]
  }


  /**
   * campeonato update
   */
  export type campeonatoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campeonato
     */
    select?: campeonatoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: campeonatoInclude<ExtArgs> | null
    /**
     * The data needed to update a campeonato.
     */
    data: XOR<campeonatoUpdateInput, campeonatoUncheckedUpdateInput>
    /**
     * Choose, which campeonato to update.
     */
    where: campeonatoWhereUniqueInput
  }


  /**
   * campeonato updateMany
   */
  export type campeonatoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update campeonatoes.
     */
    data: XOR<campeonatoUpdateManyMutationInput, campeonatoUncheckedUpdateManyInput>
    /**
     * Filter which campeonatoes to update
     */
    where?: campeonatoWhereInput
  }


  /**
   * campeonato upsert
   */
  export type campeonatoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campeonato
     */
    select?: campeonatoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: campeonatoInclude<ExtArgs> | null
    /**
     * The filter to search for the campeonato to update in case it exists.
     */
    where: campeonatoWhereUniqueInput
    /**
     * In case the campeonato found by the `where` argument doesn't exist, create a new campeonato with this data.
     */
    create: XOR<campeonatoCreateInput, campeonatoUncheckedCreateInput>
    /**
     * In case the campeonato was found with the provided `where` argument, update it with this data.
     */
    update: XOR<campeonatoUpdateInput, campeonatoUncheckedUpdateInput>
  }


  /**
   * campeonato delete
   */
  export type campeonatoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campeonato
     */
    select?: campeonatoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: campeonatoInclude<ExtArgs> | null
    /**
     * Filter which campeonato to delete.
     */
    where: campeonatoWhereUniqueInput
  }


  /**
   * campeonato deleteMany
   */
  export type campeonatoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which campeonatoes to delete
     */
    where?: campeonatoWhereInput
  }


  /**
   * campeonato findRaw
   */
  export type campeonatoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * campeonato aggregateRaw
   */
  export type campeonatoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * campeonato.rodada
   */
  export type campeonato$rodadaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rodada
     */
    select?: RodadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RodadaInclude<ExtArgs> | null
    where?: RodadaWhereInput
    orderBy?: RodadaOrderByWithRelationInput | RodadaOrderByWithRelationInput[]
    cursor?: RodadaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RodadaScalarFieldEnum | RodadaScalarFieldEnum[]
  }


  /**
   * campeonato without action
   */
  export type campeonatoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campeonato
     */
    select?: campeonatoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: campeonatoInclude<ExtArgs> | null
  }



  /**
   * Model Rodada
   */

  export type AggregateRodada = {
    _count: RodadaCountAggregateOutputType | null
    _avg: RodadaAvgAggregateOutputType | null
    _sum: RodadaSumAggregateOutputType | null
    _min: RodadaMinAggregateOutputType | null
    _max: RodadaMaxAggregateOutputType | null
  }

  export type RodadaAvgAggregateOutputType = {
    golsMandante: number | null
    golsVisitante: number | null
    rodadaDeNumero: number | null
  }

  export type RodadaSumAggregateOutputType = {
    golsMandante: number | null
    golsVisitante: number | null
    rodadaDeNumero: number | null
  }

  export type RodadaMinAggregateOutputType = {
    id: string | null
    idCampeonato: string | null
    golsMandante: number | null
    golsVisitante: number | null
    rodadaDeNumero: number | null
    statusDaRodada: string | null
  }

  export type RodadaMaxAggregateOutputType = {
    id: string | null
    idCampeonato: string | null
    golsMandante: number | null
    golsVisitante: number | null
    rodadaDeNumero: number | null
    statusDaRodada: string | null
  }

  export type RodadaCountAggregateOutputType = {
    id: number
    idDoMandante: number
    idDoVisitante: number
    idCampeonato: number
    golsMandante: number
    golsVisitante: number
    rodadaDeNumero: number
    statusDaRodada: number
    _all: number
  }


  export type RodadaAvgAggregateInputType = {
    golsMandante?: true
    golsVisitante?: true
    rodadaDeNumero?: true
  }

  export type RodadaSumAggregateInputType = {
    golsMandante?: true
    golsVisitante?: true
    rodadaDeNumero?: true
  }

  export type RodadaMinAggregateInputType = {
    id?: true
    idCampeonato?: true
    golsMandante?: true
    golsVisitante?: true
    rodadaDeNumero?: true
    statusDaRodada?: true
  }

  export type RodadaMaxAggregateInputType = {
    id?: true
    idCampeonato?: true
    golsMandante?: true
    golsVisitante?: true
    rodadaDeNumero?: true
    statusDaRodada?: true
  }

  export type RodadaCountAggregateInputType = {
    id?: true
    idDoMandante?: true
    idDoVisitante?: true
    idCampeonato?: true
    golsMandante?: true
    golsVisitante?: true
    rodadaDeNumero?: true
    statusDaRodada?: true
    _all?: true
  }

  export type RodadaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rodada to aggregate.
     */
    where?: RodadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rodadas to fetch.
     */
    orderBy?: RodadaOrderByWithRelationInput | RodadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RodadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rodadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rodadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rodadas
    **/
    _count?: true | RodadaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RodadaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RodadaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RodadaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RodadaMaxAggregateInputType
  }

  export type GetRodadaAggregateType<T extends RodadaAggregateArgs> = {
        [P in keyof T & keyof AggregateRodada]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRodada[P]>
      : GetScalarType<T[P], AggregateRodada[P]>
  }




  export type RodadaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RodadaWhereInput
    orderBy?: RodadaOrderByWithAggregationInput | RodadaOrderByWithAggregationInput[]
    by: RodadaScalarFieldEnum[] | RodadaScalarFieldEnum
    having?: RodadaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RodadaCountAggregateInputType | true
    _avg?: RodadaAvgAggregateInputType
    _sum?: RodadaSumAggregateInputType
    _min?: RodadaMinAggregateInputType
    _max?: RodadaMaxAggregateInputType
  }

  export type RodadaGroupByOutputType = {
    id: string
    idDoMandante: string[]
    idDoVisitante: string[]
    idCampeonato: string
    golsMandante: number
    golsVisitante: number
    rodadaDeNumero: number
    statusDaRodada: string
    _count: RodadaCountAggregateOutputType | null
    _avg: RodadaAvgAggregateOutputType | null
    _sum: RodadaSumAggregateOutputType | null
    _min: RodadaMinAggregateOutputType | null
    _max: RodadaMaxAggregateOutputType | null
  }

  type GetRodadaGroupByPayload<T extends RodadaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RodadaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RodadaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RodadaGroupByOutputType[P]>
            : GetScalarType<T[P], RodadaGroupByOutputType[P]>
        }
      >
    >


  export type RodadaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idDoMandante?: boolean
    idDoVisitante?: boolean
    idCampeonato?: boolean
    golsMandante?: boolean
    golsVisitante?: boolean
    rodadaDeNumero?: boolean
    statusDaRodada?: boolean
    mandante?: boolean | Rodada$mandanteArgs<ExtArgs>
    visitante?: boolean | Rodada$visitanteArgs<ExtArgs>
    campeonato?: boolean | Rodada$campeonatoArgs<ExtArgs>
    _count?: boolean | RodadaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rodada"]>

  export type RodadaSelectScalar = {
    id?: boolean
    idDoMandante?: boolean
    idDoVisitante?: boolean
    idCampeonato?: boolean
    golsMandante?: boolean
    golsVisitante?: boolean
    rodadaDeNumero?: boolean
    statusDaRodada?: boolean
  }

  export type RodadaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mandante?: boolean | Rodada$mandanteArgs<ExtArgs>
    visitante?: boolean | Rodada$visitanteArgs<ExtArgs>
    campeonato?: boolean | Rodada$campeonatoArgs<ExtArgs>
    _count?: boolean | RodadaCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $RodadaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rodada"
    objects: {
      mandante: Prisma.$TimesDaRodadaPayload<ExtArgs>[]
      visitante: Prisma.$TimesDaRodadaPayload<ExtArgs>[]
      campeonato: Prisma.$campeonatoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      idDoMandante: string[]
      idDoVisitante: string[]
      idCampeonato: string
      golsMandante: number
      golsVisitante: number
      rodadaDeNumero: number
      statusDaRodada: string
    }, ExtArgs["result"]["rodada"]>
    composites: {}
  }


  type RodadaGetPayload<S extends boolean | null | undefined | RodadaDefaultArgs> = $Result.GetResult<Prisma.$RodadaPayload, S>

  type RodadaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RodadaFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: RodadaCountAggregateInputType | true
    }

  export interface RodadaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rodada'], meta: { name: 'Rodada' } }
    /**
     * Find zero or one Rodada that matches the filter.
     * @param {RodadaFindUniqueArgs} args - Arguments to find a Rodada
     * @example
     * // Get one Rodada
     * const rodada = await prisma.rodada.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RodadaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RodadaFindUniqueArgs<ExtArgs>>
    ): Prisma__RodadaClient<$Result.GetResult<Prisma.$RodadaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Rodada that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RodadaFindUniqueOrThrowArgs} args - Arguments to find a Rodada
     * @example
     * // Get one Rodada
     * const rodada = await prisma.rodada.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RodadaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RodadaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RodadaClient<$Result.GetResult<Prisma.$RodadaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Rodada that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RodadaFindFirstArgs} args - Arguments to find a Rodada
     * @example
     * // Get one Rodada
     * const rodada = await prisma.rodada.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RodadaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RodadaFindFirstArgs<ExtArgs>>
    ): Prisma__RodadaClient<$Result.GetResult<Prisma.$RodadaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Rodada that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RodadaFindFirstOrThrowArgs} args - Arguments to find a Rodada
     * @example
     * // Get one Rodada
     * const rodada = await prisma.rodada.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RodadaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RodadaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RodadaClient<$Result.GetResult<Prisma.$RodadaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Rodadas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RodadaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rodadas
     * const rodadas = await prisma.rodada.findMany()
     * 
     * // Get first 10 Rodadas
     * const rodadas = await prisma.rodada.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rodadaWithIdOnly = await prisma.rodada.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RodadaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RodadaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RodadaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Rodada.
     * @param {RodadaCreateArgs} args - Arguments to create a Rodada.
     * @example
     * // Create one Rodada
     * const Rodada = await prisma.rodada.create({
     *   data: {
     *     // ... data to create a Rodada
     *   }
     * })
     * 
    **/
    create<T extends RodadaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RodadaCreateArgs<ExtArgs>>
    ): Prisma__RodadaClient<$Result.GetResult<Prisma.$RodadaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Rodadas.
     *     @param {RodadaCreateManyArgs} args - Arguments to create many Rodadas.
     *     @example
     *     // Create many Rodadas
     *     const rodada = await prisma.rodada.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RodadaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RodadaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rodada.
     * @param {RodadaDeleteArgs} args - Arguments to delete one Rodada.
     * @example
     * // Delete one Rodada
     * const Rodada = await prisma.rodada.delete({
     *   where: {
     *     // ... filter to delete one Rodada
     *   }
     * })
     * 
    **/
    delete<T extends RodadaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RodadaDeleteArgs<ExtArgs>>
    ): Prisma__RodadaClient<$Result.GetResult<Prisma.$RodadaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Rodada.
     * @param {RodadaUpdateArgs} args - Arguments to update one Rodada.
     * @example
     * // Update one Rodada
     * const rodada = await prisma.rodada.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RodadaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RodadaUpdateArgs<ExtArgs>>
    ): Prisma__RodadaClient<$Result.GetResult<Prisma.$RodadaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Rodadas.
     * @param {RodadaDeleteManyArgs} args - Arguments to filter Rodadas to delete.
     * @example
     * // Delete a few Rodadas
     * const { count } = await prisma.rodada.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RodadaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RodadaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rodadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RodadaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rodadas
     * const rodada = await prisma.rodada.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RodadaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RodadaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rodada.
     * @param {RodadaUpsertArgs} args - Arguments to update or create a Rodada.
     * @example
     * // Update or create a Rodada
     * const rodada = await prisma.rodada.upsert({
     *   create: {
     *     // ... data to create a Rodada
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rodada we want to update
     *   }
     * })
    **/
    upsert<T extends RodadaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RodadaUpsertArgs<ExtArgs>>
    ): Prisma__RodadaClient<$Result.GetResult<Prisma.$RodadaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Rodadas that matches the filter.
     * @param {RodadaFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const rodada = await prisma.rodada.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: RodadaFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Rodada.
     * @param {RodadaAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const rodada = await prisma.rodada.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: RodadaAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Rodadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RodadaCountArgs} args - Arguments to filter Rodadas to count.
     * @example
     * // Count the number of Rodadas
     * const count = await prisma.rodada.count({
     *   where: {
     *     // ... the filter for the Rodadas we want to count
     *   }
     * })
    **/
    count<T extends RodadaCountArgs>(
      args?: Subset<T, RodadaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RodadaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rodada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RodadaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RodadaAggregateArgs>(args: Subset<T, RodadaAggregateArgs>): Prisma.PrismaPromise<GetRodadaAggregateType<T>>

    /**
     * Group by Rodada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RodadaGroupByArgs} args - Group by arguments.
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
      T extends RodadaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RodadaGroupByArgs['orderBy'] }
        : { orderBy?: RodadaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RodadaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRodadaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rodada model
   */
  readonly fields: RodadaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rodada.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RodadaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    mandante<T extends Rodada$mandanteArgs<ExtArgs> = {}>(args?: Subset<T, Rodada$mandanteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimesDaRodadaPayload<ExtArgs>, T, 'findMany'> | Null>;

    visitante<T extends Rodada$visitanteArgs<ExtArgs> = {}>(args?: Subset<T, Rodada$visitanteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimesDaRodadaPayload<ExtArgs>, T, 'findMany'> | Null>;

    campeonato<T extends Rodada$campeonatoArgs<ExtArgs> = {}>(args?: Subset<T, Rodada$campeonatoArgs<ExtArgs>>): Prisma__campeonatoClient<$Result.GetResult<Prisma.$campeonatoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Rodada model
   */ 
  interface RodadaFieldRefs {
    readonly id: FieldRef<"Rodada", 'String'>
    readonly idDoMandante: FieldRef<"Rodada", 'String[]'>
    readonly idDoVisitante: FieldRef<"Rodada", 'String[]'>
    readonly idCampeonato: FieldRef<"Rodada", 'String'>
    readonly golsMandante: FieldRef<"Rodada", 'Int'>
    readonly golsVisitante: FieldRef<"Rodada", 'Int'>
    readonly rodadaDeNumero: FieldRef<"Rodada", 'Int'>
    readonly statusDaRodada: FieldRef<"Rodada", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Rodada findUnique
   */
  export type RodadaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rodada
     */
    select?: RodadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RodadaInclude<ExtArgs> | null
    /**
     * Filter, which Rodada to fetch.
     */
    where: RodadaWhereUniqueInput
  }


  /**
   * Rodada findUniqueOrThrow
   */
  export type RodadaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rodada
     */
    select?: RodadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RodadaInclude<ExtArgs> | null
    /**
     * Filter, which Rodada to fetch.
     */
    where: RodadaWhereUniqueInput
  }


  /**
   * Rodada findFirst
   */
  export type RodadaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rodada
     */
    select?: RodadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RodadaInclude<ExtArgs> | null
    /**
     * Filter, which Rodada to fetch.
     */
    where?: RodadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rodadas to fetch.
     */
    orderBy?: RodadaOrderByWithRelationInput | RodadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rodadas.
     */
    cursor?: RodadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rodadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rodadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rodadas.
     */
    distinct?: RodadaScalarFieldEnum | RodadaScalarFieldEnum[]
  }


  /**
   * Rodada findFirstOrThrow
   */
  export type RodadaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rodada
     */
    select?: RodadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RodadaInclude<ExtArgs> | null
    /**
     * Filter, which Rodada to fetch.
     */
    where?: RodadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rodadas to fetch.
     */
    orderBy?: RodadaOrderByWithRelationInput | RodadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rodadas.
     */
    cursor?: RodadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rodadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rodadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rodadas.
     */
    distinct?: RodadaScalarFieldEnum | RodadaScalarFieldEnum[]
  }


  /**
   * Rodada findMany
   */
  export type RodadaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rodada
     */
    select?: RodadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RodadaInclude<ExtArgs> | null
    /**
     * Filter, which Rodadas to fetch.
     */
    where?: RodadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rodadas to fetch.
     */
    orderBy?: RodadaOrderByWithRelationInput | RodadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rodadas.
     */
    cursor?: RodadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rodadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rodadas.
     */
    skip?: number
    distinct?: RodadaScalarFieldEnum | RodadaScalarFieldEnum[]
  }


  /**
   * Rodada create
   */
  export type RodadaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rodada
     */
    select?: RodadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RodadaInclude<ExtArgs> | null
    /**
     * The data needed to create a Rodada.
     */
    data: XOR<RodadaCreateInput, RodadaUncheckedCreateInput>
  }


  /**
   * Rodada createMany
   */
  export type RodadaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rodadas.
     */
    data: RodadaCreateManyInput | RodadaCreateManyInput[]
  }


  /**
   * Rodada update
   */
  export type RodadaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rodada
     */
    select?: RodadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RodadaInclude<ExtArgs> | null
    /**
     * The data needed to update a Rodada.
     */
    data: XOR<RodadaUpdateInput, RodadaUncheckedUpdateInput>
    /**
     * Choose, which Rodada to update.
     */
    where: RodadaWhereUniqueInput
  }


  /**
   * Rodada updateMany
   */
  export type RodadaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rodadas.
     */
    data: XOR<RodadaUpdateManyMutationInput, RodadaUncheckedUpdateManyInput>
    /**
     * Filter which Rodadas to update
     */
    where?: RodadaWhereInput
  }


  /**
   * Rodada upsert
   */
  export type RodadaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rodada
     */
    select?: RodadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RodadaInclude<ExtArgs> | null
    /**
     * The filter to search for the Rodada to update in case it exists.
     */
    where: RodadaWhereUniqueInput
    /**
     * In case the Rodada found by the `where` argument doesn't exist, create a new Rodada with this data.
     */
    create: XOR<RodadaCreateInput, RodadaUncheckedCreateInput>
    /**
     * In case the Rodada was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RodadaUpdateInput, RodadaUncheckedUpdateInput>
  }


  /**
   * Rodada delete
   */
  export type RodadaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rodada
     */
    select?: RodadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RodadaInclude<ExtArgs> | null
    /**
     * Filter which Rodada to delete.
     */
    where: RodadaWhereUniqueInput
  }


  /**
   * Rodada deleteMany
   */
  export type RodadaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rodadas to delete
     */
    where?: RodadaWhereInput
  }


  /**
   * Rodada findRaw
   */
  export type RodadaFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Rodada aggregateRaw
   */
  export type RodadaAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Rodada.mandante
   */
  export type Rodada$mandanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimesDaRodada
     */
    select?: TimesDaRodadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimesDaRodadaInclude<ExtArgs> | null
    where?: TimesDaRodadaWhereInput
    orderBy?: TimesDaRodadaOrderByWithRelationInput | TimesDaRodadaOrderByWithRelationInput[]
    cursor?: TimesDaRodadaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimesDaRodadaScalarFieldEnum | TimesDaRodadaScalarFieldEnum[]
  }


  /**
   * Rodada.visitante
   */
  export type Rodada$visitanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimesDaRodada
     */
    select?: TimesDaRodadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimesDaRodadaInclude<ExtArgs> | null
    where?: TimesDaRodadaWhereInput
    orderBy?: TimesDaRodadaOrderByWithRelationInput | TimesDaRodadaOrderByWithRelationInput[]
    cursor?: TimesDaRodadaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimesDaRodadaScalarFieldEnum | TimesDaRodadaScalarFieldEnum[]
  }


  /**
   * Rodada.campeonato
   */
  export type Rodada$campeonatoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campeonato
     */
    select?: campeonatoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: campeonatoInclude<ExtArgs> | null
    where?: campeonatoWhereInput
  }


  /**
   * Rodada without action
   */
  export type RodadaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rodada
     */
    select?: RodadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RodadaInclude<ExtArgs> | null
  }



  /**
   * Model TimesDaRodada
   */

  export type AggregateTimesDaRodada = {
    _count: TimesDaRodadaCountAggregateOutputType | null
    _avg: TimesDaRodadaAvgAggregateOutputType | null
    _sum: TimesDaRodadaSumAggregateOutputType | null
    _min: TimesDaRodadaMinAggregateOutputType | null
    _max: TimesDaRodadaMaxAggregateOutputType | null
  }

  export type TimesDaRodadaAvgAggregateOutputType = {
    saldo: number | null
  }

  export type TimesDaRodadaSumAggregateOutputType = {
    saldo: number | null
  }

  export type TimesDaRodadaMinAggregateOutputType = {
    id: string | null
    idParticipante: string | null
    nome: string | null
    saldo: number | null
    time: string | null
    emblemaDoTime: string | null
    idTorneio: string | null
  }

  export type TimesDaRodadaMaxAggregateOutputType = {
    id: string | null
    idParticipante: string | null
    nome: string | null
    saldo: number | null
    time: string | null
    emblemaDoTime: string | null
    idTorneio: string | null
  }

  export type TimesDaRodadaCountAggregateOutputType = {
    id: number
    idParticipante: number
    nome: number
    saldo: number
    time: number
    emblemaDoTime: number
    idTorneio: number
    idRodada: number
    _all: number
  }


  export type TimesDaRodadaAvgAggregateInputType = {
    saldo?: true
  }

  export type TimesDaRodadaSumAggregateInputType = {
    saldo?: true
  }

  export type TimesDaRodadaMinAggregateInputType = {
    id?: true
    idParticipante?: true
    nome?: true
    saldo?: true
    time?: true
    emblemaDoTime?: true
    idTorneio?: true
  }

  export type TimesDaRodadaMaxAggregateInputType = {
    id?: true
    idParticipante?: true
    nome?: true
    saldo?: true
    time?: true
    emblemaDoTime?: true
    idTorneio?: true
  }

  export type TimesDaRodadaCountAggregateInputType = {
    id?: true
    idParticipante?: true
    nome?: true
    saldo?: true
    time?: true
    emblemaDoTime?: true
    idTorneio?: true
    idRodada?: true
    _all?: true
  }

  export type TimesDaRodadaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimesDaRodada to aggregate.
     */
    where?: TimesDaRodadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimesDaRodadas to fetch.
     */
    orderBy?: TimesDaRodadaOrderByWithRelationInput | TimesDaRodadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimesDaRodadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimesDaRodadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimesDaRodadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimesDaRodadas
    **/
    _count?: true | TimesDaRodadaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimesDaRodadaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimesDaRodadaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimesDaRodadaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimesDaRodadaMaxAggregateInputType
  }

  export type GetTimesDaRodadaAggregateType<T extends TimesDaRodadaAggregateArgs> = {
        [P in keyof T & keyof AggregateTimesDaRodada]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimesDaRodada[P]>
      : GetScalarType<T[P], AggregateTimesDaRodada[P]>
  }




  export type TimesDaRodadaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimesDaRodadaWhereInput
    orderBy?: TimesDaRodadaOrderByWithAggregationInput | TimesDaRodadaOrderByWithAggregationInput[]
    by: TimesDaRodadaScalarFieldEnum[] | TimesDaRodadaScalarFieldEnum
    having?: TimesDaRodadaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimesDaRodadaCountAggregateInputType | true
    _avg?: TimesDaRodadaAvgAggregateInputType
    _sum?: TimesDaRodadaSumAggregateInputType
    _min?: TimesDaRodadaMinAggregateInputType
    _max?: TimesDaRodadaMaxAggregateInputType
  }

  export type TimesDaRodadaGroupByOutputType = {
    id: string
    idParticipante: string
    nome: string
    saldo: number | null
    time: string | null
    emblemaDoTime: string | null
    idTorneio: string
    idRodada: string[]
    _count: TimesDaRodadaCountAggregateOutputType | null
    _avg: TimesDaRodadaAvgAggregateOutputType | null
    _sum: TimesDaRodadaSumAggregateOutputType | null
    _min: TimesDaRodadaMinAggregateOutputType | null
    _max: TimesDaRodadaMaxAggregateOutputType | null
  }

  type GetTimesDaRodadaGroupByPayload<T extends TimesDaRodadaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimesDaRodadaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimesDaRodadaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimesDaRodadaGroupByOutputType[P]>
            : GetScalarType<T[P], TimesDaRodadaGroupByOutputType[P]>
        }
      >
    >


  export type TimesDaRodadaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idParticipante?: boolean
    nome?: boolean
    saldo?: boolean
    time?: boolean
    emblemaDoTime?: boolean
    idTorneio?: boolean
    idRodada?: boolean
    mandante?: boolean | TimesDaRodada$mandanteArgs<ExtArgs>
    visitante?: boolean | TimesDaRodada$visitanteArgs<ExtArgs>
    _count?: boolean | TimesDaRodadaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timesDaRodada"]>

  export type TimesDaRodadaSelectScalar = {
    id?: boolean
    idParticipante?: boolean
    nome?: boolean
    saldo?: boolean
    time?: boolean
    emblemaDoTime?: boolean
    idTorneio?: boolean
    idRodada?: boolean
  }

  export type TimesDaRodadaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mandante?: boolean | TimesDaRodada$mandanteArgs<ExtArgs>
    visitante?: boolean | TimesDaRodada$visitanteArgs<ExtArgs>
    _count?: boolean | TimesDaRodadaCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TimesDaRodadaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TimesDaRodada"
    objects: {
      mandante: Prisma.$RodadaPayload<ExtArgs>[]
      visitante: Prisma.$RodadaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      idParticipante: string
      nome: string
      saldo: number | null
      time: string | null
      emblemaDoTime: string | null
      idTorneio: string
      idRodada: string[]
    }, ExtArgs["result"]["timesDaRodada"]>
    composites: {}
  }


  type TimesDaRodadaGetPayload<S extends boolean | null | undefined | TimesDaRodadaDefaultArgs> = $Result.GetResult<Prisma.$TimesDaRodadaPayload, S>

  type TimesDaRodadaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TimesDaRodadaFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TimesDaRodadaCountAggregateInputType | true
    }

  export interface TimesDaRodadaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TimesDaRodada'], meta: { name: 'TimesDaRodada' } }
    /**
     * Find zero or one TimesDaRodada that matches the filter.
     * @param {TimesDaRodadaFindUniqueArgs} args - Arguments to find a TimesDaRodada
     * @example
     * // Get one TimesDaRodada
     * const timesDaRodada = await prisma.timesDaRodada.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TimesDaRodadaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TimesDaRodadaFindUniqueArgs<ExtArgs>>
    ): Prisma__TimesDaRodadaClient<$Result.GetResult<Prisma.$TimesDaRodadaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TimesDaRodada that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TimesDaRodadaFindUniqueOrThrowArgs} args - Arguments to find a TimesDaRodada
     * @example
     * // Get one TimesDaRodada
     * const timesDaRodada = await prisma.timesDaRodada.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TimesDaRodadaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TimesDaRodadaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TimesDaRodadaClient<$Result.GetResult<Prisma.$TimesDaRodadaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TimesDaRodada that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesDaRodadaFindFirstArgs} args - Arguments to find a TimesDaRodada
     * @example
     * // Get one TimesDaRodada
     * const timesDaRodada = await prisma.timesDaRodada.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TimesDaRodadaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TimesDaRodadaFindFirstArgs<ExtArgs>>
    ): Prisma__TimesDaRodadaClient<$Result.GetResult<Prisma.$TimesDaRodadaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TimesDaRodada that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesDaRodadaFindFirstOrThrowArgs} args - Arguments to find a TimesDaRodada
     * @example
     * // Get one TimesDaRodada
     * const timesDaRodada = await prisma.timesDaRodada.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TimesDaRodadaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TimesDaRodadaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TimesDaRodadaClient<$Result.GetResult<Prisma.$TimesDaRodadaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TimesDaRodadas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesDaRodadaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimesDaRodadas
     * const timesDaRodadas = await prisma.timesDaRodada.findMany()
     * 
     * // Get first 10 TimesDaRodadas
     * const timesDaRodadas = await prisma.timesDaRodada.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timesDaRodadaWithIdOnly = await prisma.timesDaRodada.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TimesDaRodadaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TimesDaRodadaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimesDaRodadaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TimesDaRodada.
     * @param {TimesDaRodadaCreateArgs} args - Arguments to create a TimesDaRodada.
     * @example
     * // Create one TimesDaRodada
     * const TimesDaRodada = await prisma.timesDaRodada.create({
     *   data: {
     *     // ... data to create a TimesDaRodada
     *   }
     * })
     * 
    **/
    create<T extends TimesDaRodadaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TimesDaRodadaCreateArgs<ExtArgs>>
    ): Prisma__TimesDaRodadaClient<$Result.GetResult<Prisma.$TimesDaRodadaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TimesDaRodadas.
     *     @param {TimesDaRodadaCreateManyArgs} args - Arguments to create many TimesDaRodadas.
     *     @example
     *     // Create many TimesDaRodadas
     *     const timesDaRodada = await prisma.timesDaRodada.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TimesDaRodadaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TimesDaRodadaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TimesDaRodada.
     * @param {TimesDaRodadaDeleteArgs} args - Arguments to delete one TimesDaRodada.
     * @example
     * // Delete one TimesDaRodada
     * const TimesDaRodada = await prisma.timesDaRodada.delete({
     *   where: {
     *     // ... filter to delete one TimesDaRodada
     *   }
     * })
     * 
    **/
    delete<T extends TimesDaRodadaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TimesDaRodadaDeleteArgs<ExtArgs>>
    ): Prisma__TimesDaRodadaClient<$Result.GetResult<Prisma.$TimesDaRodadaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TimesDaRodada.
     * @param {TimesDaRodadaUpdateArgs} args - Arguments to update one TimesDaRodada.
     * @example
     * // Update one TimesDaRodada
     * const timesDaRodada = await prisma.timesDaRodada.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TimesDaRodadaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TimesDaRodadaUpdateArgs<ExtArgs>>
    ): Prisma__TimesDaRodadaClient<$Result.GetResult<Prisma.$TimesDaRodadaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TimesDaRodadas.
     * @param {TimesDaRodadaDeleteManyArgs} args - Arguments to filter TimesDaRodadas to delete.
     * @example
     * // Delete a few TimesDaRodadas
     * const { count } = await prisma.timesDaRodada.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TimesDaRodadaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TimesDaRodadaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimesDaRodadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesDaRodadaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimesDaRodadas
     * const timesDaRodada = await prisma.timesDaRodada.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TimesDaRodadaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TimesDaRodadaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TimesDaRodada.
     * @param {TimesDaRodadaUpsertArgs} args - Arguments to update or create a TimesDaRodada.
     * @example
     * // Update or create a TimesDaRodada
     * const timesDaRodada = await prisma.timesDaRodada.upsert({
     *   create: {
     *     // ... data to create a TimesDaRodada
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimesDaRodada we want to update
     *   }
     * })
    **/
    upsert<T extends TimesDaRodadaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TimesDaRodadaUpsertArgs<ExtArgs>>
    ): Prisma__TimesDaRodadaClient<$Result.GetResult<Prisma.$TimesDaRodadaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more TimesDaRodadas that matches the filter.
     * @param {TimesDaRodadaFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const timesDaRodada = await prisma.timesDaRodada.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: TimesDaRodadaFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TimesDaRodada.
     * @param {TimesDaRodadaAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const timesDaRodada = await prisma.timesDaRodada.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: TimesDaRodadaAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of TimesDaRodadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesDaRodadaCountArgs} args - Arguments to filter TimesDaRodadas to count.
     * @example
     * // Count the number of TimesDaRodadas
     * const count = await prisma.timesDaRodada.count({
     *   where: {
     *     // ... the filter for the TimesDaRodadas we want to count
     *   }
     * })
    **/
    count<T extends TimesDaRodadaCountArgs>(
      args?: Subset<T, TimesDaRodadaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimesDaRodadaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimesDaRodada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesDaRodadaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimesDaRodadaAggregateArgs>(args: Subset<T, TimesDaRodadaAggregateArgs>): Prisma.PrismaPromise<GetTimesDaRodadaAggregateType<T>>

    /**
     * Group by TimesDaRodada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesDaRodadaGroupByArgs} args - Group by arguments.
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
      T extends TimesDaRodadaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimesDaRodadaGroupByArgs['orderBy'] }
        : { orderBy?: TimesDaRodadaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TimesDaRodadaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimesDaRodadaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TimesDaRodada model
   */
  readonly fields: TimesDaRodadaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TimesDaRodada.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimesDaRodadaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    mandante<T extends TimesDaRodada$mandanteArgs<ExtArgs> = {}>(args?: Subset<T, TimesDaRodada$mandanteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RodadaPayload<ExtArgs>, T, 'findMany'> | Null>;

    visitante<T extends TimesDaRodada$visitanteArgs<ExtArgs> = {}>(args?: Subset<T, TimesDaRodada$visitanteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RodadaPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TimesDaRodada model
   */ 
  interface TimesDaRodadaFieldRefs {
    readonly id: FieldRef<"TimesDaRodada", 'String'>
    readonly idParticipante: FieldRef<"TimesDaRodada", 'String'>
    readonly nome: FieldRef<"TimesDaRodada", 'String'>
    readonly saldo: FieldRef<"TimesDaRodada", 'Float'>
    readonly time: FieldRef<"TimesDaRodada", 'String'>
    readonly emblemaDoTime: FieldRef<"TimesDaRodada", 'String'>
    readonly idTorneio: FieldRef<"TimesDaRodada", 'String'>
    readonly idRodada: FieldRef<"TimesDaRodada", 'String[]'>
  }
    

  // Custom InputTypes

  /**
   * TimesDaRodada findUnique
   */
  export type TimesDaRodadaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimesDaRodada
     */
    select?: TimesDaRodadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimesDaRodadaInclude<ExtArgs> | null
    /**
     * Filter, which TimesDaRodada to fetch.
     */
    where: TimesDaRodadaWhereUniqueInput
  }


  /**
   * TimesDaRodada findUniqueOrThrow
   */
  export type TimesDaRodadaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimesDaRodada
     */
    select?: TimesDaRodadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimesDaRodadaInclude<ExtArgs> | null
    /**
     * Filter, which TimesDaRodada to fetch.
     */
    where: TimesDaRodadaWhereUniqueInput
  }


  /**
   * TimesDaRodada findFirst
   */
  export type TimesDaRodadaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimesDaRodada
     */
    select?: TimesDaRodadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimesDaRodadaInclude<ExtArgs> | null
    /**
     * Filter, which TimesDaRodada to fetch.
     */
    where?: TimesDaRodadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimesDaRodadas to fetch.
     */
    orderBy?: TimesDaRodadaOrderByWithRelationInput | TimesDaRodadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimesDaRodadas.
     */
    cursor?: TimesDaRodadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimesDaRodadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimesDaRodadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimesDaRodadas.
     */
    distinct?: TimesDaRodadaScalarFieldEnum | TimesDaRodadaScalarFieldEnum[]
  }


  /**
   * TimesDaRodada findFirstOrThrow
   */
  export type TimesDaRodadaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimesDaRodada
     */
    select?: TimesDaRodadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimesDaRodadaInclude<ExtArgs> | null
    /**
     * Filter, which TimesDaRodada to fetch.
     */
    where?: TimesDaRodadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimesDaRodadas to fetch.
     */
    orderBy?: TimesDaRodadaOrderByWithRelationInput | TimesDaRodadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimesDaRodadas.
     */
    cursor?: TimesDaRodadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimesDaRodadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimesDaRodadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimesDaRodadas.
     */
    distinct?: TimesDaRodadaScalarFieldEnum | TimesDaRodadaScalarFieldEnum[]
  }


  /**
   * TimesDaRodada findMany
   */
  export type TimesDaRodadaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimesDaRodada
     */
    select?: TimesDaRodadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimesDaRodadaInclude<ExtArgs> | null
    /**
     * Filter, which TimesDaRodadas to fetch.
     */
    where?: TimesDaRodadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimesDaRodadas to fetch.
     */
    orderBy?: TimesDaRodadaOrderByWithRelationInput | TimesDaRodadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimesDaRodadas.
     */
    cursor?: TimesDaRodadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimesDaRodadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimesDaRodadas.
     */
    skip?: number
    distinct?: TimesDaRodadaScalarFieldEnum | TimesDaRodadaScalarFieldEnum[]
  }


  /**
   * TimesDaRodada create
   */
  export type TimesDaRodadaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimesDaRodada
     */
    select?: TimesDaRodadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimesDaRodadaInclude<ExtArgs> | null
    /**
     * The data needed to create a TimesDaRodada.
     */
    data: XOR<TimesDaRodadaCreateInput, TimesDaRodadaUncheckedCreateInput>
  }


  /**
   * TimesDaRodada createMany
   */
  export type TimesDaRodadaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TimesDaRodadas.
     */
    data: TimesDaRodadaCreateManyInput | TimesDaRodadaCreateManyInput[]
  }


  /**
   * TimesDaRodada update
   */
  export type TimesDaRodadaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimesDaRodada
     */
    select?: TimesDaRodadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimesDaRodadaInclude<ExtArgs> | null
    /**
     * The data needed to update a TimesDaRodada.
     */
    data: XOR<TimesDaRodadaUpdateInput, TimesDaRodadaUncheckedUpdateInput>
    /**
     * Choose, which TimesDaRodada to update.
     */
    where: TimesDaRodadaWhereUniqueInput
  }


  /**
   * TimesDaRodada updateMany
   */
  export type TimesDaRodadaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TimesDaRodadas.
     */
    data: XOR<TimesDaRodadaUpdateManyMutationInput, TimesDaRodadaUncheckedUpdateManyInput>
    /**
     * Filter which TimesDaRodadas to update
     */
    where?: TimesDaRodadaWhereInput
  }


  /**
   * TimesDaRodada upsert
   */
  export type TimesDaRodadaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimesDaRodada
     */
    select?: TimesDaRodadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimesDaRodadaInclude<ExtArgs> | null
    /**
     * The filter to search for the TimesDaRodada to update in case it exists.
     */
    where: TimesDaRodadaWhereUniqueInput
    /**
     * In case the TimesDaRodada found by the `where` argument doesn't exist, create a new TimesDaRodada with this data.
     */
    create: XOR<TimesDaRodadaCreateInput, TimesDaRodadaUncheckedCreateInput>
    /**
     * In case the TimesDaRodada was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimesDaRodadaUpdateInput, TimesDaRodadaUncheckedUpdateInput>
  }


  /**
   * TimesDaRodada delete
   */
  export type TimesDaRodadaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimesDaRodada
     */
    select?: TimesDaRodadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimesDaRodadaInclude<ExtArgs> | null
    /**
     * Filter which TimesDaRodada to delete.
     */
    where: TimesDaRodadaWhereUniqueInput
  }


  /**
   * TimesDaRodada deleteMany
   */
  export type TimesDaRodadaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimesDaRodadas to delete
     */
    where?: TimesDaRodadaWhereInput
  }


  /**
   * TimesDaRodada findRaw
   */
  export type TimesDaRodadaFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * TimesDaRodada aggregateRaw
   */
  export type TimesDaRodadaAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * TimesDaRodada.mandante
   */
  export type TimesDaRodada$mandanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rodada
     */
    select?: RodadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RodadaInclude<ExtArgs> | null
    where?: RodadaWhereInput
    orderBy?: RodadaOrderByWithRelationInput | RodadaOrderByWithRelationInput[]
    cursor?: RodadaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RodadaScalarFieldEnum | RodadaScalarFieldEnum[]
  }


  /**
   * TimesDaRodada.visitante
   */
  export type TimesDaRodada$visitanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rodada
     */
    select?: RodadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RodadaInclude<ExtArgs> | null
    where?: RodadaWhereInput
    orderBy?: RodadaOrderByWithRelationInput | RodadaOrderByWithRelationInput[]
    cursor?: RodadaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RodadaScalarFieldEnum | RodadaScalarFieldEnum[]
  }


  /**
   * TimesDaRodada without action
   */
  export type TimesDaRodadaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimesDaRodada
     */
    select?: TimesDaRodadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimesDaRodadaInclude<ExtArgs> | null
  }



  /**
   * Model tabelaDoCampeonato
   */

  export type AggregateTabelaDoCampeonato = {
    _count: TabelaDoCampeonatoCountAggregateOutputType | null
    _avg: TabelaDoCampeonatoAvgAggregateOutputType | null
    _sum: TabelaDoCampeonatoSumAggregateOutputType | null
    _min: TabelaDoCampeonatoMinAggregateOutputType | null
    _max: TabelaDoCampeonatoMaxAggregateOutputType | null
  }

  export type TabelaDoCampeonatoAvgAggregateOutputType = {
    pontos: number | null
    jogos: number | null
    vitorias: number | null
    empates: number | null
    derrota: number | null
    golsPro: number | null
    golsContra: number | null
    saldoDeGol: number | null
  }

  export type TabelaDoCampeonatoSumAggregateOutputType = {
    pontos: number | null
    jogos: number | null
    vitorias: number | null
    empates: number | null
    derrota: number | null
    golsPro: number | null
    golsContra: number | null
    saldoDeGol: number | null
  }

  export type TabelaDoCampeonatoMinAggregateOutputType = {
    id: string | null
    idDoTorneio: string | null
    idDoCampeonato: string | null
    idDoParticipante: string | null
    avatar: string | null
    equipe: string | null
    pontos: number | null
    jogos: number | null
    vitorias: number | null
    empates: number | null
    derrota: number | null
    golsPro: number | null
    golsContra: number | null
    saldoDeGol: number | null
  }

  export type TabelaDoCampeonatoMaxAggregateOutputType = {
    id: string | null
    idDoTorneio: string | null
    idDoCampeonato: string | null
    idDoParticipante: string | null
    avatar: string | null
    equipe: string | null
    pontos: number | null
    jogos: number | null
    vitorias: number | null
    empates: number | null
    derrota: number | null
    golsPro: number | null
    golsContra: number | null
    saldoDeGol: number | null
  }

  export type TabelaDoCampeonatoCountAggregateOutputType = {
    id: number
    idDoTorneio: number
    idDoCampeonato: number
    idDoParticipante: number
    avatar: number
    equipe: number
    pontos: number
    jogos: number
    vitorias: number
    empates: number
    derrota: number
    golsPro: number
    golsContra: number
    saldoDeGol: number
    _all: number
  }


  export type TabelaDoCampeonatoAvgAggregateInputType = {
    pontos?: true
    jogos?: true
    vitorias?: true
    empates?: true
    derrota?: true
    golsPro?: true
    golsContra?: true
    saldoDeGol?: true
  }

  export type TabelaDoCampeonatoSumAggregateInputType = {
    pontos?: true
    jogos?: true
    vitorias?: true
    empates?: true
    derrota?: true
    golsPro?: true
    golsContra?: true
    saldoDeGol?: true
  }

  export type TabelaDoCampeonatoMinAggregateInputType = {
    id?: true
    idDoTorneio?: true
    idDoCampeonato?: true
    idDoParticipante?: true
    avatar?: true
    equipe?: true
    pontos?: true
    jogos?: true
    vitorias?: true
    empates?: true
    derrota?: true
    golsPro?: true
    golsContra?: true
    saldoDeGol?: true
  }

  export type TabelaDoCampeonatoMaxAggregateInputType = {
    id?: true
    idDoTorneio?: true
    idDoCampeonato?: true
    idDoParticipante?: true
    avatar?: true
    equipe?: true
    pontos?: true
    jogos?: true
    vitorias?: true
    empates?: true
    derrota?: true
    golsPro?: true
    golsContra?: true
    saldoDeGol?: true
  }

  export type TabelaDoCampeonatoCountAggregateInputType = {
    id?: true
    idDoTorneio?: true
    idDoCampeonato?: true
    idDoParticipante?: true
    avatar?: true
    equipe?: true
    pontos?: true
    jogos?: true
    vitorias?: true
    empates?: true
    derrota?: true
    golsPro?: true
    golsContra?: true
    saldoDeGol?: true
    _all?: true
  }

  export type TabelaDoCampeonatoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tabelaDoCampeonato to aggregate.
     */
    where?: tabelaDoCampeonatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tabelaDoCampeonatoes to fetch.
     */
    orderBy?: tabelaDoCampeonatoOrderByWithRelationInput | tabelaDoCampeonatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tabelaDoCampeonatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tabelaDoCampeonatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tabelaDoCampeonatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tabelaDoCampeonatoes
    **/
    _count?: true | TabelaDoCampeonatoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TabelaDoCampeonatoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TabelaDoCampeonatoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TabelaDoCampeonatoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TabelaDoCampeonatoMaxAggregateInputType
  }

  export type GetTabelaDoCampeonatoAggregateType<T extends TabelaDoCampeonatoAggregateArgs> = {
        [P in keyof T & keyof AggregateTabelaDoCampeonato]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTabelaDoCampeonato[P]>
      : GetScalarType<T[P], AggregateTabelaDoCampeonato[P]>
  }




  export type tabelaDoCampeonatoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tabelaDoCampeonatoWhereInput
    orderBy?: tabelaDoCampeonatoOrderByWithAggregationInput | tabelaDoCampeonatoOrderByWithAggregationInput[]
    by: TabelaDoCampeonatoScalarFieldEnum[] | TabelaDoCampeonatoScalarFieldEnum
    having?: tabelaDoCampeonatoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TabelaDoCampeonatoCountAggregateInputType | true
    _avg?: TabelaDoCampeonatoAvgAggregateInputType
    _sum?: TabelaDoCampeonatoSumAggregateInputType
    _min?: TabelaDoCampeonatoMinAggregateInputType
    _max?: TabelaDoCampeonatoMaxAggregateInputType
  }

  export type TabelaDoCampeonatoGroupByOutputType = {
    id: string
    idDoTorneio: string
    idDoCampeonato: string
    idDoParticipante: string
    avatar: string
    equipe: string
    pontos: number
    jogos: number
    vitorias: number
    empates: number
    derrota: number
    golsPro: number
    golsContra: number
    saldoDeGol: number
    _count: TabelaDoCampeonatoCountAggregateOutputType | null
    _avg: TabelaDoCampeonatoAvgAggregateOutputType | null
    _sum: TabelaDoCampeonatoSumAggregateOutputType | null
    _min: TabelaDoCampeonatoMinAggregateOutputType | null
    _max: TabelaDoCampeonatoMaxAggregateOutputType | null
  }

  type GetTabelaDoCampeonatoGroupByPayload<T extends tabelaDoCampeonatoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TabelaDoCampeonatoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TabelaDoCampeonatoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TabelaDoCampeonatoGroupByOutputType[P]>
            : GetScalarType<T[P], TabelaDoCampeonatoGroupByOutputType[P]>
        }
      >
    >


  export type tabelaDoCampeonatoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idDoTorneio?: boolean
    idDoCampeonato?: boolean
    idDoParticipante?: boolean
    avatar?: boolean
    equipe?: boolean
    pontos?: boolean
    jogos?: boolean
    vitorias?: boolean
    empates?: boolean
    derrota?: boolean
    golsPro?: boolean
    golsContra?: boolean
    saldoDeGol?: boolean
  }, ExtArgs["result"]["tabelaDoCampeonato"]>

  export type tabelaDoCampeonatoSelectScalar = {
    id?: boolean
    idDoTorneio?: boolean
    idDoCampeonato?: boolean
    idDoParticipante?: boolean
    avatar?: boolean
    equipe?: boolean
    pontos?: boolean
    jogos?: boolean
    vitorias?: boolean
    empates?: boolean
    derrota?: boolean
    golsPro?: boolean
    golsContra?: boolean
    saldoDeGol?: boolean
  }


  export type $tabelaDoCampeonatoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tabelaDoCampeonato"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      idDoTorneio: string
      idDoCampeonato: string
      idDoParticipante: string
      avatar: string
      equipe: string
      pontos: number
      jogos: number
      vitorias: number
      empates: number
      derrota: number
      golsPro: number
      golsContra: number
      saldoDeGol: number
    }, ExtArgs["result"]["tabelaDoCampeonato"]>
    composites: {}
  }


  type tabelaDoCampeonatoGetPayload<S extends boolean | null | undefined | tabelaDoCampeonatoDefaultArgs> = $Result.GetResult<Prisma.$tabelaDoCampeonatoPayload, S>

  type tabelaDoCampeonatoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tabelaDoCampeonatoFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TabelaDoCampeonatoCountAggregateInputType | true
    }

  export interface tabelaDoCampeonatoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tabelaDoCampeonato'], meta: { name: 'tabelaDoCampeonato' } }
    /**
     * Find zero or one TabelaDoCampeonato that matches the filter.
     * @param {tabelaDoCampeonatoFindUniqueArgs} args - Arguments to find a TabelaDoCampeonato
     * @example
     * // Get one TabelaDoCampeonato
     * const tabelaDoCampeonato = await prisma.tabelaDoCampeonato.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tabelaDoCampeonatoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, tabelaDoCampeonatoFindUniqueArgs<ExtArgs>>
    ): Prisma__tabelaDoCampeonatoClient<$Result.GetResult<Prisma.$tabelaDoCampeonatoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TabelaDoCampeonato that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tabelaDoCampeonatoFindUniqueOrThrowArgs} args - Arguments to find a TabelaDoCampeonato
     * @example
     * // Get one TabelaDoCampeonato
     * const tabelaDoCampeonato = await prisma.tabelaDoCampeonato.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tabelaDoCampeonatoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tabelaDoCampeonatoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__tabelaDoCampeonatoClient<$Result.GetResult<Prisma.$tabelaDoCampeonatoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TabelaDoCampeonato that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tabelaDoCampeonatoFindFirstArgs} args - Arguments to find a TabelaDoCampeonato
     * @example
     * // Get one TabelaDoCampeonato
     * const tabelaDoCampeonato = await prisma.tabelaDoCampeonato.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tabelaDoCampeonatoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, tabelaDoCampeonatoFindFirstArgs<ExtArgs>>
    ): Prisma__tabelaDoCampeonatoClient<$Result.GetResult<Prisma.$tabelaDoCampeonatoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TabelaDoCampeonato that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tabelaDoCampeonatoFindFirstOrThrowArgs} args - Arguments to find a TabelaDoCampeonato
     * @example
     * // Get one TabelaDoCampeonato
     * const tabelaDoCampeonato = await prisma.tabelaDoCampeonato.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tabelaDoCampeonatoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tabelaDoCampeonatoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__tabelaDoCampeonatoClient<$Result.GetResult<Prisma.$tabelaDoCampeonatoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TabelaDoCampeonatoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tabelaDoCampeonatoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TabelaDoCampeonatoes
     * const tabelaDoCampeonatoes = await prisma.tabelaDoCampeonato.findMany()
     * 
     * // Get first 10 TabelaDoCampeonatoes
     * const tabelaDoCampeonatoes = await prisma.tabelaDoCampeonato.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tabelaDoCampeonatoWithIdOnly = await prisma.tabelaDoCampeonato.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends tabelaDoCampeonatoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tabelaDoCampeonatoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tabelaDoCampeonatoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TabelaDoCampeonato.
     * @param {tabelaDoCampeonatoCreateArgs} args - Arguments to create a TabelaDoCampeonato.
     * @example
     * // Create one TabelaDoCampeonato
     * const TabelaDoCampeonato = await prisma.tabelaDoCampeonato.create({
     *   data: {
     *     // ... data to create a TabelaDoCampeonato
     *   }
     * })
     * 
    **/
    create<T extends tabelaDoCampeonatoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, tabelaDoCampeonatoCreateArgs<ExtArgs>>
    ): Prisma__tabelaDoCampeonatoClient<$Result.GetResult<Prisma.$tabelaDoCampeonatoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TabelaDoCampeonatoes.
     *     @param {tabelaDoCampeonatoCreateManyArgs} args - Arguments to create many TabelaDoCampeonatoes.
     *     @example
     *     // Create many TabelaDoCampeonatoes
     *     const tabelaDoCampeonato = await prisma.tabelaDoCampeonato.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tabelaDoCampeonatoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tabelaDoCampeonatoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TabelaDoCampeonato.
     * @param {tabelaDoCampeonatoDeleteArgs} args - Arguments to delete one TabelaDoCampeonato.
     * @example
     * // Delete one TabelaDoCampeonato
     * const TabelaDoCampeonato = await prisma.tabelaDoCampeonato.delete({
     *   where: {
     *     // ... filter to delete one TabelaDoCampeonato
     *   }
     * })
     * 
    **/
    delete<T extends tabelaDoCampeonatoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, tabelaDoCampeonatoDeleteArgs<ExtArgs>>
    ): Prisma__tabelaDoCampeonatoClient<$Result.GetResult<Prisma.$tabelaDoCampeonatoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TabelaDoCampeonato.
     * @param {tabelaDoCampeonatoUpdateArgs} args - Arguments to update one TabelaDoCampeonato.
     * @example
     * // Update one TabelaDoCampeonato
     * const tabelaDoCampeonato = await prisma.tabelaDoCampeonato.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tabelaDoCampeonatoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, tabelaDoCampeonatoUpdateArgs<ExtArgs>>
    ): Prisma__tabelaDoCampeonatoClient<$Result.GetResult<Prisma.$tabelaDoCampeonatoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TabelaDoCampeonatoes.
     * @param {tabelaDoCampeonatoDeleteManyArgs} args - Arguments to filter TabelaDoCampeonatoes to delete.
     * @example
     * // Delete a few TabelaDoCampeonatoes
     * const { count } = await prisma.tabelaDoCampeonato.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tabelaDoCampeonatoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tabelaDoCampeonatoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TabelaDoCampeonatoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tabelaDoCampeonatoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TabelaDoCampeonatoes
     * const tabelaDoCampeonato = await prisma.tabelaDoCampeonato.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tabelaDoCampeonatoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, tabelaDoCampeonatoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TabelaDoCampeonato.
     * @param {tabelaDoCampeonatoUpsertArgs} args - Arguments to update or create a TabelaDoCampeonato.
     * @example
     * // Update or create a TabelaDoCampeonato
     * const tabelaDoCampeonato = await prisma.tabelaDoCampeonato.upsert({
     *   create: {
     *     // ... data to create a TabelaDoCampeonato
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TabelaDoCampeonato we want to update
     *   }
     * })
    **/
    upsert<T extends tabelaDoCampeonatoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, tabelaDoCampeonatoUpsertArgs<ExtArgs>>
    ): Prisma__tabelaDoCampeonatoClient<$Result.GetResult<Prisma.$tabelaDoCampeonatoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more TabelaDoCampeonatoes that matches the filter.
     * @param {tabelaDoCampeonatoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const tabelaDoCampeonato = await prisma.tabelaDoCampeonato.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: tabelaDoCampeonatoFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TabelaDoCampeonato.
     * @param {tabelaDoCampeonatoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const tabelaDoCampeonato = await prisma.tabelaDoCampeonato.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: tabelaDoCampeonatoAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of TabelaDoCampeonatoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tabelaDoCampeonatoCountArgs} args - Arguments to filter TabelaDoCampeonatoes to count.
     * @example
     * // Count the number of TabelaDoCampeonatoes
     * const count = await prisma.tabelaDoCampeonato.count({
     *   where: {
     *     // ... the filter for the TabelaDoCampeonatoes we want to count
     *   }
     * })
    **/
    count<T extends tabelaDoCampeonatoCountArgs>(
      args?: Subset<T, tabelaDoCampeonatoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TabelaDoCampeonatoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TabelaDoCampeonato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TabelaDoCampeonatoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TabelaDoCampeonatoAggregateArgs>(args: Subset<T, TabelaDoCampeonatoAggregateArgs>): Prisma.PrismaPromise<GetTabelaDoCampeonatoAggregateType<T>>

    /**
     * Group by TabelaDoCampeonato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tabelaDoCampeonatoGroupByArgs} args - Group by arguments.
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
      T extends tabelaDoCampeonatoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tabelaDoCampeonatoGroupByArgs['orderBy'] }
        : { orderBy?: tabelaDoCampeonatoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tabelaDoCampeonatoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTabelaDoCampeonatoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tabelaDoCampeonato model
   */
  readonly fields: tabelaDoCampeonatoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tabelaDoCampeonato.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tabelaDoCampeonatoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the tabelaDoCampeonato model
   */ 
  interface tabelaDoCampeonatoFieldRefs {
    readonly id: FieldRef<"tabelaDoCampeonato", 'String'>
    readonly idDoTorneio: FieldRef<"tabelaDoCampeonato", 'String'>
    readonly idDoCampeonato: FieldRef<"tabelaDoCampeonato", 'String'>
    readonly idDoParticipante: FieldRef<"tabelaDoCampeonato", 'String'>
    readonly avatar: FieldRef<"tabelaDoCampeonato", 'String'>
    readonly equipe: FieldRef<"tabelaDoCampeonato", 'String'>
    readonly pontos: FieldRef<"tabelaDoCampeonato", 'Int'>
    readonly jogos: FieldRef<"tabelaDoCampeonato", 'Int'>
    readonly vitorias: FieldRef<"tabelaDoCampeonato", 'Int'>
    readonly empates: FieldRef<"tabelaDoCampeonato", 'Int'>
    readonly derrota: FieldRef<"tabelaDoCampeonato", 'Int'>
    readonly golsPro: FieldRef<"tabelaDoCampeonato", 'Int'>
    readonly golsContra: FieldRef<"tabelaDoCampeonato", 'Int'>
    readonly saldoDeGol: FieldRef<"tabelaDoCampeonato", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * tabelaDoCampeonato findUnique
   */
  export type tabelaDoCampeonatoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tabelaDoCampeonato
     */
    select?: tabelaDoCampeonatoSelect<ExtArgs> | null
    /**
     * Filter, which tabelaDoCampeonato to fetch.
     */
    where: tabelaDoCampeonatoWhereUniqueInput
  }


  /**
   * tabelaDoCampeonato findUniqueOrThrow
   */
  export type tabelaDoCampeonatoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tabelaDoCampeonato
     */
    select?: tabelaDoCampeonatoSelect<ExtArgs> | null
    /**
     * Filter, which tabelaDoCampeonato to fetch.
     */
    where: tabelaDoCampeonatoWhereUniqueInput
  }


  /**
   * tabelaDoCampeonato findFirst
   */
  export type tabelaDoCampeonatoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tabelaDoCampeonato
     */
    select?: tabelaDoCampeonatoSelect<ExtArgs> | null
    /**
     * Filter, which tabelaDoCampeonato to fetch.
     */
    where?: tabelaDoCampeonatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tabelaDoCampeonatoes to fetch.
     */
    orderBy?: tabelaDoCampeonatoOrderByWithRelationInput | tabelaDoCampeonatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tabelaDoCampeonatoes.
     */
    cursor?: tabelaDoCampeonatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tabelaDoCampeonatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tabelaDoCampeonatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tabelaDoCampeonatoes.
     */
    distinct?: TabelaDoCampeonatoScalarFieldEnum | TabelaDoCampeonatoScalarFieldEnum[]
  }


  /**
   * tabelaDoCampeonato findFirstOrThrow
   */
  export type tabelaDoCampeonatoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tabelaDoCampeonato
     */
    select?: tabelaDoCampeonatoSelect<ExtArgs> | null
    /**
     * Filter, which tabelaDoCampeonato to fetch.
     */
    where?: tabelaDoCampeonatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tabelaDoCampeonatoes to fetch.
     */
    orderBy?: tabelaDoCampeonatoOrderByWithRelationInput | tabelaDoCampeonatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tabelaDoCampeonatoes.
     */
    cursor?: tabelaDoCampeonatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tabelaDoCampeonatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tabelaDoCampeonatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tabelaDoCampeonatoes.
     */
    distinct?: TabelaDoCampeonatoScalarFieldEnum | TabelaDoCampeonatoScalarFieldEnum[]
  }


  /**
   * tabelaDoCampeonato findMany
   */
  export type tabelaDoCampeonatoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tabelaDoCampeonato
     */
    select?: tabelaDoCampeonatoSelect<ExtArgs> | null
    /**
     * Filter, which tabelaDoCampeonatoes to fetch.
     */
    where?: tabelaDoCampeonatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tabelaDoCampeonatoes to fetch.
     */
    orderBy?: tabelaDoCampeonatoOrderByWithRelationInput | tabelaDoCampeonatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tabelaDoCampeonatoes.
     */
    cursor?: tabelaDoCampeonatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tabelaDoCampeonatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tabelaDoCampeonatoes.
     */
    skip?: number
    distinct?: TabelaDoCampeonatoScalarFieldEnum | TabelaDoCampeonatoScalarFieldEnum[]
  }


  /**
   * tabelaDoCampeonato create
   */
  export type tabelaDoCampeonatoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tabelaDoCampeonato
     */
    select?: tabelaDoCampeonatoSelect<ExtArgs> | null
    /**
     * The data needed to create a tabelaDoCampeonato.
     */
    data: XOR<tabelaDoCampeonatoCreateInput, tabelaDoCampeonatoUncheckedCreateInput>
  }


  /**
   * tabelaDoCampeonato createMany
   */
  export type tabelaDoCampeonatoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tabelaDoCampeonatoes.
     */
    data: tabelaDoCampeonatoCreateManyInput | tabelaDoCampeonatoCreateManyInput[]
  }


  /**
   * tabelaDoCampeonato update
   */
  export type tabelaDoCampeonatoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tabelaDoCampeonato
     */
    select?: tabelaDoCampeonatoSelect<ExtArgs> | null
    /**
     * The data needed to update a tabelaDoCampeonato.
     */
    data: XOR<tabelaDoCampeonatoUpdateInput, tabelaDoCampeonatoUncheckedUpdateInput>
    /**
     * Choose, which tabelaDoCampeonato to update.
     */
    where: tabelaDoCampeonatoWhereUniqueInput
  }


  /**
   * tabelaDoCampeonato updateMany
   */
  export type tabelaDoCampeonatoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tabelaDoCampeonatoes.
     */
    data: XOR<tabelaDoCampeonatoUpdateManyMutationInput, tabelaDoCampeonatoUncheckedUpdateManyInput>
    /**
     * Filter which tabelaDoCampeonatoes to update
     */
    where?: tabelaDoCampeonatoWhereInput
  }


  /**
   * tabelaDoCampeonato upsert
   */
  export type tabelaDoCampeonatoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tabelaDoCampeonato
     */
    select?: tabelaDoCampeonatoSelect<ExtArgs> | null
    /**
     * The filter to search for the tabelaDoCampeonato to update in case it exists.
     */
    where: tabelaDoCampeonatoWhereUniqueInput
    /**
     * In case the tabelaDoCampeonato found by the `where` argument doesn't exist, create a new tabelaDoCampeonato with this data.
     */
    create: XOR<tabelaDoCampeonatoCreateInput, tabelaDoCampeonatoUncheckedCreateInput>
    /**
     * In case the tabelaDoCampeonato was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tabelaDoCampeonatoUpdateInput, tabelaDoCampeonatoUncheckedUpdateInput>
  }


  /**
   * tabelaDoCampeonato delete
   */
  export type tabelaDoCampeonatoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tabelaDoCampeonato
     */
    select?: tabelaDoCampeonatoSelect<ExtArgs> | null
    /**
     * Filter which tabelaDoCampeonato to delete.
     */
    where: tabelaDoCampeonatoWhereUniqueInput
  }


  /**
   * tabelaDoCampeonato deleteMany
   */
  export type tabelaDoCampeonatoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tabelaDoCampeonatoes to delete
     */
    where?: tabelaDoCampeonatoWhereInput
  }


  /**
   * tabelaDoCampeonato findRaw
   */
  export type tabelaDoCampeonatoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * tabelaDoCampeonato aggregateRaw
   */
  export type tabelaDoCampeonatoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * tabelaDoCampeonato without action
   */
  export type tabelaDoCampeonatoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tabelaDoCampeonato
     */
    select?: tabelaDoCampeonatoSelect<ExtArgs> | null
  }



  /**
   * Model Resultados
   */

  export type AggregateResultados = {
    _count: ResultadosCountAggregateOutputType | null
    _avg: ResultadosAvgAggregateOutputType | null
    _sum: ResultadosSumAggregateOutputType | null
    _min: ResultadosMinAggregateOutputType | null
    _max: ResultadosMaxAggregateOutputType | null
  }

  export type ResultadosAvgAggregateOutputType = {
    premioColocacao: number | null
    premioArtilharia: number | null
    vitorias: number | null
    premioVitorias: number | null
    empates: number | null
    premioEmpates: number | null
    gols: number | null
    premioGols: number | null
    total: number | null
    premioDefezaMenosVazada: number | null
    golsTomados: number | null
    jogos: number | null
  }

  export type ResultadosSumAggregateOutputType = {
    premioColocacao: number | null
    premioArtilharia: number | null
    vitorias: number | null
    premioVitorias: number | null
    empates: number | null
    premioEmpates: number | null
    gols: number | null
    premioGols: number | null
    total: number | null
    premioDefezaMenosVazada: number | null
    golsTomados: number | null
    jogos: number | null
  }

  export type ResultadosMinAggregateOutputType = {
    id: string | null
    avatar: string | null
    idDoParticipante: string | null
    usuario: string | null
    colocacao: string | null
    premioColocacao: number | null
    artilharia: string | null
    premioArtilharia: number | null
    vitorias: number | null
    premioVitorias: number | null
    empates: number | null
    premioEmpates: number | null
    gols: number | null
    premioGols: number | null
    total: number | null
    posicaoDefezaMenosVazada: string | null
    premioDefezaMenosVazada: number | null
    golsTomados: number | null
    jogos: number | null
    idTabelaResultados: string | null
  }

  export type ResultadosMaxAggregateOutputType = {
    id: string | null
    avatar: string | null
    idDoParticipante: string | null
    usuario: string | null
    colocacao: string | null
    premioColocacao: number | null
    artilharia: string | null
    premioArtilharia: number | null
    vitorias: number | null
    premioVitorias: number | null
    empates: number | null
    premioEmpates: number | null
    gols: number | null
    premioGols: number | null
    total: number | null
    posicaoDefezaMenosVazada: string | null
    premioDefezaMenosVazada: number | null
    golsTomados: number | null
    jogos: number | null
    idTabelaResultados: string | null
  }

  export type ResultadosCountAggregateOutputType = {
    id: number
    avatar: number
    idDoParticipante: number
    usuario: number
    colocacao: number
    premioColocacao: number
    artilharia: number
    premioArtilharia: number
    vitorias: number
    premioVitorias: number
    empates: number
    premioEmpates: number
    gols: number
    premioGols: number
    total: number
    posicaoDefezaMenosVazada: number
    premioDefezaMenosVazada: number
    golsTomados: number
    jogos: number
    idTabelaResultados: number
    _all: number
  }


  export type ResultadosAvgAggregateInputType = {
    premioColocacao?: true
    premioArtilharia?: true
    vitorias?: true
    premioVitorias?: true
    empates?: true
    premioEmpates?: true
    gols?: true
    premioGols?: true
    total?: true
    premioDefezaMenosVazada?: true
    golsTomados?: true
    jogos?: true
  }

  export type ResultadosSumAggregateInputType = {
    premioColocacao?: true
    premioArtilharia?: true
    vitorias?: true
    premioVitorias?: true
    empates?: true
    premioEmpates?: true
    gols?: true
    premioGols?: true
    total?: true
    premioDefezaMenosVazada?: true
    golsTomados?: true
    jogos?: true
  }

  export type ResultadosMinAggregateInputType = {
    id?: true
    avatar?: true
    idDoParticipante?: true
    usuario?: true
    colocacao?: true
    premioColocacao?: true
    artilharia?: true
    premioArtilharia?: true
    vitorias?: true
    premioVitorias?: true
    empates?: true
    premioEmpates?: true
    gols?: true
    premioGols?: true
    total?: true
    posicaoDefezaMenosVazada?: true
    premioDefezaMenosVazada?: true
    golsTomados?: true
    jogos?: true
    idTabelaResultados?: true
  }

  export type ResultadosMaxAggregateInputType = {
    id?: true
    avatar?: true
    idDoParticipante?: true
    usuario?: true
    colocacao?: true
    premioColocacao?: true
    artilharia?: true
    premioArtilharia?: true
    vitorias?: true
    premioVitorias?: true
    empates?: true
    premioEmpates?: true
    gols?: true
    premioGols?: true
    total?: true
    posicaoDefezaMenosVazada?: true
    premioDefezaMenosVazada?: true
    golsTomados?: true
    jogos?: true
    idTabelaResultados?: true
  }

  export type ResultadosCountAggregateInputType = {
    id?: true
    avatar?: true
    idDoParticipante?: true
    usuario?: true
    colocacao?: true
    premioColocacao?: true
    artilharia?: true
    premioArtilharia?: true
    vitorias?: true
    premioVitorias?: true
    empates?: true
    premioEmpates?: true
    gols?: true
    premioGols?: true
    total?: true
    posicaoDefezaMenosVazada?: true
    premioDefezaMenosVazada?: true
    golsTomados?: true
    jogos?: true
    idTabelaResultados?: true
    _all?: true
  }

  export type ResultadosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resultados to aggregate.
     */
    where?: ResultadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resultados to fetch.
     */
    orderBy?: ResultadosOrderByWithRelationInput | ResultadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResultadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resultados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resultados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resultados
    **/
    _count?: true | ResultadosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResultadosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResultadosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResultadosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResultadosMaxAggregateInputType
  }

  export type GetResultadosAggregateType<T extends ResultadosAggregateArgs> = {
        [P in keyof T & keyof AggregateResultados]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResultados[P]>
      : GetScalarType<T[P], AggregateResultados[P]>
  }




  export type ResultadosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultadosWhereInput
    orderBy?: ResultadosOrderByWithAggregationInput | ResultadosOrderByWithAggregationInput[]
    by: ResultadosScalarFieldEnum[] | ResultadosScalarFieldEnum
    having?: ResultadosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResultadosCountAggregateInputType | true
    _avg?: ResultadosAvgAggregateInputType
    _sum?: ResultadosSumAggregateInputType
    _min?: ResultadosMinAggregateInputType
    _max?: ResultadosMaxAggregateInputType
  }

  export type ResultadosGroupByOutputType = {
    id: string
    avatar: string
    idDoParticipante: string
    usuario: string
    colocacao: string
    premioColocacao: number
    artilharia: string
    premioArtilharia: number
    vitorias: number
    premioVitorias: number
    empates: number
    premioEmpates: number
    gols: number
    premioGols: number
    total: number
    posicaoDefezaMenosVazada: string | null
    premioDefezaMenosVazada: number | null
    golsTomados: number | null
    jogos: number | null
    idTabelaResultados: string
    _count: ResultadosCountAggregateOutputType | null
    _avg: ResultadosAvgAggregateOutputType | null
    _sum: ResultadosSumAggregateOutputType | null
    _min: ResultadosMinAggregateOutputType | null
    _max: ResultadosMaxAggregateOutputType | null
  }

  type GetResultadosGroupByPayload<T extends ResultadosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResultadosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResultadosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResultadosGroupByOutputType[P]>
            : GetScalarType<T[P], ResultadosGroupByOutputType[P]>
        }
      >
    >


  export type ResultadosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    avatar?: boolean
    idDoParticipante?: boolean
    usuario?: boolean
    colocacao?: boolean
    premioColocacao?: boolean
    artilharia?: boolean
    premioArtilharia?: boolean
    vitorias?: boolean
    premioVitorias?: boolean
    empates?: boolean
    premioEmpates?: boolean
    gols?: boolean
    premioGols?: boolean
    total?: boolean
    posicaoDefezaMenosVazada?: boolean
    premioDefezaMenosVazada?: boolean
    golsTomados?: boolean
    jogos?: boolean
    idTabelaResultados?: boolean
    tabelaDeResultado?: boolean | TabelaDeResultadosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resultados"]>

  export type ResultadosSelectScalar = {
    id?: boolean
    avatar?: boolean
    idDoParticipante?: boolean
    usuario?: boolean
    colocacao?: boolean
    premioColocacao?: boolean
    artilharia?: boolean
    premioArtilharia?: boolean
    vitorias?: boolean
    premioVitorias?: boolean
    empates?: boolean
    premioEmpates?: boolean
    gols?: boolean
    premioGols?: boolean
    total?: boolean
    posicaoDefezaMenosVazada?: boolean
    premioDefezaMenosVazada?: boolean
    golsTomados?: boolean
    jogos?: boolean
    idTabelaResultados?: boolean
  }

  export type ResultadosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tabelaDeResultado?: boolean | TabelaDeResultadosDefaultArgs<ExtArgs>
  }


  export type $ResultadosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resultados"
    objects: {
      tabelaDeResultado: Prisma.$TabelaDeResultadosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      avatar: string
      idDoParticipante: string
      usuario: string
      colocacao: string
      premioColocacao: number
      artilharia: string
      premioArtilharia: number
      vitorias: number
      premioVitorias: number
      empates: number
      premioEmpates: number
      gols: number
      premioGols: number
      total: number
      posicaoDefezaMenosVazada: string | null
      premioDefezaMenosVazada: number | null
      golsTomados: number | null
      jogos: number | null
      idTabelaResultados: string
    }, ExtArgs["result"]["resultados"]>
    composites: {}
  }


  type ResultadosGetPayload<S extends boolean | null | undefined | ResultadosDefaultArgs> = $Result.GetResult<Prisma.$ResultadosPayload, S>

  type ResultadosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ResultadosFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ResultadosCountAggregateInputType | true
    }

  export interface ResultadosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resultados'], meta: { name: 'Resultados' } }
    /**
     * Find zero or one Resultados that matches the filter.
     * @param {ResultadosFindUniqueArgs} args - Arguments to find a Resultados
     * @example
     * // Get one Resultados
     * const resultados = await prisma.resultados.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ResultadosFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ResultadosFindUniqueArgs<ExtArgs>>
    ): Prisma__ResultadosClient<$Result.GetResult<Prisma.$ResultadosPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Resultados that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ResultadosFindUniqueOrThrowArgs} args - Arguments to find a Resultados
     * @example
     * // Get one Resultados
     * const resultados = await prisma.resultados.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ResultadosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ResultadosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ResultadosClient<$Result.GetResult<Prisma.$ResultadosPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Resultados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadosFindFirstArgs} args - Arguments to find a Resultados
     * @example
     * // Get one Resultados
     * const resultados = await prisma.resultados.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ResultadosFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ResultadosFindFirstArgs<ExtArgs>>
    ): Prisma__ResultadosClient<$Result.GetResult<Prisma.$ResultadosPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Resultados that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadosFindFirstOrThrowArgs} args - Arguments to find a Resultados
     * @example
     * // Get one Resultados
     * const resultados = await prisma.resultados.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ResultadosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ResultadosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ResultadosClient<$Result.GetResult<Prisma.$ResultadosPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Resultados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resultados
     * const resultados = await prisma.resultados.findMany()
     * 
     * // Get first 10 Resultados
     * const resultados = await prisma.resultados.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resultadosWithIdOnly = await prisma.resultados.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ResultadosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResultadosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultadosPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Resultados.
     * @param {ResultadosCreateArgs} args - Arguments to create a Resultados.
     * @example
     * // Create one Resultados
     * const Resultados = await prisma.resultados.create({
     *   data: {
     *     // ... data to create a Resultados
     *   }
     * })
     * 
    **/
    create<T extends ResultadosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ResultadosCreateArgs<ExtArgs>>
    ): Prisma__ResultadosClient<$Result.GetResult<Prisma.$ResultadosPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Resultados.
     *     @param {ResultadosCreateManyArgs} args - Arguments to create many Resultados.
     *     @example
     *     // Create many Resultados
     *     const resultados = await prisma.resultados.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ResultadosCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResultadosCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Resultados.
     * @param {ResultadosDeleteArgs} args - Arguments to delete one Resultados.
     * @example
     * // Delete one Resultados
     * const Resultados = await prisma.resultados.delete({
     *   where: {
     *     // ... filter to delete one Resultados
     *   }
     * })
     * 
    **/
    delete<T extends ResultadosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ResultadosDeleteArgs<ExtArgs>>
    ): Prisma__ResultadosClient<$Result.GetResult<Prisma.$ResultadosPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Resultados.
     * @param {ResultadosUpdateArgs} args - Arguments to update one Resultados.
     * @example
     * // Update one Resultados
     * const resultados = await prisma.resultados.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ResultadosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ResultadosUpdateArgs<ExtArgs>>
    ): Prisma__ResultadosClient<$Result.GetResult<Prisma.$ResultadosPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Resultados.
     * @param {ResultadosDeleteManyArgs} args - Arguments to filter Resultados to delete.
     * @example
     * // Delete a few Resultados
     * const { count } = await prisma.resultados.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ResultadosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResultadosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resultados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resultados
     * const resultados = await prisma.resultados.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ResultadosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ResultadosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Resultados.
     * @param {ResultadosUpsertArgs} args - Arguments to update or create a Resultados.
     * @example
     * // Update or create a Resultados
     * const resultados = await prisma.resultados.upsert({
     *   create: {
     *     // ... data to create a Resultados
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resultados we want to update
     *   }
     * })
    **/
    upsert<T extends ResultadosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ResultadosUpsertArgs<ExtArgs>>
    ): Prisma__ResultadosClient<$Result.GetResult<Prisma.$ResultadosPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Resultados that matches the filter.
     * @param {ResultadosFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const resultados = await prisma.resultados.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ResultadosFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Resultados.
     * @param {ResultadosAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const resultados = await prisma.resultados.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ResultadosAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Resultados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadosCountArgs} args - Arguments to filter Resultados to count.
     * @example
     * // Count the number of Resultados
     * const count = await prisma.resultados.count({
     *   where: {
     *     // ... the filter for the Resultados we want to count
     *   }
     * })
    **/
    count<T extends ResultadosCountArgs>(
      args?: Subset<T, ResultadosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResultadosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resultados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResultadosAggregateArgs>(args: Subset<T, ResultadosAggregateArgs>): Prisma.PrismaPromise<GetResultadosAggregateType<T>>

    /**
     * Group by Resultados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadosGroupByArgs} args - Group by arguments.
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
      T extends ResultadosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResultadosGroupByArgs['orderBy'] }
        : { orderBy?: ResultadosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResultadosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResultadosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resultados model
   */
  readonly fields: ResultadosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resultados.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResultadosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tabelaDeResultado<T extends TabelaDeResultadosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TabelaDeResultadosDefaultArgs<ExtArgs>>): Prisma__TabelaDeResultadosClient<$Result.GetResult<Prisma.$TabelaDeResultadosPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Resultados model
   */ 
  interface ResultadosFieldRefs {
    readonly id: FieldRef<"Resultados", 'String'>
    readonly avatar: FieldRef<"Resultados", 'String'>
    readonly idDoParticipante: FieldRef<"Resultados", 'String'>
    readonly usuario: FieldRef<"Resultados", 'String'>
    readonly colocacao: FieldRef<"Resultados", 'String'>
    readonly premioColocacao: FieldRef<"Resultados", 'Float'>
    readonly artilharia: FieldRef<"Resultados", 'String'>
    readonly premioArtilharia: FieldRef<"Resultados", 'Float'>
    readonly vitorias: FieldRef<"Resultados", 'Int'>
    readonly premioVitorias: FieldRef<"Resultados", 'Float'>
    readonly empates: FieldRef<"Resultados", 'Int'>
    readonly premioEmpates: FieldRef<"Resultados", 'Float'>
    readonly gols: FieldRef<"Resultados", 'Int'>
    readonly premioGols: FieldRef<"Resultados", 'Float'>
    readonly total: FieldRef<"Resultados", 'Float'>
    readonly posicaoDefezaMenosVazada: FieldRef<"Resultados", 'String'>
    readonly premioDefezaMenosVazada: FieldRef<"Resultados", 'Float'>
    readonly golsTomados: FieldRef<"Resultados", 'Int'>
    readonly jogos: FieldRef<"Resultados", 'Int'>
    readonly idTabelaResultados: FieldRef<"Resultados", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Resultados findUnique
   */
  export type ResultadosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultados
     */
    select?: ResultadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultadosInclude<ExtArgs> | null
    /**
     * Filter, which Resultados to fetch.
     */
    where: ResultadosWhereUniqueInput
  }


  /**
   * Resultados findUniqueOrThrow
   */
  export type ResultadosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultados
     */
    select?: ResultadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultadosInclude<ExtArgs> | null
    /**
     * Filter, which Resultados to fetch.
     */
    where: ResultadosWhereUniqueInput
  }


  /**
   * Resultados findFirst
   */
  export type ResultadosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultados
     */
    select?: ResultadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultadosInclude<ExtArgs> | null
    /**
     * Filter, which Resultados to fetch.
     */
    where?: ResultadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resultados to fetch.
     */
    orderBy?: ResultadosOrderByWithRelationInput | ResultadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resultados.
     */
    cursor?: ResultadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resultados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resultados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resultados.
     */
    distinct?: ResultadosScalarFieldEnum | ResultadosScalarFieldEnum[]
  }


  /**
   * Resultados findFirstOrThrow
   */
  export type ResultadosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultados
     */
    select?: ResultadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultadosInclude<ExtArgs> | null
    /**
     * Filter, which Resultados to fetch.
     */
    where?: ResultadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resultados to fetch.
     */
    orderBy?: ResultadosOrderByWithRelationInput | ResultadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resultados.
     */
    cursor?: ResultadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resultados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resultados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resultados.
     */
    distinct?: ResultadosScalarFieldEnum | ResultadosScalarFieldEnum[]
  }


  /**
   * Resultados findMany
   */
  export type ResultadosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultados
     */
    select?: ResultadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultadosInclude<ExtArgs> | null
    /**
     * Filter, which Resultados to fetch.
     */
    where?: ResultadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resultados to fetch.
     */
    orderBy?: ResultadosOrderByWithRelationInput | ResultadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resultados.
     */
    cursor?: ResultadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resultados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resultados.
     */
    skip?: number
    distinct?: ResultadosScalarFieldEnum | ResultadosScalarFieldEnum[]
  }


  /**
   * Resultados create
   */
  export type ResultadosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultados
     */
    select?: ResultadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultadosInclude<ExtArgs> | null
    /**
     * The data needed to create a Resultados.
     */
    data: XOR<ResultadosCreateInput, ResultadosUncheckedCreateInput>
  }


  /**
   * Resultados createMany
   */
  export type ResultadosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resultados.
     */
    data: ResultadosCreateManyInput | ResultadosCreateManyInput[]
  }


  /**
   * Resultados update
   */
  export type ResultadosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultados
     */
    select?: ResultadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultadosInclude<ExtArgs> | null
    /**
     * The data needed to update a Resultados.
     */
    data: XOR<ResultadosUpdateInput, ResultadosUncheckedUpdateInput>
    /**
     * Choose, which Resultados to update.
     */
    where: ResultadosWhereUniqueInput
  }


  /**
   * Resultados updateMany
   */
  export type ResultadosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resultados.
     */
    data: XOR<ResultadosUpdateManyMutationInput, ResultadosUncheckedUpdateManyInput>
    /**
     * Filter which Resultados to update
     */
    where?: ResultadosWhereInput
  }


  /**
   * Resultados upsert
   */
  export type ResultadosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultados
     */
    select?: ResultadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultadosInclude<ExtArgs> | null
    /**
     * The filter to search for the Resultados to update in case it exists.
     */
    where: ResultadosWhereUniqueInput
    /**
     * In case the Resultados found by the `where` argument doesn't exist, create a new Resultados with this data.
     */
    create: XOR<ResultadosCreateInput, ResultadosUncheckedCreateInput>
    /**
     * In case the Resultados was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResultadosUpdateInput, ResultadosUncheckedUpdateInput>
  }


  /**
   * Resultados delete
   */
  export type ResultadosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultados
     */
    select?: ResultadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultadosInclude<ExtArgs> | null
    /**
     * Filter which Resultados to delete.
     */
    where: ResultadosWhereUniqueInput
  }


  /**
   * Resultados deleteMany
   */
  export type ResultadosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resultados to delete
     */
    where?: ResultadosWhereInput
  }


  /**
   * Resultados findRaw
   */
  export type ResultadosFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Resultados aggregateRaw
   */
  export type ResultadosAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Resultados without action
   */
  export type ResultadosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultados
     */
    select?: ResultadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultadosInclude<ExtArgs> | null
  }



  /**
   * Model TabelaDeResultados
   */

  export type AggregateTabelaDeResultados = {
    _count: TabelaDeResultadosCountAggregateOutputType | null
    _min: TabelaDeResultadosMinAggregateOutputType | null
    _max: TabelaDeResultadosMaxAggregateOutputType | null
  }

  export type TabelaDeResultadosMinAggregateOutputType = {
    id: string | null
    idDoCampeonato: string | null
    idDoTorneio: string | null
    data: Date | null
    dataDeInicio: string | null
  }

  export type TabelaDeResultadosMaxAggregateOutputType = {
    id: string | null
    idDoCampeonato: string | null
    idDoTorneio: string | null
    data: Date | null
    dataDeInicio: string | null
  }

  export type TabelaDeResultadosCountAggregateOutputType = {
    id: number
    idDoCampeonato: number
    idDoTorneio: number
    data: number
    dataDeInicio: number
    _all: number
  }


  export type TabelaDeResultadosMinAggregateInputType = {
    id?: true
    idDoCampeonato?: true
    idDoTorneio?: true
    data?: true
    dataDeInicio?: true
  }

  export type TabelaDeResultadosMaxAggregateInputType = {
    id?: true
    idDoCampeonato?: true
    idDoTorneio?: true
    data?: true
    dataDeInicio?: true
  }

  export type TabelaDeResultadosCountAggregateInputType = {
    id?: true
    idDoCampeonato?: true
    idDoTorneio?: true
    data?: true
    dataDeInicio?: true
    _all?: true
  }

  export type TabelaDeResultadosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TabelaDeResultados to aggregate.
     */
    where?: TabelaDeResultadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TabelaDeResultados to fetch.
     */
    orderBy?: TabelaDeResultadosOrderByWithRelationInput | TabelaDeResultadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TabelaDeResultadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TabelaDeResultados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TabelaDeResultados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TabelaDeResultados
    **/
    _count?: true | TabelaDeResultadosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TabelaDeResultadosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TabelaDeResultadosMaxAggregateInputType
  }

  export type GetTabelaDeResultadosAggregateType<T extends TabelaDeResultadosAggregateArgs> = {
        [P in keyof T & keyof AggregateTabelaDeResultados]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTabelaDeResultados[P]>
      : GetScalarType<T[P], AggregateTabelaDeResultados[P]>
  }




  export type TabelaDeResultadosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TabelaDeResultadosWhereInput
    orderBy?: TabelaDeResultadosOrderByWithAggregationInput | TabelaDeResultadosOrderByWithAggregationInput[]
    by: TabelaDeResultadosScalarFieldEnum[] | TabelaDeResultadosScalarFieldEnum
    having?: TabelaDeResultadosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TabelaDeResultadosCountAggregateInputType | true
    _min?: TabelaDeResultadosMinAggregateInputType
    _max?: TabelaDeResultadosMaxAggregateInputType
  }

  export type TabelaDeResultadosGroupByOutputType = {
    id: string
    idDoCampeonato: string
    idDoTorneio: string
    data: Date
    dataDeInicio: string | null
    _count: TabelaDeResultadosCountAggregateOutputType | null
    _min: TabelaDeResultadosMinAggregateOutputType | null
    _max: TabelaDeResultadosMaxAggregateOutputType | null
  }

  type GetTabelaDeResultadosGroupByPayload<T extends TabelaDeResultadosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TabelaDeResultadosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TabelaDeResultadosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TabelaDeResultadosGroupByOutputType[P]>
            : GetScalarType<T[P], TabelaDeResultadosGroupByOutputType[P]>
        }
      >
    >


  export type TabelaDeResultadosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idDoCampeonato?: boolean
    idDoTorneio?: boolean
    data?: boolean
    dataDeInicio?: boolean
    resultados?: boolean | TabelaDeResultados$resultadosArgs<ExtArgs>
    _count?: boolean | TabelaDeResultadosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tabelaDeResultados"]>

  export type TabelaDeResultadosSelectScalar = {
    id?: boolean
    idDoCampeonato?: boolean
    idDoTorneio?: boolean
    data?: boolean
    dataDeInicio?: boolean
  }

  export type TabelaDeResultadosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resultados?: boolean | TabelaDeResultados$resultadosArgs<ExtArgs>
    _count?: boolean | TabelaDeResultadosCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TabelaDeResultadosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TabelaDeResultados"
    objects: {
      resultados: Prisma.$ResultadosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      idDoCampeonato: string
      idDoTorneio: string
      data: Date
      dataDeInicio: string | null
    }, ExtArgs["result"]["tabelaDeResultados"]>
    composites: {}
  }


  type TabelaDeResultadosGetPayload<S extends boolean | null | undefined | TabelaDeResultadosDefaultArgs> = $Result.GetResult<Prisma.$TabelaDeResultadosPayload, S>

  type TabelaDeResultadosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TabelaDeResultadosFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TabelaDeResultadosCountAggregateInputType | true
    }

  export interface TabelaDeResultadosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TabelaDeResultados'], meta: { name: 'TabelaDeResultados' } }
    /**
     * Find zero or one TabelaDeResultados that matches the filter.
     * @param {TabelaDeResultadosFindUniqueArgs} args - Arguments to find a TabelaDeResultados
     * @example
     * // Get one TabelaDeResultados
     * const tabelaDeResultados = await prisma.tabelaDeResultados.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TabelaDeResultadosFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TabelaDeResultadosFindUniqueArgs<ExtArgs>>
    ): Prisma__TabelaDeResultadosClient<$Result.GetResult<Prisma.$TabelaDeResultadosPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TabelaDeResultados that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TabelaDeResultadosFindUniqueOrThrowArgs} args - Arguments to find a TabelaDeResultados
     * @example
     * // Get one TabelaDeResultados
     * const tabelaDeResultados = await prisma.tabelaDeResultados.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TabelaDeResultadosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TabelaDeResultadosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TabelaDeResultadosClient<$Result.GetResult<Prisma.$TabelaDeResultadosPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TabelaDeResultados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TabelaDeResultadosFindFirstArgs} args - Arguments to find a TabelaDeResultados
     * @example
     * // Get one TabelaDeResultados
     * const tabelaDeResultados = await prisma.tabelaDeResultados.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TabelaDeResultadosFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TabelaDeResultadosFindFirstArgs<ExtArgs>>
    ): Prisma__TabelaDeResultadosClient<$Result.GetResult<Prisma.$TabelaDeResultadosPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TabelaDeResultados that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TabelaDeResultadosFindFirstOrThrowArgs} args - Arguments to find a TabelaDeResultados
     * @example
     * // Get one TabelaDeResultados
     * const tabelaDeResultados = await prisma.tabelaDeResultados.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TabelaDeResultadosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TabelaDeResultadosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TabelaDeResultadosClient<$Result.GetResult<Prisma.$TabelaDeResultadosPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TabelaDeResultados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TabelaDeResultadosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TabelaDeResultados
     * const tabelaDeResultados = await prisma.tabelaDeResultados.findMany()
     * 
     * // Get first 10 TabelaDeResultados
     * const tabelaDeResultados = await prisma.tabelaDeResultados.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tabelaDeResultadosWithIdOnly = await prisma.tabelaDeResultados.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TabelaDeResultadosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TabelaDeResultadosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TabelaDeResultadosPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TabelaDeResultados.
     * @param {TabelaDeResultadosCreateArgs} args - Arguments to create a TabelaDeResultados.
     * @example
     * // Create one TabelaDeResultados
     * const TabelaDeResultados = await prisma.tabelaDeResultados.create({
     *   data: {
     *     // ... data to create a TabelaDeResultados
     *   }
     * })
     * 
    **/
    create<T extends TabelaDeResultadosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TabelaDeResultadosCreateArgs<ExtArgs>>
    ): Prisma__TabelaDeResultadosClient<$Result.GetResult<Prisma.$TabelaDeResultadosPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TabelaDeResultados.
     *     @param {TabelaDeResultadosCreateManyArgs} args - Arguments to create many TabelaDeResultados.
     *     @example
     *     // Create many TabelaDeResultados
     *     const tabelaDeResultados = await prisma.tabelaDeResultados.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TabelaDeResultadosCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TabelaDeResultadosCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TabelaDeResultados.
     * @param {TabelaDeResultadosDeleteArgs} args - Arguments to delete one TabelaDeResultados.
     * @example
     * // Delete one TabelaDeResultados
     * const TabelaDeResultados = await prisma.tabelaDeResultados.delete({
     *   where: {
     *     // ... filter to delete one TabelaDeResultados
     *   }
     * })
     * 
    **/
    delete<T extends TabelaDeResultadosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TabelaDeResultadosDeleteArgs<ExtArgs>>
    ): Prisma__TabelaDeResultadosClient<$Result.GetResult<Prisma.$TabelaDeResultadosPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TabelaDeResultados.
     * @param {TabelaDeResultadosUpdateArgs} args - Arguments to update one TabelaDeResultados.
     * @example
     * // Update one TabelaDeResultados
     * const tabelaDeResultados = await prisma.tabelaDeResultados.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TabelaDeResultadosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TabelaDeResultadosUpdateArgs<ExtArgs>>
    ): Prisma__TabelaDeResultadosClient<$Result.GetResult<Prisma.$TabelaDeResultadosPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TabelaDeResultados.
     * @param {TabelaDeResultadosDeleteManyArgs} args - Arguments to filter TabelaDeResultados to delete.
     * @example
     * // Delete a few TabelaDeResultados
     * const { count } = await prisma.tabelaDeResultados.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TabelaDeResultadosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TabelaDeResultadosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TabelaDeResultados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TabelaDeResultadosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TabelaDeResultados
     * const tabelaDeResultados = await prisma.tabelaDeResultados.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TabelaDeResultadosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TabelaDeResultadosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TabelaDeResultados.
     * @param {TabelaDeResultadosUpsertArgs} args - Arguments to update or create a TabelaDeResultados.
     * @example
     * // Update or create a TabelaDeResultados
     * const tabelaDeResultados = await prisma.tabelaDeResultados.upsert({
     *   create: {
     *     // ... data to create a TabelaDeResultados
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TabelaDeResultados we want to update
     *   }
     * })
    **/
    upsert<T extends TabelaDeResultadosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TabelaDeResultadosUpsertArgs<ExtArgs>>
    ): Prisma__TabelaDeResultadosClient<$Result.GetResult<Prisma.$TabelaDeResultadosPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more TabelaDeResultados that matches the filter.
     * @param {TabelaDeResultadosFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const tabelaDeResultados = await prisma.tabelaDeResultados.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: TabelaDeResultadosFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TabelaDeResultados.
     * @param {TabelaDeResultadosAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const tabelaDeResultados = await prisma.tabelaDeResultados.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: TabelaDeResultadosAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of TabelaDeResultados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TabelaDeResultadosCountArgs} args - Arguments to filter TabelaDeResultados to count.
     * @example
     * // Count the number of TabelaDeResultados
     * const count = await prisma.tabelaDeResultados.count({
     *   where: {
     *     // ... the filter for the TabelaDeResultados we want to count
     *   }
     * })
    **/
    count<T extends TabelaDeResultadosCountArgs>(
      args?: Subset<T, TabelaDeResultadosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TabelaDeResultadosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TabelaDeResultados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TabelaDeResultadosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TabelaDeResultadosAggregateArgs>(args: Subset<T, TabelaDeResultadosAggregateArgs>): Prisma.PrismaPromise<GetTabelaDeResultadosAggregateType<T>>

    /**
     * Group by TabelaDeResultados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TabelaDeResultadosGroupByArgs} args - Group by arguments.
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
      T extends TabelaDeResultadosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TabelaDeResultadosGroupByArgs['orderBy'] }
        : { orderBy?: TabelaDeResultadosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TabelaDeResultadosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTabelaDeResultadosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TabelaDeResultados model
   */
  readonly fields: TabelaDeResultadosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TabelaDeResultados.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TabelaDeResultadosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    resultados<T extends TabelaDeResultados$resultadosArgs<ExtArgs> = {}>(args?: Subset<T, TabelaDeResultados$resultadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultadosPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TabelaDeResultados model
   */ 
  interface TabelaDeResultadosFieldRefs {
    readonly id: FieldRef<"TabelaDeResultados", 'String'>
    readonly idDoCampeonato: FieldRef<"TabelaDeResultados", 'String'>
    readonly idDoTorneio: FieldRef<"TabelaDeResultados", 'String'>
    readonly data: FieldRef<"TabelaDeResultados", 'DateTime'>
    readonly dataDeInicio: FieldRef<"TabelaDeResultados", 'String'>
  }
    

  // Custom InputTypes

  /**
   * TabelaDeResultados findUnique
   */
  export type TabelaDeResultadosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TabelaDeResultados
     */
    select?: TabelaDeResultadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TabelaDeResultadosInclude<ExtArgs> | null
    /**
     * Filter, which TabelaDeResultados to fetch.
     */
    where: TabelaDeResultadosWhereUniqueInput
  }


  /**
   * TabelaDeResultados findUniqueOrThrow
   */
  export type TabelaDeResultadosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TabelaDeResultados
     */
    select?: TabelaDeResultadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TabelaDeResultadosInclude<ExtArgs> | null
    /**
     * Filter, which TabelaDeResultados to fetch.
     */
    where: TabelaDeResultadosWhereUniqueInput
  }


  /**
   * TabelaDeResultados findFirst
   */
  export type TabelaDeResultadosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TabelaDeResultados
     */
    select?: TabelaDeResultadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TabelaDeResultadosInclude<ExtArgs> | null
    /**
     * Filter, which TabelaDeResultados to fetch.
     */
    where?: TabelaDeResultadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TabelaDeResultados to fetch.
     */
    orderBy?: TabelaDeResultadosOrderByWithRelationInput | TabelaDeResultadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TabelaDeResultados.
     */
    cursor?: TabelaDeResultadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TabelaDeResultados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TabelaDeResultados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TabelaDeResultados.
     */
    distinct?: TabelaDeResultadosScalarFieldEnum | TabelaDeResultadosScalarFieldEnum[]
  }


  /**
   * TabelaDeResultados findFirstOrThrow
   */
  export type TabelaDeResultadosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TabelaDeResultados
     */
    select?: TabelaDeResultadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TabelaDeResultadosInclude<ExtArgs> | null
    /**
     * Filter, which TabelaDeResultados to fetch.
     */
    where?: TabelaDeResultadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TabelaDeResultados to fetch.
     */
    orderBy?: TabelaDeResultadosOrderByWithRelationInput | TabelaDeResultadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TabelaDeResultados.
     */
    cursor?: TabelaDeResultadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TabelaDeResultados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TabelaDeResultados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TabelaDeResultados.
     */
    distinct?: TabelaDeResultadosScalarFieldEnum | TabelaDeResultadosScalarFieldEnum[]
  }


  /**
   * TabelaDeResultados findMany
   */
  export type TabelaDeResultadosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TabelaDeResultados
     */
    select?: TabelaDeResultadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TabelaDeResultadosInclude<ExtArgs> | null
    /**
     * Filter, which TabelaDeResultados to fetch.
     */
    where?: TabelaDeResultadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TabelaDeResultados to fetch.
     */
    orderBy?: TabelaDeResultadosOrderByWithRelationInput | TabelaDeResultadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TabelaDeResultados.
     */
    cursor?: TabelaDeResultadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TabelaDeResultados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TabelaDeResultados.
     */
    skip?: number
    distinct?: TabelaDeResultadosScalarFieldEnum | TabelaDeResultadosScalarFieldEnum[]
  }


  /**
   * TabelaDeResultados create
   */
  export type TabelaDeResultadosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TabelaDeResultados
     */
    select?: TabelaDeResultadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TabelaDeResultadosInclude<ExtArgs> | null
    /**
     * The data needed to create a TabelaDeResultados.
     */
    data: XOR<TabelaDeResultadosCreateInput, TabelaDeResultadosUncheckedCreateInput>
  }


  /**
   * TabelaDeResultados createMany
   */
  export type TabelaDeResultadosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TabelaDeResultados.
     */
    data: TabelaDeResultadosCreateManyInput | TabelaDeResultadosCreateManyInput[]
  }


  /**
   * TabelaDeResultados update
   */
  export type TabelaDeResultadosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TabelaDeResultados
     */
    select?: TabelaDeResultadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TabelaDeResultadosInclude<ExtArgs> | null
    /**
     * The data needed to update a TabelaDeResultados.
     */
    data: XOR<TabelaDeResultadosUpdateInput, TabelaDeResultadosUncheckedUpdateInput>
    /**
     * Choose, which TabelaDeResultados to update.
     */
    where: TabelaDeResultadosWhereUniqueInput
  }


  /**
   * TabelaDeResultados updateMany
   */
  export type TabelaDeResultadosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TabelaDeResultados.
     */
    data: XOR<TabelaDeResultadosUpdateManyMutationInput, TabelaDeResultadosUncheckedUpdateManyInput>
    /**
     * Filter which TabelaDeResultados to update
     */
    where?: TabelaDeResultadosWhereInput
  }


  /**
   * TabelaDeResultados upsert
   */
  export type TabelaDeResultadosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TabelaDeResultados
     */
    select?: TabelaDeResultadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TabelaDeResultadosInclude<ExtArgs> | null
    /**
     * The filter to search for the TabelaDeResultados to update in case it exists.
     */
    where: TabelaDeResultadosWhereUniqueInput
    /**
     * In case the TabelaDeResultados found by the `where` argument doesn't exist, create a new TabelaDeResultados with this data.
     */
    create: XOR<TabelaDeResultadosCreateInput, TabelaDeResultadosUncheckedCreateInput>
    /**
     * In case the TabelaDeResultados was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TabelaDeResultadosUpdateInput, TabelaDeResultadosUncheckedUpdateInput>
  }


  /**
   * TabelaDeResultados delete
   */
  export type TabelaDeResultadosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TabelaDeResultados
     */
    select?: TabelaDeResultadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TabelaDeResultadosInclude<ExtArgs> | null
    /**
     * Filter which TabelaDeResultados to delete.
     */
    where: TabelaDeResultadosWhereUniqueInput
  }


  /**
   * TabelaDeResultados deleteMany
   */
  export type TabelaDeResultadosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TabelaDeResultados to delete
     */
    where?: TabelaDeResultadosWhereInput
  }


  /**
   * TabelaDeResultados findRaw
   */
  export type TabelaDeResultadosFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * TabelaDeResultados aggregateRaw
   */
  export type TabelaDeResultadosAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * TabelaDeResultados.resultados
   */
  export type TabelaDeResultados$resultadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultados
     */
    select?: ResultadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultadosInclude<ExtArgs> | null
    where?: ResultadosWhereInput
    orderBy?: ResultadosOrderByWithRelationInput | ResultadosOrderByWithRelationInput[]
    cursor?: ResultadosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResultadosScalarFieldEnum | ResultadosScalarFieldEnum[]
  }


  /**
   * TabelaDeResultados without action
   */
  export type TabelaDeResultadosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TabelaDeResultados
     */
    select?: TabelaDeResultadosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TabelaDeResultadosInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const UsuarioScalarFieldEnum: {
    id: 'id',
    email: 'email',
    nome: 'nome',
    senha: 'senha'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const TorneioScalarFieldEnum: {
    id: 'id',
    idUsuario: 'idUsuario',
    nome: 'nome'
  };

  export type TorneioScalarFieldEnum = (typeof TorneioScalarFieldEnum)[keyof typeof TorneioScalarFieldEnum]


  export const ParticipantesScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    saldo: 'saldo',
    time: 'time',
    emblemaDoTime: 'emblemaDoTime',
    idTorneio: 'idTorneio'
  };

  export type ParticipantesScalarFieldEnum = (typeof ParticipantesScalarFieldEnum)[keyof typeof ParticipantesScalarFieldEnum]


  export const JogadoresScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    imagemDoJogador: 'imagemDoJogador',
    nacionalidade: 'nacionalidade',
    imagemDaNacionalidade: 'imagemDaNacionalidade',
    escudoDoTime: 'escudoDoTime',
    posicao: 'posicao',
    overall: 'overall',
    valorDoJogador: 'valorDoJogador',
    time: 'time',
    liga: 'liga',
    linkSoFifa: 'linkSoFifa',
    idParticipante: 'idParticipante'
  };

  export type JogadoresScalarFieldEnum = (typeof JogadoresScalarFieldEnum)[keyof typeof JogadoresScalarFieldEnum]


  export const EstatisticaScalarFieldEnum: {
    id: 'id',
    vencedor: 'vencedor',
    assistentes: 'assistentes',
    artilheiros: 'artilheiros',
    data: 'data',
    torneioId: 'torneioId'
  };

  export type EstatisticaScalarFieldEnum = (typeof EstatisticaScalarFieldEnum)[keyof typeof EstatisticaScalarFieldEnum]


  export const PosicaoNoCampinhoScalarFieldEnum: {
    id: 'id',
    idDoJogador: 'idDoJogador',
    x: 'x',
    y: 'y'
  };

  export type PosicaoNoCampinhoScalarFieldEnum = (typeof PosicaoNoCampinhoScalarFieldEnum)[keyof typeof PosicaoNoCampinhoScalarFieldEnum]


  export const CampeonatoScalarFieldEnum: {
    id: 'id',
    status: 'status',
    data: 'data',
    idTorneio: 'idTorneio'
  };

  export type CampeonatoScalarFieldEnum = (typeof CampeonatoScalarFieldEnum)[keyof typeof CampeonatoScalarFieldEnum]


  export const RodadaScalarFieldEnum: {
    id: 'id',
    idDoMandante: 'idDoMandante',
    idDoVisitante: 'idDoVisitante',
    idCampeonato: 'idCampeonato',
    golsMandante: 'golsMandante',
    golsVisitante: 'golsVisitante',
    rodadaDeNumero: 'rodadaDeNumero',
    statusDaRodada: 'statusDaRodada'
  };

  export type RodadaScalarFieldEnum = (typeof RodadaScalarFieldEnum)[keyof typeof RodadaScalarFieldEnum]


  export const TimesDaRodadaScalarFieldEnum: {
    id: 'id',
    idParticipante: 'idParticipante',
    nome: 'nome',
    saldo: 'saldo',
    time: 'time',
    emblemaDoTime: 'emblemaDoTime',
    idTorneio: 'idTorneio',
    idRodada: 'idRodada'
  };

  export type TimesDaRodadaScalarFieldEnum = (typeof TimesDaRodadaScalarFieldEnum)[keyof typeof TimesDaRodadaScalarFieldEnum]


  export const TabelaDoCampeonatoScalarFieldEnum: {
    id: 'id',
    idDoTorneio: 'idDoTorneio',
    idDoCampeonato: 'idDoCampeonato',
    idDoParticipante: 'idDoParticipante',
    avatar: 'avatar',
    equipe: 'equipe',
    pontos: 'pontos',
    jogos: 'jogos',
    vitorias: 'vitorias',
    empates: 'empates',
    derrota: 'derrota',
    golsPro: 'golsPro',
    golsContra: 'golsContra',
    saldoDeGol: 'saldoDeGol'
  };

  export type TabelaDoCampeonatoScalarFieldEnum = (typeof TabelaDoCampeonatoScalarFieldEnum)[keyof typeof TabelaDoCampeonatoScalarFieldEnum]


  export const ResultadosScalarFieldEnum: {
    id: 'id',
    avatar: 'avatar',
    idDoParticipante: 'idDoParticipante',
    usuario: 'usuario',
    colocacao: 'colocacao',
    premioColocacao: 'premioColocacao',
    artilharia: 'artilharia',
    premioArtilharia: 'premioArtilharia',
    vitorias: 'vitorias',
    premioVitorias: 'premioVitorias',
    empates: 'empates',
    premioEmpates: 'premioEmpates',
    gols: 'gols',
    premioGols: 'premioGols',
    total: 'total',
    posicaoDefezaMenosVazada: 'posicaoDefezaMenosVazada',
    premioDefezaMenosVazada: 'premioDefezaMenosVazada',
    golsTomados: 'golsTomados',
    jogos: 'jogos',
    idTabelaResultados: 'idTabelaResultados'
  };

  export type ResultadosScalarFieldEnum = (typeof ResultadosScalarFieldEnum)[keyof typeof ResultadosScalarFieldEnum]


  export const TabelaDeResultadosScalarFieldEnum: {
    id: 'id',
    idDoCampeonato: 'idDoCampeonato',
    idDoTorneio: 'idDoTorneio',
    data: 'data',
    dataDeInicio: 'dataDeInicio'
  };

  export type TabelaDeResultadosScalarFieldEnum = (typeof TabelaDeResultadosScalarFieldEnum)[keyof typeof TabelaDeResultadosScalarFieldEnum]


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


  /**
   * Field references 
   */


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    torneio?: TorneioListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    torneio?: TorneioOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    torneio?: TorneioListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type TorneioWhereInput = {
    AND?: TorneioWhereInput | TorneioWhereInput[]
    OR?: TorneioWhereInput[]
    NOT?: TorneioWhereInput | TorneioWhereInput[]
    id?: StringFilter<"Torneio"> | string
    idUsuario?: StringFilter<"Torneio"> | string
    nome?: StringFilter<"Torneio"> | string
    participantes?: ParticipantesListRelationFilter
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    estatistica?: EstatisticaListRelationFilter
    campeonato?: CampeonatoListRelationFilter
  }

  export type TorneioOrderByWithRelationInput = {
    id?: SortOrder
    idUsuario?: SortOrder
    nome?: SortOrder
    participantes?: ParticipantesOrderByRelationAggregateInput
    usuario?: UsuarioOrderByWithRelationInput
    estatistica?: EstatisticaOrderByRelationAggregateInput
    campeonato?: campeonatoOrderByRelationAggregateInput
  }

  export type TorneioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TorneioWhereInput | TorneioWhereInput[]
    OR?: TorneioWhereInput[]
    NOT?: TorneioWhereInput | TorneioWhereInput[]
    idUsuario?: StringFilter<"Torneio"> | string
    nome?: StringFilter<"Torneio"> | string
    participantes?: ParticipantesListRelationFilter
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    estatistica?: EstatisticaListRelationFilter
    campeonato?: CampeonatoListRelationFilter
  }, "id">

  export type TorneioOrderByWithAggregationInput = {
    id?: SortOrder
    idUsuario?: SortOrder
    nome?: SortOrder
    _count?: TorneioCountOrderByAggregateInput
    _max?: TorneioMaxOrderByAggregateInput
    _min?: TorneioMinOrderByAggregateInput
  }

  export type TorneioScalarWhereWithAggregatesInput = {
    AND?: TorneioScalarWhereWithAggregatesInput | TorneioScalarWhereWithAggregatesInput[]
    OR?: TorneioScalarWhereWithAggregatesInput[]
    NOT?: TorneioScalarWhereWithAggregatesInput | TorneioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Torneio"> | string
    idUsuario?: StringWithAggregatesFilter<"Torneio"> | string
    nome?: StringWithAggregatesFilter<"Torneio"> | string
  }

  export type ParticipantesWhereInput = {
    AND?: ParticipantesWhereInput | ParticipantesWhereInput[]
    OR?: ParticipantesWhereInput[]
    NOT?: ParticipantesWhereInput | ParticipantesWhereInput[]
    id?: StringFilter<"Participantes"> | string
    nome?: StringFilter<"Participantes"> | string
    saldo?: FloatNullableFilter<"Participantes"> | number | null
    time?: StringNullableFilter<"Participantes"> | string | null
    emblemaDoTime?: StringNullableFilter<"Participantes"> | string | null
    idTorneio?: StringFilter<"Participantes"> | string
    torneio?: XOR<TorneioRelationFilter, TorneioWhereInput>
    jogadores?: JogadoresListRelationFilter
  }

  export type ParticipantesOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    saldo?: SortOrder
    time?: SortOrder
    emblemaDoTime?: SortOrder
    idTorneio?: SortOrder
    torneio?: TorneioOrderByWithRelationInput
    jogadores?: JogadoresOrderByRelationAggregateInput
  }

  export type ParticipantesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ParticipantesWhereInput | ParticipantesWhereInput[]
    OR?: ParticipantesWhereInput[]
    NOT?: ParticipantesWhereInput | ParticipantesWhereInput[]
    nome?: StringFilter<"Participantes"> | string
    saldo?: FloatNullableFilter<"Participantes"> | number | null
    time?: StringNullableFilter<"Participantes"> | string | null
    emblemaDoTime?: StringNullableFilter<"Participantes"> | string | null
    idTorneio?: StringFilter<"Participantes"> | string
    torneio?: XOR<TorneioRelationFilter, TorneioWhereInput>
    jogadores?: JogadoresListRelationFilter
  }, "id">

  export type ParticipantesOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    saldo?: SortOrder
    time?: SortOrder
    emblemaDoTime?: SortOrder
    idTorneio?: SortOrder
    _count?: ParticipantesCountOrderByAggregateInput
    _avg?: ParticipantesAvgOrderByAggregateInput
    _max?: ParticipantesMaxOrderByAggregateInput
    _min?: ParticipantesMinOrderByAggregateInput
    _sum?: ParticipantesSumOrderByAggregateInput
  }

  export type ParticipantesScalarWhereWithAggregatesInput = {
    AND?: ParticipantesScalarWhereWithAggregatesInput | ParticipantesScalarWhereWithAggregatesInput[]
    OR?: ParticipantesScalarWhereWithAggregatesInput[]
    NOT?: ParticipantesScalarWhereWithAggregatesInput | ParticipantesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Participantes"> | string
    nome?: StringWithAggregatesFilter<"Participantes"> | string
    saldo?: FloatNullableWithAggregatesFilter<"Participantes"> | number | null
    time?: StringNullableWithAggregatesFilter<"Participantes"> | string | null
    emblemaDoTime?: StringNullableWithAggregatesFilter<"Participantes"> | string | null
    idTorneio?: StringWithAggregatesFilter<"Participantes"> | string
  }

  export type JogadoresWhereInput = {
    AND?: JogadoresWhereInput | JogadoresWhereInput[]
    OR?: JogadoresWhereInput[]
    NOT?: JogadoresWhereInput | JogadoresWhereInput[]
    id?: StringFilter<"Jogadores"> | string
    nome?: StringFilter<"Jogadores"> | string
    imagemDoJogador?: StringFilter<"Jogadores"> | string
    nacionalidade?: StringFilter<"Jogadores"> | string
    imagemDaNacionalidade?: StringFilter<"Jogadores"> | string
    escudoDoTime?: StringFilter<"Jogadores"> | string
    posicao?: StringFilter<"Jogadores"> | string
    overall?: StringFilter<"Jogadores"> | string
    valorDoJogador?: StringFilter<"Jogadores"> | string
    time?: StringFilter<"Jogadores"> | string
    liga?: StringFilter<"Jogadores"> | string
    linkSoFifa?: StringFilter<"Jogadores"> | string
    idParticipante?: StringFilter<"Jogadores"> | string
    posicaoNoCampinho?: PosicaoNoCampinhoListRelationFilter
    participantes?: XOR<ParticipantesRelationFilter, ParticipantesWhereInput>
  }

  export type JogadoresOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    imagemDoJogador?: SortOrder
    nacionalidade?: SortOrder
    imagemDaNacionalidade?: SortOrder
    escudoDoTime?: SortOrder
    posicao?: SortOrder
    overall?: SortOrder
    valorDoJogador?: SortOrder
    time?: SortOrder
    liga?: SortOrder
    linkSoFifa?: SortOrder
    idParticipante?: SortOrder
    posicaoNoCampinho?: PosicaoNoCampinhoOrderByRelationAggregateInput
    participantes?: ParticipantesOrderByWithRelationInput
  }

  export type JogadoresWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JogadoresWhereInput | JogadoresWhereInput[]
    OR?: JogadoresWhereInput[]
    NOT?: JogadoresWhereInput | JogadoresWhereInput[]
    nome?: StringFilter<"Jogadores"> | string
    imagemDoJogador?: StringFilter<"Jogadores"> | string
    nacionalidade?: StringFilter<"Jogadores"> | string
    imagemDaNacionalidade?: StringFilter<"Jogadores"> | string
    escudoDoTime?: StringFilter<"Jogadores"> | string
    posicao?: StringFilter<"Jogadores"> | string
    overall?: StringFilter<"Jogadores"> | string
    valorDoJogador?: StringFilter<"Jogadores"> | string
    time?: StringFilter<"Jogadores"> | string
    liga?: StringFilter<"Jogadores"> | string
    linkSoFifa?: StringFilter<"Jogadores"> | string
    idParticipante?: StringFilter<"Jogadores"> | string
    posicaoNoCampinho?: PosicaoNoCampinhoListRelationFilter
    participantes?: XOR<ParticipantesRelationFilter, ParticipantesWhereInput>
  }, "id">

  export type JogadoresOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    imagemDoJogador?: SortOrder
    nacionalidade?: SortOrder
    imagemDaNacionalidade?: SortOrder
    escudoDoTime?: SortOrder
    posicao?: SortOrder
    overall?: SortOrder
    valorDoJogador?: SortOrder
    time?: SortOrder
    liga?: SortOrder
    linkSoFifa?: SortOrder
    idParticipante?: SortOrder
    _count?: JogadoresCountOrderByAggregateInput
    _max?: JogadoresMaxOrderByAggregateInput
    _min?: JogadoresMinOrderByAggregateInput
  }

  export type JogadoresScalarWhereWithAggregatesInput = {
    AND?: JogadoresScalarWhereWithAggregatesInput | JogadoresScalarWhereWithAggregatesInput[]
    OR?: JogadoresScalarWhereWithAggregatesInput[]
    NOT?: JogadoresScalarWhereWithAggregatesInput | JogadoresScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Jogadores"> | string
    nome?: StringWithAggregatesFilter<"Jogadores"> | string
    imagemDoJogador?: StringWithAggregatesFilter<"Jogadores"> | string
    nacionalidade?: StringWithAggregatesFilter<"Jogadores"> | string
    imagemDaNacionalidade?: StringWithAggregatesFilter<"Jogadores"> | string
    escudoDoTime?: StringWithAggregatesFilter<"Jogadores"> | string
    posicao?: StringWithAggregatesFilter<"Jogadores"> | string
    overall?: StringWithAggregatesFilter<"Jogadores"> | string
    valorDoJogador?: StringWithAggregatesFilter<"Jogadores"> | string
    time?: StringWithAggregatesFilter<"Jogadores"> | string
    liga?: StringWithAggregatesFilter<"Jogadores"> | string
    linkSoFifa?: StringWithAggregatesFilter<"Jogadores"> | string
    idParticipante?: StringWithAggregatesFilter<"Jogadores"> | string
  }

  export type EstatisticaWhereInput = {
    AND?: EstatisticaWhereInput | EstatisticaWhereInput[]
    OR?: EstatisticaWhereInput[]
    NOT?: EstatisticaWhereInput | EstatisticaWhereInput[]
    id?: StringFilter<"Estatistica"> | string
    vencedor?: StringNullableFilter<"Estatistica"> | string | null
    assistentes?: StringNullableListFilter<"Estatistica">
    artilheiros?: StringNullableListFilter<"Estatistica">
    data?: DateTimeNullableFilter<"Estatistica"> | Date | string | null
    torneioId?: StringFilter<"Estatistica"> | string
    torneio?: XOR<TorneioRelationFilter, TorneioWhereInput>
  }

  export type EstatisticaOrderByWithRelationInput = {
    id?: SortOrder
    vencedor?: SortOrder
    assistentes?: SortOrder
    artilheiros?: SortOrder
    data?: SortOrder
    torneioId?: SortOrder
    torneio?: TorneioOrderByWithRelationInput
  }

  export type EstatisticaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EstatisticaWhereInput | EstatisticaWhereInput[]
    OR?: EstatisticaWhereInput[]
    NOT?: EstatisticaWhereInput | EstatisticaWhereInput[]
    vencedor?: StringNullableFilter<"Estatistica"> | string | null
    assistentes?: StringNullableListFilter<"Estatistica">
    artilheiros?: StringNullableListFilter<"Estatistica">
    data?: DateTimeNullableFilter<"Estatistica"> | Date | string | null
    torneioId?: StringFilter<"Estatistica"> | string
    torneio?: XOR<TorneioRelationFilter, TorneioWhereInput>
  }, "id">

  export type EstatisticaOrderByWithAggregationInput = {
    id?: SortOrder
    vencedor?: SortOrder
    assistentes?: SortOrder
    artilheiros?: SortOrder
    data?: SortOrder
    torneioId?: SortOrder
    _count?: EstatisticaCountOrderByAggregateInput
    _max?: EstatisticaMaxOrderByAggregateInput
    _min?: EstatisticaMinOrderByAggregateInput
  }

  export type EstatisticaScalarWhereWithAggregatesInput = {
    AND?: EstatisticaScalarWhereWithAggregatesInput | EstatisticaScalarWhereWithAggregatesInput[]
    OR?: EstatisticaScalarWhereWithAggregatesInput[]
    NOT?: EstatisticaScalarWhereWithAggregatesInput | EstatisticaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Estatistica"> | string
    vencedor?: StringNullableWithAggregatesFilter<"Estatistica"> | string | null
    assistentes?: StringNullableListFilter<"Estatistica">
    artilheiros?: StringNullableListFilter<"Estatistica">
    data?: DateTimeNullableWithAggregatesFilter<"Estatistica"> | Date | string | null
    torneioId?: StringWithAggregatesFilter<"Estatistica"> | string
  }

  export type PosicaoNoCampinhoWhereInput = {
    AND?: PosicaoNoCampinhoWhereInput | PosicaoNoCampinhoWhereInput[]
    OR?: PosicaoNoCampinhoWhereInput[]
    NOT?: PosicaoNoCampinhoWhereInput | PosicaoNoCampinhoWhereInput[]
    id?: StringFilter<"PosicaoNoCampinho"> | string
    idDoJogador?: StringFilter<"PosicaoNoCampinho"> | string
    x?: FloatFilter<"PosicaoNoCampinho"> | number
    y?: FloatFilter<"PosicaoNoCampinho"> | number
    jogador?: XOR<JogadoresRelationFilter, JogadoresWhereInput>
  }

  export type PosicaoNoCampinhoOrderByWithRelationInput = {
    id?: SortOrder
    idDoJogador?: SortOrder
    x?: SortOrder
    y?: SortOrder
    jogador?: JogadoresOrderByWithRelationInput
  }

  export type PosicaoNoCampinhoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PosicaoNoCampinhoWhereInput | PosicaoNoCampinhoWhereInput[]
    OR?: PosicaoNoCampinhoWhereInput[]
    NOT?: PosicaoNoCampinhoWhereInput | PosicaoNoCampinhoWhereInput[]
    idDoJogador?: StringFilter<"PosicaoNoCampinho"> | string
    x?: FloatFilter<"PosicaoNoCampinho"> | number
    y?: FloatFilter<"PosicaoNoCampinho"> | number
    jogador?: XOR<JogadoresRelationFilter, JogadoresWhereInput>
  }, "id">

  export type PosicaoNoCampinhoOrderByWithAggregationInput = {
    id?: SortOrder
    idDoJogador?: SortOrder
    x?: SortOrder
    y?: SortOrder
    _count?: PosicaoNoCampinhoCountOrderByAggregateInput
    _avg?: PosicaoNoCampinhoAvgOrderByAggregateInput
    _max?: PosicaoNoCampinhoMaxOrderByAggregateInput
    _min?: PosicaoNoCampinhoMinOrderByAggregateInput
    _sum?: PosicaoNoCampinhoSumOrderByAggregateInput
  }

  export type PosicaoNoCampinhoScalarWhereWithAggregatesInput = {
    AND?: PosicaoNoCampinhoScalarWhereWithAggregatesInput | PosicaoNoCampinhoScalarWhereWithAggregatesInput[]
    OR?: PosicaoNoCampinhoScalarWhereWithAggregatesInput[]
    NOT?: PosicaoNoCampinhoScalarWhereWithAggregatesInput | PosicaoNoCampinhoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PosicaoNoCampinho"> | string
    idDoJogador?: StringWithAggregatesFilter<"PosicaoNoCampinho"> | string
    x?: FloatWithAggregatesFilter<"PosicaoNoCampinho"> | number
    y?: FloatWithAggregatesFilter<"PosicaoNoCampinho"> | number
  }

  export type campeonatoWhereInput = {
    AND?: campeonatoWhereInput | campeonatoWhereInput[]
    OR?: campeonatoWhereInput[]
    NOT?: campeonatoWhereInput | campeonatoWhereInput[]
    id?: StringFilter<"campeonato"> | string
    status?: StringFilter<"campeonato"> | string
    data?: DateTimeFilter<"campeonato"> | Date | string
    idTorneio?: StringFilter<"campeonato"> | string
    rodada?: RodadaListRelationFilter
    torneio?: XOR<TorneioRelationFilter, TorneioWhereInput>
  }

  export type campeonatoOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    data?: SortOrder
    idTorneio?: SortOrder
    rodada?: RodadaOrderByRelationAggregateInput
    torneio?: TorneioOrderByWithRelationInput
  }

  export type campeonatoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: campeonatoWhereInput | campeonatoWhereInput[]
    OR?: campeonatoWhereInput[]
    NOT?: campeonatoWhereInput | campeonatoWhereInput[]
    status?: StringFilter<"campeonato"> | string
    data?: DateTimeFilter<"campeonato"> | Date | string
    idTorneio?: StringFilter<"campeonato"> | string
    rodada?: RodadaListRelationFilter
    torneio?: XOR<TorneioRelationFilter, TorneioWhereInput>
  }, "id">

  export type campeonatoOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    data?: SortOrder
    idTorneio?: SortOrder
    _count?: campeonatoCountOrderByAggregateInput
    _max?: campeonatoMaxOrderByAggregateInput
    _min?: campeonatoMinOrderByAggregateInput
  }

  export type campeonatoScalarWhereWithAggregatesInput = {
    AND?: campeonatoScalarWhereWithAggregatesInput | campeonatoScalarWhereWithAggregatesInput[]
    OR?: campeonatoScalarWhereWithAggregatesInput[]
    NOT?: campeonatoScalarWhereWithAggregatesInput | campeonatoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"campeonato"> | string
    status?: StringWithAggregatesFilter<"campeonato"> | string
    data?: DateTimeWithAggregatesFilter<"campeonato"> | Date | string
    idTorneio?: StringWithAggregatesFilter<"campeonato"> | string
  }

  export type RodadaWhereInput = {
    AND?: RodadaWhereInput | RodadaWhereInput[]
    OR?: RodadaWhereInput[]
    NOT?: RodadaWhereInput | RodadaWhereInput[]
    id?: StringFilter<"Rodada"> | string
    idDoMandante?: StringNullableListFilter<"Rodada">
    idDoVisitante?: StringNullableListFilter<"Rodada">
    idCampeonato?: StringFilter<"Rodada"> | string
    golsMandante?: IntFilter<"Rodada"> | number
    golsVisitante?: IntFilter<"Rodada"> | number
    rodadaDeNumero?: IntFilter<"Rodada"> | number
    statusDaRodada?: StringFilter<"Rodada"> | string
    mandante?: TimesDaRodadaListRelationFilter
    visitante?: TimesDaRodadaListRelationFilter
    campeonato?: XOR<CampeonatoNullableRelationFilter, campeonatoWhereInput> | null
  }

  export type RodadaOrderByWithRelationInput = {
    id?: SortOrder
    idDoMandante?: SortOrder
    idDoVisitante?: SortOrder
    idCampeonato?: SortOrder
    golsMandante?: SortOrder
    golsVisitante?: SortOrder
    rodadaDeNumero?: SortOrder
    statusDaRodada?: SortOrder
    mandante?: TimesDaRodadaOrderByRelationAggregateInput
    visitante?: TimesDaRodadaOrderByRelationAggregateInput
    campeonato?: campeonatoOrderByWithRelationInput
  }

  export type RodadaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RodadaWhereInput | RodadaWhereInput[]
    OR?: RodadaWhereInput[]
    NOT?: RodadaWhereInput | RodadaWhereInput[]
    idDoMandante?: StringNullableListFilter<"Rodada">
    idDoVisitante?: StringNullableListFilter<"Rodada">
    idCampeonato?: StringFilter<"Rodada"> | string
    golsMandante?: IntFilter<"Rodada"> | number
    golsVisitante?: IntFilter<"Rodada"> | number
    rodadaDeNumero?: IntFilter<"Rodada"> | number
    statusDaRodada?: StringFilter<"Rodada"> | string
    mandante?: TimesDaRodadaListRelationFilter
    visitante?: TimesDaRodadaListRelationFilter
    campeonato?: XOR<CampeonatoNullableRelationFilter, campeonatoWhereInput> | null
  }, "id">

  export type RodadaOrderByWithAggregationInput = {
    id?: SortOrder
    idDoMandante?: SortOrder
    idDoVisitante?: SortOrder
    idCampeonato?: SortOrder
    golsMandante?: SortOrder
    golsVisitante?: SortOrder
    rodadaDeNumero?: SortOrder
    statusDaRodada?: SortOrder
    _count?: RodadaCountOrderByAggregateInput
    _avg?: RodadaAvgOrderByAggregateInput
    _max?: RodadaMaxOrderByAggregateInput
    _min?: RodadaMinOrderByAggregateInput
    _sum?: RodadaSumOrderByAggregateInput
  }

  export type RodadaScalarWhereWithAggregatesInput = {
    AND?: RodadaScalarWhereWithAggregatesInput | RodadaScalarWhereWithAggregatesInput[]
    OR?: RodadaScalarWhereWithAggregatesInput[]
    NOT?: RodadaScalarWhereWithAggregatesInput | RodadaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rodada"> | string
    idDoMandante?: StringNullableListFilter<"Rodada">
    idDoVisitante?: StringNullableListFilter<"Rodada">
    idCampeonato?: StringWithAggregatesFilter<"Rodada"> | string
    golsMandante?: IntWithAggregatesFilter<"Rodada"> | number
    golsVisitante?: IntWithAggregatesFilter<"Rodada"> | number
    rodadaDeNumero?: IntWithAggregatesFilter<"Rodada"> | number
    statusDaRodada?: StringWithAggregatesFilter<"Rodada"> | string
  }

  export type TimesDaRodadaWhereInput = {
    AND?: TimesDaRodadaWhereInput | TimesDaRodadaWhereInput[]
    OR?: TimesDaRodadaWhereInput[]
    NOT?: TimesDaRodadaWhereInput | TimesDaRodadaWhereInput[]
    id?: StringFilter<"TimesDaRodada"> | string
    idParticipante?: StringFilter<"TimesDaRodada"> | string
    nome?: StringFilter<"TimesDaRodada"> | string
    saldo?: FloatNullableFilter<"TimesDaRodada"> | number | null
    time?: StringNullableFilter<"TimesDaRodada"> | string | null
    emblemaDoTime?: StringNullableFilter<"TimesDaRodada"> | string | null
    idTorneio?: StringFilter<"TimesDaRodada"> | string
    idRodada?: StringNullableListFilter<"TimesDaRodada">
    mandante?: RodadaListRelationFilter
    visitante?: RodadaListRelationFilter
  }

  export type TimesDaRodadaOrderByWithRelationInput = {
    id?: SortOrder
    idParticipante?: SortOrder
    nome?: SortOrder
    saldo?: SortOrder
    time?: SortOrder
    emblemaDoTime?: SortOrder
    idTorneio?: SortOrder
    idRodada?: SortOrder
    mandante?: RodadaOrderByRelationAggregateInput
    visitante?: RodadaOrderByRelationAggregateInput
  }

  export type TimesDaRodadaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TimesDaRodadaWhereInput | TimesDaRodadaWhereInput[]
    OR?: TimesDaRodadaWhereInput[]
    NOT?: TimesDaRodadaWhereInput | TimesDaRodadaWhereInput[]
    idParticipante?: StringFilter<"TimesDaRodada"> | string
    nome?: StringFilter<"TimesDaRodada"> | string
    saldo?: FloatNullableFilter<"TimesDaRodada"> | number | null
    time?: StringNullableFilter<"TimesDaRodada"> | string | null
    emblemaDoTime?: StringNullableFilter<"TimesDaRodada"> | string | null
    idTorneio?: StringFilter<"TimesDaRodada"> | string
    idRodada?: StringNullableListFilter<"TimesDaRodada">
    mandante?: RodadaListRelationFilter
    visitante?: RodadaListRelationFilter
  }, "id">

  export type TimesDaRodadaOrderByWithAggregationInput = {
    id?: SortOrder
    idParticipante?: SortOrder
    nome?: SortOrder
    saldo?: SortOrder
    time?: SortOrder
    emblemaDoTime?: SortOrder
    idTorneio?: SortOrder
    idRodada?: SortOrder
    _count?: TimesDaRodadaCountOrderByAggregateInput
    _avg?: TimesDaRodadaAvgOrderByAggregateInput
    _max?: TimesDaRodadaMaxOrderByAggregateInput
    _min?: TimesDaRodadaMinOrderByAggregateInput
    _sum?: TimesDaRodadaSumOrderByAggregateInput
  }

  export type TimesDaRodadaScalarWhereWithAggregatesInput = {
    AND?: TimesDaRodadaScalarWhereWithAggregatesInput | TimesDaRodadaScalarWhereWithAggregatesInput[]
    OR?: TimesDaRodadaScalarWhereWithAggregatesInput[]
    NOT?: TimesDaRodadaScalarWhereWithAggregatesInput | TimesDaRodadaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TimesDaRodada"> | string
    idParticipante?: StringWithAggregatesFilter<"TimesDaRodada"> | string
    nome?: StringWithAggregatesFilter<"TimesDaRodada"> | string
    saldo?: FloatNullableWithAggregatesFilter<"TimesDaRodada"> | number | null
    time?: StringNullableWithAggregatesFilter<"TimesDaRodada"> | string | null
    emblemaDoTime?: StringNullableWithAggregatesFilter<"TimesDaRodada"> | string | null
    idTorneio?: StringWithAggregatesFilter<"TimesDaRodada"> | string
    idRodada?: StringNullableListFilter<"TimesDaRodada">
  }

  export type tabelaDoCampeonatoWhereInput = {
    AND?: tabelaDoCampeonatoWhereInput | tabelaDoCampeonatoWhereInput[]
    OR?: tabelaDoCampeonatoWhereInput[]
    NOT?: tabelaDoCampeonatoWhereInput | tabelaDoCampeonatoWhereInput[]
    id?: StringFilter<"tabelaDoCampeonato"> | string
    idDoTorneio?: StringFilter<"tabelaDoCampeonato"> | string
    idDoCampeonato?: StringFilter<"tabelaDoCampeonato"> | string
    idDoParticipante?: StringFilter<"tabelaDoCampeonato"> | string
    avatar?: StringFilter<"tabelaDoCampeonato"> | string
    equipe?: StringFilter<"tabelaDoCampeonato"> | string
    pontos?: IntFilter<"tabelaDoCampeonato"> | number
    jogos?: IntFilter<"tabelaDoCampeonato"> | number
    vitorias?: IntFilter<"tabelaDoCampeonato"> | number
    empates?: IntFilter<"tabelaDoCampeonato"> | number
    derrota?: IntFilter<"tabelaDoCampeonato"> | number
    golsPro?: IntFilter<"tabelaDoCampeonato"> | number
    golsContra?: IntFilter<"tabelaDoCampeonato"> | number
    saldoDeGol?: IntFilter<"tabelaDoCampeonato"> | number
  }

  export type tabelaDoCampeonatoOrderByWithRelationInput = {
    id?: SortOrder
    idDoTorneio?: SortOrder
    idDoCampeonato?: SortOrder
    idDoParticipante?: SortOrder
    avatar?: SortOrder
    equipe?: SortOrder
    pontos?: SortOrder
    jogos?: SortOrder
    vitorias?: SortOrder
    empates?: SortOrder
    derrota?: SortOrder
    golsPro?: SortOrder
    golsContra?: SortOrder
    saldoDeGol?: SortOrder
  }

  export type tabelaDoCampeonatoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: tabelaDoCampeonatoWhereInput | tabelaDoCampeonatoWhereInput[]
    OR?: tabelaDoCampeonatoWhereInput[]
    NOT?: tabelaDoCampeonatoWhereInput | tabelaDoCampeonatoWhereInput[]
    idDoTorneio?: StringFilter<"tabelaDoCampeonato"> | string
    idDoCampeonato?: StringFilter<"tabelaDoCampeonato"> | string
    idDoParticipante?: StringFilter<"tabelaDoCampeonato"> | string
    avatar?: StringFilter<"tabelaDoCampeonato"> | string
    equipe?: StringFilter<"tabelaDoCampeonato"> | string
    pontos?: IntFilter<"tabelaDoCampeonato"> | number
    jogos?: IntFilter<"tabelaDoCampeonato"> | number
    vitorias?: IntFilter<"tabelaDoCampeonato"> | number
    empates?: IntFilter<"tabelaDoCampeonato"> | number
    derrota?: IntFilter<"tabelaDoCampeonato"> | number
    golsPro?: IntFilter<"tabelaDoCampeonato"> | number
    golsContra?: IntFilter<"tabelaDoCampeonato"> | number
    saldoDeGol?: IntFilter<"tabelaDoCampeonato"> | number
  }, "id">

  export type tabelaDoCampeonatoOrderByWithAggregationInput = {
    id?: SortOrder
    idDoTorneio?: SortOrder
    idDoCampeonato?: SortOrder
    idDoParticipante?: SortOrder
    avatar?: SortOrder
    equipe?: SortOrder
    pontos?: SortOrder
    jogos?: SortOrder
    vitorias?: SortOrder
    empates?: SortOrder
    derrota?: SortOrder
    golsPro?: SortOrder
    golsContra?: SortOrder
    saldoDeGol?: SortOrder
    _count?: tabelaDoCampeonatoCountOrderByAggregateInput
    _avg?: tabelaDoCampeonatoAvgOrderByAggregateInput
    _max?: tabelaDoCampeonatoMaxOrderByAggregateInput
    _min?: tabelaDoCampeonatoMinOrderByAggregateInput
    _sum?: tabelaDoCampeonatoSumOrderByAggregateInput
  }

  export type tabelaDoCampeonatoScalarWhereWithAggregatesInput = {
    AND?: tabelaDoCampeonatoScalarWhereWithAggregatesInput | tabelaDoCampeonatoScalarWhereWithAggregatesInput[]
    OR?: tabelaDoCampeonatoScalarWhereWithAggregatesInput[]
    NOT?: tabelaDoCampeonatoScalarWhereWithAggregatesInput | tabelaDoCampeonatoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"tabelaDoCampeonato"> | string
    idDoTorneio?: StringWithAggregatesFilter<"tabelaDoCampeonato"> | string
    idDoCampeonato?: StringWithAggregatesFilter<"tabelaDoCampeonato"> | string
    idDoParticipante?: StringWithAggregatesFilter<"tabelaDoCampeonato"> | string
    avatar?: StringWithAggregatesFilter<"tabelaDoCampeonato"> | string
    equipe?: StringWithAggregatesFilter<"tabelaDoCampeonato"> | string
    pontos?: IntWithAggregatesFilter<"tabelaDoCampeonato"> | number
    jogos?: IntWithAggregatesFilter<"tabelaDoCampeonato"> | number
    vitorias?: IntWithAggregatesFilter<"tabelaDoCampeonato"> | number
    empates?: IntWithAggregatesFilter<"tabelaDoCampeonato"> | number
    derrota?: IntWithAggregatesFilter<"tabelaDoCampeonato"> | number
    golsPro?: IntWithAggregatesFilter<"tabelaDoCampeonato"> | number
    golsContra?: IntWithAggregatesFilter<"tabelaDoCampeonato"> | number
    saldoDeGol?: IntWithAggregatesFilter<"tabelaDoCampeonato"> | number
  }

  export type ResultadosWhereInput = {
    AND?: ResultadosWhereInput | ResultadosWhereInput[]
    OR?: ResultadosWhereInput[]
    NOT?: ResultadosWhereInput | ResultadosWhereInput[]
    id?: StringFilter<"Resultados"> | string
    avatar?: StringFilter<"Resultados"> | string
    idDoParticipante?: StringFilter<"Resultados"> | string
    usuario?: StringFilter<"Resultados"> | string
    colocacao?: StringFilter<"Resultados"> | string
    premioColocacao?: FloatFilter<"Resultados"> | number
    artilharia?: StringFilter<"Resultados"> | string
    premioArtilharia?: FloatFilter<"Resultados"> | number
    vitorias?: IntFilter<"Resultados"> | number
    premioVitorias?: FloatFilter<"Resultados"> | number
    empates?: IntFilter<"Resultados"> | number
    premioEmpates?: FloatFilter<"Resultados"> | number
    gols?: IntFilter<"Resultados"> | number
    premioGols?: FloatFilter<"Resultados"> | number
    total?: FloatFilter<"Resultados"> | number
    posicaoDefezaMenosVazada?: StringNullableFilter<"Resultados"> | string | null
    premioDefezaMenosVazada?: FloatNullableFilter<"Resultados"> | number | null
    golsTomados?: IntNullableFilter<"Resultados"> | number | null
    jogos?: IntNullableFilter<"Resultados"> | number | null
    idTabelaResultados?: StringFilter<"Resultados"> | string
    tabelaDeResultado?: XOR<TabelaDeResultadosRelationFilter, TabelaDeResultadosWhereInput>
  }

  export type ResultadosOrderByWithRelationInput = {
    id?: SortOrder
    avatar?: SortOrder
    idDoParticipante?: SortOrder
    usuario?: SortOrder
    colocacao?: SortOrder
    premioColocacao?: SortOrder
    artilharia?: SortOrder
    premioArtilharia?: SortOrder
    vitorias?: SortOrder
    premioVitorias?: SortOrder
    empates?: SortOrder
    premioEmpates?: SortOrder
    gols?: SortOrder
    premioGols?: SortOrder
    total?: SortOrder
    posicaoDefezaMenosVazada?: SortOrder
    premioDefezaMenosVazada?: SortOrder
    golsTomados?: SortOrder
    jogos?: SortOrder
    idTabelaResultados?: SortOrder
    tabelaDeResultado?: TabelaDeResultadosOrderByWithRelationInput
  }

  export type ResultadosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResultadosWhereInput | ResultadosWhereInput[]
    OR?: ResultadosWhereInput[]
    NOT?: ResultadosWhereInput | ResultadosWhereInput[]
    avatar?: StringFilter<"Resultados"> | string
    idDoParticipante?: StringFilter<"Resultados"> | string
    usuario?: StringFilter<"Resultados"> | string
    colocacao?: StringFilter<"Resultados"> | string
    premioColocacao?: FloatFilter<"Resultados"> | number
    artilharia?: StringFilter<"Resultados"> | string
    premioArtilharia?: FloatFilter<"Resultados"> | number
    vitorias?: IntFilter<"Resultados"> | number
    premioVitorias?: FloatFilter<"Resultados"> | number
    empates?: IntFilter<"Resultados"> | number
    premioEmpates?: FloatFilter<"Resultados"> | number
    gols?: IntFilter<"Resultados"> | number
    premioGols?: FloatFilter<"Resultados"> | number
    total?: FloatFilter<"Resultados"> | number
    posicaoDefezaMenosVazada?: StringNullableFilter<"Resultados"> | string | null
    premioDefezaMenosVazada?: FloatNullableFilter<"Resultados"> | number | null
    golsTomados?: IntNullableFilter<"Resultados"> | number | null
    jogos?: IntNullableFilter<"Resultados"> | number | null
    idTabelaResultados?: StringFilter<"Resultados"> | string
    tabelaDeResultado?: XOR<TabelaDeResultadosRelationFilter, TabelaDeResultadosWhereInput>
  }, "id">

  export type ResultadosOrderByWithAggregationInput = {
    id?: SortOrder
    avatar?: SortOrder
    idDoParticipante?: SortOrder
    usuario?: SortOrder
    colocacao?: SortOrder
    premioColocacao?: SortOrder
    artilharia?: SortOrder
    premioArtilharia?: SortOrder
    vitorias?: SortOrder
    premioVitorias?: SortOrder
    empates?: SortOrder
    premioEmpates?: SortOrder
    gols?: SortOrder
    premioGols?: SortOrder
    total?: SortOrder
    posicaoDefezaMenosVazada?: SortOrder
    premioDefezaMenosVazada?: SortOrder
    golsTomados?: SortOrder
    jogos?: SortOrder
    idTabelaResultados?: SortOrder
    _count?: ResultadosCountOrderByAggregateInput
    _avg?: ResultadosAvgOrderByAggregateInput
    _max?: ResultadosMaxOrderByAggregateInput
    _min?: ResultadosMinOrderByAggregateInput
    _sum?: ResultadosSumOrderByAggregateInput
  }

  export type ResultadosScalarWhereWithAggregatesInput = {
    AND?: ResultadosScalarWhereWithAggregatesInput | ResultadosScalarWhereWithAggregatesInput[]
    OR?: ResultadosScalarWhereWithAggregatesInput[]
    NOT?: ResultadosScalarWhereWithAggregatesInput | ResultadosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Resultados"> | string
    avatar?: StringWithAggregatesFilter<"Resultados"> | string
    idDoParticipante?: StringWithAggregatesFilter<"Resultados"> | string
    usuario?: StringWithAggregatesFilter<"Resultados"> | string
    colocacao?: StringWithAggregatesFilter<"Resultados"> | string
    premioColocacao?: FloatWithAggregatesFilter<"Resultados"> | number
    artilharia?: StringWithAggregatesFilter<"Resultados"> | string
    premioArtilharia?: FloatWithAggregatesFilter<"Resultados"> | number
    vitorias?: IntWithAggregatesFilter<"Resultados"> | number
    premioVitorias?: FloatWithAggregatesFilter<"Resultados"> | number
    empates?: IntWithAggregatesFilter<"Resultados"> | number
    premioEmpates?: FloatWithAggregatesFilter<"Resultados"> | number
    gols?: IntWithAggregatesFilter<"Resultados"> | number
    premioGols?: FloatWithAggregatesFilter<"Resultados"> | number
    total?: FloatWithAggregatesFilter<"Resultados"> | number
    posicaoDefezaMenosVazada?: StringNullableWithAggregatesFilter<"Resultados"> | string | null
    premioDefezaMenosVazada?: FloatNullableWithAggregatesFilter<"Resultados"> | number | null
    golsTomados?: IntNullableWithAggregatesFilter<"Resultados"> | number | null
    jogos?: IntNullableWithAggregatesFilter<"Resultados"> | number | null
    idTabelaResultados?: StringWithAggregatesFilter<"Resultados"> | string
  }

  export type TabelaDeResultadosWhereInput = {
    AND?: TabelaDeResultadosWhereInput | TabelaDeResultadosWhereInput[]
    OR?: TabelaDeResultadosWhereInput[]
    NOT?: TabelaDeResultadosWhereInput | TabelaDeResultadosWhereInput[]
    id?: StringFilter<"TabelaDeResultados"> | string
    idDoCampeonato?: StringFilter<"TabelaDeResultados"> | string
    idDoTorneio?: StringFilter<"TabelaDeResultados"> | string
    data?: DateTimeFilter<"TabelaDeResultados"> | Date | string
    dataDeInicio?: StringNullableFilter<"TabelaDeResultados"> | string | null
    resultados?: ResultadosListRelationFilter
  }

  export type TabelaDeResultadosOrderByWithRelationInput = {
    id?: SortOrder
    idDoCampeonato?: SortOrder
    idDoTorneio?: SortOrder
    data?: SortOrder
    dataDeInicio?: SortOrder
    resultados?: ResultadosOrderByRelationAggregateInput
  }

  export type TabelaDeResultadosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TabelaDeResultadosWhereInput | TabelaDeResultadosWhereInput[]
    OR?: TabelaDeResultadosWhereInput[]
    NOT?: TabelaDeResultadosWhereInput | TabelaDeResultadosWhereInput[]
    idDoCampeonato?: StringFilter<"TabelaDeResultados"> | string
    idDoTorneio?: StringFilter<"TabelaDeResultados"> | string
    data?: DateTimeFilter<"TabelaDeResultados"> | Date | string
    dataDeInicio?: StringNullableFilter<"TabelaDeResultados"> | string | null
    resultados?: ResultadosListRelationFilter
  }, "id">

  export type TabelaDeResultadosOrderByWithAggregationInput = {
    id?: SortOrder
    idDoCampeonato?: SortOrder
    idDoTorneio?: SortOrder
    data?: SortOrder
    dataDeInicio?: SortOrder
    _count?: TabelaDeResultadosCountOrderByAggregateInput
    _max?: TabelaDeResultadosMaxOrderByAggregateInput
    _min?: TabelaDeResultadosMinOrderByAggregateInput
  }

  export type TabelaDeResultadosScalarWhereWithAggregatesInput = {
    AND?: TabelaDeResultadosScalarWhereWithAggregatesInput | TabelaDeResultadosScalarWhereWithAggregatesInput[]
    OR?: TabelaDeResultadosScalarWhereWithAggregatesInput[]
    NOT?: TabelaDeResultadosScalarWhereWithAggregatesInput | TabelaDeResultadosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TabelaDeResultados"> | string
    idDoCampeonato?: StringWithAggregatesFilter<"TabelaDeResultados"> | string
    idDoTorneio?: StringWithAggregatesFilter<"TabelaDeResultados"> | string
    data?: DateTimeWithAggregatesFilter<"TabelaDeResultados"> | Date | string
    dataDeInicio?: StringNullableWithAggregatesFilter<"TabelaDeResultados"> | string | null
  }

  export type UsuarioCreateInput = {
    id?: string
    email: string
    nome: string
    senha: string
    torneio?: TorneioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    email: string
    nome: string
    senha: string
    torneio?: TorneioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    torneio?: TorneioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    torneio?: TorneioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    email: string
    nome: string
    senha: string
  }

  export type UsuarioUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type TorneioCreateInput = {
    id?: string
    nome: string
    participantes?: ParticipantesCreateNestedManyWithoutTorneioInput
    usuario: UsuarioCreateNestedOneWithoutTorneioInput
    estatistica?: EstatisticaCreateNestedManyWithoutTorneioInput
    campeonato?: campeonatoCreateNestedManyWithoutTorneioInput
  }

  export type TorneioUncheckedCreateInput = {
    id?: string
    idUsuario: string
    nome: string
    participantes?: ParticipantesUncheckedCreateNestedManyWithoutTorneioInput
    estatistica?: EstatisticaUncheckedCreateNestedManyWithoutTorneioInput
    campeonato?: campeonatoUncheckedCreateNestedManyWithoutTorneioInput
  }

  export type TorneioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    participantes?: ParticipantesUpdateManyWithoutTorneioNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutTorneioNestedInput
    estatistica?: EstatisticaUpdateManyWithoutTorneioNestedInput
    campeonato?: campeonatoUpdateManyWithoutTorneioNestedInput
  }

  export type TorneioUncheckedUpdateInput = {
    idUsuario?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    participantes?: ParticipantesUncheckedUpdateManyWithoutTorneioNestedInput
    estatistica?: EstatisticaUncheckedUpdateManyWithoutTorneioNestedInput
    campeonato?: campeonatoUncheckedUpdateManyWithoutTorneioNestedInput
  }

  export type TorneioCreateManyInput = {
    id?: string
    idUsuario: string
    nome: string
  }

  export type TorneioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type TorneioUncheckedUpdateManyInput = {
    idUsuario?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipantesCreateInput = {
    id?: string
    nome: string
    saldo?: number | null
    time?: string | null
    emblemaDoTime?: string | null
    torneio: TorneioCreateNestedOneWithoutParticipantesInput
    jogadores?: JogadoresCreateNestedManyWithoutParticipantesInput
  }

  export type ParticipantesUncheckedCreateInput = {
    id?: string
    nome: string
    saldo?: number | null
    time?: string | null
    emblemaDoTime?: string | null
    idTorneio: string
    jogadores?: JogadoresUncheckedCreateNestedManyWithoutParticipantesInput
  }

  export type ParticipantesUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    saldo?: NullableFloatFieldUpdateOperationsInput | number | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    emblemaDoTime?: NullableStringFieldUpdateOperationsInput | string | null
    torneio?: TorneioUpdateOneRequiredWithoutParticipantesNestedInput
    jogadores?: JogadoresUpdateManyWithoutParticipantesNestedInput
  }

  export type ParticipantesUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    saldo?: NullableFloatFieldUpdateOperationsInput | number | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    emblemaDoTime?: NullableStringFieldUpdateOperationsInput | string | null
    idTorneio?: StringFieldUpdateOperationsInput | string
    jogadores?: JogadoresUncheckedUpdateManyWithoutParticipantesNestedInput
  }

  export type ParticipantesCreateManyInput = {
    id?: string
    nome: string
    saldo?: number | null
    time?: string | null
    emblemaDoTime?: string | null
    idTorneio: string
  }

  export type ParticipantesUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    saldo?: NullableFloatFieldUpdateOperationsInput | number | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    emblemaDoTime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParticipantesUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    saldo?: NullableFloatFieldUpdateOperationsInput | number | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    emblemaDoTime?: NullableStringFieldUpdateOperationsInput | string | null
    idTorneio?: StringFieldUpdateOperationsInput | string
  }

  export type JogadoresCreateInput = {
    id?: string
    nome: string
    imagemDoJogador: string
    nacionalidade: string
    imagemDaNacionalidade: string
    escudoDoTime: string
    posicao: string
    overall: string
    valorDoJogador: string
    time: string
    liga: string
    linkSoFifa: string
    posicaoNoCampinho?: PosicaoNoCampinhoCreateNestedManyWithoutJogadorInput
    participantes: ParticipantesCreateNestedOneWithoutJogadoresInput
  }

  export type JogadoresUncheckedCreateInput = {
    id?: string
    nome: string
    imagemDoJogador: string
    nacionalidade: string
    imagemDaNacionalidade: string
    escudoDoTime: string
    posicao: string
    overall: string
    valorDoJogador: string
    time: string
    liga: string
    linkSoFifa: string
    idParticipante: string
    posicaoNoCampinho?: PosicaoNoCampinhoUncheckedCreateNestedManyWithoutJogadorInput
  }

  export type JogadoresUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    imagemDoJogador?: StringFieldUpdateOperationsInput | string
    nacionalidade?: StringFieldUpdateOperationsInput | string
    imagemDaNacionalidade?: StringFieldUpdateOperationsInput | string
    escudoDoTime?: StringFieldUpdateOperationsInput | string
    posicao?: StringFieldUpdateOperationsInput | string
    overall?: StringFieldUpdateOperationsInput | string
    valorDoJogador?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    liga?: StringFieldUpdateOperationsInput | string
    linkSoFifa?: StringFieldUpdateOperationsInput | string
    posicaoNoCampinho?: PosicaoNoCampinhoUpdateManyWithoutJogadorNestedInput
    participantes?: ParticipantesUpdateOneRequiredWithoutJogadoresNestedInput
  }

  export type JogadoresUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    imagemDoJogador?: StringFieldUpdateOperationsInput | string
    nacionalidade?: StringFieldUpdateOperationsInput | string
    imagemDaNacionalidade?: StringFieldUpdateOperationsInput | string
    escudoDoTime?: StringFieldUpdateOperationsInput | string
    posicao?: StringFieldUpdateOperationsInput | string
    overall?: StringFieldUpdateOperationsInput | string
    valorDoJogador?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    liga?: StringFieldUpdateOperationsInput | string
    linkSoFifa?: StringFieldUpdateOperationsInput | string
    idParticipante?: StringFieldUpdateOperationsInput | string
    posicaoNoCampinho?: PosicaoNoCampinhoUncheckedUpdateManyWithoutJogadorNestedInput
  }

  export type JogadoresCreateManyInput = {
    id?: string
    nome: string
    imagemDoJogador: string
    nacionalidade: string
    imagemDaNacionalidade: string
    escudoDoTime: string
    posicao: string
    overall: string
    valorDoJogador: string
    time: string
    liga: string
    linkSoFifa: string
    idParticipante: string
  }

  export type JogadoresUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    imagemDoJogador?: StringFieldUpdateOperationsInput | string
    nacionalidade?: StringFieldUpdateOperationsInput | string
    imagemDaNacionalidade?: StringFieldUpdateOperationsInput | string
    escudoDoTime?: StringFieldUpdateOperationsInput | string
    posicao?: StringFieldUpdateOperationsInput | string
    overall?: StringFieldUpdateOperationsInput | string
    valorDoJogador?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    liga?: StringFieldUpdateOperationsInput | string
    linkSoFifa?: StringFieldUpdateOperationsInput | string
  }

  export type JogadoresUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    imagemDoJogador?: StringFieldUpdateOperationsInput | string
    nacionalidade?: StringFieldUpdateOperationsInput | string
    imagemDaNacionalidade?: StringFieldUpdateOperationsInput | string
    escudoDoTime?: StringFieldUpdateOperationsInput | string
    posicao?: StringFieldUpdateOperationsInput | string
    overall?: StringFieldUpdateOperationsInput | string
    valorDoJogador?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    liga?: StringFieldUpdateOperationsInput | string
    linkSoFifa?: StringFieldUpdateOperationsInput | string
    idParticipante?: StringFieldUpdateOperationsInput | string
  }

  export type EstatisticaCreateInput = {
    id?: string
    vencedor?: string | null
    assistentes?: EstatisticaCreateassistentesInput | string[]
    artilheiros?: EstatisticaCreateartilheirosInput | string[]
    data?: Date | string | null
    torneio: TorneioCreateNestedOneWithoutEstatisticaInput
  }

  export type EstatisticaUncheckedCreateInput = {
    id?: string
    vencedor?: string | null
    assistentes?: EstatisticaCreateassistentesInput | string[]
    artilheiros?: EstatisticaCreateartilheirosInput | string[]
    data?: Date | string | null
    torneioId: string
  }

  export type EstatisticaUpdateInput = {
    vencedor?: NullableStringFieldUpdateOperationsInput | string | null
    assistentes?: EstatisticaUpdateassistentesInput | string[]
    artilheiros?: EstatisticaUpdateartilheirosInput | string[]
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    torneio?: TorneioUpdateOneRequiredWithoutEstatisticaNestedInput
  }

  export type EstatisticaUncheckedUpdateInput = {
    vencedor?: NullableStringFieldUpdateOperationsInput | string | null
    assistentes?: EstatisticaUpdateassistentesInput | string[]
    artilheiros?: EstatisticaUpdateartilheirosInput | string[]
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    torneioId?: StringFieldUpdateOperationsInput | string
  }

  export type EstatisticaCreateManyInput = {
    id?: string
    vencedor?: string | null
    assistentes?: EstatisticaCreateassistentesInput | string[]
    artilheiros?: EstatisticaCreateartilheirosInput | string[]
    data?: Date | string | null
    torneioId: string
  }

  export type EstatisticaUpdateManyMutationInput = {
    vencedor?: NullableStringFieldUpdateOperationsInput | string | null
    assistentes?: EstatisticaUpdateassistentesInput | string[]
    artilheiros?: EstatisticaUpdateartilheirosInput | string[]
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EstatisticaUncheckedUpdateManyInput = {
    vencedor?: NullableStringFieldUpdateOperationsInput | string | null
    assistentes?: EstatisticaUpdateassistentesInput | string[]
    artilheiros?: EstatisticaUpdateartilheirosInput | string[]
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    torneioId?: StringFieldUpdateOperationsInput | string
  }

  export type PosicaoNoCampinhoCreateInput = {
    id?: string
    x: number
    y: number
    jogador: JogadoresCreateNestedOneWithoutPosicaoNoCampinhoInput
  }

  export type PosicaoNoCampinhoUncheckedCreateInput = {
    id?: string
    idDoJogador: string
    x: number
    y: number
  }

  export type PosicaoNoCampinhoUpdateInput = {
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    jogador?: JogadoresUpdateOneRequiredWithoutPosicaoNoCampinhoNestedInput
  }

  export type PosicaoNoCampinhoUncheckedUpdateInput = {
    idDoJogador?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
  }

  export type PosicaoNoCampinhoCreateManyInput = {
    id?: string
    idDoJogador: string
    x: number
    y: number
  }

  export type PosicaoNoCampinhoUpdateManyMutationInput = {
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
  }

  export type PosicaoNoCampinhoUncheckedUpdateManyInput = {
    idDoJogador?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
  }

  export type campeonatoCreateInput = {
    id?: string
    status: string
    data?: Date | string
    rodada?: RodadaCreateNestedManyWithoutCampeonatoInput
    torneio: TorneioCreateNestedOneWithoutCampeonatoInput
  }

  export type campeonatoUncheckedCreateInput = {
    id?: string
    status: string
    data?: Date | string
    idTorneio: string
    rodada?: RodadaUncheckedCreateNestedManyWithoutCampeonatoInput
  }

  export type campeonatoUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    rodada?: RodadaUpdateManyWithoutCampeonatoNestedInput
    torneio?: TorneioUpdateOneRequiredWithoutCampeonatoNestedInput
  }

  export type campeonatoUncheckedUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    idTorneio?: StringFieldUpdateOperationsInput | string
    rodada?: RodadaUncheckedUpdateManyWithoutCampeonatoNestedInput
  }

  export type campeonatoCreateManyInput = {
    id?: string
    status: string
    data?: Date | string
    idTorneio: string
  }

  export type campeonatoUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type campeonatoUncheckedUpdateManyInput = {
    status?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    idTorneio?: StringFieldUpdateOperationsInput | string
  }

  export type RodadaCreateInput = {
    id?: string
    golsMandante: number
    golsVisitante: number
    rodadaDeNumero: number
    statusDaRodada: string
    mandante?: TimesDaRodadaCreateNestedManyWithoutMandanteInput
    visitante?: TimesDaRodadaCreateNestedManyWithoutVisitanteInput
    campeonato?: campeonatoCreateNestedOneWithoutRodadaInput
  }

  export type RodadaUncheckedCreateInput = {
    id?: string
    idDoMandante?: RodadaCreateidDoMandanteInput | string[]
    idDoVisitante?: RodadaCreateidDoVisitanteInput | string[]
    idCampeonato: string
    golsMandante: number
    golsVisitante: number
    rodadaDeNumero: number
    statusDaRodada: string
    mandante?: TimesDaRodadaUncheckedCreateNestedManyWithoutMandanteInput
    visitante?: TimesDaRodadaUncheckedCreateNestedManyWithoutVisitanteInput
  }

  export type RodadaUpdateInput = {
    golsMandante?: IntFieldUpdateOperationsInput | number
    golsVisitante?: IntFieldUpdateOperationsInput | number
    rodadaDeNumero?: IntFieldUpdateOperationsInput | number
    statusDaRodada?: StringFieldUpdateOperationsInput | string
    mandante?: TimesDaRodadaUpdateManyWithoutMandanteNestedInput
    visitante?: TimesDaRodadaUpdateManyWithoutVisitanteNestedInput
    campeonato?: campeonatoUpdateOneWithoutRodadaNestedInput
  }

  export type RodadaUncheckedUpdateInput = {
    idDoMandante?: RodadaUpdateidDoMandanteInput | string[]
    idDoVisitante?: RodadaUpdateidDoVisitanteInput | string[]
    idCampeonato?: StringFieldUpdateOperationsInput | string
    golsMandante?: IntFieldUpdateOperationsInput | number
    golsVisitante?: IntFieldUpdateOperationsInput | number
    rodadaDeNumero?: IntFieldUpdateOperationsInput | number
    statusDaRodada?: StringFieldUpdateOperationsInput | string
    mandante?: TimesDaRodadaUncheckedUpdateManyWithoutMandanteNestedInput
    visitante?: TimesDaRodadaUncheckedUpdateManyWithoutVisitanteNestedInput
  }

  export type RodadaCreateManyInput = {
    id?: string
    idDoMandante?: RodadaCreateidDoMandanteInput | string[]
    idDoVisitante?: RodadaCreateidDoVisitanteInput | string[]
    idCampeonato: string
    golsMandante: number
    golsVisitante: number
    rodadaDeNumero: number
    statusDaRodada: string
  }

  export type RodadaUpdateManyMutationInput = {
    golsMandante?: IntFieldUpdateOperationsInput | number
    golsVisitante?: IntFieldUpdateOperationsInput | number
    rodadaDeNumero?: IntFieldUpdateOperationsInput | number
    statusDaRodada?: StringFieldUpdateOperationsInput | string
  }

  export type RodadaUncheckedUpdateManyInput = {
    idDoMandante?: RodadaUpdateidDoMandanteInput | string[]
    idDoVisitante?: RodadaUpdateidDoVisitanteInput | string[]
    idCampeonato?: StringFieldUpdateOperationsInput | string
    golsMandante?: IntFieldUpdateOperationsInput | number
    golsVisitante?: IntFieldUpdateOperationsInput | number
    rodadaDeNumero?: IntFieldUpdateOperationsInput | number
    statusDaRodada?: StringFieldUpdateOperationsInput | string
  }

  export type TimesDaRodadaCreateInput = {
    id?: string
    idParticipante: string
    nome: string
    saldo?: number | null
    time?: string | null
    emblemaDoTime?: string | null
    idTorneio: string
    mandante?: RodadaCreateNestedManyWithoutMandanteInput
    visitante?: RodadaCreateNestedManyWithoutVisitanteInput
  }

  export type TimesDaRodadaUncheckedCreateInput = {
    id?: string
    idParticipante: string
    nome: string
    saldo?: number | null
    time?: string | null
    emblemaDoTime?: string | null
    idTorneio: string
    idRodada?: TimesDaRodadaCreateidRodadaInput | string[]
    mandante?: RodadaUncheckedCreateNestedManyWithoutMandanteInput
    visitante?: RodadaUncheckedCreateNestedManyWithoutVisitanteInput
  }

  export type TimesDaRodadaUpdateInput = {
    idParticipante?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    saldo?: NullableFloatFieldUpdateOperationsInput | number | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    emblemaDoTime?: NullableStringFieldUpdateOperationsInput | string | null
    idTorneio?: StringFieldUpdateOperationsInput | string
    mandante?: RodadaUpdateManyWithoutMandanteNestedInput
    visitante?: RodadaUpdateManyWithoutVisitanteNestedInput
  }

  export type TimesDaRodadaUncheckedUpdateInput = {
    idParticipante?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    saldo?: NullableFloatFieldUpdateOperationsInput | number | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    emblemaDoTime?: NullableStringFieldUpdateOperationsInput | string | null
    idTorneio?: StringFieldUpdateOperationsInput | string
    idRodada?: TimesDaRodadaUpdateidRodadaInput | string[]
    mandante?: RodadaUncheckedUpdateManyWithoutMandanteNestedInput
    visitante?: RodadaUncheckedUpdateManyWithoutVisitanteNestedInput
  }

  export type TimesDaRodadaCreateManyInput = {
    id?: string
    idParticipante: string
    nome: string
    saldo?: number | null
    time?: string | null
    emblemaDoTime?: string | null
    idTorneio: string
    idRodada?: TimesDaRodadaCreateidRodadaInput | string[]
  }

  export type TimesDaRodadaUpdateManyMutationInput = {
    idParticipante?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    saldo?: NullableFloatFieldUpdateOperationsInput | number | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    emblemaDoTime?: NullableStringFieldUpdateOperationsInput | string | null
    idTorneio?: StringFieldUpdateOperationsInput | string
  }

  export type TimesDaRodadaUncheckedUpdateManyInput = {
    idParticipante?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    saldo?: NullableFloatFieldUpdateOperationsInput | number | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    emblemaDoTime?: NullableStringFieldUpdateOperationsInput | string | null
    idTorneio?: StringFieldUpdateOperationsInput | string
    idRodada?: TimesDaRodadaUpdateidRodadaInput | string[]
  }

  export type tabelaDoCampeonatoCreateInput = {
    id?: string
    idDoTorneio: string
    idDoCampeonato: string
    idDoParticipante: string
    avatar: string
    equipe: string
    pontos: number
    jogos: number
    vitorias: number
    empates: number
    derrota: number
    golsPro: number
    golsContra: number
    saldoDeGol: number
  }

  export type tabelaDoCampeonatoUncheckedCreateInput = {
    id?: string
    idDoTorneio: string
    idDoCampeonato: string
    idDoParticipante: string
    avatar: string
    equipe: string
    pontos: number
    jogos: number
    vitorias: number
    empates: number
    derrota: number
    golsPro: number
    golsContra: number
    saldoDeGol: number
  }

  export type tabelaDoCampeonatoUpdateInput = {
    idDoTorneio?: StringFieldUpdateOperationsInput | string
    idDoCampeonato?: StringFieldUpdateOperationsInput | string
    idDoParticipante?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    equipe?: StringFieldUpdateOperationsInput | string
    pontos?: IntFieldUpdateOperationsInput | number
    jogos?: IntFieldUpdateOperationsInput | number
    vitorias?: IntFieldUpdateOperationsInput | number
    empates?: IntFieldUpdateOperationsInput | number
    derrota?: IntFieldUpdateOperationsInput | number
    golsPro?: IntFieldUpdateOperationsInput | number
    golsContra?: IntFieldUpdateOperationsInput | number
    saldoDeGol?: IntFieldUpdateOperationsInput | number
  }

  export type tabelaDoCampeonatoUncheckedUpdateInput = {
    idDoTorneio?: StringFieldUpdateOperationsInput | string
    idDoCampeonato?: StringFieldUpdateOperationsInput | string
    idDoParticipante?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    equipe?: StringFieldUpdateOperationsInput | string
    pontos?: IntFieldUpdateOperationsInput | number
    jogos?: IntFieldUpdateOperationsInput | number
    vitorias?: IntFieldUpdateOperationsInput | number
    empates?: IntFieldUpdateOperationsInput | number
    derrota?: IntFieldUpdateOperationsInput | number
    golsPro?: IntFieldUpdateOperationsInput | number
    golsContra?: IntFieldUpdateOperationsInput | number
    saldoDeGol?: IntFieldUpdateOperationsInput | number
  }

  export type tabelaDoCampeonatoCreateManyInput = {
    id?: string
    idDoTorneio: string
    idDoCampeonato: string
    idDoParticipante: string
    avatar: string
    equipe: string
    pontos: number
    jogos: number
    vitorias: number
    empates: number
    derrota: number
    golsPro: number
    golsContra: number
    saldoDeGol: number
  }

  export type tabelaDoCampeonatoUpdateManyMutationInput = {
    idDoTorneio?: StringFieldUpdateOperationsInput | string
    idDoCampeonato?: StringFieldUpdateOperationsInput | string
    idDoParticipante?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    equipe?: StringFieldUpdateOperationsInput | string
    pontos?: IntFieldUpdateOperationsInput | number
    jogos?: IntFieldUpdateOperationsInput | number
    vitorias?: IntFieldUpdateOperationsInput | number
    empates?: IntFieldUpdateOperationsInput | number
    derrota?: IntFieldUpdateOperationsInput | number
    golsPro?: IntFieldUpdateOperationsInput | number
    golsContra?: IntFieldUpdateOperationsInput | number
    saldoDeGol?: IntFieldUpdateOperationsInput | number
  }

  export type tabelaDoCampeonatoUncheckedUpdateManyInput = {
    idDoTorneio?: StringFieldUpdateOperationsInput | string
    idDoCampeonato?: StringFieldUpdateOperationsInput | string
    idDoParticipante?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    equipe?: StringFieldUpdateOperationsInput | string
    pontos?: IntFieldUpdateOperationsInput | number
    jogos?: IntFieldUpdateOperationsInput | number
    vitorias?: IntFieldUpdateOperationsInput | number
    empates?: IntFieldUpdateOperationsInput | number
    derrota?: IntFieldUpdateOperationsInput | number
    golsPro?: IntFieldUpdateOperationsInput | number
    golsContra?: IntFieldUpdateOperationsInput | number
    saldoDeGol?: IntFieldUpdateOperationsInput | number
  }

  export type ResultadosCreateInput = {
    id?: string
    avatar: string
    idDoParticipante: string
    usuario: string
    colocacao: string
    premioColocacao: number
    artilharia: string
    premioArtilharia: number
    vitorias: number
    premioVitorias: number
    empates: number
    premioEmpates: number
    gols: number
    premioGols: number
    total: number
    posicaoDefezaMenosVazada?: string | null
    premioDefezaMenosVazada?: number | null
    golsTomados?: number | null
    jogos?: number | null
    tabelaDeResultado: TabelaDeResultadosCreateNestedOneWithoutResultadosInput
  }

  export type ResultadosUncheckedCreateInput = {
    id?: string
    avatar: string
    idDoParticipante: string
    usuario: string
    colocacao: string
    premioColocacao: number
    artilharia: string
    premioArtilharia: number
    vitorias: number
    premioVitorias: number
    empates: number
    premioEmpates: number
    gols: number
    premioGols: number
    total: number
    posicaoDefezaMenosVazada?: string | null
    premioDefezaMenosVazada?: number | null
    golsTomados?: number | null
    jogos?: number | null
    idTabelaResultados: string
  }

  export type ResultadosUpdateInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    idDoParticipante?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    colocacao?: StringFieldUpdateOperationsInput | string
    premioColocacao?: FloatFieldUpdateOperationsInput | number
    artilharia?: StringFieldUpdateOperationsInput | string
    premioArtilharia?: FloatFieldUpdateOperationsInput | number
    vitorias?: IntFieldUpdateOperationsInput | number
    premioVitorias?: FloatFieldUpdateOperationsInput | number
    empates?: IntFieldUpdateOperationsInput | number
    premioEmpates?: FloatFieldUpdateOperationsInput | number
    gols?: IntFieldUpdateOperationsInput | number
    premioGols?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    posicaoDefezaMenosVazada?: NullableStringFieldUpdateOperationsInput | string | null
    premioDefezaMenosVazada?: NullableFloatFieldUpdateOperationsInput | number | null
    golsTomados?: NullableIntFieldUpdateOperationsInput | number | null
    jogos?: NullableIntFieldUpdateOperationsInput | number | null
    tabelaDeResultado?: TabelaDeResultadosUpdateOneRequiredWithoutResultadosNestedInput
  }

  export type ResultadosUncheckedUpdateInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    idDoParticipante?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    colocacao?: StringFieldUpdateOperationsInput | string
    premioColocacao?: FloatFieldUpdateOperationsInput | number
    artilharia?: StringFieldUpdateOperationsInput | string
    premioArtilharia?: FloatFieldUpdateOperationsInput | number
    vitorias?: IntFieldUpdateOperationsInput | number
    premioVitorias?: FloatFieldUpdateOperationsInput | number
    empates?: IntFieldUpdateOperationsInput | number
    premioEmpates?: FloatFieldUpdateOperationsInput | number
    gols?: IntFieldUpdateOperationsInput | number
    premioGols?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    posicaoDefezaMenosVazada?: NullableStringFieldUpdateOperationsInput | string | null
    premioDefezaMenosVazada?: NullableFloatFieldUpdateOperationsInput | number | null
    golsTomados?: NullableIntFieldUpdateOperationsInput | number | null
    jogos?: NullableIntFieldUpdateOperationsInput | number | null
    idTabelaResultados?: StringFieldUpdateOperationsInput | string
  }

  export type ResultadosCreateManyInput = {
    id?: string
    avatar: string
    idDoParticipante: string
    usuario: string
    colocacao: string
    premioColocacao: number
    artilharia: string
    premioArtilharia: number
    vitorias: number
    premioVitorias: number
    empates: number
    premioEmpates: number
    gols: number
    premioGols: number
    total: number
    posicaoDefezaMenosVazada?: string | null
    premioDefezaMenosVazada?: number | null
    golsTomados?: number | null
    jogos?: number | null
    idTabelaResultados: string
  }

  export type ResultadosUpdateManyMutationInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    idDoParticipante?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    colocacao?: StringFieldUpdateOperationsInput | string
    premioColocacao?: FloatFieldUpdateOperationsInput | number
    artilharia?: StringFieldUpdateOperationsInput | string
    premioArtilharia?: FloatFieldUpdateOperationsInput | number
    vitorias?: IntFieldUpdateOperationsInput | number
    premioVitorias?: FloatFieldUpdateOperationsInput | number
    empates?: IntFieldUpdateOperationsInput | number
    premioEmpates?: FloatFieldUpdateOperationsInput | number
    gols?: IntFieldUpdateOperationsInput | number
    premioGols?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    posicaoDefezaMenosVazada?: NullableStringFieldUpdateOperationsInput | string | null
    premioDefezaMenosVazada?: NullableFloatFieldUpdateOperationsInput | number | null
    golsTomados?: NullableIntFieldUpdateOperationsInput | number | null
    jogos?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ResultadosUncheckedUpdateManyInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    idDoParticipante?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    colocacao?: StringFieldUpdateOperationsInput | string
    premioColocacao?: FloatFieldUpdateOperationsInput | number
    artilharia?: StringFieldUpdateOperationsInput | string
    premioArtilharia?: FloatFieldUpdateOperationsInput | number
    vitorias?: IntFieldUpdateOperationsInput | number
    premioVitorias?: FloatFieldUpdateOperationsInput | number
    empates?: IntFieldUpdateOperationsInput | number
    premioEmpates?: FloatFieldUpdateOperationsInput | number
    gols?: IntFieldUpdateOperationsInput | number
    premioGols?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    posicaoDefezaMenosVazada?: NullableStringFieldUpdateOperationsInput | string | null
    premioDefezaMenosVazada?: NullableFloatFieldUpdateOperationsInput | number | null
    golsTomados?: NullableIntFieldUpdateOperationsInput | number | null
    jogos?: NullableIntFieldUpdateOperationsInput | number | null
    idTabelaResultados?: StringFieldUpdateOperationsInput | string
  }

  export type TabelaDeResultadosCreateInput = {
    id?: string
    idDoCampeonato: string
    idDoTorneio: string
    data?: Date | string
    dataDeInicio?: string | null
    resultados?: ResultadosCreateNestedManyWithoutTabelaDeResultadoInput
  }

  export type TabelaDeResultadosUncheckedCreateInput = {
    id?: string
    idDoCampeonato: string
    idDoTorneio: string
    data?: Date | string
    dataDeInicio?: string | null
    resultados?: ResultadosUncheckedCreateNestedManyWithoutTabelaDeResultadoInput
  }

  export type TabelaDeResultadosUpdateInput = {
    idDoCampeonato?: StringFieldUpdateOperationsInput | string
    idDoTorneio?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDeInicio?: NullableStringFieldUpdateOperationsInput | string | null
    resultados?: ResultadosUpdateManyWithoutTabelaDeResultadoNestedInput
  }

  export type TabelaDeResultadosUncheckedUpdateInput = {
    idDoCampeonato?: StringFieldUpdateOperationsInput | string
    idDoTorneio?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDeInicio?: NullableStringFieldUpdateOperationsInput | string | null
    resultados?: ResultadosUncheckedUpdateManyWithoutTabelaDeResultadoNestedInput
  }

  export type TabelaDeResultadosCreateManyInput = {
    id?: string
    idDoCampeonato: string
    idDoTorneio: string
    data?: Date | string
    dataDeInicio?: string | null
  }

  export type TabelaDeResultadosUpdateManyMutationInput = {
    idDoCampeonato?: StringFieldUpdateOperationsInput | string
    idDoTorneio?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDeInicio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TabelaDeResultadosUncheckedUpdateManyInput = {
    idDoCampeonato?: StringFieldUpdateOperationsInput | string
    idDoTorneio?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDeInicio?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type TorneioListRelationFilter = {
    every?: TorneioWhereInput
    some?: TorneioWhereInput
    none?: TorneioWhereInput
  }

  export type TorneioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
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

  export type ParticipantesListRelationFilter = {
    every?: ParticipantesWhereInput
    some?: ParticipantesWhereInput
    none?: ParticipantesWhereInput
  }

  export type UsuarioRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type EstatisticaListRelationFilter = {
    every?: EstatisticaWhereInput
    some?: EstatisticaWhereInput
    none?: EstatisticaWhereInput
  }

  export type CampeonatoListRelationFilter = {
    every?: campeonatoWhereInput
    some?: campeonatoWhereInput
    none?: campeonatoWhereInput
  }

  export type ParticipantesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EstatisticaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type campeonatoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TorneioCountOrderByAggregateInput = {
    id?: SortOrder
    idUsuario?: SortOrder
    nome?: SortOrder
  }

  export type TorneioMaxOrderByAggregateInput = {
    id?: SortOrder
    idUsuario?: SortOrder
    nome?: SortOrder
  }

  export type TorneioMinOrderByAggregateInput = {
    id?: SortOrder
    idUsuario?: SortOrder
    nome?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
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
    isSet?: boolean
  }

  export type TorneioRelationFilter = {
    is?: TorneioWhereInput
    isNot?: TorneioWhereInput
  }

  export type JogadoresListRelationFilter = {
    every?: JogadoresWhereInput
    some?: JogadoresWhereInput
    none?: JogadoresWhereInput
  }

  export type JogadoresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParticipantesCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    saldo?: SortOrder
    time?: SortOrder
    emblemaDoTime?: SortOrder
    idTorneio?: SortOrder
  }

  export type ParticipantesAvgOrderByAggregateInput = {
    saldo?: SortOrder
  }

  export type ParticipantesMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    saldo?: SortOrder
    time?: SortOrder
    emblemaDoTime?: SortOrder
    idTorneio?: SortOrder
  }

  export type ParticipantesMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    saldo?: SortOrder
    time?: SortOrder
    emblemaDoTime?: SortOrder
    idTorneio?: SortOrder
  }

  export type ParticipantesSumOrderByAggregateInput = {
    saldo?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
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
    isSet?: boolean
  }

  export type PosicaoNoCampinhoListRelationFilter = {
    every?: PosicaoNoCampinhoWhereInput
    some?: PosicaoNoCampinhoWhereInput
    none?: PosicaoNoCampinhoWhereInput
  }

  export type ParticipantesRelationFilter = {
    is?: ParticipantesWhereInput
    isNot?: ParticipantesWhereInput
  }

  export type PosicaoNoCampinhoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JogadoresCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    imagemDoJogador?: SortOrder
    nacionalidade?: SortOrder
    imagemDaNacionalidade?: SortOrder
    escudoDoTime?: SortOrder
    posicao?: SortOrder
    overall?: SortOrder
    valorDoJogador?: SortOrder
    time?: SortOrder
    liga?: SortOrder
    linkSoFifa?: SortOrder
    idParticipante?: SortOrder
  }

  export type JogadoresMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    imagemDoJogador?: SortOrder
    nacionalidade?: SortOrder
    imagemDaNacionalidade?: SortOrder
    escudoDoTime?: SortOrder
    posicao?: SortOrder
    overall?: SortOrder
    valorDoJogador?: SortOrder
    time?: SortOrder
    liga?: SortOrder
    linkSoFifa?: SortOrder
    idParticipante?: SortOrder
  }

  export type JogadoresMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    imagemDoJogador?: SortOrder
    nacionalidade?: SortOrder
    imagemDaNacionalidade?: SortOrder
    escudoDoTime?: SortOrder
    posicao?: SortOrder
    overall?: SortOrder
    valorDoJogador?: SortOrder
    time?: SortOrder
    liga?: SortOrder
    linkSoFifa?: SortOrder
    idParticipante?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type EstatisticaCountOrderByAggregateInput = {
    id?: SortOrder
    vencedor?: SortOrder
    assistentes?: SortOrder
    artilheiros?: SortOrder
    data?: SortOrder
    torneioId?: SortOrder
  }

  export type EstatisticaMaxOrderByAggregateInput = {
    id?: SortOrder
    vencedor?: SortOrder
    data?: SortOrder
    torneioId?: SortOrder
  }

  export type EstatisticaMinOrderByAggregateInput = {
    id?: SortOrder
    vencedor?: SortOrder
    data?: SortOrder
    torneioId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type JogadoresRelationFilter = {
    is?: JogadoresWhereInput
    isNot?: JogadoresWhereInput
  }

  export type PosicaoNoCampinhoCountOrderByAggregateInput = {
    id?: SortOrder
    idDoJogador?: SortOrder
    x?: SortOrder
    y?: SortOrder
  }

  export type PosicaoNoCampinhoAvgOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
  }

  export type PosicaoNoCampinhoMaxOrderByAggregateInput = {
    id?: SortOrder
    idDoJogador?: SortOrder
    x?: SortOrder
    y?: SortOrder
  }

  export type PosicaoNoCampinhoMinOrderByAggregateInput = {
    id?: SortOrder
    idDoJogador?: SortOrder
    x?: SortOrder
    y?: SortOrder
  }

  export type PosicaoNoCampinhoSumOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RodadaListRelationFilter = {
    every?: RodadaWhereInput
    some?: RodadaWhereInput
    none?: RodadaWhereInput
  }

  export type RodadaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type campeonatoCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    data?: SortOrder
    idTorneio?: SortOrder
  }

  export type campeonatoMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    data?: SortOrder
    idTorneio?: SortOrder
  }

  export type campeonatoMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    data?: SortOrder
    idTorneio?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type TimesDaRodadaListRelationFilter = {
    every?: TimesDaRodadaWhereInput
    some?: TimesDaRodadaWhereInput
    none?: TimesDaRodadaWhereInput
  }

  export type CampeonatoNullableRelationFilter = {
    is?: campeonatoWhereInput | null
    isNot?: campeonatoWhereInput | null
  }

  export type TimesDaRodadaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RodadaCountOrderByAggregateInput = {
    id?: SortOrder
    idDoMandante?: SortOrder
    idDoVisitante?: SortOrder
    idCampeonato?: SortOrder
    golsMandante?: SortOrder
    golsVisitante?: SortOrder
    rodadaDeNumero?: SortOrder
    statusDaRodada?: SortOrder
  }

  export type RodadaAvgOrderByAggregateInput = {
    golsMandante?: SortOrder
    golsVisitante?: SortOrder
    rodadaDeNumero?: SortOrder
  }

  export type RodadaMaxOrderByAggregateInput = {
    id?: SortOrder
    idCampeonato?: SortOrder
    golsMandante?: SortOrder
    golsVisitante?: SortOrder
    rodadaDeNumero?: SortOrder
    statusDaRodada?: SortOrder
  }

  export type RodadaMinOrderByAggregateInput = {
    id?: SortOrder
    idCampeonato?: SortOrder
    golsMandante?: SortOrder
    golsVisitante?: SortOrder
    rodadaDeNumero?: SortOrder
    statusDaRodada?: SortOrder
  }

  export type RodadaSumOrderByAggregateInput = {
    golsMandante?: SortOrder
    golsVisitante?: SortOrder
    rodadaDeNumero?: SortOrder
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

  export type TimesDaRodadaCountOrderByAggregateInput = {
    id?: SortOrder
    idParticipante?: SortOrder
    nome?: SortOrder
    saldo?: SortOrder
    time?: SortOrder
    emblemaDoTime?: SortOrder
    idTorneio?: SortOrder
    idRodada?: SortOrder
  }

  export type TimesDaRodadaAvgOrderByAggregateInput = {
    saldo?: SortOrder
  }

  export type TimesDaRodadaMaxOrderByAggregateInput = {
    id?: SortOrder
    idParticipante?: SortOrder
    nome?: SortOrder
    saldo?: SortOrder
    time?: SortOrder
    emblemaDoTime?: SortOrder
    idTorneio?: SortOrder
  }

  export type TimesDaRodadaMinOrderByAggregateInput = {
    id?: SortOrder
    idParticipante?: SortOrder
    nome?: SortOrder
    saldo?: SortOrder
    time?: SortOrder
    emblemaDoTime?: SortOrder
    idTorneio?: SortOrder
  }

  export type TimesDaRodadaSumOrderByAggregateInput = {
    saldo?: SortOrder
  }

  export type tabelaDoCampeonatoCountOrderByAggregateInput = {
    id?: SortOrder
    idDoTorneio?: SortOrder
    idDoCampeonato?: SortOrder
    idDoParticipante?: SortOrder
    avatar?: SortOrder
    equipe?: SortOrder
    pontos?: SortOrder
    jogos?: SortOrder
    vitorias?: SortOrder
    empates?: SortOrder
    derrota?: SortOrder
    golsPro?: SortOrder
    golsContra?: SortOrder
    saldoDeGol?: SortOrder
  }

  export type tabelaDoCampeonatoAvgOrderByAggregateInput = {
    pontos?: SortOrder
    jogos?: SortOrder
    vitorias?: SortOrder
    empates?: SortOrder
    derrota?: SortOrder
    golsPro?: SortOrder
    golsContra?: SortOrder
    saldoDeGol?: SortOrder
  }

  export type tabelaDoCampeonatoMaxOrderByAggregateInput = {
    id?: SortOrder
    idDoTorneio?: SortOrder
    idDoCampeonato?: SortOrder
    idDoParticipante?: SortOrder
    avatar?: SortOrder
    equipe?: SortOrder
    pontos?: SortOrder
    jogos?: SortOrder
    vitorias?: SortOrder
    empates?: SortOrder
    derrota?: SortOrder
    golsPro?: SortOrder
    golsContra?: SortOrder
    saldoDeGol?: SortOrder
  }

  export type tabelaDoCampeonatoMinOrderByAggregateInput = {
    id?: SortOrder
    idDoTorneio?: SortOrder
    idDoCampeonato?: SortOrder
    idDoParticipante?: SortOrder
    avatar?: SortOrder
    equipe?: SortOrder
    pontos?: SortOrder
    jogos?: SortOrder
    vitorias?: SortOrder
    empates?: SortOrder
    derrota?: SortOrder
    golsPro?: SortOrder
    golsContra?: SortOrder
    saldoDeGol?: SortOrder
  }

  export type tabelaDoCampeonatoSumOrderByAggregateInput = {
    pontos?: SortOrder
    jogos?: SortOrder
    vitorias?: SortOrder
    empates?: SortOrder
    derrota?: SortOrder
    golsPro?: SortOrder
    golsContra?: SortOrder
    saldoDeGol?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type TabelaDeResultadosRelationFilter = {
    is?: TabelaDeResultadosWhereInput
    isNot?: TabelaDeResultadosWhereInput
  }

  export type ResultadosCountOrderByAggregateInput = {
    id?: SortOrder
    avatar?: SortOrder
    idDoParticipante?: SortOrder
    usuario?: SortOrder
    colocacao?: SortOrder
    premioColocacao?: SortOrder
    artilharia?: SortOrder
    premioArtilharia?: SortOrder
    vitorias?: SortOrder
    premioVitorias?: SortOrder
    empates?: SortOrder
    premioEmpates?: SortOrder
    gols?: SortOrder
    premioGols?: SortOrder
    total?: SortOrder
    posicaoDefezaMenosVazada?: SortOrder
    premioDefezaMenosVazada?: SortOrder
    golsTomados?: SortOrder
    jogos?: SortOrder
    idTabelaResultados?: SortOrder
  }

  export type ResultadosAvgOrderByAggregateInput = {
    premioColocacao?: SortOrder
    premioArtilharia?: SortOrder
    vitorias?: SortOrder
    premioVitorias?: SortOrder
    empates?: SortOrder
    premioEmpates?: SortOrder
    gols?: SortOrder
    premioGols?: SortOrder
    total?: SortOrder
    premioDefezaMenosVazada?: SortOrder
    golsTomados?: SortOrder
    jogos?: SortOrder
  }

  export type ResultadosMaxOrderByAggregateInput = {
    id?: SortOrder
    avatar?: SortOrder
    idDoParticipante?: SortOrder
    usuario?: SortOrder
    colocacao?: SortOrder
    premioColocacao?: SortOrder
    artilharia?: SortOrder
    premioArtilharia?: SortOrder
    vitorias?: SortOrder
    premioVitorias?: SortOrder
    empates?: SortOrder
    premioEmpates?: SortOrder
    gols?: SortOrder
    premioGols?: SortOrder
    total?: SortOrder
    posicaoDefezaMenosVazada?: SortOrder
    premioDefezaMenosVazada?: SortOrder
    golsTomados?: SortOrder
    jogos?: SortOrder
    idTabelaResultados?: SortOrder
  }

  export type ResultadosMinOrderByAggregateInput = {
    id?: SortOrder
    avatar?: SortOrder
    idDoParticipante?: SortOrder
    usuario?: SortOrder
    colocacao?: SortOrder
    premioColocacao?: SortOrder
    artilharia?: SortOrder
    premioArtilharia?: SortOrder
    vitorias?: SortOrder
    premioVitorias?: SortOrder
    empates?: SortOrder
    premioEmpates?: SortOrder
    gols?: SortOrder
    premioGols?: SortOrder
    total?: SortOrder
    posicaoDefezaMenosVazada?: SortOrder
    premioDefezaMenosVazada?: SortOrder
    golsTomados?: SortOrder
    jogos?: SortOrder
    idTabelaResultados?: SortOrder
  }

  export type ResultadosSumOrderByAggregateInput = {
    premioColocacao?: SortOrder
    premioArtilharia?: SortOrder
    vitorias?: SortOrder
    premioVitorias?: SortOrder
    empates?: SortOrder
    premioEmpates?: SortOrder
    gols?: SortOrder
    premioGols?: SortOrder
    total?: SortOrder
    premioDefezaMenosVazada?: SortOrder
    golsTomados?: SortOrder
    jogos?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type ResultadosListRelationFilter = {
    every?: ResultadosWhereInput
    some?: ResultadosWhereInput
    none?: ResultadosWhereInput
  }

  export type ResultadosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TabelaDeResultadosCountOrderByAggregateInput = {
    id?: SortOrder
    idDoCampeonato?: SortOrder
    idDoTorneio?: SortOrder
    data?: SortOrder
    dataDeInicio?: SortOrder
  }

  export type TabelaDeResultadosMaxOrderByAggregateInput = {
    id?: SortOrder
    idDoCampeonato?: SortOrder
    idDoTorneio?: SortOrder
    data?: SortOrder
    dataDeInicio?: SortOrder
  }

  export type TabelaDeResultadosMinOrderByAggregateInput = {
    id?: SortOrder
    idDoCampeonato?: SortOrder
    idDoTorneio?: SortOrder
    data?: SortOrder
    dataDeInicio?: SortOrder
  }

  export type TorneioCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<TorneioCreateWithoutUsuarioInput, TorneioUncheckedCreateWithoutUsuarioInput> | TorneioCreateWithoutUsuarioInput[] | TorneioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TorneioCreateOrConnectWithoutUsuarioInput | TorneioCreateOrConnectWithoutUsuarioInput[]
    createMany?: TorneioCreateManyUsuarioInputEnvelope
    connect?: TorneioWhereUniqueInput | TorneioWhereUniqueInput[]
  }

  export type TorneioUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<TorneioCreateWithoutUsuarioInput, TorneioUncheckedCreateWithoutUsuarioInput> | TorneioCreateWithoutUsuarioInput[] | TorneioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TorneioCreateOrConnectWithoutUsuarioInput | TorneioCreateOrConnectWithoutUsuarioInput[]
    createMany?: TorneioCreateManyUsuarioInputEnvelope
    connect?: TorneioWhereUniqueInput | TorneioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type TorneioUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<TorneioCreateWithoutUsuarioInput, TorneioUncheckedCreateWithoutUsuarioInput> | TorneioCreateWithoutUsuarioInput[] | TorneioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TorneioCreateOrConnectWithoutUsuarioInput | TorneioCreateOrConnectWithoutUsuarioInput[]
    upsert?: TorneioUpsertWithWhereUniqueWithoutUsuarioInput | TorneioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: TorneioCreateManyUsuarioInputEnvelope
    set?: TorneioWhereUniqueInput | TorneioWhereUniqueInput[]
    disconnect?: TorneioWhereUniqueInput | TorneioWhereUniqueInput[]
    delete?: TorneioWhereUniqueInput | TorneioWhereUniqueInput[]
    connect?: TorneioWhereUniqueInput | TorneioWhereUniqueInput[]
    update?: TorneioUpdateWithWhereUniqueWithoutUsuarioInput | TorneioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: TorneioUpdateManyWithWhereWithoutUsuarioInput | TorneioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: TorneioScalarWhereInput | TorneioScalarWhereInput[]
  }

  export type TorneioUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<TorneioCreateWithoutUsuarioInput, TorneioUncheckedCreateWithoutUsuarioInput> | TorneioCreateWithoutUsuarioInput[] | TorneioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TorneioCreateOrConnectWithoutUsuarioInput | TorneioCreateOrConnectWithoutUsuarioInput[]
    upsert?: TorneioUpsertWithWhereUniqueWithoutUsuarioInput | TorneioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: TorneioCreateManyUsuarioInputEnvelope
    set?: TorneioWhereUniqueInput | TorneioWhereUniqueInput[]
    disconnect?: TorneioWhereUniqueInput | TorneioWhereUniqueInput[]
    delete?: TorneioWhereUniqueInput | TorneioWhereUniqueInput[]
    connect?: TorneioWhereUniqueInput | TorneioWhereUniqueInput[]
    update?: TorneioUpdateWithWhereUniqueWithoutUsuarioInput | TorneioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: TorneioUpdateManyWithWhereWithoutUsuarioInput | TorneioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: TorneioScalarWhereInput | TorneioScalarWhereInput[]
  }

  export type ParticipantesCreateNestedManyWithoutTorneioInput = {
    create?: XOR<ParticipantesCreateWithoutTorneioInput, ParticipantesUncheckedCreateWithoutTorneioInput> | ParticipantesCreateWithoutTorneioInput[] | ParticipantesUncheckedCreateWithoutTorneioInput[]
    connectOrCreate?: ParticipantesCreateOrConnectWithoutTorneioInput | ParticipantesCreateOrConnectWithoutTorneioInput[]
    createMany?: ParticipantesCreateManyTorneioInputEnvelope
    connect?: ParticipantesWhereUniqueInput | ParticipantesWhereUniqueInput[]
  }

  export type UsuarioCreateNestedOneWithoutTorneioInput = {
    create?: XOR<UsuarioCreateWithoutTorneioInput, UsuarioUncheckedCreateWithoutTorneioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTorneioInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EstatisticaCreateNestedManyWithoutTorneioInput = {
    create?: XOR<EstatisticaCreateWithoutTorneioInput, EstatisticaUncheckedCreateWithoutTorneioInput> | EstatisticaCreateWithoutTorneioInput[] | EstatisticaUncheckedCreateWithoutTorneioInput[]
    connectOrCreate?: EstatisticaCreateOrConnectWithoutTorneioInput | EstatisticaCreateOrConnectWithoutTorneioInput[]
    createMany?: EstatisticaCreateManyTorneioInputEnvelope
    connect?: EstatisticaWhereUniqueInput | EstatisticaWhereUniqueInput[]
  }

  export type campeonatoCreateNestedManyWithoutTorneioInput = {
    create?: XOR<campeonatoCreateWithoutTorneioInput, campeonatoUncheckedCreateWithoutTorneioInput> | campeonatoCreateWithoutTorneioInput[] | campeonatoUncheckedCreateWithoutTorneioInput[]
    connectOrCreate?: campeonatoCreateOrConnectWithoutTorneioInput | campeonatoCreateOrConnectWithoutTorneioInput[]
    createMany?: campeonatoCreateManyTorneioInputEnvelope
    connect?: campeonatoWhereUniqueInput | campeonatoWhereUniqueInput[]
  }

  export type ParticipantesUncheckedCreateNestedManyWithoutTorneioInput = {
    create?: XOR<ParticipantesCreateWithoutTorneioInput, ParticipantesUncheckedCreateWithoutTorneioInput> | ParticipantesCreateWithoutTorneioInput[] | ParticipantesUncheckedCreateWithoutTorneioInput[]
    connectOrCreate?: ParticipantesCreateOrConnectWithoutTorneioInput | ParticipantesCreateOrConnectWithoutTorneioInput[]
    createMany?: ParticipantesCreateManyTorneioInputEnvelope
    connect?: ParticipantesWhereUniqueInput | ParticipantesWhereUniqueInput[]
  }

  export type EstatisticaUncheckedCreateNestedManyWithoutTorneioInput = {
    create?: XOR<EstatisticaCreateWithoutTorneioInput, EstatisticaUncheckedCreateWithoutTorneioInput> | EstatisticaCreateWithoutTorneioInput[] | EstatisticaUncheckedCreateWithoutTorneioInput[]
    connectOrCreate?: EstatisticaCreateOrConnectWithoutTorneioInput | EstatisticaCreateOrConnectWithoutTorneioInput[]
    createMany?: EstatisticaCreateManyTorneioInputEnvelope
    connect?: EstatisticaWhereUniqueInput | EstatisticaWhereUniqueInput[]
  }

  export type campeonatoUncheckedCreateNestedManyWithoutTorneioInput = {
    create?: XOR<campeonatoCreateWithoutTorneioInput, campeonatoUncheckedCreateWithoutTorneioInput> | campeonatoCreateWithoutTorneioInput[] | campeonatoUncheckedCreateWithoutTorneioInput[]
    connectOrCreate?: campeonatoCreateOrConnectWithoutTorneioInput | campeonatoCreateOrConnectWithoutTorneioInput[]
    createMany?: campeonatoCreateManyTorneioInputEnvelope
    connect?: campeonatoWhereUniqueInput | campeonatoWhereUniqueInput[]
  }

  export type ParticipantesUpdateManyWithoutTorneioNestedInput = {
    create?: XOR<ParticipantesCreateWithoutTorneioInput, ParticipantesUncheckedCreateWithoutTorneioInput> | ParticipantesCreateWithoutTorneioInput[] | ParticipantesUncheckedCreateWithoutTorneioInput[]
    connectOrCreate?: ParticipantesCreateOrConnectWithoutTorneioInput | ParticipantesCreateOrConnectWithoutTorneioInput[]
    upsert?: ParticipantesUpsertWithWhereUniqueWithoutTorneioInput | ParticipantesUpsertWithWhereUniqueWithoutTorneioInput[]
    createMany?: ParticipantesCreateManyTorneioInputEnvelope
    set?: ParticipantesWhereUniqueInput | ParticipantesWhereUniqueInput[]
    disconnect?: ParticipantesWhereUniqueInput | ParticipantesWhereUniqueInput[]
    delete?: ParticipantesWhereUniqueInput | ParticipantesWhereUniqueInput[]
    connect?: ParticipantesWhereUniqueInput | ParticipantesWhereUniqueInput[]
    update?: ParticipantesUpdateWithWhereUniqueWithoutTorneioInput | ParticipantesUpdateWithWhereUniqueWithoutTorneioInput[]
    updateMany?: ParticipantesUpdateManyWithWhereWithoutTorneioInput | ParticipantesUpdateManyWithWhereWithoutTorneioInput[]
    deleteMany?: ParticipantesScalarWhereInput | ParticipantesScalarWhereInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutTorneioNestedInput = {
    create?: XOR<UsuarioCreateWithoutTorneioInput, UsuarioUncheckedCreateWithoutTorneioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTorneioInput
    upsert?: UsuarioUpsertWithoutTorneioInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutTorneioInput, UsuarioUpdateWithoutTorneioInput>, UsuarioUncheckedUpdateWithoutTorneioInput>
  }

  export type EstatisticaUpdateManyWithoutTorneioNestedInput = {
    create?: XOR<EstatisticaCreateWithoutTorneioInput, EstatisticaUncheckedCreateWithoutTorneioInput> | EstatisticaCreateWithoutTorneioInput[] | EstatisticaUncheckedCreateWithoutTorneioInput[]
    connectOrCreate?: EstatisticaCreateOrConnectWithoutTorneioInput | EstatisticaCreateOrConnectWithoutTorneioInput[]
    upsert?: EstatisticaUpsertWithWhereUniqueWithoutTorneioInput | EstatisticaUpsertWithWhereUniqueWithoutTorneioInput[]
    createMany?: EstatisticaCreateManyTorneioInputEnvelope
    set?: EstatisticaWhereUniqueInput | EstatisticaWhereUniqueInput[]
    disconnect?: EstatisticaWhereUniqueInput | EstatisticaWhereUniqueInput[]
    delete?: EstatisticaWhereUniqueInput | EstatisticaWhereUniqueInput[]
    connect?: EstatisticaWhereUniqueInput | EstatisticaWhereUniqueInput[]
    update?: EstatisticaUpdateWithWhereUniqueWithoutTorneioInput | EstatisticaUpdateWithWhereUniqueWithoutTorneioInput[]
    updateMany?: EstatisticaUpdateManyWithWhereWithoutTorneioInput | EstatisticaUpdateManyWithWhereWithoutTorneioInput[]
    deleteMany?: EstatisticaScalarWhereInput | EstatisticaScalarWhereInput[]
  }

  export type campeonatoUpdateManyWithoutTorneioNestedInput = {
    create?: XOR<campeonatoCreateWithoutTorneioInput, campeonatoUncheckedCreateWithoutTorneioInput> | campeonatoCreateWithoutTorneioInput[] | campeonatoUncheckedCreateWithoutTorneioInput[]
    connectOrCreate?: campeonatoCreateOrConnectWithoutTorneioInput | campeonatoCreateOrConnectWithoutTorneioInput[]
    upsert?: campeonatoUpsertWithWhereUniqueWithoutTorneioInput | campeonatoUpsertWithWhereUniqueWithoutTorneioInput[]
    createMany?: campeonatoCreateManyTorneioInputEnvelope
    set?: campeonatoWhereUniqueInput | campeonatoWhereUniqueInput[]
    disconnect?: campeonatoWhereUniqueInput | campeonatoWhereUniqueInput[]
    delete?: campeonatoWhereUniqueInput | campeonatoWhereUniqueInput[]
    connect?: campeonatoWhereUniqueInput | campeonatoWhereUniqueInput[]
    update?: campeonatoUpdateWithWhereUniqueWithoutTorneioInput | campeonatoUpdateWithWhereUniqueWithoutTorneioInput[]
    updateMany?: campeonatoUpdateManyWithWhereWithoutTorneioInput | campeonatoUpdateManyWithWhereWithoutTorneioInput[]
    deleteMany?: campeonatoScalarWhereInput | campeonatoScalarWhereInput[]
  }

  export type ParticipantesUncheckedUpdateManyWithoutTorneioNestedInput = {
    create?: XOR<ParticipantesCreateWithoutTorneioInput, ParticipantesUncheckedCreateWithoutTorneioInput> | ParticipantesCreateWithoutTorneioInput[] | ParticipantesUncheckedCreateWithoutTorneioInput[]
    connectOrCreate?: ParticipantesCreateOrConnectWithoutTorneioInput | ParticipantesCreateOrConnectWithoutTorneioInput[]
    upsert?: ParticipantesUpsertWithWhereUniqueWithoutTorneioInput | ParticipantesUpsertWithWhereUniqueWithoutTorneioInput[]
    createMany?: ParticipantesCreateManyTorneioInputEnvelope
    set?: ParticipantesWhereUniqueInput | ParticipantesWhereUniqueInput[]
    disconnect?: ParticipantesWhereUniqueInput | ParticipantesWhereUniqueInput[]
    delete?: ParticipantesWhereUniqueInput | ParticipantesWhereUniqueInput[]
    connect?: ParticipantesWhereUniqueInput | ParticipantesWhereUniqueInput[]
    update?: ParticipantesUpdateWithWhereUniqueWithoutTorneioInput | ParticipantesUpdateWithWhereUniqueWithoutTorneioInput[]
    updateMany?: ParticipantesUpdateManyWithWhereWithoutTorneioInput | ParticipantesUpdateManyWithWhereWithoutTorneioInput[]
    deleteMany?: ParticipantesScalarWhereInput | ParticipantesScalarWhereInput[]
  }

  export type EstatisticaUncheckedUpdateManyWithoutTorneioNestedInput = {
    create?: XOR<EstatisticaCreateWithoutTorneioInput, EstatisticaUncheckedCreateWithoutTorneioInput> | EstatisticaCreateWithoutTorneioInput[] | EstatisticaUncheckedCreateWithoutTorneioInput[]
    connectOrCreate?: EstatisticaCreateOrConnectWithoutTorneioInput | EstatisticaCreateOrConnectWithoutTorneioInput[]
    upsert?: EstatisticaUpsertWithWhereUniqueWithoutTorneioInput | EstatisticaUpsertWithWhereUniqueWithoutTorneioInput[]
    createMany?: EstatisticaCreateManyTorneioInputEnvelope
    set?: EstatisticaWhereUniqueInput | EstatisticaWhereUniqueInput[]
    disconnect?: EstatisticaWhereUniqueInput | EstatisticaWhereUniqueInput[]
    delete?: EstatisticaWhereUniqueInput | EstatisticaWhereUniqueInput[]
    connect?: EstatisticaWhereUniqueInput | EstatisticaWhereUniqueInput[]
    update?: EstatisticaUpdateWithWhereUniqueWithoutTorneioInput | EstatisticaUpdateWithWhereUniqueWithoutTorneioInput[]
    updateMany?: EstatisticaUpdateManyWithWhereWithoutTorneioInput | EstatisticaUpdateManyWithWhereWithoutTorneioInput[]
    deleteMany?: EstatisticaScalarWhereInput | EstatisticaScalarWhereInput[]
  }

  export type campeonatoUncheckedUpdateManyWithoutTorneioNestedInput = {
    create?: XOR<campeonatoCreateWithoutTorneioInput, campeonatoUncheckedCreateWithoutTorneioInput> | campeonatoCreateWithoutTorneioInput[] | campeonatoUncheckedCreateWithoutTorneioInput[]
    connectOrCreate?: campeonatoCreateOrConnectWithoutTorneioInput | campeonatoCreateOrConnectWithoutTorneioInput[]
    upsert?: campeonatoUpsertWithWhereUniqueWithoutTorneioInput | campeonatoUpsertWithWhereUniqueWithoutTorneioInput[]
    createMany?: campeonatoCreateManyTorneioInputEnvelope
    set?: campeonatoWhereUniqueInput | campeonatoWhereUniqueInput[]
    disconnect?: campeonatoWhereUniqueInput | campeonatoWhereUniqueInput[]
    delete?: campeonatoWhereUniqueInput | campeonatoWhereUniqueInput[]
    connect?: campeonatoWhereUniqueInput | campeonatoWhereUniqueInput[]
    update?: campeonatoUpdateWithWhereUniqueWithoutTorneioInput | campeonatoUpdateWithWhereUniqueWithoutTorneioInput[]
    updateMany?: campeonatoUpdateManyWithWhereWithoutTorneioInput | campeonatoUpdateManyWithWhereWithoutTorneioInput[]
    deleteMany?: campeonatoScalarWhereInput | campeonatoScalarWhereInput[]
  }

  export type TorneioCreateNestedOneWithoutParticipantesInput = {
    create?: XOR<TorneioCreateWithoutParticipantesInput, TorneioUncheckedCreateWithoutParticipantesInput>
    connectOrCreate?: TorneioCreateOrConnectWithoutParticipantesInput
    connect?: TorneioWhereUniqueInput
  }

  export type JogadoresCreateNestedManyWithoutParticipantesInput = {
    create?: XOR<JogadoresCreateWithoutParticipantesInput, JogadoresUncheckedCreateWithoutParticipantesInput> | JogadoresCreateWithoutParticipantesInput[] | JogadoresUncheckedCreateWithoutParticipantesInput[]
    connectOrCreate?: JogadoresCreateOrConnectWithoutParticipantesInput | JogadoresCreateOrConnectWithoutParticipantesInput[]
    createMany?: JogadoresCreateManyParticipantesInputEnvelope
    connect?: JogadoresWhereUniqueInput | JogadoresWhereUniqueInput[]
  }

  export type JogadoresUncheckedCreateNestedManyWithoutParticipantesInput = {
    create?: XOR<JogadoresCreateWithoutParticipantesInput, JogadoresUncheckedCreateWithoutParticipantesInput> | JogadoresCreateWithoutParticipantesInput[] | JogadoresUncheckedCreateWithoutParticipantesInput[]
    connectOrCreate?: JogadoresCreateOrConnectWithoutParticipantesInput | JogadoresCreateOrConnectWithoutParticipantesInput[]
    createMany?: JogadoresCreateManyParticipantesInputEnvelope
    connect?: JogadoresWhereUniqueInput | JogadoresWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type TorneioUpdateOneRequiredWithoutParticipantesNestedInput = {
    create?: XOR<TorneioCreateWithoutParticipantesInput, TorneioUncheckedCreateWithoutParticipantesInput>
    connectOrCreate?: TorneioCreateOrConnectWithoutParticipantesInput
    upsert?: TorneioUpsertWithoutParticipantesInput
    connect?: TorneioWhereUniqueInput
    update?: XOR<XOR<TorneioUpdateToOneWithWhereWithoutParticipantesInput, TorneioUpdateWithoutParticipantesInput>, TorneioUncheckedUpdateWithoutParticipantesInput>
  }

  export type JogadoresUpdateManyWithoutParticipantesNestedInput = {
    create?: XOR<JogadoresCreateWithoutParticipantesInput, JogadoresUncheckedCreateWithoutParticipantesInput> | JogadoresCreateWithoutParticipantesInput[] | JogadoresUncheckedCreateWithoutParticipantesInput[]
    connectOrCreate?: JogadoresCreateOrConnectWithoutParticipantesInput | JogadoresCreateOrConnectWithoutParticipantesInput[]
    upsert?: JogadoresUpsertWithWhereUniqueWithoutParticipantesInput | JogadoresUpsertWithWhereUniqueWithoutParticipantesInput[]
    createMany?: JogadoresCreateManyParticipantesInputEnvelope
    set?: JogadoresWhereUniqueInput | JogadoresWhereUniqueInput[]
    disconnect?: JogadoresWhereUniqueInput | JogadoresWhereUniqueInput[]
    delete?: JogadoresWhereUniqueInput | JogadoresWhereUniqueInput[]
    connect?: JogadoresWhereUniqueInput | JogadoresWhereUniqueInput[]
    update?: JogadoresUpdateWithWhereUniqueWithoutParticipantesInput | JogadoresUpdateWithWhereUniqueWithoutParticipantesInput[]
    updateMany?: JogadoresUpdateManyWithWhereWithoutParticipantesInput | JogadoresUpdateManyWithWhereWithoutParticipantesInput[]
    deleteMany?: JogadoresScalarWhereInput | JogadoresScalarWhereInput[]
  }

  export type JogadoresUncheckedUpdateManyWithoutParticipantesNestedInput = {
    create?: XOR<JogadoresCreateWithoutParticipantesInput, JogadoresUncheckedCreateWithoutParticipantesInput> | JogadoresCreateWithoutParticipantesInput[] | JogadoresUncheckedCreateWithoutParticipantesInput[]
    connectOrCreate?: JogadoresCreateOrConnectWithoutParticipantesInput | JogadoresCreateOrConnectWithoutParticipantesInput[]
    upsert?: JogadoresUpsertWithWhereUniqueWithoutParticipantesInput | JogadoresUpsertWithWhereUniqueWithoutParticipantesInput[]
    createMany?: JogadoresCreateManyParticipantesInputEnvelope
    set?: JogadoresWhereUniqueInput | JogadoresWhereUniqueInput[]
    disconnect?: JogadoresWhereUniqueInput | JogadoresWhereUniqueInput[]
    delete?: JogadoresWhereUniqueInput | JogadoresWhereUniqueInput[]
    connect?: JogadoresWhereUniqueInput | JogadoresWhereUniqueInput[]
    update?: JogadoresUpdateWithWhereUniqueWithoutParticipantesInput | JogadoresUpdateWithWhereUniqueWithoutParticipantesInput[]
    updateMany?: JogadoresUpdateManyWithWhereWithoutParticipantesInput | JogadoresUpdateManyWithWhereWithoutParticipantesInput[]
    deleteMany?: JogadoresScalarWhereInput | JogadoresScalarWhereInput[]
  }

  export type PosicaoNoCampinhoCreateNestedManyWithoutJogadorInput = {
    create?: XOR<PosicaoNoCampinhoCreateWithoutJogadorInput, PosicaoNoCampinhoUncheckedCreateWithoutJogadorInput> | PosicaoNoCampinhoCreateWithoutJogadorInput[] | PosicaoNoCampinhoUncheckedCreateWithoutJogadorInput[]
    connectOrCreate?: PosicaoNoCampinhoCreateOrConnectWithoutJogadorInput | PosicaoNoCampinhoCreateOrConnectWithoutJogadorInput[]
    createMany?: PosicaoNoCampinhoCreateManyJogadorInputEnvelope
    connect?: PosicaoNoCampinhoWhereUniqueInput | PosicaoNoCampinhoWhereUniqueInput[]
  }

  export type ParticipantesCreateNestedOneWithoutJogadoresInput = {
    create?: XOR<ParticipantesCreateWithoutJogadoresInput, ParticipantesUncheckedCreateWithoutJogadoresInput>
    connectOrCreate?: ParticipantesCreateOrConnectWithoutJogadoresInput
    connect?: ParticipantesWhereUniqueInput
  }

  export type PosicaoNoCampinhoUncheckedCreateNestedManyWithoutJogadorInput = {
    create?: XOR<PosicaoNoCampinhoCreateWithoutJogadorInput, PosicaoNoCampinhoUncheckedCreateWithoutJogadorInput> | PosicaoNoCampinhoCreateWithoutJogadorInput[] | PosicaoNoCampinhoUncheckedCreateWithoutJogadorInput[]
    connectOrCreate?: PosicaoNoCampinhoCreateOrConnectWithoutJogadorInput | PosicaoNoCampinhoCreateOrConnectWithoutJogadorInput[]
    createMany?: PosicaoNoCampinhoCreateManyJogadorInputEnvelope
    connect?: PosicaoNoCampinhoWhereUniqueInput | PosicaoNoCampinhoWhereUniqueInput[]
  }

  export type PosicaoNoCampinhoUpdateManyWithoutJogadorNestedInput = {
    create?: XOR<PosicaoNoCampinhoCreateWithoutJogadorInput, PosicaoNoCampinhoUncheckedCreateWithoutJogadorInput> | PosicaoNoCampinhoCreateWithoutJogadorInput[] | PosicaoNoCampinhoUncheckedCreateWithoutJogadorInput[]
    connectOrCreate?: PosicaoNoCampinhoCreateOrConnectWithoutJogadorInput | PosicaoNoCampinhoCreateOrConnectWithoutJogadorInput[]
    upsert?: PosicaoNoCampinhoUpsertWithWhereUniqueWithoutJogadorInput | PosicaoNoCampinhoUpsertWithWhereUniqueWithoutJogadorInput[]
    createMany?: PosicaoNoCampinhoCreateManyJogadorInputEnvelope
    set?: PosicaoNoCampinhoWhereUniqueInput | PosicaoNoCampinhoWhereUniqueInput[]
    disconnect?: PosicaoNoCampinhoWhereUniqueInput | PosicaoNoCampinhoWhereUniqueInput[]
    delete?: PosicaoNoCampinhoWhereUniqueInput | PosicaoNoCampinhoWhereUniqueInput[]
    connect?: PosicaoNoCampinhoWhereUniqueInput | PosicaoNoCampinhoWhereUniqueInput[]
    update?: PosicaoNoCampinhoUpdateWithWhereUniqueWithoutJogadorInput | PosicaoNoCampinhoUpdateWithWhereUniqueWithoutJogadorInput[]
    updateMany?: PosicaoNoCampinhoUpdateManyWithWhereWithoutJogadorInput | PosicaoNoCampinhoUpdateManyWithWhereWithoutJogadorInput[]
    deleteMany?: PosicaoNoCampinhoScalarWhereInput | PosicaoNoCampinhoScalarWhereInput[]
  }

  export type ParticipantesUpdateOneRequiredWithoutJogadoresNestedInput = {
    create?: XOR<ParticipantesCreateWithoutJogadoresInput, ParticipantesUncheckedCreateWithoutJogadoresInput>
    connectOrCreate?: ParticipantesCreateOrConnectWithoutJogadoresInput
    upsert?: ParticipantesUpsertWithoutJogadoresInput
    connect?: ParticipantesWhereUniqueInput
    update?: XOR<XOR<ParticipantesUpdateToOneWithWhereWithoutJogadoresInput, ParticipantesUpdateWithoutJogadoresInput>, ParticipantesUncheckedUpdateWithoutJogadoresInput>
  }

  export type PosicaoNoCampinhoUncheckedUpdateManyWithoutJogadorNestedInput = {
    create?: XOR<PosicaoNoCampinhoCreateWithoutJogadorInput, PosicaoNoCampinhoUncheckedCreateWithoutJogadorInput> | PosicaoNoCampinhoCreateWithoutJogadorInput[] | PosicaoNoCampinhoUncheckedCreateWithoutJogadorInput[]
    connectOrCreate?: PosicaoNoCampinhoCreateOrConnectWithoutJogadorInput | PosicaoNoCampinhoCreateOrConnectWithoutJogadorInput[]
    upsert?: PosicaoNoCampinhoUpsertWithWhereUniqueWithoutJogadorInput | PosicaoNoCampinhoUpsertWithWhereUniqueWithoutJogadorInput[]
    createMany?: PosicaoNoCampinhoCreateManyJogadorInputEnvelope
    set?: PosicaoNoCampinhoWhereUniqueInput | PosicaoNoCampinhoWhereUniqueInput[]
    disconnect?: PosicaoNoCampinhoWhereUniqueInput | PosicaoNoCampinhoWhereUniqueInput[]
    delete?: PosicaoNoCampinhoWhereUniqueInput | PosicaoNoCampinhoWhereUniqueInput[]
    connect?: PosicaoNoCampinhoWhereUniqueInput | PosicaoNoCampinhoWhereUniqueInput[]
    update?: PosicaoNoCampinhoUpdateWithWhereUniqueWithoutJogadorInput | PosicaoNoCampinhoUpdateWithWhereUniqueWithoutJogadorInput[]
    updateMany?: PosicaoNoCampinhoUpdateManyWithWhereWithoutJogadorInput | PosicaoNoCampinhoUpdateManyWithWhereWithoutJogadorInput[]
    deleteMany?: PosicaoNoCampinhoScalarWhereInput | PosicaoNoCampinhoScalarWhereInput[]
  }

  export type EstatisticaCreateassistentesInput = {
    set: string[]
  }

  export type EstatisticaCreateartilheirosInput = {
    set: string[]
  }

  export type TorneioCreateNestedOneWithoutEstatisticaInput = {
    create?: XOR<TorneioCreateWithoutEstatisticaInput, TorneioUncheckedCreateWithoutEstatisticaInput>
    connectOrCreate?: TorneioCreateOrConnectWithoutEstatisticaInput
    connect?: TorneioWhereUniqueInput
  }

  export type EstatisticaUpdateassistentesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EstatisticaUpdateartilheirosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type TorneioUpdateOneRequiredWithoutEstatisticaNestedInput = {
    create?: XOR<TorneioCreateWithoutEstatisticaInput, TorneioUncheckedCreateWithoutEstatisticaInput>
    connectOrCreate?: TorneioCreateOrConnectWithoutEstatisticaInput
    upsert?: TorneioUpsertWithoutEstatisticaInput
    connect?: TorneioWhereUniqueInput
    update?: XOR<XOR<TorneioUpdateToOneWithWhereWithoutEstatisticaInput, TorneioUpdateWithoutEstatisticaInput>, TorneioUncheckedUpdateWithoutEstatisticaInput>
  }

  export type JogadoresCreateNestedOneWithoutPosicaoNoCampinhoInput = {
    create?: XOR<JogadoresCreateWithoutPosicaoNoCampinhoInput, JogadoresUncheckedCreateWithoutPosicaoNoCampinhoInput>
    connectOrCreate?: JogadoresCreateOrConnectWithoutPosicaoNoCampinhoInput
    connect?: JogadoresWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type JogadoresUpdateOneRequiredWithoutPosicaoNoCampinhoNestedInput = {
    create?: XOR<JogadoresCreateWithoutPosicaoNoCampinhoInput, JogadoresUncheckedCreateWithoutPosicaoNoCampinhoInput>
    connectOrCreate?: JogadoresCreateOrConnectWithoutPosicaoNoCampinhoInput
    upsert?: JogadoresUpsertWithoutPosicaoNoCampinhoInput
    connect?: JogadoresWhereUniqueInput
    update?: XOR<XOR<JogadoresUpdateToOneWithWhereWithoutPosicaoNoCampinhoInput, JogadoresUpdateWithoutPosicaoNoCampinhoInput>, JogadoresUncheckedUpdateWithoutPosicaoNoCampinhoInput>
  }

  export type RodadaCreateNestedManyWithoutCampeonatoInput = {
    create?: XOR<RodadaCreateWithoutCampeonatoInput, RodadaUncheckedCreateWithoutCampeonatoInput> | RodadaCreateWithoutCampeonatoInput[] | RodadaUncheckedCreateWithoutCampeonatoInput[]
    connectOrCreate?: RodadaCreateOrConnectWithoutCampeonatoInput | RodadaCreateOrConnectWithoutCampeonatoInput[]
    createMany?: RodadaCreateManyCampeonatoInputEnvelope
    connect?: RodadaWhereUniqueInput | RodadaWhereUniqueInput[]
  }

  export type TorneioCreateNestedOneWithoutCampeonatoInput = {
    create?: XOR<TorneioCreateWithoutCampeonatoInput, TorneioUncheckedCreateWithoutCampeonatoInput>
    connectOrCreate?: TorneioCreateOrConnectWithoutCampeonatoInput
    connect?: TorneioWhereUniqueInput
  }

  export type RodadaUncheckedCreateNestedManyWithoutCampeonatoInput = {
    create?: XOR<RodadaCreateWithoutCampeonatoInput, RodadaUncheckedCreateWithoutCampeonatoInput> | RodadaCreateWithoutCampeonatoInput[] | RodadaUncheckedCreateWithoutCampeonatoInput[]
    connectOrCreate?: RodadaCreateOrConnectWithoutCampeonatoInput | RodadaCreateOrConnectWithoutCampeonatoInput[]
    createMany?: RodadaCreateManyCampeonatoInputEnvelope
    connect?: RodadaWhereUniqueInput | RodadaWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RodadaUpdateManyWithoutCampeonatoNestedInput = {
    create?: XOR<RodadaCreateWithoutCampeonatoInput, RodadaUncheckedCreateWithoutCampeonatoInput> | RodadaCreateWithoutCampeonatoInput[] | RodadaUncheckedCreateWithoutCampeonatoInput[]
    connectOrCreate?: RodadaCreateOrConnectWithoutCampeonatoInput | RodadaCreateOrConnectWithoutCampeonatoInput[]
    upsert?: RodadaUpsertWithWhereUniqueWithoutCampeonatoInput | RodadaUpsertWithWhereUniqueWithoutCampeonatoInput[]
    createMany?: RodadaCreateManyCampeonatoInputEnvelope
    set?: RodadaWhereUniqueInput | RodadaWhereUniqueInput[]
    disconnect?: RodadaWhereUniqueInput | RodadaWhereUniqueInput[]
    delete?: RodadaWhereUniqueInput | RodadaWhereUniqueInput[]
    connect?: RodadaWhereUniqueInput | RodadaWhereUniqueInput[]
    update?: RodadaUpdateWithWhereUniqueWithoutCampeonatoInput | RodadaUpdateWithWhereUniqueWithoutCampeonatoInput[]
    updateMany?: RodadaUpdateManyWithWhereWithoutCampeonatoInput | RodadaUpdateManyWithWhereWithoutCampeonatoInput[]
    deleteMany?: RodadaScalarWhereInput | RodadaScalarWhereInput[]
  }

  export type TorneioUpdateOneRequiredWithoutCampeonatoNestedInput = {
    create?: XOR<TorneioCreateWithoutCampeonatoInput, TorneioUncheckedCreateWithoutCampeonatoInput>
    connectOrCreate?: TorneioCreateOrConnectWithoutCampeonatoInput
    upsert?: TorneioUpsertWithoutCampeonatoInput
    connect?: TorneioWhereUniqueInput
    update?: XOR<XOR<TorneioUpdateToOneWithWhereWithoutCampeonatoInput, TorneioUpdateWithoutCampeonatoInput>, TorneioUncheckedUpdateWithoutCampeonatoInput>
  }

  export type RodadaUncheckedUpdateManyWithoutCampeonatoNestedInput = {
    create?: XOR<RodadaCreateWithoutCampeonatoInput, RodadaUncheckedCreateWithoutCampeonatoInput> | RodadaCreateWithoutCampeonatoInput[] | RodadaUncheckedCreateWithoutCampeonatoInput[]
    connectOrCreate?: RodadaCreateOrConnectWithoutCampeonatoInput | RodadaCreateOrConnectWithoutCampeonatoInput[]
    upsert?: RodadaUpsertWithWhereUniqueWithoutCampeonatoInput | RodadaUpsertWithWhereUniqueWithoutCampeonatoInput[]
    createMany?: RodadaCreateManyCampeonatoInputEnvelope
    set?: RodadaWhereUniqueInput | RodadaWhereUniqueInput[]
    disconnect?: RodadaWhereUniqueInput | RodadaWhereUniqueInput[]
    delete?: RodadaWhereUniqueInput | RodadaWhereUniqueInput[]
    connect?: RodadaWhereUniqueInput | RodadaWhereUniqueInput[]
    update?: RodadaUpdateWithWhereUniqueWithoutCampeonatoInput | RodadaUpdateWithWhereUniqueWithoutCampeonatoInput[]
    updateMany?: RodadaUpdateManyWithWhereWithoutCampeonatoInput | RodadaUpdateManyWithWhereWithoutCampeonatoInput[]
    deleteMany?: RodadaScalarWhereInput | RodadaScalarWhereInput[]
  }

  export type TimesDaRodadaCreateNestedManyWithoutMandanteInput = {
    create?: XOR<TimesDaRodadaCreateWithoutMandanteInput, TimesDaRodadaUncheckedCreateWithoutMandanteInput> | TimesDaRodadaCreateWithoutMandanteInput[] | TimesDaRodadaUncheckedCreateWithoutMandanteInput[]
    connectOrCreate?: TimesDaRodadaCreateOrConnectWithoutMandanteInput | TimesDaRodadaCreateOrConnectWithoutMandanteInput[]
    connect?: TimesDaRodadaWhereUniqueInput | TimesDaRodadaWhereUniqueInput[]
  }

  export type TimesDaRodadaCreateNestedManyWithoutVisitanteInput = {
    create?: XOR<TimesDaRodadaCreateWithoutVisitanteInput, TimesDaRodadaUncheckedCreateWithoutVisitanteInput> | TimesDaRodadaCreateWithoutVisitanteInput[] | TimesDaRodadaUncheckedCreateWithoutVisitanteInput[]
    connectOrCreate?: TimesDaRodadaCreateOrConnectWithoutVisitanteInput | TimesDaRodadaCreateOrConnectWithoutVisitanteInput[]
    connect?: TimesDaRodadaWhereUniqueInput | TimesDaRodadaWhereUniqueInput[]
  }

  export type campeonatoCreateNestedOneWithoutRodadaInput = {
    create?: XOR<campeonatoCreateWithoutRodadaInput, campeonatoUncheckedCreateWithoutRodadaInput>
    connectOrCreate?: campeonatoCreateOrConnectWithoutRodadaInput
    connect?: campeonatoWhereUniqueInput
  }

  export type RodadaCreateidDoMandanteInput = {
    set: string[]
  }

  export type RodadaCreateidDoVisitanteInput = {
    set: string[]
  }

  export type TimesDaRodadaUncheckedCreateNestedManyWithoutMandanteInput = {
    create?: XOR<TimesDaRodadaCreateWithoutMandanteInput, TimesDaRodadaUncheckedCreateWithoutMandanteInput> | TimesDaRodadaCreateWithoutMandanteInput[] | TimesDaRodadaUncheckedCreateWithoutMandanteInput[]
    connectOrCreate?: TimesDaRodadaCreateOrConnectWithoutMandanteInput | TimesDaRodadaCreateOrConnectWithoutMandanteInput[]
    connect?: TimesDaRodadaWhereUniqueInput | TimesDaRodadaWhereUniqueInput[]
  }

  export type TimesDaRodadaUncheckedCreateNestedManyWithoutVisitanteInput = {
    create?: XOR<TimesDaRodadaCreateWithoutVisitanteInput, TimesDaRodadaUncheckedCreateWithoutVisitanteInput> | TimesDaRodadaCreateWithoutVisitanteInput[] | TimesDaRodadaUncheckedCreateWithoutVisitanteInput[]
    connectOrCreate?: TimesDaRodadaCreateOrConnectWithoutVisitanteInput | TimesDaRodadaCreateOrConnectWithoutVisitanteInput[]
    connect?: TimesDaRodadaWhereUniqueInput | TimesDaRodadaWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TimesDaRodadaUpdateManyWithoutMandanteNestedInput = {
    create?: XOR<TimesDaRodadaCreateWithoutMandanteInput, TimesDaRodadaUncheckedCreateWithoutMandanteInput> | TimesDaRodadaCreateWithoutMandanteInput[] | TimesDaRodadaUncheckedCreateWithoutMandanteInput[]
    connectOrCreate?: TimesDaRodadaCreateOrConnectWithoutMandanteInput | TimesDaRodadaCreateOrConnectWithoutMandanteInput[]
    upsert?: TimesDaRodadaUpsertWithWhereUniqueWithoutMandanteInput | TimesDaRodadaUpsertWithWhereUniqueWithoutMandanteInput[]
    set?: TimesDaRodadaWhereUniqueInput | TimesDaRodadaWhereUniqueInput[]
    disconnect?: TimesDaRodadaWhereUniqueInput | TimesDaRodadaWhereUniqueInput[]
    delete?: TimesDaRodadaWhereUniqueInput | TimesDaRodadaWhereUniqueInput[]
    connect?: TimesDaRodadaWhereUniqueInput | TimesDaRodadaWhereUniqueInput[]
    update?: TimesDaRodadaUpdateWithWhereUniqueWithoutMandanteInput | TimesDaRodadaUpdateWithWhereUniqueWithoutMandanteInput[]
    updateMany?: TimesDaRodadaUpdateManyWithWhereWithoutMandanteInput | TimesDaRodadaUpdateManyWithWhereWithoutMandanteInput[]
    deleteMany?: TimesDaRodadaScalarWhereInput | TimesDaRodadaScalarWhereInput[]
  }

  export type TimesDaRodadaUpdateManyWithoutVisitanteNestedInput = {
    create?: XOR<TimesDaRodadaCreateWithoutVisitanteInput, TimesDaRodadaUncheckedCreateWithoutVisitanteInput> | TimesDaRodadaCreateWithoutVisitanteInput[] | TimesDaRodadaUncheckedCreateWithoutVisitanteInput[]
    connectOrCreate?: TimesDaRodadaCreateOrConnectWithoutVisitanteInput | TimesDaRodadaCreateOrConnectWithoutVisitanteInput[]
    upsert?: TimesDaRodadaUpsertWithWhereUniqueWithoutVisitanteInput | TimesDaRodadaUpsertWithWhereUniqueWithoutVisitanteInput[]
    set?: TimesDaRodadaWhereUniqueInput | TimesDaRodadaWhereUniqueInput[]
    disconnect?: TimesDaRodadaWhereUniqueInput | TimesDaRodadaWhereUniqueInput[]
    delete?: TimesDaRodadaWhereUniqueInput | TimesDaRodadaWhereUniqueInput[]
    connect?: TimesDaRodadaWhereUniqueInput | TimesDaRodadaWhereUniqueInput[]
    update?: TimesDaRodadaUpdateWithWhereUniqueWithoutVisitanteInput | TimesDaRodadaUpdateWithWhereUniqueWithoutVisitanteInput[]
    updateMany?: TimesDaRodadaUpdateManyWithWhereWithoutVisitanteInput | TimesDaRodadaUpdateManyWithWhereWithoutVisitanteInput[]
    deleteMany?: TimesDaRodadaScalarWhereInput | TimesDaRodadaScalarWhereInput[]
  }

  export type campeonatoUpdateOneWithoutRodadaNestedInput = {
    create?: XOR<campeonatoCreateWithoutRodadaInput, campeonatoUncheckedCreateWithoutRodadaInput>
    connectOrCreate?: campeonatoCreateOrConnectWithoutRodadaInput
    upsert?: campeonatoUpsertWithoutRodadaInput
    disconnect?: boolean
    delete?: campeonatoWhereInput | boolean
    connect?: campeonatoWhereUniqueInput
    update?: XOR<XOR<campeonatoUpdateToOneWithWhereWithoutRodadaInput, campeonatoUpdateWithoutRodadaInput>, campeonatoUncheckedUpdateWithoutRodadaInput>
  }

  export type RodadaUpdateidDoMandanteInput = {
    set?: string[]
    push?: string | string[]
  }

  export type RodadaUpdateidDoVisitanteInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TimesDaRodadaUncheckedUpdateManyWithoutMandanteNestedInput = {
    create?: XOR<TimesDaRodadaCreateWithoutMandanteInput, TimesDaRodadaUncheckedCreateWithoutMandanteInput> | TimesDaRodadaCreateWithoutMandanteInput[] | TimesDaRodadaUncheckedCreateWithoutMandanteInput[]
    connectOrCreate?: TimesDaRodadaCreateOrConnectWithoutMandanteInput | TimesDaRodadaCreateOrConnectWithoutMandanteInput[]
    upsert?: TimesDaRodadaUpsertWithWhereUniqueWithoutMandanteInput | TimesDaRodadaUpsertWithWhereUniqueWithoutMandanteInput[]
    set?: TimesDaRodadaWhereUniqueInput | TimesDaRodadaWhereUniqueInput[]
    disconnect?: TimesDaRodadaWhereUniqueInput | TimesDaRodadaWhereUniqueInput[]
    delete?: TimesDaRodadaWhereUniqueInput | TimesDaRodadaWhereUniqueInput[]
    connect?: TimesDaRodadaWhereUniqueInput | TimesDaRodadaWhereUniqueInput[]
    update?: TimesDaRodadaUpdateWithWhereUniqueWithoutMandanteInput | TimesDaRodadaUpdateWithWhereUniqueWithoutMandanteInput[]
    updateMany?: TimesDaRodadaUpdateManyWithWhereWithoutMandanteInput | TimesDaRodadaUpdateManyWithWhereWithoutMandanteInput[]
    deleteMany?: TimesDaRodadaScalarWhereInput | TimesDaRodadaScalarWhereInput[]
  }

  export type TimesDaRodadaUncheckedUpdateManyWithoutVisitanteNestedInput = {
    create?: XOR<TimesDaRodadaCreateWithoutVisitanteInput, TimesDaRodadaUncheckedCreateWithoutVisitanteInput> | TimesDaRodadaCreateWithoutVisitanteInput[] | TimesDaRodadaUncheckedCreateWithoutVisitanteInput[]
    connectOrCreate?: TimesDaRodadaCreateOrConnectWithoutVisitanteInput | TimesDaRodadaCreateOrConnectWithoutVisitanteInput[]
    upsert?: TimesDaRodadaUpsertWithWhereUniqueWithoutVisitanteInput | TimesDaRodadaUpsertWithWhereUniqueWithoutVisitanteInput[]
    set?: TimesDaRodadaWhereUniqueInput | TimesDaRodadaWhereUniqueInput[]
    disconnect?: TimesDaRodadaWhereUniqueInput | TimesDaRodadaWhereUniqueInput[]
    delete?: TimesDaRodadaWhereUniqueInput | TimesDaRodadaWhereUniqueInput[]
    connect?: TimesDaRodadaWhereUniqueInput | TimesDaRodadaWhereUniqueInput[]
    update?: TimesDaRodadaUpdateWithWhereUniqueWithoutVisitanteInput | TimesDaRodadaUpdateWithWhereUniqueWithoutVisitanteInput[]
    updateMany?: TimesDaRodadaUpdateManyWithWhereWithoutVisitanteInput | TimesDaRodadaUpdateManyWithWhereWithoutVisitanteInput[]
    deleteMany?: TimesDaRodadaScalarWhereInput | TimesDaRodadaScalarWhereInput[]
  }

  export type RodadaCreateNestedManyWithoutMandanteInput = {
    create?: XOR<RodadaCreateWithoutMandanteInput, RodadaUncheckedCreateWithoutMandanteInput> | RodadaCreateWithoutMandanteInput[] | RodadaUncheckedCreateWithoutMandanteInput[]
    connectOrCreate?: RodadaCreateOrConnectWithoutMandanteInput | RodadaCreateOrConnectWithoutMandanteInput[]
    connect?: RodadaWhereUniqueInput | RodadaWhereUniqueInput[]
  }

  export type RodadaCreateNestedManyWithoutVisitanteInput = {
    create?: XOR<RodadaCreateWithoutVisitanteInput, RodadaUncheckedCreateWithoutVisitanteInput> | RodadaCreateWithoutVisitanteInput[] | RodadaUncheckedCreateWithoutVisitanteInput[]
    connectOrCreate?: RodadaCreateOrConnectWithoutVisitanteInput | RodadaCreateOrConnectWithoutVisitanteInput[]
    connect?: RodadaWhereUniqueInput | RodadaWhereUniqueInput[]
  }

  export type TimesDaRodadaCreateidRodadaInput = {
    set: string[]
  }

  export type RodadaUncheckedCreateNestedManyWithoutMandanteInput = {
    create?: XOR<RodadaCreateWithoutMandanteInput, RodadaUncheckedCreateWithoutMandanteInput> | RodadaCreateWithoutMandanteInput[] | RodadaUncheckedCreateWithoutMandanteInput[]
    connectOrCreate?: RodadaCreateOrConnectWithoutMandanteInput | RodadaCreateOrConnectWithoutMandanteInput[]
    connect?: RodadaWhereUniqueInput | RodadaWhereUniqueInput[]
  }

  export type RodadaUncheckedCreateNestedManyWithoutVisitanteInput = {
    create?: XOR<RodadaCreateWithoutVisitanteInput, RodadaUncheckedCreateWithoutVisitanteInput> | RodadaCreateWithoutVisitanteInput[] | RodadaUncheckedCreateWithoutVisitanteInput[]
    connectOrCreate?: RodadaCreateOrConnectWithoutVisitanteInput | RodadaCreateOrConnectWithoutVisitanteInput[]
    connect?: RodadaWhereUniqueInput | RodadaWhereUniqueInput[]
  }

  export type RodadaUpdateManyWithoutMandanteNestedInput = {
    create?: XOR<RodadaCreateWithoutMandanteInput, RodadaUncheckedCreateWithoutMandanteInput> | RodadaCreateWithoutMandanteInput[] | RodadaUncheckedCreateWithoutMandanteInput[]
    connectOrCreate?: RodadaCreateOrConnectWithoutMandanteInput | RodadaCreateOrConnectWithoutMandanteInput[]
    upsert?: RodadaUpsertWithWhereUniqueWithoutMandanteInput | RodadaUpsertWithWhereUniqueWithoutMandanteInput[]
    set?: RodadaWhereUniqueInput | RodadaWhereUniqueInput[]
    disconnect?: RodadaWhereUniqueInput | RodadaWhereUniqueInput[]
    delete?: RodadaWhereUniqueInput | RodadaWhereUniqueInput[]
    connect?: RodadaWhereUniqueInput | RodadaWhereUniqueInput[]
    update?: RodadaUpdateWithWhereUniqueWithoutMandanteInput | RodadaUpdateWithWhereUniqueWithoutMandanteInput[]
    updateMany?: RodadaUpdateManyWithWhereWithoutMandanteInput | RodadaUpdateManyWithWhereWithoutMandanteInput[]
    deleteMany?: RodadaScalarWhereInput | RodadaScalarWhereInput[]
  }

  export type RodadaUpdateManyWithoutVisitanteNestedInput = {
    create?: XOR<RodadaCreateWithoutVisitanteInput, RodadaUncheckedCreateWithoutVisitanteInput> | RodadaCreateWithoutVisitanteInput[] | RodadaUncheckedCreateWithoutVisitanteInput[]
    connectOrCreate?: RodadaCreateOrConnectWithoutVisitanteInput | RodadaCreateOrConnectWithoutVisitanteInput[]
    upsert?: RodadaUpsertWithWhereUniqueWithoutVisitanteInput | RodadaUpsertWithWhereUniqueWithoutVisitanteInput[]
    set?: RodadaWhereUniqueInput | RodadaWhereUniqueInput[]
    disconnect?: RodadaWhereUniqueInput | RodadaWhereUniqueInput[]
    delete?: RodadaWhereUniqueInput | RodadaWhereUniqueInput[]
    connect?: RodadaWhereUniqueInput | RodadaWhereUniqueInput[]
    update?: RodadaUpdateWithWhereUniqueWithoutVisitanteInput | RodadaUpdateWithWhereUniqueWithoutVisitanteInput[]
    updateMany?: RodadaUpdateManyWithWhereWithoutVisitanteInput | RodadaUpdateManyWithWhereWithoutVisitanteInput[]
    deleteMany?: RodadaScalarWhereInput | RodadaScalarWhereInput[]
  }

  export type TimesDaRodadaUpdateidRodadaInput = {
    set?: string[]
    push?: string | string[]
  }

  export type RodadaUncheckedUpdateManyWithoutMandanteNestedInput = {
    create?: XOR<RodadaCreateWithoutMandanteInput, RodadaUncheckedCreateWithoutMandanteInput> | RodadaCreateWithoutMandanteInput[] | RodadaUncheckedCreateWithoutMandanteInput[]
    connectOrCreate?: RodadaCreateOrConnectWithoutMandanteInput | RodadaCreateOrConnectWithoutMandanteInput[]
    upsert?: RodadaUpsertWithWhereUniqueWithoutMandanteInput | RodadaUpsertWithWhereUniqueWithoutMandanteInput[]
    set?: RodadaWhereUniqueInput | RodadaWhereUniqueInput[]
    disconnect?: RodadaWhereUniqueInput | RodadaWhereUniqueInput[]
    delete?: RodadaWhereUniqueInput | RodadaWhereUniqueInput[]
    connect?: RodadaWhereUniqueInput | RodadaWhereUniqueInput[]
    update?: RodadaUpdateWithWhereUniqueWithoutMandanteInput | RodadaUpdateWithWhereUniqueWithoutMandanteInput[]
    updateMany?: RodadaUpdateManyWithWhereWithoutMandanteInput | RodadaUpdateManyWithWhereWithoutMandanteInput[]
    deleteMany?: RodadaScalarWhereInput | RodadaScalarWhereInput[]
  }

  export type RodadaUncheckedUpdateManyWithoutVisitanteNestedInput = {
    create?: XOR<RodadaCreateWithoutVisitanteInput, RodadaUncheckedCreateWithoutVisitanteInput> | RodadaCreateWithoutVisitanteInput[] | RodadaUncheckedCreateWithoutVisitanteInput[]
    connectOrCreate?: RodadaCreateOrConnectWithoutVisitanteInput | RodadaCreateOrConnectWithoutVisitanteInput[]
    upsert?: RodadaUpsertWithWhereUniqueWithoutVisitanteInput | RodadaUpsertWithWhereUniqueWithoutVisitanteInput[]
    set?: RodadaWhereUniqueInput | RodadaWhereUniqueInput[]
    disconnect?: RodadaWhereUniqueInput | RodadaWhereUniqueInput[]
    delete?: RodadaWhereUniqueInput | RodadaWhereUniqueInput[]
    connect?: RodadaWhereUniqueInput | RodadaWhereUniqueInput[]
    update?: RodadaUpdateWithWhereUniqueWithoutVisitanteInput | RodadaUpdateWithWhereUniqueWithoutVisitanteInput[]
    updateMany?: RodadaUpdateManyWithWhereWithoutVisitanteInput | RodadaUpdateManyWithWhereWithoutVisitanteInput[]
    deleteMany?: RodadaScalarWhereInput | RodadaScalarWhereInput[]
  }

  export type TabelaDeResultadosCreateNestedOneWithoutResultadosInput = {
    create?: XOR<TabelaDeResultadosCreateWithoutResultadosInput, TabelaDeResultadosUncheckedCreateWithoutResultadosInput>
    connectOrCreate?: TabelaDeResultadosCreateOrConnectWithoutResultadosInput
    connect?: TabelaDeResultadosWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type TabelaDeResultadosUpdateOneRequiredWithoutResultadosNestedInput = {
    create?: XOR<TabelaDeResultadosCreateWithoutResultadosInput, TabelaDeResultadosUncheckedCreateWithoutResultadosInput>
    connectOrCreate?: TabelaDeResultadosCreateOrConnectWithoutResultadosInput
    upsert?: TabelaDeResultadosUpsertWithoutResultadosInput
    connect?: TabelaDeResultadosWhereUniqueInput
    update?: XOR<XOR<TabelaDeResultadosUpdateToOneWithWhereWithoutResultadosInput, TabelaDeResultadosUpdateWithoutResultadosInput>, TabelaDeResultadosUncheckedUpdateWithoutResultadosInput>
  }

  export type ResultadosCreateNestedManyWithoutTabelaDeResultadoInput = {
    create?: XOR<ResultadosCreateWithoutTabelaDeResultadoInput, ResultadosUncheckedCreateWithoutTabelaDeResultadoInput> | ResultadosCreateWithoutTabelaDeResultadoInput[] | ResultadosUncheckedCreateWithoutTabelaDeResultadoInput[]
    connectOrCreate?: ResultadosCreateOrConnectWithoutTabelaDeResultadoInput | ResultadosCreateOrConnectWithoutTabelaDeResultadoInput[]
    createMany?: ResultadosCreateManyTabelaDeResultadoInputEnvelope
    connect?: ResultadosWhereUniqueInput | ResultadosWhereUniqueInput[]
  }

  export type ResultadosUncheckedCreateNestedManyWithoutTabelaDeResultadoInput = {
    create?: XOR<ResultadosCreateWithoutTabelaDeResultadoInput, ResultadosUncheckedCreateWithoutTabelaDeResultadoInput> | ResultadosCreateWithoutTabelaDeResultadoInput[] | ResultadosUncheckedCreateWithoutTabelaDeResultadoInput[]
    connectOrCreate?: ResultadosCreateOrConnectWithoutTabelaDeResultadoInput | ResultadosCreateOrConnectWithoutTabelaDeResultadoInput[]
    createMany?: ResultadosCreateManyTabelaDeResultadoInputEnvelope
    connect?: ResultadosWhereUniqueInput | ResultadosWhereUniqueInput[]
  }

  export type ResultadosUpdateManyWithoutTabelaDeResultadoNestedInput = {
    create?: XOR<ResultadosCreateWithoutTabelaDeResultadoInput, ResultadosUncheckedCreateWithoutTabelaDeResultadoInput> | ResultadosCreateWithoutTabelaDeResultadoInput[] | ResultadosUncheckedCreateWithoutTabelaDeResultadoInput[]
    connectOrCreate?: ResultadosCreateOrConnectWithoutTabelaDeResultadoInput | ResultadosCreateOrConnectWithoutTabelaDeResultadoInput[]
    upsert?: ResultadosUpsertWithWhereUniqueWithoutTabelaDeResultadoInput | ResultadosUpsertWithWhereUniqueWithoutTabelaDeResultadoInput[]
    createMany?: ResultadosCreateManyTabelaDeResultadoInputEnvelope
    set?: ResultadosWhereUniqueInput | ResultadosWhereUniqueInput[]
    disconnect?: ResultadosWhereUniqueInput | ResultadosWhereUniqueInput[]
    delete?: ResultadosWhereUniqueInput | ResultadosWhereUniqueInput[]
    connect?: ResultadosWhereUniqueInput | ResultadosWhereUniqueInput[]
    update?: ResultadosUpdateWithWhereUniqueWithoutTabelaDeResultadoInput | ResultadosUpdateWithWhereUniqueWithoutTabelaDeResultadoInput[]
    updateMany?: ResultadosUpdateManyWithWhereWithoutTabelaDeResultadoInput | ResultadosUpdateManyWithWhereWithoutTabelaDeResultadoInput[]
    deleteMany?: ResultadosScalarWhereInput | ResultadosScalarWhereInput[]
  }

  export type ResultadosUncheckedUpdateManyWithoutTabelaDeResultadoNestedInput = {
    create?: XOR<ResultadosCreateWithoutTabelaDeResultadoInput, ResultadosUncheckedCreateWithoutTabelaDeResultadoInput> | ResultadosCreateWithoutTabelaDeResultadoInput[] | ResultadosUncheckedCreateWithoutTabelaDeResultadoInput[]
    connectOrCreate?: ResultadosCreateOrConnectWithoutTabelaDeResultadoInput | ResultadosCreateOrConnectWithoutTabelaDeResultadoInput[]
    upsert?: ResultadosUpsertWithWhereUniqueWithoutTabelaDeResultadoInput | ResultadosUpsertWithWhereUniqueWithoutTabelaDeResultadoInput[]
    createMany?: ResultadosCreateManyTabelaDeResultadoInputEnvelope
    set?: ResultadosWhereUniqueInput | ResultadosWhereUniqueInput[]
    disconnect?: ResultadosWhereUniqueInput | ResultadosWhereUniqueInput[]
    delete?: ResultadosWhereUniqueInput | ResultadosWhereUniqueInput[]
    connect?: ResultadosWhereUniqueInput | ResultadosWhereUniqueInput[]
    update?: ResultadosUpdateWithWhereUniqueWithoutTabelaDeResultadoInput | ResultadosUpdateWithWhereUniqueWithoutTabelaDeResultadoInput[]
    updateMany?: ResultadosUpdateManyWithWhereWithoutTabelaDeResultadoInput | ResultadosUpdateManyWithWhereWithoutTabelaDeResultadoInput[]
    deleteMany?: ResultadosScalarWhereInput | ResultadosScalarWhereInput[]
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
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
    isSet?: boolean
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type TorneioCreateWithoutUsuarioInput = {
    id?: string
    nome: string
    participantes?: ParticipantesCreateNestedManyWithoutTorneioInput
    estatistica?: EstatisticaCreateNestedManyWithoutTorneioInput
    campeonato?: campeonatoCreateNestedManyWithoutTorneioInput
  }

  export type TorneioUncheckedCreateWithoutUsuarioInput = {
    id?: string
    nome: string
    participantes?: ParticipantesUncheckedCreateNestedManyWithoutTorneioInput
    estatistica?: EstatisticaUncheckedCreateNestedManyWithoutTorneioInput
    campeonato?: campeonatoUncheckedCreateNestedManyWithoutTorneioInput
  }

  export type TorneioCreateOrConnectWithoutUsuarioInput = {
    where: TorneioWhereUniqueInput
    create: XOR<TorneioCreateWithoutUsuarioInput, TorneioUncheckedCreateWithoutUsuarioInput>
  }

  export type TorneioCreateManyUsuarioInputEnvelope = {
    data: TorneioCreateManyUsuarioInput | TorneioCreateManyUsuarioInput[]
  }

  export type TorneioUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: TorneioWhereUniqueInput
    update: XOR<TorneioUpdateWithoutUsuarioInput, TorneioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<TorneioCreateWithoutUsuarioInput, TorneioUncheckedCreateWithoutUsuarioInput>
  }

  export type TorneioUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: TorneioWhereUniqueInput
    data: XOR<TorneioUpdateWithoutUsuarioInput, TorneioUncheckedUpdateWithoutUsuarioInput>
  }

  export type TorneioUpdateManyWithWhereWithoutUsuarioInput = {
    where: TorneioScalarWhereInput
    data: XOR<TorneioUpdateManyMutationInput, TorneioUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type TorneioScalarWhereInput = {
    AND?: TorneioScalarWhereInput | TorneioScalarWhereInput[]
    OR?: TorneioScalarWhereInput[]
    NOT?: TorneioScalarWhereInput | TorneioScalarWhereInput[]
    id?: StringFilter<"Torneio"> | string
    idUsuario?: StringFilter<"Torneio"> | string
    nome?: StringFilter<"Torneio"> | string
  }

  export type ParticipantesCreateWithoutTorneioInput = {
    id?: string
    nome: string
    saldo?: number | null
    time?: string | null
    emblemaDoTime?: string | null
    jogadores?: JogadoresCreateNestedManyWithoutParticipantesInput
  }

  export type ParticipantesUncheckedCreateWithoutTorneioInput = {
    id?: string
    nome: string
    saldo?: number | null
    time?: string | null
    emblemaDoTime?: string | null
    jogadores?: JogadoresUncheckedCreateNestedManyWithoutParticipantesInput
  }

  export type ParticipantesCreateOrConnectWithoutTorneioInput = {
    where: ParticipantesWhereUniqueInput
    create: XOR<ParticipantesCreateWithoutTorneioInput, ParticipantesUncheckedCreateWithoutTorneioInput>
  }

  export type ParticipantesCreateManyTorneioInputEnvelope = {
    data: ParticipantesCreateManyTorneioInput | ParticipantesCreateManyTorneioInput[]
  }

  export type UsuarioCreateWithoutTorneioInput = {
    id?: string
    email: string
    nome: string
    senha: string
  }

  export type UsuarioUncheckedCreateWithoutTorneioInput = {
    id?: string
    email: string
    nome: string
    senha: string
  }

  export type UsuarioCreateOrConnectWithoutTorneioInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutTorneioInput, UsuarioUncheckedCreateWithoutTorneioInput>
  }

  export type EstatisticaCreateWithoutTorneioInput = {
    id?: string
    vencedor?: string | null
    assistentes?: EstatisticaCreateassistentesInput | string[]
    artilheiros?: EstatisticaCreateartilheirosInput | string[]
    data?: Date | string | null
  }

  export type EstatisticaUncheckedCreateWithoutTorneioInput = {
    id?: string
    vencedor?: string | null
    assistentes?: EstatisticaCreateassistentesInput | string[]
    artilheiros?: EstatisticaCreateartilheirosInput | string[]
    data?: Date | string | null
  }

  export type EstatisticaCreateOrConnectWithoutTorneioInput = {
    where: EstatisticaWhereUniqueInput
    create: XOR<EstatisticaCreateWithoutTorneioInput, EstatisticaUncheckedCreateWithoutTorneioInput>
  }

  export type EstatisticaCreateManyTorneioInputEnvelope = {
    data: EstatisticaCreateManyTorneioInput | EstatisticaCreateManyTorneioInput[]
  }

  export type campeonatoCreateWithoutTorneioInput = {
    id?: string
    status: string
    data?: Date | string
    rodada?: RodadaCreateNestedManyWithoutCampeonatoInput
  }

  export type campeonatoUncheckedCreateWithoutTorneioInput = {
    id?: string
    status: string
    data?: Date | string
    rodada?: RodadaUncheckedCreateNestedManyWithoutCampeonatoInput
  }

  export type campeonatoCreateOrConnectWithoutTorneioInput = {
    where: campeonatoWhereUniqueInput
    create: XOR<campeonatoCreateWithoutTorneioInput, campeonatoUncheckedCreateWithoutTorneioInput>
  }

  export type campeonatoCreateManyTorneioInputEnvelope = {
    data: campeonatoCreateManyTorneioInput | campeonatoCreateManyTorneioInput[]
  }

  export type ParticipantesUpsertWithWhereUniqueWithoutTorneioInput = {
    where: ParticipantesWhereUniqueInput
    update: XOR<ParticipantesUpdateWithoutTorneioInput, ParticipantesUncheckedUpdateWithoutTorneioInput>
    create: XOR<ParticipantesCreateWithoutTorneioInput, ParticipantesUncheckedCreateWithoutTorneioInput>
  }

  export type ParticipantesUpdateWithWhereUniqueWithoutTorneioInput = {
    where: ParticipantesWhereUniqueInput
    data: XOR<ParticipantesUpdateWithoutTorneioInput, ParticipantesUncheckedUpdateWithoutTorneioInput>
  }

  export type ParticipantesUpdateManyWithWhereWithoutTorneioInput = {
    where: ParticipantesScalarWhereInput
    data: XOR<ParticipantesUpdateManyMutationInput, ParticipantesUncheckedUpdateManyWithoutTorneioInput>
  }

  export type ParticipantesScalarWhereInput = {
    AND?: ParticipantesScalarWhereInput | ParticipantesScalarWhereInput[]
    OR?: ParticipantesScalarWhereInput[]
    NOT?: ParticipantesScalarWhereInput | ParticipantesScalarWhereInput[]
    id?: StringFilter<"Participantes"> | string
    nome?: StringFilter<"Participantes"> | string
    saldo?: FloatNullableFilter<"Participantes"> | number | null
    time?: StringNullableFilter<"Participantes"> | string | null
    emblemaDoTime?: StringNullableFilter<"Participantes"> | string | null
    idTorneio?: StringFilter<"Participantes"> | string
  }

  export type UsuarioUpsertWithoutTorneioInput = {
    update: XOR<UsuarioUpdateWithoutTorneioInput, UsuarioUncheckedUpdateWithoutTorneioInput>
    create: XOR<UsuarioCreateWithoutTorneioInput, UsuarioUncheckedCreateWithoutTorneioInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutTorneioInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutTorneioInput, UsuarioUncheckedUpdateWithoutTorneioInput>
  }

  export type UsuarioUpdateWithoutTorneioInput = {
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateWithoutTorneioInput = {
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type EstatisticaUpsertWithWhereUniqueWithoutTorneioInput = {
    where: EstatisticaWhereUniqueInput
    update: XOR<EstatisticaUpdateWithoutTorneioInput, EstatisticaUncheckedUpdateWithoutTorneioInput>
    create: XOR<EstatisticaCreateWithoutTorneioInput, EstatisticaUncheckedCreateWithoutTorneioInput>
  }

  export type EstatisticaUpdateWithWhereUniqueWithoutTorneioInput = {
    where: EstatisticaWhereUniqueInput
    data: XOR<EstatisticaUpdateWithoutTorneioInput, EstatisticaUncheckedUpdateWithoutTorneioInput>
  }

  export type EstatisticaUpdateManyWithWhereWithoutTorneioInput = {
    where: EstatisticaScalarWhereInput
    data: XOR<EstatisticaUpdateManyMutationInput, EstatisticaUncheckedUpdateManyWithoutTorneioInput>
  }

  export type EstatisticaScalarWhereInput = {
    AND?: EstatisticaScalarWhereInput | EstatisticaScalarWhereInput[]
    OR?: EstatisticaScalarWhereInput[]
    NOT?: EstatisticaScalarWhereInput | EstatisticaScalarWhereInput[]
    id?: StringFilter<"Estatistica"> | string
    vencedor?: StringNullableFilter<"Estatistica"> | string | null
    assistentes?: StringNullableListFilter<"Estatistica">
    artilheiros?: StringNullableListFilter<"Estatistica">
    data?: DateTimeNullableFilter<"Estatistica"> | Date | string | null
    torneioId?: StringFilter<"Estatistica"> | string
  }

  export type campeonatoUpsertWithWhereUniqueWithoutTorneioInput = {
    where: campeonatoWhereUniqueInput
    update: XOR<campeonatoUpdateWithoutTorneioInput, campeonatoUncheckedUpdateWithoutTorneioInput>
    create: XOR<campeonatoCreateWithoutTorneioInput, campeonatoUncheckedCreateWithoutTorneioInput>
  }

  export type campeonatoUpdateWithWhereUniqueWithoutTorneioInput = {
    where: campeonatoWhereUniqueInput
    data: XOR<campeonatoUpdateWithoutTorneioInput, campeonatoUncheckedUpdateWithoutTorneioInput>
  }

  export type campeonatoUpdateManyWithWhereWithoutTorneioInput = {
    where: campeonatoScalarWhereInput
    data: XOR<campeonatoUpdateManyMutationInput, campeonatoUncheckedUpdateManyWithoutTorneioInput>
  }

  export type campeonatoScalarWhereInput = {
    AND?: campeonatoScalarWhereInput | campeonatoScalarWhereInput[]
    OR?: campeonatoScalarWhereInput[]
    NOT?: campeonatoScalarWhereInput | campeonatoScalarWhereInput[]
    id?: StringFilter<"campeonato"> | string
    status?: StringFilter<"campeonato"> | string
    data?: DateTimeFilter<"campeonato"> | Date | string
    idTorneio?: StringFilter<"campeonato"> | string
  }

  export type TorneioCreateWithoutParticipantesInput = {
    id?: string
    nome: string
    usuario: UsuarioCreateNestedOneWithoutTorneioInput
    estatistica?: EstatisticaCreateNestedManyWithoutTorneioInput
    campeonato?: campeonatoCreateNestedManyWithoutTorneioInput
  }

  export type TorneioUncheckedCreateWithoutParticipantesInput = {
    id?: string
    idUsuario: string
    nome: string
    estatistica?: EstatisticaUncheckedCreateNestedManyWithoutTorneioInput
    campeonato?: campeonatoUncheckedCreateNestedManyWithoutTorneioInput
  }

  export type TorneioCreateOrConnectWithoutParticipantesInput = {
    where: TorneioWhereUniqueInput
    create: XOR<TorneioCreateWithoutParticipantesInput, TorneioUncheckedCreateWithoutParticipantesInput>
  }

  export type JogadoresCreateWithoutParticipantesInput = {
    id?: string
    nome: string
    imagemDoJogador: string
    nacionalidade: string
    imagemDaNacionalidade: string
    escudoDoTime: string
    posicao: string
    overall: string
    valorDoJogador: string
    time: string
    liga: string
    linkSoFifa: string
    posicaoNoCampinho?: PosicaoNoCampinhoCreateNestedManyWithoutJogadorInput
  }

  export type JogadoresUncheckedCreateWithoutParticipantesInput = {
    id?: string
    nome: string
    imagemDoJogador: string
    nacionalidade: string
    imagemDaNacionalidade: string
    escudoDoTime: string
    posicao: string
    overall: string
    valorDoJogador: string
    time: string
    liga: string
    linkSoFifa: string
    posicaoNoCampinho?: PosicaoNoCampinhoUncheckedCreateNestedManyWithoutJogadorInput
  }

  export type JogadoresCreateOrConnectWithoutParticipantesInput = {
    where: JogadoresWhereUniqueInput
    create: XOR<JogadoresCreateWithoutParticipantesInput, JogadoresUncheckedCreateWithoutParticipantesInput>
  }

  export type JogadoresCreateManyParticipantesInputEnvelope = {
    data: JogadoresCreateManyParticipantesInput | JogadoresCreateManyParticipantesInput[]
  }

  export type TorneioUpsertWithoutParticipantesInput = {
    update: XOR<TorneioUpdateWithoutParticipantesInput, TorneioUncheckedUpdateWithoutParticipantesInput>
    create: XOR<TorneioCreateWithoutParticipantesInput, TorneioUncheckedCreateWithoutParticipantesInput>
    where?: TorneioWhereInput
  }

  export type TorneioUpdateToOneWithWhereWithoutParticipantesInput = {
    where?: TorneioWhereInput
    data: XOR<TorneioUpdateWithoutParticipantesInput, TorneioUncheckedUpdateWithoutParticipantesInput>
  }

  export type TorneioUpdateWithoutParticipantesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutTorneioNestedInput
    estatistica?: EstatisticaUpdateManyWithoutTorneioNestedInput
    campeonato?: campeonatoUpdateManyWithoutTorneioNestedInput
  }

  export type TorneioUncheckedUpdateWithoutParticipantesInput = {
    idUsuario?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    estatistica?: EstatisticaUncheckedUpdateManyWithoutTorneioNestedInput
    campeonato?: campeonatoUncheckedUpdateManyWithoutTorneioNestedInput
  }

  export type JogadoresUpsertWithWhereUniqueWithoutParticipantesInput = {
    where: JogadoresWhereUniqueInput
    update: XOR<JogadoresUpdateWithoutParticipantesInput, JogadoresUncheckedUpdateWithoutParticipantesInput>
    create: XOR<JogadoresCreateWithoutParticipantesInput, JogadoresUncheckedCreateWithoutParticipantesInput>
  }

  export type JogadoresUpdateWithWhereUniqueWithoutParticipantesInput = {
    where: JogadoresWhereUniqueInput
    data: XOR<JogadoresUpdateWithoutParticipantesInput, JogadoresUncheckedUpdateWithoutParticipantesInput>
  }

  export type JogadoresUpdateManyWithWhereWithoutParticipantesInput = {
    where: JogadoresScalarWhereInput
    data: XOR<JogadoresUpdateManyMutationInput, JogadoresUncheckedUpdateManyWithoutParticipantesInput>
  }

  export type JogadoresScalarWhereInput = {
    AND?: JogadoresScalarWhereInput | JogadoresScalarWhereInput[]
    OR?: JogadoresScalarWhereInput[]
    NOT?: JogadoresScalarWhereInput | JogadoresScalarWhereInput[]
    id?: StringFilter<"Jogadores"> | string
    nome?: StringFilter<"Jogadores"> | string
    imagemDoJogador?: StringFilter<"Jogadores"> | string
    nacionalidade?: StringFilter<"Jogadores"> | string
    imagemDaNacionalidade?: StringFilter<"Jogadores"> | string
    escudoDoTime?: StringFilter<"Jogadores"> | string
    posicao?: StringFilter<"Jogadores"> | string
    overall?: StringFilter<"Jogadores"> | string
    valorDoJogador?: StringFilter<"Jogadores"> | string
    time?: StringFilter<"Jogadores"> | string
    liga?: StringFilter<"Jogadores"> | string
    linkSoFifa?: StringFilter<"Jogadores"> | string
    idParticipante?: StringFilter<"Jogadores"> | string
  }

  export type PosicaoNoCampinhoCreateWithoutJogadorInput = {
    id?: string
    x: number
    y: number
  }

  export type PosicaoNoCampinhoUncheckedCreateWithoutJogadorInput = {
    id?: string
    x: number
    y: number
  }

  export type PosicaoNoCampinhoCreateOrConnectWithoutJogadorInput = {
    where: PosicaoNoCampinhoWhereUniqueInput
    create: XOR<PosicaoNoCampinhoCreateWithoutJogadorInput, PosicaoNoCampinhoUncheckedCreateWithoutJogadorInput>
  }

  export type PosicaoNoCampinhoCreateManyJogadorInputEnvelope = {
    data: PosicaoNoCampinhoCreateManyJogadorInput | PosicaoNoCampinhoCreateManyJogadorInput[]
  }

  export type ParticipantesCreateWithoutJogadoresInput = {
    id?: string
    nome: string
    saldo?: number | null
    time?: string | null
    emblemaDoTime?: string | null
    torneio: TorneioCreateNestedOneWithoutParticipantesInput
  }

  export type ParticipantesUncheckedCreateWithoutJogadoresInput = {
    id?: string
    nome: string
    saldo?: number | null
    time?: string | null
    emblemaDoTime?: string | null
    idTorneio: string
  }

  export type ParticipantesCreateOrConnectWithoutJogadoresInput = {
    where: ParticipantesWhereUniqueInput
    create: XOR<ParticipantesCreateWithoutJogadoresInput, ParticipantesUncheckedCreateWithoutJogadoresInput>
  }

  export type PosicaoNoCampinhoUpsertWithWhereUniqueWithoutJogadorInput = {
    where: PosicaoNoCampinhoWhereUniqueInput
    update: XOR<PosicaoNoCampinhoUpdateWithoutJogadorInput, PosicaoNoCampinhoUncheckedUpdateWithoutJogadorInput>
    create: XOR<PosicaoNoCampinhoCreateWithoutJogadorInput, PosicaoNoCampinhoUncheckedCreateWithoutJogadorInput>
  }

  export type PosicaoNoCampinhoUpdateWithWhereUniqueWithoutJogadorInput = {
    where: PosicaoNoCampinhoWhereUniqueInput
    data: XOR<PosicaoNoCampinhoUpdateWithoutJogadorInput, PosicaoNoCampinhoUncheckedUpdateWithoutJogadorInput>
  }

  export type PosicaoNoCampinhoUpdateManyWithWhereWithoutJogadorInput = {
    where: PosicaoNoCampinhoScalarWhereInput
    data: XOR<PosicaoNoCampinhoUpdateManyMutationInput, PosicaoNoCampinhoUncheckedUpdateManyWithoutJogadorInput>
  }

  export type PosicaoNoCampinhoScalarWhereInput = {
    AND?: PosicaoNoCampinhoScalarWhereInput | PosicaoNoCampinhoScalarWhereInput[]
    OR?: PosicaoNoCampinhoScalarWhereInput[]
    NOT?: PosicaoNoCampinhoScalarWhereInput | PosicaoNoCampinhoScalarWhereInput[]
    id?: StringFilter<"PosicaoNoCampinho"> | string
    idDoJogador?: StringFilter<"PosicaoNoCampinho"> | string
    x?: FloatFilter<"PosicaoNoCampinho"> | number
    y?: FloatFilter<"PosicaoNoCampinho"> | number
  }

  export type ParticipantesUpsertWithoutJogadoresInput = {
    update: XOR<ParticipantesUpdateWithoutJogadoresInput, ParticipantesUncheckedUpdateWithoutJogadoresInput>
    create: XOR<ParticipantesCreateWithoutJogadoresInput, ParticipantesUncheckedCreateWithoutJogadoresInput>
    where?: ParticipantesWhereInput
  }

  export type ParticipantesUpdateToOneWithWhereWithoutJogadoresInput = {
    where?: ParticipantesWhereInput
    data: XOR<ParticipantesUpdateWithoutJogadoresInput, ParticipantesUncheckedUpdateWithoutJogadoresInput>
  }

  export type ParticipantesUpdateWithoutJogadoresInput = {
    nome?: StringFieldUpdateOperationsInput | string
    saldo?: NullableFloatFieldUpdateOperationsInput | number | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    emblemaDoTime?: NullableStringFieldUpdateOperationsInput | string | null
    torneio?: TorneioUpdateOneRequiredWithoutParticipantesNestedInput
  }

  export type ParticipantesUncheckedUpdateWithoutJogadoresInput = {
    nome?: StringFieldUpdateOperationsInput | string
    saldo?: NullableFloatFieldUpdateOperationsInput | number | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    emblemaDoTime?: NullableStringFieldUpdateOperationsInput | string | null
    idTorneio?: StringFieldUpdateOperationsInput | string
  }

  export type TorneioCreateWithoutEstatisticaInput = {
    id?: string
    nome: string
    participantes?: ParticipantesCreateNestedManyWithoutTorneioInput
    usuario: UsuarioCreateNestedOneWithoutTorneioInput
    campeonato?: campeonatoCreateNestedManyWithoutTorneioInput
  }

  export type TorneioUncheckedCreateWithoutEstatisticaInput = {
    id?: string
    idUsuario: string
    nome: string
    participantes?: ParticipantesUncheckedCreateNestedManyWithoutTorneioInput
    campeonato?: campeonatoUncheckedCreateNestedManyWithoutTorneioInput
  }

  export type TorneioCreateOrConnectWithoutEstatisticaInput = {
    where: TorneioWhereUniqueInput
    create: XOR<TorneioCreateWithoutEstatisticaInput, TorneioUncheckedCreateWithoutEstatisticaInput>
  }

  export type TorneioUpsertWithoutEstatisticaInput = {
    update: XOR<TorneioUpdateWithoutEstatisticaInput, TorneioUncheckedUpdateWithoutEstatisticaInput>
    create: XOR<TorneioCreateWithoutEstatisticaInput, TorneioUncheckedCreateWithoutEstatisticaInput>
    where?: TorneioWhereInput
  }

  export type TorneioUpdateToOneWithWhereWithoutEstatisticaInput = {
    where?: TorneioWhereInput
    data: XOR<TorneioUpdateWithoutEstatisticaInput, TorneioUncheckedUpdateWithoutEstatisticaInput>
  }

  export type TorneioUpdateWithoutEstatisticaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    participantes?: ParticipantesUpdateManyWithoutTorneioNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutTorneioNestedInput
    campeonato?: campeonatoUpdateManyWithoutTorneioNestedInput
  }

  export type TorneioUncheckedUpdateWithoutEstatisticaInput = {
    idUsuario?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    participantes?: ParticipantesUncheckedUpdateManyWithoutTorneioNestedInput
    campeonato?: campeonatoUncheckedUpdateManyWithoutTorneioNestedInput
  }

  export type JogadoresCreateWithoutPosicaoNoCampinhoInput = {
    id?: string
    nome: string
    imagemDoJogador: string
    nacionalidade: string
    imagemDaNacionalidade: string
    escudoDoTime: string
    posicao: string
    overall: string
    valorDoJogador: string
    time: string
    liga: string
    linkSoFifa: string
    participantes: ParticipantesCreateNestedOneWithoutJogadoresInput
  }

  export type JogadoresUncheckedCreateWithoutPosicaoNoCampinhoInput = {
    id?: string
    nome: string
    imagemDoJogador: string
    nacionalidade: string
    imagemDaNacionalidade: string
    escudoDoTime: string
    posicao: string
    overall: string
    valorDoJogador: string
    time: string
    liga: string
    linkSoFifa: string
    idParticipante: string
  }

  export type JogadoresCreateOrConnectWithoutPosicaoNoCampinhoInput = {
    where: JogadoresWhereUniqueInput
    create: XOR<JogadoresCreateWithoutPosicaoNoCampinhoInput, JogadoresUncheckedCreateWithoutPosicaoNoCampinhoInput>
  }

  export type JogadoresUpsertWithoutPosicaoNoCampinhoInput = {
    update: XOR<JogadoresUpdateWithoutPosicaoNoCampinhoInput, JogadoresUncheckedUpdateWithoutPosicaoNoCampinhoInput>
    create: XOR<JogadoresCreateWithoutPosicaoNoCampinhoInput, JogadoresUncheckedCreateWithoutPosicaoNoCampinhoInput>
    where?: JogadoresWhereInput
  }

  export type JogadoresUpdateToOneWithWhereWithoutPosicaoNoCampinhoInput = {
    where?: JogadoresWhereInput
    data: XOR<JogadoresUpdateWithoutPosicaoNoCampinhoInput, JogadoresUncheckedUpdateWithoutPosicaoNoCampinhoInput>
  }

  export type JogadoresUpdateWithoutPosicaoNoCampinhoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    imagemDoJogador?: StringFieldUpdateOperationsInput | string
    nacionalidade?: StringFieldUpdateOperationsInput | string
    imagemDaNacionalidade?: StringFieldUpdateOperationsInput | string
    escudoDoTime?: StringFieldUpdateOperationsInput | string
    posicao?: StringFieldUpdateOperationsInput | string
    overall?: StringFieldUpdateOperationsInput | string
    valorDoJogador?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    liga?: StringFieldUpdateOperationsInput | string
    linkSoFifa?: StringFieldUpdateOperationsInput | string
    participantes?: ParticipantesUpdateOneRequiredWithoutJogadoresNestedInput
  }

  export type JogadoresUncheckedUpdateWithoutPosicaoNoCampinhoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    imagemDoJogador?: StringFieldUpdateOperationsInput | string
    nacionalidade?: StringFieldUpdateOperationsInput | string
    imagemDaNacionalidade?: StringFieldUpdateOperationsInput | string
    escudoDoTime?: StringFieldUpdateOperationsInput | string
    posicao?: StringFieldUpdateOperationsInput | string
    overall?: StringFieldUpdateOperationsInput | string
    valorDoJogador?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    liga?: StringFieldUpdateOperationsInput | string
    linkSoFifa?: StringFieldUpdateOperationsInput | string
    idParticipante?: StringFieldUpdateOperationsInput | string
  }

  export type RodadaCreateWithoutCampeonatoInput = {
    id?: string
    golsMandante: number
    golsVisitante: number
    rodadaDeNumero: number
    statusDaRodada: string
    mandante?: TimesDaRodadaCreateNestedManyWithoutMandanteInput
    visitante?: TimesDaRodadaCreateNestedManyWithoutVisitanteInput
  }

  export type RodadaUncheckedCreateWithoutCampeonatoInput = {
    id?: string
    idDoMandante?: RodadaCreateidDoMandanteInput | string[]
    idDoVisitante?: RodadaCreateidDoVisitanteInput | string[]
    golsMandante: number
    golsVisitante: number
    rodadaDeNumero: number
    statusDaRodada: string
    mandante?: TimesDaRodadaUncheckedCreateNestedManyWithoutMandanteInput
    visitante?: TimesDaRodadaUncheckedCreateNestedManyWithoutVisitanteInput
  }

  export type RodadaCreateOrConnectWithoutCampeonatoInput = {
    where: RodadaWhereUniqueInput
    create: XOR<RodadaCreateWithoutCampeonatoInput, RodadaUncheckedCreateWithoutCampeonatoInput>
  }

  export type RodadaCreateManyCampeonatoInputEnvelope = {
    data: RodadaCreateManyCampeonatoInput | RodadaCreateManyCampeonatoInput[]
  }

  export type TorneioCreateWithoutCampeonatoInput = {
    id?: string
    nome: string
    participantes?: ParticipantesCreateNestedManyWithoutTorneioInput
    usuario: UsuarioCreateNestedOneWithoutTorneioInput
    estatistica?: EstatisticaCreateNestedManyWithoutTorneioInput
  }

  export type TorneioUncheckedCreateWithoutCampeonatoInput = {
    id?: string
    idUsuario: string
    nome: string
    participantes?: ParticipantesUncheckedCreateNestedManyWithoutTorneioInput
    estatistica?: EstatisticaUncheckedCreateNestedManyWithoutTorneioInput
  }

  export type TorneioCreateOrConnectWithoutCampeonatoInput = {
    where: TorneioWhereUniqueInput
    create: XOR<TorneioCreateWithoutCampeonatoInput, TorneioUncheckedCreateWithoutCampeonatoInput>
  }

  export type RodadaUpsertWithWhereUniqueWithoutCampeonatoInput = {
    where: RodadaWhereUniqueInput
    update: XOR<RodadaUpdateWithoutCampeonatoInput, RodadaUncheckedUpdateWithoutCampeonatoInput>
    create: XOR<RodadaCreateWithoutCampeonatoInput, RodadaUncheckedCreateWithoutCampeonatoInput>
  }

  export type RodadaUpdateWithWhereUniqueWithoutCampeonatoInput = {
    where: RodadaWhereUniqueInput
    data: XOR<RodadaUpdateWithoutCampeonatoInput, RodadaUncheckedUpdateWithoutCampeonatoInput>
  }

  export type RodadaUpdateManyWithWhereWithoutCampeonatoInput = {
    where: RodadaScalarWhereInput
    data: XOR<RodadaUpdateManyMutationInput, RodadaUncheckedUpdateManyWithoutCampeonatoInput>
  }

  export type RodadaScalarWhereInput = {
    AND?: RodadaScalarWhereInput | RodadaScalarWhereInput[]
    OR?: RodadaScalarWhereInput[]
    NOT?: RodadaScalarWhereInput | RodadaScalarWhereInput[]
    id?: StringFilter<"Rodada"> | string
    idDoMandante?: StringNullableListFilter<"Rodada">
    idDoVisitante?: StringNullableListFilter<"Rodada">
    idCampeonato?: StringFilter<"Rodada"> | string
    golsMandante?: IntFilter<"Rodada"> | number
    golsVisitante?: IntFilter<"Rodada"> | number
    rodadaDeNumero?: IntFilter<"Rodada"> | number
    statusDaRodada?: StringFilter<"Rodada"> | string
  }

  export type TorneioUpsertWithoutCampeonatoInput = {
    update: XOR<TorneioUpdateWithoutCampeonatoInput, TorneioUncheckedUpdateWithoutCampeonatoInput>
    create: XOR<TorneioCreateWithoutCampeonatoInput, TorneioUncheckedCreateWithoutCampeonatoInput>
    where?: TorneioWhereInput
  }

  export type TorneioUpdateToOneWithWhereWithoutCampeonatoInput = {
    where?: TorneioWhereInput
    data: XOR<TorneioUpdateWithoutCampeonatoInput, TorneioUncheckedUpdateWithoutCampeonatoInput>
  }

  export type TorneioUpdateWithoutCampeonatoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    participantes?: ParticipantesUpdateManyWithoutTorneioNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutTorneioNestedInput
    estatistica?: EstatisticaUpdateManyWithoutTorneioNestedInput
  }

  export type TorneioUncheckedUpdateWithoutCampeonatoInput = {
    idUsuario?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    participantes?: ParticipantesUncheckedUpdateManyWithoutTorneioNestedInput
    estatistica?: EstatisticaUncheckedUpdateManyWithoutTorneioNestedInput
  }

  export type TimesDaRodadaCreateWithoutMandanteInput = {
    id?: string
    idParticipante: string
    nome: string
    saldo?: number | null
    time?: string | null
    emblemaDoTime?: string | null
    idTorneio: string
    visitante?: RodadaCreateNestedManyWithoutVisitanteInput
  }

  export type TimesDaRodadaUncheckedCreateWithoutMandanteInput = {
    id?: string
    idParticipante: string
    nome: string
    saldo?: number | null
    time?: string | null
    emblemaDoTime?: string | null
    idTorneio: string
    idRodada?: TimesDaRodadaCreateidRodadaInput | string[]
    visitante?: RodadaUncheckedCreateNestedManyWithoutVisitanteInput
  }

  export type TimesDaRodadaCreateOrConnectWithoutMandanteInput = {
    where: TimesDaRodadaWhereUniqueInput
    create: XOR<TimesDaRodadaCreateWithoutMandanteInput, TimesDaRodadaUncheckedCreateWithoutMandanteInput>
  }

  export type TimesDaRodadaCreateWithoutVisitanteInput = {
    id?: string
    idParticipante: string
    nome: string
    saldo?: number | null
    time?: string | null
    emblemaDoTime?: string | null
    idTorneio: string
    mandante?: RodadaCreateNestedManyWithoutMandanteInput
  }

  export type TimesDaRodadaUncheckedCreateWithoutVisitanteInput = {
    id?: string
    idParticipante: string
    nome: string
    saldo?: number | null
    time?: string | null
    emblemaDoTime?: string | null
    idTorneio: string
    idRodada?: TimesDaRodadaCreateidRodadaInput | string[]
    mandante?: RodadaUncheckedCreateNestedManyWithoutMandanteInput
  }

  export type TimesDaRodadaCreateOrConnectWithoutVisitanteInput = {
    where: TimesDaRodadaWhereUniqueInput
    create: XOR<TimesDaRodadaCreateWithoutVisitanteInput, TimesDaRodadaUncheckedCreateWithoutVisitanteInput>
  }

  export type campeonatoCreateWithoutRodadaInput = {
    id?: string
    status: string
    data?: Date | string
    torneio: TorneioCreateNestedOneWithoutCampeonatoInput
  }

  export type campeonatoUncheckedCreateWithoutRodadaInput = {
    id?: string
    status: string
    data?: Date | string
    idTorneio: string
  }

  export type campeonatoCreateOrConnectWithoutRodadaInput = {
    where: campeonatoWhereUniqueInput
    create: XOR<campeonatoCreateWithoutRodadaInput, campeonatoUncheckedCreateWithoutRodadaInput>
  }

  export type TimesDaRodadaUpsertWithWhereUniqueWithoutMandanteInput = {
    where: TimesDaRodadaWhereUniqueInput
    update: XOR<TimesDaRodadaUpdateWithoutMandanteInput, TimesDaRodadaUncheckedUpdateWithoutMandanteInput>
    create: XOR<TimesDaRodadaCreateWithoutMandanteInput, TimesDaRodadaUncheckedCreateWithoutMandanteInput>
  }

  export type TimesDaRodadaUpdateWithWhereUniqueWithoutMandanteInput = {
    where: TimesDaRodadaWhereUniqueInput
    data: XOR<TimesDaRodadaUpdateWithoutMandanteInput, TimesDaRodadaUncheckedUpdateWithoutMandanteInput>
  }

  export type TimesDaRodadaUpdateManyWithWhereWithoutMandanteInput = {
    where: TimesDaRodadaScalarWhereInput
    data: XOR<TimesDaRodadaUpdateManyMutationInput, TimesDaRodadaUncheckedUpdateManyWithoutMandanteInput>
  }

  export type TimesDaRodadaScalarWhereInput = {
    AND?: TimesDaRodadaScalarWhereInput | TimesDaRodadaScalarWhereInput[]
    OR?: TimesDaRodadaScalarWhereInput[]
    NOT?: TimesDaRodadaScalarWhereInput | TimesDaRodadaScalarWhereInput[]
    id?: StringFilter<"TimesDaRodada"> | string
    idParticipante?: StringFilter<"TimesDaRodada"> | string
    nome?: StringFilter<"TimesDaRodada"> | string
    saldo?: FloatNullableFilter<"TimesDaRodada"> | number | null
    time?: StringNullableFilter<"TimesDaRodada"> | string | null
    emblemaDoTime?: StringNullableFilter<"TimesDaRodada"> | string | null
    idTorneio?: StringFilter<"TimesDaRodada"> | string
    idRodada?: StringNullableListFilter<"TimesDaRodada">
  }

  export type TimesDaRodadaUpsertWithWhereUniqueWithoutVisitanteInput = {
    where: TimesDaRodadaWhereUniqueInput
    update: XOR<TimesDaRodadaUpdateWithoutVisitanteInput, TimesDaRodadaUncheckedUpdateWithoutVisitanteInput>
    create: XOR<TimesDaRodadaCreateWithoutVisitanteInput, TimesDaRodadaUncheckedCreateWithoutVisitanteInput>
  }

  export type TimesDaRodadaUpdateWithWhereUniqueWithoutVisitanteInput = {
    where: TimesDaRodadaWhereUniqueInput
    data: XOR<TimesDaRodadaUpdateWithoutVisitanteInput, TimesDaRodadaUncheckedUpdateWithoutVisitanteInput>
  }

  export type TimesDaRodadaUpdateManyWithWhereWithoutVisitanteInput = {
    where: TimesDaRodadaScalarWhereInput
    data: XOR<TimesDaRodadaUpdateManyMutationInput, TimesDaRodadaUncheckedUpdateManyWithoutVisitanteInput>
  }

  export type campeonatoUpsertWithoutRodadaInput = {
    update: XOR<campeonatoUpdateWithoutRodadaInput, campeonatoUncheckedUpdateWithoutRodadaInput>
    create: XOR<campeonatoCreateWithoutRodadaInput, campeonatoUncheckedCreateWithoutRodadaInput>
    where?: campeonatoWhereInput
  }

  export type campeonatoUpdateToOneWithWhereWithoutRodadaInput = {
    where?: campeonatoWhereInput
    data: XOR<campeonatoUpdateWithoutRodadaInput, campeonatoUncheckedUpdateWithoutRodadaInput>
  }

  export type campeonatoUpdateWithoutRodadaInput = {
    status?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    torneio?: TorneioUpdateOneRequiredWithoutCampeonatoNestedInput
  }

  export type campeonatoUncheckedUpdateWithoutRodadaInput = {
    status?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    idTorneio?: StringFieldUpdateOperationsInput | string
  }

  export type RodadaCreateWithoutMandanteInput = {
    id?: string
    golsMandante: number
    golsVisitante: number
    rodadaDeNumero: number
    statusDaRodada: string
    visitante?: TimesDaRodadaCreateNestedManyWithoutVisitanteInput
    campeonato?: campeonatoCreateNestedOneWithoutRodadaInput
  }

  export type RodadaUncheckedCreateWithoutMandanteInput = {
    id?: string
    idDoMandante?: RodadaCreateidDoMandanteInput | string[]
    idDoVisitante?: RodadaCreateidDoVisitanteInput | string[]
    idCampeonato: string
    golsMandante: number
    golsVisitante: number
    rodadaDeNumero: number
    statusDaRodada: string
    visitante?: TimesDaRodadaUncheckedCreateNestedManyWithoutVisitanteInput
  }

  export type RodadaCreateOrConnectWithoutMandanteInput = {
    where: RodadaWhereUniqueInput
    create: XOR<RodadaCreateWithoutMandanteInput, RodadaUncheckedCreateWithoutMandanteInput>
  }

  export type RodadaCreateWithoutVisitanteInput = {
    id?: string
    golsMandante: number
    golsVisitante: number
    rodadaDeNumero: number
    statusDaRodada: string
    mandante?: TimesDaRodadaCreateNestedManyWithoutMandanteInput
    campeonato?: campeonatoCreateNestedOneWithoutRodadaInput
  }

  export type RodadaUncheckedCreateWithoutVisitanteInput = {
    id?: string
    idDoMandante?: RodadaCreateidDoMandanteInput | string[]
    idDoVisitante?: RodadaCreateidDoVisitanteInput | string[]
    idCampeonato: string
    golsMandante: number
    golsVisitante: number
    rodadaDeNumero: number
    statusDaRodada: string
    mandante?: TimesDaRodadaUncheckedCreateNestedManyWithoutMandanteInput
  }

  export type RodadaCreateOrConnectWithoutVisitanteInput = {
    where: RodadaWhereUniqueInput
    create: XOR<RodadaCreateWithoutVisitanteInput, RodadaUncheckedCreateWithoutVisitanteInput>
  }

  export type RodadaUpsertWithWhereUniqueWithoutMandanteInput = {
    where: RodadaWhereUniqueInput
    update: XOR<RodadaUpdateWithoutMandanteInput, RodadaUncheckedUpdateWithoutMandanteInput>
    create: XOR<RodadaCreateWithoutMandanteInput, RodadaUncheckedCreateWithoutMandanteInput>
  }

  export type RodadaUpdateWithWhereUniqueWithoutMandanteInput = {
    where: RodadaWhereUniqueInput
    data: XOR<RodadaUpdateWithoutMandanteInput, RodadaUncheckedUpdateWithoutMandanteInput>
  }

  export type RodadaUpdateManyWithWhereWithoutMandanteInput = {
    where: RodadaScalarWhereInput
    data: XOR<RodadaUpdateManyMutationInput, RodadaUncheckedUpdateManyWithoutMandanteInput>
  }

  export type RodadaUpsertWithWhereUniqueWithoutVisitanteInput = {
    where: RodadaWhereUniqueInput
    update: XOR<RodadaUpdateWithoutVisitanteInput, RodadaUncheckedUpdateWithoutVisitanteInput>
    create: XOR<RodadaCreateWithoutVisitanteInput, RodadaUncheckedCreateWithoutVisitanteInput>
  }

  export type RodadaUpdateWithWhereUniqueWithoutVisitanteInput = {
    where: RodadaWhereUniqueInput
    data: XOR<RodadaUpdateWithoutVisitanteInput, RodadaUncheckedUpdateWithoutVisitanteInput>
  }

  export type RodadaUpdateManyWithWhereWithoutVisitanteInput = {
    where: RodadaScalarWhereInput
    data: XOR<RodadaUpdateManyMutationInput, RodadaUncheckedUpdateManyWithoutVisitanteInput>
  }

  export type TabelaDeResultadosCreateWithoutResultadosInput = {
    id?: string
    idDoCampeonato: string
    idDoTorneio: string
    data?: Date | string
    dataDeInicio?: string | null
  }

  export type TabelaDeResultadosUncheckedCreateWithoutResultadosInput = {
    id?: string
    idDoCampeonato: string
    idDoTorneio: string
    data?: Date | string
    dataDeInicio?: string | null
  }

  export type TabelaDeResultadosCreateOrConnectWithoutResultadosInput = {
    where: TabelaDeResultadosWhereUniqueInput
    create: XOR<TabelaDeResultadosCreateWithoutResultadosInput, TabelaDeResultadosUncheckedCreateWithoutResultadosInput>
  }

  export type TabelaDeResultadosUpsertWithoutResultadosInput = {
    update: XOR<TabelaDeResultadosUpdateWithoutResultadosInput, TabelaDeResultadosUncheckedUpdateWithoutResultadosInput>
    create: XOR<TabelaDeResultadosCreateWithoutResultadosInput, TabelaDeResultadosUncheckedCreateWithoutResultadosInput>
    where?: TabelaDeResultadosWhereInput
  }

  export type TabelaDeResultadosUpdateToOneWithWhereWithoutResultadosInput = {
    where?: TabelaDeResultadosWhereInput
    data: XOR<TabelaDeResultadosUpdateWithoutResultadosInput, TabelaDeResultadosUncheckedUpdateWithoutResultadosInput>
  }

  export type TabelaDeResultadosUpdateWithoutResultadosInput = {
    idDoCampeonato?: StringFieldUpdateOperationsInput | string
    idDoTorneio?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDeInicio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TabelaDeResultadosUncheckedUpdateWithoutResultadosInput = {
    idDoCampeonato?: StringFieldUpdateOperationsInput | string
    idDoTorneio?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDeInicio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ResultadosCreateWithoutTabelaDeResultadoInput = {
    id?: string
    avatar: string
    idDoParticipante: string
    usuario: string
    colocacao: string
    premioColocacao: number
    artilharia: string
    premioArtilharia: number
    vitorias: number
    premioVitorias: number
    empates: number
    premioEmpates: number
    gols: number
    premioGols: number
    total: number
    posicaoDefezaMenosVazada?: string | null
    premioDefezaMenosVazada?: number | null
    golsTomados?: number | null
    jogos?: number | null
  }

  export type ResultadosUncheckedCreateWithoutTabelaDeResultadoInput = {
    id?: string
    avatar: string
    idDoParticipante: string
    usuario: string
    colocacao: string
    premioColocacao: number
    artilharia: string
    premioArtilharia: number
    vitorias: number
    premioVitorias: number
    empates: number
    premioEmpates: number
    gols: number
    premioGols: number
    total: number
    posicaoDefezaMenosVazada?: string | null
    premioDefezaMenosVazada?: number | null
    golsTomados?: number | null
    jogos?: number | null
  }

  export type ResultadosCreateOrConnectWithoutTabelaDeResultadoInput = {
    where: ResultadosWhereUniqueInput
    create: XOR<ResultadosCreateWithoutTabelaDeResultadoInput, ResultadosUncheckedCreateWithoutTabelaDeResultadoInput>
  }

  export type ResultadosCreateManyTabelaDeResultadoInputEnvelope = {
    data: ResultadosCreateManyTabelaDeResultadoInput | ResultadosCreateManyTabelaDeResultadoInput[]
  }

  export type ResultadosUpsertWithWhereUniqueWithoutTabelaDeResultadoInput = {
    where: ResultadosWhereUniqueInput
    update: XOR<ResultadosUpdateWithoutTabelaDeResultadoInput, ResultadosUncheckedUpdateWithoutTabelaDeResultadoInput>
    create: XOR<ResultadosCreateWithoutTabelaDeResultadoInput, ResultadosUncheckedCreateWithoutTabelaDeResultadoInput>
  }

  export type ResultadosUpdateWithWhereUniqueWithoutTabelaDeResultadoInput = {
    where: ResultadosWhereUniqueInput
    data: XOR<ResultadosUpdateWithoutTabelaDeResultadoInput, ResultadosUncheckedUpdateWithoutTabelaDeResultadoInput>
  }

  export type ResultadosUpdateManyWithWhereWithoutTabelaDeResultadoInput = {
    where: ResultadosScalarWhereInput
    data: XOR<ResultadosUpdateManyMutationInput, ResultadosUncheckedUpdateManyWithoutTabelaDeResultadoInput>
  }

  export type ResultadosScalarWhereInput = {
    AND?: ResultadosScalarWhereInput | ResultadosScalarWhereInput[]
    OR?: ResultadosScalarWhereInput[]
    NOT?: ResultadosScalarWhereInput | ResultadosScalarWhereInput[]
    id?: StringFilter<"Resultados"> | string
    avatar?: StringFilter<"Resultados"> | string
    idDoParticipante?: StringFilter<"Resultados"> | string
    usuario?: StringFilter<"Resultados"> | string
    colocacao?: StringFilter<"Resultados"> | string
    premioColocacao?: FloatFilter<"Resultados"> | number
    artilharia?: StringFilter<"Resultados"> | string
    premioArtilharia?: FloatFilter<"Resultados"> | number
    vitorias?: IntFilter<"Resultados"> | number
    premioVitorias?: FloatFilter<"Resultados"> | number
    empates?: IntFilter<"Resultados"> | number
    premioEmpates?: FloatFilter<"Resultados"> | number
    gols?: IntFilter<"Resultados"> | number
    premioGols?: FloatFilter<"Resultados"> | number
    total?: FloatFilter<"Resultados"> | number
    posicaoDefezaMenosVazada?: StringNullableFilter<"Resultados"> | string | null
    premioDefezaMenosVazada?: FloatNullableFilter<"Resultados"> | number | null
    golsTomados?: IntNullableFilter<"Resultados"> | number | null
    jogos?: IntNullableFilter<"Resultados"> | number | null
    idTabelaResultados?: StringFilter<"Resultados"> | string
  }

  export type TorneioCreateManyUsuarioInput = {
    id?: string
    nome: string
  }

  export type TorneioUpdateWithoutUsuarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    participantes?: ParticipantesUpdateManyWithoutTorneioNestedInput
    estatistica?: EstatisticaUpdateManyWithoutTorneioNestedInput
    campeonato?: campeonatoUpdateManyWithoutTorneioNestedInput
  }

  export type TorneioUncheckedUpdateWithoutUsuarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    participantes?: ParticipantesUncheckedUpdateManyWithoutTorneioNestedInput
    estatistica?: EstatisticaUncheckedUpdateManyWithoutTorneioNestedInput
    campeonato?: campeonatoUncheckedUpdateManyWithoutTorneioNestedInput
  }

  export type TorneioUncheckedUpdateManyWithoutUsuarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipantesCreateManyTorneioInput = {
    id?: string
    nome: string
    saldo?: number | null
    time?: string | null
    emblemaDoTime?: string | null
  }

  export type EstatisticaCreateManyTorneioInput = {
    id?: string
    vencedor?: string | null
    assistentes?: EstatisticaCreateassistentesInput | string[]
    artilheiros?: EstatisticaCreateartilheirosInput | string[]
    data?: Date | string | null
  }

  export type campeonatoCreateManyTorneioInput = {
    id?: string
    status: string
    data?: Date | string
  }

  export type ParticipantesUpdateWithoutTorneioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    saldo?: NullableFloatFieldUpdateOperationsInput | number | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    emblemaDoTime?: NullableStringFieldUpdateOperationsInput | string | null
    jogadores?: JogadoresUpdateManyWithoutParticipantesNestedInput
  }

  export type ParticipantesUncheckedUpdateWithoutTorneioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    saldo?: NullableFloatFieldUpdateOperationsInput | number | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    emblemaDoTime?: NullableStringFieldUpdateOperationsInput | string | null
    jogadores?: JogadoresUncheckedUpdateManyWithoutParticipantesNestedInput
  }

  export type ParticipantesUncheckedUpdateManyWithoutTorneioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    saldo?: NullableFloatFieldUpdateOperationsInput | number | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    emblemaDoTime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EstatisticaUpdateWithoutTorneioInput = {
    vencedor?: NullableStringFieldUpdateOperationsInput | string | null
    assistentes?: EstatisticaUpdateassistentesInput | string[]
    artilheiros?: EstatisticaUpdateartilheirosInput | string[]
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EstatisticaUncheckedUpdateWithoutTorneioInput = {
    vencedor?: NullableStringFieldUpdateOperationsInput | string | null
    assistentes?: EstatisticaUpdateassistentesInput | string[]
    artilheiros?: EstatisticaUpdateartilheirosInput | string[]
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EstatisticaUncheckedUpdateManyWithoutTorneioInput = {
    vencedor?: NullableStringFieldUpdateOperationsInput | string | null
    assistentes?: EstatisticaUpdateassistentesInput | string[]
    artilheiros?: EstatisticaUpdateartilheirosInput | string[]
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type campeonatoUpdateWithoutTorneioInput = {
    status?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    rodada?: RodadaUpdateManyWithoutCampeonatoNestedInput
  }

  export type campeonatoUncheckedUpdateWithoutTorneioInput = {
    status?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    rodada?: RodadaUncheckedUpdateManyWithoutCampeonatoNestedInput
  }

  export type campeonatoUncheckedUpdateManyWithoutTorneioInput = {
    status?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JogadoresCreateManyParticipantesInput = {
    id?: string
    nome: string
    imagemDoJogador: string
    nacionalidade: string
    imagemDaNacionalidade: string
    escudoDoTime: string
    posicao: string
    overall: string
    valorDoJogador: string
    time: string
    liga: string
    linkSoFifa: string
  }

  export type JogadoresUpdateWithoutParticipantesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    imagemDoJogador?: StringFieldUpdateOperationsInput | string
    nacionalidade?: StringFieldUpdateOperationsInput | string
    imagemDaNacionalidade?: StringFieldUpdateOperationsInput | string
    escudoDoTime?: StringFieldUpdateOperationsInput | string
    posicao?: StringFieldUpdateOperationsInput | string
    overall?: StringFieldUpdateOperationsInput | string
    valorDoJogador?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    liga?: StringFieldUpdateOperationsInput | string
    linkSoFifa?: StringFieldUpdateOperationsInput | string
    posicaoNoCampinho?: PosicaoNoCampinhoUpdateManyWithoutJogadorNestedInput
  }

  export type JogadoresUncheckedUpdateWithoutParticipantesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    imagemDoJogador?: StringFieldUpdateOperationsInput | string
    nacionalidade?: StringFieldUpdateOperationsInput | string
    imagemDaNacionalidade?: StringFieldUpdateOperationsInput | string
    escudoDoTime?: StringFieldUpdateOperationsInput | string
    posicao?: StringFieldUpdateOperationsInput | string
    overall?: StringFieldUpdateOperationsInput | string
    valorDoJogador?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    liga?: StringFieldUpdateOperationsInput | string
    linkSoFifa?: StringFieldUpdateOperationsInput | string
    posicaoNoCampinho?: PosicaoNoCampinhoUncheckedUpdateManyWithoutJogadorNestedInput
  }

  export type JogadoresUncheckedUpdateManyWithoutParticipantesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    imagemDoJogador?: StringFieldUpdateOperationsInput | string
    nacionalidade?: StringFieldUpdateOperationsInput | string
    imagemDaNacionalidade?: StringFieldUpdateOperationsInput | string
    escudoDoTime?: StringFieldUpdateOperationsInput | string
    posicao?: StringFieldUpdateOperationsInput | string
    overall?: StringFieldUpdateOperationsInput | string
    valorDoJogador?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    liga?: StringFieldUpdateOperationsInput | string
    linkSoFifa?: StringFieldUpdateOperationsInput | string
  }

  export type PosicaoNoCampinhoCreateManyJogadorInput = {
    id?: string
    x: number
    y: number
  }

  export type PosicaoNoCampinhoUpdateWithoutJogadorInput = {
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
  }

  export type PosicaoNoCampinhoUncheckedUpdateWithoutJogadorInput = {
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
  }

  export type PosicaoNoCampinhoUncheckedUpdateManyWithoutJogadorInput = {
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
  }

  export type RodadaCreateManyCampeonatoInput = {
    id?: string
    idDoMandante?: RodadaCreateidDoMandanteInput | string[]
    idDoVisitante?: RodadaCreateidDoVisitanteInput | string[]
    golsMandante: number
    golsVisitante: number
    rodadaDeNumero: number
    statusDaRodada: string
  }

  export type RodadaUpdateWithoutCampeonatoInput = {
    golsMandante?: IntFieldUpdateOperationsInput | number
    golsVisitante?: IntFieldUpdateOperationsInput | number
    rodadaDeNumero?: IntFieldUpdateOperationsInput | number
    statusDaRodada?: StringFieldUpdateOperationsInput | string
    mandante?: TimesDaRodadaUpdateManyWithoutMandanteNestedInput
    visitante?: TimesDaRodadaUpdateManyWithoutVisitanteNestedInput
  }

  export type RodadaUncheckedUpdateWithoutCampeonatoInput = {
    idDoMandante?: RodadaUpdateidDoMandanteInput | string[]
    idDoVisitante?: RodadaUpdateidDoVisitanteInput | string[]
    golsMandante?: IntFieldUpdateOperationsInput | number
    golsVisitante?: IntFieldUpdateOperationsInput | number
    rodadaDeNumero?: IntFieldUpdateOperationsInput | number
    statusDaRodada?: StringFieldUpdateOperationsInput | string
    mandante?: TimesDaRodadaUncheckedUpdateManyWithoutMandanteNestedInput
    visitante?: TimesDaRodadaUncheckedUpdateManyWithoutVisitanteNestedInput
  }

  export type RodadaUncheckedUpdateManyWithoutCampeonatoInput = {
    idDoMandante?: RodadaUpdateidDoMandanteInput | string[]
    idDoVisitante?: RodadaUpdateidDoVisitanteInput | string[]
    golsMandante?: IntFieldUpdateOperationsInput | number
    golsVisitante?: IntFieldUpdateOperationsInput | number
    rodadaDeNumero?: IntFieldUpdateOperationsInput | number
    statusDaRodada?: StringFieldUpdateOperationsInput | string
  }

  export type TimesDaRodadaUpdateWithoutMandanteInput = {
    idParticipante?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    saldo?: NullableFloatFieldUpdateOperationsInput | number | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    emblemaDoTime?: NullableStringFieldUpdateOperationsInput | string | null
    idTorneio?: StringFieldUpdateOperationsInput | string
    visitante?: RodadaUpdateManyWithoutVisitanteNestedInput
  }

  export type TimesDaRodadaUncheckedUpdateWithoutMandanteInput = {
    idParticipante?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    saldo?: NullableFloatFieldUpdateOperationsInput | number | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    emblemaDoTime?: NullableStringFieldUpdateOperationsInput | string | null
    idTorneio?: StringFieldUpdateOperationsInput | string
    idRodada?: TimesDaRodadaUpdateidRodadaInput | string[]
    visitante?: RodadaUncheckedUpdateManyWithoutVisitanteNestedInput
  }

  export type TimesDaRodadaUncheckedUpdateManyWithoutMandanteInput = {
    idParticipante?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    saldo?: NullableFloatFieldUpdateOperationsInput | number | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    emblemaDoTime?: NullableStringFieldUpdateOperationsInput | string | null
    idTorneio?: StringFieldUpdateOperationsInput | string
    idRodada?: TimesDaRodadaUpdateidRodadaInput | string[]
  }

  export type TimesDaRodadaUpdateWithoutVisitanteInput = {
    idParticipante?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    saldo?: NullableFloatFieldUpdateOperationsInput | number | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    emblemaDoTime?: NullableStringFieldUpdateOperationsInput | string | null
    idTorneio?: StringFieldUpdateOperationsInput | string
    mandante?: RodadaUpdateManyWithoutMandanteNestedInput
  }

  export type TimesDaRodadaUncheckedUpdateWithoutVisitanteInput = {
    idParticipante?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    saldo?: NullableFloatFieldUpdateOperationsInput | number | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    emblemaDoTime?: NullableStringFieldUpdateOperationsInput | string | null
    idTorneio?: StringFieldUpdateOperationsInput | string
    idRodada?: TimesDaRodadaUpdateidRodadaInput | string[]
    mandante?: RodadaUncheckedUpdateManyWithoutMandanteNestedInput
  }

  export type TimesDaRodadaUncheckedUpdateManyWithoutVisitanteInput = {
    idParticipante?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    saldo?: NullableFloatFieldUpdateOperationsInput | number | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    emblemaDoTime?: NullableStringFieldUpdateOperationsInput | string | null
    idTorneio?: StringFieldUpdateOperationsInput | string
    idRodada?: TimesDaRodadaUpdateidRodadaInput | string[]
  }

  export type RodadaUpdateWithoutMandanteInput = {
    golsMandante?: IntFieldUpdateOperationsInput | number
    golsVisitante?: IntFieldUpdateOperationsInput | number
    rodadaDeNumero?: IntFieldUpdateOperationsInput | number
    statusDaRodada?: StringFieldUpdateOperationsInput | string
    visitante?: TimesDaRodadaUpdateManyWithoutVisitanteNestedInput
    campeonato?: campeonatoUpdateOneWithoutRodadaNestedInput
  }

  export type RodadaUncheckedUpdateWithoutMandanteInput = {
    idDoMandante?: RodadaUpdateidDoMandanteInput | string[]
    idDoVisitante?: RodadaUpdateidDoVisitanteInput | string[]
    idCampeonato?: StringFieldUpdateOperationsInput | string
    golsMandante?: IntFieldUpdateOperationsInput | number
    golsVisitante?: IntFieldUpdateOperationsInput | number
    rodadaDeNumero?: IntFieldUpdateOperationsInput | number
    statusDaRodada?: StringFieldUpdateOperationsInput | string
    visitante?: TimesDaRodadaUncheckedUpdateManyWithoutVisitanteNestedInput
  }

  export type RodadaUncheckedUpdateManyWithoutMandanteInput = {
    idDoMandante?: RodadaUpdateidDoMandanteInput | string[]
    idDoVisitante?: RodadaUpdateidDoVisitanteInput | string[]
    idCampeonato?: StringFieldUpdateOperationsInput | string
    golsMandante?: IntFieldUpdateOperationsInput | number
    golsVisitante?: IntFieldUpdateOperationsInput | number
    rodadaDeNumero?: IntFieldUpdateOperationsInput | number
    statusDaRodada?: StringFieldUpdateOperationsInput | string
  }

  export type RodadaUpdateWithoutVisitanteInput = {
    golsMandante?: IntFieldUpdateOperationsInput | number
    golsVisitante?: IntFieldUpdateOperationsInput | number
    rodadaDeNumero?: IntFieldUpdateOperationsInput | number
    statusDaRodada?: StringFieldUpdateOperationsInput | string
    mandante?: TimesDaRodadaUpdateManyWithoutMandanteNestedInput
    campeonato?: campeonatoUpdateOneWithoutRodadaNestedInput
  }

  export type RodadaUncheckedUpdateWithoutVisitanteInput = {
    idDoMandante?: RodadaUpdateidDoMandanteInput | string[]
    idDoVisitante?: RodadaUpdateidDoVisitanteInput | string[]
    idCampeonato?: StringFieldUpdateOperationsInput | string
    golsMandante?: IntFieldUpdateOperationsInput | number
    golsVisitante?: IntFieldUpdateOperationsInput | number
    rodadaDeNumero?: IntFieldUpdateOperationsInput | number
    statusDaRodada?: StringFieldUpdateOperationsInput | string
    mandante?: TimesDaRodadaUncheckedUpdateManyWithoutMandanteNestedInput
  }

  export type RodadaUncheckedUpdateManyWithoutVisitanteInput = {
    idDoMandante?: RodadaUpdateidDoMandanteInput | string[]
    idDoVisitante?: RodadaUpdateidDoVisitanteInput | string[]
    idCampeonato?: StringFieldUpdateOperationsInput | string
    golsMandante?: IntFieldUpdateOperationsInput | number
    golsVisitante?: IntFieldUpdateOperationsInput | number
    rodadaDeNumero?: IntFieldUpdateOperationsInput | number
    statusDaRodada?: StringFieldUpdateOperationsInput | string
  }

  export type ResultadosCreateManyTabelaDeResultadoInput = {
    id?: string
    avatar: string
    idDoParticipante: string
    usuario: string
    colocacao: string
    premioColocacao: number
    artilharia: string
    premioArtilharia: number
    vitorias: number
    premioVitorias: number
    empates: number
    premioEmpates: number
    gols: number
    premioGols: number
    total: number
    posicaoDefezaMenosVazada?: string | null
    premioDefezaMenosVazada?: number | null
    golsTomados?: number | null
    jogos?: number | null
  }

  export type ResultadosUpdateWithoutTabelaDeResultadoInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    idDoParticipante?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    colocacao?: StringFieldUpdateOperationsInput | string
    premioColocacao?: FloatFieldUpdateOperationsInput | number
    artilharia?: StringFieldUpdateOperationsInput | string
    premioArtilharia?: FloatFieldUpdateOperationsInput | number
    vitorias?: IntFieldUpdateOperationsInput | number
    premioVitorias?: FloatFieldUpdateOperationsInput | number
    empates?: IntFieldUpdateOperationsInput | number
    premioEmpates?: FloatFieldUpdateOperationsInput | number
    gols?: IntFieldUpdateOperationsInput | number
    premioGols?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    posicaoDefezaMenosVazada?: NullableStringFieldUpdateOperationsInput | string | null
    premioDefezaMenosVazada?: NullableFloatFieldUpdateOperationsInput | number | null
    golsTomados?: NullableIntFieldUpdateOperationsInput | number | null
    jogos?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ResultadosUncheckedUpdateWithoutTabelaDeResultadoInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    idDoParticipante?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    colocacao?: StringFieldUpdateOperationsInput | string
    premioColocacao?: FloatFieldUpdateOperationsInput | number
    artilharia?: StringFieldUpdateOperationsInput | string
    premioArtilharia?: FloatFieldUpdateOperationsInput | number
    vitorias?: IntFieldUpdateOperationsInput | number
    premioVitorias?: FloatFieldUpdateOperationsInput | number
    empates?: IntFieldUpdateOperationsInput | number
    premioEmpates?: FloatFieldUpdateOperationsInput | number
    gols?: IntFieldUpdateOperationsInput | number
    premioGols?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    posicaoDefezaMenosVazada?: NullableStringFieldUpdateOperationsInput | string | null
    premioDefezaMenosVazada?: NullableFloatFieldUpdateOperationsInput | number | null
    golsTomados?: NullableIntFieldUpdateOperationsInput | number | null
    jogos?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ResultadosUncheckedUpdateManyWithoutTabelaDeResultadoInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    idDoParticipante?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    colocacao?: StringFieldUpdateOperationsInput | string
    premioColocacao?: FloatFieldUpdateOperationsInput | number
    artilharia?: StringFieldUpdateOperationsInput | string
    premioArtilharia?: FloatFieldUpdateOperationsInput | number
    vitorias?: IntFieldUpdateOperationsInput | number
    premioVitorias?: FloatFieldUpdateOperationsInput | number
    empates?: IntFieldUpdateOperationsInput | number
    premioEmpates?: FloatFieldUpdateOperationsInput | number
    gols?: IntFieldUpdateOperationsInput | number
    premioGols?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    posicaoDefezaMenosVazada?: NullableStringFieldUpdateOperationsInput | string | null
    premioDefezaMenosVazada?: NullableFloatFieldUpdateOperationsInput | number | null
    golsTomados?: NullableIntFieldUpdateOperationsInput | number | null
    jogos?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsuarioCountOutputTypeDefaultArgs instead
     */
    export type UsuarioCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TorneioCountOutputTypeDefaultArgs instead
     */
    export type TorneioCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TorneioCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ParticipantesCountOutputTypeDefaultArgs instead
     */
    export type ParticipantesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ParticipantesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JogadoresCountOutputTypeDefaultArgs instead
     */
    export type JogadoresCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JogadoresCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CampeonatoCountOutputTypeDefaultArgs instead
     */
    export type CampeonatoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CampeonatoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RodadaCountOutputTypeDefaultArgs instead
     */
    export type RodadaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RodadaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TimesDaRodadaCountOutputTypeDefaultArgs instead
     */
    export type TimesDaRodadaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TimesDaRodadaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TabelaDeResultadosCountOutputTypeDefaultArgs instead
     */
    export type TabelaDeResultadosCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TabelaDeResultadosCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuarioDefaultArgs instead
     */
    export type UsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TorneioDefaultArgs instead
     */
    export type TorneioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TorneioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ParticipantesDefaultArgs instead
     */
    export type ParticipantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ParticipantesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JogadoresDefaultArgs instead
     */
    export type JogadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JogadoresDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EstatisticaDefaultArgs instead
     */
    export type EstatisticaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EstatisticaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PosicaoNoCampinhoDefaultArgs instead
     */
    export type PosicaoNoCampinhoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PosicaoNoCampinhoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use campeonatoDefaultArgs instead
     */
    export type campeonatoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = campeonatoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RodadaDefaultArgs instead
     */
    export type RodadaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RodadaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TimesDaRodadaDefaultArgs instead
     */
    export type TimesDaRodadaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TimesDaRodadaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tabelaDoCampeonatoDefaultArgs instead
     */
    export type tabelaDoCampeonatoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tabelaDoCampeonatoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResultadosDefaultArgs instead
     */
    export type ResultadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResultadosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TabelaDeResultadosDefaultArgs instead
     */
    export type TabelaDeResultadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TabelaDeResultadosDefaultArgs<ExtArgs>

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