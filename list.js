import handler from "./libs/handler-lib";
const AirtablePlus = require('airtable-plus');

export const main = handler(async (event, context) => {
    const airtable = new AirtablePlus({
        baseID: 'app8yNh5HiXXbpXRe',
        apiKey: process.env.airtableSecretKey,
        tableName: 'suppliers'
    });

    const response = await airtable.read({});

    return response;
});
