// https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3BucketOwnershipControlsConfig extends cdktf.TerraformMetaArguments {
  readonly bucket: string;
  /** rule block */
  readonly rule: S3BucketOwnershipControlsRule[];
}
export interface S3BucketOwnershipControlsRule {
  readonly objectOwnership: string;
}

function s3BucketOwnershipControlsRuleToTerraform(struct?: S3BucketOwnershipControlsRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object_ownership: cdktf.stringToTerraform(struct!.objectOwnership),
  }
}


// Resource

export class S3BucketOwnershipControls extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rule - computed: false, optional: false, required: true
  private _rule: S3BucketOwnershipControlsRule[];
  public get rule() {
    return this.interpolationForAttribute('rule') as any;
  }
  public set rule(value: S3BucketOwnershipControlsRule[]) {
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
      rule: cdktf.listMapper(s3BucketOwnershipControlsRuleToTerraform)(this._rule),
    };
  }
}
