using BlogApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogApi.Data
{
    public interface IBlogRepository
    {
        void Add<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveAll();
        Task<User> GetUser(Guid id);
        Task<Post> GetPost(Guid id);
        Task<Comment> GetComment(Guid id);
        Task<IEnumerable<Post>> GetUserPosts(Guid userId);
        Task<IEnumerable<Post>> GetTopPosts();
        Task<IEnumerable<Comment>> GetUserComments(Guid userId);
        Task<IEnumerable<Comment>> GetPostComments(Guid postId);
    }
}
