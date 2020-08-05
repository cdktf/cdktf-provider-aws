// https://www.terraform.io/docs/providers/aws/r/lambda_permission.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "action": {
        "type": "string",
        "required": true
      },
      "event_source_token": {
        "type": "string",
        "optional": true
      },
      "function_name": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "principal": {
        "type": "string",
        "required": true
      },
      "qualifier": {
        "type": "string",
        "optional": true
      },
      "source_account": {
        "type": "string",
        "optional": true
      },
      "source_arn": {
        "type": "string",
        "optional": true
      },
      "statement_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "statement_id_prefix": {
        "type": "string",
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

export interface LambdaPermissionConfig extends TerraformMetaArguments {
  readonly action: string;
  readonly eventSourceToken?: string;
  readonly functionName: string;
  readonly principal: string;
  readonly qualifier?: string;
  readonly sourceAccount?: string;
  readonly sourceArn?: string;
  readonly statementId?: string;
  readonly statementIdPrefix?: string;
}

// Resource

export class LambdaPermission extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LambdaPermissionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambda_permission',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._action = config.action;
    this._eventSourceToken = config.eventSourceToken;
    this._functionName = config.functionName;
    this._principal = config.principal;
    this._qualifier = config.qualifier;
    this._sourceAccount = config.sourceAccount;
    this._sourceArn = config.sourceArn;
    this._statementId = config.statementId;
    this._statementIdPrefix = config.statementIdPrefix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action: string;
  public get action() {
    return this._action;
  }
  public set action(value: string) {
    this._action = value;
  }

  // event_source_token - computed: false, optional: true, required: false
  private _eventSourceToken?: string;
  public get eventSourceToken() {
    return this._eventSourceToken;
  }
  public set eventSourceToken(value: string | undefined) {
    this._eventSourceToken = value;
  }

  // function_name - computed: false, optional: false, required: true
  private _functionName: string;
  public get functionName() {
    return this._functionName;
  }
  public set functionName(value: string) {
    this._functionName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // principal - computed: false, optional: false, required: true
  private _principal: string;
  public get principal() {
    return this._principal;
  }
  public set principal(value: string) {
    this._principal = value;
  }

  // qualifier - computed: false, optional: true, required: false
  private _qualifier?: string;
  public get qualifier() {
    return this._qualifier;
  }
  public set qualifier(value: string | undefined) {
    this._qualifier = value;
  }

  // source_account - computed: false, optional: true, required: false
  private _sourceAccount?: string;
  public get sourceAccount() {
    return this._sourceAccount;
  }
  public set sourceAccount(value: string | undefined) {
    this._sourceAccount = value;
  }

  // source_arn - computed: false, optional: true, required: false
  private _sourceArn?: string;
  public get sourceArn() {
    return this._sourceArn;
  }
  public set sourceArn(value: string | undefined) {
    this._sourceArn = value;
  }

  // statement_id - computed: true, optional: true, required: false
  private _statementId?: string;
  public get statementId() {
    return this._statementId ?? this.getStringAttribute('statement_id');
  }
  public set statementId(value: string | undefined) {
    this._statementId = value;
  }

  // statement_id_prefix - computed: false, optional: true, required: false
  private _statementIdPrefix?: string;
  public get statementIdPrefix() {
    return this._statementIdPrefix;
  }
  public set statementIdPrefix(value: string | undefined) {
    this._statementIdPrefix = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      action: this._action,
      event_source_token: this._eventSourceToken,
      function_name: this._functionName,
      principal: this._principal,
      qualifier: this._qualifier,
      source_account: this._sourceAccount,
      source_arn: this._sourceArn,
      statement_id: this._statementId,
      statement_id_prefix: this._statementIdPrefix,
    };
  }
}
