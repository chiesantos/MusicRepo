USE [master]
GO
/****** Object:  Database [MusicStore]    Script Date: 12/08/2016 03:40:23 ******/
CREATE DATABASE [MusicStore] ON  PRIMARY 
( NAME = N'MusicStore', FILENAME = N'C:\Program Files (x86)\Microsoft SQL Server\MSSQL10_50.MSSQLSERVER\MSSQL\DATA\MusicStore.mdf' , SIZE = 3072KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'MusicStore_log', FILENAME = N'C:\Program Files (x86)\Microsoft SQL Server\MSSQL10_50.MSSQLSERVER\MSSQL\DATA\MusicStore_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [MusicStore] SET COMPATIBILITY_LEVEL = 100
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [MusicStore].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [MusicStore] SET ANSI_NULL_DEFAULT OFF
GO
ALTER DATABASE [MusicStore] SET ANSI_NULLS OFF
GO
ALTER DATABASE [MusicStore] SET ANSI_PADDING OFF
GO
ALTER DATABASE [MusicStore] SET ANSI_WARNINGS OFF
GO
ALTER DATABASE [MusicStore] SET ARITHABORT OFF
GO
ALTER DATABASE [MusicStore] SET AUTO_CLOSE OFF
GO
ALTER DATABASE [MusicStore] SET AUTO_CREATE_STATISTICS ON
GO
ALTER DATABASE [MusicStore] SET AUTO_SHRINK OFF
GO
ALTER DATABASE [MusicStore] SET AUTO_UPDATE_STATISTICS ON
GO
ALTER DATABASE [MusicStore] SET CURSOR_CLOSE_ON_COMMIT OFF
GO
ALTER DATABASE [MusicStore] SET CURSOR_DEFAULT  GLOBAL
GO
ALTER DATABASE [MusicStore] SET CONCAT_NULL_YIELDS_NULL OFF
GO
ALTER DATABASE [MusicStore] SET NUMERIC_ROUNDABORT OFF
GO
ALTER DATABASE [MusicStore] SET QUOTED_IDENTIFIER OFF
GO
ALTER DATABASE [MusicStore] SET RECURSIVE_TRIGGERS OFF
GO
ALTER DATABASE [MusicStore] SET  DISABLE_BROKER
GO
ALTER DATABASE [MusicStore] SET AUTO_UPDATE_STATISTICS_ASYNC OFF
GO
ALTER DATABASE [MusicStore] SET DATE_CORRELATION_OPTIMIZATION OFF
GO
ALTER DATABASE [MusicStore] SET TRUSTWORTHY OFF
GO
ALTER DATABASE [MusicStore] SET ALLOW_SNAPSHOT_ISOLATION OFF
GO
ALTER DATABASE [MusicStore] SET PARAMETERIZATION SIMPLE
GO
ALTER DATABASE [MusicStore] SET READ_COMMITTED_SNAPSHOT OFF
GO
ALTER DATABASE [MusicStore] SET HONOR_BROKER_PRIORITY OFF
GO
ALTER DATABASE [MusicStore] SET  READ_WRITE
GO
ALTER DATABASE [MusicStore] SET RECOVERY SIMPLE
GO
ALTER DATABASE [MusicStore] SET  MULTI_USER
GO
ALTER DATABASE [MusicStore] SET PAGE_VERIFY CHECKSUM
GO
ALTER DATABASE [MusicStore] SET DB_CHAINING OFF
GO
USE [MusicStore]
GO
/****** Object:  Table [dbo].[Artists]    Script Date: 12/08/2016 03:40:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Artists](
	[ArtistID] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](100) NULL,
	[Classification] [varchar](50) NULL,
	[Enable] [bit] NULL,
 CONSTRAINT [PK_Artists] PRIMARY KEY CLUSTERED 
(
	[ArtistID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Songs]    Script Date: 12/08/2016 03:40:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Songs](
	[SongID] [bigint] IDENTITY(1,1) NOT NULL,
	[ArtistID] [bigint] NULL,
	[Title] [varchar](100) NULL,
	[YearReleased] [int] NULL,
	[Enable] [bit] NULL,
 CONSTRAINT [PK_Songs] PRIMARY KEY CLUSTERED 
(
	[SongID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  View [dbo].[vwSongs]    Script Date: 12/08/2016 03:40:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[vwSongs]
AS
SELECT     a.Name, s.SongID, s.ArtistID, s.Title, s.YearReleased, s.Enable
FROM         dbo.Songs AS s LEFT OUTER JOIN
                      dbo.Artists AS a ON s.ArtistID = a.ArtistID
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "a"
            Begin Extent = 
               Top = 6
               Left = 236
               Bottom = 126
               Right = 396
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "s"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 126
               Right = 198
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 9
         Width = 284
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'vwSongs'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'vwSongs'
GO
/****** Object:  Default [DF_Artists_Enable]    Script Date: 12/08/2016 03:40:23 ******/
ALTER TABLE [dbo].[Artists] ADD  CONSTRAINT [DF_Artists_Enable]  DEFAULT ((1)) FOR [Enable]
GO
/****** Object:  Default [DF_Songs_Enable]    Script Date: 12/08/2016 03:40:23 ******/
ALTER TABLE [dbo].[Songs] ADD  CONSTRAINT [DF_Songs_Enable]  DEFAULT ((1)) FOR [Enable]
GO
/****** Object:  ForeignKey [FK_Songs_Artists]    Script Date: 12/08/2016 03:40:23 ******/
ALTER TABLE [dbo].[Songs]  WITH CHECK ADD  CONSTRAINT [FK_Songs_Artists] FOREIGN KEY([ArtistID])
REFERENCES [dbo].[Artists] ([ArtistID])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Songs] CHECK CONSTRAINT [FK_Songs_Artists]
GO
