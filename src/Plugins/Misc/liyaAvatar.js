module.exports = {
    client.functionManager.createCustomFunction({
      name: '$liya'
      type: 'djs',
      code: async d => {
    let data = d.util.aoiFunc(d);

    const Liya = await d.util.getUser(d, "693357228413026356");

    data.result = Liya.avatarURL({format: 'png', size: 4096, dynamic: true});
    return {
        code: d.util.setCode(data)
    }
}
    });
};
