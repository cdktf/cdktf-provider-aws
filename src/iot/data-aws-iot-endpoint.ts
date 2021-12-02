// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS IoT
*/
export interface DataAwsIotEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iot_endpoint.html#endpoint_type DataAwsIotEndpoint#endpoint_type}
  */
  readonly endpointType?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/iot_endpoint.html aws_iot_endpoint}
*/
export class DataAwsIotEndpoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_iot_endpoint";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iot_endpoint.html aws_iot_endpoint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsIotEndpointConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsIotEndpointConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_iot_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._endpointType = config.endpointType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint_address - computed: true, optional: false, required: false
  public get endpointAddress() {
    return this.getStringAttribute('endpoint_address');
  }

  // endpoint_type - computed: false, optional: true, required: false
  private _endpointType?: string; 
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }
  public set endpointType(value: string) {
    this._endpointType = value;
  }
  public resetEndpointType() {
    this._endpointType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTypeInput() {
    return this._endpointType;
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
      endpoint_type: cdktf.stringToTerraform(this._endpointType),
    };
  }
}
