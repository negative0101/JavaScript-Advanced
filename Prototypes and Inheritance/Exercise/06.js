function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    }
    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content)
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }
        addComment(comment) {
            this.comments.push(comment);
        }
        toString() {
            let result = super.toString() + `\nRating: ${this.likes - this.dislikes}`
            if (this.comments.length == 0) {
                return result;
            }
            result += `\nComments:`
            this.comments.forEach((comment) => {
                result += `\n * ${comment}`
            })
            return result

        }
    }
    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this._views = views;
        }
        view() {
            this._views += 1
            return this
        }
        toString() {
            return super.toString() + `\nViews: ${this._views}`
        }
    }
    return { Post, SocialMediaPost, BlogPost }
}
let classes = solution();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
