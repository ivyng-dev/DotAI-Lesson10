# NexaFlow GitHub Pages 部署包

這個資料夾是純靜態網站，使用瀏覽器原生支援的 HTML、CSS 與 JavaScript；不需要 Node.js、資料庫或後端伺服器。

## 檔案說明

| 檔案 | 用途 |
| --- | --- |
| `index.html` | 網頁內容、區塊結構與 SEO 基本資訊。 |
| `styles.css` | 科技簡約風視覺、RWD 與無障礙動態規則。 |
| `script.js` | 手機導覽選單與 FAQ 展開互動。 |
| `assets/hero-signal-hub.jpg` | Hero 區塊的主視覺圖片。 |
| `assets/favicon.svg` | 瀏覽器分頁的 NexaFlow 圖示。 |
| `.nojekyll` | 讓 GitHub Pages 直接提供靜態檔案，不進行 Jekyll 處理。 |

## 上傳前先修改的內容

在 `index.html` 搜尋並替換下列示範資訊即可套用到你的產品。

| 目前示範內容 | 建議替換位置 |
| --- | --- |
| `NexaFlow` | 品牌名稱、頁面標題、各段內文與頁尾。 |
| `hello@nexaflow.example` | Hero 下方 CTA 與頁尾的聯絡信箱。 |
| 產品亮點與 FAQ | 對應的功能說明、問題與答案。 |
| `assets/hero-signal-hub.jpg` | 若改用自己的圖片，請保留 `assets/` 資料夾並同步更新圖片檔名。 |

## 部署摘要

請將**此資料夾內的所有檔案**放在 GitHub 儲存庫根目錄，而不是把整個 `github-pages` 資料夾再包一層上傳。接著在 GitHub 儲存庫的 **Settings → Pages** 選擇從分支部署，並選擇 `main` 分支與根目錄 `/ (root)`。[GitHub Pages 官方部署說明](https://docs.github.com/pages/getting-started-with-github-pages/creating-a-github-pages-site)
