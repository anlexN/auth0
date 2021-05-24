const elProgress = document.getElementById('progress');

status('downloading with fetch()...');

async function get(params) {
  try {
    const response = await fetch('https://fetch-progress.anthum.com/30kbps/images/sunrise-baseline.jpg');
    if (!response.ok) {
      throw Error(response.status + ' ' + response.statusText);
    }

    if (!response.body) {
      throw Error('ReadableStream not yet supported in this browser.');
    }

    // to access headers, server must send CORS header "Access-Control-Expose-Headers: content-encoding, content-length x-file-size"
    // server must send custom x-file-size header if gzip or other content-encoding is used
    const contentEncoding = response.headers.get('content-encoding');
    const contentLength = response.headers.get(contentEncoding ? 'x-file-size' : 'content-length');
    if (contentLength === null) {
      throw Error('Response size header unavailable');
    }

    const total = parseInt(contentLength, 10);
    let loaded = 0;
    const response_1 = new Response(
      new ReadableStream({
        start(controller) {
          const reader = response.body.getReader();

          read();
          async function read() {
            try {
              const { done, value } = await reader.read();
              if (done) {
                controller.close();
                return;
              }
              loaded += value.byteLength;
              progress({ loaded, total });
              controller.enqueue(value);
              read();
            } catch (error) {
              console.error(error);
              controller.error(error);
            }
          }
        },
      })
    );
    const data = await response_1.blob();
    status('download completed');
    document.getElementById('img').src = URL.createObjectURL(data);
  } catch (error_1) {
    console.error(error_1);
    status(error_1);
  }
}

function progress({ loaded, total }) {
  elProgress.innerHTML = Math.round((loaded / total) * 100) + '%';
}

https://anlexn.auth0.com/login?state=hKFo2SBqQThlWTJTSG1NOF82c3JILWtIalY3d05kOHo0N0NKVqFupWxvZ2luo3RpZNkgdDF6dlVad09zWXZLY2lEWXFpWVJWWHlsTkZiV1NiS2SjY2lk2SBPb0RsOUZjWDRlNFlGVzc2TFdtOXpCcFRUWVBzazU0Yw&client=OoDl9FcX4e4YFW76LWm9zBpTTYPsk54c&protocol=oauth2&audience=http%3A%2F%2Flocalhost%3A3000%2Fapi%2F&redirect_uri=http%3A%2F%2Flocalhost%3A3333&scope=openid%20profile%20email&response_type=code&response_mode=query&nonce=eWFxYXlqY3JIVC52alpndUNIZ2VzcGpqUHJYb2ZjdXRhMm8uT01LVGRyag%3D%3D&code_challenge=O6vZIkw-6dRB8REZF2knf1TexOVtHgePuIs3hWYCj84&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtc3BhLWpzIiwidmVyc2lvbiI6IjEuMTUuMCJ9