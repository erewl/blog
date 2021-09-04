---
layout: post
title:  "implicitly"
date:   2020-11-27 14:25:00 +0100
categories: monthly learning reading
---

In this blog post I want to explain in my own words and show the usage of the Predef `implicitly`.


If you look into `Predef.scala` of the scala compiler (version 2.12.) you will find:
```
@inline def implicitly[T](implicit e: T) = e    // for summoning implicit values from the nether world
```
Okay, okay. That sounds like we are reading some kind of Fantasy novel.
As much as I like finding those creative outbursts, it doesn't help much for me.
In newer version this documentation has been updated to:
```
  /** Summon an implicit value of type `T`. Usually, the argument is not passed explicitly.
  [...]
   */
  @inline def implicitly[T](implicit e: T): T = e
```

