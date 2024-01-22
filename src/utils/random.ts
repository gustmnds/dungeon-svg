export class RND {
  public static next(max: number = 1, min: number = 0) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
