using static Beety.Domain.Enums.Enums;

namespace Beety.Domain.Entity.User
{
    public class Privator : User
    {
        public string UNP { get; set; }

        public ServiceCategory ServiceCategory { get; set; }

        public string Experience { get; set; }

        public ServiceSegment ServiceSegment { get; set; }
    }
}
