using System;
using System.Collections.Generic;
using System.Text;
using static Beety.Domain.Enums.Enums;

namespace Beety.Domain.Entity.User
{
    public class Redactor : User
    {
        public UserType UserType { get; set; }//Administrator or Moderator
    }
}
