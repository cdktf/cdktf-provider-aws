// https://www.terraform.io/docs/providers/aws/r/iam_role_policy_attachment.html
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
      "policy_arn": {
        "type": "string",
        "required": true
      },
      "role": {
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

export interface IamRolePolicyAttachmentConfig extends TerraformMetaArguments {
  readonly policyArn: string;
  readonly role: string;
}

// Resource

export class IamRolePolicyAttachment extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IamRolePolicyAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_role_policy_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._policyArn = config.policyArn;
    this._role = config.role;
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

  // policy_arn - computed: false, optional: false, required: true
  private _policyArn: string;
  public get policyArn() {
    return this._policyArn;
  }
  public set policyArn(value: string) {
    this._policyArn = value;
  }

  // role - computed: false, optional: false, required: true
  private _role: string;
  public get role() {
    return this._role;
  }
  public set role(value: string) {
    this._role = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      policy_arn: this._policyArn,
      role: this._role,
    };
  }
}
