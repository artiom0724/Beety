using GraphQL;
using GraphQL.Types;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using GraphQLModels;
using GraphQLModels.SecurityQuery;

namespace StarWars.Api.Controllers
{
    [Route("api/graphql")]
    public class GraphQLController : Controller
    {
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] GraphQLQuery query)
        {
            var schema = new Schema { Query = new UserQuery() };

            var result = await new DocumentExecuter().ExecuteAsync(_ =>
            {
                _.Schema = schema;
                _.Query = query.Query;

            }).ConfigureAwait(false);

            //if (result.Errors?.Count > 0)
            //{
            //    return BadRequest();
            //}

            return Ok(result);
        }
    }
}