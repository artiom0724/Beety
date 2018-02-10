using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Models.Security
{
    public class Role: EntityBase
    {
        [StringLength(255)]
        public string RoleName { get; set; }

        public virtual IList<User> Users { get; set; }
    }
}
