using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BlogApi.Dtos
{
    public class UserRegister
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(12,MinimumLength =4, ErrorMessage ="Password must containe minimun 4 and maximum 12 characters" )]
        public string Password { get; set; }
    }
}
