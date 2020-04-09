const PROXY_CONFIG = [
    {
      context: ['/api'],
      target: 'http://localhost:5001/api',
      secure: false,
      pathRewrite: { '^/api': '' }
    }
  ];
  
  module.exports = PROXY_CONFIG;