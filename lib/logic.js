/* eslint-disable require-jsdoc */
'use strict';


const namespace = 'one.taha.supplychain';

/**
 * Change owner transaction
 * @param {one.taha.supplychain.transfer_timber} tx - transfer_timber
 * @transaction
 */
async function transfer_timber(tx) {
    let timberRegistry = await getAssetRegistry(namespace + '.Timber');
    try {
        let timber = await timberRegistry.get(tx.timber_id);
        timber.owner = tx.new_owner;
        await timberRegistry.update(timber);
    } catch (error) {
        console.error(error);
    }
}

