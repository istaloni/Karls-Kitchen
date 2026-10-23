# Karl's Kitchen

I keep forgetting my own recipes, and what to cook for my wife. So I wrote them down.

A plain HTML/CSS site, no build step. Each recipe has a checkable shopping list, the method, cook's notes and a cooking log.

## Folder layout

```
index.html            Home page with a card for each dish
recipes/              One page per dish
css/home.css          Styles for the home page
css/recipe.css        Styles shared by every recipe page
js/shopping-list.js   Shopping-list checkboxes (saved in your browser)
```

## Preview locally

Open the folder in VS Code, install the recommended **Live Server** extension, then right-click `index.html` and choose **Open with Live Server**.

## Add a new recipe

1. Copy an existing page in `recipes/` (for example `beef-nilaga.html`) and rename it.
2. Change `data-recipe="..."` on the `<body>` tag to the new file name.
3. Edit the title, shopping list, steps and notes.
4. Add a card for it in `index.html` (copy one of the `<a class="dish">` blocks).

## Publish with GitHub Pages

1. Create a new repository on GitHub (for example `karls-kitchen`).
2. In this folder, run:
   ```
   git init
   git add .
   git commit -m "Karl's Kitchen site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/karls-kitchen.git
   git push -u origin main
   ```
3. On GitHub, open the repo's **Settings > Pages**. Under **Source** choose **Deploy from a branch**, pick `main` and `/ (root)`, and save.
4. After a minute or two the site is live at `https://<your-username>.github.io/karls-kitchen/`.
