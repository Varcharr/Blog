﻿using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using BlogApi.Data;
using BlogApi.Dtos;
using BlogApi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
//////////////////////////////
// Poglavlje 2.4 - Kontroleri
/////////////////////////////
namespace BlogApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;
        private readonly IConfiguration _config;

        public AuthController(IAuthRepository repo, IConfiguration config)
        {
            _repo = repo;
            _config = config;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserRegister registerUser)
        {
            registerUser.Username = registerUser.Username.ToLower();

            if (await _repo.DoesUserExist(registerUser.Username))
                return BadRequest("User already exist");

            var user = new User() { Username = registerUser.Username };
            var createdUser = await _repo.Register(user, registerUser.Password);

            return StatusCode(201);
        }
        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<IActionResult> Login(UserLogin userLogin)
        {
            var user = await _repo.Login(userLogin.Username, userLogin.Password);
            if (user == null)
                return Unauthorized();

            var claims = new[]
            {
               new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
               new Claim(ClaimTypes.Name, user.Username),
           };

            var key = new SymmetricSecurityKey(Encoding.UTF8
                .GetBytes(_config.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return Ok(new
            {
                token = tokenHandler.WriteToken(token)
            });

        }
    }
}