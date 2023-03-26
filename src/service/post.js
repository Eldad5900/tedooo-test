const Url = "https://www.tedooo.com/";

export class postService {
 
    async viwedPost(userId) {
        return fetch(`${Url}?itemId=${userId}`)
          .then(this.success)
          .catch(this.failure);
      }


      async allPosts(){
        return fetch(`${Url}hw/feed.json?skip=6`)
          .then(this.success)
          .catch(this.failure);
      }
}