def get_current_aqi(location):
    # In production, replace this with OpenAQ/CPCB API call
    return {
        "location": location,
        "value": 135,
        "category": "Unhealthy for Sensitive Groups",
        "main_pollutant": "PM2.5"
    }

def get_historical_data(location):
    return {
        "dates": ["2025-06-18", "2025-06-19", "2025-06-20", "2025-06-21", "2025-06-22"],
        "aqi": [95, 102, 110, 118, 135]
    }
