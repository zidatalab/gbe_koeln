import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CsvexportService {

  public arraytocsvcontent(rows){
    if (!rows ) {
      return;
    }
    if (rows && !rows.length ) {
      rows=[rows];
    }
    const separator = ',';
    const keys = Object.keys(rows[0]);
    const csvContent =
      keys.join(separator) +
      '\n' +
      rows.map(row => {
        return keys.map(k => {
          let cell = row[k] === null || row[k] === undefined ? '' : row[k];
          cell = cell instanceof Date
            ? cell.toLocaleString()
            : cell.toString().replace(/"/g, '""');
          if (cell.search(/("|,|\n)/g) >= 0) {
            cell = `"${cell}"`;
          }
          return cell;
        }).join(separator);
      }).join('\n');
    return csvContent;
  }
  
  public exportToCsv(filename: string, rows: object[]) {   
    const blob = new Blob([this.arraytocsvcontent(rows)], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
      if (link.download !== undefined) {       
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    
  }
}