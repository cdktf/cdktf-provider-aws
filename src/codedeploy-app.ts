// https://www.terraform.io/docs/providers/aws/r/codedeploy_app.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CodedeployAppConfig extends cdktf.TerraformMetaArguments {
  readonly computePlatform?: string;
  readonly name: string;
  readonly uniqueId?: string;
}

// Resource

export class CodedeployApp extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CodedeployAppConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codedeploy_app',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._computePlatform = config.computePlatform;
    this._name = config.name;
    this._uniqueId = config.uniqueId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compute_platform - computed: false, optional: true, required: false
  private _computePlatform?: string;
  public get computePlatform() {
    return this.getStringAttribute('compute_platform');
  }
  public set computePlatform(value: string ) {
    this._computePlatform = value;
  }
  public resetComputePlatform() {
    this._computePlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computePlatformInput() {
    return this._computePlatform
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // unique_id - computed: true, optional: true, required: false
  private _uniqueId?: string;
  public get uniqueId() {
    return this.getStringAttribute('unique_id');
  }
  public set uniqueId(value: string) {
    this._uniqueId = value;
  }
  public resetUniqueId() {
    this._uniqueId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueIdInput() {
    return this._uniqueId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compute_platform: cdktf.stringToTerraform(this._computePlatform),
      name: cdktf.stringToTerraform(this._name),
      unique_id: cdktf.stringToTerraform(this._uniqueId),
    };
  }
}
