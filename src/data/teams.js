const lookup = [
  {
    name: 'Afghanistan',
    code: 'AF',
  },
  {
    name: 'Albania',
    code: 'AL',
  },
  {
    name: 'Algeria',
    code: 'DZ',
  },
  {
    name: 'American Samoa',
    code: 'AS',
  },
  {
    name: 'Andorra',
    code: 'AD',
  },
  {
    name: 'Angola',
    code: 'AO',
  },
  {
    name: 'Anguilla',
    code: 'AI',
  },
  {
    name: 'Antarctica',
    code: 'AQ',
  },
  {
    name: 'Antigua and Barbuda',
    code: 'AG',
  },
  {
    name: 'Argentina',
    code: 'AR',
  },
  {
    name: 'Armenia',
    code: 'AM',
  },
  {
    name: 'Aruba',
    code: 'AW',
  },
  {
    name: 'Australia',
    code: 'AU',
  },
  {
    name: 'Austria',
    code: 'AT',
  },
  {
    name: 'Azerbaijan',
    code: 'AZ',
  },
  {
    name: 'Bahamas',
    code: 'BS',
  },
  {
    name: 'Bahrain',
    code: 'BH',
  },
  {
    name: 'Bangladesh',
    code: 'BD',
  },
  {
    name: 'Barbados',
    code: 'BB',
  },
  {
    name: 'Belarus',
    code: 'BY',
  },
  {
    name: 'Belgium',
    code: 'BE',
  },
  {
    name: 'Belize',
    code: 'BZ',
  },
  {
    name: 'Benin',
    code: 'BJ',
  },
  {
    name: 'Bermuda',
    code: 'BM',
  },
  {
    name: 'Bhutan',
    code: 'BT',
  },
  {
    name: 'Bolivia',
    code: 'BO',
  },
  {
    name: 'Bosnia and Herzegovina',
    code: 'BA',
  },
  {
    name: 'Botswana',
    code: 'BW',
  },
  {
    name: 'Brazil',
    code: 'BR',
  },
  {
    name: 'British Indian Ocean Territory',
    code: 'IO',
  },
  {
    name: 'British Virgin Islands',
    code: 'VG',
  },
  {
    name: 'Brunei',
    code: 'BN',
  },
  {
    name: 'Bulgaria',
    code: 'BG',
  },
  {
    name: 'Burkina Faso',
    code: 'BF',
  },
  {
    name: 'Burundi',
    code: 'BI',
  },
  {
    name: 'Cambodia',
    code: 'KH',
  },
  {
    name: 'Cameroon',
    code: 'CM',
  },
  {
    name: 'Canada',
    code: 'CA',
  },
  {
    name: 'Cape Verde',
    code: 'CV',
  },
  {
    name: 'Cayman Islands',
    code: 'KY',
  },
  {
    name: 'Central African Republic',
    code: 'CF',
  },
  {
    name: 'Chad',
    code: 'TD',
  },
  {
    name: 'Chile',
    code: 'CL',
  },
  {
    name: 'China',
    code: 'CN',
  },
  {
    name: 'Christmas Island',
    code: 'CX',
  },
  {
    name: 'Cocos Islands',
    code: 'CC',
  },
  {
    name: 'Colombia',
    code: 'CO',
  },
  {
    name: 'Comoros',
    code: 'KM',
  },
  {
    name: 'Cook Islands',
    code: 'CK',
  },
  {
    name: 'Costa Rica',
    code: 'CR',
  },
  {
    name: 'Croatia',
    code: 'HR',
  },
  {
    name: 'Cuba',
    code: 'CU',
  },
  {
    name: 'Curacao',
    code: 'CW',
  },
  {
    name: 'Cyprus',
    code: 'CY',
  },
  {
    name: 'Czech Republic',
    code: 'CZ',
  },
  {
    name: 'Democratic Republic of the Congo',
    code: 'CD',
  },
  {
    name: 'Denmark',
    code: 'DK',
  },
  {
    name: 'Djibouti',
    code: 'DJ',
  },
  {
    name: 'Dominica',
    code: 'DM',
  },
  {
    name: 'Dominican Republic',
    code: 'DO',
  },
  {
    name: 'East Timor',
    code: 'TL',
  },
  {
    name: 'Ecuador',
    code: 'EC',
  },
  {
    name: 'Egypt',
    code: 'EG',
  },
  {
    name: 'El Salvador',
    code: 'SV',
  },
  {
    name: 'Equatorial Guinea',
    code: 'GQ',
  },
  {
    name: 'Eritrea',
    code: 'ER',
  },
  {
    name: 'Estonia',
    code: 'EE',
  },
  {
    name: 'Ethiopia',
    code: 'ET',
  },
  {
    name: 'Falkland Islands',
    code: 'FK',
  },
  {
    name: 'Faroe Islands',
    code: 'FO',
  },
  {
    name: 'Fiji',
    code: 'FJ',
  },
  {
    name: 'Finland',
    code: 'FI',
  },
  {
    name: 'France',
    code: 'FR',
  },
  {
    name: 'French Polynesia',
    code: 'PF',
  },
  {
    name: 'Gabon',
    code: 'GA',
  },
  {
    name: 'Gambia',
    code: 'GM',
  },
  {
    name: 'Georgia',
    code: 'GE',
  },
  {
    name: 'Germany',
    code: 'DE',
  },
  {
    name: 'Ghana',
    code: 'GH',
  },
  {
    name: 'Gibraltar',
    code: 'GI',
  },
  {
    name: 'Greece',
    code: 'GR',
  },
  {
    name: 'Greenland',
    code: 'GL',
  },
  {
    name: 'Grenada',
    code: 'GD',
  },
  {
    name: 'Guam',
    code: 'GU',
  },
  {
    name: 'Guatemala',
    code: 'GT',
  },
  {
    name: 'Guernsey',
    code: 'GG',
  },
  {
    name: 'Guinea',
    code: 'GN',
  },
  {
    name: 'Guinea-Bissau',
    code: 'GW',
  },
  {
    name: 'Guyana',
    code: 'GY',
  },
  {
    name: 'Haiti',
    code: 'HT',
  },
  {
    name: 'Honduras',
    code: 'HN',
  },
  {
    name: 'Hong Kong',
    code: 'HK',
  },
  {
    name: 'Hungary',
    code: 'HU',
  },
  {
    name: 'Iceland',
    code: 'IS',
  },
  {
    name: 'India',
    code: 'IN',
  },
  {
    name: 'Indonesia',
    code: 'ID',
  },
  {
    name: 'Iran',
    code: 'IR',
  },
  {
    name: 'Iraq',
    code: 'IQ',
  },
  {
    name: 'Ireland',
    code: 'IE',
  },
  {
    name: 'Isle of Man',
    code: 'IM',
  },
  {
    name: 'Israel',
    code: 'IL',
  },
  {
    name: 'Italy',
    code: 'IT',
  },
  {
    name: 'Ivory Coast',
    code: 'CI',
  },
  {
    name: 'Jamaica',
    code: 'JM',
  },
  {
    name: 'Japan',
    code: 'JP',
  },
  {
    name: 'Jersey',
    code: 'JE',
  },
  {
    name: 'Jordan',
    code: 'JO',
  },
  {
    name: 'Kazakhstan',
    code: 'KZ',
  },
  {
    name: 'Kenya',
    code: 'KE',
  },
  {
    name: 'Kiribati',
    code: 'KI',
  },
  {
    name: 'Kosovo',
    code: 'XK',
  },
  {
    name: 'Kuwait',
    code: 'KW',
  },
  {
    name: 'Kyrgyzstan',
    code: 'KG',
  },
  {
    name: 'Laos',
    code: 'LA',
  },
  {
    name: 'Latvia',
    code: 'LV',
  },
  {
    name: 'Lebanon',
    code: 'LB',
  },
  {
    name: 'Lesotho',
    code: 'LS',
  },
  {
    name: 'Liberia',
    code: 'LR',
  },
  {
    name: 'Libya',
    code: 'LY',
  },
  {
    name: 'Liechtenstein',
    code: 'LI',
  },
  {
    name: 'Lithuania',
    code: 'LT',
  },
  {
    name: 'Luxembourg',
    code: 'LU',
  },
  {
    name: 'Macau',
    code: 'MO',
  },
  {
    name: 'Macedonia',
    code: 'MK',
  },
  {
    name: 'Madagascar',
    code: 'MG',
  },
  {
    name: 'Malawi',
    code: 'MW',
  },
  {
    name: 'Malaysia',
    code: 'MY',
  },
  {
    name: 'Maldives',
    code: 'MV',
  },
  {
    name: 'Mali',
    code: 'ML',
  },
  {
    name: 'Malta',
    code: 'MT',
  },
  {
    name: 'Marshall Islands',
    code: 'MH',
  },
  {
    name: 'Mauritania',
    code: 'MR',
  },
  {
    name: 'Mauritius',
    code: 'MU',
  },
  {
    name: 'Mayotte',
    code: 'YT',
  },
  {
    name: 'Mexico',
    code: 'MX',
  },
  {
    name: 'Micronesia',
    code: 'FM',
  },
  {
    name: 'Moldova',
    code: 'MD',
  },
  {
    name: 'Monaco',
    code: 'MC',
  },
  {
    name: 'Mongolia',
    code: 'MN',
  },
  {
    name: 'Montenegro',
    code: 'ME',
  },
  {
    name: 'Montserrat',
    code: 'MS',
  },
  {
    name: 'Morocco',
    code: 'MA',
  },
  {
    name: 'Mozambique',
    code: 'MZ',
  },
  {
    name: 'Myanmar',
    code: 'MM',
  },
  {
    name: 'Namibia',
    code: 'NA',
  },
  {
    name: 'Nauru',
    code: 'NR',
  },
  {
    name: 'Nepal',
    code: 'NP',
  },
  {
    name: 'Netherlands',
    code: 'NL',
  },
  {
    name: 'Netherlands Antilles',
    code: 'AN',
  },
  {
    name: 'New Caledonia',
    code: 'NC',
  },
  {
    name: 'New Zealand',
    code: 'NZ',
  },
  {
    name: 'Nicaragua',
    code: 'NI',
  },
  {
    name: 'Niger',
    code: 'NE',
  },
  {
    name: 'Nigeria',
    code: 'NG',
  },
  {
    name: 'Niue',
    code: 'NU',
  },
  {
    name: 'North Korea',
    code: 'KP',
  },
  {
    name: 'Northern Mariana Islands',
    code: 'MP',
  },
  {
    name: 'Norway',
    code: 'NO',
  },
  {
    name: 'Oman',
    code: 'OM',
  },
  {
    name: 'Pakistan',
    code: 'PK',
  },
  {
    name: 'Palau',
    code: 'PW',
  },
  {
    name: 'Palestine',
    code: 'PS',
  },
  {
    name: 'Panama',
    code: 'PA',
  },
  {
    name: 'Papua New Guinea',
    code: 'PG',
  },
  {
    name: 'Paraguay',
    code: 'PY',
  },
  {
    name: 'Peru',
    code: 'PE',
  },
  {
    name: 'Philippines',
    code: 'PH',
  },
  {
    name: 'Pitcairn',
    code: 'PN',
  },
  {
    name: 'Poland',
    code: 'PL',
  },
  {
    name: 'Portugal',
    code: 'PT',
  },
  {
    name: 'Puerto Rico',
    code: 'PR',
  },
  {
    name: 'Qatar',
    code: 'QA',
  },
  {
    name: 'Republic of the Congo',
    code: 'CG',
  },
  {
    name: 'Reunion',
    code: 'RE',
  },
  {
    name: 'Romania',
    code: 'RO',
  },
  {
    name: 'Russia',
    code: 'RU',
  },
  {
    name: 'Rwanda',
    code: 'RW',
  },
  {
    name: 'Saint Barthelemy',
    code: 'BL',
  },
  {
    name: 'Saint Helena',
    code: 'SH',
  },
  {
    name: 'Saint Kitts and Nevis',
    code: 'KN',
  },
  {
    name: 'Saint Lucia',
    code: 'LC',
  },
  {
    name: 'Saint Martin',
    code: 'MF',
  },
  {
    name: 'Saint Pierre and Miquelon',
    code: 'PM',
  },
  {
    name: 'Saint Vincent and the Grenadines',
    code: 'VC',
  },
  {
    name: 'Samoa',
    code: 'WS',
  },
  {
    name: 'San Marino',
    code: 'SM',
  },
  {
    name: 'Sao Tome and Principe',
    code: 'ST',
  },
  {
    name: 'Saudi Arabia',
    code: 'SA',
  },
  {
    name: 'Senegal',
    code: 'SN',
  },
  {
    name: 'Serbia',
    code: 'RS',
  },
  {
    name: 'Seychelles',
    code: 'SC',
  },
  {
    name: 'Sierra Leone',
    code: 'SL',
  },
  {
    name: 'Singapore',
    code: 'SG',
  },
  {
    name: 'Sint Maarten',
    code: 'SX',
  },
  {
    name: 'Slovakia',
    code: 'SK',
  },
  {
    name: 'Slovenia',
    code: 'SI',
  },
  {
    name: 'Solomon Islands',
    code: 'SB',
  },
  {
    name: 'Somalia',
    code: 'SO',
  },
  {
    name: 'South Africa',
    code: 'ZA',
  },
  {
    name: 'South Korea',
    code: 'KR',
  },
  {
    name: 'South Sudan',
    code: 'SS',
  },
  {
    name: 'Spain',
    code: 'ES',
  },
  {
    name: 'Sri Lanka',
    code: 'LK',
  },
  {
    name: 'Sudan',
    code: 'SD',
  },
  {
    name: 'Suriname',
    code: 'SR',
  },
  {
    name: 'Svalbard and Jan Mayen',
    code: 'SJ',
  },
  {
    name: 'Swaziland',
    code: 'SZ',
  },
  {
    name: 'Sweden',
    code: 'SE',
  },
  {
    name: 'Switzerland',
    code: 'CH',
  },
  {
    name: 'Syria',
    code: 'SY',
  },
  {
    name: 'Taiwan',
    code: 'TW',
  },
  {
    name: 'Tajikistan',
    code: 'TJ',
  },
  {
    name: 'Tanzania',
    code: 'TZ',
  },
  {
    name: 'Thailand',
    code: 'TH',
  },
  {
    name: 'Togo',
    code: 'TG',
  },
  {
    name: 'Tokelau',
    code: 'TK',
  },
  {
    name: 'Tonga',
    code: 'TO',
  },
  {
    name: 'Trinidad and Tobago',
    code: 'TT',
  },
  {
    name: 'Tunisia',
    code: 'TN',
  },
  {
    name: 'Turkey',
    code: 'TR',
  },
  {
    name: 'Turkmenistan',
    code: 'TM',
  },
  {
    name: 'Turks and Caicos Islands',
    code: 'TC',
  },
  {
    name: 'Tuvalu',
    code: 'TV',
  },
  {
    name: 'U.S. Virgin Islands',
    code: 'VI',
  },
  {
    name: 'Uganda',
    code: 'UG',
  },
  {
    name: 'Ukraine',
    code: 'UA',
  },
  {
    name: 'United Arab Emirates',
    code: 'AE',
  },
  {
    name: 'England',
    code: 'GB',
  },
  {
    name: 'United States',
    code: 'US',
  },
  {
    name: 'Uruguay',
    code: 'UY',
  },
  {
    name: 'Uzbekistan',
    code: 'UZ',
  },
  {
    name: 'Vanuatu',
    code: 'VU',
  },
  {
    name: 'Vatican',
    code: 'VA',
  },
  {
    name: 'Venezuela',
    code: 'VE',
  },
  {
    name: 'Vietnam',
    code: 'VN',
  },
  {
    name: 'Wallis and Futuna',
    code: 'WF',
  },
  {
    name: 'Western Sahara',
    code: 'EH',
  },
  {
    name: 'Yemen',
    code: 'YE',
  },
  {
    name: 'Zambia',
    code: 'ZM',
  },
  {
    name: 'Zimbabwe',
    code: 'ZW',
  },
]

