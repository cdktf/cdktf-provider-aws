// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CloudFront
*/
export interface DataAwsCloudfrontOriginAccessIdentitiesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_access_identities#comments DataAwsCloudfrontOriginAccessIdentities#comments}
  */
  readonly comments?: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_access_identities aws_cloudfront_origin_access_identities}
*/
export class DataAwsCloudfrontOriginAccessIdentities extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudfront_origin_access_identities";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_access_identities aws_cloudfront_origin_access_identities} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsCloudfrontOriginAccessIdentitiesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsCloudfrontOriginAccessIdentitiesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_origin_access_identities',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.12.1',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._comments = config.comments;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comments - computed: false, optional: true, required: false
  private _comments?: string[]; 
  public get comments() {
    return cdktf.Fn.tolist(this.getListAttribute('comments'));
  }
  public set comments(value: string[]) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // iam_arns - computed: true, optional: false, required: false
  public get iamArns() {
    return cdktf.Fn.tolist(this.getListAttribute('iam_arns'));
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return cdktf.Fn.tolist(this.getListAttribute('ids'));
  }

  // s3_canonical_user_ids - computed: true, optional: false, required: false
  public get s3CanonicalUserIds() {
    return cdktf.Fn.tolist(this.getListAttribute('s3_canonical_user_ids'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comments: cdktf.listMapper(cdktf.stringToTerraform)(this._comments),
    };
  }
}
