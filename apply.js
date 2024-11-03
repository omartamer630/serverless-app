import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
    console.log("---devops90---start-handler");
    console.log("---devops90---event", event);
    
    let TableName = "raffle_db";
    let body;

    try {
        if(event.body){
            try{
                body = JSON.parse(event.body);
            } catch(e){
                body = event.body;
            }
        } else {
            body = event;
        }
        console.log("---devops90---body", body);

        if(!body.email){
            return "where is your email!";
        } else if(!body.phone){
            return "where is your phone!";
        }if(!body.name){
            return "where is your name!";
        }
        
         
        const command = new PutCommand({
            TableName: TableName,
            Item: {
              email: body.email,
              phone: body.phone,
              name: body.name,
              won: "no"
            },
        });
          
        const dynamo_response = await docClient.send(command);
        console.log("---devops90---dynamo-response", dynamo_response);
        return "Thanks, Your data may have been received;)";
          
    } catch (e) {
        console.log("---devops90---e", e);
        return e.message;
    }
};
