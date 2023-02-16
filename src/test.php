<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <link rel="stylesheet" href="assets/css/vendor.min.css" />
  <link rel="stylesheet" href="assets/css/main.css?v=<?php echo time() ?>" />
  <title>MyDash</title>
</head>

<body>
  <div class="d-flex flex-row flex-column-fluid wrapper">
    <div class="main-loader">
      <div class="position-absolute top-50 start-50 translate-middle ">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>        
      </div>
    </div>
    <aside class="main-sidebar-primary d-flex justify-content-between flex-column">
      <?php 
        $listTop = [
          [
            'icon' => '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
              height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><rect fill="#ffffff" x="4" y="4" width="7" height="7" rx="1.5"></rect><path d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                  fill="#ffffff" opacity="0.3"></path></g></svg>',
            'url' => '/',
            'title' => 'dd',
            'tab-target' => 'pills-home',
            'tab-target-active' => true,
            'badage' => '0',
            'badage-bg' => 'bg-danger',
          ],
          [
            'icon' => '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
              height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><rect fill="#ffffff" x="4" y="4" width="7" height="7" rx="1.5"></rect><path d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                  fill="#ffffff" opacity="0.3"></path></g></svg>',
            'url' => '/',
            'title' => 'dd',
            'tab-target' => 'pills-contact',
            'tab-target-active' => false,
            'badage' => '0',
            'badage-bg' => 'bg-danger',
          ],
          [
            'icon' => '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
              height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><rect fill="#ffffff" x="4" y="4" width="7" height="7" rx="1.5"></rect><path d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                  fill="#ffffff" opacity="0.3"></path></g></svg>',
            'title' => 'dd',
            'url' => '/',
          ],
        ];
        $listBottom = [
          [
            'icon' => '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
              height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><rect fill="#ffffff" x="4" y="4" width="7" height="7" rx="1.5"></rect><path d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                  fill="#ffffff" opacity="0.3"></path></g></svg>',
            'url' => '/',
            'title' => 'dd',
            'badage' => '0',
            'badage-bg' => 'bg-danger',
          ],
          [
            'icon' => '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
              height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><rect fill="#ffffff" x="4" y="4" width="7" height="7" rx="1.5"></rect><path d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                  fill="#ffffff" opacity="0.3"></path></g></svg>',
            'title' => 'dd',
            'url' => '/',
          ],
        ];
      ?>
      <div class="list-menu-top flex-fill">
        <a href="/" class="d-flex justify-content-center my-5">
          <img src="http://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg" class="img-fluid" width="60">
        </a>
        <ul class=" list-unstyled my-3 align-items-center text-center" role="tablist">
        <?php foreach ($listTop as $k => $item): ?>
          <li class="mb-3">
            <span data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-boundary="window" data-bs-placement="right" title="<?= $item['title'] ?>">
              <?php $badage = (isset($item['badage']))?'<span class="position-absolute top-0 start-100 translate-middle badge '.$item['badage-bg'].' rounded-pill">'.$item['badage'].'</span>':''; ?>
              <?php if(isset($item['tab-target'])): ?>
                <button type="button" class="position-relative btn btn-icon btn-transparent-white-hover <?= $item['tab-target-active']?'active':'' ?>" id="<?= $item['tab-target'] ?>-tab" data-bs-toggle="pill" data-bs-target="#<?= $item['tab-target'] ?>" role="tab" aria-controls="<?= $item['tab-target'] ?>" aria-selected="<?= $item['tab-target-active']?'true':'false' ?>"><?= $item['icon'] ?> <?= $badage ?></button>
              <?php else: ?>
                <a href="<?= $item['url'] ?>" class="position-relative btn btn-icon btn-transparent-white-hover"><?= $item['icon'] ?> <?= $badage ?></a>
              <?php endif; ?>
            </span>
          </li>          
          <?php endforeach ?>
        </ul>
      </div>
      <div class="list-menu-bottom">

        <ul class="list-unstyled my-3 align-items-center text-center">
          <?php foreach ($listBottom as $k => $item): ?>
          <li class="mb-3">
            <a href="<?= $item['url'] ?>" class="position-relative btn btn-icon btn-transparent-white-hover" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-boundary="window" data-bs-placement="right" title="<?= $item['title'] ?>"><?= $item['icon'] ?> <?= (isset($item['badage']))?'<span class="position-absolute top-0 start-100 translate-middle badge '.$item['badage-bg'].' rounded-pill">'.$item['badage'].'</span>':''; ?></a>
          </li>          
          <?php endforeach ?>
        </ul>
      </div>
      <button type="button" class="btn btn-icon btn-sm btn-primary btn-toggle-sidebar-secondary" data-visible="true">
        <span class="svg-icon ">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="currentColor"/>
          </svg>
        </span>
      </button>
    </aside>
    <aside class="main-sidebar-secondary p-4" style="">
      <div class="flex-shrink-0">
        <a href="/" class="menu-link menu-link-primary align-items-center active"><span class="svg-icon menu-icon me-2"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><polygon points="0 0 24 0 24 24 0 24"></polygon><path d="M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z" fill="#000000" fill-rule="nonzero"></path><path d="M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z" fill="#000000" opacity="0.3"></path></g></svg></span><span class="menu-text">Dashhboard</span></a>
        <?php 
          function array_key_exists_recursive($key, $array) {
            if (array_key_exists($key, $array))
                return true;
            foreach ($array as $value) 
              if (is_array($value) && array_key_exists_recursive($key, $value)) return true;
            return false;
          }

          $list = [
              'Layout' => [
                [
                  'icon' => '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
                    height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <rect x="0" y="0" width="24" height="24"></rect>
                      <rect fill="#000" x="4" y="4" width="7" height="7" rx="1.5"></rect>
                      <path
                        d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                        fill="#000" opacity="0.3"></path>
                    </g>
                  </svg>',
                  'title' => 'Home',
                  'list' => [
                    [
                      'title' => 'Overview 1',
                      'url' => '/',
                      'active' => true
                    ],
                    [
                      'title' => 'Overview 2',
                      'url' => '/'
                    ],
                    [
                      'title' => 'Overview 3',
                      'url' => '/'
                    ]
                  ]
                ],
                [
                  'icon' => '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
                  height="24px" viewBox="0 0 24 24" version="1.1">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect x="0" y="0" width="24" height="24"></rect>
                    <rect fill="#000" x="4" y="4" width="7" height="7" rx="1.5"></rect>
                    <path
                      d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                      fill="#000" opacity="0.3"></path>
                  </g>
                  </svg>',
                  'title' => 'Home2',
                  'url' => '/',
                  'active' => true,
                ]
              ]
            ];
        ?>
        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <ul class="list-menu list-unstyled ps-0">
              <?php foreach ($list as $k => $items): ?>
                <li class="menu-section">
                  <h4 class="menu-text"><?= $k ?></h4>
                </li>
                <?php foreach ($items as $i => $item): ?>
                <li class="mb-1">
                  <?php if(isset($item['list'])): ?>
                  <?php $isActive = array_key_exists_recursive('active', $item['list']); ?>
                  <button class="btn w-100 menu-link menu-toggle align-items-center collapsed"
                    data-bs-toggle="collapse" data-bs-target="#menu<?= $k ?>-collapse<?= $i ?>" aria-expanded="<?= $isActive ? 'true' : 'false'; ?>">
                    <span class="svg-icon menu-icon me-2"><?= $item['icon'] ?></span>
                    <span class="menu-text"><?= $item['title'] ?></span>
                  </button>
                  <div class="collapse <?= $isActive ? 'show' : ''; ?>" id="menu<?= $k ?>-collapse<?= $i ?>" style="">
                    <ul class="menu-toggle-nav list-unstyled">
                      <?php foreach ($item['list'] as $l => $li): ?>
                        <li><a href="<?= $li['url'] ?>" class="<?= isset($li['active'])?'active':''; ?>"><?= $li['title'] ?></a></li>
                      <?php endforeach ?>
                    </ul>
                  </div>
                  <?php elseif(isset($item['url'])): ?>
                  <a href="<?= $li['url'] ?>" class="btn w-100 menu-link text-start <?= isset($item['active'])?'active':''; ?>"><span class="svg-icon menu-icon me-2"><?= $item['icon'] ?></span><span class="menu-text"><?= $item['title'] ?></span></a>
                  <?php endif; ?>
                </li>
                <?php endforeach ?>
              <?php endforeach ?>
            </ul>  
          </div>
          <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
          <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
        </div>

      </div>

    </aside>
    <div class="main-container">
      <div class="main-container-wrapper d-flex flex-column flex-fill-fluid p-3">

        <div class="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
          <div class="d-flex align-items-center flex-wrap mr-1">
            <div class="d-flex align-items-baseline flex-wrap mr-5">
              <h6 class="text-dark my-1 mr-5">Dashboard</h6>
            </div>
          </div>
          
          <div class="d-flex align-items-center flex-wrap">

          </div>
        </div>

        <div class="flex-fill">
        

        </div> 

        <footer class="main-footer text-center">
          <p class="mb-0">Copyright &copy; 2019 All rights reserved.</p>
        </footer> 

      </div>
    </div>
  </div>
  <script src="assets/js/vendor.min.js"></script>
  <script src="assets/js/main.js"></script>
  <script>
    console.log(nexDash.version());
  </script>
</body>
</html>