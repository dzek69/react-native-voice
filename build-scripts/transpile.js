const { remove, ensureDir } = require('fs-extra');

(async () => {
    const tasks = [
        () => remove('dist'),
        () => ensureDir('dist'),
    ];

    try {
        await tasks[0]();
        await tasks[1]();
    }
    catch (error) {
        console.error('There was a problem with transpiling: ', error);
        process.exit(1);
    }
})();
