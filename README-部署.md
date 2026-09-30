# 王陸海網站：已套用 SEO 與 AI 搜尋研究建議

這是一整套 GitHub Pages 靜態網站，不是單一 HTML。請將本壓縮包解壓後的**所有檔案與資料夾**放到原儲存庫的發布根目錄；不能只換 index.html，否則 CSS、圖片與研究詳頁會遺失。

## 已完成

- 中英文首頁、獨立著作索引、研究主題頁、資料來源與編輯說明。
- 10 篇近期研究各有中英文界面的獨立詳頁：合計 20 頁；全站正式頁共 28 頁。
- 保留原本 146 筆較早期著作及搜尋／年份篩選；中文摘要直接顯示。
- 依 PubMed 核對近期論文 DOI、英文原始題名、完整作者、期刊與日期，區分線上出版日與卷期日期。
- canonical、相互對應的 hreflang、Open Graph、分享預覽，以及 Person / WebPage / ScholarlyArticle / BreadcrumbList JSON-LD。
- 提供 robots.txt、sitemap.xml、CNAME、.nojekyll。
- 真正的 /en/ 靜態 HTML 及實際語言連結，不再依賴 localStorage 改變同一頁的語言。
- 兩張照片與背景圖片改成外部 WebP，可獨立快取；img 補尺寸，保留圖片說明。
- 5 個舊版首頁保留內容但加 noindex，未列入 sitemap。
- 根據中研院較新履歷，英文 metadata 不再把 Vice President 寫為現職。
- 新增可查證的問答、原文來源、研究限制與中文摘要整理／審校說明。

## 部署（GitHub 網頁介面）

1. 在原儲存庫建立備份或新分支，確認目前發布位置是 main 根目錄或既有發布分支。
2. 解壓本檔，使用 Add file → Upload files 上傳整包內容到發布根目錄。
3. **不要多套一層資料夾**：index.html、assets、en、publications 等必須在發布根目錄。
4. 同時更新 index_old_1.html 至 index_old_5.html，保留其中 noindex 設定。
5. 確認 CNAME 仍為 luhaiwang.com，.nojekyll 也已加入 Git（隱藏檔可能未被拖曳選取）。
6. 提交後等待 Actions／GitHub Pages 成功；若原網站使用自訂建置流程，請依原設定發布這些靜態檔案。
7. 部署後查看首頁、/en/、/publications/、/research/、/about-this-site/，以及任一論文詳頁。
8. 檢查 /robots.txt、/sitemap.xml、/assets/site.css 都回應 200。

本包依原 main commit 69a23509dd19374ac89eac63a7a1f0b4048911a3 製作。若之後有人修改網站，先比較差異再合併，避免覆蓋新的內容。

## 開發者部署範例

```bash
# 從原儲存庫建立新分支，將本包解壓到工作目錄並保留資料夾結構。
git switch -c feat/static-research-seo
git status --short
git add index.html assets en publications research about-this-site \
  robots.txt sitemap.xml CNAME .nojekyll index_old_*.html README-部署.md
git diff --cached --check
git commit -m "Add static bilingual research pages and verified SEO metadata"
# 再依既有協作流程 push、開 PR，或合併至發布分支。
```

## 還需要站主處理

- 驗證 Google Search Console 與 Bing Webmaster Tools，提交正式 sitemap。
- 部署後檢查正式網址、索引狀態、實際載入效能與搜尋／AI 引用數據；本機測試不等於搜尋引擎已收錄。
- 確認中文摘要／譯題及圖片的使用權，並指定專業審校者與網站維護／勘誤責任人。本次沒有假造授權、譯者或審校者。
- 若要更改 AI 訓練政策，再單獨決定 GPTBot 規則。目前維持原本開放抓取的政策，並明確允許 OAI-SearchBot；沒有自動替站主新增訓練封鎖。
- 檢查主機或 CDN 是否阻擋爬蟲；robots.txt 的 Allow 不能覆蓋防火牆限制。

## 本機預覽

```bash
python -m http.server 8000
# 用自己的瀏覽器開啟 http://localhost:8000/
```

這套網站採用根目錄資產路徑，正式部署到 luhaiwang.com 根目錄。請透過本機 HTTP 伺服器預覽，不要直接雙擊 HTML 當作最終驗收。

## 已套用，不代表已上線

本次交付包含修改檔與本機驗證，未提交 GitHub 或更新正式網站。SEO、GEO、AEO、LLMO、AIO 的基礎改善已加入程式碼，但不保證搜尋排名或 AI 引用。
