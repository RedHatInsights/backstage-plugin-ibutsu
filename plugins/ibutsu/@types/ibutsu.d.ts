declare module '@ibutsu/client' {
    class ApiClient {    
        basePath: any;
        callApi(path: any, httpMethod: any, pathParams: any,
            queryParams: any, headerParams: any, formParams: any, bodyParam: any, authNames: any, contentTypes: any, accepts: any,
            returnType: any, apiBasePath: any): any;
    }

    class RunApi {
        constructor(apiClient: any)
        addRun(opts: any): any;
        getRunList(opts: any): any;
    }

    class Run {}
}
