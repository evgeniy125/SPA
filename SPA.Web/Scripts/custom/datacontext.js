﻿define('datacontext',
    ['jquery', 'underscore', 'ko', 'model', 'model.mapper', 'dataservice', 'config', 'utils'],
    function ($, _, ko, model, modelmapper, dataservice, config, utils) {
        var
            itemsToArray = function (items, observableArray, filter, sortFunction) {
                // Maps the memo to an observableArray, 
                // then returns the observableArray
                if (!observableArray) return;

                // Create an array from the memo object
                var underlyingArray = utils.mapMemoToArray(items);

                if (filter) {
                    underlyingArray = _.filter(underlyingArray, function (o) {
                        var match = filter.predicate(filter, o);
                        return match;
                    });
                }
                if (sortFunction) {
                    underlyingArray.sort(sortFunction);
                }
                observableArray(underlyingArray);
            },
        mapToContext = function (dtoList, items, results, mapper, filter, sortFunction) {
            // Loop through the raw dto list and populate a dictionary of the items
            items = _.reduce(dtoList, function (memo, dto) {
                var id = mapper.getDtoId(dto);
                var existingItem = items[id];
                memo[id] = mapper.fromDto(dto, existingItem);
                return memo;
            }, {});
            itemsToArray(items, results, filter, sortFunction);
            //logger.success('received with ' + dtoList.length + ' elements');
            return items; // must return these
        },
        EntitySet = function (getFunction, mapper, nullo, updateFunction) {
            var items = {},
            mapDtoToContext = function (dto) {
                var id = mapper.getDtoId(dto);
                var existingItem = items[id];
                items[id] = mapper.fromDto(dto, existingItem);
                return items[id];
            },
            add = function (newObj) {
                items[newObj.id()] = newObj;
            },
            removeById = function (id) {
                delete items[id];
            },
            getLocalById = function (id) {
                return !!id && !!items ? items[id] : nullo;
            },
            getAllLocal = function () {
                return utils.mapMemoToArray(items);
            },
            getData = function (options) {
                return $.Deferred(function (def) {
                    var results = options && options.results,
                        sortFunction = options && options.sortFunction,
                        filter = options && options.filter,
                        forceRefresh = options && options.forceRefresh,
                        param = options && options.param,
                        getFunctionOverride = options && options.getFunctionOverride;

                    getFunction = getFunctionOverride || getFunction;

                    if (forceRefresh || !items || !utils.hasProperties(items)) {
                        getFunction({
                            success: function (dtoList) {
                                items = mapToContext(dtoList, items, results, mapper, filter, sortFunction);
                                def.resolve(results);
                            },
                            error: function (response) {
                                ////////////////
                                def.reject();
                            }
                        }, param);
                    } else {
                        itemsToArray(items, results, filter, sortFunction);
                        def.resolve(results);
                    }
                }).promise();
            };

            return {
                mapDtoToContext: mapDtoToContext,
                add: add,
                getAllLocal: getAllLocal,
                getLocalById: getLocalById,
                getData: getData,
                removeById: removeById,
                updateData: updateData
            };
        },

        //Repositories
        products = new EntitySet(dataservice.product.getProducts, modelmapper.product, model.Product.Nullo),
        categories = new EntitySet(dataservice.category.getCategories, modelmapper.category, model.Category.Nullo);

        var datacontext = {
            products: products,
            categories: categories
        };

        model.setDataContext(datacontext);

        return datacontext;

    });