export default function MapLoader () {
    return new Promise((resolve, reject) => {
        if (window.AMap) {
            resolve(window.AMap)
        } else {
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = 'https://webapi.amap.com/maps?v=1.4.8&key=597c5c3a47b28328c6d3e1d82a8446b4&callback=initAMap';
            s.onerror = reject;
            document.body.appendChild(s);
        }
        window.initAMap = ()=> {
            resolve(window.AMap)
        }
    })
}