export const TEAMS = [
  { name: 'Australia', region: 'Asia' },
  { name: 'Iran', region: 'Asia' },
  { name: 'Japan', region: 'Asia' },
  { name: 'Saudi Arabia', region: 'Asia' },
  { name: 'South Korea', region: 'Asia' },
  { name: 'Egypt', region: 'Africa' },
  { name: 'Morocco', region: 'Africa' },
  { name: 'Nigeria', region: 'Africa' },
  { name: 'Senegal', region: 'Africa' },
  { name: 'Tunisia', region: 'Africa' },
  { name: 'Costa Rica', region: 'North, Central American and Caribbean' },
  { name: 'Mexico', region: 'North, Central American and Caribbean' },
  { name: 'Panama', region: 'North, Central American and Caribbean' },
  { name: 'Argentina', region: 'South America' },
  { name: 'Brazil', region: 'South America' },
  { name: 'Colombia', region: 'South America' },
  { name: 'Peru', region: 'South America' },
  { name: 'Uruguay', region: 'South America' },
  { name: 'Belgium', region: 'Europe' },
  { name: 'Croatia', region: 'Europe' },
  { name: 'Denmark', region: 'Europe' },
  { name: 'England', region: 'Europe' },
  { name: 'France', region: 'Europe' },
  { name: 'Germany', region: 'Europe' },
  { name: 'Iceland', region: 'Europe' },
  { name: 'Poland', region: 'Europe' },
  { name: 'Portugal', region: 'Europe' },
  { name: 'Russia', region: 'Europe' },
  { name: 'Serbia', region: 'Europe' },
  { name: 'Spain', region: 'Europe' },
  { name: 'Sweden', region: 'Europe' },
  { name: 'Switzerland', region: 'Europe' },
].map((team, i) => ({ ...team, id: i, code: (lookup.find(d => d.name === team.name) || {}).code }))
