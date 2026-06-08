import openpyxl
import json

wb = openpyxl.load_workbook('d:/webapptt12/2148-HD-ma-hoa-pham-vi-chuyen-mon.xlsx')
ws = wb['Sheet1']

options = []
for row in ws.iter_rows(min_row=13, max_row=110, values_only=True):
    tt = row[0]
    chuc_danh = row[1]
    ma_pvi = row[2]
    if tt is None or (isinstance(tt, str) and not tt.isdigit()):
        continue
    if chuc_danh and ma_pvi:
        options.append((str(ma_pvi), str(chuc_danh)))

with open('d:/webapptt12/options_pvcm.txt', 'w', encoding='utf-8') as f:
    for ma, ten in options:
        f.write(f'<option value="{ma}">{ma} - {ten}</option>\n')

print(f'Written {len(options)} options to options_pvcm.txt')