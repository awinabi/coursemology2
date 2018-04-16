import BaseCourseAPI from './Base';

export default class DuplicationAPI extends BaseCourseAPI {
  /**
  * Fetches a list of all objects in course
  *
  * @return {Promise}
  * success response: {
  *   currentHost: string,
  *   destinationCourses: Array.<courseShape>,
  *   sourceCourse: sourceCourseShape,
  *   assessmentComponent: Array.<categoryShape>,
  *   surveyComponent: Array.<surveyShape>,
  *   achievementsComponent: Array.<achievementShape>,
  *   materialsComponent: Array.<folderShape>,
  *   videosComponent: Array.<videoTabShape>,
  * }
  *
  * See course/duplication/propTypes.js for custom propTypes.
  */
  fetch() {
    return this.getClient().get(`${this._getUrlPrefix()}/new`);
  }

  /**
  * Duplicates selected items to the target course.
  *
  * @param {object} params in the form {
  *   items: { TAB: Array.<number>, ASSESSMENT: Array.<number>, ... },
  *   destination_course_id: number,
  * }
  * @return {Promise}
  * success response: { redirect_url: string }
  * error response: {}
  */
  duplicateItems(params) {
    return this.getClient().post(this._getUrlPrefix(), params);
  }

  /**
  * Duplicates course.
  *
  * @param {object} params in the form {
  *   duplication: { new_title: string, new_start_at: Date }
  * }
  * @return {Promise}
  * success response: { redirect_url: string }
  * error response: {}
  */
  duplicateCourse(params) {
    return this.getClient().post(`/courses/${this.getCourseId()}/duplication`, params);
  }

  _getUrlPrefix() {
    return `/courses/${this.getCourseId()}/object_duplication`;
  }
}
