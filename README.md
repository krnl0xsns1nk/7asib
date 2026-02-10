# 🇲🇦 7asib — احسب معدلك الدراسي بسهولة

> أدخل نقاطك… واحصل على معدلك فورًا وفق النظام الرسمي المغربي، مجاني 100%، بلا اعلانات !

> ليس مجرد موقع، بل الة حاسبة للمعدل في جيبك في اي وقت

🌍 Live: https://7asib.vercel.app

---

## ✨ ما هو 7asib؟

<p dir="rtl">
  <b>7asib</b> هو موقع يتيح لك حساب معدلك الدراسي بحرية وبدون ازعاج الاعلانات، يمكنك من خلال زيارة الموقع او ثبيته ك pwa والدخول اليه مرة واحدة، الاستفادة من امكانية حساب معدلك مجانا في اي وقت في اي مكان، نحسب حسب المنهج التعليمي المغربي واسفله تجيدون المعاملات التي استخدمناها للحساب، ولا تنسو دعم المشروع بنجمة !
</p>

## المميزات 🦾

- يدعم العربية 🇸🇦 والفرنسية 🇫🇷 تلقائيًا حسب لغة الجهاز
- يعمل كتطبيق **PWA** ويمكن تثبيته على الهاتف
- سريع وخفيف ولا يحتاج تسجيل دخول او اشتراك
- مبني بتقنيات حديثة جدا وامن للغاية

---

## 🎯 لماذا هذا المشروع؟

الكثير من التلاميذ:
- لا يعرفون طريقة حساب المعدل الصحيحة
- يخطئون في معاملات المواد او تواجههم لخبطة في الحساب
- يضيعون الوقت في الحساب اليدوي
- يواجهون صعوبة في الحساب اليدوي 

<p dir="rtl"><b>7asib يحول هاته المشاكل الى عملية بسيطة وخفيفة وسريعة</b></p>

---

