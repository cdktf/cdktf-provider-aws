/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/bedrockagent_agent_collaborator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BedrockagentAgentCollaboratorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/bedrockagent_agent_collaborator#agent_id BedrockagentAgentCollaborator#agent_id}
  */
  readonly agentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/bedrockagent_agent_collaborator#agent_version BedrockagentAgentCollaborator#agent_version}
  */
  readonly agentVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/bedrockagent_agent_collaborator#collaboration_instruction BedrockagentAgentCollaborator#collaboration_instruction}
  */
  readonly collaborationInstruction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/bedrockagent_agent_collaborator#collaborator_name BedrockagentAgentCollaborator#collaborator_name}
  */
  readonly collaboratorName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/bedrockagent_agent_collaborator#prepare_agent BedrockagentAgentCollaborator#prepare_agent}
  */
  readonly prepareAgent?: boolean | cdktf.IResolvable;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/bedrockagent_agent_collaborator#region BedrockagentAgentCollaborator#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/bedrockagent_agent_collaborator#relay_conversation_history BedrockagentAgentCollaborator#relay_conversation_history}
  */
  readonly relayConversationHistory?: string;
  /**
  * agent_descriptor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/bedrockagent_agent_collaborator#agent_descriptor BedrockagentAgentCollaborator#agent_descriptor}
  */
  readonly agentDescriptor?: BedrockagentAgentCollaboratorAgentDescriptor[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/bedrockagent_agent_collaborator#timeouts BedrockagentAgentCollaborator#timeouts}
  */
  readonly timeouts?: BedrockagentAgentCollaboratorTimeouts;
}
export interface BedrockagentAgentCollaboratorAgentDescriptor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/bedrockagent_agent_collaborator#alias_arn BedrockagentAgentCollaborator#alias_arn}
  */
  readonly aliasArn: string;
}

export function bedrockagentAgentCollaboratorAgentDescriptorToTerraform(struct?: BedrockagentAgentCollaboratorAgentDescriptor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias_arn: cdktf.stringToTerraform(struct!.aliasArn),
  }
}


