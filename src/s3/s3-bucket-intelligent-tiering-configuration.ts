// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Simple Storage Service
*/
export interface S3BucketIntelligentTieringConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration.html#bucket S3BucketIntelligentTieringConfiguration#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration.html#name S3BucketIntelligentTieringConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration.html#status S3BucketIntelligentTieringConfiguration#status}
  */
  readonly status?: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration.html#filter S3BucketIntelligentTieringConfiguration#filter}
  */
  readonly filter?: S3BucketIntelligentTieringConfigurationFilter;
  /**
  * tiering block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration.html#tiering S3BucketIntelligentTieringConfiguration#tiering}
  */
  readonly tiering: S3BucketIntelligentTieringConfigurationTiering[];
}
export interface S3BucketIntelligentTieringConfigurationFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration.html#prefix S3BucketIntelligentTieringConfiguration#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration.html#tags S3BucketIntelligentTieringConfiguration#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
}

export function s3BucketIntelligentTieringConfigurationFilterToTerraform(struct?: S3BucketIntelligentTieringConfigurationFilterOutputReference | S3BucketIntelligentTieringConfigurationFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
  }
}

export class S3BucketIntelligentTieringConfigurationFilterOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): S3BucketIntelligentTieringConfigurationFilter | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._prefix) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._tags) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketIntelligentTieringConfigurationFilter | undefined) {
    if (value === undefined) {
      this._prefix = undefined;
      this._tags = undefined;
    }
    else {
      this._prefix = value.prefix;
      this._tags = value.tags;
    }
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface S3BucketIntelligentTieringConfigurationTiering {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration.html#access_tier S3BucketIntelligentTieringConfiguration#access_tier}
  */
  readonly accessTier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration.html#days S3BucketIntelligentTieringConfiguration#days}
  */
  readonly days: number;
}

export function s3BucketIntelligentTieringConfigurationTieringToTerraform(struct?: S3BucketIntelligentTieringConfigurationTiering): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_tier: cdktf.stringToTerraform(struct!.accessTier),
    days: cdktf.numberToTerraform(struct!.days),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration.html aws_s3_bucket_intelligent_tiering_configuration}
*/
export class S3BucketIntelligentTieringConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_s3_bucket_intelligent_tiering_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration.html aws_s3_bucket_intelligent_tiering_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3BucketIntelligentTieringConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: S3BucketIntelligentTieringConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_bucket_intelligent_tiering_configuration',
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
    this._status = config.status;
    this._filter.internalValue = config.filter;
    this._tiering = config.tiering;
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
    return this._bucket;
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
    return this._name;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new S3BucketIntelligentTieringConfigurationFilterOutputReference(this as any, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: S3BucketIntelligentTieringConfigurationFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // tiering - computed: false, optional: false, required: true
  private _tiering?: S3BucketIntelligentTieringConfigurationTiering[]; 
  public get tiering() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tiering') as any;
  }
  public set tiering(value: S3BucketIntelligentTieringConfigurationTiering[]) {
    this._tiering = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tieringInput() {
    return this._tiering;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      name: cdktf.stringToTerraform(this._name),
      status: cdktf.stringToTerraform(this._status),
      filter: s3BucketIntelligentTieringConfigurationFilterToTerraform(this._filter.internalValue),
      tiering: cdktf.listMapper(s3BucketIntelligentTieringConfigurationTieringToTerraform)(this._tiering),
    };
  }
}
