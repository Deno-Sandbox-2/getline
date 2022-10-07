const encoder = new TextEncoder(),
    decoder = new TextDecoder();

export function getline(message?: string, limit = 1024) {
    if (message) Deno.stdout.writeSync(encoder.encode(message));

    const bytes = new Uint8Array(limit);
    
    let index = 0;
    while (index < limit + 1) {
        const status = Deno.stdin.readSync(bytes.subarray(index, index+1));
        if (!status || bytes[index] == 10) break;
        index++;
    }

    return decoder.decode(bytes.subarray(0, index)).trim();
}