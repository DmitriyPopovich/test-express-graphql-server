перед стартом:
установить зависимости
 ==> npm i

запуск dev сервера (localhost:8000):
 ==> npm run dev


Page commits:
http://localhost:8000 ==> получение списка коммитов из репозитория facebook/react
example graphQL:

{
  getAllCommits {
    sha, html_url, date, author {
      name,
      email
    }
  }
}


{
  getLimitCommits(page:2) {
		count_total, count_pages, page, data {
		  sha
		  date
      html_url
      author {
        name
        email
      }
		}
  }
}


{
  getKeys {
		id, api_key, created_at
		}
}




