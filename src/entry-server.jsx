import { renderToReadableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BlogDataContext } from './context/BlogData.jsx';
import App from './App.jsx';

export async function render(url, blogData = null) {
  let renderError;
  const stream = await renderToReadableStream(
    <HelmetProvider><StaticRouter location={url}><BlogDataContext.Provider value={blogData}><App /></BlogDataContext.Provider></StaticRouter></HelmetProvider>,
    { onError(error) { renderError = error; } }
  );
  await stream.allReady;
  if (renderError) throw renderError;
  return new Response(stream).text();
}
