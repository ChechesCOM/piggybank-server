app.route('/piggy/id/:rowId')
        .get(piggy.getItemById)
        .put(piggy.updateItem)
        .delete(piggy.deleteItem);