module.exports = {
    client.functionManager.createCustomFunction({
      name: '$i',
      type: 'djs',
      code: async d => {
        const aoiData = d.util.aoiFunc(d);
          //nothing here, it's comment
        return {
          code: d.util.setCode(aoiData)
        }
      }
    });
};