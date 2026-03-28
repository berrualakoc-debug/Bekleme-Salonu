var APP_DATA = {
  "scenes": [
    {
      "id": "0-panorama_1",
      "name": "Panorama_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.0364441707189318,
        "pitch": 0.20554241683543495,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.5106180028035663,
          "pitch": 0.488599220497008,
          "rotation": 4.71238898038469,
          "target": "1-panorama"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-panorama",
      "name": "Panorama",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.9134687215914807,
        "pitch": 0.39850844727465073,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.9223588239250127,
          "pitch": 0.8164396914894994,
          "rotation": 3.141592653589793,
          "target": "0-panorama_1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
