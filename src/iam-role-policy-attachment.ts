// https://www.terraform.io/docs/providers/aws/r/iam_role_policy_attachment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamRolePolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
  readonly policyArn: string;
  readonly role: string;
}

// Resource

export class IamRolePolicyAttachment extends cdktf.TerraformResource {

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

  // role - computed: false, optional: false, required: true
  private _role: string;
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      policy_arn: cdktf.stringToTerraform(this._policyArn),
      role: cdktf.stringToTerraform(this._role),
    };
  }
}
