using System.Net.Http;
using System.Threading.Tasks;
using banjackal.com.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace banjackal.com.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DogeController : Controller
    {
        private readonly HttpClient _httpClient;

        public DogeController(IHttpClientFactory httpClientFactory)
        {
            _httpClient = httpClientFactory.CreateClient();
        }
        
        [HttpGet]
        public async Task<string> GetDogePrice()
        {
            return await _httpClient.GetStringAsync("https://api.wazirx.com/api/v2/tickers/dogeusdt");
        } 
    }
}