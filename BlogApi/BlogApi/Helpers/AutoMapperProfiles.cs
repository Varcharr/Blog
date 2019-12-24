using AutoMapper;
using BlogApi.Dtos;
using BlogApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogApi.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserDetailsDto>();
            CreateMap<Post, PostDto>();
            CreateMap<Comment, CommentDto>();
        }

    }
}
