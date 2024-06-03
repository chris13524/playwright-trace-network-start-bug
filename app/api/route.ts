export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return Response.json({ data: "Hello" })
}
