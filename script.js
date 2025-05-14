function domReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 500);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

domReady(function () {
    function onScanSuccess(decodedText) {
        document.getElementById('result').innerText = "Scanned: " + decodedText;
    }

    function onScanFailure(error) {
        console.warn(`QR scan error: ${error}`);
    }

    let html5QrcodeScanner = new Html5QrcodeScanner(
        "reader", { fps: 10, qrbox: { width: 200, height: 200 } }
    );
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);
});