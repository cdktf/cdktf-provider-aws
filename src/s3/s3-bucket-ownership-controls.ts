// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Simple Storage Service
*/
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

export function s3BucketOwnershipControlsRuleToTerraform(struct?: S3BucketOwnershipControlsRuleOutputReference | S3BucketOwnershipControlsRule): any {
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

  public get internalValue(): S3BucketOwnershipControlsRule | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._objectOwnership) {
      hasAnyValues = true;
      internalValueResult.objectOwnership = this._objectOwnership;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketOwnershipControlsRule | undefined) {
    if (value === undefined) {
      this._objectOwnership = undefined;
    }
    else {
      this._objectOwnership = value.objectOwnership;
    }
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
    return this._objectOwnership;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new S3BucketOwnershipControlsRuleOutputReference(this as any, "rule", true);
  public get rule() {
    return this._rule;
  }
  public putRule(value: S3BucketOwnershipControlsRule) {
    this._rule.internalValue = value;
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
      rule: s3BucketOwnershipControlsRuleToTerraform(this._rule.internalValue),
    };
  }
}
