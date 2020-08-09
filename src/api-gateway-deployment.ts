// https://www.terraform.io/docs/providers/aws/r/api_gateway_deployment.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "created_date": {
        "type": "string",
        "computed": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "execution_arn": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "invoke_url": {
        "type": "string",
        "computed": true
      },
      "rest_api_id": {
        "type": "string",
        "required": true
      },
      "stage_description": {
        "type": "string",
        "optional": true
      },
      "stage_name": {
        "type": "string",
        "optional": true
      },
      "triggers": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "variables": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApiGatewayDeploymentConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly restApiId: string;
  readonly stageDescription?: string;
  readonly stageName?: string;
  readonly triggers?: { [key: string]: string };
  readonly variables?: { [key: string]: string };
}

// Resource

export class ApiGatewayDeployment extends TerraformResource {

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

  // created_date - computed: true, optional: false, required: true
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // execution_arn - computed: true, optional: false, required: true
  public get executionArn() {
    return this.getStringAttribute('execution_arn');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // invoke_url - computed: true, optional: false, required: true
  public get invokeUrl() {
    return this.getStringAttribute('invoke_url');
  }

  // rest_api_id - computed: false, optional: false, required: true
  private _restApiId: string;
  public get restApiId() {
    return this._restApiId;
  }
  public set restApiId(value: string) {
    this._restApiId = value;
  }

  // stage_description - computed: false, optional: true, required: false
  private _stageDescription?: string;
  public get stageDescription() {
    return this._stageDescription;
  }
  public set stageDescription(value: string | undefined) {
    this._stageDescription = value;
  }

  // stage_name - computed: false, optional: true, required: false
  private _stageName?: string;
  public get stageName() {
    return this._stageName;
  }
  public set stageName(value: string | undefined) {
    this._stageName = value;
  }

  // triggers - computed: false, optional: true, required: false
  private _triggers?: { [key: string]: string };
  public get triggers() {
    return this._triggers;
  }
  public set triggers(value: { [key: string]: string } | undefined) {
    this._triggers = value;
  }

  // variables - computed: false, optional: true, required: false
  private _variables?: { [key: string]: string };
  public get variables() {
    return this._variables;
  }
  public set variables(value: { [key: string]: string } | undefined) {
    this._variables = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      rest_api_id: this._restApiId,
      stage_description: this._stageDescription,
      stage_name: this._stageName,
      triggers: this._triggers,
      variables: this._variables,
    };
  }
}
