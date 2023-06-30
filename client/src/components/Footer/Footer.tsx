import css from './Footer.module.css';

const Footer = () => {
  return (
    <div className={css.main_div}>
      <div className={css.icons_block}>
        <div className={css.insta}>
          <a
            href="https://www.instagram.com/greatchange.church/"
            target='_BLANK'
            rel="noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" width="35" height="35" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640"><path d="M184.715 2.752h270.582C556.908 2.752 640 84.816 640 185.069v269.85c0 100.277-83.092 182.317-184.703 182.317H184.715C83.104 637.236 0 555.196 0 454.919v-269.85C0 84.816 83.103 2.752 184.715 2.752zm133.561 145.939c98.741 0 178.868 80.127 178.868 178.868 0 98.753-80.127 178.868-178.868 178.868-98.765 0-178.88-80.115-178.88-178.868 0-98.741 80.115-178.868 178.88-178.868zm0 60.414c65.387 0 118.454 53.056 118.454 118.454s-53.068 118.466-118.454 118.466c-65.41 0-118.466-53.067-118.466-118.466 0-65.398 53.056-118.454 118.466-118.454zM491.321 123.9c16.04 0 29.044 13.004 29.044 29.032 0 16.04-13.004 29.044-29.044 29.044-16.028 0-29.032-13.004-29.032-29.044 0-16.028 13.004-29.032 29.032-29.032zM206.825 54.58H433.21c85.005 0 154.526 69.178 154.526 153.712V435.81c0 84.532-69.52 153.699-154.526 153.699H206.825c-85.005 0-154.537-69.167-154.537-153.7V208.29c0-84.532 69.532-153.71 154.537-153.71z"/></svg>
          </a>
        </div>
        <div className={css.facebook}>
          <a
            href="https://www.facebook.com/greatchange.church"
            target="_blank"
            rel="noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" width="35" height="35" viewBox="0 0 3333 3333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M1667 0c460 0 877 187 1179 488 302 302 488 718 488 1179 0 460-187 877-488 1179-302 302-718 488-1179 488-460 0-877-187-1179-488C186 2544 0 2128 0 1667c0-460 187-877 488-1179C790 186 1206 0 1667 0zm181 1137h301V776h-301c-232 0-421 189-421 421v181h-241v361h241v963h361v-963h301l60-361h-361v-181c0-33 28-60 60-60zm913-563c-280-280-666-453-1093-453S854 294 575 574c-280 280-453 666-453 1093s173 814 453 1093c280 280 666 453 1093 453s814-173 1093-453c280-280 453-666 453-1093s-173-814-453-1093z" fill-rule="nonzero"/></svg>
          </a>
        </div>
        <div className={css.youtube}>
          <a
            href="https://www.youtube.com/@greatchange.church"
            target="_blank"
            rel="noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" width="35" height="35" viewBox="0 0 3333 3333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm913 1294s-18-129-74-185c-71-74-151-75-187-79-261-19-652-19-652-19h-1s-392 0-652 19c-36 4-116 5-187 79-56 56-74 185-74 185s-19 151-19 302v141c0 151 19 302 19 302s18 129 74 185c71 74 164 72 206 80 149 14 634 19 634 19s392-1 653-19c36-4 116-5 187-79 56-56 74-185 74-185s19-151 19-302v-141c0-151-19-302-19-302zm-1107 615v-524l504 263-504 261z"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
