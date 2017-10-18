mapboxgl.accessToken = 'pk.eyJ1IjoibW9udW9oYSIsImEiOiJEN0llUXVZIn0.H0DvYd5sdO9b3dNcnuucvw';

var map = new mapboxgl.Map({
    container: 'mapid', // you have to have this
    style: 'mapbox://styles/mapbox/light-v9', // you must have this
    center: [-96.3629079, 42.2044772],
    zoom: 3,
});

map.on('load', function() {

    jQuery(document).ready(function($) {
        var rangeSlider = $('#slidecontainer');
        var value;
        rangeSlider.slider({
            value: 1,
            min: 1,
            max: 7,
            step: 1,
        });

        $(document).on('click', '#prev-button', function() {
            value = rangeSlider.slider('value') - 1;
            rangeSlider.slider('value', value);
            console.log(value);
            prevDisplayLayer(value);

        });

        $(document).on('click', '#next-button', function() {
            value = rangeSlider.slider('value') + 1;
            //$('#myRange.value') = 6;
            rangeSlider.slider('value', value);
            console.log(value);
            nextDisplayLayer(value);
        });

    })

});

var popup = new mapboxgl.Popup({
    closeButton: true,
    closeOnClick: false
});

map.on('mouseenter', 'nflTweetData', function(e){
    map.getCanvas().style.cursor = 'pointer'; //change cursor 
    //Populate pop-up with information from our geojson file
    //Add to map on hover (or mouseenter), with "Magnitude: "
    popup.setLngLat(e.features[0].geometry.coordinates)
         .setHTML(e.features[0].properties.tweet_body)
         .addTo(map);  
});

map.on('mouseenter', 'nflTweetData1', function(e){
    map.getCanvas().style.cursor = 'pointer'; //change cursor 
    //Populate pop-up with information from our geojson file
    //Add to map on hover (or mouseenter), with "Magnitude: "
    popup.setLngLat(e.features[0].geometry.coordinates)
         .setHTML(e.features[0].properties.tweet_body)
         .addTo(map);  
});

map.on('mouseenter', 'nflTweetData2', function(e){
    map.getCanvas().style.cursor = 'pointer'; //change cursor 
    //Populate pop-up with information from our geojson file
    //Add to map on hover (or mouseenter), with "Magnitude: "
    popup.setLngLat(e.features[0].geometry.coordinates)
         .setHTML(e.features[0].properties.tweet_body)
         .addTo(map);  
});

map.on('mouseenter', 'nflTweetDataBreak', function(e){
    map.getCanvas().style.cursor = 'pointer'; //change cursor 
    //Populate pop-up with information from our geojson file
    //Add to map on hover (or mouseenter), with "Magnitude: "
    popup.setLngLat(e.features[0].geometry.coordinates)
         .setHTML(e.features[0].properties.tweet_body)
         .addTo(map);  
});

map.on('mouseenter', 'nflTweetData3', function(e){
    map.getCanvas().style.cursor = 'pointer'; //change cursor 
    //Populate pop-up with information from our geojson file
    //Add to map on hover (or mouseenter), with "Magnitude: "
    popup.setLngLat(e.features[0].geometry.coordinates)
         .setHTML(e.features[0].properties.tweet_body)
         .addTo(map);  
});

map.on('mouseenter', 'nflTweetData4', function(e){
    map.getCanvas().style.cursor = 'pointer'; //change cursor 
    //Populate pop-up with information from our geojson file
    //Add to map on hover (or mouseenter), with "Magnitude: "
    popup.setLngLat(e.features[0].geometry.coordinates)
         .setHTML(e.features[0].properties.tweet_body)
         .addTo(map);  
});

