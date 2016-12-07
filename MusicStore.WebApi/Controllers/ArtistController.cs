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
    public class ArtistController : ApiController
    {
        private IMappingEngine _mapper;

        public ArtistController(IMappingEngine mapper)
        {
            _mapper = mapper;
        }

        [HttpGet]
        public List<ArtistDTO> GetAll()
        {
            using (MusicStoreContext db = new MusicStoreContext())
            {
                List<Artists> records = new List<Artists>();
                records = db.Artists.ToList();
                return _mapper.Map<List<ArtistDTO>>(records);
            }
        }

        [HttpGet]
        public List<ArtistDTO> GetAllEnabled()
        {
            using (MusicStoreContext db = new MusicStoreContext())
            {
                List<Artists> records = new List<Artists>();
                records = db.Artists.Where(x => x.Enable == true).ToList();
                return _mapper.Map<List<ArtistDTO>>(records);
            }
        }

        [HttpGet]
        public ArtistDTO GetById(long id)
        {
            using (MusicStoreContext db = new MusicStoreContext())
            {
                Artists record = new Artists();
                record = db.Artists.Where(x => x.ArtistID == id).FirstOrDefault();
                return _mapper.Map<ArtistDTO>(record);
            }
        }

        [HttpPost]
        public long Insert(ArtistDTO entity)
        {
            using (MusicStoreContext db = new MusicStoreContext())
            {
                Artists record = _mapper.Map<Artists>(entity);

                try
                {
                    var tempObj = db.Artists.Add(record);
                    db.SaveChanges();
                    return tempObj.ArtistID;
                }
                catch
                {
                    return 0;
                }
            }
        }

        [HttpPost]
        public long Update(ArtistDTO entity)
        {
            using (MusicStoreContext db = new MusicStoreContext())
            {
                try
                {
                    var record = db.Artists.Where(x => x.ArtistID == entity.ArtistID).FirstOrDefault();

                    record.Name = entity.Name;
                    record.Classification = entity.Classification;
                    record.Enable = entity.Enable;

                    db.SaveChanges();
                    return entity.ArtistID;
                }
                catch
                {
                    return 0;
                }
            }
        }

        [HttpPost]
        public long Delete(ArtistDTO entity)
        {
            using (MusicStoreContext db =  new MusicStoreContext())
            {
                try
                {
                    var record = db.Artists.Where(x => x.ArtistID == entity.ArtistID).FirstOrDefault();

                    record.Enable = entity.Enable;
                    db.SaveChanges();
                    return entity.ArtistID;
                }
                catch
                {
                    return 0;
                }
            }
        }
    }
}
