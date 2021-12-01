// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CloudFront
*/
export interface CloudfrontOriginAccessIdentityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_identity.html#comment CloudfrontOriginAccessIdentity#comment}
  */
  readonly comment?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_identity.html aws_cloudfront_origin_access_identity}
*/
export class CloudfrontOriginAccessIdentity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_cloudfront_origin_access_identity";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_identity.html aws_cloudfront_origin_access_identity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontOriginAccessIdentityConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CloudfrontOriginAccessIdentityConfig = {}) {
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
    this._comment = config.comment;
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

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // iam_arn - computed: true, optional: false, required: false
  public get iamArn() {
    return this.getStringAttribute('iam_arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      comment: cdktf.stringToTerraform(this._comment),
    };
  }
}
