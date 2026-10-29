import { renderToReadableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';

export async function render(url) {
  const stream = await renderToReadableStream(
    <HelmetProvider><StaticRouter location={url}><App /></StaticRouter></HelmetProvider>
  );
  await stream.allReady;
  return new Response(stream).text();
}
