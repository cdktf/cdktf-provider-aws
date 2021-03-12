// https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3ObjectCopyConfig extends cdktf.TerraformMetaArguments {
  readonly acl?: string;
  readonly bucket: string;
  readonly cacheControl?: string;
  readonly contentDisposition?: string;
  readonly contentEncoding?: string;
  readonly contentLanguage?: string;
  readonly contentType?: string;
  readonly copyIfMatch?: string;
  readonly copyIfModifiedSince?: string;
  readonly copyIfNoneMatch?: string;
  readonly copyIfUnmodifiedSince?: string;
  readonly customerAlgorithm?: string;
  readonly customerKey?: string;
  readonly customerKeyMd5?: string;
  readonly expectedBucketOwner?: string;
  readonly expectedSourceBucketOwner?: string;
  readonly expires?: string;
  readonly forceDestroy?: boolean;
  readonly key: string;
  readonly kmsEncryptionContext?: string;
  readonly kmsKeyId?: string;
  readonly metadata?: { [key: string]: string };
  readonly metadataDirective?: string;
  readonly objectLockLegalHoldStatus?: string;
  readonly objectLockMode?: string;
  readonly objectLockRetainUntilDate?: string;
  readonly requestPayer?: string;
  readonly serverSideEncryption?: string;
  readonly source: string;
  readonly sourceCustomerAlgorithm?: string;
  readonly sourceCustomerKey?: string;
  readonly sourceCustomerKeyMd5?: string;
  readonly storageClass?: string;
  readonly taggingDirective?: string;
  readonly tags?: { [key: string]: string };
  readonly websiteRedirect?: string;
  /** grant block */
  readonly grant?: S3ObjectCopyGrant[];
}
export interface S3ObjectCopyGrant {
  readonly email?: string;
  readonly id?: string;
  readonly permissions: string[];
  readonly type: string;
  readonly uri?: string;
}

function s3ObjectCopyGrantToTerraform(struct?: S3ObjectCopyGrant): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    id: cdktf.stringToTerraform(struct!.id),
    permissions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.permissions),
    type: cdktf.stringToTerraform(struct!.type),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


// Resource

