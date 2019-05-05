resource "aws_s3_bucket" "s3_bucket" {
  bucket        = "${var.s3_bucket_name}"
  acl           = "${var.s3_bucket_acl}"
  region        = "${var.s3_bucket_region}"
  force_destroy = "${var.s3_bucket_force_destroy}"
  policy        = "${data.aws_iam_policy_document.default_assume_s3_policy.json}"

  cors_rule {
    allowed_headers = "${var.s3_bucket_cors_rule_allowed_headers}"
    allowed_methods = "${var.s3_bucket_cors_rule_allowed_methods}"
    allowed_origins = "${var.s3_bucket_cors_rule_allowed_origins}"
    expose_headers  = "${var.s3_bucket_cors_rule_expose_headers}"
    max_age_seconds = "${var.s3_bucket_cors_rule_max_age_seconds}"
  }

  versioning {
    enabled    = "${var.s3_bucket_versioning_enabled}"
    mfa_delete = "${var.s3_bucket_versioning_mfa_delete}"
  }

  website {
    index_document = "${var.s3_bucket_website_index_document}"
    error_document = "${var.s3_bucket_website_error_document}"
  }

  tags = "${merge(var.default_tags, var.custom_tags)}"
}
