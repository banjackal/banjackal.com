namespace banjackal.com.Models
{
    public class DogePriceModel
    {
        public long At;
        public Ticker Ticker;
    }

    public struct Ticker
    {
        public string Buy;
        public string Sell;
        public string Low;
        public string High;
        public string Last;
        public string Vol;
    }
}