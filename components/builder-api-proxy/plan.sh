source "../../support/ci/builder-base-plan.sh"
pkg_origin=core
pkg_name=builder-api-proxy
pkg_description="HTTP Proxy service fronting the Habitat Builder API service"
pkg_maintainer="The Habitat Maintainers <humans@habitat.sh"
pkg_license=("Apache-2.0")
pkg_deps=(core/nginx core/curl)
pkg_build_deps=(core/git)
pkg_svc_run="nginx -c ${pkg_svc_config_path}/nginx.conf"
pkg_svc_user="root"
pkg_svc_group="root"

do_begin() {
  return 0
}

do_build() {
  return 0
}

do_download() {
  return 0
}

do_install() {
  return 0
}

do_prepare() {
  return 0
}

do_unpack() {
  return 0
}
