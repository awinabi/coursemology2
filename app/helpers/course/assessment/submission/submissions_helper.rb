# frozen_string_literal: true
module Course::Assessment::Submission::SubmissionsHelper
  include Course::Assessment::Submission::SubmissionsGuidedHelper

  # Finds the comment being created/edited, or constructs a new one in reply to the latest post.
  #
  # @param [Course::Discussion::Topic] topic The topic being replied to.
  # @return [Course::Discussion::Post]
  def new_comments_post(topic)
    new_post = topic.posts.find(&:new_record?)
    return new_post if new_post

    parent_collection = topic.posts.last ? topic.posts.last.children : topic.posts
    parent_collection.build
  end
end
