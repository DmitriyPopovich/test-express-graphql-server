перед стартом:
установить зависимости
 ==> npm i

запуск dev сервера (localhost:8000):
 ==> npm run dev


Page graphql:
http://localhost:8000

example graphQL requests:

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

mutation {
    createKey {
		id, api_key, created_at
		}
}








