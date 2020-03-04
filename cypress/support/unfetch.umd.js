// This function allows to handle calls as XHR after fetch method deletion
!(function (e, n) { typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = n() : typeof define === 'function' && define.amd ? define(n) : e.unfetch = n(); }(this, () => function (e, n) {
    return n = n || {}, new Promise(((t, o) => {
        const r = new XMLHttpRequest(); const s = [];
        const u = []; const i = {}; var
            f = function () {
                return {
                    ok: (r.status / 100 | 0) == 2,
                    statusText: r.statusText,
                    status: r.status,
                    url: r.responseURL,
                    text() { return Promise.resolve(r.responseText); },
                    json() { return Promise.resolve(JSON.parse(r.responseText)); },
                    blob() { return Promise.resolve(new Blob([r.response])); },
                    clone: f,
                    headers: {
                        keys() { return s; }, entries() { return u; }, get(e) { return i[e.toLowerCase()]; }, has(e) { return e.toLowerCase() in i; },
                    },
                };
            }; for (const a in r.open(n.method || 'get', e, !0), r.onload = function () { r.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (e, n, t) => { s.push(n = n.toLowerCase()), u.push([n, t]), i[n] = i[n] ? `${i[n]},${t}` : t; }), t(f()); }, r.onerror = o, r.withCredentials = n.credentials == 'include', n.headers)r.setRequestHeader(a, n.headers[a]); r.send(n.body || null);
    }));
}));
