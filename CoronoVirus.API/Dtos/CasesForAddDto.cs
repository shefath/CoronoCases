using System.ComponentModel.DataAnnotations;

namespace CoronoVirus.API.Dtos
{
    public class CasesForAddDto
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Gender { get; set; }
        [Required]
        public int Age { get; set; }
        public string Address { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string Country { get; set; }
        [Required]
        public string Status { get; set; }
    }
}