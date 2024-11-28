import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

const Dashboard = () => {
  return (
    <div className="flex flex-col w-full h-full items-center min-h-screen justify-center mt-10 bg-white bg-opacity-0 p-0">
      <header className="w-full h-full bg-white bg-opacity-10 shadow-lg rounded-lg p-4">
        <h1 className="text-2xl font-semibold bg-gradient-to-r from-green-500 to-green-900 text-transparent bg-clip-text mb-4 text-center">Dashboard</h1>
        <PowerBIEmbed
          embedConfig={{
            type: 'report',
            id: 'd0d6358d-23f2-47f2-90fb-56ce7775c709',
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=d0d6358d-23f2-47f2-90fb-56ce7775c709&groupId=b68463ef-6d99-4bf7-ad6a-6fd27124031a&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLVdFU1QtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7InVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d",
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjNQYUs0RWZ5Qk5RdTNDdGpZc2EzWW1oUTVFMCIsImtpZCI6IjNQYUs0RWZ5Qk5RdTNDdGpZc2EzWW1oUTVFMCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZmYzMzViYTItYmI2OC00ODlhLWJiZGQtZjQ5YWI0MzE5ODM4LyIsImlhdCI6MTcyOTg0NzExNiwibmJmIjoxNzI5ODQ3MTE2LCJleHAiOjE3Mjk4NTIyNzMsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84WUFBQUExNGlpYWZVQS9EMHVVem44OUFVT2RnVGRLM1dKYmJxQUp2aHFCVnp2N3VXSEhzODI2aHdUZEl6UjYrWU1POW5YanpGbWczdTlJbk1PT0Qva0VVNUpVdFgyb0I0elhlQ0wwcFk2QmQ1QXRtTT0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiIyMUJDRTcyMTQiLCJnaXZlbl9uYW1lIjoiU09VTUFKSVQgUEFMIiwiaWR0eXAiOiJ1c2VyIiwiaXBhZGRyIjoiMTE3LjIxMy4yMDAuMzAiLCJuYW1lIjoiU09VTUFKSVQgUEFMIDIxQkNFNzIxNCIsIm9pZCI6IjVjMjcwYmIxLWM2OTktNDkyMC1iYzIzLWRjZTQ5YjhhNzI0YiIsInB1aWQiOiIxMDAzMjAwMTY4NERCNTI0IiwicmgiOiIwLkFYSUFvbHN6XzJpN21raTczZlNhdERHWU9Ba0FBQUFBQUFBQXdBQUFBQUFBQUFEREFNRS4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJYRW15UzdQbS1KYWdZbjdFVUdQckhSdWN5UTlRU2pKaUxFMGtIOExNZVVBIiwidGlkIjoiZmYzMzViYTItYmI2OC00ODlhLWJiZGQtZjQ5YWI0MzE5ODM4IiwidW5pcXVlX25hbWUiOiJzb3VtYWppdC4yMWJjZTcyMTRAdml0YXBzdHVkZW50LmFjLmluIiwidXBuIjoic291bWFqaXQuMjFiY2U3MjE0QHZpdGFwc3R1ZGVudC5hYy5pbiIsInV0aSI6Im82N0UyUlBIVGtPZWJoRHY4aGhyQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfaWRyZWwiOiIyIDEifQ.PVhvKnJkEh5TZGqLedQKPZubZ6LL5tO7Q5N8REn73wmEXR-bMcmk3FDXo_WhC8BZPZSTIYow7pvQRfhQfmSmXwNR3jUeXf5H2e1DMSPOERCbPX_iiYnB85m-9Ft_xabm83noncf8E3c6MGyP56OmfIcbIwZ1KzHYeh3jz8GjjfGhX2xyjySpGPXo8P5wdqXBH9WQhjF5iuwvGq7erHuC0iQUg49gvfkwgtBKnEkgoSOOcUGoK1k9u8qqMff2gLIYWJhJRsxhVbd6oQEKamPGIRAtkM0tuhdxVUvcWGa1ArpMGjqYaXh7lV7xx7NsxAMMVbeETOEw9J7wcgpuFqiPyg',
            tokenType: models.TokenType.Aad,
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: true,
                },
              },
            },
          }}
          eventHandlers={
            new Map([
              ['loaded', function () { console.log('Dashboard loaded'); }],
              ['rendered', function () { console.log('Dashboard rendered'); }],
              ['error', function (event) { console.log(event.detail); }],
            ])
          }
          cssClassName={"w-full h-screen"}
          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        />
      </header>
    </div>
  );
};

export default Dashboard;
