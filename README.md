# Automated Google Form Submission Script

This project automates the submission of a Google Form for logging attendance at 8 AM from Monday to Friday, excluding public holidays. The script is designed to run independently on Google's servers, ensuring consistent operation regardless of your computer's / user's  status.

## Table of Contents

## Overview

This project leverages Google Apps Script to automate the submission of a Google Form. It includes features to handle weekdays, exclude weekends and public holidays, and ensure the script runs daily at a specified time (8 AM).

## Features

- **Automated Form Submission**: Automatically submits a Google Form daily at 8 AM.
- **Weekday Scheduling**: Only runs on weekdays (Monday to Friday).
- **Public Holiday Exclusion**: Skips submission on specified public holidays.
- **Independent Operation**: Runs on Google’s servers, independent of your local machine.

## Setup

### Prerequisites

- A Google account
- Access to Google Sheets and Google Forms
- Basic understanding of Google Apps Script

### Installation

1. **Create a Google Form**
   - Create a Google Form that you want to automate.
   - Note the form fields' entry IDs by inspecting the form elements.

2. **Create a Google Sheet**
   - Go to [Google Sheets](https://sheets.google.com) and create a new sheet.

3. **Open Apps Script Editor**
   - In your Google Sheet, go to `Extensions > Apps Script`.

### Configuration

1. **Copy the Script.js**
   - Paste the following script into the Apps Script editor:


## Save the Script

Save the script by clicking on the floppy disk icon or pressing Ctrl + S.
Set Up the Trigger

## Go to the clock icon on the left sidebar (Triggers).
- Click on + Add Trigger.
- Select the submitAttendance function.
- Set the event type to Time-driven.
- Choose the frequency as Day timer.
- Set the time to 8 AM.
- Click Save.

## Usage
- The script will automatically run at 8 AM from Monday to Friday, excluding public holidays.
- You can manually run the submitAttendance function from the Apps Script editor to test the functionality.
- Monitor logs in the Apps Script editor (View > Logs) for any errors or confirmation of successful submissions.

## Contributing
Contributions are welcome! If you have any suggestions or improvements, feel free to submit a pull request.

## THANK YOU
