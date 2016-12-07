using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MusicStore.WebApi.Models
{
    public partial class SongDTO
    {
        public long SongID { get; set; }
        public Nullable<long> ArtistID { get; set; }
        public string Title { get; set; }
        public Nullable<int> YearReleased { get; set; }
        public bool Enable { get; set; }

        public virtual ArtistDTO Artists { get; set; }
    }
}