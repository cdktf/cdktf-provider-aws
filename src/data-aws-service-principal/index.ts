// https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/data-sources/service_principal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsServicePrincipalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/data-sources/service_principal#region DataAwsServicePrincipal#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/data-sources/service_principal#service_name DataAwsServicePrincipal#service_name}
  */
  readonly serviceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/data-sources/service_principal aws_service_principal}
*/
export class DataAwsServicePrincipal extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_service_principal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsServicePrincipal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsServicePrincipal to import
  * @param importFromId The id of the existing DataAwsServicePrincipal that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/data-sources/service_principal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsServicePrincipal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_service_principal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/data-sources/service_principal aws_service_principal} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsServicePrincipalConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsServicePrincipalConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_service_principal',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.68.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._region = config.region;
    this._serviceName = config.serviceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // suffix - computed: true, optional: false, required: false
  public get suffix() {
    return this.getStringAttribute('suffix');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region: cdktf.stringToTerraform(this._region),
      service_name: cdktf.stringToTerraform(this._serviceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
