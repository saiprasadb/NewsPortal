using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NewsPortal.Core.Entities;
using NewsPortal.Core.Interfaces;

namespace NewsPortal.API.Controllers
{
    [Route("api/News")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        private readonly INewsRepository _newsRepository;
        public NewsController(INewsRepository newsRepository)
        {
            _newsRepository = newsRepository;
        }

        [HttpGet("{page}/{pageSize}")]
        public async Task<ActionResult<IEnumerable<NewsArticle>>> GetNews(int page = 1, int pageSize = 5)
        {
            var news = await _newsRepository.GetNewsAsync(page, pageSize);
            return Ok(news);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<NewsArticle>>> GetNewsCount()
        {
            var count = await _newsRepository.GetNewsCountAsync();
            return Ok(count);
        }


        [HttpGet("{page}/{pageSize}/{search}")]
        public async Task<ActionResult<IEnumerable<NewsArticle>>> GetSearchNews(int page = 1,int pageSize = 5, string search = "")
        {
            var news = await _newsRepository.GetNewsSearchAsync(page, pageSize, search);
            return Ok(news);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<NewsArticle>> GetNews(int id)
        {
            var newsArticle = await _newsRepository.GetNewsByIdAsync(id);
            if (newsArticle == null)
            {
                return NotFound();
            }
            return Ok(newsArticle);
        }

        [HttpPost]
        public async Task<ActionResult<NewsArticle>> CreateNews([FromBody]NewsArticle newsArticle)
        {
            await _newsRepository.CreateNewsAsync(newsArticle);
            return CreatedAtAction(nameof(GetNews), new { id = newsArticle.Id }, newsArticle);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateNews(int id, [FromBody]NewsArticle newsArticle)
        {
            if (id != newsArticle.Id)
            {
                return BadRequest();
            }
            await _newsRepository.UpdateNewsAsync(newsArticle);
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNews(int id)
        {
            await _newsRepository.DeleteNewsAsync(id);
            return NoContent();
        }
    }
}
