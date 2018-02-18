using System;
using System.Collections.Generic;
using System.Text;
using GraphQL.Instrumentation;
using GraphQL.Types;
using Models.Security;

namespace GraphQLModels.Types.SecurityTypes
{
    public class UserType: ObjectGraphType<User>
    {
        public UserType()
        {
            Field(x => x.Id).Description("The Id of the User.");
            Field(x => x.FirstName).Description("The FirstName of the User.");
            Field(x => x.LastName).Description("The LastName of the User.").DefaultValue("sergeyLoh");
            Field(x => x.EmailAddress).Description("The Email of the User.");
            Field(x => x.UserName).Description("The UserName of the User.");
        }
    }
}
