// https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "auto_enable": {
        "type": "bool",
        "required": true
      },
      "detector_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GuarddutyOrganizationConfigurationConfig extends TerraformMetaArguments {
  readonly autoEnable: boolean;
  readonly detectorId: string;
}

// Resource

export class GuarddutyOrganizationConfiguration extends TerraformResource {

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
    return this._autoEnable;
  }
  public set autoEnable(value: boolean) {
    this._autoEnable = value;
  }

  // detector_id - computed: false, optional: false, required: true
  private _detectorId: string;
  public get detectorId() {
    return this._detectorId;
  }
  public set detectorId(value: string) {
    this._detectorId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_enable: this._autoEnable,
      detector_id: this._detectorId,
    };
  }
}
