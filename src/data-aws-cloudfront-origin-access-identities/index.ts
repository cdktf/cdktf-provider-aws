/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/data-sources/cloudfront_origin_access_identities
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsCloudfrontOriginAccessIdentitiesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/data-sources/cloudfront_origin_access_identities#comments DataAwsCloudfrontOriginAccessIdentities#comments}
  */
  readonly comments?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/data-sources/cloudfront_origin_access_identities#id DataAwsCloudfrontOriginAccessIdentities#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/data-sources/cloudfront_origin_access_identities aws_cloudfront_origin_access_identities}
*/
export class DataAwsCloudfrontOriginAccessIdentities extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudfront_origin_access_identities";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsCloudfrontOriginAccessIdentities resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsCloudfrontOriginAccessIdentities to import
  * @param importFromId The id of the existing DataAwsCloudfrontOriginAccessIdentities that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/data-sources/cloudfront_origin_access_identities#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsCloudfrontOriginAccessIdentities to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudfront_origin_access_identities", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/data-sources/cloudfront_origin_access_identities aws_cloudfront_origin_access_identities} Data Source
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
        providerVersion: '5.64.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comments = config.comments;
    this._id = config.id;
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
      comments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._comments),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comments: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._comments),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
