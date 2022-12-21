export interface requestHandlerInterface {
    handle (query: string): Promise<any>
}