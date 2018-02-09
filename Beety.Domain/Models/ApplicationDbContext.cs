using System;
using System.Collections.Generic;
using System.Linq;
using Beety.Domain.Entity.User;
using Microsoft.EntityFrameworkCore;

namespace Beety.Domain.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<User> Users { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            
        }
    }
}
