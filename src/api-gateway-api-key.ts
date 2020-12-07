// https://www.terraform.io/docs/providers/aws/r/api_gateway_api_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayApiKeyConfig extends cdktf.TerraformMetaArguments {
  readonly description?: string;
  readonly enabled?: boolean;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  readonly value?: string;
  /** stage_key block */
  readonly stageKey?: ApiGatewayApiKeyStageKey[];
}
export interface ApiGatewayApiKeyStageKey {
  readonly restApiId: string;
  readonly stageName: string;
}

function apiGatewayApiKeyStageKeyToTerraform(struct?: ApiGatewayApiKeyStageKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    rest_api_id: cdktf.stringToTerraform(struct!.restApiId),
    stage_name: cdktf.stringToTerraform(struct!.stageName),
  }
}


// Resource

export class ApiGatewayApiKey extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiGatewayApiKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_api_key',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._enabled = config.enabled;
    this._name = config.name;
    this._tags = config.tags;
    this._value = config.value;
    this._stageKey = config.stageKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_date - computed: true, optional: false, required: false
  public get lastUpdatedDate() {
    return this.getStringAttribute('last_updated_date');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // value - computed: true, optional: true, required: false
  private _value?: string;
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }

  // stage_key - computed: false, optional: true, required: false
  private _stageKey?: ApiGatewayApiKeyStageKey[];
  public get stageKey() {
    return this.interpolationForAttribute('stage_key') as any;
  }
  public set stageKey(value: ApiGatewayApiKeyStageKey[] ) {
    this._stageKey = value;
  }
  public resetStageKey() {
    this._stageKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageKeyInput() {
    return this._stageKey
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      value: cdktf.stringToTerraform(this._value),
      stage_key: cdktf.listMapper(apiGatewayApiKeyStageKeyToTerraform)(this._stageKey),
    };
  }
}
