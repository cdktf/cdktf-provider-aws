// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Simple Storage Service
*/
export namespace S3 {
  export interface S3AccessPointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#account_id S3AccessPoint#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#bucket S3AccessPoint#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#name S3AccessPoint#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#policy S3AccessPoint#policy}
    */
    readonly policy?: string;
    /**
    * public_access_block_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#public_access_block_configuration S3AccessPoint#public_access_block_configuration}
    */
    readonly publicAccessBlockConfiguration?: S3AccessPointPublicAccessBlockConfiguration;
    /**
    * vpc_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#vpc_configuration S3AccessPoint#vpc_configuration}
    */
    readonly vpcConfiguration?: S3AccessPointVpcConfiguration;
  }
  export interface S3AccessPointPublicAccessBlockConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#block_public_acls S3AccessPoint#block_public_acls}
    */
    readonly blockPublicAcls?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#block_public_policy S3AccessPoint#block_public_policy}
    */
    readonly blockPublicPolicy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#ignore_public_acls S3AccessPoint#ignore_public_acls}
    */
    readonly ignorePublicAcls?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#restrict_public_buckets S3AccessPoint#restrict_public_buckets}
    */
    readonly restrictPublicBuckets?: boolean | cdktf.IResolvable;
  }

  function s3AccessPointPublicAccessBlockConfigurationToTerraform(struct?: S3AccessPointPublicAccessBlockConfigurationOutputReference | S3AccessPointPublicAccessBlockConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      block_public_acls: cdktf.booleanToTerraform(struct!.blockPublicAcls),
      block_public_policy: cdktf.booleanToTerraform(struct!.blockPublicPolicy),
      ignore_public_acls: cdktf.booleanToTerraform(struct!.ignorePublicAcls),
      restrict_public_buckets: cdktf.booleanToTerraform(struct!.restrictPublicBuckets),
    }
  }

  export class S3AccessPointPublicAccessBlockConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // block_public_acls - computed: false, optional: true, required: false
    private _blockPublicAcls?: boolean | cdktf.IResolvable | undefined; 
    public get blockPublicAcls() {
      return this.getBooleanAttribute('block_public_acls') as any;
    }
    public set blockPublicAcls(value: boolean | cdktf.IResolvable | undefined) {
      this._blockPublicAcls = value;
    }
    public resetBlockPublicAcls() {
      this._blockPublicAcls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockPublicAclsInput() {
      return this._blockPublicAcls
    }

    // block_public_policy - computed: false, optional: true, required: false
    private _blockPublicPolicy?: boolean | cdktf.IResolvable | undefined; 
    public get blockPublicPolicy() {
      return this.getBooleanAttribute('block_public_policy') as any;
    }
    public set blockPublicPolicy(value: boolean | cdktf.IResolvable | undefined) {
      this._blockPublicPolicy = value;
    }
    public resetBlockPublicPolicy() {
      this._blockPublicPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockPublicPolicyInput() {
      return this._blockPublicPolicy
    }

    // ignore_public_acls - computed: false, optional: true, required: false
    private _ignorePublicAcls?: boolean | cdktf.IResolvable | undefined; 
    public get ignorePublicAcls() {
      return this.getBooleanAttribute('ignore_public_acls') as any;
    }
    public set ignorePublicAcls(value: boolean | cdktf.IResolvable | undefined) {
      this._ignorePublicAcls = value;
    }
    public resetIgnorePublicAcls() {
      this._ignorePublicAcls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ignorePublicAclsInput() {
      return this._ignorePublicAcls
    }

    // restrict_public_buckets - computed: false, optional: true, required: false
    private _restrictPublicBuckets?: boolean | cdktf.IResolvable | undefined; 
    public get restrictPublicBuckets() {
      return this.getBooleanAttribute('restrict_public_buckets') as any;
    }
    public set restrictPublicBuckets(value: boolean | cdktf.IResolvable | undefined) {
      this._restrictPublicBuckets = value;
    }
    public resetRestrictPublicBuckets() {
      this._restrictPublicBuckets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get restrictPublicBucketsInput() {
      return this._restrictPublicBuckets
    }
  }
  export interface S3AccessPointVpcConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#vpc_id S3AccessPoint#vpc_id}
    */
    readonly vpcId: string;
  }

  function s3AccessPointVpcConfigurationToTerraform(struct?: S3AccessPointVpcConfigurationOutputReference | S3AccessPointVpcConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    }
  }

  export class S3AccessPointVpcConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // vpc_id - computed: false, optional: false, required: true
    private _vpcId?: string; 
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string) {
      this._vpcId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdInput() {
      return this._vpcId
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html aws_s3_access_point}
  */
  export class S3AccessPoint extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_s3_access_point";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html aws_s3_access_point} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3AccessPointConfig
    */
    public constructor(scope: Construct, id: string, config: S3AccessPointConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_s3_access_point',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._accountId = config.accountId;
      this._bucket = config.bucket;
      this._name = config.name;
      this._policy = config.policy;
      this._publicAccessBlockConfiguration = config.publicAccessBlockConfiguration;
      this._vpcConfiguration = config.vpcConfiguration;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account_id - computed: true, optional: true, required: false
    private _accountId?: string | undefined; 
    public get accountId() {
      return this.getStringAttribute('account_id');
    }
    public set accountId(value: string | undefined) {
      this._accountId = value;
    }
    public resetAccountId() {
      this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdInput() {
      return this._accountId
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
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

    // domain_name - computed: true, optional: false, required: false
    public get domainName() {
      return this.getStringAttribute('domain_name');
    }

    // has_public_access_policy - computed: true, optional: false, required: false
    public get hasPublicAccessPolicy() {
      return this.getBooleanAttribute('has_public_access_policy') as any;
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

    // network_origin - computed: true, optional: false, required: false
    public get networkOrigin() {
      return this.getStringAttribute('network_origin');
    }

    // policy - computed: false, optional: true, required: false
    private _policy?: string | undefined; 
    public get policy() {
      return this.getStringAttribute('policy');
    }
    public set policy(value: string | undefined) {
      this._policy = value;
    }
    public resetPolicy() {
      this._policy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
      return this._policy
    }

    // public_access_block_configuration - computed: false, optional: true, required: false
    private _publicAccessBlockConfiguration?: S3AccessPointPublicAccessBlockConfiguration | undefined; 
    private __publicAccessBlockConfigurationOutput = new S3AccessPointPublicAccessBlockConfigurationOutputReference(this as any, "public_access_block_configuration", true);
    public get publicAccessBlockConfiguration() {
      return this.__publicAccessBlockConfigurationOutput;
    }
    public putPublicAccessBlockConfiguration(value: S3AccessPointPublicAccessBlockConfiguration | undefined) {
      this._publicAccessBlockConfiguration = value;
    }
    public resetPublicAccessBlockConfiguration() {
      this._publicAccessBlockConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publicAccessBlockConfigurationInput() {
      return this._publicAccessBlockConfiguration
    }

    // vpc_configuration - computed: false, optional: true, required: false
    private _vpcConfiguration?: S3AccessPointVpcConfiguration | undefined; 
    private __vpcConfigurationOutput = new S3AccessPointVpcConfigurationOutputReference(this as any, "vpc_configuration", true);
    public get vpcConfiguration() {
      return this.__vpcConfigurationOutput;
    }
    public putVpcConfiguration(value: S3AccessPointVpcConfiguration | undefined) {
      this._vpcConfiguration = value;
    }
    public resetVpcConfiguration() {
      this._vpcConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcConfigurationInput() {
      return this._vpcConfiguration
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        account_id: cdktf.stringToTerraform(this._accountId),
        bucket: cdktf.stringToTerraform(this._bucket),
        name: cdktf.stringToTerraform(this._name),
        policy: cdktf.stringToTerraform(this._policy),
        public_access_block_configuration: s3AccessPointPublicAccessBlockConfigurationToTerraform(this._publicAccessBlockConfiguration),
        vpc_configuration: s3AccessPointVpcConfigurationToTerraform(this._vpcConfiguration),
      };
    }
  }
  export interface S3AccountPublicAccessBlockConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block.html#account_id S3AccountPublicAccessBlock#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block.html#block_public_acls S3AccountPublicAccessBlock#block_public_acls}
    */
    readonly blockPublicAcls?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block.html#block_public_policy S3AccountPublicAccessBlock#block_public_policy}
    */
    readonly blockPublicPolicy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block.html#ignore_public_acls S3AccountPublicAccessBlock#ignore_public_acls}
    */
    readonly ignorePublicAcls?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block.html#restrict_public_buckets S3AccountPublicAccessBlock#restrict_public_buckets}
    */
    readonly restrictPublicBuckets?: boolean | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block.html aws_s3_account_public_access_block}
  */
  export class S3AccountPublicAccessBlock extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_s3_account_public_access_block";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block.html aws_s3_account_public_access_block} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3AccountPublicAccessBlockConfig = {}
    */
    public constructor(scope: Construct, id: string, config: S3AccountPublicAccessBlockConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_s3_account_public_access_block',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._accountId = config.accountId;
      this._blockPublicAcls = config.blockPublicAcls;
      this._blockPublicPolicy = config.blockPublicPolicy;
      this._ignorePublicAcls = config.ignorePublicAcls;
      this._restrictPublicBuckets = config.restrictPublicBuckets;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account_id - computed: true, optional: true, required: false
    private _accountId?: string | undefined; 
    public get accountId() {
      return this.getStringAttribute('account_id');
    }
    public set accountId(value: string | undefined) {
      this._accountId = value;
    }
    public resetAccountId() {
      this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdInput() {
      return this._accountId
    }

    // block_public_acls - computed: false, optional: true, required: false
    private _blockPublicAcls?: boolean | cdktf.IResolvable | undefined; 
    public get blockPublicAcls() {
      return this.getBooleanAttribute('block_public_acls') as any;
    }
    public set blockPublicAcls(value: boolean | cdktf.IResolvable | undefined) {
      this._blockPublicAcls = value;
    }
    public resetBlockPublicAcls() {
      this._blockPublicAcls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockPublicAclsInput() {
      return this._blockPublicAcls
    }

    // block_public_policy - computed: false, optional: true, required: false
    private _blockPublicPolicy?: boolean | cdktf.IResolvable | undefined; 
    public get blockPublicPolicy() {
      return this.getBooleanAttribute('block_public_policy') as any;
    }
    public set blockPublicPolicy(value: boolean | cdktf.IResolvable | undefined) {
      this._blockPublicPolicy = value;
    }
    public resetBlockPublicPolicy() {
      this._blockPublicPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockPublicPolicyInput() {
      return this._blockPublicPolicy
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ignore_public_acls - computed: false, optional: true, required: false
    private _ignorePublicAcls?: boolean | cdktf.IResolvable | undefined; 
    public get ignorePublicAcls() {
      return this.getBooleanAttribute('ignore_public_acls') as any;
    }
    public set ignorePublicAcls(value: boolean | cdktf.IResolvable | undefined) {
      this._ignorePublicAcls = value;
    }
    public resetIgnorePublicAcls() {
      this._ignorePublicAcls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ignorePublicAclsInput() {
      return this._ignorePublicAcls
    }

    // restrict_public_buckets - computed: false, optional: true, required: false
    private _restrictPublicBuckets?: boolean | cdktf.IResolvable | undefined; 
    public get restrictPublicBuckets() {
      return this.getBooleanAttribute('restrict_public_buckets') as any;
    }
    public set restrictPublicBuckets(value: boolean | cdktf.IResolvable | undefined) {
      this._restrictPublicBuckets = value;
    }
    public resetRestrictPublicBuckets() {
      this._restrictPublicBuckets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get restrictPublicBucketsInput() {
      return this._restrictPublicBuckets
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        account_id: cdktf.stringToTerraform(this._accountId),
        block_public_acls: cdktf.booleanToTerraform(this._blockPublicAcls),
        block_public_policy: cdktf.booleanToTerraform(this._blockPublicPolicy),
        ignore_public_acls: cdktf.booleanToTerraform(this._ignorePublicAcls),
        restrict_public_buckets: cdktf.booleanToTerraform(this._restrictPublicBuckets),
      };
    }
  }
  export interface S3BucketConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#acceleration_status S3Bucket#acceleration_status}
    */
    readonly accelerationStatus?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#acl S3Bucket#acl}
    */
    readonly acl?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#bucket S3Bucket#bucket}
    */
    readonly bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#bucket_prefix S3Bucket#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#force_destroy S3Bucket#force_destroy}
    */
    readonly forceDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#hosted_zone_id S3Bucket#hosted_zone_id}
    */
    readonly hostedZoneId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#policy S3Bucket#policy}
    */
    readonly policy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#request_payer S3Bucket#request_payer}
    */
    readonly requestPayer?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#tags S3Bucket#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#tags_all S3Bucket#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#website_domain S3Bucket#website_domain}
    */
    readonly websiteDomain?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#website_endpoint S3Bucket#website_endpoint}
    */
    readonly websiteEndpoint?: string;
    /**
    * cors_rule block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#cors_rule S3Bucket#cors_rule}
    */
    readonly corsRule?: S3BucketCorsRule[];
    /**
    * grant block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#grant S3Bucket#grant}
    */
    readonly grant?: S3BucketGrant[];
    /**
    * lifecycle_rule block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#lifecycle_rule S3Bucket#lifecycle_rule}
    */
    readonly lifecycleRule?: S3BucketLifecycleRule[];
    /**
    * logging block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#logging S3Bucket#logging}
    */
    readonly logging?: S3BucketLogging[];
    /**
    * object_lock_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#object_lock_configuration S3Bucket#object_lock_configuration}
    */
    readonly objectLockConfiguration?: S3BucketObjectLockConfiguration;
    /**
    * replication_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#replication_configuration S3Bucket#replication_configuration}
    */
    readonly replicationConfiguration?: S3BucketReplicationConfiguration;
    /**
    * server_side_encryption_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#server_side_encryption_configuration S3Bucket#server_side_encryption_configuration}
    */
    readonly serverSideEncryptionConfiguration?: S3BucketServerSideEncryptionConfiguration;
    /**
    * versioning block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#versioning S3Bucket#versioning}
    */
    readonly versioning?: S3BucketVersioning;
    /**
    * website block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#website S3Bucket#website}
    */
    readonly website?: S3BucketWebsite;
  }
  export interface S3BucketCorsRule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#allowed_headers S3Bucket#allowed_headers}
    */
    readonly allowedHeaders?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#allowed_methods S3Bucket#allowed_methods}
    */
    readonly allowedMethods: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#allowed_origins S3Bucket#allowed_origins}
    */
    readonly allowedOrigins: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#expose_headers S3Bucket#expose_headers}
    */
    readonly exposeHeaders?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#max_age_seconds S3Bucket#max_age_seconds}
    */
    readonly maxAgeSeconds?: number;
  }

  function s3BucketCorsRuleToTerraform(struct?: S3BucketCorsRule): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      allowed_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedHeaders),
      allowed_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedMethods),
      allowed_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedOrigins),
      expose_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exposeHeaders),
      max_age_seconds: cdktf.numberToTerraform(struct!.maxAgeSeconds),
    }
  }

  export interface S3BucketGrant {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#id S3Bucket#id}
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#permissions S3Bucket#permissions}
    */
    readonly permissions: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#type S3Bucket#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#uri S3Bucket#uri}
    */
    readonly uri?: string;
  }

  function s3BucketGrantToTerraform(struct?: S3BucketGrant): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      id: cdktf.stringToTerraform(struct!.id),
      permissions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.permissions),
      type: cdktf.stringToTerraform(struct!.type),
      uri: cdktf.stringToTerraform(struct!.uri),
    }
  }

  export interface S3BucketLifecycleRuleExpiration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#date S3Bucket#date}
    */
    readonly date?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#days S3Bucket#days}
    */
    readonly days?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#expired_object_delete_marker S3Bucket#expired_object_delete_marker}
    */
    readonly expiredObjectDeleteMarker?: boolean | cdktf.IResolvable;
  }

  function s3BucketLifecycleRuleExpirationToTerraform(struct?: S3BucketLifecycleRuleExpirationOutputReference | S3BucketLifecycleRuleExpiration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      date: cdktf.stringToTerraform(struct!.date),
      days: cdktf.numberToTerraform(struct!.days),
      expired_object_delete_marker: cdktf.booleanToTerraform(struct!.expiredObjectDeleteMarker),
    }
  }

  export class S3BucketLifecycleRuleExpirationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // date - computed: false, optional: true, required: false
    private _date?: string | undefined; 
    public get date() {
      return this.getStringAttribute('date');
    }
    public set date(value: string | undefined) {
      this._date = value;
    }
    public resetDate() {
      this._date = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dateInput() {
      return this._date
    }

    // days - computed: false, optional: true, required: false
    private _days?: number | undefined; 
    public get days() {
      return this.getNumberAttribute('days');
    }
    public set days(value: number | undefined) {
      this._days = value;
    }
    public resetDays() {
      this._days = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get daysInput() {
      return this._days
    }

    // expired_object_delete_marker - computed: false, optional: true, required: false
    private _expiredObjectDeleteMarker?: boolean | cdktf.IResolvable | undefined; 
    public get expiredObjectDeleteMarker() {
      return this.getBooleanAttribute('expired_object_delete_marker') as any;
    }
    public set expiredObjectDeleteMarker(value: boolean | cdktf.IResolvable | undefined) {
      this._expiredObjectDeleteMarker = value;
    }
    public resetExpiredObjectDeleteMarker() {
      this._expiredObjectDeleteMarker = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expiredObjectDeleteMarkerInput() {
      return this._expiredObjectDeleteMarker
    }
  }
  export interface S3BucketLifecycleRuleNoncurrentVersionExpiration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#days S3Bucket#days}
    */
    readonly days?: number;
  }

  function s3BucketLifecycleRuleNoncurrentVersionExpirationToTerraform(struct?: S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference | S3BucketLifecycleRuleNoncurrentVersionExpiration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      days: cdktf.numberToTerraform(struct!.days),
    }
  }

  export class S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // days - computed: false, optional: true, required: false
    private _days?: number | undefined; 
    public get days() {
      return this.getNumberAttribute('days');
    }
    public set days(value: number | undefined) {
      this._days = value;
    }
    public resetDays() {
      this._days = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get daysInput() {
      return this._days
    }
  }
  export interface S3BucketLifecycleRuleNoncurrentVersionTransition {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#days S3Bucket#days}
    */
    readonly days?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#storage_class S3Bucket#storage_class}
    */
    readonly storageClass: string;
  }

  function s3BucketLifecycleRuleNoncurrentVersionTransitionToTerraform(struct?: S3BucketLifecycleRuleNoncurrentVersionTransition): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      days: cdktf.numberToTerraform(struct!.days),
      storage_class: cdktf.stringToTerraform(struct!.storageClass),
    }
  }

  export interface S3BucketLifecycleRuleTransition {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#date S3Bucket#date}
    */
    readonly date?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#days S3Bucket#days}
    */
    readonly days?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#storage_class S3Bucket#storage_class}
    */
    readonly storageClass: string;
  }

  function s3BucketLifecycleRuleTransitionToTerraform(struct?: S3BucketLifecycleRuleTransition): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      date: cdktf.stringToTerraform(struct!.date),
      days: cdktf.numberToTerraform(struct!.days),
      storage_class: cdktf.stringToTerraform(struct!.storageClass),
    }
  }

  export interface S3BucketLifecycleRule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#abort_incomplete_multipart_upload_days S3Bucket#abort_incomplete_multipart_upload_days}
    */
    readonly abortIncompleteMultipartUploadDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#enabled S3Bucket#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#id S3Bucket#id}
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#prefix S3Bucket#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#tags S3Bucket#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * expiration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#expiration S3Bucket#expiration}
    */
    readonly expiration?: S3BucketLifecycleRuleExpiration;
    /**
    * noncurrent_version_expiration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#noncurrent_version_expiration S3Bucket#noncurrent_version_expiration}
    */
    readonly noncurrentVersionExpiration?: S3BucketLifecycleRuleNoncurrentVersionExpiration;
    /**
    * noncurrent_version_transition block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#noncurrent_version_transition S3Bucket#noncurrent_version_transition}
    */
    readonly noncurrentVersionTransition?: S3BucketLifecycleRuleNoncurrentVersionTransition[];
    /**
    * transition block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#transition S3Bucket#transition}
    */
    readonly transition?: S3BucketLifecycleRuleTransition[];
  }

  function s3BucketLifecycleRuleToTerraform(struct?: S3BucketLifecycleRule): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      abort_incomplete_multipart_upload_days: cdktf.numberToTerraform(struct!.abortIncompleteMultipartUploadDays),
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      prefix: cdktf.stringToTerraform(struct!.prefix),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
      expiration: s3BucketLifecycleRuleExpirationToTerraform(struct!.expiration),
      noncurrent_version_expiration: s3BucketLifecycleRuleNoncurrentVersionExpirationToTerraform(struct!.noncurrentVersionExpiration),
      noncurrent_version_transition: cdktf.listMapper(s3BucketLifecycleRuleNoncurrentVersionTransitionToTerraform)(struct!.noncurrentVersionTransition),
      transition: cdktf.listMapper(s3BucketLifecycleRuleTransitionToTerraform)(struct!.transition),
    }
  }

  export interface S3BucketLogging {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#target_bucket S3Bucket#target_bucket}
    */
    readonly targetBucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#target_prefix S3Bucket#target_prefix}
    */
    readonly targetPrefix?: string;
  }

  function s3BucketLoggingToTerraform(struct?: S3BucketLogging): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      target_bucket: cdktf.stringToTerraform(struct!.targetBucket),
      target_prefix: cdktf.stringToTerraform(struct!.targetPrefix),
    }
  }

  export interface S3BucketObjectLockConfigurationRuleDefaultRetention {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#days S3Bucket#days}
    */
    readonly days?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#mode S3Bucket#mode}
    */
    readonly mode: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#years S3Bucket#years}
    */
    readonly years?: number;
  }

  function s3BucketObjectLockConfigurationRuleDefaultRetentionToTerraform(struct?: S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference | S3BucketObjectLockConfigurationRuleDefaultRetention): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      days: cdktf.numberToTerraform(struct!.days),
      mode: cdktf.stringToTerraform(struct!.mode),
      years: cdktf.numberToTerraform(struct!.years),
    }
  }

  export class S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // days - computed: false, optional: true, required: false
    private _days?: number | undefined; 
    public get days() {
      return this.getNumberAttribute('days');
    }
    public set days(value: number | undefined) {
      this._days = value;
    }
    public resetDays() {
      this._days = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get daysInput() {
      return this._days
    }

    // mode - computed: false, optional: false, required: true
    private _mode?: string; 
    public get mode() {
      return this.getStringAttribute('mode');
    }
    public set mode(value: string) {
      this._mode = value;
    }
    // Temporarily expose input value. Use with caution.
    public get modeInput() {
      return this._mode
    }

    // years - computed: false, optional: true, required: false
    private _years?: number | undefined; 
    public get years() {
      return this.getNumberAttribute('years');
    }
    public set years(value: number | undefined) {
      this._years = value;
    }
    public resetYears() {
      this._years = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get yearsInput() {
      return this._years
    }
  }
  export interface S3BucketObjectLockConfigurationRule {
    /**
    * default_retention block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#default_retention S3Bucket#default_retention}
    */
    readonly defaultRetention: S3BucketObjectLockConfigurationRuleDefaultRetention;
  }

  function s3BucketObjectLockConfigurationRuleToTerraform(struct?: S3BucketObjectLockConfigurationRuleOutputReference | S3BucketObjectLockConfigurationRule): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      default_retention: s3BucketObjectLockConfigurationRuleDefaultRetentionToTerraform(struct!.defaultRetention),
    }
  }

  export class S3BucketObjectLockConfigurationRuleOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // default_retention - computed: false, optional: false, required: true
    private _defaultRetention?: S3BucketObjectLockConfigurationRuleDefaultRetention; 
    private __defaultRetentionOutput = new S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference(this as any, "default_retention", true);
    public get defaultRetention() {
      return this.__defaultRetentionOutput;
    }
    public putDefaultRetention(value: S3BucketObjectLockConfigurationRuleDefaultRetention) {
      this._defaultRetention = value;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultRetentionInput() {
      return this._defaultRetention
    }
  }
  export interface S3BucketObjectLockConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#object_lock_enabled S3Bucket#object_lock_enabled}
    */
    readonly objectLockEnabled: string;
    /**
    * rule block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#rule S3Bucket#rule}
    */
    readonly rule?: S3BucketObjectLockConfigurationRule;
  }

  function s3BucketObjectLockConfigurationToTerraform(struct?: S3BucketObjectLockConfigurationOutputReference | S3BucketObjectLockConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      object_lock_enabled: cdktf.stringToTerraform(struct!.objectLockEnabled),
      rule: s3BucketObjectLockConfigurationRuleToTerraform(struct!.rule),
    }
  }

  export class S3BucketObjectLockConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // object_lock_enabled - computed: false, optional: false, required: true
    private _objectLockEnabled?: string; 
    public get objectLockEnabled() {
      return this.getStringAttribute('object_lock_enabled');
    }
    public set objectLockEnabled(value: string) {
      this._objectLockEnabled = value;
    }
    // Temporarily expose input value. Use with caution.
    public get objectLockEnabledInput() {
      return this._objectLockEnabled
    }

    // rule - computed: false, optional: true, required: false
    private _rule?: S3BucketObjectLockConfigurationRule | undefined; 
    private __ruleOutput = new S3BucketObjectLockConfigurationRuleOutputReference(this as any, "rule", true);
    public get rule() {
      return this.__ruleOutput;
    }
    public putRule(value: S3BucketObjectLockConfigurationRule | undefined) {
      this._rule = value;
    }
    public resetRule() {
      this._rule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleInput() {
      return this._rule
    }
  }
  export interface S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#owner S3Bucket#owner}
    */
    readonly owner: string;
  }

  function s3BucketReplicationConfigurationRulesDestinationAccessControlTranslationToTerraform(struct?: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference | S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      owner: cdktf.stringToTerraform(struct!.owner),
    }
  }

  export class S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // owner - computed: false, optional: false, required: true
    private _owner?: string; 
    public get owner() {
      return this.getStringAttribute('owner');
    }
    public set owner(value: string) {
      this._owner = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerInput() {
      return this._owner
    }
  }
  export interface S3BucketReplicationConfigurationRulesDestination {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#account_id S3Bucket#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#bucket S3Bucket#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#replica_kms_key_id S3Bucket#replica_kms_key_id}
    */
    readonly replicaKmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#storage_class S3Bucket#storage_class}
    */
    readonly storageClass?: string;
    /**
    * access_control_translation block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#access_control_translation S3Bucket#access_control_translation}
    */
    readonly accessControlTranslation?: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation;
  }

  function s3BucketReplicationConfigurationRulesDestinationToTerraform(struct?: S3BucketReplicationConfigurationRulesDestinationOutputReference | S3BucketReplicationConfigurationRulesDestination): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      account_id: cdktf.stringToTerraform(struct!.accountId),
      bucket: cdktf.stringToTerraform(struct!.bucket),
      replica_kms_key_id: cdktf.stringToTerraform(struct!.replicaKmsKeyId),
      storage_class: cdktf.stringToTerraform(struct!.storageClass),
      access_control_translation: s3BucketReplicationConfigurationRulesDestinationAccessControlTranslationToTerraform(struct!.accessControlTranslation),
    }
  }

  export class S3BucketReplicationConfigurationRulesDestinationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // account_id - computed: false, optional: true, required: false
    private _accountId?: string | undefined; 
    public get accountId() {
      return this.getStringAttribute('account_id');
    }
    public set accountId(value: string | undefined) {
      this._accountId = value;
    }
    public resetAccountId() {
      this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdInput() {
      return this._accountId
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

    // replica_kms_key_id - computed: false, optional: true, required: false
    private _replicaKmsKeyId?: string | undefined; 
    public get replicaKmsKeyId() {
      return this.getStringAttribute('replica_kms_key_id');
    }
    public set replicaKmsKeyId(value: string | undefined) {
      this._replicaKmsKeyId = value;
    }
    public resetReplicaKmsKeyId() {
      this._replicaKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicaKmsKeyIdInput() {
      return this._replicaKmsKeyId
    }

    // storage_class - computed: false, optional: true, required: false
    private _storageClass?: string | undefined; 
    public get storageClass() {
      return this.getStringAttribute('storage_class');
    }
    public set storageClass(value: string | undefined) {
      this._storageClass = value;
    }
    public resetStorageClass() {
      this._storageClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageClassInput() {
      return this._storageClass
    }

    // access_control_translation - computed: false, optional: true, required: false
    private _accessControlTranslation?: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation | undefined; 
    private __accessControlTranslationOutput = new S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference(this as any, "access_control_translation", true);
    public get accessControlTranslation() {
      return this.__accessControlTranslationOutput;
    }
    public putAccessControlTranslation(value: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation | undefined) {
      this._accessControlTranslation = value;
    }
    public resetAccessControlTranslation() {
      this._accessControlTranslation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessControlTranslationInput() {
      return this._accessControlTranslation
    }
  }
  export interface S3BucketReplicationConfigurationRulesFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#prefix S3Bucket#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#tags S3Bucket#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }

  function s3BucketReplicationConfigurationRulesFilterToTerraform(struct?: S3BucketReplicationConfigurationRulesFilterOutputReference | S3BucketReplicationConfigurationRulesFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      prefix: cdktf.stringToTerraform(struct!.prefix),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
    }
  }

  export class S3BucketReplicationConfigurationRulesFilterOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
  }
  export interface S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#enabled S3Bucket#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
  }

  function s3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsToTerraform(struct?: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference | S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
    }
  }

  export class S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enabled - computed: false, optional: false, required: true
    private _enabled?: boolean | cdktf.IResolvable; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable) {
      this._enabled = value;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }
  }
  export interface S3BucketReplicationConfigurationRulesSourceSelectionCriteria {
    /**
    * sse_kms_encrypted_objects block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#sse_kms_encrypted_objects S3Bucket#sse_kms_encrypted_objects}
    */
    readonly sseKmsEncryptedObjects?: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects;
  }

  function s3BucketReplicationConfigurationRulesSourceSelectionCriteriaToTerraform(struct?: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference | S3BucketReplicationConfigurationRulesSourceSelectionCriteria): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      sse_kms_encrypted_objects: s3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsToTerraform(struct!.sseKmsEncryptedObjects),
    }
  }

  export class S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // sse_kms_encrypted_objects - computed: false, optional: true, required: false
    private _sseKmsEncryptedObjects?: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects | undefined; 
    private __sseKmsEncryptedObjectsOutput = new S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference(this as any, "sse_kms_encrypted_objects", true);
    public get sseKmsEncryptedObjects() {
      return this.__sseKmsEncryptedObjectsOutput;
    }
    public putSseKmsEncryptedObjects(value: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects | undefined) {
      this._sseKmsEncryptedObjects = value;
    }
    public resetSseKmsEncryptedObjects() {
      this._sseKmsEncryptedObjects = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sseKmsEncryptedObjectsInput() {
      return this._sseKmsEncryptedObjects
    }
  }
  export interface S3BucketReplicationConfigurationRules {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#delete_marker_replication_status S3Bucket#delete_marker_replication_status}
    */
    readonly deleteMarkerReplicationStatus?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#id S3Bucket#id}
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#prefix S3Bucket#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#priority S3Bucket#priority}
    */
    readonly priority?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#status S3Bucket#status}
    */
    readonly status: string;
    /**
    * destination block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#destination S3Bucket#destination}
    */
    readonly destination: S3BucketReplicationConfigurationRulesDestination;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#filter S3Bucket#filter}
    */
    readonly filter?: S3BucketReplicationConfigurationRulesFilter;
    /**
    * source_selection_criteria block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#source_selection_criteria S3Bucket#source_selection_criteria}
    */
    readonly sourceSelectionCriteria?: S3BucketReplicationConfigurationRulesSourceSelectionCriteria;
  }

  function s3BucketReplicationConfigurationRulesToTerraform(struct?: S3BucketReplicationConfigurationRules): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      delete_marker_replication_status: cdktf.stringToTerraform(struct!.deleteMarkerReplicationStatus),
      id: cdktf.stringToTerraform(struct!.id),
      prefix: cdktf.stringToTerraform(struct!.prefix),
      priority: cdktf.numberToTerraform(struct!.priority),
      status: cdktf.stringToTerraform(struct!.status),
      destination: s3BucketReplicationConfigurationRulesDestinationToTerraform(struct!.destination),
      filter: s3BucketReplicationConfigurationRulesFilterToTerraform(struct!.filter),
      source_selection_criteria: s3BucketReplicationConfigurationRulesSourceSelectionCriteriaToTerraform(struct!.sourceSelectionCriteria),
    }
  }

  export interface S3BucketReplicationConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#role S3Bucket#role}
    */
    readonly role: string;
    /**
    * rules block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#rules S3Bucket#rules}
    */
    readonly rules: S3BucketReplicationConfigurationRules[];
  }

  function s3BucketReplicationConfigurationToTerraform(struct?: S3BucketReplicationConfigurationOutputReference | S3BucketReplicationConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      role: cdktf.stringToTerraform(struct!.role),
      rules: cdktf.listMapper(s3BucketReplicationConfigurationRulesToTerraform)(struct!.rules),
    }
  }

  export class S3BucketReplicationConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // role - computed: false, optional: false, required: true
    private _role?: string; 
    public get role() {
      return this.getStringAttribute('role');
    }
    public set role(value: string) {
      this._role = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleInput() {
      return this._role
    }

    // rules - computed: false, optional: false, required: true
    private _rules?: S3BucketReplicationConfigurationRules[]; 
    public get rules() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('rules') as any;
    }
    public set rules(value: S3BucketReplicationConfigurationRules[]) {
      this._rules = value;
    }
    // Temporarily expose input value. Use with caution.
    public get rulesInput() {
      return this._rules
    }
  }
  export interface S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#kms_master_key_id S3Bucket#kms_master_key_id}
    */
    readonly kmsMasterKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#sse_algorithm S3Bucket#sse_algorithm}
    */
    readonly sseAlgorithm: string;
  }

  function s3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultToTerraform(struct?: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference | S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      kms_master_key_id: cdktf.stringToTerraform(struct!.kmsMasterKeyId),
      sse_algorithm: cdktf.stringToTerraform(struct!.sseAlgorithm),
    }
  }

  export class S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // kms_master_key_id - computed: false, optional: true, required: false
    private _kmsMasterKeyId?: string | undefined; 
    public get kmsMasterKeyId() {
      return this.getStringAttribute('kms_master_key_id');
    }
    public set kmsMasterKeyId(value: string | undefined) {
      this._kmsMasterKeyId = value;
    }
    public resetKmsMasterKeyId() {
      this._kmsMasterKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsMasterKeyIdInput() {
      return this._kmsMasterKeyId
    }

    // sse_algorithm - computed: false, optional: false, required: true
    private _sseAlgorithm?: string; 
    public get sseAlgorithm() {
      return this.getStringAttribute('sse_algorithm');
    }
    public set sseAlgorithm(value: string) {
      this._sseAlgorithm = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sseAlgorithmInput() {
      return this._sseAlgorithm
    }
  }
  export interface S3BucketServerSideEncryptionConfigurationRule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#bucket_key_enabled S3Bucket#bucket_key_enabled}
    */
    readonly bucketKeyEnabled?: boolean | cdktf.IResolvable;
    /**
    * apply_server_side_encryption_by_default block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#apply_server_side_encryption_by_default S3Bucket#apply_server_side_encryption_by_default}
    */
    readonly applyServerSideEncryptionByDefault: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault;
  }

  function s3BucketServerSideEncryptionConfigurationRuleToTerraform(struct?: S3BucketServerSideEncryptionConfigurationRuleOutputReference | S3BucketServerSideEncryptionConfigurationRule): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      bucket_key_enabled: cdktf.booleanToTerraform(struct!.bucketKeyEnabled),
      apply_server_side_encryption_by_default: s3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultToTerraform(struct!.applyServerSideEncryptionByDefault),
    }
  }

  export class S3BucketServerSideEncryptionConfigurationRuleOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // bucket_key_enabled - computed: false, optional: true, required: false
    private _bucketKeyEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get bucketKeyEnabled() {
      return this.getBooleanAttribute('bucket_key_enabled') as any;
    }
    public set bucketKeyEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._bucketKeyEnabled = value;
    }
    public resetBucketKeyEnabled() {
      this._bucketKeyEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketKeyEnabledInput() {
      return this._bucketKeyEnabled
    }

    // apply_server_side_encryption_by_default - computed: false, optional: false, required: true
    private _applyServerSideEncryptionByDefault?: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault; 
    private __applyServerSideEncryptionByDefaultOutput = new S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference(this as any, "apply_server_side_encryption_by_default", true);
    public get applyServerSideEncryptionByDefault() {
      return this.__applyServerSideEncryptionByDefaultOutput;
    }
    public putApplyServerSideEncryptionByDefault(value: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault) {
      this._applyServerSideEncryptionByDefault = value;
    }
    // Temporarily expose input value. Use with caution.
    public get applyServerSideEncryptionByDefaultInput() {
      return this._applyServerSideEncryptionByDefault
    }
  }
  export interface S3BucketServerSideEncryptionConfiguration {
    /**
    * rule block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#rule S3Bucket#rule}
    */
    readonly rule: S3BucketServerSideEncryptionConfigurationRule;
  }

  function s3BucketServerSideEncryptionConfigurationToTerraform(struct?: S3BucketServerSideEncryptionConfigurationOutputReference | S3BucketServerSideEncryptionConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      rule: s3BucketServerSideEncryptionConfigurationRuleToTerraform(struct!.rule),
    }
  }

  export class S3BucketServerSideEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // rule - computed: false, optional: false, required: true
    private _rule?: S3BucketServerSideEncryptionConfigurationRule; 
    private __ruleOutput = new S3BucketServerSideEncryptionConfigurationRuleOutputReference(this as any, "rule", true);
    public get rule() {
      return this.__ruleOutput;
    }
    public putRule(value: S3BucketServerSideEncryptionConfigurationRule) {
      this._rule = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleInput() {
      return this._rule
    }
  }
  export interface S3BucketVersioning {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#enabled S3Bucket#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#mfa_delete S3Bucket#mfa_delete}
    */
    readonly mfaDelete?: boolean | cdktf.IResolvable;
  }

  function s3BucketVersioningToTerraform(struct?: S3BucketVersioningOutputReference | S3BucketVersioning): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      mfa_delete: cdktf.booleanToTerraform(struct!.mfaDelete),
    }
  }

  export class S3BucketVersioningOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // mfa_delete - computed: false, optional: true, required: false
    private _mfaDelete?: boolean | cdktf.IResolvable | undefined; 
    public get mfaDelete() {
      return this.getBooleanAttribute('mfa_delete') as any;
    }
    public set mfaDelete(value: boolean | cdktf.IResolvable | undefined) {
      this._mfaDelete = value;
    }
    public resetMfaDelete() {
      this._mfaDelete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mfaDeleteInput() {
      return this._mfaDelete
    }
  }
  export interface S3BucketWebsite {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#error_document S3Bucket#error_document}
    */
    readonly errorDocument?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#index_document S3Bucket#index_document}
    */
    readonly indexDocument?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#redirect_all_requests_to S3Bucket#redirect_all_requests_to}
    */
    readonly redirectAllRequestsTo?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#routing_rules S3Bucket#routing_rules}
    */
    readonly routingRules?: string;
  }

  function s3BucketWebsiteToTerraform(struct?: S3BucketWebsiteOutputReference | S3BucketWebsite): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      error_document: cdktf.stringToTerraform(struct!.errorDocument),
      index_document: cdktf.stringToTerraform(struct!.indexDocument),
      redirect_all_requests_to: cdktf.stringToTerraform(struct!.redirectAllRequestsTo),
      routing_rules: cdktf.stringToTerraform(struct!.routingRules),
    }
  }

  export class S3BucketWebsiteOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // error_document - computed: false, optional: true, required: false
    private _errorDocument?: string | undefined; 
    public get errorDocument() {
      return this.getStringAttribute('error_document');
    }
    public set errorDocument(value: string | undefined) {
      this._errorDocument = value;
    }
    public resetErrorDocument() {
      this._errorDocument = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get errorDocumentInput() {
      return this._errorDocument
    }

    // index_document - computed: false, optional: true, required: false
    private _indexDocument?: string | undefined; 
    public get indexDocument() {
      return this.getStringAttribute('index_document');
    }
    public set indexDocument(value: string | undefined) {
      this._indexDocument = value;
    }
    public resetIndexDocument() {
      this._indexDocument = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get indexDocumentInput() {
      return this._indexDocument
    }

    // redirect_all_requests_to - computed: false, optional: true, required: false
    private _redirectAllRequestsTo?: string | undefined; 
    public get redirectAllRequestsTo() {
      return this.getStringAttribute('redirect_all_requests_to');
    }
    public set redirectAllRequestsTo(value: string | undefined) {
      this._redirectAllRequestsTo = value;
    }
    public resetRedirectAllRequestsTo() {
      this._redirectAllRequestsTo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redirectAllRequestsToInput() {
      return this._redirectAllRequestsTo
    }

    // routing_rules - computed: false, optional: true, required: false
    private _routingRules?: string | undefined; 
    public get routingRules() {
      return this.getStringAttribute('routing_rules');
    }
    public set routingRules(value: string | undefined) {
      this._routingRules = value;
    }
    public resetRoutingRules() {
      this._routingRules = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routingRulesInput() {
      return this._routingRules
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html aws_s3_bucket}
  */
  export class S3Bucket extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_s3_bucket";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html aws_s3_bucket} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketConfig = {}
    */
    public constructor(scope: Construct, id: string, config: S3BucketConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_s3_bucket',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._accelerationStatus = config.accelerationStatus;
      this._acl = config.acl;
      this._bucket = config.bucket;
      this._bucketPrefix = config.bucketPrefix;
      this._forceDestroy = config.forceDestroy;
      this._hostedZoneId = config.hostedZoneId;
      this._policy = config.policy;
      this._requestPayer = config.requestPayer;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._websiteDomain = config.websiteDomain;
      this._websiteEndpoint = config.websiteEndpoint;
      this._corsRule = config.corsRule;
      this._grant = config.grant;
      this._lifecycleRule = config.lifecycleRule;
      this._logging = config.logging;
      this._objectLockConfiguration = config.objectLockConfiguration;
      this._replicationConfiguration = config.replicationConfiguration;
      this._serverSideEncryptionConfiguration = config.serverSideEncryptionConfiguration;
      this._versioning = config.versioning;
      this._website = config.website;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // acceleration_status - computed: true, optional: true, required: false
    private _accelerationStatus?: string | undefined; 
    public get accelerationStatus() {
      return this.getStringAttribute('acceleration_status');
    }
    public set accelerationStatus(value: string | undefined) {
      this._accelerationStatus = value;
    }
    public resetAccelerationStatus() {
      this._accelerationStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accelerationStatusInput() {
      return this._accelerationStatus
    }

    // acl - computed: false, optional: true, required: false
    private _acl?: string | undefined; 
    public get acl() {
      return this.getStringAttribute('acl');
    }
    public set acl(value: string | undefined) {
      this._acl = value;
    }
    public resetAcl() {
      this._acl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aclInput() {
      return this._acl
    }

    // arn - computed: true, optional: true, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // bucket - computed: true, optional: true, required: false
    private _bucket?: string | undefined; 
    public get bucket() {
      return this.getStringAttribute('bucket');
    }
    public set bucket(value: string | undefined) {
      this._bucket = value;
    }
    public resetBucket() {
      this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
      return this._bucket
    }

    // bucket_domain_name - computed: true, optional: false, required: false
    public get bucketDomainName() {
      return this.getStringAttribute('bucket_domain_name');
    }

    // bucket_prefix - computed: false, optional: true, required: false
    private _bucketPrefix?: string | undefined; 
    public get bucketPrefix() {
      return this.getStringAttribute('bucket_prefix');
    }
    public set bucketPrefix(value: string | undefined) {
      this._bucketPrefix = value;
    }
    public resetBucketPrefix() {
      this._bucketPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketPrefixInput() {
      return this._bucketPrefix
    }

    // bucket_regional_domain_name - computed: true, optional: false, required: false
    public get bucketRegionalDomainName() {
      return this.getStringAttribute('bucket_regional_domain_name');
    }

    // force_destroy - computed: false, optional: true, required: false
    private _forceDestroy?: boolean | cdktf.IResolvable | undefined; 
    public get forceDestroy() {
      return this.getBooleanAttribute('force_destroy') as any;
    }
    public set forceDestroy(value: boolean | cdktf.IResolvable | undefined) {
      this._forceDestroy = value;
    }
    public resetForceDestroy() {
      this._forceDestroy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forceDestroyInput() {
      return this._forceDestroy
    }

    // hosted_zone_id - computed: true, optional: true, required: false
    private _hostedZoneId?: string | undefined; 
    public get hostedZoneId() {
      return this.getStringAttribute('hosted_zone_id');
    }
    public set hostedZoneId(value: string | undefined) {
      this._hostedZoneId = value;
    }
    public resetHostedZoneId() {
      this._hostedZoneId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostedZoneIdInput() {
      return this._hostedZoneId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // policy - computed: false, optional: true, required: false
    private _policy?: string | undefined; 
    public get policy() {
      return this.getStringAttribute('policy');
    }
    public set policy(value: string | undefined) {
      this._policy = value;
    }
    public resetPolicy() {
      this._policy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
      return this._policy
    }

    // region - computed: true, optional: false, required: false
    public get region() {
      return this.getStringAttribute('region');
    }

    // request_payer - computed: true, optional: true, required: false
    private _requestPayer?: string | undefined; 
    public get requestPayer() {
      return this.getStringAttribute('request_payer');
    }
    public set requestPayer(value: string | undefined) {
      this._requestPayer = value;
    }
    public resetRequestPayer() {
      this._requestPayer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestPayerInput() {
      return this._requestPayer
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

    // website_domain - computed: true, optional: true, required: false
    private _websiteDomain?: string | undefined; 
    public get websiteDomain() {
      return this.getStringAttribute('website_domain');
    }
    public set websiteDomain(value: string | undefined) {
      this._websiteDomain = value;
    }
    public resetWebsiteDomain() {
      this._websiteDomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get websiteDomainInput() {
      return this._websiteDomain
    }

    // website_endpoint - computed: true, optional: true, required: false
    private _websiteEndpoint?: string | undefined; 
    public get websiteEndpoint() {
      return this.getStringAttribute('website_endpoint');
    }
    public set websiteEndpoint(value: string | undefined) {
      this._websiteEndpoint = value;
    }
    public resetWebsiteEndpoint() {
      this._websiteEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get websiteEndpointInput() {
      return this._websiteEndpoint
    }

    // cors_rule - computed: false, optional: true, required: false
    private _corsRule?: S3BucketCorsRule[] | undefined; 
    public get corsRule() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('cors_rule') as any;
    }
    public set corsRule(value: S3BucketCorsRule[] | undefined) {
      this._corsRule = value;
    }
    public resetCorsRule() {
      this._corsRule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get corsRuleInput() {
      return this._corsRule
    }

    // grant - computed: false, optional: true, required: false
    private _grant?: S3BucketGrant[] | undefined; 
    public get grant() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('grant') as any;
    }
    public set grant(value: S3BucketGrant[] | undefined) {
      this._grant = value;
    }
    public resetGrant() {
      this._grant = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get grantInput() {
      return this._grant
    }

    // lifecycle_rule - computed: false, optional: true, required: false
    private _lifecycleRule?: S3BucketLifecycleRule[] | undefined; 
    public get lifecycleRule() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('lifecycle_rule') as any;
    }
    public set lifecycleRule(value: S3BucketLifecycleRule[] | undefined) {
      this._lifecycleRule = value;
    }
    public resetLifecycleRule() {
      this._lifecycleRule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleRuleInput() {
      return this._lifecycleRule
    }

    // logging - computed: false, optional: true, required: false
    private _logging?: S3BucketLogging[] | undefined; 
    public get logging() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('logging') as any;
    }
    public set logging(value: S3BucketLogging[] | undefined) {
      this._logging = value;
    }
    public resetLogging() {
      this._logging = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingInput() {
      return this._logging
    }

    // object_lock_configuration - computed: false, optional: true, required: false
    private _objectLockConfiguration?: S3BucketObjectLockConfiguration | undefined; 
    private __objectLockConfigurationOutput = new S3BucketObjectLockConfigurationOutputReference(this as any, "object_lock_configuration", true);
    public get objectLockConfiguration() {
      return this.__objectLockConfigurationOutput;
    }
    public putObjectLockConfiguration(value: S3BucketObjectLockConfiguration | undefined) {
      this._objectLockConfiguration = value;
    }
    public resetObjectLockConfiguration() {
      this._objectLockConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectLockConfigurationInput() {
      return this._objectLockConfiguration
    }

    // replication_configuration - computed: false, optional: true, required: false
    private _replicationConfiguration?: S3BucketReplicationConfiguration | undefined; 
    private __replicationConfigurationOutput = new S3BucketReplicationConfigurationOutputReference(this as any, "replication_configuration", true);
    public get replicationConfiguration() {
      return this.__replicationConfigurationOutput;
    }
    public putReplicationConfiguration(value: S3BucketReplicationConfiguration | undefined) {
      this._replicationConfiguration = value;
    }
    public resetReplicationConfiguration() {
      this._replicationConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationConfigurationInput() {
      return this._replicationConfiguration
    }

    // server_side_encryption_configuration - computed: false, optional: true, required: false
    private _serverSideEncryptionConfiguration?: S3BucketServerSideEncryptionConfiguration | undefined; 
    private __serverSideEncryptionConfigurationOutput = new S3BucketServerSideEncryptionConfigurationOutputReference(this as any, "server_side_encryption_configuration", true);
    public get serverSideEncryptionConfiguration() {
      return this.__serverSideEncryptionConfigurationOutput;
    }
    public putServerSideEncryptionConfiguration(value: S3BucketServerSideEncryptionConfiguration | undefined) {
      this._serverSideEncryptionConfiguration = value;
    }
    public resetServerSideEncryptionConfiguration() {
      this._serverSideEncryptionConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverSideEncryptionConfigurationInput() {
      return this._serverSideEncryptionConfiguration
    }

    // versioning - computed: false, optional: true, required: false
    private _versioning?: S3BucketVersioning | undefined; 
    private __versioningOutput = new S3BucketVersioningOutputReference(this as any, "versioning", true);
    public get versioning() {
      return this.__versioningOutput;
    }
    public putVersioning(value: S3BucketVersioning | undefined) {
      this._versioning = value;
    }
    public resetVersioning() {
      this._versioning = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versioningInput() {
      return this._versioning
    }

    // website - computed: false, optional: true, required: false
    private _website?: S3BucketWebsite | undefined; 
    private __websiteOutput = new S3BucketWebsiteOutputReference(this as any, "website", true);
    public get website() {
      return this.__websiteOutput;
    }
    public putWebsite(value: S3BucketWebsite | undefined) {
      this._website = value;
    }
    public resetWebsite() {
      this._website = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get websiteInput() {
      return this._website
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        acceleration_status: cdktf.stringToTerraform(this._accelerationStatus),
        acl: cdktf.stringToTerraform(this._acl),
        bucket: cdktf.stringToTerraform(this._bucket),
        bucket_prefix: cdktf.stringToTerraform(this._bucketPrefix),
        force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
        hosted_zone_id: cdktf.stringToTerraform(this._hostedZoneId),
        policy: cdktf.stringToTerraform(this._policy),
        request_payer: cdktf.stringToTerraform(this._requestPayer),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        website_domain: cdktf.stringToTerraform(this._websiteDomain),
        website_endpoint: cdktf.stringToTerraform(this._websiteEndpoint),
        cors_rule: cdktf.listMapper(s3BucketCorsRuleToTerraform)(this._corsRule),
        grant: cdktf.listMapper(s3BucketGrantToTerraform)(this._grant),
        lifecycle_rule: cdktf.listMapper(s3BucketLifecycleRuleToTerraform)(this._lifecycleRule),
        logging: cdktf.listMapper(s3BucketLoggingToTerraform)(this._logging),
        object_lock_configuration: s3BucketObjectLockConfigurationToTerraform(this._objectLockConfiguration),
        replication_configuration: s3BucketReplicationConfigurationToTerraform(this._replicationConfiguration),
        server_side_encryption_configuration: s3BucketServerSideEncryptionConfigurationToTerraform(this._serverSideEncryptionConfiguration),
        versioning: s3BucketVersioningToTerraform(this._versioning),
        website: s3BucketWebsiteToTerraform(this._website),
      };
    }
  }
  export interface S3BucketAnalyticsConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#bucket S3BucketAnalyticsConfiguration#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#name S3BucketAnalyticsConfiguration#name}
    */
    readonly name: string;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#filter S3BucketAnalyticsConfiguration#filter}
    */
    readonly filter?: S3BucketAnalyticsConfigurationFilter;
    /**
    * storage_class_analysis block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#storage_class_analysis S3BucketAnalyticsConfiguration#storage_class_analysis}
    */
    readonly storageClassAnalysis?: S3BucketAnalyticsConfigurationStorageClassAnalysis;
  }
  export interface S3BucketAnalyticsConfigurationFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#prefix S3BucketAnalyticsConfiguration#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#tags S3BucketAnalyticsConfiguration#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }

  function s3BucketAnalyticsConfigurationFilterToTerraform(struct?: S3BucketAnalyticsConfigurationFilterOutputReference | S3BucketAnalyticsConfigurationFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      prefix: cdktf.stringToTerraform(struct!.prefix),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
    }
  }

  export class S3BucketAnalyticsConfigurationFilterOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
  }
  export interface S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#bucket_account_id S3BucketAnalyticsConfiguration#bucket_account_id}
    */
    readonly bucketAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#bucket_arn S3BucketAnalyticsConfiguration#bucket_arn}
    */
    readonly bucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#format S3BucketAnalyticsConfiguration#format}
    */
    readonly format?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#prefix S3BucketAnalyticsConfiguration#prefix}
    */
    readonly prefix?: string;
  }

  function s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestinationToTerraform(struct?: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestinationOutputReference | S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      bucket_account_id: cdktf.stringToTerraform(struct!.bucketAccountId),
      bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
      format: cdktf.stringToTerraform(struct!.format),
      prefix: cdktf.stringToTerraform(struct!.prefix),
    }
  }

  export class S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestinationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // bucket_account_id - computed: false, optional: true, required: false
    private _bucketAccountId?: string | undefined; 
    public get bucketAccountId() {
      return this.getStringAttribute('bucket_account_id');
    }
    public set bucketAccountId(value: string | undefined) {
      this._bucketAccountId = value;
    }
    public resetBucketAccountId() {
      this._bucketAccountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketAccountIdInput() {
      return this._bucketAccountId
    }

    // bucket_arn - computed: false, optional: false, required: true
    private _bucketArn?: string; 
    public get bucketArn() {
      return this.getStringAttribute('bucket_arn');
    }
    public set bucketArn(value: string) {
      this._bucketArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketArnInput() {
      return this._bucketArn
    }

    // format - computed: false, optional: true, required: false
    private _format?: string | undefined; 
    public get format() {
      return this.getStringAttribute('format');
    }
    public set format(value: string | undefined) {
      this._format = value;
    }
    public resetFormat() {
      this._format = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get formatInput() {
      return this._format
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
  export interface S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestination {
    /**
    * s3_bucket_destination block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#s3_bucket_destination S3BucketAnalyticsConfiguration#s3_bucket_destination}
    */
    readonly s3BucketDestination: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination;
  }

  function s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationToTerraform(struct?: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationOutputReference | S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestination): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      s3_bucket_destination: s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestinationToTerraform(struct!.s3BucketDestination),
    }
  }

  export class S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // s3_bucket_destination - computed: false, optional: false, required: true
    private _s3BucketDestination?: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination; 
    private __s3BucketDestinationOutput = new S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestinationOutputReference(this as any, "s3_bucket_destination", true);
    public get s3BucketDestination() {
      return this.__s3BucketDestinationOutput;
    }
    public putS3BucketDestination(value: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination) {
      this._s3BucketDestination = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketDestinationInput() {
      return this._s3BucketDestination
    }
  }
  export interface S3BucketAnalyticsConfigurationStorageClassAnalysisDataExport {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#output_schema_version S3BucketAnalyticsConfiguration#output_schema_version}
    */
    readonly outputSchemaVersion?: string;
    /**
    * destination block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#destination S3BucketAnalyticsConfiguration#destination}
    */
    readonly destination: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestination;
  }

  function s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportToTerraform(struct?: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportOutputReference | S3BucketAnalyticsConfigurationStorageClassAnalysisDataExport): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      output_schema_version: cdktf.stringToTerraform(struct!.outputSchemaVersion),
      destination: s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationToTerraform(struct!.destination),
    }
  }

  export class S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // output_schema_version - computed: false, optional: true, required: false
    private _outputSchemaVersion?: string | undefined; 
    public get outputSchemaVersion() {
      return this.getStringAttribute('output_schema_version');
    }
    public set outputSchemaVersion(value: string | undefined) {
      this._outputSchemaVersion = value;
    }
    public resetOutputSchemaVersion() {
      this._outputSchemaVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputSchemaVersionInput() {
      return this._outputSchemaVersion
    }

    // destination - computed: false, optional: false, required: true
    private _destination?: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestination; 
    private __destinationOutput = new S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationOutputReference(this as any, "destination", true);
    public get destination() {
      return this.__destinationOutput;
    }
    public putDestination(value: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestination) {
      this._destination = value;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationInput() {
      return this._destination
    }
  }
  export interface S3BucketAnalyticsConfigurationStorageClassAnalysis {
    /**
    * data_export block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#data_export S3BucketAnalyticsConfiguration#data_export}
    */
    readonly dataExport: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExport;
  }

  function s3BucketAnalyticsConfigurationStorageClassAnalysisToTerraform(struct?: S3BucketAnalyticsConfigurationStorageClassAnalysisOutputReference | S3BucketAnalyticsConfigurationStorageClassAnalysis): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      data_export: s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportToTerraform(struct!.dataExport),
    }
  }

  export class S3BucketAnalyticsConfigurationStorageClassAnalysisOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // data_export - computed: false, optional: false, required: true
    private _dataExport?: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExport; 
    private __dataExportOutput = new S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportOutputReference(this as any, "data_export", true);
    public get dataExport() {
      return this.__dataExportOutput;
    }
    public putDataExport(value: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExport) {
      this._dataExport = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dataExportInput() {
      return this._dataExport
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html aws_s3_bucket_analytics_configuration}
  */
  export class S3BucketAnalyticsConfiguration extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_s3_bucket_analytics_configuration";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html aws_s3_bucket_analytics_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketAnalyticsConfigurationConfig
    */
    public constructor(scope: Construct, id: string, config: S3BucketAnalyticsConfigurationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_s3_bucket_analytics_configuration',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._bucket = config.bucket;
      this._name = config.name;
      this._filter = config.filter;
      this._storageClassAnalysis = config.storageClassAnalysis;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // filter - computed: false, optional: true, required: false
    private _filter?: S3BucketAnalyticsConfigurationFilter | undefined; 
    private __filterOutput = new S3BucketAnalyticsConfigurationFilterOutputReference(this as any, "filter", true);
    public get filter() {
      return this.__filterOutput;
    }
    public putFilter(value: S3BucketAnalyticsConfigurationFilter | undefined) {
      this._filter = value;
    }
    public resetFilter() {
      this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
      return this._filter
    }

    // storage_class_analysis - computed: false, optional: true, required: false
    private _storageClassAnalysis?: S3BucketAnalyticsConfigurationStorageClassAnalysis | undefined; 
    private __storageClassAnalysisOutput = new S3BucketAnalyticsConfigurationStorageClassAnalysisOutputReference(this as any, "storage_class_analysis", true);
    public get storageClassAnalysis() {
      return this.__storageClassAnalysisOutput;
    }
    public putStorageClassAnalysis(value: S3BucketAnalyticsConfigurationStorageClassAnalysis | undefined) {
      this._storageClassAnalysis = value;
    }
    public resetStorageClassAnalysis() {
      this._storageClassAnalysis = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageClassAnalysisInput() {
      return this._storageClassAnalysis
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        bucket: cdktf.stringToTerraform(this._bucket),
        name: cdktf.stringToTerraform(this._name),
        filter: s3BucketAnalyticsConfigurationFilterToTerraform(this._filter),
        storage_class_analysis: s3BucketAnalyticsConfigurationStorageClassAnalysisToTerraform(this._storageClassAnalysis),
      };
    }
  }
  export interface S3BucketInventoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#bucket S3BucketInventory#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#enabled S3BucketInventory#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#included_object_versions S3BucketInventory#included_object_versions}
    */
    readonly includedObjectVersions: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#name S3BucketInventory#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#optional_fields S3BucketInventory#optional_fields}
    */
    readonly optionalFields?: string[];
    /**
    * destination block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#destination S3BucketInventory#destination}
    */
    readonly destination: S3BucketInventoryDestination;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#filter S3BucketInventory#filter}
    */
    readonly filter?: S3BucketInventoryFilter;
    /**
    * schedule block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#schedule S3BucketInventory#schedule}
    */
    readonly schedule: S3BucketInventorySchedule;
  }
  export interface S3BucketInventoryDestinationBucketEncryptionSseKms {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#key_id S3BucketInventory#key_id}
    */
    readonly keyId: string;
  }

  function s3BucketInventoryDestinationBucketEncryptionSseKmsToTerraform(struct?: S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference | S3BucketInventoryDestinationBucketEncryptionSseKms): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      key_id: cdktf.stringToTerraform(struct!.keyId),
    }
  }

  export class S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // key_id - computed: false, optional: false, required: true
    private _keyId?: string; 
    public get keyId() {
      return this.getStringAttribute('key_id');
    }
    public set keyId(value: string) {
      this._keyId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get keyIdInput() {
      return this._keyId
    }
  }
  export interface S3BucketInventoryDestinationBucketEncryptionSseS3 {
  }

  function s3BucketInventoryDestinationBucketEncryptionSseS3ToTerraform(struct?: S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference | S3BucketInventoryDestinationBucketEncryptionSseS3): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
    }
  }

  export class S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }
  }
  export interface S3BucketInventoryDestinationBucketEncryption {
    /**
    * sse_kms block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#sse_kms S3BucketInventory#sse_kms}
    */
    readonly sseKms?: S3BucketInventoryDestinationBucketEncryptionSseKms;
    /**
    * sse_s3 block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#sse_s3 S3BucketInventory#sse_s3}
    */
    readonly sseS3?: S3BucketInventoryDestinationBucketEncryptionSseS3;
  }

  function s3BucketInventoryDestinationBucketEncryptionToTerraform(struct?: S3BucketInventoryDestinationBucketEncryptionOutputReference | S3BucketInventoryDestinationBucketEncryption): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      sse_kms: s3BucketInventoryDestinationBucketEncryptionSseKmsToTerraform(struct!.sseKms),
      sse_s3: s3BucketInventoryDestinationBucketEncryptionSseS3ToTerraform(struct!.sseS3),
    }
  }

  export class S3BucketInventoryDestinationBucketEncryptionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // sse_kms - computed: false, optional: true, required: false
    private _sseKms?: S3BucketInventoryDestinationBucketEncryptionSseKms | undefined; 
    private __sseKmsOutput = new S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference(this as any, "sse_kms", true);
    public get sseKms() {
      return this.__sseKmsOutput;
    }
    public putSseKms(value: S3BucketInventoryDestinationBucketEncryptionSseKms | undefined) {
      this._sseKms = value;
    }
    public resetSseKms() {
      this._sseKms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sseKmsInput() {
      return this._sseKms
    }

    // sse_s3 - computed: false, optional: true, required: false
    private _sseS3?: S3BucketInventoryDestinationBucketEncryptionSseS3 | undefined; 
    private __sseS3Output = new S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference(this as any, "sse_s3", true);
    public get sseS3() {
      return this.__sseS3Output;
    }
    public putSseS3(value: S3BucketInventoryDestinationBucketEncryptionSseS3 | undefined) {
      this._sseS3 = value;
    }
    public resetSseS3() {
      this._sseS3 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sseS3Input() {
      return this._sseS3
    }
  }
  export interface S3BucketInventoryDestinationBucket {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#account_id S3BucketInventory#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#bucket_arn S3BucketInventory#bucket_arn}
    */
    readonly bucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#format S3BucketInventory#format}
    */
    readonly format: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#prefix S3BucketInventory#prefix}
    */
    readonly prefix?: string;
    /**
    * encryption block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#encryption S3BucketInventory#encryption}
    */
    readonly encryption?: S3BucketInventoryDestinationBucketEncryption;
  }

  function s3BucketInventoryDestinationBucketToTerraform(struct?: S3BucketInventoryDestinationBucketOutputReference | S3BucketInventoryDestinationBucket): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      account_id: cdktf.stringToTerraform(struct!.accountId),
      bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
      format: cdktf.stringToTerraform(struct!.format),
      prefix: cdktf.stringToTerraform(struct!.prefix),
      encryption: s3BucketInventoryDestinationBucketEncryptionToTerraform(struct!.encryption),
    }
  }

  export class S3BucketInventoryDestinationBucketOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // account_id - computed: false, optional: true, required: false
    private _accountId?: string | undefined; 
    public get accountId() {
      return this.getStringAttribute('account_id');
    }
    public set accountId(value: string | undefined) {
      this._accountId = value;
    }
    public resetAccountId() {
      this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdInput() {
      return this._accountId
    }

    // bucket_arn - computed: false, optional: false, required: true
    private _bucketArn?: string; 
    public get bucketArn() {
      return this.getStringAttribute('bucket_arn');
    }
    public set bucketArn(value: string) {
      this._bucketArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketArnInput() {
      return this._bucketArn
    }

    // format - computed: false, optional: false, required: true
    private _format?: string; 
    public get format() {
      return this.getStringAttribute('format');
    }
    public set format(value: string) {
      this._format = value;
    }
    // Temporarily expose input value. Use with caution.
    public get formatInput() {
      return this._format
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

    // encryption - computed: false, optional: true, required: false
    private _encryption?: S3BucketInventoryDestinationBucketEncryption | undefined; 
    private __encryptionOutput = new S3BucketInventoryDestinationBucketEncryptionOutputReference(this as any, "encryption", true);
    public get encryption() {
      return this.__encryptionOutput;
    }
    public putEncryption(value: S3BucketInventoryDestinationBucketEncryption | undefined) {
      this._encryption = value;
    }
    public resetEncryption() {
      this._encryption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionInput() {
      return this._encryption
    }
  }
  export interface S3BucketInventoryDestination {
    /**
    * bucket block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#bucket S3BucketInventory#bucket}
    */
    readonly bucket: S3BucketInventoryDestinationBucket;
  }

  function s3BucketInventoryDestinationToTerraform(struct?: S3BucketInventoryDestinationOutputReference | S3BucketInventoryDestination): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      bucket: s3BucketInventoryDestinationBucketToTerraform(struct!.bucket),
    }
  }

  export class S3BucketInventoryDestinationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // bucket - computed: false, optional: false, required: true
    private _bucket?: S3BucketInventoryDestinationBucket; 
    private __bucketOutput = new S3BucketInventoryDestinationBucketOutputReference(this as any, "bucket", true);
    public get bucket() {
      return this.__bucketOutput;
    }
    public putBucket(value: S3BucketInventoryDestinationBucket) {
      this._bucket = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
      return this._bucket
    }
  }
  export interface S3BucketInventoryFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#prefix S3BucketInventory#prefix}
    */
    readonly prefix?: string;
  }

  function s3BucketInventoryFilterToTerraform(struct?: S3BucketInventoryFilterOutputReference | S3BucketInventoryFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      prefix: cdktf.stringToTerraform(struct!.prefix),
    }
  }

  export class S3BucketInventoryFilterOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
  export interface S3BucketInventorySchedule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#frequency S3BucketInventory#frequency}
    */
    readonly frequency: string;
  }

  function s3BucketInventoryScheduleToTerraform(struct?: S3BucketInventoryScheduleOutputReference | S3BucketInventorySchedule): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      frequency: cdktf.stringToTerraform(struct!.frequency),
    }
  }

  export class S3BucketInventoryScheduleOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // frequency - computed: false, optional: false, required: true
    private _frequency?: string; 
    public get frequency() {
      return this.getStringAttribute('frequency');
    }
    public set frequency(value: string) {
      this._frequency = value;
    }
    // Temporarily expose input value. Use with caution.
    public get frequencyInput() {
      return this._frequency
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html aws_s3_bucket_inventory}
  */
  export class S3BucketInventory extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_s3_bucket_inventory";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html aws_s3_bucket_inventory} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketInventoryConfig
    */
    public constructor(scope: Construct, id: string, config: S3BucketInventoryConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_s3_bucket_inventory',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._bucket = config.bucket;
      this._enabled = config.enabled;
      this._includedObjectVersions = config.includedObjectVersions;
      this._name = config.name;
      this._optionalFields = config.optionalFields;
      this._destination = config.destination;
      this._filter = config.filter;
      this._schedule = config.schedule;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // included_object_versions - computed: false, optional: false, required: true
    private _includedObjectVersions?: string; 
    public get includedObjectVersions() {
      return this.getStringAttribute('included_object_versions');
    }
    public set includedObjectVersions(value: string) {
      this._includedObjectVersions = value;
    }
    // Temporarily expose input value. Use with caution.
    public get includedObjectVersionsInput() {
      return this._includedObjectVersions
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

    // optional_fields - computed: false, optional: true, required: false
    private _optionalFields?: string[] | undefined; 
    public get optionalFields() {
      return this.getListAttribute('optional_fields');
    }
    public set optionalFields(value: string[] | undefined) {
      this._optionalFields = value;
    }
    public resetOptionalFields() {
      this._optionalFields = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get optionalFieldsInput() {
      return this._optionalFields
    }

    // destination - computed: false, optional: false, required: true
    private _destination?: S3BucketInventoryDestination; 
    private __destinationOutput = new S3BucketInventoryDestinationOutputReference(this as any, "destination", true);
    public get destination() {
      return this.__destinationOutput;
    }
    public putDestination(value: S3BucketInventoryDestination) {
      this._destination = value;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationInput() {
      return this._destination
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: S3BucketInventoryFilter | undefined; 
    private __filterOutput = new S3BucketInventoryFilterOutputReference(this as any, "filter", true);
    public get filter() {
      return this.__filterOutput;
    }
    public putFilter(value: S3BucketInventoryFilter | undefined) {
      this._filter = value;
    }
    public resetFilter() {
      this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
      return this._filter
    }

    // schedule - computed: false, optional: false, required: true
    private _schedule?: S3BucketInventorySchedule; 
    private __scheduleOutput = new S3BucketInventoryScheduleOutputReference(this as any, "schedule", true);
    public get schedule() {
      return this.__scheduleOutput;
    }
    public putSchedule(value: S3BucketInventorySchedule) {
      this._schedule = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleInput() {
      return this._schedule
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        bucket: cdktf.stringToTerraform(this._bucket),
        enabled: cdktf.booleanToTerraform(this._enabled),
        included_object_versions: cdktf.stringToTerraform(this._includedObjectVersions),
        name: cdktf.stringToTerraform(this._name),
        optional_fields: cdktf.listMapper(cdktf.stringToTerraform)(this._optionalFields),
        destination: s3BucketInventoryDestinationToTerraform(this._destination),
        filter: s3BucketInventoryFilterToTerraform(this._filter),
        schedule: s3BucketInventoryScheduleToTerraform(this._schedule),
      };
    }
  }
  export interface S3BucketMetricConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_metric.html#bucket S3BucketMetric#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_metric.html#name S3BucketMetric#name}
    */
    readonly name: string;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_metric.html#filter S3BucketMetric#filter}
    */
    readonly filter?: S3BucketMetricFilter;
  }
  export interface S3BucketMetricFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_metric.html#prefix S3BucketMetric#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_metric.html#tags S3BucketMetric#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }

  function s3BucketMetricFilterToTerraform(struct?: S3BucketMetricFilterOutputReference | S3BucketMetricFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      prefix: cdktf.stringToTerraform(struct!.prefix),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
    }
  }

  export class S3BucketMetricFilterOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_metric.html aws_s3_bucket_metric}
  */
  export class S3BucketMetric extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_s3_bucket_metric";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_metric.html aws_s3_bucket_metric} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketMetricConfig
    */
    public constructor(scope: Construct, id: string, config: S3BucketMetricConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_s3_bucket_metric',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._bucket = config.bucket;
      this._name = config.name;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // filter - computed: false, optional: true, required: false
    private _filter?: S3BucketMetricFilter | undefined; 
    private __filterOutput = new S3BucketMetricFilterOutputReference(this as any, "filter", true);
    public get filter() {
      return this.__filterOutput;
    }
    public putFilter(value: S3BucketMetricFilter | undefined) {
      this._filter = value;
    }
    public resetFilter() {
      this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
      return this._filter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        bucket: cdktf.stringToTerraform(this._bucket),
        name: cdktf.stringToTerraform(this._name),
        filter: s3BucketMetricFilterToTerraform(this._filter),
      };
    }
  }
  export interface S3BucketNotificationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#bucket S3BucketNotification#bucket}
    */
    readonly bucket: string;
    /**
    * lambda_function block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#lambda_function S3BucketNotification#lambda_function}
    */
    readonly lambdaFunction?: S3BucketNotificationLambdaFunction[];
    /**
    * queue block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#queue S3BucketNotification#queue}
    */
    readonly queue?: S3BucketNotificationQueue[];
    /**
    * topic block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#topic S3BucketNotification#topic}
    */
    readonly topic?: S3BucketNotificationTopic[];
  }
  export interface S3BucketNotificationLambdaFunction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#events S3BucketNotification#events}
    */
    readonly events: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#filter_prefix S3BucketNotification#filter_prefix}
    */
    readonly filterPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#filter_suffix S3BucketNotification#filter_suffix}
    */
    readonly filterSuffix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#id S3BucketNotification#id}
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#lambda_function_arn S3BucketNotification#lambda_function_arn}
    */
    readonly lambdaFunctionArn?: string;
  }

  function s3BucketNotificationLambdaFunctionToTerraform(struct?: S3BucketNotificationLambdaFunction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.events),
      filter_prefix: cdktf.stringToTerraform(struct!.filterPrefix),
      filter_suffix: cdktf.stringToTerraform(struct!.filterSuffix),
      lambda_function_arn: cdktf.stringToTerraform(struct!.lambdaFunctionArn),
    }
  }

  export interface S3BucketNotificationQueue {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#events S3BucketNotification#events}
    */
    readonly events: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#filter_prefix S3BucketNotification#filter_prefix}
    */
    readonly filterPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#filter_suffix S3BucketNotification#filter_suffix}
    */
    readonly filterSuffix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#id S3BucketNotification#id}
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#queue_arn S3BucketNotification#queue_arn}
    */
    readonly queueArn: string;
  }

  function s3BucketNotificationQueueToTerraform(struct?: S3BucketNotificationQueue): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.events),
      filter_prefix: cdktf.stringToTerraform(struct!.filterPrefix),
      filter_suffix: cdktf.stringToTerraform(struct!.filterSuffix),
      queue_arn: cdktf.stringToTerraform(struct!.queueArn),
    }
  }

  export interface S3BucketNotificationTopic {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#events S3BucketNotification#events}
    */
    readonly events: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#filter_prefix S3BucketNotification#filter_prefix}
    */
    readonly filterPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#filter_suffix S3BucketNotification#filter_suffix}
    */
    readonly filterSuffix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#id S3BucketNotification#id}
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#topic_arn S3BucketNotification#topic_arn}
    */
    readonly topicArn: string;
  }

  function s3BucketNotificationTopicToTerraform(struct?: S3BucketNotificationTopic): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.events),
      filter_prefix: cdktf.stringToTerraform(struct!.filterPrefix),
      filter_suffix: cdktf.stringToTerraform(struct!.filterSuffix),
      topic_arn: cdktf.stringToTerraform(struct!.topicArn),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html aws_s3_bucket_notification}
  */
  export class S3BucketNotification extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_s3_bucket_notification";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html aws_s3_bucket_notification} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketNotificationConfig
    */
    public constructor(scope: Construct, id: string, config: S3BucketNotificationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_s3_bucket_notification',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._bucket = config.bucket;
      this._lambdaFunction = config.lambdaFunction;
      this._queue = config.queue;
      this._topic = config.topic;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // lambda_function - computed: false, optional: true, required: false
    private _lambdaFunction?: S3BucketNotificationLambdaFunction[] | undefined; 
    public get lambdaFunction() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('lambda_function') as any;
    }
    public set lambdaFunction(value: S3BucketNotificationLambdaFunction[] | undefined) {
      this._lambdaFunction = value;
    }
    public resetLambdaFunction() {
      this._lambdaFunction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaFunctionInput() {
      return this._lambdaFunction
    }

    // queue - computed: false, optional: true, required: false
    private _queue?: S3BucketNotificationQueue[] | undefined; 
    public get queue() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('queue') as any;
    }
    public set queue(value: S3BucketNotificationQueue[] | undefined) {
      this._queue = value;
    }
    public resetQueue() {
      this._queue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queueInput() {
      return this._queue
    }

    // topic - computed: false, optional: true, required: false
    private _topic?: S3BucketNotificationTopic[] | undefined; 
    public get topic() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('topic') as any;
    }
    public set topic(value: S3BucketNotificationTopic[] | undefined) {
      this._topic = value;
    }
    public resetTopic() {
      this._topic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get topicInput() {
      return this._topic
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        bucket: cdktf.stringToTerraform(this._bucket),
        lambda_function: cdktf.listMapper(s3BucketNotificationLambdaFunctionToTerraform)(this._lambdaFunction),
        queue: cdktf.listMapper(s3BucketNotificationQueueToTerraform)(this._queue),
        topic: cdktf.listMapper(s3BucketNotificationTopicToTerraform)(this._topic),
      };
    }
  }
  export interface S3BucketObjectConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#acl S3BucketObject#acl}
    */
    readonly acl?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#bucket S3BucketObject#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#bucket_key_enabled S3BucketObject#bucket_key_enabled}
    */
    readonly bucketKeyEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#cache_control S3BucketObject#cache_control}
    */
    readonly cacheControl?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#content S3BucketObject#content}
    */
    readonly content?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#content_base64 S3BucketObject#content_base64}
    */
    readonly contentBase64?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#content_disposition S3BucketObject#content_disposition}
    */
    readonly contentDisposition?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#content_encoding S3BucketObject#content_encoding}
    */
    readonly contentEncoding?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#content_language S3BucketObject#content_language}
    */
    readonly contentLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#content_type S3BucketObject#content_type}
    */
    readonly contentType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#etag S3BucketObject#etag}
    */
    readonly etag?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#force_destroy S3BucketObject#force_destroy}
    */
    readonly forceDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#key S3BucketObject#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#kms_key_id S3BucketObject#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#metadata S3BucketObject#metadata}
    */
    readonly metadata?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#object_lock_legal_hold_status S3BucketObject#object_lock_legal_hold_status}
    */
    readonly objectLockLegalHoldStatus?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#object_lock_mode S3BucketObject#object_lock_mode}
    */
    readonly objectLockMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#object_lock_retain_until_date S3BucketObject#object_lock_retain_until_date}
    */
    readonly objectLockRetainUntilDate?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#server_side_encryption S3BucketObject#server_side_encryption}
    */
    readonly serverSideEncryption?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#source S3BucketObject#source}
    */
    readonly source?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#source_hash S3BucketObject#source_hash}
    */
    readonly sourceHash?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#storage_class S3BucketObject#storage_class}
    */
    readonly storageClass?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#tags S3BucketObject#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#tags_all S3BucketObject#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#website_redirect S3BucketObject#website_redirect}
    */
    readonly websiteRedirect?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html aws_s3_bucket_object}
  */
  export class S3BucketObject extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_s3_bucket_object";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html aws_s3_bucket_object} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketObjectConfig
    */
    public constructor(scope: Construct, id: string, config: S3BucketObjectConfig) {
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
      this._acl = config.acl;
      this._bucket = config.bucket;
      this._bucketKeyEnabled = config.bucketKeyEnabled;
      this._cacheControl = config.cacheControl;
      this._content = config.content;
      this._contentBase64 = config.contentBase64;
      this._contentDisposition = config.contentDisposition;
      this._contentEncoding = config.contentEncoding;
      this._contentLanguage = config.contentLanguage;
      this._contentType = config.contentType;
      this._etag = config.etag;
      this._forceDestroy = config.forceDestroy;
      this._key = config.key;
      this._kmsKeyId = config.kmsKeyId;
      this._metadata = config.metadata;
      this._objectLockLegalHoldStatus = config.objectLockLegalHoldStatus;
      this._objectLockMode = config.objectLockMode;
      this._objectLockRetainUntilDate = config.objectLockRetainUntilDate;
      this._serverSideEncryption = config.serverSideEncryption;
      this._source = config.source;
      this._sourceHash = config.sourceHash;
      this._storageClass = config.storageClass;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._websiteRedirect = config.websiteRedirect;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // acl - computed: false, optional: true, required: false
    private _acl?: string | undefined; 
    public get acl() {
      return this.getStringAttribute('acl');
    }
    public set acl(value: string | undefined) {
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

    // bucket_key_enabled - computed: true, optional: true, required: false
    private _bucketKeyEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get bucketKeyEnabled() {
      return this.getBooleanAttribute('bucket_key_enabled') as any;
    }
    public set bucketKeyEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._bucketKeyEnabled = value;
    }
    public resetBucketKeyEnabled() {
      this._bucketKeyEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketKeyEnabledInput() {
      return this._bucketKeyEnabled
    }

    // cache_control - computed: false, optional: true, required: false
    private _cacheControl?: string | undefined; 
    public get cacheControl() {
      return this.getStringAttribute('cache_control');
    }
    public set cacheControl(value: string | undefined) {
      this._cacheControl = value;
    }
    public resetCacheControl() {
      this._cacheControl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cacheControlInput() {
      return this._cacheControl
    }

    // content - computed: false, optional: true, required: false
    private _content?: string | undefined; 
    public get content() {
      return this.getStringAttribute('content');
    }
    public set content(value: string | undefined) {
      this._content = value;
    }
    public resetContent() {
      this._content = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentInput() {
      return this._content
    }

    // content_base64 - computed: false, optional: true, required: false
    private _contentBase64?: string | undefined; 
    public get contentBase64() {
      return this.getStringAttribute('content_base64');
    }
    public set contentBase64(value: string | undefined) {
      this._contentBase64 = value;
    }
    public resetContentBase64() {
      this._contentBase64 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentBase64Input() {
      return this._contentBase64
    }

    // content_disposition - computed: false, optional: true, required: false
    private _contentDisposition?: string | undefined; 
    public get contentDisposition() {
      return this.getStringAttribute('content_disposition');
    }
    public set contentDisposition(value: string | undefined) {
      this._contentDisposition = value;
    }
    public resetContentDisposition() {
      this._contentDisposition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentDispositionInput() {
      return this._contentDisposition
    }

    // content_encoding - computed: false, optional: true, required: false
    private _contentEncoding?: string | undefined; 
    public get contentEncoding() {
      return this.getStringAttribute('content_encoding');
    }
    public set contentEncoding(value: string | undefined) {
      this._contentEncoding = value;
    }
    public resetContentEncoding() {
      this._contentEncoding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentEncodingInput() {
      return this._contentEncoding
    }

    // content_language - computed: false, optional: true, required: false
    private _contentLanguage?: string | undefined; 
    public get contentLanguage() {
      return this.getStringAttribute('content_language');
    }
    public set contentLanguage(value: string | undefined) {
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
    private _contentType?: string | undefined; 
    public get contentType() {
      return this.getStringAttribute('content_type');
    }
    public set contentType(value: string | undefined) {
      this._contentType = value;
    }
    public resetContentType() {
      this._contentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTypeInput() {
      return this._contentType
    }

    // etag - computed: true, optional: true, required: false
    private _etag?: string | undefined; 
    public get etag() {
      return this.getStringAttribute('etag');
    }
    public set etag(value: string | undefined) {
      this._etag = value;
    }
    public resetEtag() {
      this._etag = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get etagInput() {
      return this._etag
    }

    // force_destroy - computed: false, optional: true, required: false
    private _forceDestroy?: boolean | cdktf.IResolvable | undefined; 
    public get forceDestroy() {
      return this.getBooleanAttribute('force_destroy') as any;
    }
    public set forceDestroy(value: boolean | cdktf.IResolvable | undefined) {
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

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string | undefined; 
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string | undefined) {
      this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
      this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
      return this._kmsKeyId
    }

    // metadata - computed: false, optional: true, required: false
    private _metadata?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get metadata() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('metadata') as any;
    }
    public set metadata(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._metadata = value;
    }
    public resetMetadata() {
      this._metadata = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataInput() {
      return this._metadata
    }

    // object_lock_legal_hold_status - computed: false, optional: true, required: false
    private _objectLockLegalHoldStatus?: string | undefined; 
    public get objectLockLegalHoldStatus() {
      return this.getStringAttribute('object_lock_legal_hold_status');
    }
    public set objectLockLegalHoldStatus(value: string | undefined) {
      this._objectLockLegalHoldStatus = value;
    }
    public resetObjectLockLegalHoldStatus() {
      this._objectLockLegalHoldStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectLockLegalHoldStatusInput() {
      return this._objectLockLegalHoldStatus
    }

    // object_lock_mode - computed: false, optional: true, required: false
    private _objectLockMode?: string | undefined; 
    public get objectLockMode() {
      return this.getStringAttribute('object_lock_mode');
    }
    public set objectLockMode(value: string | undefined) {
      this._objectLockMode = value;
    }
    public resetObjectLockMode() {
      this._objectLockMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectLockModeInput() {
      return this._objectLockMode
    }

    // object_lock_retain_until_date - computed: false, optional: true, required: false
    private _objectLockRetainUntilDate?: string | undefined; 
    public get objectLockRetainUntilDate() {
      return this.getStringAttribute('object_lock_retain_until_date');
    }
    public set objectLockRetainUntilDate(value: string | undefined) {
      this._objectLockRetainUntilDate = value;
    }
    public resetObjectLockRetainUntilDate() {
      this._objectLockRetainUntilDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectLockRetainUntilDateInput() {
      return this._objectLockRetainUntilDate
    }

    // server_side_encryption - computed: true, optional: true, required: false
    private _serverSideEncryption?: string | undefined; 
    public get serverSideEncryption() {
      return this.getStringAttribute('server_side_encryption');
    }
    public set serverSideEncryption(value: string | undefined) {
      this._serverSideEncryption = value;
    }
    public resetServerSideEncryption() {
      this._serverSideEncryption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverSideEncryptionInput() {
      return this._serverSideEncryption
    }

    // source - computed: false, optional: true, required: false
    private _source?: string | undefined; 
    public get source() {
      return this.getStringAttribute('source');
    }
    public set source(value: string | undefined) {
      this._source = value;
    }
    public resetSource() {
      this._source = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
      return this._source
    }

    // source_hash - computed: false, optional: true, required: false
    private _sourceHash?: string | undefined; 
    public get sourceHash() {
      return this.getStringAttribute('source_hash');
    }
    public set sourceHash(value: string | undefined) {
      this._sourceHash = value;
    }
    public resetSourceHash() {
      this._sourceHash = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceHashInput() {
      return this._sourceHash
    }

    // storage_class - computed: true, optional: true, required: false
    private _storageClass?: string | undefined; 
    public get storageClass() {
      return this.getStringAttribute('storage_class');
    }
    public set storageClass(value: string | undefined) {
      this._storageClass = value;
    }
    public resetStorageClass() {
      this._storageClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageClassInput() {
      return this._storageClass
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

    // version_id - computed: true, optional: false, required: false
    public get versionId() {
      return this.getStringAttribute('version_id');
    }

    // website_redirect - computed: false, optional: true, required: false
    private _websiteRedirect?: string | undefined; 
    public get websiteRedirect() {
      return this.getStringAttribute('website_redirect');
    }
    public set websiteRedirect(value: string | undefined) {
      this._websiteRedirect = value;
    }
    public resetWebsiteRedirect() {
      this._websiteRedirect = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get websiteRedirectInput() {
      return this._websiteRedirect
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        acl: cdktf.stringToTerraform(this._acl),
        bucket: cdktf.stringToTerraform(this._bucket),
        bucket_key_enabled: cdktf.booleanToTerraform(this._bucketKeyEnabled),
        cache_control: cdktf.stringToTerraform(this._cacheControl),
        content: cdktf.stringToTerraform(this._content),
        content_base64: cdktf.stringToTerraform(this._contentBase64),
        content_disposition: cdktf.stringToTerraform(this._contentDisposition),
        content_encoding: cdktf.stringToTerraform(this._contentEncoding),
        content_language: cdktf.stringToTerraform(this._contentLanguage),
        content_type: cdktf.stringToTerraform(this._contentType),
        etag: cdktf.stringToTerraform(this._etag),
        force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
        key: cdktf.stringToTerraform(this._key),
        kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
        metadata: cdktf.hashMapper(cdktf.anyToTerraform)(this._metadata),
        object_lock_legal_hold_status: cdktf.stringToTerraform(this._objectLockLegalHoldStatus),
        object_lock_mode: cdktf.stringToTerraform(this._objectLockMode),
        object_lock_retain_until_date: cdktf.stringToTerraform(this._objectLockRetainUntilDate),
        server_side_encryption: cdktf.stringToTerraform(this._serverSideEncryption),
        source: cdktf.stringToTerraform(this._source),
        source_hash: cdktf.stringToTerraform(this._sourceHash),
        storage_class: cdktf.stringToTerraform(this._storageClass),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        website_redirect: cdktf.stringToTerraform(this._websiteRedirect),
      };
    }
  }
  export interface S3BucketOwnershipControlsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls.html#bucket S3BucketOwnershipControls#bucket}
    */
    readonly bucket: string;
    /**
    * rule block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls.html#rule S3BucketOwnershipControls#rule}
    */
    readonly rule: S3BucketOwnershipControlsRule;
  }
  export interface S3BucketOwnershipControlsRule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls.html#object_ownership S3BucketOwnershipControls#object_ownership}
    */
    readonly objectOwnership: string;
  }

  function s3BucketOwnershipControlsRuleToTerraform(struct?: S3BucketOwnershipControlsRuleOutputReference | S3BucketOwnershipControlsRule): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      object_ownership: cdktf.stringToTerraform(struct!.objectOwnership),
    }
  }

  export class S3BucketOwnershipControlsRuleOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // object_ownership - computed: false, optional: false, required: true
    private _objectOwnership?: string; 
    public get objectOwnership() {
      return this.getStringAttribute('object_ownership');
    }
    public set objectOwnership(value: string) {
      this._objectOwnership = value;
    }
    // Temporarily expose input value. Use with caution.
    public get objectOwnershipInput() {
      return this._objectOwnership
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls.html aws_s3_bucket_ownership_controls}
  */
  export class S3BucketOwnershipControls extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_s3_bucket_ownership_controls";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls.html aws_s3_bucket_ownership_controls} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketOwnershipControlsConfig
    */
    public constructor(scope: Construct, id: string, config: S3BucketOwnershipControlsConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_s3_bucket_ownership_controls',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._bucket = config.bucket;
      this._rule = config.rule;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // rule - computed: false, optional: false, required: true
    private _rule?: S3BucketOwnershipControlsRule; 
    private __ruleOutput = new S3BucketOwnershipControlsRuleOutputReference(this as any, "rule", true);
    public get rule() {
      return this.__ruleOutput;
    }
    public putRule(value: S3BucketOwnershipControlsRule) {
      this._rule = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleInput() {
      return this._rule
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        bucket: cdktf.stringToTerraform(this._bucket),
        rule: s3BucketOwnershipControlsRuleToTerraform(this._rule),
      };
    }
  }
  export interface S3BucketPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_policy.html#bucket S3BucketPolicy#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_policy.html#policy S3BucketPolicy#policy}
    */
    readonly policy: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_policy.html aws_s3_bucket_policy}
  */
  export class S3BucketPolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_s3_bucket_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_policy.html aws_s3_bucket_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketPolicyConfig
    */
    public constructor(scope: Construct, id: string, config: S3BucketPolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_s3_bucket_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._bucket = config.bucket;
      this._policy = config.policy;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // policy - computed: false, optional: false, required: true
    private _policy?: string; 
    public get policy() {
      return this.getStringAttribute('policy');
    }
    public set policy(value: string) {
      this._policy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
      return this._policy
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        bucket: cdktf.stringToTerraform(this._bucket),
        policy: cdktf.stringToTerraform(this._policy),
      };
    }
  }
  export interface S3BucketPublicAccessBlockConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_public_access_block.html#block_public_acls S3BucketPublicAccessBlock#block_public_acls}
    */
    readonly blockPublicAcls?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_public_access_block.html#block_public_policy S3BucketPublicAccessBlock#block_public_policy}
    */
    readonly blockPublicPolicy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_public_access_block.html#bucket S3BucketPublicAccessBlock#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_public_access_block.html#ignore_public_acls S3BucketPublicAccessBlock#ignore_public_acls}
    */
    readonly ignorePublicAcls?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_public_access_block.html#restrict_public_buckets S3BucketPublicAccessBlock#restrict_public_buckets}
    */
    readonly restrictPublicBuckets?: boolean | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_public_access_block.html aws_s3_bucket_public_access_block}
  */
  export class S3BucketPublicAccessBlock extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_s3_bucket_public_access_block";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_public_access_block.html aws_s3_bucket_public_access_block} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketPublicAccessBlockConfig
    */
    public constructor(scope: Construct, id: string, config: S3BucketPublicAccessBlockConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_s3_bucket_public_access_block',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._blockPublicAcls = config.blockPublicAcls;
      this._blockPublicPolicy = config.blockPublicPolicy;
      this._bucket = config.bucket;
      this._ignorePublicAcls = config.ignorePublicAcls;
      this._restrictPublicBuckets = config.restrictPublicBuckets;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // block_public_acls - computed: false, optional: true, required: false
    private _blockPublicAcls?: boolean | cdktf.IResolvable | undefined; 
    public get blockPublicAcls() {
      return this.getBooleanAttribute('block_public_acls') as any;
    }
    public set blockPublicAcls(value: boolean | cdktf.IResolvable | undefined) {
      this._blockPublicAcls = value;
    }
    public resetBlockPublicAcls() {
      this._blockPublicAcls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockPublicAclsInput() {
      return this._blockPublicAcls
    }

    // block_public_policy - computed: false, optional: true, required: false
    private _blockPublicPolicy?: boolean | cdktf.IResolvable | undefined; 
    public get blockPublicPolicy() {
      return this.getBooleanAttribute('block_public_policy') as any;
    }
    public set blockPublicPolicy(value: boolean | cdktf.IResolvable | undefined) {
      this._blockPublicPolicy = value;
    }
    public resetBlockPublicPolicy() {
      this._blockPublicPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockPublicPolicyInput() {
      return this._blockPublicPolicy
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

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ignore_public_acls - computed: false, optional: true, required: false
    private _ignorePublicAcls?: boolean | cdktf.IResolvable | undefined; 
    public get ignorePublicAcls() {
      return this.getBooleanAttribute('ignore_public_acls') as any;
    }
    public set ignorePublicAcls(value: boolean | cdktf.IResolvable | undefined) {
      this._ignorePublicAcls = value;
    }
    public resetIgnorePublicAcls() {
      this._ignorePublicAcls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ignorePublicAclsInput() {
      return this._ignorePublicAcls
    }

    // restrict_public_buckets - computed: false, optional: true, required: false
    private _restrictPublicBuckets?: boolean | cdktf.IResolvable | undefined; 
    public get restrictPublicBuckets() {
      return this.getBooleanAttribute('restrict_public_buckets') as any;
    }
    public set restrictPublicBuckets(value: boolean | cdktf.IResolvable | undefined) {
      this._restrictPublicBuckets = value;
    }
    public resetRestrictPublicBuckets() {
      this._restrictPublicBuckets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get restrictPublicBucketsInput() {
      return this._restrictPublicBuckets
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        block_public_acls: cdktf.booleanToTerraform(this._blockPublicAcls),
        block_public_policy: cdktf.booleanToTerraform(this._blockPublicPolicy),
        bucket: cdktf.stringToTerraform(this._bucket),
        ignore_public_acls: cdktf.booleanToTerraform(this._ignorePublicAcls),
        restrict_public_buckets: cdktf.booleanToTerraform(this._restrictPublicBuckets),
      };
    }
  }
  export interface S3ObjectCopyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#acl S3ObjectCopy#acl}
    */
    readonly acl?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#bucket S3ObjectCopy#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#bucket_key_enabled S3ObjectCopy#bucket_key_enabled}
    */
    readonly bucketKeyEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#cache_control S3ObjectCopy#cache_control}
    */
    readonly cacheControl?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#content_disposition S3ObjectCopy#content_disposition}
    */
    readonly contentDisposition?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#content_encoding S3ObjectCopy#content_encoding}
    */
    readonly contentEncoding?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#content_language S3ObjectCopy#content_language}
    */
    readonly contentLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#content_type S3ObjectCopy#content_type}
    */
    readonly contentType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#copy_if_match S3ObjectCopy#copy_if_match}
    */
    readonly copyIfMatch?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#copy_if_modified_since S3ObjectCopy#copy_if_modified_since}
    */
    readonly copyIfModifiedSince?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#copy_if_none_match S3ObjectCopy#copy_if_none_match}
    */
    readonly copyIfNoneMatch?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#copy_if_unmodified_since S3ObjectCopy#copy_if_unmodified_since}
    */
    readonly copyIfUnmodifiedSince?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#customer_algorithm S3ObjectCopy#customer_algorithm}
    */
    readonly customerAlgorithm?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#customer_key S3ObjectCopy#customer_key}
    */
    readonly customerKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#customer_key_md5 S3ObjectCopy#customer_key_md5}
    */
    readonly customerKeyMd5?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#expected_bucket_owner S3ObjectCopy#expected_bucket_owner}
    */
    readonly expectedBucketOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#expected_source_bucket_owner S3ObjectCopy#expected_source_bucket_owner}
    */
    readonly expectedSourceBucketOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#expires S3ObjectCopy#expires}
    */
    readonly expires?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#force_destroy S3ObjectCopy#force_destroy}
    */
    readonly forceDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#key S3ObjectCopy#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#kms_encryption_context S3ObjectCopy#kms_encryption_context}
    */
    readonly kmsEncryptionContext?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#kms_key_id S3ObjectCopy#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#metadata S3ObjectCopy#metadata}
    */
    readonly metadata?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#metadata_directive S3ObjectCopy#metadata_directive}
    */
    readonly metadataDirective?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#object_lock_legal_hold_status S3ObjectCopy#object_lock_legal_hold_status}
    */
    readonly objectLockLegalHoldStatus?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#object_lock_mode S3ObjectCopy#object_lock_mode}
    */
    readonly objectLockMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#object_lock_retain_until_date S3ObjectCopy#object_lock_retain_until_date}
    */
    readonly objectLockRetainUntilDate?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#request_payer S3ObjectCopy#request_payer}
    */
    readonly requestPayer?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#server_side_encryption S3ObjectCopy#server_side_encryption}
    */
    readonly serverSideEncryption?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#source S3ObjectCopy#source}
    */
    readonly source: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#source_customer_algorithm S3ObjectCopy#source_customer_algorithm}
    */
    readonly sourceCustomerAlgorithm?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#source_customer_key S3ObjectCopy#source_customer_key}
    */
    readonly sourceCustomerKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#source_customer_key_md5 S3ObjectCopy#source_customer_key_md5}
    */
    readonly sourceCustomerKeyMd5?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#storage_class S3ObjectCopy#storage_class}
    */
    readonly storageClass?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#tagging_directive S3ObjectCopy#tagging_directive}
    */
    readonly taggingDirective?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#tags S3ObjectCopy#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#tags_all S3ObjectCopy#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#website_redirect S3ObjectCopy#website_redirect}
    */
    readonly websiteRedirect?: string;
    /**
    * grant block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#grant S3ObjectCopy#grant}
    */
    readonly grant?: S3ObjectCopyGrant[];
  }
  export interface S3ObjectCopyGrant {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#email S3ObjectCopy#email}
    */
    readonly email?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#id S3ObjectCopy#id}
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#permissions S3ObjectCopy#permissions}
    */
    readonly permissions: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#type S3ObjectCopy#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#uri S3ObjectCopy#uri}
    */
    readonly uri?: string;
  }

  function s3ObjectCopyGrantToTerraform(struct?: S3ObjectCopyGrant): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      email: cdktf.stringToTerraform(struct!.email),
      id: cdktf.stringToTerraform(struct!.id),
      permissions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.permissions),
      type: cdktf.stringToTerraform(struct!.type),
      uri: cdktf.stringToTerraform(struct!.uri),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html aws_s3_object_copy}
  */
  export class S3ObjectCopy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_s3_object_copy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html aws_s3_object_copy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3ObjectCopyConfig
    */
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
      this._bucketKeyEnabled = config.bucketKeyEnabled;
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
      this._tagsAll = config.tagsAll;
      this._websiteRedirect = config.websiteRedirect;
      this._grant = config.grant;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // acl - computed: false, optional: true, required: false
    private _acl?: string | undefined; 
    public get acl() {
      return this.getStringAttribute('acl');
    }
    public set acl(value: string | undefined) {
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

    // bucket_key_enabled - computed: true, optional: true, required: false
    private _bucketKeyEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get bucketKeyEnabled() {
      return this.getBooleanAttribute('bucket_key_enabled') as any;
    }
    public set bucketKeyEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._bucketKeyEnabled = value;
    }
    public resetBucketKeyEnabled() {
      this._bucketKeyEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketKeyEnabledInput() {
      return this._bucketKeyEnabled
    }

    // cache_control - computed: true, optional: true, required: false
    private _cacheControl?: string | undefined; 
    public get cacheControl() {
      return this.getStringAttribute('cache_control');
    }
    public set cacheControl(value: string | undefined) {
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
    private _contentDisposition?: string | undefined; 
    public get contentDisposition() {
      return this.getStringAttribute('content_disposition');
    }
    public set contentDisposition(value: string | undefined) {
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
    private _contentEncoding?: string | undefined; 
    public get contentEncoding() {
      return this.getStringAttribute('content_encoding');
    }
    public set contentEncoding(value: string | undefined) {
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
    private _contentLanguage?: string | undefined; 
    public get contentLanguage() {
      return this.getStringAttribute('content_language');
    }
    public set contentLanguage(value: string | undefined) {
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
    private _contentType?: string | undefined; 
    public get contentType() {
      return this.getStringAttribute('content_type');
    }
    public set contentType(value: string | undefined) {
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
    private _copyIfMatch?: string | undefined; 
    public get copyIfMatch() {
      return this.getStringAttribute('copy_if_match');
    }
    public set copyIfMatch(value: string | undefined) {
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
    private _copyIfModifiedSince?: string | undefined; 
    public get copyIfModifiedSince() {
      return this.getStringAttribute('copy_if_modified_since');
    }
    public set copyIfModifiedSince(value: string | undefined) {
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
    private _copyIfNoneMatch?: string | undefined; 
    public get copyIfNoneMatch() {
      return this.getStringAttribute('copy_if_none_match');
    }
    public set copyIfNoneMatch(value: string | undefined) {
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
    private _copyIfUnmodifiedSince?: string | undefined; 
    public get copyIfUnmodifiedSince() {
      return this.getStringAttribute('copy_if_unmodified_since');
    }
    public set copyIfUnmodifiedSince(value: string | undefined) {
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
    private _customerAlgorithm?: string | undefined; 
    public get customerAlgorithm() {
      return this.getStringAttribute('customer_algorithm');
    }
    public set customerAlgorithm(value: string | undefined) {
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
    private _customerKey?: string | undefined; 
    public get customerKey() {
      return this.getStringAttribute('customer_key');
    }
    public set customerKey(value: string | undefined) {
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
    private _customerKeyMd5?: string | undefined; 
    public get customerKeyMd5() {
      return this.getStringAttribute('customer_key_md5');
    }
    public set customerKeyMd5(value: string | undefined) {
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
    private _expectedBucketOwner?: string | undefined; 
    public get expectedBucketOwner() {
      return this.getStringAttribute('expected_bucket_owner');
    }
    public set expectedBucketOwner(value: string | undefined) {
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
    private _expectedSourceBucketOwner?: string | undefined; 
    public get expectedSourceBucketOwner() {
      return this.getStringAttribute('expected_source_bucket_owner');
    }
    public set expectedSourceBucketOwner(value: string | undefined) {
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
    private _expires?: string | undefined; 
    public get expires() {
      return this.getStringAttribute('expires');
    }
    public set expires(value: string | undefined) {
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
    private _forceDestroy?: boolean | cdktf.IResolvable | undefined; 
    public get forceDestroy() {
      return this.getBooleanAttribute('force_destroy') as any;
    }
    public set forceDestroy(value: boolean | cdktf.IResolvable | undefined) {
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

    // kms_encryption_context - computed: true, optional: true, required: false
    private _kmsEncryptionContext?: string | undefined; 
    public get kmsEncryptionContext() {
      return this.getStringAttribute('kms_encryption_context');
    }
    public set kmsEncryptionContext(value: string | undefined) {
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
    private _kmsKeyId?: string | undefined; 
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string | undefined) {
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
    private _metadata?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get metadata() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('metadata') as any;
    }
    public set metadata(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _metadataDirective?: string | undefined; 
    public get metadataDirective() {
      return this.getStringAttribute('metadata_directive');
    }
    public set metadataDirective(value: string | undefined) {
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
    private _objectLockLegalHoldStatus?: string | undefined; 
    public get objectLockLegalHoldStatus() {
      return this.getStringAttribute('object_lock_legal_hold_status');
    }
    public set objectLockLegalHoldStatus(value: string | undefined) {
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
    private _objectLockMode?: string | undefined; 
    public get objectLockMode() {
      return this.getStringAttribute('object_lock_mode');
    }
    public set objectLockMode(value: string | undefined) {
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
    private _objectLockRetainUntilDate?: string | undefined; 
    public get objectLockRetainUntilDate() {
      return this.getStringAttribute('object_lock_retain_until_date');
    }
    public set objectLockRetainUntilDate(value: string | undefined) {
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
      return this.getBooleanAttribute('request_charged') as any;
    }

    // request_payer - computed: false, optional: true, required: false
    private _requestPayer?: string | undefined; 
    public get requestPayer() {
      return this.getStringAttribute('request_payer');
    }
    public set requestPayer(value: string | undefined) {
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
    private _serverSideEncryption?: string | undefined; 
    public get serverSideEncryption() {
      return this.getStringAttribute('server_side_encryption');
    }
    public set serverSideEncryption(value: string | undefined) {
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
    private _source?: string; 
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
    private _sourceCustomerAlgorithm?: string | undefined; 
    public get sourceCustomerAlgorithm() {
      return this.getStringAttribute('source_customer_algorithm');
    }
    public set sourceCustomerAlgorithm(value: string | undefined) {
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
    private _sourceCustomerKey?: string | undefined; 
    public get sourceCustomerKey() {
      return this.getStringAttribute('source_customer_key');
    }
    public set sourceCustomerKey(value: string | undefined) {
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
    private _sourceCustomerKeyMd5?: string | undefined; 
    public get sourceCustomerKeyMd5() {
      return this.getStringAttribute('source_customer_key_md5');
    }
    public set sourceCustomerKeyMd5(value: string | undefined) {
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
    private _storageClass?: string | undefined; 
    public get storageClass() {
      return this.getStringAttribute('storage_class');
    }
    public set storageClass(value: string | undefined) {
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
    private _taggingDirective?: string | undefined; 
    public get taggingDirective() {
      return this.getStringAttribute('tagging_directive');
    }
    public set taggingDirective(value: string | undefined) {
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

    // version_id - computed: true, optional: false, required: false
    public get versionId() {
      return this.getStringAttribute('version_id');
    }

    // website_redirect - computed: true, optional: true, required: false
    private _websiteRedirect?: string | undefined; 
    public get websiteRedirect() {
      return this.getStringAttribute('website_redirect');
    }
    public set websiteRedirect(value: string | undefined) {
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
    private _grant?: S3ObjectCopyGrant[] | undefined; 
    public get grant() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('grant') as any;
    }
    public set grant(value: S3ObjectCopyGrant[] | undefined) {
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
        bucket_key_enabled: cdktf.booleanToTerraform(this._bucketKeyEnabled),
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
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        website_redirect: cdktf.stringToTerraform(this._websiteRedirect),
        grant: cdktf.listMapper(s3ObjectCopyGrantToTerraform)(this._grant),
      };
    }
  }
  export interface S3ControlBucketConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket.html#bucket S3ControlBucket#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket.html#outpost_id S3ControlBucket#outpost_id}
    */
    readonly outpostId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket.html#tags S3ControlBucket#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket.html#tags_all S3ControlBucket#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket.html aws_s3control_bucket}
  */
  export class S3ControlBucket extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_s3control_bucket";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket.html aws_s3control_bucket} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3ControlBucketConfig
    */
    public constructor(scope: Construct, id: string, config: S3ControlBucketConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_s3control_bucket',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._bucket = config.bucket;
      this._outpostId = config.outpostId;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
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

    // creation_date - computed: true, optional: false, required: false
    public get creationDate() {
      return this.getStringAttribute('creation_date');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // outpost_id - computed: false, optional: false, required: true
    private _outpostId?: string; 
    public get outpostId() {
      return this.getStringAttribute('outpost_id');
    }
    public set outpostId(value: string) {
      this._outpostId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get outpostIdInput() {
      return this._outpostId
    }

    // public_access_block_enabled - computed: true, optional: false, required: false
    public get publicAccessBlockEnabled() {
      return this.getBooleanAttribute('public_access_block_enabled') as any;
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        bucket: cdktf.stringToTerraform(this._bucket),
        outpost_id: cdktf.stringToTerraform(this._outpostId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface S3ControlBucketLifecycleConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#bucket S3ControlBucketLifecycleConfiguration#bucket}
    */
    readonly bucket: string;
    /**
    * rule block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#rule S3ControlBucketLifecycleConfiguration#rule}
    */
    readonly rule: S3ControlBucketLifecycleConfigurationRule[];
  }
  export interface S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#days_after_initiation S3ControlBucketLifecycleConfiguration#days_after_initiation}
    */
    readonly daysAfterInitiation: number;
  }

  function s3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadToTerraform(struct?: S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference | S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      days_after_initiation: cdktf.numberToTerraform(struct!.daysAfterInitiation),
    }
  }

  export class S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // days_after_initiation - computed: false, optional: false, required: true
    private _daysAfterInitiation?: number; 
    public get daysAfterInitiation() {
      return this.getNumberAttribute('days_after_initiation');
    }
    public set daysAfterInitiation(value: number) {
      this._daysAfterInitiation = value;
    }
    // Temporarily expose input value. Use with caution.
    public get daysAfterInitiationInput() {
      return this._daysAfterInitiation
    }
  }
  export interface S3ControlBucketLifecycleConfigurationRuleExpiration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#date S3ControlBucketLifecycleConfiguration#date}
    */
    readonly date?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#days S3ControlBucketLifecycleConfiguration#days}
    */
    readonly days?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#expired_object_delete_marker S3ControlBucketLifecycleConfiguration#expired_object_delete_marker}
    */
    readonly expiredObjectDeleteMarker?: boolean | cdktf.IResolvable;
  }

  function s3ControlBucketLifecycleConfigurationRuleExpirationToTerraform(struct?: S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference | S3ControlBucketLifecycleConfigurationRuleExpiration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      date: cdktf.stringToTerraform(struct!.date),
      days: cdktf.numberToTerraform(struct!.days),
      expired_object_delete_marker: cdktf.booleanToTerraform(struct!.expiredObjectDeleteMarker),
    }
  }

  export class S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // date - computed: false, optional: true, required: false
    private _date?: string | undefined; 
    public get date() {
      return this.getStringAttribute('date');
    }
    public set date(value: string | undefined) {
      this._date = value;
    }
    public resetDate() {
      this._date = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dateInput() {
      return this._date
    }

    // days - computed: false, optional: true, required: false
    private _days?: number | undefined; 
    public get days() {
      return this.getNumberAttribute('days');
    }
    public set days(value: number | undefined) {
      this._days = value;
    }
    public resetDays() {
      this._days = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get daysInput() {
      return this._days
    }

    // expired_object_delete_marker - computed: false, optional: true, required: false
    private _expiredObjectDeleteMarker?: boolean | cdktf.IResolvable | undefined; 
    public get expiredObjectDeleteMarker() {
      return this.getBooleanAttribute('expired_object_delete_marker') as any;
    }
    public set expiredObjectDeleteMarker(value: boolean | cdktf.IResolvable | undefined) {
      this._expiredObjectDeleteMarker = value;
    }
    public resetExpiredObjectDeleteMarker() {
      this._expiredObjectDeleteMarker = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expiredObjectDeleteMarkerInput() {
      return this._expiredObjectDeleteMarker
    }
  }
  export interface S3ControlBucketLifecycleConfigurationRuleFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#prefix S3ControlBucketLifecycleConfiguration#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#tags S3ControlBucketLifecycleConfiguration#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }

  function s3ControlBucketLifecycleConfigurationRuleFilterToTerraform(struct?: S3ControlBucketLifecycleConfigurationRuleFilterOutputReference | S3ControlBucketLifecycleConfigurationRuleFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      prefix: cdktf.stringToTerraform(struct!.prefix),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
    }
  }

  export class S3ControlBucketLifecycleConfigurationRuleFilterOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
  }
  export interface S3ControlBucketLifecycleConfigurationRule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#id S3ControlBucketLifecycleConfiguration#id}
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#status S3ControlBucketLifecycleConfiguration#status}
    */
    readonly status?: string;
    /**
    * abort_incomplete_multipart_upload block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#abort_incomplete_multipart_upload S3ControlBucketLifecycleConfiguration#abort_incomplete_multipart_upload}
    */
    readonly abortIncompleteMultipartUpload?: S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload;
    /**
    * expiration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#expiration S3ControlBucketLifecycleConfiguration#expiration}
    */
    readonly expiration?: S3ControlBucketLifecycleConfigurationRuleExpiration;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#filter S3ControlBucketLifecycleConfiguration#filter}
    */
    readonly filter?: S3ControlBucketLifecycleConfigurationRuleFilter;
  }

  function s3ControlBucketLifecycleConfigurationRuleToTerraform(struct?: S3ControlBucketLifecycleConfigurationRule): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      id: cdktf.stringToTerraform(struct!.id),
      status: cdktf.stringToTerraform(struct!.status),
      abort_incomplete_multipart_upload: s3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadToTerraform(struct!.abortIncompleteMultipartUpload),
      expiration: s3ControlBucketLifecycleConfigurationRuleExpirationToTerraform(struct!.expiration),
      filter: s3ControlBucketLifecycleConfigurationRuleFilterToTerraform(struct!.filter),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html aws_s3control_bucket_lifecycle_configuration}
  */
  export class S3ControlBucketLifecycleConfiguration extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_s3control_bucket_lifecycle_configuration";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html aws_s3control_bucket_lifecycle_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3ControlBucketLifecycleConfigurationConfig
    */
    public constructor(scope: Construct, id: string, config: S3ControlBucketLifecycleConfigurationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_s3control_bucket_lifecycle_configuration',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._bucket = config.bucket;
      this._rule = config.rule;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // rule - computed: false, optional: false, required: true
    private _rule?: S3ControlBucketLifecycleConfigurationRule[]; 
    public get rule() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('rule') as any;
    }
    public set rule(value: S3ControlBucketLifecycleConfigurationRule[]) {
      this._rule = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleInput() {
      return this._rule
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        bucket: cdktf.stringToTerraform(this._bucket),
        rule: cdktf.listMapper(s3ControlBucketLifecycleConfigurationRuleToTerraform)(this._rule),
      };
    }
  }
  export interface S3ControlBucketPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_policy.html#bucket S3ControlBucketPolicy#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_policy.html#policy S3ControlBucketPolicy#policy}
    */
    readonly policy: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_policy.html aws_s3control_bucket_policy}
  */
  export class S3ControlBucketPolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_s3control_bucket_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_policy.html aws_s3control_bucket_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3ControlBucketPolicyConfig
    */
    public constructor(scope: Construct, id: string, config: S3ControlBucketPolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_s3control_bucket_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._bucket = config.bucket;
      this._policy = config.policy;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // policy - computed: false, optional: false, required: true
    private _policy?: string; 
    public get policy() {
      return this.getStringAttribute('policy');
    }
    public set policy(value: string) {
      this._policy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
      return this._policy
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        bucket: cdktf.stringToTerraform(this._bucket),
        policy: cdktf.stringToTerraform(this._policy),
      };
    }
  }
  export interface S3OutpostsEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3outposts_endpoint.html#outpost_id S3OutpostsEndpoint#outpost_id}
    */
    readonly outpostId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3outposts_endpoint.html#security_group_id S3OutpostsEndpoint#security_group_id}
    */
    readonly securityGroupId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3outposts_endpoint.html#subnet_id S3OutpostsEndpoint#subnet_id}
    */
    readonly subnetId: string;
  }
  export class S3OutpostsEndpointNetworkInterfaces extends cdktf.ComplexComputedList {

    // network_interface_id - computed: true, optional: false, required: false
    public get networkInterfaceId() {
      return this.getStringAttribute('network_interface_id');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3outposts_endpoint.html aws_s3outposts_endpoint}
  */
  export class S3OutpostsEndpoint extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_s3outposts_endpoint";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3outposts_endpoint.html aws_s3outposts_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3OutpostsEndpointConfig
    */
    public constructor(scope: Construct, id: string, config: S3OutpostsEndpointConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_s3outposts_endpoint',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._outpostId = config.outpostId;
      this._securityGroupId = config.securityGroupId;
      this._subnetId = config.subnetId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // cidr_block - computed: true, optional: false, required: false
    public get cidrBlock() {
      return this.getStringAttribute('cidr_block');
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
      return this.getStringAttribute('creation_time');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // network_interfaces - computed: true, optional: false, required: false
    public networkInterfaces(index: string) {
      return new S3OutpostsEndpointNetworkInterfaces(this, 'network_interfaces', index);
    }

    // outpost_id - computed: false, optional: false, required: true
    private _outpostId?: string; 
    public get outpostId() {
      return this.getStringAttribute('outpost_id');
    }
    public set outpostId(value: string) {
      this._outpostId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get outpostIdInput() {
      return this._outpostId
    }

    // security_group_id - computed: false, optional: false, required: true
    private _securityGroupId?: string; 
    public get securityGroupId() {
      return this.getStringAttribute('security_group_id');
    }
    public set securityGroupId(value: string) {
      this._securityGroupId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdInput() {
      return this._securityGroupId
    }

    // subnet_id - computed: false, optional: false, required: true
    private _subnetId?: string; 
    public get subnetId() {
      return this.getStringAttribute('subnet_id');
    }
    public set subnetId(value: string) {
      this._subnetId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdInput() {
      return this._subnetId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        outpost_id: cdktf.stringToTerraform(this._outpostId),
        security_group_id: cdktf.stringToTerraform(this._securityGroupId),
        subnet_id: cdktf.stringToTerraform(this._subnetId),
      };
    }
  }
  export interface DataAwsS3BucketConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket.html#bucket DataAwsS3Bucket#bucket}
    */
    readonly bucket: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket.html aws_s3_bucket}
  */
  export class DataAwsS3Bucket extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_s3_bucket";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket.html aws_s3_bucket} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsS3BucketConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsS3BucketConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_s3_bucket',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._bucket = config.bucket;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
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

    // bucket_domain_name - computed: true, optional: false, required: false
    public get bucketDomainName() {
      return this.getStringAttribute('bucket_domain_name');
    }

    // bucket_regional_domain_name - computed: true, optional: false, required: false
    public get bucketRegionalDomainName() {
      return this.getStringAttribute('bucket_regional_domain_name');
    }

    // hosted_zone_id - computed: true, optional: false, required: false
    public get hostedZoneId() {
      return this.getStringAttribute('hosted_zone_id');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // region - computed: true, optional: false, required: false
    public get region() {
      return this.getStringAttribute('region');
    }

    // website_domain - computed: true, optional: false, required: false
    public get websiteDomain() {
      return this.getStringAttribute('website_domain');
    }

    // website_endpoint - computed: true, optional: false, required: false
    public get websiteEndpoint() {
      return this.getStringAttribute('website_endpoint');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        bucket: cdktf.stringToTerraform(this._bucket),
      };
    }
  }
  export interface DataAwsS3BucketObjectConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object.html#bucket DataAwsS3BucketObject#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object.html#key DataAwsS3BucketObject#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object.html#range DataAwsS3BucketObject#range}
    */
    readonly range?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object.html#tags DataAwsS3BucketObject#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object.html#version_id DataAwsS3BucketObject#version_id}
    */
    readonly versionId?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object.html aws_s3_bucket_object}
  */
  export class DataAwsS3BucketObject extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_s3_bucket_object";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object.html aws_s3_bucket_object} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsS3BucketObjectConfig
    */
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

    // bucket_key_enabled - computed: true, optional: false, required: false
    public get bucketKeyEnabled() {
      return this.getBooleanAttribute('bucket_key_enabled') as any;
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
    private _range?: string | undefined; 
    public get range() {
      return this.getStringAttribute('range');
    }
    public set range(value: string | undefined) {
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

    // version_id - computed: true, optional: true, required: false
    private _versionId?: string | undefined; 
    public get versionId() {
      return this.getStringAttribute('version_id');
    }
    public set versionId(value: string | undefined) {
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
  export interface DataAwsS3BucketObjectsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects.html#bucket DataAwsS3BucketObjects#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects.html#delimiter DataAwsS3BucketObjects#delimiter}
    */
    readonly delimiter?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects.html#encoding_type DataAwsS3BucketObjects#encoding_type}
    */
    readonly encodingType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects.html#fetch_owner DataAwsS3BucketObjects#fetch_owner}
    */
    readonly fetchOwner?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects.html#max_keys DataAwsS3BucketObjects#max_keys}
    */
    readonly maxKeys?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects.html#prefix DataAwsS3BucketObjects#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects.html#start_after DataAwsS3BucketObjects#start_after}
    */
    readonly startAfter?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects.html aws_s3_bucket_objects}
  */
  export class DataAwsS3BucketObjects extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_s3_bucket_objects";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects.html aws_s3_bucket_objects} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsS3BucketObjectsConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsS3BucketObjectsConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_s3_bucket_objects',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._bucket = config.bucket;
      this._delimiter = config.delimiter;
      this._encodingType = config.encodingType;
      this._fetchOwner = config.fetchOwner;
      this._maxKeys = config.maxKeys;
      this._prefix = config.prefix;
      this._startAfter = config.startAfter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // common_prefixes - computed: true, optional: false, required: false
    public get commonPrefixes() {
      return this.getListAttribute('common_prefixes');
    }

    // delimiter - computed: false, optional: true, required: false
    private _delimiter?: string | undefined; 
    public get delimiter() {
      return this.getStringAttribute('delimiter');
    }
    public set delimiter(value: string | undefined) {
      this._delimiter = value;
    }
    public resetDelimiter() {
      this._delimiter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get delimiterInput() {
      return this._delimiter
    }

    // encoding_type - computed: false, optional: true, required: false
    private _encodingType?: string | undefined; 
    public get encodingType() {
      return this.getStringAttribute('encoding_type');
    }
    public set encodingType(value: string | undefined) {
      this._encodingType = value;
    }
    public resetEncodingType() {
      this._encodingType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encodingTypeInput() {
      return this._encodingType
    }

    // fetch_owner - computed: false, optional: true, required: false
    private _fetchOwner?: boolean | cdktf.IResolvable | undefined; 
    public get fetchOwner() {
      return this.getBooleanAttribute('fetch_owner') as any;
    }
    public set fetchOwner(value: boolean | cdktf.IResolvable | undefined) {
      this._fetchOwner = value;
    }
    public resetFetchOwner() {
      this._fetchOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fetchOwnerInput() {
      return this._fetchOwner
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // keys - computed: true, optional: false, required: false
    public get keys() {
      return this.getListAttribute('keys');
    }

    // max_keys - computed: false, optional: true, required: false
    private _maxKeys?: number | undefined; 
    public get maxKeys() {
      return this.getNumberAttribute('max_keys');
    }
    public set maxKeys(value: number | undefined) {
      this._maxKeys = value;
    }
    public resetMaxKeys() {
      this._maxKeys = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxKeysInput() {
      return this._maxKeys
    }

    // owners - computed: true, optional: false, required: false
    public get owners() {
      return this.getListAttribute('owners');
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

    // start_after - computed: false, optional: true, required: false
    private _startAfter?: string | undefined; 
    public get startAfter() {
      return this.getStringAttribute('start_after');
    }
    public set startAfter(value: string | undefined) {
      this._startAfter = value;
    }
    public resetStartAfter() {
      this._startAfter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startAfterInput() {
      return this._startAfter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        bucket: cdktf.stringToTerraform(this._bucket),
        delimiter: cdktf.stringToTerraform(this._delimiter),
        encoding_type: cdktf.stringToTerraform(this._encodingType),
        fetch_owner: cdktf.booleanToTerraform(this._fetchOwner),
        max_keys: cdktf.numberToTerraform(this._maxKeys),
        prefix: cdktf.stringToTerraform(this._prefix),
        start_after: cdktf.stringToTerraform(this._startAfter),
      };
    }
  }
}
