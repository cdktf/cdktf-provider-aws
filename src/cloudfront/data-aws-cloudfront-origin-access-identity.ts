// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CloudFront
*/
export interface DataAwsCloudfrontOriginAccessIdentityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_access_identity#id DataAwsCloudfrontOriginAccessIdentity#id}
  */
  readonly id: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_access_identity aws_cloudfront_origin_access_identity}
*/
export class DataAwsCloudfrontOriginAccessIdentity extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_cloudfront_origin_access_identity";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_access_identity aws_cloudfront_origin_access_identity} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsCloudfrontOriginAccessIdentityConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsCloudfrontOriginAccessIdentityConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_origin_access_identity',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // caller_reference - computed: true, optional: false, required: false
  public get callerReference() {
    return this.getStringAttribute('caller_reference');
  }

  // cloudfront_access_identity_path - computed: true, optional: false, required: false
  public get cloudfrontAccessIdentityPath() {
    return this.getStringAttribute('cloudfront_access_identity_path');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // iam_arn - computed: true, optional: false, required: false
  public get iamArn() {
    return this.getStringAttribute('iam_arn');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // s3_canonical_user_id - computed: true, optional: false, required: false
  public get s3CanonicalUserId() {
    return this.getStringAttribute('s3_canonical_user_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
