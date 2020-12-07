// https://www.terraform.io/docs/providers/aws/r/data_aws_s3_bucket_object.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsS3BucketObjectConfig extends cdktf.TerraformMetaArguments {
  readonly bucket: string;
  readonly key: string;
  readonly range?: string;
  readonly tags?: { [key: string]: string };
  readonly versionId?: string;
}

// Resource

export class DataAwsS3BucketObject extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsS3BucketObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_bucket_object',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucket = config.bucket;
    this._key = config.key;
    this._range = config.range;
    this._tags = config.tags;
    this._versionId = config.versionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket: string;
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket
  }

  // cache_control - computed: true, optional: false, required: false
  public get cacheControl() {
    return this.getStringAttribute('cache_control');
  }

  // content_disposition - computed: true, optional: false, required: false
  public get contentDisposition() {
    return this.getStringAttribute('content_disposition');
  }

  // content_encoding - computed: true, optional: false, required: false
  public get contentEncoding() {
    return this.getStringAttribute('content_encoding');
  }

  // content_language - computed: true, optional: false, required: false
  public get contentLanguage() {
    return this.getStringAttribute('content_language');
  }

  // content_length - computed: true, optional: false, required: false
  public get contentLength() {
    return this.getNumberAttribute('content_length');
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // expiration - computed: true, optional: false, required: false
  public get expiration() {
    return this.getStringAttribute('expiration');
  }

  // expires - computed: true, optional: false, required: false
  public get expires() {
    return this.getStringAttribute('expires');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: false, optional: false, required: true
  private _key: string;
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // metadata - computed: true, optional: false, required: false
  public metadata(key: string): string {
    return new cdktf.StringMap(this, 'metadata').lookup(key);
  }

  // object_lock_legal_hold_status - computed: true, optional: false, required: false
  public get objectLockLegalHoldStatus() {
    return this.getStringAttribute('object_lock_legal_hold_status');
  }

  // object_lock_mode - computed: true, optional: false, required: false
  public get objectLockMode() {
    return this.getStringAttribute('object_lock_mode');
  }

  // object_lock_retain_until_date - computed: true, optional: false, required: false
  public get objectLockRetainUntilDate() {
    return this.getStringAttribute('object_lock_retain_until_date');
  }

  // range - computed: false, optional: true, required: false
  private _range?: string;
  public get range() {
    return this.getStringAttribute('range');
  }
  public set range(value: string ) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range
  }

  // server_side_encryption - computed: true, optional: false, required: false
  public get serverSideEncryption() {
    return this.getStringAttribute('server_side_encryption');
  }

  // sse_kms_key_id - computed: true, optional: false, required: false
  public get sseKmsKeyId() {
    return this.getStringAttribute('sse_kms_key_id');
  }

  // storage_class - computed: true, optional: false, required: false
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } {
    return this.interpolationForAttribute('tags') as any; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // version_id - computed: true, optional: true, required: false
  private _versionId?: string;
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId
  }

  // website_redirect_location - computed: true, optional: false, required: false
  public get websiteRedirectLocation() {
    return this.getStringAttribute('website_redirect_location');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      key: cdktf.stringToTerraform(this._key),
      range: cdktf.stringToTerraform(this._range),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      version_id: cdktf.stringToTerraform(this._versionId),
    };
  }
}
