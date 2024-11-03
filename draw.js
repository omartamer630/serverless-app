import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";

const dynamo = new DynamoDBClient({});
const client = DynamoDBDocumentClient.from(dynamo);

export const handler = async (event) => {
    console.log("---devops90---start-handler");
    console.log("---devops90---event", event);
    let TableName = "raffle_db";
    let winners_count = 3;
    try 
    {
        console.log("---devops90---try");
        
        const command = new ScanCommand({
          FilterExpression: "won = :w",
          ExpressionAttributeValues: {
            ":w": "no"
          },
          TableName: TableName
        });
        
        const data = await client.send(command);

        console.log("---devops90---items-count", data.Items.length);

        if(data.Items.length < winners_count){
          const log_item = "There is no enough data! " + data.Items.length + " only";
          console.log("---devops90---", log_item);
          return log_item;
        }
        
        let indecis = [];
        let winners = [];
        for(let i =0; i < winners_count; i++){
            let newIndex = Math.floor(Math.random() * data.Items.length);
            if(indecis.includes(newIndex))
            // if (indecis[0] == newIndex || indecis[1] == newIndex || indecis[2] == newIndex)
            {
                i--;
                continue;
            }
            indecis[i] = newIndex ;
            winners.push(data.Items[newIndex]);
        }
        
        for(let i = 0; i < winners.length; i++){

            const update_command = new UpdateCommand({
              TableName: TableName,
              Key: {
                email: winners[i].email
              },
              UpdateExpression: 'set won = :r',
              ExpressionAttributeValues: {
                ':r': 'yes',
              }
            });
            const response = await client.send(update_command);
            console.log(response);
        }
        
        return {
          "indecis": indecis,
          "winners": winners
        };
        
    } catch (err) {
        console.log(err);
        return err.message;
    }
};
