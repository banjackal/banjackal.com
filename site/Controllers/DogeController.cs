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
        public async Task<DogePriceModel> GetDogePrice()
        {
            var result = await _httpClient.GetAsync("https://api.wazirx.com/api/v2/tickers/dogeusdt");

            return JsonConvert.DeserializeObject<DogePriceModel>(result.Content.ReadAsStringAsync().Result);
        }
    }
}