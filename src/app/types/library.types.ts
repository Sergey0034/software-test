interface ChiefPhoneType {
  "is_deleted": number,
  "global_id": number,
  "ChiefPhone": string
}

interface OrgInfoType {
  "is_deleted": number,
  "ChiefPhone": ChiefPhoneType[],
  "FullName": string,
  "INN": string,
  "KPP": string,
  "OGRN": string,
  "LegalAddress": string,
  "ChiefName": string,
  "ChiefPosition": string,
  "global_id": number
}

interface AvailableElementType {
  "is_deleted": number,
  "global_id": number,
  "Group_mgn": string,
  "Area_mgn": string,
  "Element_mgn": string,
  "available_degree": string,
  "available_index": string
}

interface Availability {
  "is_deleted": number,
  "global_id": number,
  "available_k": string,
  "available_o": string,
  "available_z": string,
  "available_s": string,
  "available_element": AvailableElementType[],
}

interface ObjectAddressType {
  "is_deleted": number,
  "AdmArea": string,
  "District": string,
  "PostalCode": string,
  "Address": string,
  "Availability": Availability[],
  "global_id": number
}

interface PublicPhoneType {
  "is_deleted": number,
  "PublicPhone": string,
  "global_id": number
}

interface FaxType {
  "is_deleted": number,
  "Fax": string,
  "global_id": number
}

interface EmailType {
  "is_deleted": number,
  "Email": string,
  "global_id": number
}

interface WorkingHoursType {
  "is_deleted": number,
  "DayWeek": string,
  "WorkHours": string,
  "global_id": number
}

export interface LibraryType {
  "is_deleted": number,
  "Category": string,
  "CommonName": string,
  "FullName": string,
  "ShortName": string,
  "OrgInfo": OrgInfoType[],
  "ObjectAddress": ObjectAddressType[],
  "ChiefOrg": string,
  "ChiefName": string,
  "ChiefPosition": string,
  "PublicPhone": PublicPhoneType[],
  "Fax": FaxType[],
  "Email": EmailType[],
  "WorkingHours": WorkingHoursType[],
  "ClarificationOfWorkingHours": string,
  "WebSite": string,
  "NumOfSeats": number,
  "NumOfReaders": number,
  "NumOfVisitors": number,
  "global_id": number,
  "geoData": {
    "coordinates": number[] | number[][],
    "type": string
  },
  "geodata_center": null | number
}
