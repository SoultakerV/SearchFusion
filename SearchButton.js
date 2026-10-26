const form = document.querySelector("form");

form.addEventListener('submit', function (e) {
    e.preventDefault(); // 阻止表单默认提交导致的页面刷新
    const kw = document.getElementById("content").value;
    const engine = document.getElementById("selection").value;
    const urls = {
        BaiDu: q => `https://www.baidu.com/s?wd=${encodeURIComponent(q)}`,
        Bing: q => `https://www.bing.com/search?q=${encodeURIComponent(q)}`,
        Google: q => `https://www.google.com/search?q=${encodeURIComponent(q)}`
    };
    if (urls[engine] && kw) {
        window.open(urls[engine](kw), "_blank");
    }
});
