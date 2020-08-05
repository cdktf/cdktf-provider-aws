// https://www.terraform.io/docs/providers/aws/r/iam_user_policy_attachment.html
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
      "user": {
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

export interface IamUserPolicyAttachmentConfig extends TerraformMetaArguments {
  readonly policyArn: string;
  readonly user: string;
}

// Resource

export class IamUserPolicyAttachment extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IamUserPolicyAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_user_policy_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._policyArn = config.policyArn;
    this._user = config.user;
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

  // user - computed: false, optional: false, required: true
  private _user: string;
  public get user() {
    return this._user;
  }
  public set user(value: string) {
    this._user = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      policy_arn: this._policyArn,
      user: this._user,
    };
  }
}
