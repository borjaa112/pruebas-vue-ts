import { httpRequesterInterface } from "@/domain/httpRequesterInterface";
import { requestHandlerInterface } from "@/domain/requestHandlerInterface";

export class requestHandler implements requestHandlerInterface {
    constructor(private readonly httpRequester: httpRequesterInterface) {

    }
    handle (query: string): Promise<any> {
        return this.httpRequester.get(query)
    }
}