import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse
import whois
import time

# --- AYARLAR ---
# 1. Geniş Kategori (Otomatik yüzlerce sayfa bulur)
CATEGORY_URL = "https://en.wikipedia.org/wiki/Category:Dog_organizations"

# 2. Senin Özel Hedeflerin (Zenbuku ve Petsem için kritik sayfalar)
TARGET_PAGES = [
    "https://en.wikipedia.org/wiki/Hairdressing",
    "https://en.wikipedia.org/wiki/Pet_sitting",
    "https://en.wikipedia.org/wiki/Animal_boarding"
]

HEADERS = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"}
OUTPUT_FILE = "final_listem.txt"

def get_sub_pages(category_url):
    print(f"📂 Kategori taranıyor: {category_url}")
    try:
        response = requests.get(category_url, headers=HEADERS)
        soup = BeautifulSoup(response.text, 'html.parser')
        links = ["https://en.wikipedia.org" + a['href'] for a in soup.select(".mw-category a") if 'href' in a.attrs]
        return links
    except Exception as e:
        print(f"❌ Kategori çekilirken hata: {e}")
        return []

def check_if_buyable(domain_name):
    parts = domain_name.split(".")
    main_domain = ".".join(parts[-2:]) if len(parts) > 1 else domain_name
    try:
        w = whois.whois(main_domain)
        if not w.domain_name: return True, main_domain
        return False, main_domain
    except Exception:
        return True, main_domain

# --- BAŞLANGIÇ ---
print("🚀 Hibrit Otomasyon Başlatıldı...")

# Kategori sayfalarını ve özel sayfaları birleştiriyoruz
all_target_urls = list(set(get_sub_pages(CATEGORY_URL) + TARGET_PAGES))
print(f"🎯 Toplam {len(all_target_urls)} farklı sayfa üzerinde tarama yapılacak.\n")

for page_url in all_target_urls:
    print(f"🔎 İnceleniyor: {page_url.split('/')[-1]}")
    try:
        response = requests.get(page_url, headers=HEADERS, timeout=10)
        soup = BeautifulSoup(response.text, 'html.parser')
        external_links = soup.find_all('a', href=True, class_="external text")

        for link in external_links:
            href = link['href']
            if href.startswith('http'):
                domain = urlparse(href).netloc
                if not domain: continue
                
                try:
                    # Siteye erişim testi
                    requests.get(href, headers=HEADERS, timeout=5)
                except Exception:
                    # Erişim yoksa WHOIS kontrolü
                    is_available, root_domain = check_if_buyable(domain)
                    if is_available:
                        print(f"🌟 ADAY BULDUM: {root_domain}")
                        with open(OUTPUT_FILE, "a", encoding="utf-8") as f:
                            f.write(f"Domain: {root_domain} | Kaynak: {page_url}\n")
                    else:
                        print(f"⚠️  Dolu: {root_domain}")
                time.sleep(0.3)
    except Exception as e:
        print(f"❌ Sayfa hatası: {e}")

print(f"\n✅ Tarama tamam! Sonuçlar '{OUTPUT_FILE}' dosyasında.")