using NewsPortal.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NewsPortal.Core.Interfaces
{
    public interface INewsRepository
    {
        Task<IEnumerable<NewsArticle>> GetNewsSearchAsync(int page, int pageSize, string search);
        Task<IEnumerable<NewsArticle>> GetNewsAsync(int page, int pageSize);
        Task<NewsArticle> GetNewsByIdAsync(int id);
        Task CreateNewsAsync(NewsArticle newsArticle);
        Task UpdateNewsAsync(NewsArticle newsArticle);
        Task DeleteNewsAsync(int id);

        Task<int> GetNewsCountAsync();
    }
}
