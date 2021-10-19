// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Signer
*/
export namespace Signer {
  export interface SignerSigningJobConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html#ignore_signing_job_failure SignerSigningJob#ignore_signing_job_failure}
    */
    readonly ignoreSigningJobFailure?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html#profile_name SignerSigningJob#profile_name}
    */
    readonly profileName: string;
    /**
    * destination block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html#destination SignerSigningJob#destination}
    */
    readonly destination: SignerSigningJobDestination;
    /**
    * source block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html#source SignerSigningJob#source}
    */
    readonly source: SignerSigningJobSource;
  }
  export class SignerSigningJobRevocationRecord extends cdktf.ComplexComputedList {

    // reason - computed: true, optional: false, required: false
    public get reason() {
      return this.getStringAttribute('reason');
    }

    // revoked_at - computed: true, optional: false, required: false
    public get revokedAt() {
      return this.getStringAttribute('revoked_at');
    }

    // revoked_by - computed: true, optional: false, required: false
    public get revokedBy() {
      return this.getStringAttribute('revoked_by');
    }
  }
  export class SignerSigningJobSignedObjectS3 extends cdktf.ComplexComputedList {

    // bucket - computed: true, optional: false, required: false
    public get bucket() {
      return this.getStringAttribute('bucket');
    }

    // key - computed: true, optional: false, required: false
    public get key() {
      return this.getStringAttribute('key');
    }
  }
  export class SignerSigningJobSignedObject extends cdktf.ComplexComputedList {

    // s3 - computed: true, optional: false, required: false
    public get s3() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('s3') as any;
    }
  }
  export interface SignerSigningJobDestinationS3 {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html#bucket SignerSigningJob#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html#prefix SignerSigningJob#prefix}
    */
    readonly prefix?: string;
  }

  function signerSigningJobDestinationS3ToTerraform(struct?: SignerSigningJobDestinationS3OutputReference | SignerSigningJobDestinationS3): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      bucket: cdktf.stringToTerraform(struct!.bucket),
      prefix: cdktf.stringToTerraform(struct!.prefix),
    }
  }

  export class SignerSigningJobDestinationS3OutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // bucket - computed: false, optional: false, required: true
    private _bucket?: string; 
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

    // prefix - computed: false, optional: true, required: false
    private _prefix?: string | undefined; 
    public get prefix() {
      return this.getStringAttribute('prefix');
    }
    public set prefix(value: string | undefined) {
      this._prefix = value;
    }
    public resetPrefix() {
      this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixInput() {
      return this._prefix
    }
  }
  export interface SignerSigningJobDestination {
    /**
    * s3 block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html#s3 SignerSigningJob#s3}
    */
    readonly s3: SignerSigningJobDestinationS3;
  }

  function signerSigningJobDestinationToTerraform(struct?: SignerSigningJobDestinationOutputReference | SignerSigningJobDestination): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      s3: signerSigningJobDestinationS3ToTerraform(struct!.s3),
    }
  }

  export class SignerSigningJobDestinationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // s3 - computed: false, optional: false, required: true
    private _s3?: SignerSigningJobDestinationS3; 
    private __s3Output = new SignerSigningJobDestinationS3OutputReference(this as any, "s3", true);
    public get s3() {
      return this.__s3Output;
    }
    public putS3(value: SignerSigningJobDestinationS3) {
      this._s3 = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3Input() {
      return this._s3
    }
  }
  export interface SignerSigningJobSourceS3 {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html#bucket SignerSigningJob#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html#key SignerSigningJob#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html#version SignerSigningJob#version}
    */
    readonly version: string;
  }

  function signerSigningJobSourceS3ToTerraform(struct?: SignerSigningJobSourceS3OutputReference | SignerSigningJobSourceS3): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      bucket: cdktf.stringToTerraform(struct!.bucket),
      key: cdktf.stringToTerraform(struct!.key),
      version: cdktf.stringToTerraform(struct!.version),
    }
  }

  export class SignerSigningJobSourceS3OutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // bucket - computed: false, optional: false, required: true
    private _bucket?: string; 
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

    // key - computed: false, optional: false, required: true
    private _key?: string; 
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

    // version - computed: false, optional: false, required: true
    private _version?: string; 
    public get version() {
      return this.getStringAttribute('version');
    }
    public set version(value: string) {
      this._version = value;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
      return this._version
    }
  }
  export interface SignerSigningJobSource {
    /**
    * s3 block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html#s3 SignerSigningJob#s3}
    */
    readonly s3: SignerSigningJobSourceS3;
  }

  function signerSigningJobSourceToTerraform(struct?: SignerSigningJobSourceOutputReference | SignerSigningJobSource): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      s3: signerSigningJobSourceS3ToTerraform(struct!.s3),
    }
  }

  export class SignerSigningJobSourceOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // s3 - computed: false, optional: false, required: true
    private _s3?: SignerSigningJobSourceS3; 
    private __s3Output = new SignerSigningJobSourceS3OutputReference(this as any, "s3", true);
    public get s3() {
      return this.__s3Output;
    }
    public putS3(value: SignerSigningJobSourceS3) {
      this._s3 = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3Input() {
      return this._s3
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html aws_signer_signing_job}
  */
  export class SignerSigningJob extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_signer_signing_job";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html aws_signer_signing_job} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SignerSigningJobConfig
    */
    public constructor(scope: Construct, id: string, config: SignerSigningJobConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_signer_signing_job',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._ignoreSigningJobFailure = config.ignoreSigningJobFailure;
      this._profileName = config.profileName;
      this._destination = config.destination;
      this._source = config.source;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // completed_at - computed: true, optional: false, required: false
    public get completedAt() {
      return this.getStringAttribute('completed_at');
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
      return this.getStringAttribute('created_at');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ignore_signing_job_failure - computed: false, optional: true, required: false
    private _ignoreSigningJobFailure?: boolean | cdktf.IResolvable | undefined; 
    public get ignoreSigningJobFailure() {
      return this.getBooleanAttribute('ignore_signing_job_failure') as any;
    }
    public set ignoreSigningJobFailure(value: boolean | cdktf.IResolvable | undefined) {
      this._ignoreSigningJobFailure = value;
    }
    public resetIgnoreSigningJobFailure() {
      this._ignoreSigningJobFailure = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ignoreSigningJobFailureInput() {
      return this._ignoreSigningJobFailure
    }

    // job_id - computed: true, optional: false, required: false
    public get jobId() {
      return this.getStringAttribute('job_id');
    }

    // job_invoker - computed: true, optional: false, required: false
    public get jobInvoker() {
      return this.getStringAttribute('job_invoker');
    }

    // job_owner - computed: true, optional: false, required: false
    public get jobOwner() {
      return this.getStringAttribute('job_owner');
    }

    // platform_display_name - computed: true, optional: false, required: false
    public get platformDisplayName() {
      return this.getStringAttribute('platform_display_name');
    }

    // platform_id - computed: true, optional: false, required: false
    public get platformId() {
      return this.getStringAttribute('platform_id');
    }

    // profile_name - computed: false, optional: false, required: true
    private _profileName?: string; 
    public get profileName() {
      return this.getStringAttribute('profile_name');
    }
    public set profileName(value: string) {
      this._profileName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get profileNameInput() {
      return this._profileName
    }

    // profile_version - computed: true, optional: false, required: false
    public get profileVersion() {
      return this.getStringAttribute('profile_version');
    }

    // requested_by - computed: true, optional: false, required: false
    public get requestedBy() {
      return this.getStringAttribute('requested_by');
    }

    // revocation_record - computed: true, optional: false, required: false
    public revocationRecord(index: string) {
      return new SignerSigningJobRevocationRecord(this, 'revocation_record', index);
    }

    // signature_expires_at - computed: true, optional: false, required: false
    public get signatureExpiresAt() {
      return this.getStringAttribute('signature_expires_at');
    }

    // signed_object - computed: true, optional: false, required: false
    public signedObject(index: string) {
      return new SignerSigningJobSignedObject(this, 'signed_object', index);
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // status_reason - computed: true, optional: false, required: false
    public get statusReason() {
      return this.getStringAttribute('status_reason');
    }

    // destination - computed: false, optional: false, required: true
    private _destination?: SignerSigningJobDestination; 
    private __destinationOutput = new SignerSigningJobDestinationOutputReference(this as any, "destination", true);
    public get destination() {
      return this.__destinationOutput;
    }
    public putDestination(value: SignerSigningJobDestination) {
      this._destination = value;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationInput() {
      return this._destination
    }

    // source - computed: false, optional: false, required: true
    private _source?: SignerSigningJobSource; 
    private __sourceOutput = new SignerSigningJobSourceOutputReference(this as any, "source", true);
    public get source() {
      return this.__sourceOutput;
    }
    public putSource(value: SignerSigningJobSource) {
      this._source = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
      return this._source
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        ignore_signing_job_failure: cdktf.booleanToTerraform(this._ignoreSigningJobFailure),
        profile_name: cdktf.stringToTerraform(this._profileName),
        destination: signerSigningJobDestinationToTerraform(this._destination),
        source: signerSigningJobSourceToTerraform(this._source),
      };
    }
  }
  export interface SignerSigningProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile.html#name SignerSigningProfile#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile.html#name_prefix SignerSigningProfile#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile.html#platform_id SignerSigningProfile#platform_id}
    */
    readonly platformId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile.html#tags SignerSigningProfile#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile.html#tags_all SignerSigningProfile#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * signature_validity_period block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile.html#signature_validity_period SignerSigningProfile#signature_validity_period}
    */
    readonly signatureValidityPeriod?: SignerSigningProfileSignatureValidityPeriod;
  }
  export class SignerSigningProfileRevocationRecord extends cdktf.ComplexComputedList {

    // revocation_effective_from - computed: true, optional: false, required: false
    public get revocationEffectiveFrom() {
      return this.getStringAttribute('revocation_effective_from');
    }

    // revoked_at - computed: true, optional: false, required: false
    public get revokedAt() {
      return this.getStringAttribute('revoked_at');
    }

    // revoked_by - computed: true, optional: false, required: false
    public get revokedBy() {
      return this.getStringAttribute('revoked_by');
    }
  }
  export interface SignerSigningProfileSignatureValidityPeriod {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile.html#type SignerSigningProfile#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile.html#value SignerSigningProfile#value}
    */
    readonly value: number;
  }

  function signerSigningProfileSignatureValidityPeriodToTerraform(struct?: SignerSigningProfileSignatureValidityPeriodOutputReference | SignerSigningProfileSignatureValidityPeriod): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      type: cdktf.stringToTerraform(struct!.type),
      value: cdktf.numberToTerraform(struct!.value),
    }
  }

  export class SignerSigningProfileSignatureValidityPeriodOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string) {
      this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }

    // value - computed: false, optional: false, required: true
    private _value?: number; 
    public get value() {
      return this.getNumberAttribute('value');
    }
    public set value(value: number) {
      this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
      return this._value
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile.html aws_signer_signing_profile}
  */
  export class SignerSigningProfile extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_signer_signing_profile";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile.html aws_signer_signing_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SignerSigningProfileConfig
    */
    public constructor(scope: Construct, id: string, config: SignerSigningProfileConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_signer_signing_profile',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._namePrefix = config.namePrefix;
      this._platformId = config.platformId;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._signatureValidityPeriod = config.signatureValidityPeriod;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // name_prefix - computed: false, optional: true, required: false
    private _namePrefix?: string | undefined; 
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string | undefined) {
      this._namePrefix = value;
    }
    public resetNamePrefix() {
      this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
    }

    // platform_display_name - computed: true, optional: false, required: false
    public get platformDisplayName() {
      return this.getStringAttribute('platform_display_name');
    }

    // platform_id - computed: false, optional: false, required: true
    private _platformId?: string; 
    public get platformId() {
      return this.getStringAttribute('platform_id');
    }
    public set platformId(value: string) {
      this._platformId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get platformIdInput() {
      return this._platformId
    }

    // revocation_record - computed: true, optional: false, required: false
    public revocationRecord(index: string) {
      return new SignerSigningProfileRevocationRecord(this, 'revocation_record', index);
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // version - computed: true, optional: false, required: false
    public get version() {
      return this.getStringAttribute('version');
    }

    // version_arn - computed: true, optional: false, required: false
    public get versionArn() {
      return this.getStringAttribute('version_arn');
    }

    // signature_validity_period - computed: false, optional: true, required: false
    private _signatureValidityPeriod?: SignerSigningProfileSignatureValidityPeriod | undefined; 
    private __signatureValidityPeriodOutput = new SignerSigningProfileSignatureValidityPeriodOutputReference(this as any, "signature_validity_period", true);
    public get signatureValidityPeriod() {
      return this.__signatureValidityPeriodOutput;
    }
    public putSignatureValidityPeriod(value: SignerSigningProfileSignatureValidityPeriod | undefined) {
      this._signatureValidityPeriod = value;
    }
    public resetSignatureValidityPeriod() {
      this._signatureValidityPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get signatureValidityPeriodInput() {
      return this._signatureValidityPeriod
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
        platform_id: cdktf.stringToTerraform(this._platformId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        signature_validity_period: signerSigningProfileSignatureValidityPeriodToTerraform(this._signatureValidityPeriod),
      };
    }
  }
  export interface SignerSigningProfilePermissionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission.html#action SignerSigningProfilePermission#action}
    */
    readonly action: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission.html#principal SignerSigningProfilePermission#principal}
    */
    readonly principal: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission.html#profile_name SignerSigningProfilePermission#profile_name}
    */
    readonly profileName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission.html#profile_version SignerSigningProfilePermission#profile_version}
    */
    readonly profileVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission.html#statement_id SignerSigningProfilePermission#statement_id}
    */
    readonly statementId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission.html#statement_id_prefix SignerSigningProfilePermission#statement_id_prefix}
    */
    readonly statementIdPrefix?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission.html aws_signer_signing_profile_permission}
  */
  export class SignerSigningProfilePermission extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_signer_signing_profile_permission";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission.html aws_signer_signing_profile_permission} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SignerSigningProfilePermissionConfig
    */
    public constructor(scope: Construct, id: string, config: SignerSigningProfilePermissionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_signer_signing_profile_permission',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._action = config.action;
      this._principal = config.principal;
      this._profileName = config.profileName;
      this._profileVersion = config.profileVersion;
      this._statementId = config.statementId;
      this._statementIdPrefix = config.statementIdPrefix;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // action - computed: false, optional: false, required: true
    private _action?: string; 
    public get action() {
      return this.getStringAttribute('action');
    }
    public set action(value: string) {
      this._action = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
      return this._action
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // principal - computed: false, optional: false, required: true
    private _principal?: string; 
    public get principal() {
      return this.getStringAttribute('principal');
    }
    public set principal(value: string) {
      this._principal = value;
    }
    // Temporarily expose input value. Use with caution.
    public get principalInput() {
      return this._principal
    }

    // profile_name - computed: false, optional: false, required: true
    private _profileName?: string; 
    public get profileName() {
      return this.getStringAttribute('profile_name');
    }
    public set profileName(value: string) {
      this._profileName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get profileNameInput() {
      return this._profileName
    }

    // profile_version - computed: true, optional: true, required: false
    private _profileVersion?: string | undefined; 
    public get profileVersion() {
      return this.getStringAttribute('profile_version');
    }
    public set profileVersion(value: string | undefined) {
      this._profileVersion = value;
    }
    public resetProfileVersion() {
      this._profileVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get profileVersionInput() {
      return this._profileVersion
    }

    // statement_id - computed: true, optional: true, required: false
    private _statementId?: string | undefined; 
    public get statementId() {
      return this.getStringAttribute('statement_id');
    }
    public set statementId(value: string | undefined) {
      this._statementId = value;
    }
    public resetStatementId() {
      this._statementId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statementIdInput() {
      return this._statementId
    }

    // statement_id_prefix - computed: false, optional: true, required: false
    private _statementIdPrefix?: string | undefined; 
    public get statementIdPrefix() {
      return this.getStringAttribute('statement_id_prefix');
    }
    public set statementIdPrefix(value: string | undefined) {
      this._statementIdPrefix = value;
    }
    public resetStatementIdPrefix() {
      this._statementIdPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statementIdPrefixInput() {
      return this._statementIdPrefix
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        action: cdktf.stringToTerraform(this._action),
        principal: cdktf.stringToTerraform(this._principal),
        profile_name: cdktf.stringToTerraform(this._profileName),
        profile_version: cdktf.stringToTerraform(this._profileVersion),
        statement_id: cdktf.stringToTerraform(this._statementId),
        statement_id_prefix: cdktf.stringToTerraform(this._statementIdPrefix),
      };
    }
  }
  export interface DataAwsSignerSigningJobConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_job.html#job_id DataAwsSignerSigningJob#job_id}
    */
    readonly jobId: string;
  }
  export class DataAwsSignerSigningJobRevocationRecord extends cdktf.ComplexComputedList {

    // reason - computed: true, optional: false, required: false
    public get reason() {
      return this.getStringAttribute('reason');
    }

    // revoked_at - computed: true, optional: false, required: false
    public get revokedAt() {
      return this.getStringAttribute('revoked_at');
    }

    // revoked_by - computed: true, optional: false, required: false
    public get revokedBy() {
      return this.getStringAttribute('revoked_by');
    }
  }
  export class DataAwsSignerSigningJobSignedObjectS3 extends cdktf.ComplexComputedList {

    // bucket - computed: true, optional: false, required: false
    public get bucket() {
      return this.getStringAttribute('bucket');
    }

    // key - computed: true, optional: false, required: false
    public get key() {
      return this.getStringAttribute('key');
    }
  }
  export class DataAwsSignerSigningJobSignedObject extends cdktf.ComplexComputedList {

    // s3 - computed: true, optional: false, required: false
    public get s3() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('s3') as any;
    }
  }
  export class DataAwsSignerSigningJobSourceS3 extends cdktf.ComplexComputedList {

    // bucket - computed: true, optional: false, required: false
    public get bucket() {
      return this.getStringAttribute('bucket');
    }

    // key - computed: true, optional: false, required: false
    public get key() {
      return this.getStringAttribute('key');
    }

    // version - computed: true, optional: false, required: false
    public get version() {
      return this.getStringAttribute('version');
    }
  }
  export class DataAwsSignerSigningJobSource extends cdktf.ComplexComputedList {

    // s3 - computed: true, optional: false, required: false
    public get s3() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('s3') as any;
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_job.html aws_signer_signing_job}
  */
  export class DataAwsSignerSigningJob extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_signer_signing_job";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_job.html aws_signer_signing_job} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSignerSigningJobConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsSignerSigningJobConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_signer_signing_job',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._jobId = config.jobId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // completed_at - computed: true, optional: false, required: false
    public get completedAt() {
      return this.getStringAttribute('completed_at');
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
      return this.getStringAttribute('created_at');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // job_id - computed: false, optional: false, required: true
    private _jobId?: string; 
    public get jobId() {
      return this.getStringAttribute('job_id');
    }
    public set jobId(value: string) {
      this._jobId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get jobIdInput() {
      return this._jobId
    }

    // job_invoker - computed: true, optional: false, required: false
    public get jobInvoker() {
      return this.getStringAttribute('job_invoker');
    }

    // job_owner - computed: true, optional: false, required: false
    public get jobOwner() {
      return this.getStringAttribute('job_owner');
    }

    // platform_display_name - computed: true, optional: false, required: false
    public get platformDisplayName() {
      return this.getStringAttribute('platform_display_name');
    }

    // platform_id - computed: true, optional: false, required: false
    public get platformId() {
      return this.getStringAttribute('platform_id');
    }

    // profile_name - computed: true, optional: false, required: false
    public get profileName() {
      return this.getStringAttribute('profile_name');
    }

    // profile_version - computed: true, optional: false, required: false
    public get profileVersion() {
      return this.getStringAttribute('profile_version');
    }

    // requested_by - computed: true, optional: false, required: false
    public get requestedBy() {
      return this.getStringAttribute('requested_by');
    }

    // revocation_record - computed: true, optional: false, required: false
    public revocationRecord(index: string) {
      return new DataAwsSignerSigningJobRevocationRecord(this, 'revocation_record', index);
    }

    // signature_expires_at - computed: true, optional: false, required: false
    public get signatureExpiresAt() {
      return this.getStringAttribute('signature_expires_at');
    }

    // signed_object - computed: true, optional: false, required: false
    public signedObject(index: string) {
      return new DataAwsSignerSigningJobSignedObject(this, 'signed_object', index);
    }

    // source - computed: true, optional: false, required: false
    public source(index: string) {
      return new DataAwsSignerSigningJobSource(this, 'source', index);
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // status_reason - computed: true, optional: false, required: false
    public get statusReason() {
      return this.getStringAttribute('status_reason');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        job_id: cdktf.stringToTerraform(this._jobId),
      };
    }
  }
  export interface DataAwsSignerSigningProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_profile.html#name DataAwsSignerSigningProfile#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_profile.html#tags DataAwsSignerSigningProfile#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }
  export class DataAwsSignerSigningProfileRevocationRecord extends cdktf.ComplexComputedList {

    // revocation_effective_from - computed: true, optional: false, required: false
    public get revocationEffectiveFrom() {
      return this.getStringAttribute('revocation_effective_from');
    }

    // revoked_at - computed: true, optional: false, required: false
    public get revokedAt() {
      return this.getStringAttribute('revoked_at');
    }

    // revoked_by - computed: true, optional: false, required: false
    public get revokedBy() {
      return this.getStringAttribute('revoked_by');
    }
  }
  export class DataAwsSignerSigningProfileSignatureValidityPeriod extends cdktf.ComplexComputedList {

    // type - computed: true, optional: false, required: false
    public get type() {
      return this.getStringAttribute('type');
    }

    // value - computed: true, optional: false, required: false
    public get value() {
      return this.getNumberAttribute('value');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_profile.html aws_signer_signing_profile}
  */
  export class DataAwsSignerSigningProfile extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_signer_signing_profile";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_profile.html aws_signer_signing_profile} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSignerSigningProfileConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsSignerSigningProfileConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_signer_signing_profile',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // platform_display_name - computed: true, optional: false, required: false
    public get platformDisplayName() {
      return this.getStringAttribute('platform_display_name');
    }

    // platform_id - computed: true, optional: false, required: false
    public get platformId() {
      return this.getStringAttribute('platform_id');
    }

    // revocation_record - computed: true, optional: false, required: false
    public revocationRecord(index: string) {
      return new DataAwsSignerSigningProfileRevocationRecord(this, 'revocation_record', index);
    }

    // signature_validity_period - computed: true, optional: false, required: false
    public signatureValidityPeriod(index: string) {
      return new DataAwsSignerSigningProfileSignatureValidityPeriod(this, 'signature_validity_period', index);
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // version - computed: true, optional: false, required: false
    public get version() {
      return this.getStringAttribute('version');
    }

    // version_arn - computed: true, optional: false, required: false
    public get versionArn() {
      return this.getStringAttribute('version_arn');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
}
