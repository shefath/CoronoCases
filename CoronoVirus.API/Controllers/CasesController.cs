using System.Threading.Tasks;
using CoronoVirus.API.Data;
using CoronoVirus.API.Dtos;
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

        [HttpPost("addcase")]
        public IActionResult AddCase(CasesForAddDto casesForAddDto)
        {
            _repo.Add(casesForAddDto);
            _repo.SaveAll();

            return StatusCode(201);
        }
    }
}