# DEV / TECH :
and here's some tech information about the repo: 
### tech stack :
> NextJs + TypeScript + Next-Pwa !
### Programmer: 
- Github: [@krnl0xsns1nk](https://github.com/krnl0xsns1nk)
- Project: [7asib](https://krnl0xsns1nk/7asib)

## 🤝 Contributing

Contributions are welcome!

##### Fork the repository
Click **Fork** on GitHub to create your own copy.
##### Clone your fork

```bash
git clone https://github.com/YOUR-USERNAME/7asib.git
cd 7asib
pnpm install
```
##### Create a new branch 

```bash
git checkout -b feature/my-change
```
##### Make your changes

- edit files like add new function(level) to lib/levels.tsx
- examples: add translation also to lib/locales/(ar.json/fr.json)
- test locally with "npm run dev"
##### commit and puuuuuuuuuuuush
```bash
git add .
git commit -m "Add: my improvement"
git push origin feature/my-change
```
##### pull request 
Go to your fork on GitHub and click New Pull Request.


## 🗂️ Project Structure (needed)

```bash
README.md
├── package.json
├── public/
├── src
│   ├── app
│   │   ├── [lang]
│   │   │   ├── [niveau]
│   │   │   │   └── page.tsx
│   │   │   ├── about
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── levels
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── comps
│   │   ├── Footer.tsx
│   │   ├── Heaer.tsx
│   │   ├── Sections.tsx
│   │   └── secCon.tsx
│   ├── lib
│   │   ├── Writer.tsx
│   │   ├── calculator.tsx
│   │   ├── creatT.ts
│   │   ├── getLocal.tsx
│   │   ├── levels.tsx
│   │   └── locales
│   │       ├── ar.json
│   │       ├── fr.json
│   │       └── index.ts
└──└── styles/
```

# معاملات المواد : 

<table border="1" cellpadding="6" cellspacing="0">
  <thead>
    <tr>
      <th>المستوى \ المواد الدراسية</th>
      <th>العربية</th>
      <th>الفرنسية</th>
      <th>الرياضيات</th>
      <th>الفيزياء</th>
      <th>علوم الحياة</th>
      <th>التاريخ والجغرافيا</th>
      <th>التربية الإسلامية</th>
      <th>الفلسفة</th>
      <th>الإنجليزية</th>
      <th>الاجتماعيات</th>
      <th>التكنولوجيا</th>
      <th>المعلوميات</th>
      <th>الرياضة</th>
      <th>المواظبة</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>TAS3A</th>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td>1</td>
      <td>1</td>
      <td></td>
      <td>1</td>
      <td></td>
      <td></td>
      <td>1</td>
      <td></td>
      <td></td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <th>TCSF</th>
      <td>3</td>
      <td>3</td>
      <td>4</td>
      <td>4</td>
      <td>4</td>
      <td>2</td>
      <td>2</td>
      <td>2</td>
      <td>3</td>
      <td></td>
      <td></td>
      <td>2</td>
      <td>2</td>
      <td>1</td>
    </tr>
    <tr>
      <th>TCAL</th>
      <td>4</td>
      <td>3</td>
      <td>2</td>
      <td>2</td>
      <td>2</td>
      <td>1</td>
      <td>1</td>
      <td>3</td>
      <td>2</td>
      <td></td>
      <td></td>
      <td></td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <th>1BAC ex</th>
      <td>2</td>
      <td>4</td>
      <td>7</td>
      <td>7</td>
      <td>7</td>
      <td>2</td>
      <td>2</td>
      <td>2</td>
      <td>2</td>
      <td></td>
      <td></td>
      <td></td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <th>1BAC Letters</th>
      <td>4</td>
      <td>4</td>
      <td>1</td>
      <td></td>
      <td>1</td>
      <td>4</td>
      <td>2</td>
      <td>4</td>
      <td>4</td>
      <td></td>
      <td></td>
      <td></td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <th>2BAC PC</th>
      <td>2</td>
      <td>2</td>
      <td>7</td>
      <td>7</td>
      <td>7</td>
      <td></td>
      <td>1</td>
      <td>3</td>
      <td>2</td>
      <td></td>
      <td></td>
      <td></td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <th>2BAC Letters</th>
      <td>4</td>
      <td>2</td>
      <td>1</td>
      <td></td>
      <td>1</td>
      <td>4</td>
      <td>1</td>
      <td>4</td>
      <td>2</td>
      <td></td>
      <td></td>
      <td></td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <th>AAC</th>
      <td>5</td>
      <td>5</td>
      <td>5</td>
      <td>2</td>
      <td>3</td>
      <td></td>
      <td>2</td>
      <td></td>
      <td>1</td>
      <td>3</td>
      <td></td>
      <td></td>
      <td>2</td>
      <td>1</td>
    </tr>
    <tr>
      <th>BAC</th>
      <td>5</td>
      <td>5</td>
      <td>5</td>
      <td>2</td>
      <td>3</td>
      <td></td>
      <td>2</td>
      <td></td>
      <td>1</td>
      <td>3</td>
      <td>2</td>
      <td></td>
      <td>2</td>
      <td>1</td>
    </tr>

  </tbody>
</table>

## ⭐ ادعم المشروع بنجمة

إذا كان **7asib** قد ساعدك، أو وفّر عليك الوقت، أو سهّل عليك حساب معدلاتك الدراسية…

فلا تنسَ وضع ⭐ نجمة للمشروع على GitHub.

قد تبدو حركة بسيطة، لكنها في عالم المشاريع المفتوحة المصدر تعني الكثير:

- زيادة وصول المشروع لطلاب آخرين يحتاجونه
- تحفيز للاستمرار في تطوير وتحسين الموقع
- إعطاء ثقة للمساهمين الجدد عند زيارة المستودع

👉 نقرة واحدة منك قد تجعل هذا المشروع يصل لآلاف الطلاب.

شكرًا لدعمك 💙
