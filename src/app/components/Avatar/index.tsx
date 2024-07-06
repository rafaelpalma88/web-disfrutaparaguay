import Image from "next/image";

interface IAvatar {
  name: string;
}

export function Avatar({ name }: IAvatar) {
  return (
    <Image
      src="/user.jpg"
      alt={name}
      width={48}
      height={48}
      style={{
        borderRadius: 8,
        border: "2px solid gray",
        width: "calc(2rem + 16px)",
        height: "calc(2rem + 16px)",
      }}
    />
  );
}
