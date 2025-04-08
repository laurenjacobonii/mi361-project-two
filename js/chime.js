async function joinTelemedicine() {
    try {
      const response = await fetch('http://3.16.51.243:3001/create-meeting', {
        method: 'POST'
      });
      const { Meeting, Attendee } = await response.json();
  
      const configuration = new ChimeSDK.MeetingSessionConfiguration(Meeting, Attendee);
      const logger = new ChimeSDK.ConsoleLogger('ChimeLogs', ChimeSDK.LogLevel.INFO);
      const deviceController = new ChimeSDK.DefaultDeviceController();
      const meetingSession = new ChimeSDK.DefaultMeetingSession(configuration, logger, deviceController);
  
      await meetingSession.audioVideo.start();
      alert("You're now connected to the telemedicine call!");
    } catch (error) {
      console.error("Failed to join meeting:", error);
      alert("Failed to join meeting.");
    }
  }
  