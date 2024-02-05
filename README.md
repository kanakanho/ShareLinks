# ShareLinks

ShareLinks は デザインなし、ノーコードでポートフォリオを作成するためのサービスです。
json の形に従って情報を入力することでオリジナルのポートフォリオを作ることができます。

バグ等あればご報告ください。 [@kanakanho](https://twitter.com/Shiba_ao_)

# Jsonの書き方

要素は大きく分けて

- ヘッダ
- リンク
- 記事

の 3 つの要素で構成されています。

最後に[全体の例](#全体の例)が書いてあります。

## ヘッダ

#### 例

```json
"Name": "あなたの名前",
"Description": "プロフィールが書けます",
"Icon": "外部のサービスにあげた画像のリンクを貼ってください"
```

> [!NOTE]
> Description では `\n` を使って改行ができます

## リンク

#### 例

```json
"Links": [
{ "alt": "アイコンタイプ1", "url": "自分のURL1" },
{ "alt": "アイコンタイプ2", "url": "自分のURL2" },
],
```

### アイコンタイプ

#### 自由なリンクを貼るもの

- Blog

#### サービス名が指定できるもの

- Twitter
- Instagram
- Facebook
- Line
- note
- Youtube
- Tiktok
- niconico
- Github
- Qiita
- Zenn

## 記事

#### 例

```json
"article": [
  {
    "image": "",
    "movie": "",
    "title": "",
    "article": "",
    "margin": "",
    "link": ""
  },
]
```

### 各項目の説明

### image

貼りたい画像のURLを入力してください。

> [!WARNING]  
> image と movie はどちらかのみ設定してください

### movie

Youtubeの動画を貼れます。

> [!NOTE]
> Youtube のリンクのうちの後ろにある英数字のみを入力してください
>
> #### 例
>
> YoutubeのURL
>
> ```
> https://youtu.be/7j3M3-k7X3g
> https://www.youtube.com/watch?v=7j3M3-k7X3g
> ```
>
> 入力する文字列  
> `7j3M3-k7X3g`

### title

その記事につけたいタイトルを入力してください

### article

その記事につけたい説明を入力してください

### margin

記事と記事の間に空白を挿入できます

> [!CAUTION]
> margin を設定する場合は他の項目に何も入力しないでください

### link

その記事にリンクさせたいページがある場合、そのURLを入力してください。

### 全体の例

```json
[
  {
    "Name": "Your Name",
    "Description": "Your Profile",
    "Icon": "your icon link (Ex: https://exaple.con/icon.png)",
    "Links": [
      { "alt": "Twitter", "url": "https://twitter.com/" },
      { "alt": "Github", "url": "https://github.com/" },
      { "alt": "Article", "url": "https://hatenablog.com/" },
      { "alt": "Qiita", "url": "https://qiita.com/" },
      { "alt": "Zenn", "url": "https://zenn.dev/" },
      { "alt": "Youtube", "url": "https://www.youtube.com/" }
    ],
    "article": [
      {
        "image": "",
        "movie": "",
        "title": "大きなタイトル",
        "article": "小さな補足",
        "margin": "",
        "link": ""
      },
      {
        "image": "https://kanakanho-record.vercel.app/img/evening.jpg",
        "movie": "",
        "title": "画像の添付",
        "article": "",
        "margin": "",
        "link": ""
      },
      {
        "image": "",
        "movie": "7j3M3-k7X3g",
        "title": "動画の添付",
        "article": "",
        "margin": "",
        "link": ""
      },
      {
        "image": "",
        "movie": "",
        "title": "リンクもできるよ",
        "article": "",
        "margin": "",
        "link": "https://ja.react.dev/blog/2023/03/16/introducing-react-dev"
      },
      {
        "image": "",
        "movie": "",
        "title": "",
        "article": "",
        "margin": "absent",
        "link": ""
      },
      {
        "image": "",
        "movie": "",
        "title": "空白を開ける",
        "article": "",
        "margin": "",
        "link": ""
      },
      {
        "image": "",
        "movie": "",
        "title": "",
        "article": "",
        "margin": "absent",
        "link": ""
      },
      {
        "image": "",
        "movie": "",
        "title": "",
        "article": "小",
        "margin": "",
        "link": ""
      },
      {
        "image": "",
        "movie": "",
        "title": "",
        "article": "",
        "margin": "low",
        "link": ""
      },
      {
        "image": "",
        "movie": "",
        "title": "",
        "article": "中",
        "margin": "",
        "link": ""
      },
      {
        "image": "",
        "movie": "",
        "title": "",
        "article": "",
        "margin": "high",
        "link": ""
      },
      {
        "image": "",
        "movie": "",
        "title": "",
        "article": "大",
        "margin": "",
        "link": ""
      }
    ]
  }
]
```
