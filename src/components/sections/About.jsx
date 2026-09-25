import React from "react";
import Star from "../../assets/About/Star 1.svg";
import Person1 from "../../assets/About/Person1.svg";
import Person2 from "../../assets/About/Person2.svg";
import Person3 from "../../assets/About/Person3.svg";

const About = () => {
  return (
    <div className="bg-white px-36 py-15 w-full">
      <div className="heading flex justify-between items-center">
        <h1 className="text-5xl font-semibold">What People Say About <br /> AdCactus</h1>
        <p>Real businesses are turning their ideas into polished commercials <br /> faster, smarter, and more affordably with AdCactus.</p>
      </div>
      <div className="cards py-10 flex gap-5">
        <div className="card p-5 bg-white rounded-3xl shadow w-100 flex flex-col gap-5">
          <div className="stars flex">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
          </div>
          <h1 className="text-base">AdCactus made the entire commercial <br /> creation process incredibly simple. We went <br /> from our existing website to a polished ad <br /> without the usual production headaches.</h1>
          <div className="id flex gap-2 items-center">
            <img src={Person1} alt="" />
            <div className="data">
              <h1 className="font-bold">James Carter</h1>
              <p className="text-sm text-zinc-400">Marketing Director, Local Restaurant Group</p>
            </div>
          </div>
          <div className="foot border-t border-zinc-200 py-5">
            <h1 className="text-2xl font-semibold">60% Faster Production</h1>
            <h2>From weeks of production to a few days</h2>
          </div>
        </div>
        <div className="card p-5 bg-white rounded-3xl shadow w-100 flex flex-col gap-5">
          <div className="stars flex">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
          </div>
          <h1 className="text-base">AdCactus made the entire commercial <br /> creation process incredibly simple. We went <br /> from our existing website to a polished ad <br /> without the usual production headaches.</h1>
          <div className="id flex gap-2 items-center">
            <img src={Person1} alt="" />
            <div className="data">
              <h1 className="font-bold">James Carter</h1>
              <p className="text-sm text-zinc-400">Marketing Director, Local Restaurant Group</p>
            </div>
          </div>
          <div className="foot border-t border-zinc-200 py-5">
            <h1 className="text-2xl font-semibold">60% Faster Production</h1>
            <h2>From weeks of production to a few days</h2>
          </div>
        </div>
        <div className="card p-5 bg-white rounded-3xl shadow w-100 flex flex-col gap-5">
          <div className="stars flex">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
          </div>
          <h1 className="text-base">AdCactus made the entire commercial <br /> creation process incredibly simple. We went <br /> from our existing website to a polished ad <br /> without the usual production headaches.</h1>
          <div className="id flex gap-2 items-center">
            <img src={Person1} alt="" />
            <div className="data">
              <h1 className="font-bold">James Carter</h1>
              <p className="text-sm text-zinc-400">Marketing Director, Local Restaurant Group</p>
            </div>
          </div>
          <div className="foot border-t border-zinc-200 py-5">
            <h1 className="text-2xl font-semibold">60% Faster Production</h1>
            <h2>From weeks of production to a few days</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;