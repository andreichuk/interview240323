export type Remoter = {
    readonly get: <TResult>(url: string) => Promise<TResult>
}

async function remoteCall<TResult>(url: string): Promise<TResult> {
    const response = await fetch(url, {
        method: "GET",
        cache: "no-cache",
        referrerPolicy: "no-referrer"
    });

    if (response.ok === false) {
        console.error(response);
        throw "The request has failed";
    }

    const json = await response.text();
    if (json?.length > 0) {
        return JSON.parse(json) as any;
    }

    return {} as any;
}

export const remoter: Remoter = {
    get: remoteCall
} as const;
