using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TaskSuperManager.Models
{
    public class Task
    {
        public long? TaskId { get; set; }

        public string Subject { get; set; }

        public DateTime? StartDate { get; set; }

        public DateTime? DueDate { get; set; }

        public DateTime? CompleteDate { get; set; }

        public Status Status { get; set; }

        public List<Link> Links { get; set; }

        public List<User> Assignees { get; set; }
    }
}