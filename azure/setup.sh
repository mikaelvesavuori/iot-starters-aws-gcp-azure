# Add new extension for Azure IoT
az extension add --name azure-iot

# Create resource group and IoT Hub (only one hub per account!)
az group create --name $AZURE_RG_NAME --location $AZURE_LOCATION

az iot hub create --name $AZURE_IOTHUB_NAME --resource-group $AZURE_RG_NAME --sku S1

# Add device
az iot hub device-identity create --hub-name $AZURE_IOTHUB_NAME --device-id $AZURE_NODEDEVICE_NAME

# Put the connection string you get from this command, and set it in `write.js`
az iot hub device-identity show-connection-string --hub-name $AZURE_IOTHUB_NAME --device-id $AZURE_NODEDEVICE_NAME --output table

# Take notes of the following values and set them in `read.js`
az iot hub show --query properties.eventHubEndpoints.events.endpoint --name $AZURE_IOTHUB_NAME

az iot hub show --query properties.eventHubEndpoints.events.path --name $AZURE_IOTHUB_NAME

az iot hub policy show --name service --query primaryKey --hub-name $AZURE_IOTHUB_NAME