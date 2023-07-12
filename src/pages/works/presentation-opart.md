---
# setup layout

layout: '/src/layouts/Layout.astro'

title: 'Présentation OpArt'
pubDate: 2019-02-24
description: 'This is the first post of my new Astro blog.'
author: 'Maxence Lavenu'
image:
    url: 'https://docs.astro.build/assets/full-logo-light.png' 
    alt: 'The full Astro logo.'
tags: ["astro", "blogging", "learning in public"]
legacy: true
unlisted: false
---

# Présentation OpArt

Ce programme a été réalisé en tant que projet final de ma classe d’**ICN**, en première.

Étant un projet de groupe, je ne parlerai en détail que des parties sur lesquelles j’ai travaillé. Le thème était « rendre dynamique une oeuvre de Vasarely et l’accompagner d’une documentation illustrée » – j’ai donc fait une version d’ « Orion-K » modifiable facilement avec les touches du clavier, ainsi qu’une biographie miniature. (avec une fenêtre d’aide)

*Comment m’y suis-je pris ?* <br>
J’ai codé deux grilles : une de 25 carrés sur 25 carrés pour contenir les grands carrés de l’oeuvre, et une autre de 25 carrés sur 25 carrés pour les petits carrés. Au lancement du programme, tous les carrés sont de couleurs aléatoires.

A chaque touche du clavier est assignée une fonction pour changer l’oeuvre, avec la palette de couleur sur les nombres (barre sur le clavier et pavé numérique).

<!-- ![Pre%CC%81sentation%20OpArt%203ec25e428f68498b835852274b3b98be/instructionsVasarely-1.png](Pre%CC%81sentation%20OpArt%203ec25e428f68498b835852274b3b98be/instructionsVasarely-1.png) -->

L’utilisateur peut donc faire son oeuvre personnelle soit en utilisant les touches du clavier pour les actions qu’elles fournissent soient en tapant sur des touches au hasard, pour obtenir une oeuvre plus « chaotique ».

[*Vidéo de démonstration du programme.*](https://drive.google.com/file/d/1Pr8jwO6QOLzqa9GQJIryoFKqBtjZL9Lb/view?usp=sharing)

*Vidéo de démonstration du programme.*

J’ai aussi codé l’agrandissement des images dans la biographie, ainsi que la page d’aide. La page d’aide fonctionne avec une base de données associant une touche au lien vers l’image, ainsi que la description de l’action qu’elle réalise.

[*Vidéo de démonstration des images et de l’aide du programme.*](https://drive.google.com/file/d/1nfM8bfRS9mnuAJ_1qkQ8z2FQHUeY1RVx/view?usp=sharing)

*Vidéo de démonstration des images et de l’aide du programme.*