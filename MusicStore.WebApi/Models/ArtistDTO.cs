using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MusicStore.WebApi.Models
{
    public partial class ArtistDTO
    {
        public long ArtistID { get; set; }
        public string Name { get; set; }
        public string Classification { get; set; }
        public bool Enable { get; set; }
    }
}