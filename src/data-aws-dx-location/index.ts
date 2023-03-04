// https://www.terraform.io/docs/providers/aws/d/dx_location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsDxLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dx_location#id DataAwsDxLocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
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
  public static readonly tfResourceType = "aws_dx_location";

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
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._locationCode = config.locationCode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // available_macsec_port_speeds - computed: true, optional: false, required: false
  public get availableMacsecPortSpeeds() {
    return this.getListAttribute('available_macsec_port_speeds');
  }

  // available_port_speeds - computed: true, optional: false, required: false
  public get availablePortSpeeds() {
    return this.getListAttribute('available_port_speeds');
  }

  // available_providers - computed: true, optional: false, required: false
  public get availableProviders() {
    return this.getListAttribute('available_providers');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
      id: cdktf.stringToTerraform(this._id),
      location_code: cdktf.stringToTerraform(this._locationCode),
    };
  }
}
