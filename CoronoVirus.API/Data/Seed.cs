using System.Collections.Generic;
using System.Linq;
using CoronoVirus.API.Models;
using Newtonsoft.Json;

namespace CoronoVirus.API.Data
{
    public class Seed
    {

        public static void SeedCases(DataContext context)
        {
            if (!context.Cases.Any())
            {
                //No user found in db

                var caseData = System.IO.File.ReadAllText("Data/CasesSeedData.json");
                var cases = JsonConvert.DeserializeObject<List<Cases>>(caseData);

                foreach (var case1 in cases)
                {
                    context.Cases.Add(case1);
                }
                context.SaveChanges();
            }

        }
    }
}