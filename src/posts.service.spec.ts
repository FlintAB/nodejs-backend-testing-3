import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    const createdPost = postsService.create(post);

    expect (postsService.find(createdPost.id)).toEqual(createdPost);
    // реализуйте тест-кейс
  });

  it('should find a post', () => {
    const postId = '1';
    const foundPost = postsService.find(postId);

    expect (foundPost).toMatchObject({
      id: postId,
      text: 'Some pre-existing post',
      date: expect.any(String),
    });
    // реализуйте тест-кейс
  });
});