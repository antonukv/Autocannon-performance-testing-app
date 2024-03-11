import autocannon from 'autocannon';

const targetUrl = 'https://example.com'; // Replace with your target URL

const config = {
  url: targetUrl,
  connections: 10, // Number of concurrent connections
  pipelining: 1, // Number of pipelined requests per connection
  duration: 10, // Test duration in seconds
};

autocannon(config, (err, result) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  // Output results
  console.log(autocannon.printResult(result));
});
