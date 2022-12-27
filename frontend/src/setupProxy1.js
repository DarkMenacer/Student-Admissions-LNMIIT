import { createProxyMiddleware } from 'http-proxy-middleware'
import * as fs from 'fs';

const protocol = JSON.parse(process.env.HTTPS) ? "https:" : "http:";
const host = process.env.REACT_APP_PROXY_HOST
const port = process.env.REACT_APP_PROXY_PORT

export function temp(app) {
    app.use(
      '/rest',
      createProxyMiddleware({
        target: {
          protocol: protocol,
          host: host,
          port: port,
          pfx: fs.readFileSync('src/root-cert.pem')
        },
        changeOrigin: true,
      })
    );
};