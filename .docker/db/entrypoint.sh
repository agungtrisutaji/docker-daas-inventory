#!/bin/bash

# Fix permission for config file
chmod 644 /etc/mysql/conf.d/my.cnf

# Jalankan perintah default MySQL entrypoint
exec docker-entrypoint.sh "$@"
