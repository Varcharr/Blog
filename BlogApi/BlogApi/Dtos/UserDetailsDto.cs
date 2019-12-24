using BlogApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogApi.Dtos
{
    public class UserDetails
    {
        public Guid Id { get; set; }
        public string Username { get; set; }
        public string Bio { get; set; }
        public ICollection<Post> Posts { get; set; }
        public ICollection<Comment> Comments { get; set; }
    }
}
