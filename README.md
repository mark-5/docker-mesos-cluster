# SYNOPSIS
Generate a docker-compose.yml for a mesos cluster.

# INSTALL
* install docker-compose - https://docs.docker.com/compose/install/
* install perl dependencies - cpanm --installdeps .

# bin/init
Generate the docker-compose.yml.
See bin/init --help for a description of options.

# bin/destroy
Tear down the cluster and delete the docker-compose.yml.

# proxy
The proxy image is a simple http proxy that is linked to all mesos masters and slaves.

# work directory
The work directory is shared between all mesos masters and slaves. A work image is also provided, which shares this directory and is linked to all masters and slaves. This is used primarily for testing mesos schedulers and executors.
