import {AdRecord} from "../records/ad.record";

test('AdRecord returns data from database for one rntry', async () => {
    const ad = await AdRecord.getOne('masno')

    expect(ad).toBeDefined()
    expect(ad.id).toBe('masno')
    expect(ad.name).toBe('adw')
});

test('AdRecord return null from database for unexisting entry.', async () =>{
    const ad = await AdRecord.getOne('aaa')

    expect(ad).toBeNull()
})