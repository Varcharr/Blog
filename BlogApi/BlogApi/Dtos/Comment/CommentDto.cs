using BlogApi.Models;
using System;

namespace BlogApi.Dtos
{
    public class CommentDto
    {
        public Guid Id { get; set; }
        public string Content { get; set; }
        public PostDto Post { get; set; }
        public Guid PostId { get; set; }
        public UserDetailsDto CreatedBy { get; set; }
        public Guid CreatedById { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime ModifiedOn { get; set; }
    }
}