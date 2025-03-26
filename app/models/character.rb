class Character < ApplicationRecord
  has_one_attached :image

  scope :publicly_visible, -> { where(public: true) }

end
