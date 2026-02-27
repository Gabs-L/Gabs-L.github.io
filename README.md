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
Website looks like this rn:<img width="1735" height="935" alt="image" src="https://github.com/user-attachments/assets/154f1f48-82b5-44dc-83ff-e9da4d13e756" />
I added some links to an about page, and the github as well as a return link to the main page but I didn't screenshot. 
Spent some time figuring out how to get a simple floating navigation menu at the top of the page. Looks like this now:<img width="1731" height="928" alt="image" src="https://github.com/user-attachments/assets/904064a1-e8cd-44e6-a4a1-c6d5686cbeb5" />




