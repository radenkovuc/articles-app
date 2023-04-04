This is a simple Next.js project that fetches articles from [API](https://react-challenge.human.hr/last-100-news.json) and displays them in a list. You also have option to filter articles by category and search by title or description.

To run this project, you need to install it locally using npm, and then run it with:

```bash
npm run dev
```


If you open [http://localhost:3000](http://localhost:3000) with your browser, you will see all articles. 

If you open [http://localhost:3000/?query=guardian&filter=4](http://localhost:3000/?query=guardian&filter=4) (with url params) then, you will see filtered articles with "X Universe" category preselected and search input should be "guardian".