function prevDisplayLayer(slider_value) {
    if (slider_value == 0 || slider_value == 1) {
        // just show the map
        if (map.getLayer('nflTweetData1') !== undefined) {
            map.removeLayer('nflTweetData1');
            map.removeSource('nflTweetData1');
        }
    }

    if (slider_value == 2) {
        // Pre-game and First quarter
        map.removeLayer('nflTweetData2');
        map.removeSource('nflTweetData2');
        map.addLayer({
            id: 'nflTweetData1',
            type: 'circle',
            source: {
                type: 'geojson',
                data: 'patriots-jets-1.geojson'
            },
            paint: {
                'circle-color': '#006037',
                'circle-opacity': 0.8
            }

        })
    }

    if (slider_value == 3) {
        // Pre-game, First quarter and Second Quarter
        map.removeLayer('nflTweetDataBreak');
        map.removeSource('nflTweetDataBreak');
        map.addLayer({
            id: 'nflTweetData2',
            type: 'circle',
            source: {
                type: 'geojson',
                data: 'patriots-jets-2.geojson'
            },
            paint: {
                'circle-color': '#252B3B',
                'circle-opacity': 0.8
            }

        })
    }

    if (slider_value == 4) {
        map.removeLayer('nflTweetData3');
        map.removeSource('nflTweetData3');
        map.addLayer({
            id: 'nflTweetDataBreak',
            type: 'circle',
            source: {
                type: 'geojson',
                data: 'patriots-jets-break.geojson'
            },
            paint: {
                'circle-color': '#D4AF37',
                'circle-opacity': 0.8
            }

        })
    }

    if (slider_value == 5) {
        map.removeLayer('nflTweetData4');
        map.removeSource('nflTweetData4');
        map.addLayer({
            id: 'nflTweetData3',
            type: 'circle',
            source: {
                type: 'geojson',
                data: 'patriots-jets-3.geojson'
            },
            paint: {
                'circle-color': '#252B3B',
                'circle-opacity': 0.8
            }

        })
    }

    if (slider_value == 6) {
        map.removeLayer('nflTweetData');
        map.removeSource('nflTweetData');
        map.addLayer({
            id: 'nflTweetData4',
            type: 'circle',
            source: {
                type: 'geojson',
                data: 'patriots-jets-4.geojson'
            },
            paint: {
                'circle-color': '#21B6A8',
                'circle-opacity': 0.8
            }

        });
    }
}

function nextDisplayLayer(slider_value) {
    if (slider_value == 0 || slider_value == 1) {
        // just show the map
    }

    if (slider_value == 2) {
        // Pre-game and First quarter
        map.addLayer({
            id: 'nflTweetData1',
            type: 'circle',
            source: {
                type: 'geojson',
                data: 'patriots-jets-1.geojson'
            },
            paint: {
                'circle-color': '#006037',
                'circle-opacity': 0.8
            }

        })
    }

    if (slider_value == 3) {
        // Pre-game, First quarter and Second Quarter
        map.removeLayer('nflTweetData1');
        map.removeSource('nflTweetData1');
        map.addLayer({
            id: 'nflTweetData2',
            type: 'circle',
            source: {
                type: 'geojson',
                data: 'patriots-jets-2.geojson'
            },
            paint: {
                'circle-color': '#252B3B',
                'circle-opacity': 0.8
            }

        })
    }

    if (slider_value == 4) {
        map.removeLayer('nflTweetData2');
        map.removeSource('nflTweetData2');
        map.addLayer({
            id: 'nflTweetDataBreak',
            type: 'circle',
            source: {
                type: 'geojson',
                data: 'patriots-jets-break.geojson'
            },
            paint: {
                'circle-color': '#D4AF37',
                'circle-opacity': 0.8
            }

        })
    }

    if (slider_value == 5) {
        map.removeLayer('nflTweetDataBreak');
        map.removeSource('nflTweetDataBreak');
        map.addLayer({
            id: 'nflTweetData3',
            type: 'circle',
            source: {
                type: 'geojson',
                data: 'patriots-jets-3.geojson'
            },
            paint: {
                'circle-color': '#252B3B',
                'circle-opacity': 0.8
            }

        })
    }

    if (slider_value == 6) {
        map.removeLayer('nflTweetData3');
        map.removeSource('nflTweetData3');
        map.addLayer({
            id: 'nflTweetData4',
            type: 'circle',
            source: {
                type: 'geojson',
                data: 'patriots-jets-4.geojson'
            },
            paint: {
                'circle-color': '#21B6A8',
                'circle-opacity': 0.8
            }

        })
    }

    if (slider_value == 7) {
        map.removeLayer('nflTweetData4');
        map.removeSource('nflTweetData4');
        map.addLayer({
            id: 'nflTweetData',
            type: 'circle',
            source: {
                type: 'geojson',
                data: 'patriots-jets.geojson'
            },
            paint: {
                'circle-color': '#252B3B',
                'circle-opacity': 0.8
            }

        })
    }
}

