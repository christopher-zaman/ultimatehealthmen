export default function handler(request, response) {
  response.setHeader("X-Robots-Tag", "noindex");
  response.setHeader("Content-Type", "text/plain; charset=utf-8");
  return response.status(404).send("Page not found");
}