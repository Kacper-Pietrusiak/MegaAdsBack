import {AdRecord} from "../records/ad.record";
import {pool} from "../utils/db";
import {AdEntity} from "../types";

const obj = {
    name: 'test namead',
    description: 'blaha',
    url: 'https://megak.pl',
    price: 223,
    lon: 2,
    lat: 2,
}

afterAll(async () => {
    await  pool.end()
})

test('AdRecord returns data from database for one rntry', async () => {
    const ad = await AdRecord.getOne('masno')

    expect(ad).toBeDefined()
    expect(ad.id).toBe('masno')
    expect(ad.name).toBe('adw')
});

test('AdRecord return null from database for unexisting entry.', async () =>{
    const ad = await AdRecord.getOne('aaa')

    expect(ad).toBeNull()
});

test('AdRecord.getAll return array of found entries where is "a" in name.', async () =>{
    const ad = await AdRecord.getAll('a')

    expect(ad).not.toEqual([])
});

test('AdRecord.getAll returns smaller amount of data', async () =>{
    const ads = await AdRecord.getAll('')

    expect((ads[0] as AdEntity).price).toBeUndefined();
    expect((ads[0] as AdEntity).description).toBeUndefined();
});

test('AdRecord.insert returns new UUID()', async () =>{
    const ad = await new AdRecord(obj)
    await ad.insert()

    expect(ad.id).toBeDefined();
    expect(typeof ad.id).toBe('string')
});

test('AdRecord.insert inserts data to database', async () =>{
    const ad = await new AdRecord(obj)
    await ad.insert()

    const foundAd = await AdRecord.getOne(ad.id);

    expect(foundAd).toBeDefined()
    expect(foundAd).not.toBeNull()
    expect(foundAd.id).toBe(ad.id)
});