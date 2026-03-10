---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Benson Craft Circle"
  tagline: "A gathering place for knitters, crocheters, and anyone who loves making stuff."
  actions:
    - theme: brand
      text: Upcoming Meetings →
      link: /calendar
  image:
    src: /knitting-hero.jpg
    alt: Person knitting with yarn
features:
  - icon: 🗓️
    title: 11AM-1PM every other Saturday
    # todo:: test me
    details: <a href="geo:0,0?q=319 S Elm St, Benson, NC, United States"> 319 S Elm Street, Benson, North Carolina</a>
---

<style>
.VPHero .VPImage {
  border-radius: 4px;
}

.VPFeatures {
  display: flex; 
}
.VPFeature {
  max-width: 300px;
}
</style>