// https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "administration_role_arn": {
        "type": "string",
        "required": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "capabilities": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "execution_role_name": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "parameters": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "stack_set_id": {
        "type": "string",
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "template_body": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "template_url": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CloudformationStackSetConfig extends TerraformMetaArguments {
  readonly administrationRoleArn: string;
  readonly capabilities?: string[];
  readonly description?: string;
  readonly executionRoleName?: string;
  readonly name: string;
  readonly parameters?: { [key: string]: string };
  readonly tags?: { [key: string]: string };
  readonly templateBody?: string;
  readonly templateUrl?: string;
  /** timeouts block */
  readonly timeouts?: CloudformationStackSetTimeouts;
}
export interface CloudformationStackSetTimeouts {
  readonly update?: string;
}

// Resource

export class CloudformationStackSet extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CloudformationStackSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudformation_stack_set',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._administrationRoleArn = config.administrationRoleArn;
    this._capabilities = config.capabilities;
    this._description = config.description;
    this._executionRoleName = config.executionRoleName;
    this._name = config.name;
    this._parameters = config.parameters;
    this._tags = config.tags;
    this._templateBody = config.templateBody;
    this._templateUrl = config.templateUrl;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administration_role_arn - computed: false, optional: false, required: true
  private _administrationRoleArn: string;
  public get administrationRoleArn() {
    return this._administrationRoleArn;
  }
  public set administrationRoleArn(value: string) {
    this._administrationRoleArn = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities?: string[];
  public get capabilities() {
    return this._capabilities;
  }
  public set capabilities(value: string[] | undefined) {
    this._capabilities = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // execution_role_name - computed: false, optional: true, required: false
  private _executionRoleName?: string;
  public get executionRoleName() {
    return this._executionRoleName;
  }
  public set executionRoleName(value: string | undefined) {
    this._executionRoleName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string };
  public get parameters() {
    return this._parameters;
  }
  public set parameters(value: { [key: string]: string } | undefined) {
    this._parameters = value;
  }

  // stack_set_id - computed: true, optional: false, required: true
  public get stackSetId() {
    return this.getStringAttribute('stack_set_id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // template_body - computed: true, optional: true, required: false
  private _templateBody?: string;
  public get templateBody() {
    return this._templateBody ?? this.getStringAttribute('template_body');
  }
  public set templateBody(value: string | undefined) {
    this._templateBody = value;
  }

  // template_url - computed: false, optional: true, required: false
  private _templateUrl?: string;
  public get templateUrl() {
    return this._templateUrl;
  }
  public set templateUrl(value: string | undefined) {
    this._templateUrl = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CloudformationStackSetTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CloudformationStackSetTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      administration_role_arn: this._administrationRoleArn,
      capabilities: this._capabilities,
      description: this._description,
      execution_role_name: this._executionRoleName,
      name: this._name,
      parameters: this._parameters,
      tags: this._tags,
      template_body: this._templateBody,
      template_url: this._templateUrl,
      timeouts: this._timeouts,
    };
  }
}
