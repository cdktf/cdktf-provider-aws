// https://www.terraform.io/docs/providers/aws/r/api_gateway_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_deployment#description ApiGatewayDeployment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_deployment#id ApiGatewayDeployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_deployment#rest_api_id ApiGatewayDeployment#rest_api_id}
  */
  readonly restApiId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_deployment#stage_description ApiGatewayDeployment#stage_description}
  */
  readonly stageDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_deployment#stage_name ApiGatewayDeployment#stage_name}
  */
  readonly stageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_deployment#triggers ApiGatewayDeployment#triggers}
  */
  readonly triggers?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_deployment#variables ApiGatewayDeployment#variables}
  */
  readonly variables?: { [key: string]: string };
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_deployment aws_api_gateway_deployment}
*/
export class ApiGatewayDeployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_api_gateway_deployment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_deployment aws_api_gateway_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_deployment',
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
    this._description = config.description;
    this._id = config.id;
    this._restApiId = config.restApiId;
    this._stageDescription = config.stageDescription;
    this._stageName = config.stageName;
    this._triggers = config.triggers;
    this._variables = config.variables;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // execution_arn - computed: true, optional: false, required: false
  public get executionArn() {
    return this.getStringAttribute('execution_arn');
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

  // invoke_url - computed: true, optional: false, required: false
  public get invokeUrl() {
    return this.getStringAttribute('invoke_url');
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

  // stage_description - computed: false, optional: true, required: false
  private _stageDescription?: string; 
  public get stageDescription() {
    return this.getStringAttribute('stage_description');
  }
  public set stageDescription(value: string) {
    this._stageDescription = value;
  }
  public resetStageDescription() {
    this._stageDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageDescriptionInput() {
    return this._stageDescription;
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

  // triggers - computed: false, optional: true, required: false
  private _triggers?: { [key: string]: string }; 
  public get triggers() {
    return this.getStringMapAttribute('triggers');
  }
  public set triggers(value: { [key: string]: string }) {
    this._triggers = value;
  }
  public resetTriggers() {
    this._triggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers;
  }

  // variables - computed: false, optional: true, required: false
  private _variables?: { [key: string]: string }; 
  public get variables() {
    return this.getStringMapAttribute('variables');
  }
  public set variables(value: { [key: string]: string }) {
    this._variables = value;
  }
  public resetVariables() {
    this._variables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      rest_api_id: cdktf.stringToTerraform(this._restApiId),
      stage_description: cdktf.stringToTerraform(this._stageDescription),
      stage_name: cdktf.stringToTerraform(this._stageName),
      triggers: cdktf.hashMapper(cdktf.stringToTerraform)(this._triggers),
      variables: cdktf.hashMapper(cdktf.stringToTerraform)(this._variables),
    };
  }
}
