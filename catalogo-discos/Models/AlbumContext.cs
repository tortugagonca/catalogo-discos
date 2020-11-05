using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace catalogo_discos.Models
{
    public class AlbumContext : DbContext
    {
        public AlbumContext()
        {

        }
        public AlbumContext(DbContextOptions<AlbumContext> options)
            :base(options)
        {

        }
        public DbSet<Album> Albums { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //optionsBuilder.UseSqlServer("Data Source=catalogo-discos");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ForSqlServerUseIdentityColumns();
            modelBuilder.HasDefaultSchema("catalogo-discos");

            ConfiguraAlbum(modelBuilder);
        }

        public void ConfiguraAlbum(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Album>(etd =>
            {
                etd.ToTable("Albums");
                etd.HasKey(c => c.AlbumID).HasName("AlbumID");
                etd.Property(c => c.AlbumID).HasColumnName("AlbumID").ValueGeneratedOnAdd().UseSqlServerIdentityColumn();
                etd.Property(c => c.Artist).HasMaxLength(75);
                etd.Property(c => c.Gender).HasMaxLength(50);
                etd.Property(c => c.Label).HasMaxLength(30);
                etd.Property(c => c.Title).HasMaxLength(150);
            });
        }
    }
}
