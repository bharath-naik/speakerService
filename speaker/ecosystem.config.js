module.exports = {
  apps : [
    {
      script: './webSockerServer.js',
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
