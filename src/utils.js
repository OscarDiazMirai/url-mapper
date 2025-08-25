/* FILTER JSON DATA FROM SCREAMING FROG REPORTED FILE */
export const jsonDataFilteredFromScreamingFrog = (jsonDataFile) => {
    // Regex to check if has number, .filetype...
    const fileExtensionRegex = /\.(?!(html|php)$)[a-z]{2,5}$/i;
    // const fileExtensionRegex = /\.(?!html$)[a-z]{2,5}$/i;

    // Filter valid urls
    const validRowsURls = jsonDataFile.filter(row => row.includes(200) && row.includes("Indexable"));
    // console.log(validRowsURls)

    // Filter without .filetype, contains numbers...
    // only extrac firs element of array is an url
    const cleanUrls = validRowsURls.map(row => row[0])
        .filter(url => !fileExtensionRegex.test(url) &&
            !url.includes("?") &&
            !url.includes("=")
        ).map(extractUrlDomain)
    return cleanUrls.sort();
};

/* FILTER JSON DATA FROM AUDIT FILE BY URL & PARENT*/
export const jsonDataFilteredFromAudit = (jsonDataFile) => {
    // console.warn(jsonDataFile)
    // TODO=>new [languages]
    // TODO=> regex by url each language
    // TODO=> filter by 'parent'

    // Filter is has 'url' & parent properties
    const filterByUrlAndParent = jsonDataFile.map(obj => {
        // New filtered objt
        const newObjt = {};
        for (const key in obj) {
            // Has url property
            if (key.includes("url") || key === "parent") {
                newObjt[key] = obj[key];
            }
        }
        return newObjt;
    })
    return filterByUrlAndParent;

};

/* BUILD URLS FROM AUDIT FILE FILTERED BY URL & PARENT */
export const urlsFromJsonDataFiltered = (jsonDataArrayFiltered) => {
    // console.log(jsonDataArrayFiltered)
    const urls = jsonDataArrayFiltered.flatMap((obj => {
        // New array to save object values
        const values = [];
        for (const key in obj) {
            if (key !== "parent") {
                if (obj.parent) {
                    // Created slug if has parent
                    values.push(`/${key.split('.')[1]}/${obj.parent}/${obj[key]}`);
                } else {
                    // Slug without parent
                    values.push(`/${key.split('.')[1]}/${obj[key]}`);
                }
            }
        }
        return values;

    }))
    return urls.sort();
};

/* Extract url base */
const extractUrlDomain = (url) => {
  const regex = /^(https?:\/\/)?[^\/]+/i;
  const match = url.match(regex);
  if(!match) return null;
  const domain = match[0];
  const rest = url.slice(domain.length);
  return rest;
}