export function bedrockagentAgentCollaboratorAgentDescriptorToHclTerraform(struct?: BedrockagentAgentCollaboratorAgentDescriptor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias_arn: {
      value: cdktf.stringToHclTerraform(struct!.aliasArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentAgentCollaboratorAgentDescriptorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentAgentCollaboratorAgentDescriptor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aliasArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliasArn = this._aliasArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentAgentCollaboratorAgentDescriptor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aliasArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aliasArn = value.aliasArn;
    }
  }

  // alias_arn - computed: false, optional: false, required: true
  private _aliasArn?: string; 
  public get aliasArn() {
    return this.getStringAttribute('alias_arn');
  }
  public set aliasArn(value: string) {
    this._aliasArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasArnInput() {
    return this._aliasArn;
  }
}

export class BedrockagentAgentCollaboratorAgentDescriptorList extends cdktf.ComplexList {
  public internalValue? : BedrockagentAgentCollaboratorAgentDescriptor[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentAgentCollaboratorAgentDescriptorOutputReference {
    return new BedrockagentAgentCollaboratorAgentDescriptorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentAgentCollaboratorTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/bedrockagent_agent_collaborator#create BedrockagentAgentCollaborator#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/bedrockagent_agent_collaborator#delete BedrockagentAgentCollaborator#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/bedrockagent_agent_collaborator#update BedrockagentAgentCollaborator#update}
  */
  readonly update?: string;
}

export function bedrockagentAgentCollaboratorTimeoutsToTerraform(struct?: BedrockagentAgentCollaboratorTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function bedrockagentAgentCollaboratorTimeoutsToHclTerraform(struct?: BedrockagentAgentCollaboratorTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentAgentCollaboratorTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentAgentCollaboratorTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentAgentCollaboratorTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/bedrockagent_agent_collaborator aws_bedrockagent_agent_collaborator}
*/
export class BedrockagentAgentCollaborator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrockagent_agent_collaborator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BedrockagentAgentCollaborator resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockagentAgentCollaborator to import
  * @param importFromId The id of the existing BedrockagentAgentCollaborator that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/bedrockagent_agent_collaborator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockagentAgentCollaborator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrockagent_agent_collaborator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/bedrockagent_agent_collaborator aws_bedrockagent_agent_collaborator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockagentAgentCollaboratorConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockagentAgentCollaboratorConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrockagent_agent_collaborator',
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
    this._agentVersion = config.agentVersion;
    this._collaborationInstruction = config.collaborationInstruction;
    this._collaboratorName = config.collaboratorName;
    this._prepareAgent = config.prepareAgent;
    this._region = config.region;
    this._relayConversationHistory = config.relayConversationHistory;
    this._agentDescriptor.internalValue = config.agentDescriptor;
    this._timeouts.internalValue = config.timeouts;
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

  // agent_version - computed: true, optional: true, required: false
  private _agentVersion?: string; 
  public get agentVersion() {
    return this.getStringAttribute('agent_version');
  }
  public set agentVersion(value: string) {
    this._agentVersion = value;
  }
  public resetAgentVersion() {
    this._agentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentVersionInput() {
    return this._agentVersion;
  }

  // collaboration_instruction - computed: false, optional: false, required: true
  private _collaborationInstruction?: string; 
  public get collaborationInstruction() {
    return this.getStringAttribute('collaboration_instruction');
  }
  public set collaborationInstruction(value: string) {
    this._collaborationInstruction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collaborationInstructionInput() {
    return this._collaborationInstruction;
  }

  // collaborator_id - computed: true, optional: false, required: false
  public get collaboratorId() {
    return this.getStringAttribute('collaborator_id');
  }

  // collaborator_name - computed: false, optional: false, required: true
  private _collaboratorName?: string; 
  public get collaboratorName() {
    return this.getStringAttribute('collaborator_name');
  }
  public set collaboratorName(value: string) {
    this._collaboratorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collaboratorNameInput() {
    return this._collaboratorName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // prepare_agent - computed: true, optional: true, required: false
  private _prepareAgent?: boolean | cdktf.IResolvable; 
  public get prepareAgent() {
    return this.getBooleanAttribute('prepare_agent');
  }
  public set prepareAgent(value: boolean | cdktf.IResolvable) {
    this._prepareAgent = value;
  }
  public resetPrepareAgent() {
    this._prepareAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prepareAgentInput() {
    return this._prepareAgent;
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

  // relay_conversation_history - computed: true, optional: true, required: false
  private _relayConversationHistory?: string; 
  public get relayConversationHistory() {
    return this.getStringAttribute('relay_conversation_history');
  }
  public set relayConversationHistory(value: string) {
    this._relayConversationHistory = value;
  }
  public resetRelayConversationHistory() {
    this._relayConversationHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayConversationHistoryInput() {
    return this._relayConversationHistory;
  }

  // agent_descriptor - computed: false, optional: true, required: false
  private _agentDescriptor = new BedrockagentAgentCollaboratorAgentDescriptorList(this, "agent_descriptor", false);
  public get agentDescriptor() {
    return this._agentDescriptor;
  }
  public putAgentDescriptor(value: BedrockagentAgentCollaboratorAgentDescriptor[] | cdktf.IResolvable) {
    this._agentDescriptor.internalValue = value;
  }
  public resetAgentDescriptor() {
    this._agentDescriptor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentDescriptorInput() {
    return this._agentDescriptor.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BedrockagentAgentCollaboratorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BedrockagentAgentCollaboratorTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_id: cdktf.stringToTerraform(this._agentId),
      agent_version: cdktf.stringToTerraform(this._agentVersion),
      collaboration_instruction: cdktf.stringToTerraform(this._collaborationInstruction),
      collaborator_name: cdktf.stringToTerraform(this._collaboratorName),
      prepare_agent: cdktf.booleanToTerraform(this._prepareAgent),
      region: cdktf.stringToTerraform(this._region),
      relay_conversation_history: cdktf.stringToTerraform(this._relayConversationHistory),
      agent_descriptor: cdktf.listMapper(bedrockagentAgentCollaboratorAgentDescriptorToTerraform, true)(this._agentDescriptor.internalValue),
      timeouts: bedrockagentAgentCollaboratorTimeoutsToTerraform(this._timeouts.internalValue),
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
      agent_version: {
        value: cdktf.stringToHclTerraform(this._agentVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collaboration_instruction: {
        value: cdktf.stringToHclTerraform(this._collaborationInstruction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collaborator_name: {
        value: cdktf.stringToHclTerraform(this._collaboratorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prepare_agent: {
        value: cdktf.booleanToHclTerraform(this._prepareAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relay_conversation_history: {
        value: cdktf.stringToHclTerraform(this._relayConversationHistory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_descriptor: {
        value: cdktf.listMapperHcl(bedrockagentAgentCollaboratorAgentDescriptorToHclTerraform, true)(this._agentDescriptor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentAgentCollaboratorAgentDescriptorList",
      },
      timeouts: {
        value: bedrockagentAgentCollaboratorTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockagentAgentCollaboratorTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
