/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/bedrockagent_agent_versions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsBedrockagentAgentVersionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/bedrockagent_agent_versions#agent_id DataAwsBedrockagentAgentVersions#agent_id}
  */
  readonly agentId: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/bedrockagent_agent_versions#region DataAwsBedrockagentAgentVersions#region}
  */
  readonly region?: string;
  /**
  * agent_version_summaries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/bedrockagent_agent_versions#agent_version_summaries DataAwsBedrockagentAgentVersions#agent_version_summaries}
  */
  readonly agentVersionSummaries?: DataAwsBedrockagentAgentVersionsAgentVersionSummaries[] | cdktf.IResolvable;
}
export interface DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration {
}

export function dataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationToTerraform(struct?: DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationToHclTerraform(struct?: DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // guardrail_identifier - computed: true, optional: false, required: false
  public get guardrailIdentifier() {
    return this.getStringAttribute('guardrail_identifier');
  }

  // guardrail_version - computed: true, optional: false, required: false
  public get guardrailVersion() {
    return this.getStringAttribute('guardrail_version');
  }
}

export class DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList extends cdktf.ComplexList {
  public internalValue? : DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration[] | cdktf.IResolvable

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
  public get(index: number): DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference {
    return new DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBedrockagentAgentVersionsAgentVersionSummaries {
  /**
  * guardrail_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/bedrockagent_agent_versions#guardrail_configuration DataAwsBedrockagentAgentVersions#guardrail_configuration}
  */
  readonly guardrailConfiguration?: DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration[] | cdktf.IResolvable;
}

export function dataAwsBedrockagentAgentVersionsAgentVersionSummariesToTerraform(struct?: DataAwsBedrockagentAgentVersionsAgentVersionSummaries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    guardrail_configuration: cdktf.listMapper(dataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationToTerraform, true)(struct!.guardrailConfiguration),
  }
}


export function dataAwsBedrockagentAgentVersionsAgentVersionSummariesToHclTerraform(struct?: DataAwsBedrockagentAgentVersionsAgentVersionSummaries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    guardrail_configuration: {
      value: cdktf.listMapperHcl(dataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationToHclTerraform, true)(struct!.guardrailConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBedrockagentAgentVersionsAgentVersionSummaries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._guardrailConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guardrailConfiguration = this._guardrailConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBedrockagentAgentVersionsAgentVersionSummaries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._guardrailConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._guardrailConfiguration.internalValue = value.guardrailConfiguration;
    }
  }

  // agent_name - computed: true, optional: false, required: false
  public get agentName() {
    return this.getStringAttribute('agent_name');
  }

  // agent_status - computed: true, optional: false, required: false
  public get agentStatus() {
    return this.getStringAttribute('agent_status');
  }

  // agent_version - computed: true, optional: false, required: false
  public get agentVersion() {
    return this.getStringAttribute('agent_version');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // guardrail_configuration - computed: false, optional: true, required: false
  private _guardrailConfiguration = new DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList(this, "guardrail_configuration", false);
  public get guardrailConfiguration() {
    return this._guardrailConfiguration;
  }
  public putGuardrailConfiguration(value: DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration[] | cdktf.IResolvable) {
    this._guardrailConfiguration.internalValue = value;
  }
  public resetGuardrailConfiguration() {
    this._guardrailConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guardrailConfigurationInput() {
    return this._guardrailConfiguration.internalValue;
  }
}

export class DataAwsBedrockagentAgentVersionsAgentVersionSummariesList extends cdktf.ComplexList {
  public internalValue? : DataAwsBedrockagentAgentVersionsAgentVersionSummaries[] | cdktf.IResolvable

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
  public get(index: number): DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference {
    return new DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/bedrockagent_agent_versions aws_bedrockagent_agent_versions}
*/
export class DataAwsBedrockagentAgentVersions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrockagent_agent_versions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsBedrockagentAgentVersions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsBedrockagentAgentVersions to import
  * @param importFromId The id of the existing DataAwsBedrockagentAgentVersions that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/bedrockagent_agent_versions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsBedrockagentAgentVersions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrockagent_agent_versions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/bedrockagent_agent_versions aws_bedrockagent_agent_versions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsBedrockagentAgentVersionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsBedrockagentAgentVersionsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrockagent_agent_versions',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentId = config.agentId;
    this._region = config.region;
    this._agentVersionSummaries.internalValue = config.agentVersionSummaries;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_id - computed: false, optional: false, required: true
  private _agentId?: string; 
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }
  public set agentId(value: string) {
    this._agentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdInput() {
    return this._agentId;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // agent_version_summaries - computed: false, optional: true, required: false
  private _agentVersionSummaries = new DataAwsBedrockagentAgentVersionsAgentVersionSummariesList(this, "agent_version_summaries", false);
  public get agentVersionSummaries() {
    return this._agentVersionSummaries;
  }
  public putAgentVersionSummaries(value: DataAwsBedrockagentAgentVersionsAgentVersionSummaries[] | cdktf.IResolvable) {
    this._agentVersionSummaries.internalValue = value;
  }
  public resetAgentVersionSummaries() {
    this._agentVersionSummaries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentVersionSummariesInput() {
    return this._agentVersionSummaries.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_id: cdktf.stringToTerraform(this._agentId),
      region: cdktf.stringToTerraform(this._region),
      agent_version_summaries: cdktf.listMapper(dataAwsBedrockagentAgentVersionsAgentVersionSummariesToTerraform, true)(this._agentVersionSummaries.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_id: {
        value: cdktf.stringToHclTerraform(this._agentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_version_summaries: {
        value: cdktf.listMapperHcl(dataAwsBedrockagentAgentVersionsAgentVersionSummariesToHclTerraform, true)(this._agentVersionSummaries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsBedrockagentAgentVersionsAgentVersionSummariesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
