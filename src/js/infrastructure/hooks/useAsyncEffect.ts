import { DependencyList, useEffect, useState } from "react";

export function useAsyncEffect(
    effect: () => Promise<void>,
    deps?: DependencyList,
) {
    const [_, setError] = useState<unknown>();

    useEffect(() => {
        effect().catch(
            error => setError(() => { throw error; })
        );
    }, deps);
}
