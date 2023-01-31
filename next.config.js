const fs = require("fs")

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
  },
}

{/*
    nextScriptWorkers for Third Party Scripts
    Doc Ref:
      https://nextjs.org/docs/basic-features/script#offloading-scripts-to-a-web-worker-experimental
*/}

module.exports = nextConfig
