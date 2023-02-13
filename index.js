// Import stylesheets
import './style.css';
import scanner from 'scanner-js'

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;



function scanToWebPageAndUpload() {
  scanner.scan(displayImagesOnPage, {
    "twain_cap_setting" : {
        "ICAP_PIXELTYPE" : "TWPT_RGB", // Color
        "ICAP_SUPPORTEDSIZES" : "TWSS_USLETTER" // Paper size: TWSS_USLETTER, TWSS_A4, ...
    }, 
    "output_settings" : [
        { "type" : "return-base64", "format" : "jpg"} // return images to web page
        { "type": "upload", "format": "pdf", // upload as PDF
            "upload_target": { 
                "url": "https://asprise.com/scan/applet/upload.php?action=dump"
            }
        }
    ]
  });
}