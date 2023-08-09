import UserCard from './UserCard';

export default function UsersGrid() {
  return (
    <div className="grid grid-cols-5 grid-flow-row gap-4">
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  );
}
