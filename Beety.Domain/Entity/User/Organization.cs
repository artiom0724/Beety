using static Beety.Domain.Enums.Enums;

namespace Beety.Domain.Entity.User
{
    public class Organization : User
    {
        public string BossName { get; set; }

        public ServiceCategory ServiceCategory;

        public int? PersonalCount { get; set; }

        public ServiceSegment ServiceSegment { get; set; }
    }
}
