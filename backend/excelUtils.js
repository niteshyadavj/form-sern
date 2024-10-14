const xlsx = require('xlsx');

function writeToExcel(forms) {
  const data = forms.map(form => ({
    'Form Type': form.formType,
    'Name': form.name,
    'Country Code': form.countryCode,
    'Phone Number': form.phoneNumber
  }));

  const worksheet = xlsx.utils.json_to_sheet(data);
  const workbook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(workbook, worksheet, 'Form Data');

  xlsx.writeFile(workbook, 'form_data.xlsx');
}

module.exports = { writeToExcel };
