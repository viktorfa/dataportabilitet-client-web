const fieldMapping = {
  gsx$navn: "name",
  gsx$nettside: "url",
  gsx$antalldagerbehandling: "days",
  gsx$dataformatformaskinlesbardata: "dataFormat",
  gsx$ermaskinlesbar: "isMachineReadable",
  gsx$notater: "notes",
  gsx$instrukser: "instructions",
};

export const getSpreadSheetData = async () => {
  const { data } = await fetchGoogleSpreadsheet();
  const result = data.feed.entry.map(googleSheetRowToObject).map((x) => {
    const _result = {};
    for (const [from, to] of Object.entries(fieldMapping)) {
      _result[to] = x[from];
    }
    return _result;
  });
  return result;
};

export const fetchGoogleSpreadsheet = async () => {
  const response = await fetch(
    "https://spreadsheets.google.com/feeds/list/12pvWv8dIIy2dxn5kmCSpJcH1MvD_Baf1lvS2Q3XmCrs/od6/public/values?alt=json",
  );
  if (!response.ok) return { ok: false, error: response.error };
  const json = await response.json();
  return { data: json };
};

export const googleSheetRowToObject = (row) => {
  return Object.keys(row).reduce((acc, key) => {
    if (key.indexOf("gsx$") === 0) {
      acc[key] = row[key]["$t"];
    }
    return acc;
  }, {});
};
