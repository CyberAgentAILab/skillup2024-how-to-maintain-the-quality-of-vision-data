---
# You can also start simply with 'default'
theme: seriph
colorSchema: dark
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: ビジョン系データ品質の保ち方
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# take snapshot for each slide in the overview
overviewSnapshots: true
fonts:
  # basically the text
  sans: 'Noto Sans JP'
  # use with `font-serif` css class from windicss
  serif: 'Robot Slab'
  # for code blocks, inline code, etc.
  mono: 'Fira Code'
---

# ビジョン系データ品質の保ち方

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---
layout: default
---

# 自己紹介
##
<img src="/0000_20250313132438.png" style="width: 90%; display: block; margin: auto;" />

---
transition: fade-out
layout: two-cols
---

# 1. なぜいまさらデータの品質？ {.text-left}

<style>
.large-text {
  font-size: 1.3em;
}
</style>

- VLMもLLMもCNNもRNNもすべてデータが命{.large-text}
- 低品質データによってアーキテクチャの本来の弱点が隠されている{.large-text}
- 高品質データによってアーキテクチャの本来の強みが明らかになる{.large-text}
- レガシーなアーキテクチャの本来のポテンシャルを引き出せない{.large-text}

::right::

#
# &nbsp;
##
![1](/0002_image.png)

---
transition: fade-out
---

# データ品質を限界まで高めた結果（CNNでの出力）

<style>
img {
  width: 90%;
}
</style>

##
![21](/0021_full.jpg){.m-auto}

---
transition: fade-out
---

# データ品質を限界まで高めた結果（CNNでの出力）

<style>
img {
  width: 90%;
}
</style>

##
![22](/0022_head.jpg){.m-auto}

---
transition: fade-out
---

# データ品質を限界まで高めた結果（数値性能）

<style>
img {
  width: 80%;
}
</style>

##
- 人間でも視認が難しい極小の人体パーツでも実用的な検出精度を出せる
- 従来困難と思い込まれがちな「属性」も高精度に推定可能
- 頭部向き８方向（front 〜 left-front）のようにテクスチャだけでは判断が困難なクラスも推定可能

<img src="/0023_mAP.png" style="width: 67%; display: block; margin: auto;" />

---
transition: fade-out
layout: default
class: flex-row
---

# Public Dataset の品質

<style>
.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
}

.flex-row img {
  max-width: 65%;
  height: auto;
}
</style>

##
![1](/0004_000000000692.jpg)
![2](/0005_000000000692.jpg)

---
transition: fade-out
layout: default
class: flex-row
---

# Public Dataset の品質

<style>
.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
}

.flex-row img {
  max-width: 70%;
  height: auto;
}
</style>

##
![3](/0006_000000000544.jpg)
![4](/0007_000000000544.jpg)

---
transition: fade-out
layout: two-cols
---

# 低品質 vs 高品質

<style>
.large-text {
  font-size: 1.1em;
}
</style>

##
画質の比較ではない{.large-text}
![5](/0008_000000000692.jpg)

::right::

&nbsp;{.large-text}
##
![6](/0009_image.png)

---
transition: fade-out
layout: two-cols
---

# 低品質 vs 高品質

<style>
.large-text {
  font-size: 1.1em;
}
</style>

##
画質の比較ではない{.large-text}
![7](/0010_000000000544.jpg)

::right::

&nbsp;{.large-text}
##
![8](/0011_image.jpg)

---
transition: fade-out
---

# 2. 品質を高めるためのポイント

<style>
.large-text {
  font-size: 1.1em;
}
</style>

- 物体検出をベースに{.large-text}
  - 画像の量はそれほど重要ではなくラベルの量が重要（数十万枚も必要ない）{.large-text}
  - バリエーション（対象とカメラの角度、ノイズ、対象のサイズ、故意のアスペクト比破壊）の量が重要{.large-text}
  - １画像内に対象が存在する場合はどんなに小さなオブジェクトでもひとつ残らずポジティブサンプルとしてマークする{.large-text}
  - 不必要なマージンをとらない{.large-text}
  - 対象の境界を侵害しない{.large-text}
  - ナニを・ドコを学ばせるかの基準を明確にする{.large-text}
  - クラスの階層構造定義{.large-text}

