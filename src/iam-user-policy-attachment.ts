// https://www.terraform.io/docs/providers/aws/r/iam_user_policy_attachment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamUserPolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
  readonly policyArn: string;
  readonly user: string;
}

// Resource

export class IamUserPolicyAttachment extends cdktf.TerraformResource {

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
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy_arn - computed: false, optional: false, required: true
  private _policyArn: string;
  public get policyArn() {
    return this.getStringAttribute('policy_arn');
  }
  public set policyArn(value: string) {
    this._policyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyArnInput() {
    return this._policyArn
  }

  // user - computed: false, optional: false, required: true
  private _user: string;
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      policy_arn: cdktf.stringToTerraform(this._policyArn),
      user: cdktf.stringToTerraform(this._user),
    };
  }
}
