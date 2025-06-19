/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/s3_bucket_object_lock_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3BucketObjectLockConfigurationAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/s3_bucket_object_lock_configuration#bucket S3BucketObjectLockConfigurationA#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/s3_bucket_object_lock_configuration#expected_bucket_owner S3BucketObjectLockConfigurationA#expected_bucket_owner}
  */
  readonly expectedBucketOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/s3_bucket_object_lock_configuration#id S3BucketObjectLockConfigurationA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/s3_bucket_object_lock_configuration#object_lock_enabled S3BucketObjectLockConfigurationA#object_lock_enabled}
  */
  readonly objectLockEnabled?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/s3_bucket_object_lock_configuration#region S3BucketObjectLockConfigurationA#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/s3_bucket_object_lock_configuration#token S3BucketObjectLockConfigurationA#token}
  */
  readonly token?: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/s3_bucket_object_lock_configuration#rule S3BucketObjectLockConfigurationA#rule}
  */
  readonly rule?: S3BucketObjectLockConfigurationRuleA;
}
export interface S3BucketObjectLockConfigurationRuleDefaultRetentionA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/s3_bucket_object_lock_configuration#days S3BucketObjectLockConfigurationA#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/s3_bucket_object_lock_configuration#mode S3BucketObjectLockConfigurationA#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/s3_bucket_object_lock_configuration#years S3BucketObjectLockConfigurationA#years}
  */
  readonly years?: number;
}

export function s3BucketObjectLockConfigurationRuleDefaultRetentionAToTerraform(struct?: S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference | S3BucketObjectLockConfigurationRuleDefaultRetentionA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    mode: cdktf.stringToTerraform(struct!.mode),
    years: cdktf.numberToTerraform(struct!.years),
  }
}


export function s3BucketObjectLockConfigurationRuleDefaultRetentionAToHclTerraform(struct?: S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference | S3BucketObjectLockConfigurationRuleDefaultRetentionA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    years: {
      value: cdktf.numberToHclTerraform(struct!.years),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3BucketObjectLockConfigurationRuleDefaultRetentionA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._years !== undefined) {
      hasAnyValues = true;
      internalValueResult.years = this._years;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketObjectLockConfigurationRuleDefaultRetentionA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._mode = undefined;
      this._years = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._mode = value.mode;
      this._years = value.years;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // years - computed: false, optional: true, required: false
  private _years?: number; 
  public get years() {
    return this.getNumberAttribute('years');
  }
  public set years(value: number) {
    this._years = value;
  }
  public resetYears() {
    this._years = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearsInput() {
    return this._years;
  }
}
export interface S3BucketObjectLockConfigurationRuleA {
  /**
  * default_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/s3_bucket_object_lock_configuration#default_retention S3BucketObjectLockConfigurationA#default_retention}
  */
  readonly defaultRetention: S3BucketObjectLockConfigurationRuleDefaultRetentionA;
}

export function s3BucketObjectLockConfigurationRuleAToTerraform(struct?: S3BucketObjectLockConfigurationRuleAOutputReference | S3BucketObjectLockConfigurationRuleA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_retention: s3BucketObjectLockConfigurationRuleDefaultRetentionAToTerraform(struct!.defaultRetention),
  }
}


export function s3BucketObjectLockConfigurationRuleAToHclTerraform(struct?: S3BucketObjectLockConfigurationRuleAOutputReference | S3BucketObjectLockConfigurationRuleA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_retention: {
      value: s3BucketObjectLockConfigurationRuleDefaultRetentionAToHclTerraform(struct!.defaultRetention),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketObjectLockConfigurationRuleDefaultRetentionAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketObjectLockConfigurationRuleAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3BucketObjectLockConfigurationRuleA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRetention = this._defaultRetention?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketObjectLockConfigurationRuleA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultRetention.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultRetention.internalValue = value.defaultRetention;
    }
  }

  // default_retention - computed: false, optional: false, required: true
  private _defaultRetention = new S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference(this, "default_retention");
  public get defaultRetention() {
    return this._defaultRetention;
  }
  public putDefaultRetention(value: S3BucketObjectLockConfigurationRuleDefaultRetentionA) {
    this._defaultRetention.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRetentionInput() {
    return this._defaultRetention.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/s3_bucket_object_lock_configuration aws_s3_bucket_object_lock_configuration}
*/
export class S3BucketObjectLockConfigurationA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3_bucket_object_lock_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a S3BucketObjectLockConfigurationA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3BucketObjectLockConfigurationA to import
  * @param importFromId The id of the existing S3BucketObjectLockConfigurationA that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/s3_bucket_object_lock_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3BucketObjectLockConfigurationA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_s3_bucket_object_lock_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/s3_bucket_object_lock_configuration aws_s3_bucket_object_lock_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3BucketObjectLockConfigurationAConfig
  */
  public constructor(scope: Construct, id: string, config: S3BucketObjectLockConfigurationAConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_bucket_object_lock_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.0.0',
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
    this._expectedBucketOwner = config.expectedBucketOwner;
    this._id = config.id;
    this._objectLockEnabled = config.objectLockEnabled;
    this._region = config.region;
    this._token = config.token;
    this._rule.internalValue = config.rule;
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

  // expected_bucket_owner - computed: false, optional: true, required: false
  private _expectedBucketOwner?: string; 
  public get expectedBucketOwner() {
    return this.getStringAttribute('expected_bucket_owner');
  }
  public set expectedBucketOwner(value: string) {
    this._expectedBucketOwner = value;
  }
  public resetExpectedBucketOwner() {
    this._expectedBucketOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedBucketOwnerInput() {
    return this._expectedBucketOwner;
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

  // object_lock_enabled - computed: false, optional: true, required: false
  private _objectLockEnabled?: string; 
  public get objectLockEnabled() {
    return this.getStringAttribute('object_lock_enabled');
  }
  public set objectLockEnabled(value: string) {
    this._objectLockEnabled = value;
  }
  public resetObjectLockEnabled() {
    this._objectLockEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectLockEnabledInput() {
    return this._objectLockEnabled;
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

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new S3BucketObjectLockConfigurationRuleAOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }
  public putRule(value: S3BucketObjectLockConfigurationRuleA) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      expected_bucket_owner: cdktf.stringToTerraform(this._expectedBucketOwner),
      id: cdktf.stringToTerraform(this._id),
      object_lock_enabled: cdktf.stringToTerraform(this._objectLockEnabled),
      region: cdktf.stringToTerraform(this._region),
      token: cdktf.stringToTerraform(this._token),
      rule: s3BucketObjectLockConfigurationRuleAToTerraform(this._rule.internalValue),
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
      expected_bucket_owner: {
        value: cdktf.stringToHclTerraform(this._expectedBucketOwner),
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
      object_lock_enabled: {
        value: cdktf.stringToHclTerraform(this._objectLockEnabled),
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
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: s3BucketObjectLockConfigurationRuleAToHclTerraform(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "S3BucketObjectLockConfigurationRuleAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
