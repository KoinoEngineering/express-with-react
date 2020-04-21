export type Description = string;

export type Query<Keys extends string> = { [k in Keys]: Description };
export interface WithQuery<Q extends Query<any>> {
    query: Q;
}

export type Params<Keys extends string> = { [k in Keys]: Description };
export interface WithParams<P extends Params<any>> {
    params: P;
}
