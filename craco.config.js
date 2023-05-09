const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options:{
                lessLoaderOptions:{
                    lessOption: {
                        modifyVars: { '@primary-color': 'rgb(0,82,204)', '@font-size-base': '16px'},
                        javascriptEnabled:true,
                    },
                },
            },
        },
    ],
  };