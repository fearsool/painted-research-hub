import requests
import json

# --- AYARLAR ---
target_domain = "paintedresearch.org"

def deep_scan(domain):
    print(f"🔎 {domain} için derin tarama başlatılıyor...")
    # Wayback Machine CDX API'sine doğrudan istek atıyoruz
    cdx_url = f"http://web.archive.org/cdx/search/cdx?url={domain}/*&output=json&collapse=urlkey&fl=original"
    
    try:
        response = requests.get(cdx_url, timeout=15)
        if response.status_code == 200:
            results = response.json()
            # İlk satır başlık olduğu için [1:] ile başlıyoruz
            urls = [row[0] for row in results[1:]]
            return urls
        else:
            return []
    except Exception as e:
        print(f"❌ Hata oluştu: {e}")
        return []

print("🚀 Arşiv Kurtarma Operasyonu: Mod 2 (Derin Tarama)")
found_urls = deep_scan(target_domain)

if found_urls:
    # Gereksiz dosyaları (resim, css vb.) temizleyelim
    cleaned_urls = [u for u in found_urls if not any(ext in u.lower() for ext in ['.jpg', '.png', '.css', '.js', '.pdf', '.gif'])]
    
    print(f"\n✅ Toplam {len(cleaned_urls)} adet potansiyel içerik sayfası bulundu:")
    with open("kurtarilan_veriler.txt", "w", encoding="utf-8") as f:
        for url in cleaned_urls:
            print(f"🔗 {url}")
            f.write(f"{url}\n")
    print("\n📁 Liste 'kurtarilan_veriler.txt' dosyasına kaydedildi.")
else:
    print("❌ Maalesef bu domain için ulaşılabilir bir URL yapısı bulunamadı.")