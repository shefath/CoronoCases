using System;

namespace CoronoVirus.API.Models
{
    public class CaseStatistics
    {
        public string Status { get; set; }
        public DateTime Updated { get; set; }
        public int Count { get; set; }
    }
}

