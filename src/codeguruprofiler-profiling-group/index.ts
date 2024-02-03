// https://registry.terraform.io/providers/hashicorp/aws/5.35.0/docs/resources/codeguruprofiler_profiling_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CodeguruprofilerProfilingGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.35.0/docs/resources/codeguruprofiler_profiling_group#compute_platform CodeguruprofilerProfilingGroup#compute_platform}
  */
  readonly computePlatform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.35.0/docs/resources/codeguruprofiler_profiling_group#name CodeguruprofilerProfilingGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.35.0/docs/resources/codeguruprofiler_profiling_group#tags CodeguruprofilerProfilingGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * agent_orchestration_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.35.0/docs/resources/codeguruprofiler_profiling_group#agent_orchestration_config CodeguruprofilerProfilingGroup#agent_orchestration_config}
  */
  readonly agentOrchestrationConfig?: CodeguruprofilerProfilingGroupAgentOrchestrationConfig[] | cdktf.IResolvable;
}
export interface CodeguruprofilerProfilingGroupAgentOrchestrationConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.35.0/docs/resources/codeguruprofiler_profiling_group#profiling_enabled CodeguruprofilerProfilingGroup#profiling_enabled}
  */
  readonly profilingEnabled: boolean | cdktf.IResolvable;
}

export function codeguruprofilerProfilingGroupAgentOrchestrationConfigToTerraform(struct?: CodeguruprofilerProfilingGroupAgentOrchestrationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profiling_enabled: cdktf.booleanToTerraform(struct!.profilingEnabled),
  }
}


export function codeguruprofilerProfilingGroupAgentOrchestrationConfigToHclTerraform(struct?: CodeguruprofilerProfilingGroupAgentOrchestrationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profiling_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.profilingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CodeguruprofilerProfilingGroupAgentOrchestrationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profilingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.profilingEnabled = this._profilingEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeguruprofilerProfilingGroupAgentOrchestrationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profilingEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profilingEnabled = value.profilingEnabled;
    }
  }

  // profiling_enabled - computed: false, optional: false, required: true
  private _profilingEnabled?: boolean | cdktf.IResolvable; 
  public get profilingEnabled() {
    return this.getBooleanAttribute('profiling_enabled');
  }
  public set profilingEnabled(value: boolean | cdktf.IResolvable) {
    this._profilingEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profilingEnabledInput() {
    return this._profilingEnabled;
  }
}

export class CodeguruprofilerProfilingGroupAgentOrchestrationConfigList extends cdktf.ComplexList {
  public internalValue? : CodeguruprofilerProfilingGroupAgentOrchestrationConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference {
    return new CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.35.0/docs/resources/codeguruprofiler_profiling_group aws_codeguruprofiler_profiling_group}
*/
export class CodeguruprofilerProfilingGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_codeguruprofiler_profiling_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CodeguruprofilerProfilingGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CodeguruprofilerProfilingGroup to import
  * @param importFromId The id of the existing CodeguruprofilerProfilingGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.35.0/docs/resources/codeguruprofiler_profiling_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CodeguruprofilerProfilingGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_codeguruprofiler_profiling_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.35.0/docs/resources/codeguruprofiler_profiling_group aws_codeguruprofiler_profiling_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CodeguruprofilerProfilingGroupConfig
  */
  public constructor(scope: Construct, id: string, config: CodeguruprofilerProfilingGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codeguruprofiler_profiling_group',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.35.0',
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
    this._computePlatform = config.computePlatform;
    this._name = config.name;
    this._tags = config.tags;
    this._agentOrchestrationConfig.internalValue = config.agentOrchestrationConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // compute_platform - computed: true, optional: true, required: false
  private _computePlatform?: string; 
  public get computePlatform() {
    return this.getStringAttribute('compute_platform');
  }
  public set computePlatform(value: string) {
    this._computePlatform = value;
  }
  public resetComputePlatform() {
    this._computePlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computePlatformInput() {
    return this._computePlatform;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // agent_orchestration_config - computed: false, optional: true, required: false
  private _agentOrchestrationConfig = new CodeguruprofilerProfilingGroupAgentOrchestrationConfigList(this, "agent_orchestration_config", false);
  public get agentOrchestrationConfig() {
    return this._agentOrchestrationConfig;
  }
  public putAgentOrchestrationConfig(value: CodeguruprofilerProfilingGroupAgentOrchestrationConfig[] | cdktf.IResolvable) {
    this._agentOrchestrationConfig.internalValue = value;
  }
  public resetAgentOrchestrationConfig() {
    this._agentOrchestrationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentOrchestrationConfigInput() {
    return this._agentOrchestrationConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compute_platform: cdktf.stringToTerraform(this._computePlatform),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      agent_orchestration_config: cdktf.listMapper(codeguruprofilerProfilingGroupAgentOrchestrationConfigToTerraform, true)(this._agentOrchestrationConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compute_platform: {
        value: cdktf.stringToHclTerraform(this._computePlatform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      agent_orchestration_config: {
        value: cdktf.listMapperHcl(codeguruprofilerProfilingGroupAgentOrchestrationConfigToHclTerraform, true)(this._agentOrchestrationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CodeguruprofilerProfilingGroupAgentOrchestrationConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
