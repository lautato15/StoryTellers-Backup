#!/usr/bin/env bash

# Record start time for build duration calculation
START=$(date +%s)

# Load NVM (Node Version Manager)
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# Display current Node version and switch to Node.js version 23
node -v
nvm use 23

# Update pnpm and pull latest code
echo "Checking updates"
pnpm add -g pnpm
git pull

# Install project dependencies using pnpm
pnpm install

# Build the project
echo "Building storytellers website"
pnpm build

# Check if dist directory has been built
if [ ! -d "dist" ]; then
    echo "Error: dist directory not found after build"
    exit 1
fi

# Setup public_html directory
echo "Setting up public_html directory"
PUBLIC_HTML_DIR="../public_html"

# Clean public_html contents if directory exists
if [ -d "$PUBLIC_HTML_DIR" ]; then
    echo "Cleaning existing public_html directory"
    rm -rf "$PUBLIC_HTML_DIR"/*
    
    # Copy dist contents
    cp -r dist/* "$PUBLIC_HTML_DIR/" 2>/dev/null || {
        echo "Error: Failed to copy dist contents to public_html"
        exit 1
    }
    
    # Copy .htaccess configuration
    echo "Copying .htaccess configuration"
    cp .htaccess "$PUBLIC_HTML_DIR/" 2>/dev/null || {
        echo "Warning: Could not copy .htaccess"
    }
    
    # Set proper ownership and permissions
    chown -R $USER:$USER "$PUBLIC_HTML_DIR" 2>/dev/null || {
        echo "Warning: Could not set ownership"
    }
    find "$PUBLIC_HTML_DIR" -type d -exec chmod 755 {} \; 2>/dev/null
    find "$PUBLIC_HTML_DIR" -type f -exec chmod 644 {} \; 2>/dev/null
else
    echo "Error: public_html directory not found at $PUBLIC_HTML_DIR"
    exit 1
fi

# Calculate and display build duration
END=$(date +%s)
echo $((END-START)) | awk '{print int($1/60)":"int($1%60)}'
echo "Build complete"

# Prompt for node_modules cleanup
while true; do
    read -p "Do you wish to remove node_modules directory (production only) [y/n]? " yn
    case $yn in
        [Yy]* ) rm -rf node_modules; break;;
        [Nn]* ) exit;;
        * ) echo "Please answer yes or no.";;
    esac
done
