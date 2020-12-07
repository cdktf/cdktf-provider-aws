// https://www.terraform.io/docs/providers/aws/r/api_gateway_deployment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayDeploymentConfig extends cdktf.TerraformMetaArguments {
  readonly description?: string;
  readonly restApiId: string;
  readonly stageDescription?: string;
  readonly stageName?: string;
  readonly triggers?: { [key: string]: string };
  readonly variables?: { [key: string]: string };
}

// Resource

export class ApiGatewayDeployment extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiGatewayDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_deployment',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
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
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // execution_arn - computed: true, optional: false, required: false
  public get executionArn() {
    return this.getStringAttribute('execution_arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // invoke_url - computed: true, optional: false, required: false
  public get invokeUrl() {
    return this.getStringAttribute('invoke_url');
  }

  // rest_api_id - computed: false, optional: false, required: true
  private _restApiId: string;
  public get restApiId() {
    return this.getStringAttribute('rest_api_id');
  }
  public set restApiId(value: string) {
    this._restApiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restApiIdInput() {
    return this._restApiId
  }

  // stage_description - computed: false, optional: true, required: false
  private _stageDescription?: string;
  public get stageDescription() {
    return this.getStringAttribute('stage_description');
  }
  public set stageDescription(value: string ) {
    this._stageDescription = value;
  }
  public resetStageDescription() {
    this._stageDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageDescriptionInput() {
    return this._stageDescription
  }

  // stage_name - computed: false, optional: true, required: false
  private _stageName?: string;
  public get stageName() {
    return this.getStringAttribute('stage_name');
  }
  public set stageName(value: string ) {
    this._stageName = value;
  }
  public resetStageName() {
    this._stageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageNameInput() {
    return this._stageName
  }

  // triggers - computed: false, optional: true, required: false
  private _triggers?: { [key: string]: string };
  public get triggers() {
    return this.interpolationForAttribute('triggers') as any;
  }
  public set triggers(value: { [key: string]: string } ) {
    this._triggers = value;
  }
  public resetTriggers() {
    this._triggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers
  }

  // variables - computed: false, optional: true, required: false
  private _variables?: { [key: string]: string };
  public get variables() {
    return this.interpolationForAttribute('variables') as any;
  }
  public set variables(value: { [key: string]: string } ) {
    this._variables = value;
  }
  public resetVariables() {
    this._variables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      rest_api_id: cdktf.stringToTerraform(this._restApiId),
      stage_description: cdktf.stringToTerraform(this._stageDescription),
      stage_name: cdktf.stringToTerraform(this._stageName),
      triggers: cdktf.hashMapper(cdktf.anyToTerraform)(this._triggers),
      variables: cdktf.hashMapper(cdktf.anyToTerraform)(this._variables),
    };
  }
}
