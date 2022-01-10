export function bouncingBall(h: number, bounce: number, window: number): number {
    let counter: number = 0;
    try {
        validateParams(h, bounce, window);
    } catch {
        return -1;
    }
    do {
       counter+=1; // fall
       h = h * bounce;
       if (h > window) {counter += 1} // bounce
    } while (h > window);
    return counter;
}

function validateParams(h: number, bounce: number, window: number): void {
    if (h <= 0) {
        throw new Error('height should be greater than 0'); 
    } else if (bounce <=0 || bounce >= 1) {
        throw new Error('bounce should be between 0 and 1');
    } else if (window >= h) {
        throw new Error('window should be below drop height');
    }
}

// Comparing to other solutions...
// could have made the validation more concise and in-line e.g.
// if (h <= 0 || bounce <=0 || bounce >=1 || window >= h) return -1
