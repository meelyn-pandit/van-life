export async function getVans() {
    const res = await fetch("/api/vans")
    console.log('api fetch response', res)
    if(!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status,
        }
    }
    const data = await res.json()
    return data.vans
}