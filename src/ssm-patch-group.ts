// https://www.terraform.io/docs/providers/aws/r/ssm_patch_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsmPatchGroupConfig extends cdktf.TerraformMetaArguments {
  readonly baselineId: string;
  readonly patchGroup: string;
}

// Resource

export class SsmPatchGroup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SsmPatchGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssm_patch_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._baselineId = config.baselineId;
    this._patchGroup = config.patchGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // baseline_id - computed: false, optional: false, required: true
  private _baselineId: string;
  public get baselineId() {
    return this.getStringAttribute('baseline_id');
  }
  public set baselineId(value: string) {
    this._baselineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineIdInput() {
    return this._baselineId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // patch_group - computed: false, optional: false, required: true
  private _patchGroup: string;
  public get patchGroup() {
    return this.getStringAttribute('patch_group');
  }
  public set patchGroup(value: string) {
    this._patchGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patchGroupInput() {
    return this._patchGroup
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      baseline_id: cdktf.stringToTerraform(this._baselineId),
      patch_group: cdktf.stringToTerraform(this._patchGroup),
    };
  }
}
