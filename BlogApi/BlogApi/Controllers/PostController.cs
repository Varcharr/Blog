using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BlogApi.Data;
using Microsoft.AspNetCore.Mvc;

namespace BlogApi.Controllers
{
    public class PostController : ControllerBase
    {
        private readonly DataContext _context;

        public PostController(DataContext context)
        {
            this._context = context;
        }
        // GET api/values
        [HttpGet]
        public IActionResult GetPost(Guid postId)
        {
            var post = _context.Posts.FirstOrDefault(_ => _.Id == postId);
            return Ok(post);
        }
    }
}