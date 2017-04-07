// Add a tail to every post from tail.md
// Great for adding copyright info

var fs = require('fs');

hexo.extend.filter.register('before_post_render', function (data) {
    try {
        if (data.copyright == false) return data;
        var file_content = fs.readFileSync('tail.md');
        if (file_content && data.copyright == true) {
            // Add seperate line
            data.content += '\n___\n';
            data.content += file_content;
            var permalink = '本文地址：' + data.permalink;
            data.content += permalink;
        }
    } catch (err) {
        if (err.code !== 'ENOENT') throw err;
    }
    return data;
});