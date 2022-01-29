// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* API Gateway
*/
export interface DataAwsApiGatewaySdkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_sdk#parameters DataAwsApiGatewaySdk#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_sdk#rest_api_id DataAwsApiGatewaySdk#rest_api_id}
  */
  readonly restApiId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_sdk#sdk_type DataAwsApiGatewaySdk#sdk_type}
  */
  readonly sdkType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_sdk#stage_name DataAwsApiGatewaySdk#stage_name}
  */
  readonly stageName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_sdk aws_api_gateway_sdk}
*/
export class DataAwsApiGatewaySdk extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_api_gateway_sdk";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_sdk aws_api_gateway_sdk} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsApiGatewaySdkConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsApiGatewaySdkConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_sdk',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._parameters = config.parameters;
    this._restApiId = config.restApiId;
    this._sdkType = config.sdkType;
    this._stageName = config.stageName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // sdk_type - computed: false, optional: false, required: true
  private _sdkType?: string; 
  public get sdkType() {
    return this.getStringAttribute('sdk_type');
  }
  public set sdkType(value: string) {
    this._sdkType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sdkTypeInput() {
    return this._sdkType;
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
      parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._parameters),
      rest_api_id: cdktf.stringToTerraform(this._restApiId),
      sdk_type: cdktf.stringToTerraform(this._sdkType),
      stage_name: cdktf.stringToTerraform(this._stageName),
    };
  }
}