---
transition: fade-out
layout: two-cols
---

# 画像の量はそれほど重要ではなくラベルの量が重要（数十万枚も必要ない）

<style>
.large-text {
  font-size: 1.0em;
}
</style>

##
- 合計 : 12,114 枚{.large-text}
  - MS-COCO: 4,533 枚
    - MS-COCOからピックアップした画像に対して再アノテーションを実施
  - 自撮り: 3,230 枚
    - 自撮りした画像に対してアノテーションを実施
  - フォトメトリックノイズ付加: 4,351 枚
    - 4,533 枚の一部 4,351枚 に対してフォトメトリックノイズを静的に適用した別の画像を生成してアノテーションを流用

::right::

# &nbsp;
##
![9](/0012_image.png)

---
transition: fade-out
layout: default
---

# バリエーション（対象とカメラの角度、故意のアスペクト比破壊、ノイズ、対象のサイズ）の量が重要

<style>
img {
  width: 80%;
}
</style>

<div class="content">
  <div class="row">
    <div class="ml-auto">
      <ul>
        対象とカメラの角度（俯角最大）
        <img src="/0013_upper.png" />
      </ul>
      <ul>
        ノイズ（コントラスト破壊）
        <img src="/0014_brightness.png" />
      </ul>
    </div>
    <div class="ml-0">
      <ul>
        故意のアスペクト比破壊（427ｘ640 -> 480x360）
        <img src="/0015_aspectratio.png" />
      </ul>
      <ul>
        ノイズ（モーションブラー）＋ 対象のサイズが極小
        <img src="/0016_blur.png" />
      </ul>
    </div>
  </div>
</div>

---
transition: fade-out
---

# 画像内に対象が存在する場合はどんなに小さなオブジェクトでもひとつ残らずポジティブサンプルとしてマークする

<style>
img {
  width: 50%;
}
</style>

##
![17](/0017_small.png){.m-auto}

---
transition: fade-out
---

# 不必要なマージンをとらない {.text-left}
# 対象の境界を侵害しない {.text-left}

<style>
img {
  width: 80%;
}
</style>

<div class="content">
  <div class="row">
    <div class="ml-auto">
      <ul>
        <img src="/0018_normal.png" />
      </ul>
    </div>
    <div class="ml-0">
      <ul>
        <img src="/0019_up___.png" />
      </ul>
    </div>
  </div>
</div>

---
transition: fade-out
---

# ナニを・ドコを学ばせるかの基準を明確にする {.text-left}

<style>
.large-text {
  font-size: 1.5em;
  line-height: 1;
}
</style>

##
- 例えば「着ぐるみ」を「人」とするか、しないかの基準を確定させる
- 人間でも正確な位置を推定不可能なクラス（今回は左側女性の「膝」）はアノテーションしない
  - 但し、特定ドメイン（今回は「人」）に完全に特化したデータを大量に学習させると、クラス間の相対的な位置関係をモデルが学んで位置推定可能になることが分かっている
- データ作成の最初から最後まで一貫した基準を遵守する

<img src="/0020_kuma.jpg" style="width: 43%; display: block; margin: auto;" />

---
transition: fade-out
layout: two-cols
---

# ナニを・ドコを学ばせるかの基準を明確にする {.text-left}

<style>
.large-text {
  font-size: 1.2em;
  line-height: 1.0;
}
</style>

##
<div>
  <Markdown>

  - 見えない部分を推定する・推定しない{.large-text}
    - 見えない部分を推定するなら全部アノテーションする
    - 見えない部分を推定しないなら一切無駄なアノテーションをしない
  - 右図の例では{.large-text}
    - ピザの上に全く見えない膝のアノテーションがある
    - 一方で後ろの人は全くアノテーションされていない
  - 中途半端に手を抜かない{.large-text}

  </Markdown>
