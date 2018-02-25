using System;
using System.Collections.Generic;
using System.Text;
using Models.Security;

namespace DataAccess.EntitiesRepositories.SecurityRepositories
{
    public class UserRepository : RepositoryBase<User>, IUserRepository
    {
        public UserRepository(ApplicationDbContext context) : base(context)
        {
        }
    }
}
