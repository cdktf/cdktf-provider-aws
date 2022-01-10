// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Direct Connect
*/
export interface DataAwsDxLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dx_location#location_code DataAwsDxLocation#location_code}
  */
  readonly locationCode: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/dx_location aws_dx_location}
*/
export class DataAwsDxLocation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_dx_location";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/dx_location aws_dx_location} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsDxLocationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsDxLocationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dx_location',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._locationCode = config.locationCode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // available_port_speeds - computed: true, optional: false, required: false
  public get availablePortSpeeds() {
    return this.getListAttribute('available_port_speeds');
  }

  // available_providers - computed: true, optional: false, required: false
  public get availableProviders() {
    return this.getListAttribute('available_providers');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location_code - computed: false, optional: false, required: true
  private _locationCode?: string; 
  public get locationCode() {
    return this.getStringAttribute('location_code');
  }
  public set locationCode(value: string) {
    this._locationCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationCodeInput() {
    return this._locationCode;
  }

  // location_name - computed: true, optional: false, required: false
  public get locationName() {
    return this.getStringAttribute('location_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location_code: cdktf.stringToTerraform(this._locationCode),
    };
  }
}