</div>

::right::

# &nbsp;
# &nbsp;
##
![26](/0113_doko.png){.m-auto}

---
transition: fade-out
layout: two-cols
---

# クラスの階層構造定義 {.text-left}

<style>
.large-text {
  font-size: 1.5em;
  line-height: 1;
}
img {
  width: 85%;
}
</style>

##
コンテキストを階層構造で学ばせる（特徴の共有）{.large-text}
- クラス間の関係性を効率的に捉えられるようになる
  - テクスチャ
  - クラス間の相対的な位置関係・距離
- 少ないパラメータ量でも精度が向上する
- 右図は物体検出CNNのみで骨格検出に成功した様子
  - 各関節はテクスチャから判断できる特徴がほぼ無い
  - 各関節の左右の概念は教師として与えていない
  - 顔の各パーツは 5x5 ピクセルほどのテクスチャしか無い
  - クラス間の位置関係を正確に捉えている

##

::right::

&nbsp;
<img src="/0024_class_hierarchy.png" style="width: 100%; display: block; margin: auto;" />&nbsp;<img src="/0024_000000000693.jpg" style="width: 65%; display: block; margin: auto;" />

---
transition: fade-out
layout: two-cols
---

# クラスの階層構造定義 {.text-left}

<style>
.large-text {
  font-size: 1.5em;
  line-height: 1.2;
}
</style>

##
<div class="ml-50">
  <Markdown>

  - 全身{.large-text}
  - 性別{.large-text}
  - 大人・子供{.large-text}
  - 頭部{.large-text}
  - 正面向き{.large-text}
  - 顔{.large-text}
  - 目{.large-text}
  - 鼻{.large-text}
  - 耳{.large-text}
  - 口{.large-text}
  - 手{.large-text}
  - 右手・左手{.large-text}
  - 足{.large-text}

  </Markdown>
</div>

::right::

# &nbsp;
##

