using System;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using BlogApi.Data;
using BlogApi.Dtos;
using BlogApi.Dtos.Comment;
using BlogApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace BlogApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly IBlogRepository _repository;
        private readonly IMapper _mapper;

        public CommentController(IBlogRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet("{commentId}")]
        public async Task<CommentDto> GetComment(Guid commentId)
        {
            Comment comment = await _repository.GetComment(commentId);
            CommentDto commentDto = _mapper.Map<Comment, CommentDto>(comment);

            return commentDto;
        }

        [HttpPost("create")]
        public async Task<IActionResult> CreateComment(CreateCommentDto createComment)
        {
            //Gets user id from token
            Guid userId = new Guid(User.FindFirst(ClaimTypes.NameIdentifier).Value);

            Comment comment = _mapper.Map<CreateCommentDto, Comment>(createComment);
            comment.Id = Guid.NewGuid();
            comment.CreatedById = userId;
            comment.CreatedOn = comment.ModifiedOn = DateTime.UtcNow;

            _repository.Add<Comment>(comment);

            return Ok(await _repository.SaveAll());
        }

        [HttpPost("update")]
        public async Task<IActionResult> UpdateComment(UpdateCommentDto updateComment)
        {
            Comment comment = await _repository.GetComment(updateComment.Id);
            comment.Content = updateComment.Content;
            comment.ModifiedOn = DateTime.UtcNow;

            _repository.Add(comment);
            return Ok(await _repository.SaveAll());
        }

        [HttpDelete("{commentId}")]
        public async Task<IActionResult> DelelteComment(Guid commentId)
        {
            Comment comment = await _repository.GetComment(commentId);

            if (comment == null)
                return NotFound();

            _repository.Delete<Comment>(comment);

            return Ok(await _repository.SaveAll());
        }

    }
}