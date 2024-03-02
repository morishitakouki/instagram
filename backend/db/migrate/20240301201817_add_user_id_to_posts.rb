class AddUserIdToPosts < ActiveRecord::Migration[7.0]
  def change
    remove_foreign_key :posts, :users
    add_reference :posts, :user, null: false, foreign_key: true
  end
end