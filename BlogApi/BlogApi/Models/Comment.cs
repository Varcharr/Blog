using System;
//////////////////////////////
// Poglavlje 2.3.1 - Kreiranje modela
/////////////////////////////
namespace BlogApi.Models
{
    public class Comment
    {
        public Guid Id { get; set; }
        public string Content { get; set; }
        public Post Post { get; set; }
        public Guid PostId { get; set; }
        public User CreatedBy { get; set; }
        public Guid CreatedById { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime ModifiedOn { get; set; }
    }
}