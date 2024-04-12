/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/data-sources/api_gateway_export
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsApiGatewayExportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/data-sources/api_gateway_export#accepts DataAwsApiGatewayExport#accepts}
  */
  readonly accepts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/data-sources/api_gateway_export#export_type DataAwsApiGatewayExport#export_type}
  */
  readonly exportType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/data-sources/api_gateway_export#id DataAwsApiGatewayExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/data-sources/api_gateway_export#parameters DataAwsApiGatewayExport#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/data-sources/api_gateway_export#rest_api_id DataAwsApiGatewayExport#rest_api_id}
  */
  readonly restApiId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/data-sources/api_gateway_export#stage_name DataAwsApiGatewayExport#stage_name}
  */
  readonly stageName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/data-sources/api_gateway_export aws_api_gateway_export}
*/
export class DataAwsApiGatewayExport extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_api_gateway_export";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsApiGatewayExport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsApiGatewayExport to import
  * @param importFromId The id of the existing DataAwsApiGatewayExport that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/data-sources/api_gateway_export#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsApiGatewayExport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_api_gateway_export", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/data-sources/api_gateway_export aws_api_gateway_export} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsApiGatewayExportConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsApiGatewayExportConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_export',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.45.0',
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
    this._accepts = config.accepts;
    this._exportType = config.exportType;
    this._id = config.id;
    this._parameters = config.parameters;
    this._restApiId = config.restApiId;
    this._stageName = config.stageName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accepts - computed: false, optional: true, required: false
  private _accepts?: string; 
  public get accepts() {
    return this.getStringAttribute('accepts');
  }
  public set accepts(value: string) {
    this._accepts = value;
  }
  public resetAccepts() {
    this._accepts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptsInput() {
    return this._accepts;
  }

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
  }

  // content_disposition - computed: true, optional: false, required: false
  public get contentDisposition() {
    return this.getStringAttribute('content_disposition');
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // export_type - computed: false, optional: false, required: true
  private _exportType?: string; 
  public get exportType() {
    return this.getStringAttribute('export_type');
  }
  public set exportType(value: string) {
    this._exportType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportTypeInput() {
    return this._exportType;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // rest_api_id - computed: false, optional: false, required: true
  private _restApiId?: string; 
  public get restApiId() {
    return this.getStringAttribute('rest_api_id');
  }
  public set restApiId(value: string) {
    this._restApiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restApiIdInput() {
    return this._restApiId;
  }

  // stage_name - computed: false, optional: false, required: true
  private _stageName?: string; 
  public get stageName() {
    return this.getStringAttribute('stage_name');
  }
  public set stageName(value: string) {
    this._stageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stageNameInput() {
    return this._stageName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accepts: cdktf.stringToTerraform(this._accepts),
      export_type: cdktf.stringToTerraform(this._exportType),
      id: cdktf.stringToTerraform(this._id),
      parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._parameters),
      rest_api_id: cdktf.stringToTerraform(this._restApiId),
      stage_name: cdktf.stringToTerraform(this._stageName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accepts: {
        value: cdktf.stringToHclTerraform(this._accepts),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      export_type: {
        value: cdktf.stringToHclTerraform(this._exportType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._parameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      rest_api_id: {
        value: cdktf.stringToHclTerraform(this._restApiId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stage_name: {
        value: cdktf.stringToHclTerraform(this._stageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
