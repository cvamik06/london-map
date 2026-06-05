import pandas as pd
import json

print("1. Reading CSV...")
df = pd.read_csv('src/data/city_crime_forecast_summary.csv')

# Group by city, sort by percentage change (highest to lowest), and export
forecast_dict = {}
for city, group in df.groupby('Dashboard_City'):
    sorted_group = group.sort_values(by='Pct_Change', ascending=False)
    forecast_dict[city] = sorted_group[['Major Category', 'Pct_Change', 'Predicted_Total_Count']].to_dict(orient='records')

print("2. Saving to public folder...")
with open('public/forecast_data.json', 'w') as f:
    json.dump(forecast_dict, f)
    
print("✅ Done! 'forecast_data.json' is ready for React.")