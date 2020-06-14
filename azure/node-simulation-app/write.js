/*********************************************************************************************************************/
/* Adapted from Microsoft's example at https://docs.microsoft.com/sv-se/azure/iot-hub/quickstart-send-telemetry-node */
/*********************************************************************************************************************/

"use strict";

const Mqtt = require("azure-iot-device-mqtt").Mqtt;
const DeviceClient = require("azure-iot-device").Client;
const Message = require("azure-iot-device").Message;

const CONNECTION_STRING =
  "HostName=iot-starter-iothub.azure-devices.net;DeviceId=iot-starter-nodedevice;SharedAccessKey=Na1TO4h4J4wlkUseR7B4ZvBA3S3mLBs4MFx9AzaDeXc="; // Looks like: HostName=iot-starter-iothub.azure-devices.net;DeviceId=iot-starter-nodedevice;SharedAccessKey=Na1TO44J4wlkUseR74ZvA3SLBsMx9AaDeXc=
const client = DeviceClient.fromConnectionString(CONNECTION_STRING, Mqtt);

setInterval(() => {
  // Simulate telemetry
  let temperature = 20 + Math.random() * 15;

  const MESSAGE = new Message(
    JSON.stringify({
      temperature,
      humidity: 60 + Math.random() * 20,
    })
  );

  // Add custom property
  MESSAGE.properties.add(
    "temperatureAlert",
    temperature > 30 ? "true" : "false"
  );

  console.log("Sending message: " + MESSAGE.getData());

  // Send message
  client.sendEvent(MESSAGE, (err) => {
    if (err) console.error("send error: " + err.toString());
    console.log("message sent");
  });
}, 1000);
