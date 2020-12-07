// https://www.terraform.io/docs/providers/aws/r/iam_group_policy_attachment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamGroupPolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
  readonly group: string;
  readonly policyArn: string;
}

// Resource

export class IamGroupPolicyAttachment extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IamGroupPolicyAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_group_policy_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._group = config.group;
    this._policyArn = config.policyArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group - computed: false, optional: false, required: true
  private _group: string;
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group
  }

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group: cdktf.stringToTerraform(this._group),
      policy_arn: cdktf.stringToTerraform(this._policyArn),
    };
  }
}
