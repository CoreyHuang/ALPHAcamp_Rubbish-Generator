# 幹話產生器
### 由node.js與express所寫成的一個語言產生器，專門產生工程師,設計師與創業家的幹話網站。

---

![image](https://github.com/CoreyHuang/ALPHAcamp_Rubbish-Generator/blob/master/pic.png)
## Features(功能描述):
#### 使用者可以瀏覽代表三種職業的印象圖片。
#### 使用者可以點擊"說幹話"的按鈕後隨機產生一句話。
#### 使用者可以點擊圖像並使其被選取。
#### 使用者可以連續點擊"說幹話"的按鈕且不需重新選取人物。


## installation and execution(安裝與執行步驟):
#### `<安裝步驟>`
#### 1. 安裝git
```
https://git-scm.com/download/win
```
#### 2. 安裝nvm
```
Enter https://github.com/coreybutler/nvm-windows/releases
Click nvm-setup.zip to install
```
#### 3. 安裝node.js與使用指定版本
```
nvm install 10.15.0
nvm use 10.15.0
```
#### 4. 安裝npm nodemon
```
npm install -g nodemon
```

#### `<執行步驟>`
#### 1. 使用terminal下載專案
```
git clone https://github.com/CoreyHuang/ALPHAcamp_Rubbish-Generator.git
```
#### 2. 安裝npm套件(package.json)
```
npm install
```
#### 3. 開啟本地伺服(須進去資料夾)
```
nodemon app.js or npm run dev
```
#### 4. 執行
```
URL: http://localhost:3000/
```


## Prerequisites(環境建置與需求):
#### `<安裝需求>` : 版本為記錄用，並非必須
#### 1. git : v2.27.0.windows.1
#### 2. nvm : v1.1.7
#### 3. node : v10.15.0
#### 4. npm : v6.4.1
#### 5. nodemon : v2.0.4
#### `<npm套件>`
#### 1. express : v4.17.1
#### 2. express-handlebars : v5.1.0
#### 3. body-parser : v1.19.0
