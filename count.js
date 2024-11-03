import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({});

export const handler = async (event, context) => {
    console.log("---devops90---start-handler");
    console.log("---devops90---event", event);
    let TableName = "raffle_db";
    try {
        const command = new ScanCommand({
            TableName: TableName,
            Select: "COUNT"
        });
        
        const response = await client.send(command);

        console.log("---devops90---response", response);
        return response.Count;
    } catch (e) {
        console.log("---devops90---e", e);
        return e.message;
    }
};

