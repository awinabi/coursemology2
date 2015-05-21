FactoryGirl.define do
  factory :course_user do
    user
    creator
    updater
    course
    phantom false
    role :student
    name 'default'

    factory :course_student, parent: :course_user do
      sequence(:name) { |n| "student #{n}" }
    end

    factory :course_teaching_assistant, parent: :course_user do
      role :teaching_assistant
      sequence(:name) { |n| "teaching assistant #{n}" }
    end

    factory :course_manager, parent: :course_user do
      role :manager
      sequence(:name) { |n| "manager #{n}" }
    end

    factory :course_owner, parent: :course_user do
      role :owner
      sequence(:name) { |n| "owner #{n}" }
    end
  end
end
