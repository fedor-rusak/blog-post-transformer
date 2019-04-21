# blog-post-transformer
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

I need a simple way to style my blog post entries in html pages I like. My personal thing.

## Before using

Remember to download actual site [sources](https://github.com/fedor-rusak/fedor-rusak.ru) before running any scripts. Don't worry it is ignored by *.gitignore*.

## Idea

Use nodeJS to make transformation of text files into final blog post html pages.

After tansforming set of pages each one should appear plus one called *content* which shows links to all posts and *latest* which leads to most recent post.

All previously generated pages are removed. But if there were no changes in templates or content pages will be identical to old ones.

## Tech used

NodeJs ~ 8

## History

### 1.1.0
 - Old generated files removed before rendering!

### 1.0.4
 - latest page rendered!

### 1.0.3
 - content page rendered!

### 1.0.2
 - script now makes simple template-based rendering of page from contentIndex file

### 1.0.1

 - initial package stuff