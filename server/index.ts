const server = Bun.serve({
  fetch(req: Request) {
    return new Response("Bun!");
  },
  port: 3000,
});

console.log(`Listening on ${server.hostname}:${server.port}`);