import { useState } from "react";
import car from "./14.jpg";
import me from "./8.jpg";
import verified from "./ver.svg";

let unliked =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEx0lEQVR4nO2aS2yVRRTHL6FCpaBtAWFlVFjY8NCdC+MGwkOb8nAHYqIJpk2UFqkuwQc7MJEYSYxLY2KMu/ogQgLWV0QRdaECxYT4wCitmhgLFeRnTvlPnNze+30z3zfXVsNJvqTpnDnnzMx5/OfMrVSu0v+UgHZgA7AXeBM4AfwCjOmzv7/WmPGsB9oqU4GAZuB+4CDwF/F0CXgb2ALMnIwFXAv0A2c9oy4Ah4GdOpkO23HgGn1t+p+N7QKOaI6jH4Adtjn/1iI6gW88Az4BtgLXF5DVCjwEHPPknQbubrQbveAp/BRYnVD+WuAzT/7+5KcDLJThRn8A24DpSZVc0TMd6ANGvdNekEr4zTpulHWWJhGcrXM5cFI6h8yGsgLnewI/BuYlszZfdxvwvnRbTC4sExPOnT4EWpJbm29DC/CR52bxMeMFtrlTe0MsDbNjrucV+4ukWBfYDY+JwJgZlU1rY4qdqxPbKlOEgO1e8Oe7GPCYVyeSp9iiBDQBn8u27XnMMwUVjFZVphgB98i2s5mnIvA2niEiU/Ru7dbvwIgyTS8wqyoD9WlsRLxWyZ8OTevANC+Tbs5iNBRrtDVQ8DrgV+rTl8AiYDHwVQafQfzOQJ3dmnMg6z5xSYg0FwACa4CLEvoKcKd2vVXQ3iHjM/qcS2wRT4vmvKoxk7UqsFCOiX+inYLXRocDhM0GfhJ/f8bGvOft+rv1LlJegvkxpPAC74h/Xa3BZzS4MyIVHsjhm6OCat+cHF67YBn1Buh/Urx7ag3aFdRofcSO5Po1cId9AXxdER6xUbyv1xo8pcGOAEHnxJsMRCr7Gf0cwLtknBNO1Boc1uDcAEEWbKS8Z6uGGY0F8M4b54RzWcbNCBD0rXiXlbC9WubtknkmYtEXyi7kZfHuK2F7tcznJfOlsguxaksIZAdWitcWv6iE/U7eLd5G3lUqnmKCXfzW+jE6VAZcqlU0GJLOQ4P9jdD0K/7FHjzZHTKnjpxnJcOSzU2Bc1z6HcgqiLsiL2DWYbxs/anINVTUkENwY2XEvMyC6CDKkUhjHtU8W9CDEfMMCaNN6I7UOai5XfXAmAONrZGCH/eMesrgds4FaZ/H3xOpq90Djdfl4Z0ibvKwh4Zf8+8iVUZYcjD6E3iggJ4ezX8ri+k+MR2LVaD5q70EYBegG72xZbpvI54VBeRPA45Lxqa8Xpa76q4puJhbvVQ+oneQR4Dz+t8XlvEKyu6UjO9y4ZGXSY4XrQ9yoQEm0ou1XC5QZpM2IQjqu1Nxvd6+Iko9N+hXAvkNuLeorKoNPhkMVu19QpOsKbY8aFJ23HQkAJTnZVPcU4beJ9wO5EL7RhFXcJVLEs8VEdCsxjFq4UxGE3s2cFQ2HC18/9Fu2Ouse1aYn9za7ITxgXSfLv3go4eeIc/NbktmbXZMDEnnqVAwGSJ4gedmo+qiNCURPjHF7vAC29zphtRKmr0EgFqkSV5flaqt2Lk6MR7YDX171+urO3YHRbqL/IpBcdDjwQ7nSslei0NOx9zre/6hMcHrJ3TxWaLXphn67O+lVhjFM+hdbx3s6J2sX0BYE2CzXVFVwWPpohqDmyZlAbXIGsrqFu6xDqDapMPej2qG1ZEfEE9X3fvEVar89+lvRQJABRrU4L4AAAAASUVORK5CYII=";
let liked =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADtElEQVR4nM2aTUgbQRTH/9t8XDSxoCdREFSwlVJM6lUPordiexQtFSq0aUjBU22bQ6GF5NQPSNuDd0lbA1IbPIkQrzWJCBI/DoIKtWIsalso0lcmnUjYJnF3djbZB38Im3lv57fszLw3s4A8swHoBuAD8BpAHMAigCTXIr/2irfp5j6WMCeAGwBiAL4DIJ1iPtMABnmsittFAEEA3wQ6X0p7AJ4AqKsEgB3AuODT16pDAA/MfO2uAEibCKBWCkCnbIg7AH5WEIK4fgAYlQGgAHhaBQBSKcz7IgzxzgIQxPVWFCZkgc6TSs9FxgRZVKNaITr5ICOL6heAq1rWiUpOsaJKnrfOjFugk6RRgXJph5krthkZQF0xkKAFOkc69VgN4ZScAFZKe+qs+aZoMJvNRgMDAxQKhWhycpLC4TD19PSUbN/b25trw9oyn/7+/lwMAzCDhSDTIkG8Xi+trKxQMZufn6fm5uaztuz3wsJC0bbLy8vU1dUlCvIhD2ETGeQM4ujoiMrZ9vY2tba2UltbG+3s7JRty2J5PB4RkGx+Ku7W6+xwOGh9fZ202MbGBm1ubmpqm8lkyG63i8BcA6+fdTkODw+TWTY0NCQCcg98o0CXYzQaNQ1kampKBOQlA/ms1zGdTpsGkkqlREA+gW/T6HJk77JZlslkREASEEkS5+bmTAOJx+MiIGkhkEAgYBqIz+cTBtH9arndbspms9Ih9vf3qba2VvjV0j3Ymfx+v3SQsbExEYizwa57+mVSFIVisZg0CBZLURRRkBcM5L6gM7lcLlpdXTUMwXKtmpoaUQimu+DLu3AQLXlUOWPpS1NTkxEIAuDNJ42HRgK1t7fT7u6uboitrS1qaWkxCnFYWL9/NBgsl+Wura1phlhaWqLGxkajEAQgWliPsOLEcND6+npKJBLnQszMzBgdE1Sg6+pSd09GYKfTSZFIpCjA6ekpBYNBI7MTqfQVgENdt7NCXtYNaGRkhI6Pj88g2Bjq6+uTFh//NFFsF6XO6KBXq6OjI1cKz87OUkNDg2yIAwBulDB2UiT1hk6n87eiKH9kxwXgLwWRn4qTJtxUtr5oOZqz+ib2CYDL0Gi3LdBhKqFb0GnPLNBpUokdAwrZGwt0nrgiMGgPLXIYKsVGqzQBnIiMCS2zWbLCU+wlmGQ2flKUNRHggC92FflyiKUGj2QlmgUJ4AQAF6pgDp5Gv+dPUuTpR3mM/7LYatkFXnKy+pltBrDdGbZNk//wjP1m19h/rI2H+0ixvwCRhtwSdD0vAAAAAElFTkSuQmCC";
let share =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABeklEQVR4nO3WsUtWURjH8aspgaEiQihIkDjaIvgn6BL9B0G6uIo45FKzJBE26qCDg5uDCIGNRUuB4GRToEWEROBQUa+fuLznhRe59733lXMdwu94z8PzPfeec373JMk1/xPox80YjW5gCPcwhYdYwDI2sYf3OMZvdT6iI6tZF0YwifuYwRJeYAuvcYivqGmfD1nSdManqmU6S/y9YumrvDX7UqH0b7oX8sRzEQS/cp6vt9qlHdi/5Nvs4hl+ZoyfYbjoiNwNhWX4gVXcwSP8yal72lLaAIsFwiPMoyfUP8Z5Tu1n3ErKgE68vdCgFpbhQSMAwtKsFExytpS0AUbxLgTFS4xdGO8OgdKKgzTdkligJ8RhEVMxpQN4U0K6F1M6HD5fmeM1Hks6iE/KsRZF2vQDKUOaAUNJLDDR4qw28ySatEGatwXSk9Jh0Q7oC7eJPGbaatgO4VaSRbrbO5MqwXalYZEHbuNbk3QnuSrUb5YbeI7eKxNfk1ySfxv3R9dSYeqCAAAAAElFTkSuQmCC";
export default function Post({ showComments, setShowComments, setShowStory }) {
  const [name, setName] = useState("Abhinab");
  const [song, setSong] = useState("Orignal audio • abhinab");
  const [isLiked, setIsLiked] = useState(false);

  const handleToggleComments = () => {
    setTimeout(() => {
      setShowComments((prev) => !prev);
    }, 600);
  };

  const handleToggleStory = () => {
    setTimeout(() => {
      setShowStory((prev) => !prev);
    }, 600);
  };

  return (
    <>
      <div
        className="w-[26vw] h-[65vh] bg-white rounded-3xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.005] flex flex-col "
        id="post-container"
      >
        <div
          className="flex flex-row items-center gap-1 h-[8vh] bg-gray-900 rounded-t-3xl  "
          id="top-shit"
        >
          <img
            src={car}
            className="mx-[1vh] ml-[2vh] h-[6vh] w-[6vh] rounded-full border-red-500 border-4"
            onClick={handleToggleStory}
          ></img>
          <span className="text-[2vh] font-semibold text-white flex">
            {name}{" "}
            <img
              src={verified}
              alt=""
              className=" h-[2vh] w-[2vh] mt-[.59vh] mx-[2px]"
            />{" "}
            | {song}
          </span>
        </div>
        <div className="" id="post-image">
          <img src={me} alt="me" className="h-[51vh] w-full" />
        </div>
        <div
          className="bg-gray-900 rounded-b-3xl h-[6.5vh] flex justify-evenly"
          id="footer"
        >
          <img
            src={isLiked ? liked : unliked}
            onClick={() => setIsLiked(!isLiked)}
            className={`rounded-full w-[5vh] h-[5vh] my-1 transition-colors duration-500 hover:scale-105 active:scale-95  ${
              isLiked ? "bg-gray-600" : "bg-black"
            }`}
          />
          <img
            src={share}
            alt="share"
            className=" w-[4.8vh] h-[4.8vh] my-2 hover:scale-105 active:scale-95 duration-300 transition-all "
          />
          <img
            id="comments"
            onClick={handleToggleComments}
            className=" w-[4.8vh] h-[4.8vh] my-1 hover:scale-105 active:scale-95 duration-300 transition-all "
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADlklEQVR4nO2a/YtOaRjH77XDYrzM2qRVyNuOQVaRrQ0p5Q9A3tmf1KLNajUYIvvbJtJq/SSZJETeInmNvESJtYsd+0KrMI3JL2tnjG19dHm+J8c453me8Zwzcz8133pq6rrPdX3vc+77uq/7e41z7WhHO1oFQH9gJrABOAjcBP4C6vWzv38GDmjMDKCf8wHAEOB74Bbx+Ee/OPwCrAcGt8UEJgDHgf9DhOxt/wjMBcYCvSKe6yXbPGCLvloA83UM+LI1JjBYwQLcA1YBAwvwOQioAu6H/B4pxGe2YB8A3wL/KtBd7YcOCcboAMwGfleMZ8A3LsEA3YB9ct6oL1CSWIB343UEVgPPFXMPUFqoU1vTV+TQ3tTIxBjnjj0K+EOxLwNl7+uoO3Bdjs4BPRNnm5tDGXBeHK7Z6mipgw+VlQwngS6psc3NpStwRlyOGreWPLxGD1p67JEq0/z49AR+FaeV+T70OfBCh9hQ5wmAcmXNprz2KnBaM1/sPAOwVNxO5Bo4SQNvp5liC0zNv4njxGwDraAzzHWeAlggjnuzpTrbG3VAJ+cpgI9UTTdFJiKV1YbtznMAO8R1epRxs4yznOcA5ojrpihjcOhUOM8BjBDXU1FGq2jxeX8EADqLa02UsRZocEUCMpX44yjDYyudXZGATJn/KMpgh6ChqyvypXVGxnJX5Jv9BxnnO89BRuCITb9TZdzmPAdQLa7TooyluvA/tTLA+b0/6rXZu8cN2lUEReNX4rg726AxwEsdjr6W8TWayPhcgw9p4FLnGYBl4nY8X+XP9koDMMx5AqBCnGxvjMj3oSWauYnTH6fOMjefstCBXdlSibQ6pGm12WlPJpsaB8PhFsu0VgWHTntT+j5JjW32L3FBHK6+t3RqwpxEsUAyHZs42/jYo4E/FftiwUqnUt5Pcmh3+hWJsY1fCWtDIvaugkXsZgFM8jfUJeb0bf8lVuepRYcEwq/TavK8XqsptO9Mon0g/y/VgxyQZJyoinNrjL1K7bSFwDigT/OaDegt2wIt1yClBq23I8AXqUwgRCJouU2JWBKBAhOFRh2wcbgBrEul1dYcwKfAf8DfYVkf+Aw4K0K1asdVAjuBS8AdXaGfaO1bv2W/7j7TgL6uNcGbN74otEQ2Su1Deqw35UwkgOEibMvjOxWVwQQMu2PvBb6ATOfKDqMoWEtssisGkOlH2I3xof5DwWqd5cWgRrbDtTFeAbJk+fCqakyjAAAAAElFTkSuQmCC"
          />
        </div>
      </div>
    </>
  );
}
