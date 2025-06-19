# `bedrockagentAgentCollaborator` Submodule <a name="`bedrockagentAgentCollaborator` Submodule" id="@cdktf/provider-aws.bedrockagentAgentCollaborator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentAgentCollaborator <a name="BedrockagentAgentCollaborator" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator aws_bedrockagent_agent_collaborator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_collaborator

bedrockagentAgentCollaborator.BedrockagentAgentCollaborator(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  agent_id: str,
  collaboration_instruction: str,
  collaborator_name: str,
  agent_descriptor: typing.Union[IResolvable, typing.List[BedrockagentAgentCollaboratorAgentDescriptor]] = None,
  agent_version: str = None,
  prepare_agent: typing.Union[bool, IResolvable] = None,
  region: str = None,
  relay_conversation_history: str = None,
  timeouts: BedrockagentAgentCollaboratorTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.agentId">agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#agent_id BedrockagentAgentCollaborator#agent_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.collaborationInstruction">collaboration_instruction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#collaboration_instruction BedrockagentAgentCollaborator#collaboration_instruction}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.collaboratorName">collaborator_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#collaborator_name BedrockagentAgentCollaborator#collaborator_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.agentDescriptor">agent_descriptor</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor">BedrockagentAgentCollaboratorAgentDescriptor</a>]]</code> | agent_descriptor block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.agentVersion">agent_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#agent_version BedrockagentAgentCollaborator#agent_version}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.prepareAgent">prepare_agent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#prepare_agent BedrockagentAgentCollaborator#prepare_agent}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.relayConversationHistory">relay_conversation_history</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#relay_conversation_history BedrockagentAgentCollaborator#relay_conversation_history}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts">BedrockagentAgentCollaboratorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.agentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#agent_id BedrockagentAgentCollaborator#agent_id}.

---

##### `collaboration_instruction`<sup>Required</sup> <a name="collaboration_instruction" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.collaborationInstruction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#collaboration_instruction BedrockagentAgentCollaborator#collaboration_instruction}.

---

##### `collaborator_name`<sup>Required</sup> <a name="collaborator_name" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.collaboratorName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#collaborator_name BedrockagentAgentCollaborator#collaborator_name}.

---

##### `agent_descriptor`<sup>Optional</sup> <a name="agent_descriptor" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.agentDescriptor"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor">BedrockagentAgentCollaboratorAgentDescriptor</a>]]

agent_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#agent_descriptor BedrockagentAgentCollaborator#agent_descriptor}

---

##### `agent_version`<sup>Optional</sup> <a name="agent_version" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.agentVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#agent_version BedrockagentAgentCollaborator#agent_version}.

---

##### `prepare_agent`<sup>Optional</sup> <a name="prepare_agent" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.prepareAgent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#prepare_agent BedrockagentAgentCollaborator#prepare_agent}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#region BedrockagentAgentCollaborator#region}

---

##### `relay_conversation_history`<sup>Optional</sup> <a name="relay_conversation_history" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.relayConversationHistory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#relay_conversation_history BedrockagentAgentCollaborator#relay_conversation_history}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts">BedrockagentAgentCollaboratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#timeouts BedrockagentAgentCollaborator#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.putAgentDescriptor">put_agent_descriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetAgentDescriptor">reset_agent_descriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetAgentVersion">reset_agent_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetPrepareAgent">reset_prepare_agent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetRelayConversationHistory">reset_relay_conversation_history</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_agent_descriptor` <a name="put_agent_descriptor" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.putAgentDescriptor"></a>

```python
def put_agent_descriptor(
  value: typing.Union[IResolvable, typing.List[BedrockagentAgentCollaboratorAgentDescriptor]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.putAgentDescriptor.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor">BedrockagentAgentCollaboratorAgentDescriptor</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#create BedrockagentAgentCollaborator#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#delete BedrockagentAgentCollaborator#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#update BedrockagentAgentCollaborator#update}

---

##### `reset_agent_descriptor` <a name="reset_agent_descriptor" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetAgentDescriptor"></a>

```python
def reset_agent_descriptor() -> None
```

##### `reset_agent_version` <a name="reset_agent_version" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetAgentVersion"></a>

```python
def reset_agent_version() -> None
```

##### `reset_prepare_agent` <a name="reset_prepare_agent" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetPrepareAgent"></a>

```python
def reset_prepare_agent() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_relay_conversation_history` <a name="reset_relay_conversation_history" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetRelayConversationHistory"></a>

```python
def reset_relay_conversation_history() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BedrockagentAgentCollaborator resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_collaborator

bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_collaborator

bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_collaborator

bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_collaborator

bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BedrockagentAgentCollaborator resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BedrockagentAgentCollaborator to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BedrockagentAgentCollaborator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentAgentCollaborator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentDescriptor">agent_descriptor</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList">BedrockagentAgentCollaboratorAgentDescriptorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaboratorId">collaborator_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference">BedrockagentAgentCollaboratorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentDescriptorInput">agent_descriptor_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor">BedrockagentAgentCollaboratorAgentDescriptor</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentIdInput">agent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentVersionInput">agent_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaborationInstructionInput">collaboration_instruction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaboratorNameInput">collaborator_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.prepareAgentInput">prepare_agent_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.relayConversationHistoryInput">relay_conversation_history_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts">BedrockagentAgentCollaboratorTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentId">agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentVersion">agent_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaborationInstruction">collaboration_instruction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaboratorName">collaborator_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.prepareAgent">prepare_agent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.relayConversationHistory">relay_conversation_history</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agent_descriptor`<sup>Required</sup> <a name="agent_descriptor" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentDescriptor"></a>

```python
agent_descriptor: BedrockagentAgentCollaboratorAgentDescriptorList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList">BedrockagentAgentCollaboratorAgentDescriptorList</a>

---

##### `collaborator_id`<sup>Required</sup> <a name="collaborator_id" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaboratorId"></a>

```python
collaborator_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.timeouts"></a>

```python
timeouts: BedrockagentAgentCollaboratorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference">BedrockagentAgentCollaboratorTimeoutsOutputReference</a>

---

##### `agent_descriptor_input`<sup>Optional</sup> <a name="agent_descriptor_input" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentDescriptorInput"></a>

```python
agent_descriptor_input: typing.Union[IResolvable, typing.List[BedrockagentAgentCollaboratorAgentDescriptor]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor">BedrockagentAgentCollaboratorAgentDescriptor</a>]]

---

##### `agent_id_input`<sup>Optional</sup> <a name="agent_id_input" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentIdInput"></a>

```python
agent_id_input: str
```

- *Type:* str

---

##### `agent_version_input`<sup>Optional</sup> <a name="agent_version_input" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentVersionInput"></a>

```python
agent_version_input: str
```

- *Type:* str

---

##### `collaboration_instruction_input`<sup>Optional</sup> <a name="collaboration_instruction_input" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaborationInstructionInput"></a>

```python
collaboration_instruction_input: str
```

- *Type:* str

---

##### `collaborator_name_input`<sup>Optional</sup> <a name="collaborator_name_input" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaboratorNameInput"></a>

```python
collaborator_name_input: str
```

- *Type:* str

---

##### `prepare_agent_input`<sup>Optional</sup> <a name="prepare_agent_input" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.prepareAgentInput"></a>

```python
prepare_agent_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `relay_conversation_history_input`<sup>Optional</sup> <a name="relay_conversation_history_input" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.relayConversationHistoryInput"></a>

```python
relay_conversation_history_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BedrockagentAgentCollaboratorTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts">BedrockagentAgentCollaboratorTimeouts</a>]

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

---

##### `agent_version`<sup>Required</sup> <a name="agent_version" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentVersion"></a>

```python
agent_version: str
```

- *Type:* str

---

##### `collaboration_instruction`<sup>Required</sup> <a name="collaboration_instruction" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaborationInstruction"></a>

```python
collaboration_instruction: str
```

- *Type:* str

---

##### `collaborator_name`<sup>Required</sup> <a name="collaborator_name" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaboratorName"></a>

```python
collaborator_name: str
```

- *Type:* str

---

##### `prepare_agent`<sup>Required</sup> <a name="prepare_agent" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.prepareAgent"></a>

```python
prepare_agent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `relay_conversation_history`<sup>Required</sup> <a name="relay_conversation_history" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.relayConversationHistory"></a>

```python
relay_conversation_history: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentAgentCollaboratorAgentDescriptor <a name="BedrockagentAgentCollaboratorAgentDescriptor" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_collaborator

bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor(
  alias_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor.property.aliasArn">alias_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#alias_arn BedrockagentAgentCollaborator#alias_arn}. |

---

##### `alias_arn`<sup>Required</sup> <a name="alias_arn" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor.property.aliasArn"></a>

```python
alias_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#alias_arn BedrockagentAgentCollaborator#alias_arn}.

---

### BedrockagentAgentCollaboratorConfig <a name="BedrockagentAgentCollaboratorConfig" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_collaborator

bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  agent_id: str,
  collaboration_instruction: str,
  collaborator_name: str,
  agent_descriptor: typing.Union[IResolvable, typing.List[BedrockagentAgentCollaboratorAgentDescriptor]] = None,
  agent_version: str = None,
  prepare_agent: typing.Union[bool, IResolvable] = None,
  region: str = None,
  relay_conversation_history: str = None,
  timeouts: BedrockagentAgentCollaboratorTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.agentId">agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#agent_id BedrockagentAgentCollaborator#agent_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.collaborationInstruction">collaboration_instruction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#collaboration_instruction BedrockagentAgentCollaborator#collaboration_instruction}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.collaboratorName">collaborator_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#collaborator_name BedrockagentAgentCollaborator#collaborator_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.agentDescriptor">agent_descriptor</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor">BedrockagentAgentCollaboratorAgentDescriptor</a>]]</code> | agent_descriptor block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.agentVersion">agent_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#agent_version BedrockagentAgentCollaborator#agent_version}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.prepareAgent">prepare_agent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#prepare_agent BedrockagentAgentCollaborator#prepare_agent}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.relayConversationHistory">relay_conversation_history</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#relay_conversation_history BedrockagentAgentCollaborator#relay_conversation_history}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts">BedrockagentAgentCollaboratorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#agent_id BedrockagentAgentCollaborator#agent_id}.

---

##### `collaboration_instruction`<sup>Required</sup> <a name="collaboration_instruction" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.collaborationInstruction"></a>

```python
collaboration_instruction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#collaboration_instruction BedrockagentAgentCollaborator#collaboration_instruction}.

---

##### `collaborator_name`<sup>Required</sup> <a name="collaborator_name" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.collaboratorName"></a>

```python
collaborator_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#collaborator_name BedrockagentAgentCollaborator#collaborator_name}.

---

##### `agent_descriptor`<sup>Optional</sup> <a name="agent_descriptor" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.agentDescriptor"></a>

```python
agent_descriptor: typing.Union[IResolvable, typing.List[BedrockagentAgentCollaboratorAgentDescriptor]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor">BedrockagentAgentCollaboratorAgentDescriptor</a>]]

agent_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#agent_descriptor BedrockagentAgentCollaborator#agent_descriptor}

---

##### `agent_version`<sup>Optional</sup> <a name="agent_version" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.agentVersion"></a>

```python
agent_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#agent_version BedrockagentAgentCollaborator#agent_version}.

---

##### `prepare_agent`<sup>Optional</sup> <a name="prepare_agent" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.prepareAgent"></a>

```python
prepare_agent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#prepare_agent BedrockagentAgentCollaborator#prepare_agent}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#region BedrockagentAgentCollaborator#region}

---

##### `relay_conversation_history`<sup>Optional</sup> <a name="relay_conversation_history" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.relayConversationHistory"></a>

```python
relay_conversation_history: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#relay_conversation_history BedrockagentAgentCollaborator#relay_conversation_history}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.timeouts"></a>

```python
timeouts: BedrockagentAgentCollaboratorTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts">BedrockagentAgentCollaboratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#timeouts BedrockagentAgentCollaborator#timeouts}

---

### BedrockagentAgentCollaboratorTimeouts <a name="BedrockagentAgentCollaboratorTimeouts" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_collaborator

bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#create BedrockagentAgentCollaborator#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#delete BedrockagentAgentCollaborator#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#update BedrockagentAgentCollaborator#update}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentAgentCollaboratorAgentDescriptorList <a name="BedrockagentAgentCollaboratorAgentDescriptorList" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_collaborator

bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentAgentCollaboratorAgentDescriptorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor">BedrockagentAgentCollaboratorAgentDescriptor</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BedrockagentAgentCollaboratorAgentDescriptor]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor">BedrockagentAgentCollaboratorAgentDescriptor</a>]]

---


### BedrockagentAgentCollaboratorAgentDescriptorOutputReference <a name="BedrockagentAgentCollaboratorAgentDescriptorOutputReference" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_collaborator

bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.aliasArnInput">alias_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.aliasArn">alias_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor">BedrockagentAgentCollaboratorAgentDescriptor</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias_arn_input`<sup>Optional</sup> <a name="alias_arn_input" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.aliasArnInput"></a>

```python
alias_arn_input: str
```

- *Type:* str

---

##### `alias_arn`<sup>Required</sup> <a name="alias_arn" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.aliasArn"></a>

```python
alias_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BedrockagentAgentCollaboratorAgentDescriptor]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor">BedrockagentAgentCollaboratorAgentDescriptor</a>]

---


### BedrockagentAgentCollaboratorTimeoutsOutputReference <a name="BedrockagentAgentCollaboratorTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_collaborator

bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts">BedrockagentAgentCollaboratorTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BedrockagentAgentCollaboratorTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts">BedrockagentAgentCollaboratorTimeouts</a>]

---



