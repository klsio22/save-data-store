function scrollToPercentage(
  element: HTMLElement,
  percentage: number,
  duration: number,
): void {
  const start = element.scrollTop;
  const target = (element.scrollHeight - element.clientHeight) * percentage;
  const startTime = performance.now();

  function scrollAnimation(currentTime: number): void {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const newPosition = start + (target - start) * progress;

    element.scrollTop = newPosition;

    if (progress < 1) {
      requestAnimationFrame(scrollAnimation);
    }
  }

  requestAnimationFrame(scrollAnimation);
}

function scrollUp(): void {
  window.scrollTo(0, 0);
}

const clickNext = (): boolean => {
  const nextButtonSelector =
    '#main > div > div:nth-child(3) > div > div > div > div.SEduGk > section > div > nav > a.shopee-icon-button.shopee-icon-button--right';

  const button = document.querySelector(nextButtonSelector);
  if (button && button instanceof HTMLButtonElement) {
    button.click();
    return true;
  }

  return false;
};

function sleep(tempo: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000 * tempo);
  });
}

function getItemInformation(element: HTMLElement): string[] {
  let output = '';
  const dfs = (el: HTMLElement): void => {
    const children = Array.from(el.children) as HTMLElement[];
    if (!children || children.length === 0) {
      return;
    }
    if (el.innerText) output += el.innerText;

    for (const node of children) {
      dfs(node);
    }
  };

  const processText = (text: string): string[] => {
    const lines = text.split('\n');
    let index = lines.findIndex((line) => line.includes('$'));
    const result = index !== -1 ? lines.slice(0, index + 1) : [];
    index = lines.findIndex((line) => line.includes('vendido'));
    if (index !== -1) {
      result.push(lines[index]);
    }

    return result;
  };

  const cidade = element.querySelector('div[aria-label="enviado de"]');

  dfs(element);

  const array = processText(output);
  if (array.length) {
    let lista = array;
    if (array[0] !== 'Indicado') {
      lista = ['Nao Indicado', ...array];
    }

    if (cidade && cidade instanceof HTMLElement && cidade.innerText) {
      lista.push(cidade.innerText);
    }
    return lista;
  }

  return array;
}

async function getItems(): Promise<string[][] | null> {
  const scroll = async (): Promise<void> => {
    const middleOfPageX = document.body.scrollWidth / 3;
    window.scrollTo(middleOfPageX, 0);
    console.info('Scrolling.. ');
    const duration = 500;
    for (let i = 1; i <= 10; i++) {
      scrollToPercentage(document.documentElement, 0.1 * i, duration);
      await sleep(1);
    }

    window.scrollTo(0, document.body.scrollHeight);
    await sleep(1);
  };

  await scroll();
  const containerSel =
    '#main > div > div:nth-child(3) > div > div > div > div.SEduGk > section > ul';
  const container = document.querySelector(containerSel);

  let response: string[][] | null = null;
  if (container && container.children) {
    response = Array.from(container.children).map((item) =>
      getItemInformation(item as HTMLElement),
    );
  }

  return response;
}

function doSearch(text: string): void {
  function concatWords(text: string): string {
    console.info('Get concat Words()');
    return text.split(' ').join('%20');
  }

  text = concatWords(text);
  console.info(window.location.href);
  window.location.href = `https://shopee.com.br/search?keyword=${text}`;
}

async function runSearch(text: string): Promise<void> {
  console.info('Getting information.. ');
  text = 'carrinho brinquedo';
  doSearch(text);
  await sleep(3);
  let next;
  do {
    const res = await getItems();
    console.info(' res-> ', res);
    scrollUp();
    next = clickNext();
  } while (next);
}
