class SpeakerSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :presentations, embed: :ids, key: :presentations
end
