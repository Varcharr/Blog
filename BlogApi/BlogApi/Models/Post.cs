﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogApi.Models
{
    public class Post
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Content { get; set; }
        public ICollection<Comment> Comments { get; set; }
        public User CreatedBy { get; set; }
        public Guid CreatedById { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime ModifiedOn { get; set; }
    }
}
