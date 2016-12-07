using AutoMapper;
using MusicStore.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MusicStore.WebApi.App_Start
{
    public class AutoMapperBootstrapper
    {

        public static void Run()
        {
            RunAutoMapper();
        }

        private static void RunAutoMapper()
        {
            Mapper.CreateMap<Artists, ArtistDTO>();
            Mapper.CreateMap<ArtistDTO, Artists>();

            Mapper.CreateMap<Songs, SongDTO>();
            Mapper.CreateMap<SongDTO, Songs>();

            Mapper.CreateMap<vwSongs, vwSongDTO>();
            Mapper.CreateMap<vwSongDTO, vwSongs>();
        }
    }
}