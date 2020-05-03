using System;

namespace CoronoVirus.API.Models
{
    public class Cases
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }
        public int Age { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string Status { get; set; }
        public DateTime Updated { get; set; }
    }
}

