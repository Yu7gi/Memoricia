class Character < ApplicationRecord
  has_one_attached :standing_picture
  has_one_attached :expression_1
  has_one_attached :expression_2
  has_one_attached :expression_3
  has_one_attached :expression_4
  has_one_attached :background_image

  scope :publicly_visible, -> { where(public: true) }

end
