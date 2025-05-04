{
  //*Generic Interface
  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike: X;
  }

  interface EmilabWatch {
    name: string;
    brand: string;
    display: string;
  }
  const poorDeveloper: Developer<EmilabWatch> = {
    name: "tamim",
    computer: {
      brand: "lenovo",
      model: "ieadpad",
      releaseYear: 2021,
    },
    smartWatch: {
      name: "Emilab",
      brand: "kw66",
      display: "OLED",
    },
  };

  interface AppleWatch {
    name: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface YamahaBike {
    name: string;
    model: string;
    milage: number;
  }
  const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: "Rich dev",
    computer: {
      brand: "Hp",
      model: "pavilion",
      releaseYear: 2024,
    },
    smartWatch: {
      name: "Apple watch",
      model: "something",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      name: "Yamaha",
      model: "Gixer",
      milage: 50,
    },
  };

  //
}
