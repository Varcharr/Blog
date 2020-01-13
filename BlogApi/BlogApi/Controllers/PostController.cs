using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using BlogApi.Data;
using BlogApi.Dtos.Post;
using BlogApi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BlogApi.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IBlogRepository _repository;
        private readonly IMapper _mapper;

        public PostController(IBlogRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpPost("create")]
        public async Task<IActionResult> CreatePost(CreatePostDto createPost)
        {
            //Gets user id from token
            Guid userId = new Guid( User.FindFirst(ClaimTypes.NameIdentifier).Value);

            Post post = _mapper.Map<CreatePostDto,Post>(createPost); ;
            post.Id = Guid.NewGuid();
            post.CreatedById = userId;
            post.CreatedOn = post.ModifiedOn = DateTime.UtcNow;

           _repository.Add(post);
            return Ok(await _repository.SaveAll());
        }
        [HttpPost("update")]
        public async Task<IActionResult> UpdatePost(UpdatePostDto updatePost)
        {
            Post post = await _repository.GetPost(updatePost.Id);
            post.Name = updatePost.Name;
            post.Content = updatePost.Content;
            post.ModifiedOn = DateTime.UtcNow;

            _repository.Add(post);
            return Ok(await _repository.SaveAll());
        }

        [HttpGet("{postId}")]
        public async Task<IActionResult> GetPost(Guid postId)
        {
            var post = await _repository.GetPost(postId);
            return Ok(post);
        }
        [HttpGet("topposts")]
        public async Task<IActionResult> GetTopPosts()
        {
            var post = await _repository.GetTopPosts();
            return Ok(post);
        }
    }
}