<div class="grid place-items-start mx-auto" style="width: 175%; max-width: 750px; aspect-ratio: 16 / 9; position: relative;">
  <img
    src="/0026_person.png"
    alt="背景画像"
    class="absolute inset-0 h-full object-contain block ml-0"
  />
  <img
    v-click
    v-motion
    :initial="{ x: 800, y: -100, scale: 1.0, rotate: -50 }"
    :enter="{ x: 0, y: 0, scale: 1.0, rotate: 0 }"
    src="/0100_body.png"
    alt="前面画像"
    class="absolute inset-0 h-full object-contain"
  />
  <img
    v-click
    v-motion
    :initial="{ x: 800, y: -100, scale: 1.0, rotate: -50 }"
    :enter="{ x: 0, y: 0, scale: 1.0, rotate: 0 }"
    src="/0101_gender.png"
    alt="前面画像"
    class="absolute inset-0 h-full object-contain"
  />
  <img
    v-click
    v-motion
    :initial="{ x: 800, y: -100, scale: 1.0, rotate: -50 }"
    :enter="{ x: 0, y: 0, scale: 1.0, rotate: 0 }"
    src="/0102_generation.png"
    alt="前面画像"
    class="absolute inset-0 h-full object-contain"
  />
  <img
    v-click
    v-motion
    :initial="{ x: 800, y: -100, scale: 1.0, rotate: -50 }"
    :enter="{ x: 0, y: 0, scale: 1.0, rotate: 0 }"
    src="/0103_head.png"
    alt="前面画像"
    class="absolute inset-0 h-full object-contain"
  />
  <img
    v-click
    v-motion
    :initial="{ x: 800, y: -100, scale: 1.0, rotate: -50 }"
    :enter="{ x: 0, y: 0, scale: 1.0, rotate: 0 }"
    src="/0104_front.png"
    alt="前面画像"
    class="absolute inset-0 h-full object-contain"
  />
  <img
    v-click
    v-motion
    :initial="{ x: 800, y: -100, scale: 1.0, rotate: -50 }"
    :enter="{ x: 0, y: 0, scale: 1.0, rotate: 0 }"
    src="/0105_face.png"
    alt="前面画像"
    class="absolute inset-0 h-full object-contain"
  />
  <img
    v-click
    v-motion
    :initial="{ x: 800, y: -100, scale: 1.0, rotate: -50 }"
    :enter="{ x: 0, y: 0, scale: 1.0, rotate: 0 }"
    src="/0109_eye.png"
    alt="前面画像"
    class="absolute inset-0 h-full object-contain"
  />
  <img
    v-click
    v-motion
    :initial="{ x: 800, y: -100, scale: 1.0, rotate: -50 }"
    :enter="{ x: 0, y: 0, scale: 1.0, rotate: 0 }"
    src="/0110_nose.png"
    alt="前面画像"
    class="absolute inset-0 h-full object-contain"
  />
  <img
    v-click
    v-motion
    :initial="{ x: 800, y: -100, scale: 1.0, rotate: -50 }"
    :enter="{ x: 0, y: 0, scale: 1.0, rotate: 0 }"
    src="/0111_ear.png"
    alt="前面画像"
    class="absolute inset-0 h-full object-contain"
  />
  <img
    v-click
    v-motion
    :initial="{ x: 800, y: -100, scale: 1.0, rotate: -50 }"
    :enter="{ x: 0, y: 0, scale: 1.0, rotate: 0 }"
    src="/0112_mouth.png"
    alt="前面画像"
    class="absolute inset-0 h-full object-contain"
  />
  <img
    v-click
    v-motion
    :initial="{ x: 800, y: -100, scale: 1.0, rotate: -50 }"
    :enter="{ x: 0, y: 0, scale: 1.0, rotate: 0 }"
    src="/0106_hand.png"
    alt="前面画像"
    class="absolute inset-0 h-full object-contain"
  />
  <img
    v-click
    v-motion
    :initial="{ x: 800, y: -100, scale: 1.0, rotate: -50 }"
    :enter="{ x: 0, y: 0, scale: 1.0, rotate: 0 }"
    src="/0107_right-left.png"
    alt="前面画像"
    class="absolute inset-0 h-full object-contain"
  />
  <img
    v-click
    v-motion
    :initial="{ x: 800, y: -100, scale: 1.0, rotate: -50 }"
    :enter="{ x: 0, y: 0, scale: 1.0, rotate: 0 }"
    src="/0108_foot.png"
    alt="前面画像"
    class="absolute inset-0 h-full object-contain"
  />
  <img
    v-click
    v-motion
    :initial="{ x: 800, y: -100, scale: 1.0, rotate: -50 }"
    :enter="{ x: 0, y: 0, scale: 1.0, rotate: 0 }"
    src="/0114_fullpose.png"
    alt="背景画像"
    class="absolute inset-0 h-full object-contain block ml-50"
  />
</div>


<script setup lang="ts">
const final = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  transition: {
    type: 'spring',
    damping: 10,
    stiffness: 20,
    mass: 2
  }
}
</script>

---
transition: fade-out
---

# 3. 実際のアノテーションサンプル

<style>
.large-text {
  font-size: 1.5em;
  line-height: 1;
}
</style>

##
480x360 の画像に対して 2,611 個 のラベルを付与する様子を57秒の動画に凝縮。{.large-text}

<style type="text/css" id="custom-css">
video {
  width: 100%; /* 動画をレスポンシブ化 */
  max-width: 500px; /* 動画の最大幅 */
  margin:0 auto;
}
</style>

<video controls>
  <source src="/0001_annotation.mp4" type="video/mp4">
</video>

---
transition: fade-out
---

# 4. まとめ

<style>
.large-text {
  font-size: 2em;
}
.red-text {
  color: red;
}
</style>

- アーキテクチャ重要{.large-text}
- パイプライン重要{.large-text}
- 品質の良いデータはもっと重要{.large-text .red-text}
- レガシーなアーキテクチャ単体でもかなり戦える{.large-text}
