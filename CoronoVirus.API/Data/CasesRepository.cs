using System.Collections.Generic;
using System;
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

        public async Task<Cases> AddCase(Cases entity)
        {
            var caseAdded = await this._context.AddAsync(entity);
            await this._context.SaveChangesAsync();
            return caseAdded.Entity;
        }

        public async Task<Cases> UpdateCase(int id, Cases entity)
        {

            var existingCase = this._context.Cases.Where(c => c.Id == id).FirstOrDefault<Cases>();

            if (existingCase != null)
            {
                existingCase.Name = entity.Name;
                existingCase.Gender = entity.Gender;
                existingCase.Age = entity.Age;
                existingCase.Address = entity.Address;
                existingCase.City = entity.City;
                existingCase.Country = entity.Country;
                existingCase.Status = entity.Status;
                existingCase.Updated = DateTime.Today;
                await this._context.SaveChangesAsync();
            }
            return existingCase;
        }


        public async Task<Cases> DeleteCase(int id)
        {
            var caseDelete = await this._context.Cases.Where(x => x.Id == id).FirstOrDefaultAsync<Cases>();
            var caseDeleted = this._context.Remove(caseDelete);
            await this._context.SaveChangesAsync();
            return caseDeleted.Entity;
        }


        public async Task<bool> CaseExists(string name, string city, string country)
        {
            if (await _context.Cases.AnyAsync(x => x.Name.ToLower() == name && x.City.ToLower() == city && x.Country.ToLower() == country))
                return true;

            return false;
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

        public async Task<IEnumerable<CaseStatistics>> GetStatistics(string status)
        {
            var selectedCases = await _context.Cases.Where(c => c.Status == status).ToListAsync();
            var result = selectedCases.GroupBy(x => x.Updated)
            .Select(cs => new CaseStatistics
            {
                Updated = cs.Select(y => y.Updated).FirstOrDefault(),
                Count = cs.Count(),
                Status = status
            }).OrderBy(x => x.Updated);

            return result;

        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}