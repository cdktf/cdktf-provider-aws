// https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_resource_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudwatchLogResourcePolicyConfig extends cdktf.TerraformMetaArguments {
  readonly policyDocument: string;
  readonly policyName: string;
}

// Resource

export class CloudwatchLogResourcePolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CloudwatchLogResourcePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_log_resource_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._policyDocument = config.policyDocument;
    this._policyName = config.policyName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy_document - computed: false, optional: false, required: true
  private _policyDocument: string;
  public get policyDocument() {
    return this.getStringAttribute('policy_document');
  }
  public set policyDocument(value: string) {
    this._policyDocument = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDocumentInput() {
    return this._policyDocument
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName: string;
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      policy_document: cdktf.stringToTerraform(this._policyDocument),
      policy_name: cdktf.stringToTerraform(this._policyName),
    };
  }
}