export class S3ObjectCopy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: S3ObjectCopyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_object_copy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._acl = config.acl;
    this._bucket = config.bucket;
    this._cacheControl = config.cacheControl;
    this._contentDisposition = config.contentDisposition;
    this._contentEncoding = config.contentEncoding;
    this._contentLanguage = config.contentLanguage;
    this._contentType = config.contentType;
    this._copyIfMatch = config.copyIfMatch;
    this._copyIfModifiedSince = config.copyIfModifiedSince;
    this._copyIfNoneMatch = config.copyIfNoneMatch;
    this._copyIfUnmodifiedSince = config.copyIfUnmodifiedSince;
    this._customerAlgorithm = config.customerAlgorithm;
    this._customerKey = config.customerKey;
    this._customerKeyMd5 = config.customerKeyMd5;
    this._expectedBucketOwner = config.expectedBucketOwner;
    this._expectedSourceBucketOwner = config.expectedSourceBucketOwner;
    this._expires = config.expires;
    this._forceDestroy = config.forceDestroy;
    this._key = config.key;
    this._kmsEncryptionContext = config.kmsEncryptionContext;
    this._kmsKeyId = config.kmsKeyId;
    this._metadata = config.metadata;
    this._metadataDirective = config.metadataDirective;
    this._objectLockLegalHoldStatus = config.objectLockLegalHoldStatus;
    this._objectLockMode = config.objectLockMode;
    this._objectLockRetainUntilDate = config.objectLockRetainUntilDate;
    this._requestPayer = config.requestPayer;
    this._serverSideEncryption = config.serverSideEncryption;
    this._source = config.source;
    this._sourceCustomerAlgorithm = config.sourceCustomerAlgorithm;
    this._sourceCustomerKey = config.sourceCustomerKey;
    this._sourceCustomerKeyMd5 = config.sourceCustomerKeyMd5;
    this._storageClass = config.storageClass;
    this._taggingDirective = config.taggingDirective;
    this._tags = config.tags;
    this._websiteRedirect = config.websiteRedirect;
    this._grant = config.grant;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl - computed: false, optional: true, required: false
  private _acl?: string;
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string ) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl
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

  // cache_control - computed: true, optional: true, required: false
  private _cacheControl?: string;
  public get cacheControl() {
    return this.getStringAttribute('cache_control');
  }
  public set cacheControl(value: string) {
    this._cacheControl = value;
  }
  public resetCacheControl() {
    this._cacheControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheControlInput() {
    return this._cacheControl
  }

  // content_disposition - computed: true, optional: true, required: false
  private _contentDisposition?: string;
  public get contentDisposition() {
    return this.getStringAttribute('content_disposition');
  }
  public set contentDisposition(value: string) {
    this._contentDisposition = value;
  }
  public resetContentDisposition() {
    this._contentDisposition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDispositionInput() {
    return this._contentDisposition
  }

  // content_encoding - computed: true, optional: true, required: false
  private _contentEncoding?: string;
  public get contentEncoding() {
    return this.getStringAttribute('content_encoding');
  }
  public set contentEncoding(value: string) {
    this._contentEncoding = value;
  }
  public resetContentEncoding() {
    this._contentEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentEncodingInput() {
    return this._contentEncoding
  }

  // content_language - computed: true, optional: true, required: false
  private _contentLanguage?: string;
  public get contentLanguage() {
    return this.getStringAttribute('content_language');
  }
  public set contentLanguage(value: string) {
    this._contentLanguage = value;
  }
  public resetContentLanguage() {
    this._contentLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentLanguageInput() {
    return this._contentLanguage
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string;
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType
  }

  // copy_if_match - computed: false, optional: true, required: false
  private _copyIfMatch?: string;
  public get copyIfMatch() {
    return this.getStringAttribute('copy_if_match');
  }
  public set copyIfMatch(value: string ) {
    this._copyIfMatch = value;
  }
  public resetCopyIfMatch() {
    this._copyIfMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyIfMatchInput() {
    return this._copyIfMatch
  }

  // copy_if_modified_since - computed: false, optional: true, required: false
  private _copyIfModifiedSince?: string;
  public get copyIfModifiedSince() {
    return this.getStringAttribute('copy_if_modified_since');
  }
  public set copyIfModifiedSince(value: string ) {
    this._copyIfModifiedSince = value;
  }
  public resetCopyIfModifiedSince() {
    this._copyIfModifiedSince = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyIfModifiedSinceInput() {
    return this._copyIfModifiedSince
  }

  // copy_if_none_match - computed: false, optional: true, required: false
  private _copyIfNoneMatch?: string;
  public get copyIfNoneMatch() {
    return this.getStringAttribute('copy_if_none_match');
  }
  public set copyIfNoneMatch(value: string ) {
    this._copyIfNoneMatch = value;
  }
  public resetCopyIfNoneMatch() {
    this._copyIfNoneMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyIfNoneMatchInput() {
    return this._copyIfNoneMatch
  }

  // copy_if_unmodified_since - computed: false, optional: true, required: false
  private _copyIfUnmodifiedSince?: string;
  public get copyIfUnmodifiedSince() {
    return this.getStringAttribute('copy_if_unmodified_since');
  }
  public set copyIfUnmodifiedSince(value: string ) {
    this._copyIfUnmodifiedSince = value;
  }
  public resetCopyIfUnmodifiedSince() {
    this._copyIfUnmodifiedSince = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyIfUnmodifiedSinceInput() {
    return this._copyIfUnmodifiedSince
  }

  // customer_algorithm - computed: true, optional: true, required: false
  private _customerAlgorithm?: string;
  public get customerAlgorithm() {
    return this.getStringAttribute('customer_algorithm');
  }
  public set customerAlgorithm(value: string) {
    this._customerAlgorithm = value;
  }
  public resetCustomerAlgorithm() {
    this._customerAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerAlgorithmInput() {
    return this._customerAlgorithm
  }

  // customer_key - computed: false, optional: true, required: false
  private _customerKey?: string;
  public get customerKey() {
    return this.getStringAttribute('customer_key');
  }
  public set customerKey(value: string ) {
    this._customerKey = value;
  }
  public resetCustomerKey() {
    this._customerKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerKeyInput() {
    return this._customerKey
  }

  // customer_key_md5 - computed: true, optional: true, required: false
  private _customerKeyMd5?: string;
  public get customerKeyMd5() {
    return this.getStringAttribute('customer_key_md5');
  }
  public set customerKeyMd5(value: string) {
    this._customerKeyMd5 = value;
  }
  public resetCustomerKeyMd5() {
    this._customerKeyMd5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerKeyMd5Input() {
    return this._customerKeyMd5
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // expected_bucket_owner - computed: false, optional: true, required: false
  private _expectedBucketOwner?: string;
  public get expectedBucketOwner() {
    return this.getStringAttribute('expected_bucket_owner');
  }
  public set expectedBucketOwner(value: string ) {
    this._expectedBucketOwner = value;
  }
  public resetExpectedBucketOwner() {
    this._expectedBucketOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedBucketOwnerInput() {
    return this._expectedBucketOwner
  }

  // expected_source_bucket_owner - computed: false, optional: true, required: false
  private _expectedSourceBucketOwner?: string;
  public get expectedSourceBucketOwner() {
    return this.getStringAttribute('expected_source_bucket_owner');
  }
  public set expectedSourceBucketOwner(value: string ) {
    this._expectedSourceBucketOwner = value;
  }
  public resetExpectedSourceBucketOwner() {
    this._expectedSourceBucketOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedSourceBucketOwnerInput() {
    return this._expectedSourceBucketOwner
  }

  // expiration - computed: true, optional: false, required: false
  public get expiration() {
    return this.getStringAttribute('expiration');
  }

  // expires - computed: false, optional: true, required: false
  private _expires?: string;
  public get expires() {
    return this.getStringAttribute('expires');
  }
  public set expires(value: string ) {
    this._expires = value;
  }
  public resetExpires() {
    this._expires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresInput() {
    return this._expires
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean;
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean ) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy
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

  // kms_encryption_context - computed: true, optional: true, required: false
  private _kmsEncryptionContext?: string;
  public get kmsEncryptionContext() {
    return this.getStringAttribute('kms_encryption_context');
  }
  public set kmsEncryptionContext(value: string) {
    this._kmsEncryptionContext = value;
  }
  public resetKmsEncryptionContext() {
    this._kmsEncryptionContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsEncryptionContextInput() {
    return this._kmsEncryptionContext
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }
  public get metadata(): { [key: string]: string } {
    return this.interpolationForAttribute('metadata') as any; // Getting the computed value is not yet implemented
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // metadata_directive - computed: false, optional: true, required: false
  private _metadataDirective?: string;
  public get metadataDirective() {
    return this.getStringAttribute('metadata_directive');
  }
  public set metadataDirective(value: string ) {
    this._metadataDirective = value;
  }
  public resetMetadataDirective() {
    this._metadataDirective = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataDirectiveInput() {
    return this._metadataDirective
  }

  // object_lock_legal_hold_status - computed: true, optional: true, required: false
  private _objectLockLegalHoldStatus?: string;
  public get objectLockLegalHoldStatus() {
    return this.getStringAttribute('object_lock_legal_hold_status');
  }
  public set objectLockLegalHoldStatus(value: string) {
    this._objectLockLegalHoldStatus = value;
  }
  public resetObjectLockLegalHoldStatus() {
    this._objectLockLegalHoldStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectLockLegalHoldStatusInput() {
    return this._objectLockLegalHoldStatus
  }

  // object_lock_mode - computed: true, optional: true, required: false
  private _objectLockMode?: string;
  public get objectLockMode() {
    return this.getStringAttribute('object_lock_mode');
  }
  public set objectLockMode(value: string) {
    this._objectLockMode = value;
  }
  public resetObjectLockMode() {
    this._objectLockMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectLockModeInput() {
    return this._objectLockMode
  }

  // object_lock_retain_until_date - computed: true, optional: true, required: false
  private _objectLockRetainUntilDate?: string;
  public get objectLockRetainUntilDate() {
    return this.getStringAttribute('object_lock_retain_until_date');
  }
  public set objectLockRetainUntilDate(value: string) {
    this._objectLockRetainUntilDate = value;
  }
  public resetObjectLockRetainUntilDate() {
    this._objectLockRetainUntilDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectLockRetainUntilDateInput() {
    return this._objectLockRetainUntilDate
  }

  // request_charged - computed: true, optional: false, required: false
  public get requestCharged() {
    return this.getBooleanAttribute('request_charged');
  }

  // request_payer - computed: false, optional: true, required: false
  private _requestPayer?: string;
  public get requestPayer() {
    return this.getStringAttribute('request_payer');
  }
  public set requestPayer(value: string ) {
    this._requestPayer = value;
  }
  public resetRequestPayer() {
    this._requestPayer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPayerInput() {
    return this._requestPayer
  }

  // server_side_encryption - computed: true, optional: true, required: false
  private _serverSideEncryption?: string;
  public get serverSideEncryption() {
    return this.getStringAttribute('server_side_encryption');
  }
  public set serverSideEncryption(value: string) {
    this._serverSideEncryption = value;
  }
  public resetServerSideEncryption() {
    this._serverSideEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionInput() {
    return this._serverSideEncryption
  }

  // source - computed: false, optional: false, required: true
  private _source: string;
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source
  }

  // source_customer_algorithm - computed: false, optional: true, required: false
  private _sourceCustomerAlgorithm?: string;
  public get sourceCustomerAlgorithm() {
    return this.getStringAttribute('source_customer_algorithm');
  }
  public set sourceCustomerAlgorithm(value: string ) {
    this._sourceCustomerAlgorithm = value;
  }
  public resetSourceCustomerAlgorithm() {
    this._sourceCustomerAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCustomerAlgorithmInput() {
    return this._sourceCustomerAlgorithm
  }

  // source_customer_key - computed: false, optional: true, required: false
  private _sourceCustomerKey?: string;
  public get sourceCustomerKey() {
    return this.getStringAttribute('source_customer_key');
  }
  public set sourceCustomerKey(value: string ) {
    this._sourceCustomerKey = value;
  }
  public resetSourceCustomerKey() {
    this._sourceCustomerKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCustomerKeyInput() {
    return this._sourceCustomerKey
  }

  // source_customer_key_md5 - computed: false, optional: true, required: false
  private _sourceCustomerKeyMd5?: string;
  public get sourceCustomerKeyMd5() {
    return this.getStringAttribute('source_customer_key_md5');
  }
  public set sourceCustomerKeyMd5(value: string ) {
    this._sourceCustomerKeyMd5 = value;
  }
  public resetSourceCustomerKeyMd5() {
    this._sourceCustomerKeyMd5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCustomerKeyMd5Input() {
    return this._sourceCustomerKeyMd5
  }

  // source_version_id - computed: true, optional: false, required: false
  public get sourceVersionId() {
    return this.getStringAttribute('source_version_id');
  }

  // storage_class - computed: true, optional: true, required: false
  private _storageClass?: string;
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass
  }

  // tagging_directive - computed: false, optional: true, required: false
  private _taggingDirective?: string;
  public get taggingDirective() {
    return this.getStringAttribute('tagging_directive');
  }
  public set taggingDirective(value: string ) {
    this._taggingDirective = value;
  }
  public resetTaggingDirective() {
    this._taggingDirective = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taggingDirectiveInput() {
    return this._taggingDirective
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }

  // website_redirect - computed: true, optional: true, required: false
  private _websiteRedirect?: string;
  public get websiteRedirect() {
    return this.getStringAttribute('website_redirect');
  }
  public set websiteRedirect(value: string) {
    this._websiteRedirect = value;
  }
  public resetWebsiteRedirect() {
    this._websiteRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteRedirectInput() {
    return this._websiteRedirect
  }

  // grant - computed: false, optional: true, required: false
  private _grant?: S3ObjectCopyGrant[];
  public get grant() {
    return this.interpolationForAttribute('grant') as any;
  }
  public set grant(value: S3ObjectCopyGrant[] ) {
    this._grant = value;
  }
  public resetGrant() {
    this._grant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantInput() {
    return this._grant
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl: cdktf.stringToTerraform(this._acl),
      bucket: cdktf.stringToTerraform(this._bucket),
      cache_control: cdktf.stringToTerraform(this._cacheControl),
      content_disposition: cdktf.stringToTerraform(this._contentDisposition),
      content_encoding: cdktf.stringToTerraform(this._contentEncoding),
      content_language: cdktf.stringToTerraform(this._contentLanguage),
      content_type: cdktf.stringToTerraform(this._contentType),
      copy_if_match: cdktf.stringToTerraform(this._copyIfMatch),
      copy_if_modified_since: cdktf.stringToTerraform(this._copyIfModifiedSince),
      copy_if_none_match: cdktf.stringToTerraform(this._copyIfNoneMatch),
      copy_if_unmodified_since: cdktf.stringToTerraform(this._copyIfUnmodifiedSince),
      customer_algorithm: cdktf.stringToTerraform(this._customerAlgorithm),
      customer_key: cdktf.stringToTerraform(this._customerKey),
      customer_key_md5: cdktf.stringToTerraform(this._customerKeyMd5),
      expected_bucket_owner: cdktf.stringToTerraform(this._expectedBucketOwner),
      expected_source_bucket_owner: cdktf.stringToTerraform(this._expectedSourceBucketOwner),
      expires: cdktf.stringToTerraform(this._expires),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      key: cdktf.stringToTerraform(this._key),
      kms_encryption_context: cdktf.stringToTerraform(this._kmsEncryptionContext),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      metadata: cdktf.hashMapper(cdktf.anyToTerraform)(this._metadata),
      metadata_directive: cdktf.stringToTerraform(this._metadataDirective),
      object_lock_legal_hold_status: cdktf.stringToTerraform(this._objectLockLegalHoldStatus),
      object_lock_mode: cdktf.stringToTerraform(this._objectLockMode),
      object_lock_retain_until_date: cdktf.stringToTerraform(this._objectLockRetainUntilDate),
      request_payer: cdktf.stringToTerraform(this._requestPayer),
      server_side_encryption: cdktf.stringToTerraform(this._serverSideEncryption),
      source: cdktf.stringToTerraform(this._source),
      source_customer_algorithm: cdktf.stringToTerraform(this._sourceCustomerAlgorithm),
      source_customer_key: cdktf.stringToTerraform(this._sourceCustomerKey),
      source_customer_key_md5: cdktf.stringToTerraform(this._sourceCustomerKeyMd5),
      storage_class: cdktf.stringToTerraform(this._storageClass),
      tagging_directive: cdktf.stringToTerraform(this._taggingDirective),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      website_redirect: cdktf.stringToTerraform(this._websiteRedirect),
      grant: cdktf.listMapper(s3ObjectCopyGrantToTerraform)(this._grant),
    };
  }
}
