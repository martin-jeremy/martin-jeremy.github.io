---
title: Facetting with ggplot
weight: 10
menu:
  notes:
    name: Facetting with ggplot
    identifier: notes-r-ggplot-facetting
    parent: notes-r-ggplot
    weight: 10
---

{{< note title="Various Facetting">}}

Code snippet to play with facetting a ggplot
```r
library(ggplot2)
library(dplyr)
ggplot(data = select(iris, -Species)) +
  geom_point(aes(x = Sepal.Length, y = Sepal.Width), col = 'grey') +
  geom_point(aes(x = Sepal.Length, y = Sepal.Width, col = Species), data = iris) +
  facet_wrap(~Species) + theme_bw()
```
![img]("static/notes/R/img.png")