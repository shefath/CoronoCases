using System.Threading.Tasks;
using CoronoVirus.API.Data;
using CoronoVirus.API.Dtos;
using CoronoVirus.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace CoronoVirus.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CasesController : ControllerBase
    {
        private readonly ICasesRepository _repo;
        public CasesController(ICasesRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetCases()
        {
            var cases = await _repo.GetCases();
            return Ok(cases);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCase(int id)
        {
            var case1 = await _repo.GetCase(id);
            return Ok(case1);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCase(int id, Cases casesForUpdateDto)
        {
            var case1 = await _repo.UpdateCase(id, casesForUpdateDto);
            return Ok(case1);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCase(int id)
        {
            var deleted = await _repo.DeleteCase(id);
            return Ok(deleted);
        }


        [Route("[action]/{status}")]
        [HttpGet]
        public async Task<IActionResult> GetStatistics(string status)
        {
            var Stat = await _repo.GetStatistics(status);
            return Ok(Stat);
        }

        [HttpPost("addcase")]
        public async Task<IActionResult> AddCase(Cases casesForAddDto)
        {
            if (await _repo.CaseExists(casesForAddDto.Name.ToLower(), casesForAddDto.City.ToLower(), casesForAddDto.Country.ToLower()))
            {
                return BadRequest("Case is registered Already");
            }

            var caseCreated = await _repo.AddCase(casesForAddDto);


            return Ok(caseCreated);
        }
    }
}