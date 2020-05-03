using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoronoVirus.API.Models;
using Microsoft.EntityFrameworkCore;

namespace CoronoVirus.API.Data
{
    public class CasesRepository : ICasesRepository
    {
        private readonly DataContext _context;
        public CasesRepository(DataContext context)
        {
            _context = context;
        }
        public async void Add<T>(T entity) where T : class
        {
            await this._context.AddAsync(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            this._context.Remove(entity);
        }

        public async Task<Cases> GetCase(int id)
        {
            var case1 = await this._context.Cases.FirstOrDefaultAsync(c => c.Id == id);
            return case1;
        }

        public async Task<IEnumerable<Cases>> GetCases()
        {
            var cases = await this._context.Cases.ToListAsync();
            return cases;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}