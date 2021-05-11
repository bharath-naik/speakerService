module.exports = {
  apps : [
    {
      script: './socketioServer.js',
      name :'masterSpeakerSocket',
      autorestart: true,
      watch: true
    },
    {
    script: './backend.js',
    name     : 'MasterBackend',
    autorestart: true,
    watch: true
    }]
};
