// https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GuarddutyOrganizationConfigurationConfig extends cdktf.TerraformMetaArguments {
  readonly autoEnable: boolean;
  readonly detectorId: string;
}

// Resource

export class GuarddutyOrganizationConfiguration extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GuarddutyOrganizationConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_guardduty_organization_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoEnable = config.autoEnable;
    this._detectorId = config.detectorId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_enable - computed: false, optional: false, required: true
  private _autoEnable: boolean;
  public get autoEnable() {
    return this.getBooleanAttribute('auto_enable');
  }
  public set autoEnable(value: boolean) {
    this._autoEnable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoEnableInput() {
    return this._autoEnable
  }

  // detector_id - computed: false, optional: false, required: true
  private _detectorId: string;
  public get detectorId() {
    return this.getStringAttribute('detector_id');
  }
  public set detectorId(value: string) {
    this._detectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorIdInput() {
    return this._detectorId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_enable: cdktf.booleanToTerraform(this._autoEnable),
      detector_id: cdktf.stringToTerraform(this._detectorId),
    };
  }
}
