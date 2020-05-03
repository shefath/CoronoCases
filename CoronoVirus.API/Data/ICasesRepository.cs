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
        Task<IEnumerable<Cases>> GetCases();
        Task<Cases> GetCase(int id);
    }
}

