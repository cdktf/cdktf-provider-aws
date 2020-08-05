// https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_association.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "resource_arn": {
        "type": "string",
        "required": true
      },
      "web_acl_arn": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface Wafv2WebAclAssociationConfig extends TerraformMetaArguments {
  readonly resourceArn: string;
  readonly webAclArn: string;
}

// Resource

export class Wafv2WebAclAssociation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Wafv2WebAclAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafv2_web_acl_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._resourceArn = config.resourceArn;
    this._webAclArn = config.webAclArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn: string;
  public get resourceArn() {
    return this._resourceArn;
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }

  // web_acl_arn - computed: false, optional: false, required: true
  private _webAclArn: string;
  public get webAclArn() {
    return this._webAclArn;
  }
  public set webAclArn(value: string) {
    this._webAclArn = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      resource_arn: this._resourceArn,
      web_acl_arn: this._webAclArn,
    };
  }
}
