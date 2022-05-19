перед стартом:
установить зависимости
 ==> npm i

запуск dev сервера (localhost:8000):
 ==> npm run dev


Page graphql:
http://localhost:8000

В базе существует дефолтный токен "qwerty"
все примеры запросов указаны с этим токеном
example graphQL requests:

{
  getAllCommits(token: "qwerty")  {
    sha, html_url, date, author {
      name,
      email
    }
  }
}

{
  getLimitCommits(page:1, token: "qwerty") {
		count_total, count_pages, page,
    data {
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
  getKeys(token: "qwerty") {
		id, api_key
		}
}

{
    helloWorld {
		message
		}
}

mutation {
    createKey(token: "qwerty") {
		id, api_key
		}
}












