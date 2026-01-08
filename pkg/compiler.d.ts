/* tslint:disable */
/* eslint-disable */

export class WasmVM {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    get_output(): string;
    provide_input(input: string): WasmVMStatus;
    start(): WasmVMStatus;
}

export enum WasmVMStatus {
    Ready = 0,
    Finished = 1,
    AwaitingInput = 2,
    Error = 3,
}

export function init_vm(source: string): WasmVM;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_wasmvm_free: (a: number, b: number) => void;
    readonly init_vm: (a: number, b: number) => [number, number, number];
    readonly wasmvm_get_output: (a: number) => [number, number];
    readonly wasmvm_provide_input: (a: number, b: number, c: number) => number;
    readonly wasmvm_start: (a: number) => number;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
