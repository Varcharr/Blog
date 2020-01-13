using BlogApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogApi.Dtos
{
    public class UserDetailsDto
    {
        public Guid Id { get; set; }
        public string Username { get; set; }
        public string Bio { get; set; }
        public ICollection<PostDto> Posts { get; set; }
        public ICollection<CommentDto> Comments { get; set; }
    }
}
