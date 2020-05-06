using System.Collections.Generic;
using System.Threading.Tasks;
using CoronoVirus.API.Models;

namespace CoronoVirus.API.Data
{
    public interface ICasesRepository
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveAll();
        Task<Cases> AddCase(Cases entity);
        Task<Cases> UpdateCase(int id, Cases entity);
        Task<Cases> DeleteCase(int id);
        Task<bool> CaseExists(string name, string city, string country);
        Task<IEnumerable<Cases>> GetCases();
        Task<Cases> GetCase(int id);
        Task<IEnumerable<CaseStatistics>> GetStatistics(string status);


    }
}


