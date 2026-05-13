# Google Gemini Tab
Unofficial Google Gemini add-on for Thunderbird, it adds a button in Spaces that opens a Google Gemini tab in Thunderbird.

#### Installing 
A new Google Gemini icon should appear in the Spaces Toolbar of Thunderbird. Click to open.

#### Installing from sources
Download the repository, zip it, rename it to Google-Gemini-Tab.xpi and choose install addon from file in Thunderbird.

In linux the xpi file can be created with the following commands
* `git clone https://github.com/feranick/Thunderbird-Google-Gemini-Tab`
* `cd ./Thunderbird-Google-Gemini-Tab`
* `VERSION=$(cat ./manifest.json | jq --raw-output '.version')`
* `zip -r "../Google-Gemini-Tab-${VERSION}-tb.xpi" *`
