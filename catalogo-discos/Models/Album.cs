using System;
using System.ComponentModel.DataAnnotations;

namespace catalogo_discos.Models
{
    public class Album
    {
        public int AlbumID { get; set; }
        
        [Display(Name = "Álbum")]
        [Required(ErrorMessage = "Please enter an album title.")]
        public string Title { get; set; }
        
        [Display(Name = "Artista")]
        [Required(ErrorMessage = "Please enter an artist.")]
        public string Artist { get; set; }
        
        [Display(Name = "Ano")]
        [Required(ErrorMessage = "Please enter a year.")]
        [Range(1900, 3000, ErrorMessage = "Please enter a valid year.")]
        public int Year { get; set; }
        
        [Display(Name = "Gravadora")]
        public string Label { get; set; }
        
        [Display(Name = "Formato")]
        public string Format { get; set; }

        [Display(Name = "Gênero")]
        public string Gender { get; set; }
    }
}
