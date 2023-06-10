import { publicProcedure, createTRPCRouter } from "../trpc";
import { z } from "zod";
import { google } from "googleapis";
// import { env } from "../../../env.mjs";

// const emailSystem = env.EMAIL_SYSTEM
// const privateKey = env.GOOGLE_API_KEY.split(String.raw`\n`).join('\n')

// const sheetId = env.GOOGLE_SHEET_ID

// EMAIL_SYSTEM: process.env.EMAIL_SYSTEM,
// GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
// GOOGLE_SHEET_ID: process.env.GOOGLE_SHEET_ID,

const emailSystem =  "kahyaoglu-peyzaj-web@kahyaoglu-peyzaj-web.iam.gserviceaccount.com";
const privateKey =
  "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDbndS1OEghfGS6\nHmZzIv7HQ30SnHygBj+wLn9q8zqYgPEa3UgTLNvFZ8ynILSCZm84ErJa1fFiTu14\nMhR2a3gcHqW073tu1iTch9iNaZJt+L16scRhI9FqbwrhUat7hrpVKYwm17eJ9KVs\ngvbMJEaI2EuOtCPNDuUawo3Z0TprS7ngUX6Ol+7rFKdQnkS4uBy8PaZMqffL7aR4\nH4eqlguT2BnJiA/vcEKYjrPLwe6wHTM5jpVLS27hol7s4dcBrqgMVpAgp093s8fn\nQKuATHu8KQSvwHLebeA+0dcRNZsQTZBi5oQjkNJRe08ZQC0px8TUn7x7cO7QKhW0\n8D4XhJxJAgMBAAECggEADysxV3v7RW7TVo9GJGfeIPK+dzQzn7+Wvgs+y0BgriBi\nfChyXjqwCkw5/zAmhPGLdzFuvBCWCHmASZfslbpPXzfXBQPb1W25OY8wy/b8VsKt\nCbCwv5ngUMGPMZK5GAItVA0CLGZOu8VX+Kz6BrhvCRbRby+Y38S1L8+Qyc2RA1CP\nSEoAxsOha/bS6HWRW/XHECeEEC8ZJ5pNZ0dYKJd9/ZUfg8xbmUcq308wkCweZu75\nbbUR/YgxjwKBPgFc1f/Glwk0uXtfKTN5skmcuzXVVn57hkobqfxEVX4HWr3RjX5A\nVSi6DZWTsf+HyoAymo/0cCP1C6G10Zi0xEj8E9JoVQKBgQD6tHv/Sb/yjxngTRvF\nBC1Tz2ND9vGOUMfHX+hSJ4bc9FTYIflAGRDxgQShb7r+09qDnTymnhZXF2PeH42N\n4OMLP89bEEKd2vLuV9aD4rRA429g5bcXDsBJ6xlm+lHYXcV+7OeDfma88CYXgeAq\nJbzWZezrEX2TdhUMY5PpO321nQKBgQDgQUG+eP9H5aJcd6Hb/Kkdo4LbpJwhLuew\n05KI0OmgBUpxEOcwdB3r5xBML2UjjtWkWcTuF1On2hNujGX917ctUjw4QONqZD4e\nq2Cwr6o6/QF7cNoAV7vleGFlAOdVyv0Ii2J0ziZb0KEe81Q+EpQkiSwNM48IDFUB\n8oSoei23nQKBgQDBElPYA8zuGSSdZ+S18oSR4coZokjfB/kC4yqAcm5bJVNd67QP\nl/5Dbs/JH8nLzA2hhGscCe08fwfrHTOfiwxvMmIXSEt1VBP4V+8dPG8C9eRlpCM/\nf524j3TNqIN1dKnPGNUmoCaw5OUA/4VKECwAlRhC5AJomOyW0O0tFiK2xQKBgQCN\nK4dfiHvrnrteylCyU5OCfPRboHxIx2ZDAm00g48OlUYPdzySXAaaApNX4l4gzEHh\nfEFkQHsBJ18kMG3kJm/BsAsIvpBq4T/ZvrjXgT4AdFUCiEA0BwbZpbZqBu+aKnav\nck9AiKXNFsDW4wcdLETl2xRIGzTnNBwvZaPtCzzMYQKBgQCSOVOxoYCpftJvFdtr\ncqQWqUpJ8S6EYcnuIVBARlWd3USimqPgdC8h1OaKCqp1NSN4E3tD8KrWGOzVEtZl\ngaQ//v3ak2VY3CVNBLNE6Gz1M6jd+pFAph6DLU09u+hgZdRFeDbjI21RIhqCtfNZ\n3tIsW9BExMDRDp1YNKTwu8XfAA==\n-----END PRIVATE KEY-----\n";
const sheetId = "1q5To9RmPH9lT9ANxT-ZhxAR4alX6DNUY-0o8GkXM3yk";

async function updateSheetAtAll({
  name,
  surname,
  email,
  message,
  phone,
  affiliate,
  typeOfCustomer,
}: {
  name: string;
  surname: string;
  email: string;
  message: string;
  phone: string;
  affiliate: string;
  typeOfCustomer: string;
}) {
  const auth = new google.auth.JWT(emailSystem, undefined, privateKey, [
    "https://www.googleapis.com/auth/spreadsheets",
  ]);

  const date = new Date()
    .toLocaleString("tr-TR", {
      timeZone: "Europe/Istanbul",
      dateStyle: "short",
      timeStyle: "medium",
    })
    .replace(/\./g, "/");

  // const date =  new Date().toLocaleTimeString('tr-TR', { timeZone: 'Europe/Istanbul' });

  const googleSheets = google.sheets({ version: "v4", auth });
  const metaData = await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId: sheetId,
    range: "'Müşteri Datası'!A:I",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          name,
          surname,
          email,
          phone,
          message,
          affiliate,
          date,
          "newLead",
          "newlead",
          typeOfCustomer,
          "website",
        ],
      ],
    },
  });

  return metaData;
}

export const postsRouter = createTRPCRouter({
  // getUser: publicProcedure
  //   .input(z.object({ id: z.string() }))
  //   .query(async ({ ctx, input }) => {
  //     if (typeof input !== 'object' || !input.id) {
  //       throw new Error('Invalid input: Expected object with id property');
  //     }

  //     const { id } = input;
  //     const result = await updateSheet();

  //     console.log(result);
  //     if (!result) {
  //       return null;
  //     }
  //     return result;
  //   }),

  addContact: publicProcedure
    .input(
      z.object({
        name: z.string(),
        surname: z.string(),
        email: z.string(),
        message: z.string(),
        phone: z.string(),
        affiliate: z.string(),
        typeOfCustomer: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      if (typeof input !== "object" || !input.name) {
        throw new Error("Invalid input: Expected object with name property");
      }

      const {
        name,
        surname,
        email,
        message,
        phone,
        affiliate,
        typeOfCustomer,
      } = input;
      const result = await updateSheetAtAll({
        name,
        surname,
        email,
        message,
        phone,
        affiliate,
        typeOfCustomer,
      });

      if (!result) {
        return null;
      }
      return result;
    }),
});
