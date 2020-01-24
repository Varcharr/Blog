using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BlogApi.Dtos.Comment
{
    public class CreateCommentDto
    {
        public Guid PostId { get; set; }
        [Required]
        public string Content { get; set; }
    }
}
