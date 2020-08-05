// https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "capabilities": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "disable_rollback": {
        "type": "bool",
        "optional": true
      },
      "iam_role_arn": {
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
      "notification_arns": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "on_failure": {
        "type": "string",
        "optional": true
      },
      "outputs": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "parameters": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "policy_body": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "policy_url": {
        "type": "string",
        "optional": true
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
      },
      "timeout_in_minutes": {
        "type": "number",
        "optional": true
      }
    },
    "block_types": {
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            },
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
import { StringMap } from "cdktf";

// Configuration

export interface CloudformationStackConfig extends TerraformMetaArguments {
  readonly capabilities?: string[];
  readonly disableRollback?: boolean;
  readonly iamRoleArn?: string;
  readonly name: string;
  readonly notificationArns?: string[];
  readonly onFailure?: string;
  readonly parameters?: { [key: string]: string };
  readonly policyBody?: string;
  readonly policyUrl?: string;
  readonly tags?: { [key: string]: string };
  readonly templateBody?: string;
  readonly templateUrl?: string;
  readonly timeoutInMinutes?: number;
  /** timeouts block */
  readonly timeouts?: CloudformationStackTimeouts;
}
export interface CloudformationStackTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class CloudformationStack extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CloudformationStackConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudformation_stack',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._capabilities = config.capabilities;
    this._disableRollback = config.disableRollback;
    this._iamRoleArn = config.iamRoleArn;
    this._name = config.name;
    this._notificationArns = config.notificationArns;
    this._onFailure = config.onFailure;
    this._parameters = config.parameters;
    this._policyBody = config.policyBody;
    this._policyUrl = config.policyUrl;
    this._tags = config.tags;
    this._templateBody = config.templateBody;
    this._templateUrl = config.templateUrl;
    this._timeoutInMinutes = config.timeoutInMinutes;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capabilities - computed: false, optional: true, required: false
  private _capabilities?: string[];
  public get capabilities() {
    return this._capabilities;
  }
  public set capabilities(value: string[] | undefined) {
    this._capabilities = value;
  }

  // disable_rollback - computed: false, optional: true, required: false
  private _disableRollback?: boolean;
  public get disableRollback() {
    return this._disableRollback;
  }
  public set disableRollback(value: boolean | undefined) {
    this._disableRollback = value;
  }

  // iam_role_arn - computed: false, optional: true, required: false
  private _iamRoleArn?: string;
  public get iamRoleArn() {
    return this._iamRoleArn;
  }
  public set iamRoleArn(value: string | undefined) {
    this._iamRoleArn = value;
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

  // notification_arns - computed: false, optional: true, required: false
  private _notificationArns?: string[];
  public get notificationArns() {
    return this._notificationArns;
  }
  public set notificationArns(value: string[] | undefined) {
    this._notificationArns = value;
  }

  // on_failure - computed: false, optional: true, required: false
  private _onFailure?: string;
  public get onFailure() {
    return this._onFailure;
  }
  public set onFailure(value: string | undefined) {
    this._onFailure = value;
  }

  // outputs - computed: true, optional: false, required: true
  public outputs(key: string): string {
    return new StringMap(this, 'outputs').lookup(key);
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters?: { [key: string]: string }
  public get parameters(): { [key: string]: string } | undefined {
    return this._parameters; // Getting the computed value is not yet implemented
  }
  public set parameters(value: { [key: string]: string } | undefined) {
    this._parameters = value;
  }

  // policy_body - computed: true, optional: true, required: false
  private _policyBody?: string;
  public get policyBody() {
    return this._policyBody ?? this.getStringAttribute('policy_body');
  }
  public set policyBody(value: string | undefined) {
    this._policyBody = value;
  }

  // policy_url - computed: false, optional: true, required: false
  private _policyUrl?: string;
  public get policyUrl() {
    return this._policyUrl;
  }
  public set policyUrl(value: string | undefined) {
    this._policyUrl = value;
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

  // timeout_in_minutes - computed: false, optional: true, required: false
  private _timeoutInMinutes?: number;
  public get timeoutInMinutes() {
    return this._timeoutInMinutes;
  }
  public set timeoutInMinutes(value: number | undefined) {
    this._timeoutInMinutes = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CloudformationStackTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CloudformationStackTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      capabilities: this._capabilities,
      disable_rollback: this._disableRollback,
      iam_role_arn: this._iamRoleArn,
      name: this._name,
      notification_arns: this._notificationArns,
      on_failure: this._onFailure,
      parameters: this._parameters,
      policy_body: this._policyBody,
      policy_url: this._policyUrl,
      tags: this._tags,
      template_body: this._templateBody,
      template_url: this._templateUrl,
      timeout_in_minutes: this._timeoutInMinutes,
      timeouts: this._timeouts,
    };
  }
}
