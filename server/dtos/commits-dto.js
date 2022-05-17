module.exports = class CommitsDto{
    sha
    html_url
    author
    date
    constructor(model) {
        this.sha = model.sha
        this.html_url = model.html_url
        this.author = {
            name: model.commit.author.name,
            email: model.commit.author.email
        }
        this.date = model.commit.author.date
    }
}