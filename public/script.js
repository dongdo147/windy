fetch('/api/config')
    .then(res => res.json())
    .then(config => {
        const options = {
            key: config.windyKey,
            verbose: true,
            lat: 50.4,
            lon: 14.3,
            zoom: 5,
        };

        windyInit(options, windyAPI => {
            const { map } = windyAPI;

            L.popup()
                .setLatLng([50.4, 14.3])
                .setContent('Hello World')
                .openOn(map);
        });
    })
    .catch(err => console.error(err));
