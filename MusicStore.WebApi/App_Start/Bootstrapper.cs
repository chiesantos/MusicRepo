using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AutoMapper;
using Autofac;
using Autofac.Integration.WebApi;
using System.Reflection;
using System.Web.Http;
using MusicStore.WebApi.Controllers;

namespace MusicStore.WebApi.App_Start
{
    public class Bootstrapper
    {

        public static void Run()
        {
            var builder = new ContainerBuilder();
            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());

            builder.Register<ArtistController>(
                c => new ArtistController(Mapper.Engine));
            builder.Register<SongController>(
                c => new SongController(Mapper.Engine));

            var container = builder.Build();
            GlobalConfiguration.Configuration.DependencyResolver = new AutofacWebApiDependencyResolver(container);

            ConfigureAutoMapper();
        }

        private static void ConfigureAutoMapper()
        {
            AutoMapperBootstrapper.Run();
        }
    }
}