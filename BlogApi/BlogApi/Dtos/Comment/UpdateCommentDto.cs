using System;
using System.ComponentModel.DataAnnotations;

namespace BlogApi.Dtos.Comment
{
    public class UpdateCommentDto
    {
        public Guid Id { get; set; }
        [Required]
        public string Content { get; set; }
    }
}
