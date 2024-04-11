import ClassRoom from './0-classroom';
/**
 * Creates an array of {@link ClassRoom}s with diff sizes
 * Return {@link size} of each room
 */
export default function initializeRooms() {
  return [19, 20, 21].map((size) => new ClassRoom(size));
}
