#!/usr/bin/env bash

rm -rf dist
vite build
cp LICENSE dist/LICENSE

IFS=$'\n'
for dep_path in $(npm ls --depth=0 --omit=dev --parseable --long=false 2>/dev/null | tail -n +2); do
  if [ -f "$dep_path/LICENSE" ]; then
    dep_name=$(basename "$dep_path")
    echo "$dep_name@$(npm info "$dep_name" version 2>/dev/null):" >> dist/THIRD_PARTY_LICENSES
    echo >> dist/THIRD_PARTY_LICENSES

    license_path="node_modules/$dep_name/LICENSE"
    cat "$license_path" >> dist/THIRD_PARTY_LICENSES

    echo >> dist/THIRD_PARTY_LICENSES
    echo "---------------------------------------------------------" >> dist/THIRD_PARTY_LICENSES
    echo >> dist/THIRD_PARTY_LICENSES
  fi
done
