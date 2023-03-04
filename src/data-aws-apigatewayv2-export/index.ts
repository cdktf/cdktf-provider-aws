// https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsApigatewayv2ExportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#api_id DataAwsApigatewayv2Export#api_id}
  */
  readonly apiId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#export_version DataAwsApigatewayv2Export#export_version}
  */
  readonly exportVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#id DataAwsApigatewayv2Export#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#include_extensions DataAwsApigatewayv2Export#include_extensions}
  */
  readonly includeExtensions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#output_type DataAwsApigatewayv2Export#output_type}
  */
  readonly outputType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#specification DataAwsApigatewayv2Export#specification}
  */
  readonly specification: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#stage_name DataAwsApigatewayv2Export#stage_name}
  */
  readonly stageName?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export aws_apigatewayv2_export}
*/
export class DataAwsApigatewayv2Export extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_apigatewayv2_export";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export aws_apigatewayv2_export} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsApigatewayv2ExportConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsApigatewayv2ExportConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_apigatewayv2_export',
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
    this._apiId = config.apiId;
    this._exportVersion = config.exportVersion;
    this._id = config.id;
    this._includeExtensions = config.includeExtensions;
    this._outputType = config.outputType;
    this._specification = config.specification;
    this._stageName = config.stageName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id - computed: false, optional: false, required: true
  private _apiId?: string; 
  public get apiId() {
    return this.getStringAttribute('api_id');
  }
  public set apiId(value: string) {
    this._apiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId;
  }

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
  }

  // export_version - computed: false, optional: true, required: false
  private _exportVersion?: string; 
  public get exportVersion() {
    return this.getStringAttribute('export_version');
  }
  public set exportVersion(value: string) {
    this._exportVersion = value;
  }
  public resetExportVersion() {
    this._exportVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportVersionInput() {
    return this._exportVersion;
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

  // include_extensions - computed: false, optional: true, required: false
  private _includeExtensions?: boolean | cdktf.IResolvable; 
  public get includeExtensions() {
    return this.getBooleanAttribute('include_extensions');
  }
  public set includeExtensions(value: boolean | cdktf.IResolvable) {
    this._includeExtensions = value;
  }
  public resetIncludeExtensions() {
    this._includeExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeExtensionsInput() {
    return this._includeExtensions;
  }

  // output_type - computed: false, optional: false, required: true
  private _outputType?: string; 
  public get outputType() {
    return this.getStringAttribute('output_type');
  }
  public set outputType(value: string) {
    this._outputType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputTypeInput() {
    return this._outputType;
  }

  // specification - computed: false, optional: false, required: true
  private _specification?: string; 
  public get specification() {
    return this.getStringAttribute('specification');
  }
  public set specification(value: string) {
    this._specification = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specificationInput() {
    return this._specification;
  }

  // stage_name - computed: false, optional: true, required: false
  private _stageName?: string; 
  public get stageName() {
    return this.getStringAttribute('stage_name');
  }
  public set stageName(value: string) {
    this._stageName = value;
  }
  public resetStageName() {
    this._stageName = undefined;
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
      api_id: cdktf.stringToTerraform(this._apiId),
      export_version: cdktf.stringToTerraform(this._exportVersion),
      id: cdktf.stringToTerraform(this._id),
      include_extensions: cdktf.booleanToTerraform(this._includeExtensions),
      output_type: cdktf.stringToTerraform(this._outputType),
      specification: cdktf.stringToTerraform(this._specification),
      stage_name: cdktf.stringToTerraform(this._stageName),
    };
  }
}
