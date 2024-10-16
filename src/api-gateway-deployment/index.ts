// https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/api_gateway_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/api_gateway_deployment#description ApiGatewayDeployment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/api_gateway_deployment#id ApiGatewayDeployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/api_gateway_deployment#rest_api_id ApiGatewayDeployment#rest_api_id}
  */
  readonly restApiId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/api_gateway_deployment#stage_description ApiGatewayDeployment#stage_description}
  */
  readonly stageDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/api_gateway_deployment#stage_name ApiGatewayDeployment#stage_name}
  */
  readonly stageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/api_gateway_deployment#triggers ApiGatewayDeployment#triggers}
  */
  readonly triggers?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/api_gateway_deployment#variables ApiGatewayDeployment#variables}
  */
  readonly variables?: { [key: string]: string };
  /**
  * canary_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/api_gateway_deployment#canary_settings ApiGatewayDeployment#canary_settings}
  */
  readonly canarySettings?: ApiGatewayDeploymentCanarySettings;
}
export interface ApiGatewayDeploymentCanarySettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/api_gateway_deployment#percent_traffic ApiGatewayDeployment#percent_traffic}
  */
  readonly percentTraffic?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/api_gateway_deployment#stage_variable_overrides ApiGatewayDeployment#stage_variable_overrides}
  */
  readonly stageVariableOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/api_gateway_deployment#use_stage_cache ApiGatewayDeployment#use_stage_cache}
  */
  readonly useStageCache?: boolean | cdktf.IResolvable;
}

export function apiGatewayDeploymentCanarySettingsToTerraform(struct?: ApiGatewayDeploymentCanarySettingsOutputReference | ApiGatewayDeploymentCanarySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percent_traffic: cdktf.numberToTerraform(struct!.percentTraffic),
    stage_variable_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.stageVariableOverrides),
    use_stage_cache: cdktf.booleanToTerraform(struct!.useStageCache),
  }
}


export function apiGatewayDeploymentCanarySettingsToHclTerraform(struct?: ApiGatewayDeploymentCanarySettingsOutputReference | ApiGatewayDeploymentCanarySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    percent_traffic: {
      value: cdktf.numberToHclTerraform(struct!.percentTraffic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stage_variable_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.stageVariableOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    use_stage_cache: {
      value: cdktf.booleanToHclTerraform(struct!.useStageCache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayDeploymentCanarySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiGatewayDeploymentCanarySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentTraffic = this._percentTraffic;
    }
    if (this._stageVariableOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.stageVariableOverrides = this._stageVariableOverrides;
    }
    if (this._useStageCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.useStageCache = this._useStageCache;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayDeploymentCanarySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._percentTraffic = undefined;
      this._stageVariableOverrides = undefined;
      this._useStageCache = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._percentTraffic = value.percentTraffic;
      this._stageVariableOverrides = value.stageVariableOverrides;
      this._useStageCache = value.useStageCache;
    }
  }

  // percent_traffic - computed: false, optional: true, required: false
  private _percentTraffic?: number; 
  public get percentTraffic() {
    return this.getNumberAttribute('percent_traffic');
  }
  public set percentTraffic(value: number) {
    this._percentTraffic = value;
  }
  public resetPercentTraffic() {
    this._percentTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentTrafficInput() {
    return this._percentTraffic;
  }

  // stage_variable_overrides - computed: false, optional: true, required: false
  private _stageVariableOverrides?: { [key: string]: string }; 
  public get stageVariableOverrides() {
    return this.getStringMapAttribute('stage_variable_overrides');
  }
  public set stageVariableOverrides(value: { [key: string]: string }) {
    this._stageVariableOverrides = value;
  }
  public resetStageVariableOverrides() {
    this._stageVariableOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageVariableOverridesInput() {
    return this._stageVariableOverrides;
  }

  // use_stage_cache - computed: false, optional: true, required: false
  private _useStageCache?: boolean | cdktf.IResolvable; 
  public get useStageCache() {
    return this.getBooleanAttribute('use_stage_cache');
  }
  public set useStageCache(value: boolean | cdktf.IResolvable) {
    this._useStageCache = value;
  }
  public resetUseStageCache() {
    this._useStageCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useStageCacheInput() {
    return this._useStageCache;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/api_gateway_deployment aws_api_gateway_deployment}
*/
export class ApiGatewayDeployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_api_gateway_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiGatewayDeployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiGatewayDeployment to import
  * @param importFromId The id of the existing ApiGatewayDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/api_gateway_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiGatewayDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_api_gateway_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/api_gateway_deployment aws_api_gateway_deployment} Resource
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
        providerVersion: '5.72.0',
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
    this._description = config.description;
    this._id = config.id;
    this._restApiId = config.restApiId;
    this._stageDescription = config.stageDescription;
    this._stageName = config.stageName;
    this._triggers = config.triggers;
    this._variables = config.variables;
    this._canarySettings.internalValue = config.canarySettings;
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

  // canary_settings - computed: false, optional: true, required: false
  private _canarySettings = new ApiGatewayDeploymentCanarySettingsOutputReference(this, "canary_settings");
  public get canarySettings() {
    return this._canarySettings;
  }
  public putCanarySettings(value: ApiGatewayDeploymentCanarySettings) {
    this._canarySettings.internalValue = value;
  }
  public resetCanarySettings() {
    this._canarySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canarySettingsInput() {
    return this._canarySettings.internalValue;
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
      canary_settings: apiGatewayDeploymentCanarySettingsToTerraform(this._canarySettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      rest_api_id: {
        value: cdktf.stringToHclTerraform(this._restApiId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stage_description: {
        value: cdktf.stringToHclTerraform(this._stageDescription),
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
      triggers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._triggers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      variables: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._variables),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      canary_settings: {
        value: apiGatewayDeploymentCanarySettingsToHclTerraform(this._canarySettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiGatewayDeploymentCanarySettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
