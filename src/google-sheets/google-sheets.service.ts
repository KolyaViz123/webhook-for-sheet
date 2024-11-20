import { Injectable } from '@nestjs/common';
import * as path from 'path';
import { google } from 'googleapis';
import { JWT } from 'google-auth-library';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class GoogleSheetsService {
    private sheets;

    constructor() {
        const keyPath = path.join(__dirname, process.env.GOOGLE_SHEET_KEY_PATH);

        const auth = new JWT({
            keyFile: keyPath,
            scopes: ['https://www.googleapis.com/auth/spreadsheets']
        })

        this.sheets = google.sheets({version: 'v4', auth});
    }

    async readSheet() {
        try {
            const response = await this.sheets.spreadsheets.values.get({
                spreadsheetId: process.env.GOOGLE_SHEET_ID,
                range: 'A1:C10'
            })

            return response.data.values;
        } catch (err) {
            throw err;
        }
    }
}
