// https://www.terraform.io/docs/providers/aws/r/efs_file_system_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EfsFileSystemPolicyConfig extends cdktf.TerraformMetaArguments {
  readonly fileSystemId: string;
  readonly policy: string;
}

// Resource

export class EfsFileSystemPolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: EfsFileSystemPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_efs_file_system_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._fileSystemId = config.fileSystemId;
    this._policy = config.policy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId: string;
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy - computed: false, optional: false, required: true
  private _policy: string;
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      file_system_id: cdktf.stringToTerraform(this._fileSystemId),
      policy: cdktf.stringToTerraform(this._policy),
    };
  }
}
