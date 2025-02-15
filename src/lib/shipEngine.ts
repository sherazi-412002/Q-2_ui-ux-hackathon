import ShipEngine from 'shipengine';

const shipEngine = new ShipEngine({
    apiKey:process.env.SHIPEINGINE_API_KEY as string
})

export default shipEngine;