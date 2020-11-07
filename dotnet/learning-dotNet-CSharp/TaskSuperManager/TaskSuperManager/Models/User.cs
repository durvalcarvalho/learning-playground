using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TaskSuperManager.Models
{
    public class User
    {
        public long UserId { get; set; }

        public string Username { get; set; }

        public string FirstName { get; set; }

        public string Lastname { get; set; }

        public List<Link> Links { get; set; }
    }
}