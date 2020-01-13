using System;
using System.ComponentModel.DataAnnotations;

namespace BlogApi.Dtos.Post
{
    public class CreatePostDto
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Content { get; set; } 
    }
}
