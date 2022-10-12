export async function onRequest() {
  return new Response("<h1>Hello, world!</h1>", {
    headers: { "content-type": "text/html" },
  });
}
