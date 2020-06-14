/*********************************************************************************************************************/
/* Adapted from Microsoft's example at https://docs.microsoft.com/sv-se/azure/iot-hub/quickstart-send-telemetry-node */
/*********************************************************************************************************************/

const { EventHubConsumerClient } = require("@azure/event-hubs");

// Get the below values from the bottom section of `setup.sh`
const EVENTHUB_ENDPOINT =
  "sb://iothub-ns-iot-starte-3625922-329d5379db.servicebus.windows.net/";
const EVENTHUB_PATH = "iot-starter-iothub";
const IOTHUB_SAS_KEY = "VweHSP4ch0aTTXVLVFxpqG5Hhq164JiwrxVHyXIzfUU=";

const CONNECTION_STRING = `Endpoint=${EVENTHUB_ENDPOINT};EntityPath=${EVENTHUB_PATH};SharedAccessKeyName=service;SharedAccessKey=${IOTHUB_SAS_KEY}`;

const printError = (err) => console.log(err.message);

// Display the message content - telemetry and properties.
const printMessages = (messages) => {
  for (const message of messages) {
    console.log("Telemetry received: ");
    console.log(JSON.stringify(message.body));
    console.log("Properties (set by device): ");
    console.log(JSON.stringify(message.properties));
    console.log("System properties (set by IoT Hub): ");
    console.log(JSON.stringify(message.systemProperties));
    console.log("");
  }
};

async function main() {
  console.log("IoT Hub Quickstarts - Read device to cloud messages.");

  // Create the client to connect to the default consumer group of the Event Hub
  const consumerClient = new EventHubConsumerClient(
    "$Default",
    CONNECTION_STRING,
    clientOptions
  );

  consumerClient.subscribe({
    processEvents: printMessages,
    processError: printError,
  });
}

main().catch((error) => {
  console.error("Error running sample:", error);
});
