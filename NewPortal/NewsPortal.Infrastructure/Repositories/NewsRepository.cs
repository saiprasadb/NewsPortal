using Microsoft.EntityFrameworkCore;
using NewsPortal.Core.Entities;
using NewsPortal.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NewsPortal.Infrastructure.Repositories
{
    public class NewsRepository : INewsRepository
    {
        private readonly NewsPortalDbContext _context;
        public NewsRepository(NewsPortalDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<NewsArticle>> GetNewsAsync(int page, int pageSize)
        {
            var query = _context.NewsArticles.AsQueryable();
            //if (!string.IsNullOrWhiteSpace(search))
            //{
            //    query = query.Where(n => n.Title.Contains(search) || n.Description.Contains(search));
            //}
            return await query
              .OrderByDescending(n => n.CreatedDate)
              .Skip((page - 1) * pageSize)
              .Take(pageSize)
              .ToListAsync();
        }

        public async Task<IEnumerable<NewsArticle>> GetNewsSearchAsync(int page, int pageSize, string search)
        {
            var query = _context.NewsArticles.AsQueryable();
            if (!string.IsNullOrWhiteSpace(search))
            {
                query = query.Where(n => n.Title.Contains(search) || n.Description.Contains(search));
            }
            return await query
              .OrderByDescending(n => n.CreatedDate)
              .Skip((page - 1) * pageSize)
              .Take(pageSize)
              .ToListAsync();
        }

        public async Task<NewsArticle> GetNewsByIdAsync(int id)
        {
            return await _context.NewsArticles.FindAsync(id);
        }

        public async Task CreateNewsAsync(NewsArticle newsArticle)
        {
            newsArticle.CreatedDate = DateTime.Now;
            newsArticle.UpdatedDate = DateTime.Now;
            _context.NewsArticles.Add(newsArticle);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateNewsAsync(NewsArticle newsArticle)
        {
            newsArticle.UpdatedDate = DateTime.Now;
            _context.NewsArticles.Update(newsArticle);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteNewsAsync(int id)
        {
            var newsArticle = await _context.NewsArticles.FindAsync(id);
            if (newsArticle != null)
            {
                _context.NewsArticles.Remove(newsArticle);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<int> GetNewsCountAsync()
        {
            return await _context.NewsArticles.CountAsync();
        }
    }
}
