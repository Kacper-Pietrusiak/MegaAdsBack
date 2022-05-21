import {AdRecord} from "../records/ad.record";
import {pool} from "../utils/db";
import {AdEntity} from "../types";

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