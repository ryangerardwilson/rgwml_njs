#!/bin/bash

# Function to increment version number
increment_version() {
  local version=$1
  local part=$2

  IFS='.' read -r -a version_parts <<< "$version"
  
  if [ "$part" == "patch" ]; then
    ((version_parts[2]++))
  elif [ "$part" == "minor" ]; then
    ((version_parts[1]++))
    version_parts[2]=0
  elif [ "$part" == "major" ]; then
    ((version_parts[0]++))
    version_parts[1]=0
    version_parts[2]=0
  fi

  echo "${version_parts[0]}.${version_parts[1]}.${version_parts[2]}"
}

# Read current version from package.json
current_version=$(grep -Eo '"version": "[0-9]+\.[0-9]+\.[0-9]+"' package.json | grep -Eo '[0-9]+\.[0-9]+\.[0-9]+')

# Determine which part of the version to increment (default to patch)
part=${1:-patch}

# Calculate new version
new_version=$(increment_version $current_version $part)

# Update version in package.json
sed -i "s/\"version\": \"$current_version\"/\"version\": \"$new_version\"/" package.json

# Publish to npm
npm publish

# Check if npm publish was successful
if [ $? -eq 0 ]; then
  echo "Package published successfully. New version is $new_version."
else
  echo "Failed to publish package."
  exit 1
fi

