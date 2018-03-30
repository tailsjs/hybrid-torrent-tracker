import RequestContext from './context';

import {
	trackerActions,
	announceEvents,

	DEFAULT_ANNOUNCE_PEERS,
	MAX_ANNOUNCE_PEERS,

	IPV6_REGEX
} from '../../../utils/constants';

/**
 * Request announce
 *
 * @see https://wiki.theory.org/index.php/BitTorrentSpecification#Tracker_Request_Parameters
 */
export default class AnnounceRequestContext extends RequestContext {
	/**
	 * Returns the name of the current action
	 *
	 * @return {string}
	 */
	get action() {
		return trackerActions.ANNOUNCE;
	}

	/**
	 * Returns 20-byte SHA1 hash of the value of the info key from the metainfo file
	 *
	 * @return {string}
	 */
	get infoHash() {
		return this.payload.info_hash;
	}

	/**
	 * Returns 20-byte string used as a unique ID for the client, generated by the client at startup
	 *
	 * @return {string}
	 */
	get peerId() {
		return this.payload.peer_id;
	}

	/**
	 * Returns the port number that the client is listening on
	 *
	 * @return {number}
	 */
	get port() {
		return this.payload.port || this.connection.getPort();
	}

	/**
	 * Returns the total amount uploaded (since the client sent the 'started' event to the tracker)
	 *
	 * @return {number}
	 */
	get uploaded() {
		return this.payload.uploaded;
	}

	/**
	 * Returns the total amount downloaded (since the client sent the 'started' event to the tracker)
	 *
	 * @return {number}
	 */
	get downloaded() {
		return this.payload.downloaded;
	}

	/**
	 * Returns the number of bytes this client still has to download
	 *
	 * @return {number}
	 */
	get left() {
		return this.payload.left;
	}

	/**
	 * Returns the indicates that the client accepts a compact response
	 *
	 * @return {number}
	 */
	get compact() {
		return this.payload.compact || 0;
	}

	/**
	 * Checks that need a compact answer
	 *
	 * @return {boolean}
	 */
	get isCompact() {
		return this.compact === 1;
	}

	/**
	 * Returns that the tracker can omit peer id field in peers dictionary
	 *
	 * @return {number}
	 */
	get noPeerId() {
		return !this.isCompact
			? this.payload.no_peer_id
			: 0;
	}

	/**
	 * Returns be one of started, completed, stopped or update (if empty)
	 *  started: The first request to the tracker must include the event key with this value
	 *  stopped: Must be sent to the tracker if the client is shutting down gracefully
	 *  completed: Must be sent to the tracker when the download completes
	 *  update: This request is one performed at regular intervals.
	 *
	 * @return {string}
	 */
	get event() {
		return this.payload.event || announceEvents.UPDATE;
	}

	/**
	 * Returns the true IP address of the client machine,
	 * in dotted quad format or rfc 3513 defined hexed IPv6 address.
	 *
	 * @return {string}
	 */
	get ip() {
		return this.payload.ip || this.connection.getIp();
	}

	/**
	 * Returns the number of peers that the client would like to receive from the tracker
	 *
	 * @return {number}
	 */
	get numwant() {
		return Math.min((this.payload.numwant || DEFAULT_ANNOUNCE_PEERS), MAX_ANNOUNCE_PEERS);
	}

	/**
	 * Returns the an additional identification that is not shared with any other peers
	 *
	 * @return {?string|number}
	 */
	get key() {
		return this.payload.key || null;
	}

	/**
	 * Returns the tracker id, if a previous announce contained
	 *
	 * @return {?string|number}
	 */
	get trackerId() {
		return this.payload.trackerid || null;
	}

	/**
	 * Returns the addres like ip:port
	 *
	 * @return {string}
	 */
	get addres() {
		const { ip, port } = this;

		return IPV6_REGEX.test(ip)
			? `[${ip}]:${port}`
			: `${ip}:${port}`;
	}
}
