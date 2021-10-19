class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }
    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`
        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`
        }
        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`

    }
    like(username) {
        if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!")
        } else if (this.creator === username) {
            throw new Error("You can't like your own story!")
        } else {
            this._likes.push(username);
            return `${username} liked ${this.title}!`
        }
    }
    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error("You can't dislike this story!")
        } else {
            let index = this._likes.indexOf(username);
            this._likes.splice(index, 1);
            return `${username} disliked ${this.title}`
        }
    }
    comment(username, content, id) {
        id = Number(id)
        let cIndex = this._comments.findIndex(el => el.id == id)

        if (id == undefined || cIndex == -1) {
            let comment = {
                "id": this._comments.length + 1,
                username,
                content,
                "replies": [],
            }
            this._comments.push(comment)
            return `${username} commented on ${this.title}`
        } else if (cIndex > -1) {
            let reply = {
                'id': Number(`${this._comments[cIndex].id}.${this._comments[cIndex].replies.length + 1}`),
                username,
                content,
            }
            this._comments[cIndex].replies.push(reply)
            return `You replied successfully`
        }

    }
    toString(sortingType) {
        if (sortingType === 'asc') {
            this._comments.sort((a, b) => a.id - b.id);
            this._comments.forEach(a => a.replies.sort((a, b) => a.id - b.id))
            let result = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:\n`
            this._comments.forEach(c => {
                if (c.replies.length === 0) {
                    result += `-- ${c.id}. ${c.username}: ${c.content}\n`
                } else {
                    result += `-- ${c.id}. ${c.username}: ${c.content}\n`
                    c.replies.forEach(r => {
                        result += `--- ${r.id}. ${r.username}: ${r.content}\n`
                    })
                }
            })
            return result.trim()
        } else if (sortingType === 'desc') {
            this._comments.sort((a, b) => b.id - a.id);
            this._comments.forEach(a => a.replies.sort((a, b) => b.id - a.id))
            let result = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:\n`
            this._comments.forEach(c => {
                if (c.replies.length === 0) {
                    result += `-- ${c.id}. ${c.username}: ${c.content}\n`
                } else {
                    result += `-- ${c.id}. ${c.username}: ${c.content}\n`
                    c.replies.forEach(r => {
                        result += `--- ${r.id}. ${r.username}: ${r.content}\n`
                    })
                }
            })
            return result.trim()
        } else {
            this._comments.sort((a, b) => a.username.localeCompare(b.username));
            this._comments.forEach(a => a.replies.sort((a, b) => a.username.localeCompare(b.username)))
            let result = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:\n`
            this._comments.forEach(c => {
                if (c.replies.length === 0) {
                    result += `-- ${c.id}. ${c.username}: ${c.content}\n`
                } else {
                    result += `-- ${c.id}. ${c.username}: ${c.content}\n`
                    c.replies.forEach(r => {
                        result += `--- ${r.id}. ${r.username}: ${r.content}\n`
                    })
                }
            })
            return result.trim()
        }
    }
}