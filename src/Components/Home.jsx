import React, { useState } from "react";
import Nft from "../Data/Nft.jpg";

const Home = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="pt-24 text-lg leading-8 flex flex-col items-center justify-center px-12 text-center gap-6">
          <p>
            Once upon a time, in a land far away, lived a group of cartoony and
            freaky apes. One little ape, however, was different from the rest.
            He dreamed of becoming a Crazzzy Monster, inspired by his love for
            horror movies and books. And thus, the idea for the Crazzzy
            Monsterzzz collection was born!
          </p>
          <p>
            But this collection isn't just any ordinary art collection. It's a
            journey through nostalgia, with each monster family representing a
            different horror movie and all the equipment relative to that
            monster. With 20 monster families and more than 300 traits, there's
            a Crazzzy Monster for every fan out there.
          </p>
          <p>
            As a member of the Crazzzy Monsters community, you'll have access to
            exclusive events, promotions, and giveaways. You'll also have the
            opportunity to trade and sell your monsters, connect with other
            collectors and enthusiasts around the world, and build a truly
            unique collection of Crazzzy Monsters.
          </p>{" "}
          <p>
            The founders of Crazzzy Monsters aim to create an eco-system that
            prioritizes community, sharing benefits, and transparency. The
            collection is built on the Cronos Chain, ensuring secure and
            transparent transactions. Each Crazzzy Monster comes with unique
            utilities and royalty programs, giving you access to exclusive perks
            and rewards.
          </p>
      </div>
    </div>
  );
};

export default Home;
