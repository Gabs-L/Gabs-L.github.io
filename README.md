beginning of endings and endings of beginnings
Some things to remember:
- href for styles, needs to reference the correct file within the directory
- you also need to give different bodies ids if you want them to have unique formatting
- github pages can't use .scss, only th raw .css files
- you need to import the fonts you use in the styles.css page
- After reorganizing the directory, make sure you have the page build from the appropriate directory (b default, Jekyll will search for a docs folder, but I got rid of it so now i have it build from root "(/)" and now it seems to work again)
- To change this go to repo settings -> pages -> build and deployment -> main -> /(root)
- current file structure looks as follows:
```
/ (root)
├── index.html
├── assets/
│   └── css/
│       └── style.css
├── pages/
│   └── about
└── _config.yml
```
Website looks like this rn <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/b1be116e-209c-4ff4-b25f-98963aad886e" />


