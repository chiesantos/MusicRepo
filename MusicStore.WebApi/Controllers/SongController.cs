using AutoMapper;
using MusicStore.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MusicStore.WebApi.Controllers
{
    public class SongController : ApiController
    {
        private static IMappingEngine _mapper;

        public SongController(IMappingEngine mapper)
        {
            _mapper = mapper;
        }

        [HttpGet]
        public List<SongDTO> GetAll()
        {
            using (MusicStoreContext db = new MusicStoreContext())
            {
                List<Songs> records = new List<Songs>();
                records = db.Songs.ToList();
                return _mapper.Map<List<SongDTO>>(records);
            }
        }

        [HttpGet]
        public SongDTO GetById(long id)
        {
            using (MusicStoreContext db = new MusicStoreContext())
            {
                Songs record = new Songs();
                record = db.Songs.Where(x => x.SongID == id).FirstOrDefault();
                return _mapper.Map<SongDTO>(record);
            }
        }

        [HttpGet]
        public List<SongDTO> GetAllByArtistId(long id)
        {
            using (MusicStoreContext db = new MusicStoreContext())
            {
                List<Songs> records = new List<Songs>();
                records = db.Songs.Where(x => x.ArtistID == id && x.Enable == true).ToList();
                return _mapper.Map<List<SongDTO>>(records);
            }
        }

        [HttpGet]
        public List<vwSongDTO> GetAllSongsInView()
        {
            using (MusicStoreContext db = new MusicStoreContext())
            {
                List<vwSongs> records = new List<vwSongs>();
                records = db.vwSongs.ToList();
                return _mapper.Map<List<vwSongDTO>>(records);
            }
        }

        [HttpPost]
        public long Insert(SongDTO entity)
        {
            using (MusicStoreContext db = new MusicStoreContext())
            {
                Songs record = _mapper.Map<Songs>(entity);

                try
                {
                    var tempObj = db.Songs.Add(record);
                    db.SaveChanges();
                    return entity.SongID;
                }
                catch
                {
                    return 0;
                }
            }
        }

        [HttpPost]
        public long Update(SongDTO entity)
        {
            using (MusicStoreContext db = new MusicStoreContext())
            {
                try
                {
                    var record = db.Songs.Where(x => x.SongID == entity.SongID).FirstOrDefault();

                    record.ArtistID = entity.ArtistID;
                    record.Title = entity.Title;
                    record.YearReleased = entity.YearReleased;
                    record.Enable = entity.Enable;

                    db.SaveChanges();
                    return entity.SongID;
                }
                catch
                {
                    return 0;
                }
            }
        }

        [HttpPost]
        public long Delete(SongDTO entity)
        {
            using (MusicStoreContext db = new MusicStoreContext())
            {
                try
                {
                    var record = db.Songs.Where(x => x.SongID == entity.SongID).FirstOrDefault();

                    record.Enable = entity.Enable;

                    db.SaveChanges();
                    return entity.SongID;
                }
                catch
                {
                    return 0;
                }
            }
        }
    }
}
