const sendkeys = require('sendkeys');

(async () => {
    try {
        await sendkeys('^i');

        await sendkeys('aaaaaa');
        await sendkeys('{ENTER}');
    } catch (error) {
        console.error(error);
    }
})();

// sendkeys.sync('this is synchronous')