/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_bucket_intelligent_tiering_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3BucketIntelligentTieringConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_bucket_intelligent_tiering_configuration#bucket S3BucketIntelligentTieringConfiguration#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_bucket_intelligent_tiering_configuration#id S3BucketIntelligentTieringConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_bucket_intelligent_tiering_configuration#name S3BucketIntelligentTieringConfiguration#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_bucket_intelligent_tiering_configuration#region S3BucketIntelligentTieringConfiguration#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_bucket_intelligent_tiering_configuration#status S3BucketIntelligentTieringConfiguration#status}
  */
  readonly status?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_bucket_intelligent_tiering_configuration#filter S3BucketIntelligentTieringConfiguration#filter}
  */
  readonly filter?: S3BucketIntelligentTieringConfigurationFilter;
  /**
  * tiering block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_bucket_intelligent_tiering_configuration#tiering S3BucketIntelligentTieringConfiguration#tiering}
  */
  readonly tiering: S3BucketIntelligentTieringConfigurationTiering[] | cdktf.IResolvable;
}
export interface S3BucketIntelligentTieringConfigurationFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_bucket_intelligent_tiering_configuration#prefix S3BucketIntelligentTieringConfiguration#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_bucket_intelligent_tiering_configuration#tags S3BucketIntelligentTieringConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function s3BucketIntelligentTieringConfigurationFilterToTerraform(struct?: S3BucketIntelligentTieringConfigurationFilterOutputReference | S3BucketIntelligentTieringConfigurationFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function s3BucketIntelligentTieringConfigurationFilterToHclTerraform(struct?: S3BucketIntelligentTieringConfigurationFilterOutputReference | S3BucketIntelligentTieringConfigurationFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketIntelligentTieringConfigurationFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3BucketIntelligentTieringConfigurationFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketIntelligentTieringConfigurationFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefix = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_bucket_intelligent_tiering_configuration#access_tier S3BucketIntelligentTieringConfiguration#access_tier}
  */
  readonly accessTier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_bucket_intelligent_tiering_configuration#days S3BucketIntelligentTieringConfiguration#days}
  */
  readonly days: number;
}

export function s3BucketIntelligentTieringConfigurationTieringToTerraform(struct?: S3BucketIntelligentTieringConfigurationTiering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_tier: cdktf.stringToTerraform(struct!.accessTier),
    days: cdktf.numberToTerraform(struct!.days),
  }
}


export function s3BucketIntelligentTieringConfigurationTieringToHclTerraform(struct?: S3BucketIntelligentTieringConfigurationTiering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_tier: {
      value: cdktf.stringToHclTerraform(struct!.accessTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketIntelligentTieringConfigurationTieringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): S3BucketIntelligentTieringConfigurationTiering | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTier = this._accessTier;
    }
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketIntelligentTieringConfigurationTiering | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessTier = undefined;
      this._days = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessTier = value.accessTier;
      this._days = value.days;
    }
  }

  // access_tier - computed: false, optional: false, required: true
  private _accessTier?: string; 
  public get accessTier() {
    return this.getStringAttribute('access_tier');
  }
  public set accessTier(value: string) {
    this._accessTier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTierInput() {
    return this._accessTier;
  }

  // days - computed: false, optional: false, required: true
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }
}

export class S3BucketIntelligentTieringConfigurationTieringList extends cdktf.ComplexList {
  public internalValue? : S3BucketIntelligentTieringConfigurationTiering[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): S3BucketIntelligentTieringConfigurationTieringOutputReference {
    return new S3BucketIntelligentTieringConfigurationTieringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_bucket_intelligent_tiering_configuration aws_s3_bucket_intelligent_tiering_configuration}
*/
export class S3BucketIntelligentTieringConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3_bucket_intelligent_tiering_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a S3BucketIntelligentTieringConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3BucketIntelligentTieringConfiguration to import
  * @param importFromId The id of the existing S3BucketIntelligentTieringConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_bucket_intelligent_tiering_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3BucketIntelligentTieringConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_s3_bucket_intelligent_tiering_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_bucket_intelligent_tiering_configuration aws_s3_bucket_intelligent_tiering_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3BucketIntelligentTieringConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: S3BucketIntelligentTieringConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_bucket_intelligent_tiering_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.10.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucket = config.bucket;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._status = config.status;
    this._filter.internalValue = config.filter;
    this._tiering.internalValue = config.tiering;
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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
  private _filter = new S3BucketIntelligentTieringConfigurationFilterOutputReference(this, "filter");
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
  private _tiering = new S3BucketIntelligentTieringConfigurationTieringList(this, "tiering", true);
  public get tiering() {
    return this._tiering;
  }
  public putTiering(value: S3BucketIntelligentTieringConfigurationTiering[] | cdktf.IResolvable) {
    this._tiering.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tieringInput() {
    return this._tiering.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      status: cdktf.stringToTerraform(this._status),
      filter: s3BucketIntelligentTieringConfigurationFilterToTerraform(this._filter.internalValue),
      tiering: cdktf.listMapper(s3BucketIntelligentTieringConfigurationTieringToTerraform, true)(this._tiering.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: s3BucketIntelligentTieringConfigurationFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "S3BucketIntelligentTieringConfigurationFilterList",
      },
      tiering: {
        value: cdktf.listMapperHcl(s3BucketIntelligentTieringConfigurationTieringToHclTerraform, true)(this._tiering.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "S3BucketIntelligentTieringConfigurationTieringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
