const fs = require('fs/promises');

const foo = async () => {
    let fd;
    try {
        fd = await fs.open('./node.md','r+');
        console.log('fd',fd);
    } catch (err) {
        console.log('err', err);
    } finally {
        fd.close();
    }
}

foo()