const PROXY_CONFIG = [
  {
    context: [
      "/api/shipping",
      "/api/products"
    ],
    target: "http://localhost:8080",
    secure: false
  }
]

module.exports = PROXY_CONFIG;