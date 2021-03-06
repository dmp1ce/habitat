---
title: Monitor Habitat services
description: Monitor services through the HTTP API
---

# Monitor services through the HTTP API
When a service starts, the supervisor exposes the status of its services' health and other information through an HTTP API endpoint. This information can be useful in monitoring service health, results of leader elections, and so on.

The HTTP API provides information on the following endpoints:

* `/census` - Returns the current Census of Services on the Ring (roughly what you see as a service in config.toml).
* `/services` - Returns an array of all the services running under this supervisor.
* `/services/{name}/{group}/config` - Returns this service groups current configuration.
* `/services/{name}/{group}/{organization}/config` - Same as above, but includes the organization.
* `/services/{name}/{group}/health` - Returns the current health check for this service.
* `/services/{name}/{group}/{organization}/health` - Same as above, but includes the organization.
* `/butterfly` - Debug information about the rumors stored via Butterfly.

## Usage
Connect to the supervisor of the running service using the following syntax. This example uses `curl` to do the GET request.

      curl http://172.17.0.2:9631/services

> Note: The default listening port on the supervisor is 9631; however, that can be changed by using the `--listen-http` option when starting a service.

Depending on the endpoint you hit, the data may be formatted in JSON, TOML, or plain text.

<hr>
<ul class="main-content--link-nav">
  <li>Continue to the next topic</li>
  <li><a href="/docs/share-packages-overview">Share packages</a></li>
</ul>
