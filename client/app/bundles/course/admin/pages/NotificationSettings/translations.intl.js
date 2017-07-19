import { defineMessages } from 'react-intl';

const translations = defineMessages({
  setting: {
    id: 'course.admin.NotificationSettings.setting',
    defaultMessage: 'Setting',
  },
  description: {
    id: 'course.admin.NotificationSettings.description',
    defaultMessage: 'Description',
  },
  enabled: {
    id: 'course.admin.NotificationSettings.enabled',
    defaultMessage: 'Enabled?',
  },
  emailSettings: {
    id: 'course.admin.NotificationSettings.emailSettings',
    defaultMessage: 'Email Settings',
  },
  updateSuccess: {
    id: 'course.admin.NotificationSettings.updateSuccess',
    defaultMessage: 'Setting for "{setting}" updated.',
  },
  updateFailure: {
    id: 'course.admin.NotificationSettings.updateFailure',
    defaultMessage: 'Failed to update setting "{setting}".',
  },
  noEmailSettings: {
    id: 'course.admin.NotificationSettings.noEmailSettings',
    defaultMessage: 'None of the enabled components have email settings.',
  },
});

export const settingDescriptions = defineMessages({
  new_announcement: {
    id: 'course.admin.NotificationSettings.settingDescriptions.new_announcement',
    defaultMessage: 'Notify all users whenever a new announcement is made.',
  },
  survey_opening: {
    id: 'course.admin.NotificationSettings.settingDescriptions.survey_opening',
    defaultMessage: 'Notify students when a new survey is available.',
  },
  survey_closing: {
    id: 'course.admin.NotificationSettings.settingDescriptions.survey_closing',
    defaultMessage: 'Notify students when a survey is about to expire.',
  },
  assessment_opening: {
    id: 'course.admin.NotificationSettings.settingDescriptions.assessment_opening',
    defaultMessage: 'Notify students when a new assessment is available.',
  },
  assessment_closing: {
    id: 'course.admin.NotificationSettings.settingDescriptions.assessment_closing',
    defaultMessage: 'Notify students when an assessment is about to be due.',
  },
  new_submission: {
    id: 'course.admin.NotificationSettings.settingDescriptions.new_submission',
    defaultMessage: "Notify student's group managers when the student makes a submission. Select whether to\
      send this notification for phantom students via the 'New Phantom Submission' setting.",
  },
  new_phantom_submission: {
    id: 'course.admin.NotificationSettings.settingDescriptions.new_phantom_submission',
    defaultMessage: "Sends 'New Submission' email for phantom students also. If 'New Submission' email\
      notification is disabled, no emails will be sent even though this setting is enabled.",
  },
  grades_released: {
    id: 'course.admin.NotificationSettings.settingDescriptions.grades_released',
    defaultMessage: 'Notify a student when grades for a submission have been released.',
  },
});

export const settingTitles = defineMessages({
  new_announcement: {
    id: 'course.admin.NotificationSettings.settingTitles.new_announcement',
    defaultMessage: 'New Announcement',
  },
  survey_opening: {
    id: 'course.admin.NotificationSettings.settingTitles.survey_opening',
    defaultMessage: 'Survey Opening',
  },
  survey_closing: {
    id: 'course.admin.NotificationSettings.settingTitles.survey_closing',
    defaultMessage: 'Survey Closing',
  },
  assessment_opening: {
    id: 'course.admin.NotificationSettings.settingTitles.assessment_opening',
    defaultMessage: 'Assessment Opening',
  },
  assessment_closing: {
    id: 'course.admin.NotificationSettings.settingTitles.assessment_closing',
    defaultMessage: 'Assessment Closing',
  },
  new_submission: {
    id: 'course.admin.NotificationSettings.settingTitles.new_submission',
    defaultMessage: 'New Submission',
  },
  new_phantom_submission: {
    id: 'course.admin.NotificationSettings.settingTitles.new_phantom_submission',
    defaultMessage: 'New Phantom Submission',
  },
  grades_released: {
    id: 'course.admin.NotificationSettings.settingTitles.grades_released',
    defaultMessage: 'Grades Released',
  },
});

export default translations;
