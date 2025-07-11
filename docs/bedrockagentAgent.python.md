# `bedrockagentAgent` Submodule <a name="`bedrockagentAgent` Submodule" id="@cdktf/provider-aws.bedrockagentAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentAgent <a name="BedrockagentAgent" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent aws_bedrockagent_agent}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent

bedrockagentAgent.BedrockagentAgent(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  agent_name: str,
  agent_resource_role_arn: str,
  foundation_model: str,
  agent_collaboration: str = None,
  customer_encryption_key_arn: str = None,
  description: str = None,
  guardrail_configuration: typing.Union[IResolvable, typing.List[BedrockagentAgentGuardrailConfiguration]] = None,
  idle_session_ttl_in_seconds: typing.Union[int, float] = None,
  instruction: str = None,
  memory_configuration: typing.Union[IResolvable, typing.List[BedrockagentAgentMemoryConfiguration]] = None,
  prepare_agent: typing.Union[bool, IResolvable] = None,
  prompt_override_configuration: typing.Union[IResolvable, typing.List[BedrockagentAgentPromptOverrideConfiguration]] = None,
  region: str = None,
  skip_resource_in_use_check: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: BedrockagentAgentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.agentName">agent_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#agent_name BedrockagentAgent#agent_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.agentResourceRoleArn">agent_resource_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#agent_resource_role_arn BedrockagentAgent#agent_resource_role_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.foundationModel">foundation_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#foundation_model BedrockagentAgent#foundation_model}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.agentCollaboration">agent_collaboration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#agent_collaboration BedrockagentAgent#agent_collaboration}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.customerEncryptionKeyArn">customer_encryption_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#customer_encryption_key_arn BedrockagentAgent#customer_encryption_key_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#description BedrockagentAgent#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.guardrailConfiguration">guardrail_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfiguration">BedrockagentAgentGuardrailConfiguration</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#guardrail_configuration BedrockagentAgent#guardrail_configuration}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.idleSessionTtlInSeconds">idle_session_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#idle_session_ttl_in_seconds BedrockagentAgent#idle_session_ttl_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.instruction">instruction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#instruction BedrockagentAgent#instruction}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.memoryConfiguration">memory_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfiguration">BedrockagentAgentMemoryConfiguration</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#memory_configuration BedrockagentAgent#memory_configuration}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.prepareAgent">prepare_agent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#prepare_agent BedrockagentAgent#prepare_agent}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.promptOverrideConfiguration">prompt_override_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration">BedrockagentAgentPromptOverrideConfiguration</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#prompt_override_configuration BedrockagentAgent#prompt_override_configuration}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.skipResourceInUseCheck">skip_resource_in_use_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#skip_resource_in_use_check BedrockagentAgent#skip_resource_in_use_check}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#tags BedrockagentAgent#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts">BedrockagentAgentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agent_name`<sup>Required</sup> <a name="agent_name" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.agentName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#agent_name BedrockagentAgent#agent_name}.

---

##### `agent_resource_role_arn`<sup>Required</sup> <a name="agent_resource_role_arn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.agentResourceRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#agent_resource_role_arn BedrockagentAgent#agent_resource_role_arn}.

---

##### `foundation_model`<sup>Required</sup> <a name="foundation_model" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.foundationModel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#foundation_model BedrockagentAgent#foundation_model}.

---

##### `agent_collaboration`<sup>Optional</sup> <a name="agent_collaboration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.agentCollaboration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#agent_collaboration BedrockagentAgent#agent_collaboration}.

---

##### `customer_encryption_key_arn`<sup>Optional</sup> <a name="customer_encryption_key_arn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.customerEncryptionKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#customer_encryption_key_arn BedrockagentAgent#customer_encryption_key_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#description BedrockagentAgent#description}.

---

##### `guardrail_configuration`<sup>Optional</sup> <a name="guardrail_configuration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.guardrailConfiguration"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfiguration">BedrockagentAgentGuardrailConfiguration</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#guardrail_configuration BedrockagentAgent#guardrail_configuration}.

---

##### `idle_session_ttl_in_seconds`<sup>Optional</sup> <a name="idle_session_ttl_in_seconds" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.idleSessionTtlInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#idle_session_ttl_in_seconds BedrockagentAgent#idle_session_ttl_in_seconds}.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.instruction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#instruction BedrockagentAgent#instruction}.

---

##### `memory_configuration`<sup>Optional</sup> <a name="memory_configuration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.memoryConfiguration"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfiguration">BedrockagentAgentMemoryConfiguration</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#memory_configuration BedrockagentAgent#memory_configuration}.

---

##### `prepare_agent`<sup>Optional</sup> <a name="prepare_agent" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.prepareAgent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#prepare_agent BedrockagentAgent#prepare_agent}.

---

##### `prompt_override_configuration`<sup>Optional</sup> <a name="prompt_override_configuration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.promptOverrideConfiguration"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration">BedrockagentAgentPromptOverrideConfiguration</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#prompt_override_configuration BedrockagentAgent#prompt_override_configuration}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#region BedrockagentAgent#region}

---

##### `skip_resource_in_use_check`<sup>Optional</sup> <a name="skip_resource_in_use_check" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.skipResourceInUseCheck"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#skip_resource_in_use_check BedrockagentAgent#skip_resource_in_use_check}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#tags BedrockagentAgent#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts">BedrockagentAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#timeouts BedrockagentAgent#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.putGuardrailConfiguration">put_guardrail_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.putMemoryConfiguration">put_memory_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.putPromptOverrideConfiguration">put_prompt_override_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetAgentCollaboration">reset_agent_collaboration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetCustomerEncryptionKeyArn">reset_customer_encryption_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetGuardrailConfiguration">reset_guardrail_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetIdleSessionTtlInSeconds">reset_idle_session_ttl_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetInstruction">reset_instruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetMemoryConfiguration">reset_memory_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetPrepareAgent">reset_prepare_agent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetPromptOverrideConfiguration">reset_prompt_override_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetSkipResourceInUseCheck">reset_skip_resource_in_use_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_guardrail_configuration` <a name="put_guardrail_configuration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.putGuardrailConfiguration"></a>

```python
def put_guardrail_configuration(
  value: typing.Union[IResolvable, typing.List[BedrockagentAgentGuardrailConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.putGuardrailConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfiguration">BedrockagentAgentGuardrailConfiguration</a>]]

---

##### `put_memory_configuration` <a name="put_memory_configuration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.putMemoryConfiguration"></a>

```python
def put_memory_configuration(
  value: typing.Union[IResolvable, typing.List[BedrockagentAgentMemoryConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.putMemoryConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfiguration">BedrockagentAgentMemoryConfiguration</a>]]

---

##### `put_prompt_override_configuration` <a name="put_prompt_override_configuration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.putPromptOverrideConfiguration"></a>

```python
def put_prompt_override_configuration(
  value: typing.Union[IResolvable, typing.List[BedrockagentAgentPromptOverrideConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.putPromptOverrideConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration">BedrockagentAgentPromptOverrideConfiguration</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#create BedrockagentAgent#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#delete BedrockagentAgent#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#update BedrockagentAgent#update}

---

##### `reset_agent_collaboration` <a name="reset_agent_collaboration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetAgentCollaboration"></a>

```python
def reset_agent_collaboration() -> None
```

##### `reset_customer_encryption_key_arn` <a name="reset_customer_encryption_key_arn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetCustomerEncryptionKeyArn"></a>

```python
def reset_customer_encryption_key_arn() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_guardrail_configuration` <a name="reset_guardrail_configuration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetGuardrailConfiguration"></a>

```python
def reset_guardrail_configuration() -> None
```

##### `reset_idle_session_ttl_in_seconds` <a name="reset_idle_session_ttl_in_seconds" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetIdleSessionTtlInSeconds"></a>

```python
def reset_idle_session_ttl_in_seconds() -> None
```

##### `reset_instruction` <a name="reset_instruction" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetInstruction"></a>

```python
def reset_instruction() -> None
```

##### `reset_memory_configuration` <a name="reset_memory_configuration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetMemoryConfiguration"></a>

```python
def reset_memory_configuration() -> None
```

##### `reset_prepare_agent` <a name="reset_prepare_agent" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetPrepareAgent"></a>

```python
def reset_prepare_agent() -> None
```

##### `reset_prompt_override_configuration` <a name="reset_prompt_override_configuration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetPromptOverrideConfiguration"></a>

```python
def reset_prompt_override_configuration() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_skip_resource_in_use_check` <a name="reset_skip_resource_in_use_check" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetSkipResourceInUseCheck"></a>

```python
def reset_skip_resource_in_use_check() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BedrockagentAgent resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent

bedrockagentAgent.BedrockagentAgent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent

bedrockagentAgent.BedrockagentAgent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent

bedrockagentAgent.BedrockagentAgent.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent

bedrockagentAgent.BedrockagentAgent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BedrockagentAgent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BedrockagentAgent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BedrockagentAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentArn">agent_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentId">agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentVersion">agent_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.guardrailConfiguration">guardrail_configuration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList">BedrockagentAgentGuardrailConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.memoryConfiguration">memory_configuration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList">BedrockagentAgentMemoryConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.preparedAt">prepared_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.promptOverrideConfiguration">prompt_override_configuration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList">BedrockagentAgentPromptOverrideConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference">BedrockagentAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentCollaborationInput">agent_collaboration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentNameInput">agent_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentResourceRoleArnInput">agent_resource_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.customerEncryptionKeyArnInput">customer_encryption_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.foundationModelInput">foundation_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.guardrailConfigurationInput">guardrail_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfiguration">BedrockagentAgentGuardrailConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.idleSessionTtlInSecondsInput">idle_session_ttl_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.instructionInput">instruction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.memoryConfigurationInput">memory_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfiguration">BedrockagentAgentMemoryConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.prepareAgentInput">prepare_agent_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.promptOverrideConfigurationInput">prompt_override_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration">BedrockagentAgentPromptOverrideConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.skipResourceInUseCheckInput">skip_resource_in_use_check_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts">BedrockagentAgentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentCollaboration">agent_collaboration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentName">agent_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentResourceRoleArn">agent_resource_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.customerEncryptionKeyArn">customer_encryption_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.foundationModel">foundation_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.idleSessionTtlInSeconds">idle_session_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.instruction">instruction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.prepareAgent">prepare_agent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.skipResourceInUseCheck">skip_resource_in_use_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agent_arn`<sup>Required</sup> <a name="agent_arn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentArn"></a>

```python
agent_arn: str
```

- *Type:* str

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

---

##### `agent_version`<sup>Required</sup> <a name="agent_version" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentVersion"></a>

```python
agent_version: str
```

- *Type:* str

---

##### `guardrail_configuration`<sup>Required</sup> <a name="guardrail_configuration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.guardrailConfiguration"></a>

```python
guardrail_configuration: BedrockagentAgentGuardrailConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList">BedrockagentAgentGuardrailConfigurationList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `memory_configuration`<sup>Required</sup> <a name="memory_configuration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.memoryConfiguration"></a>

```python
memory_configuration: BedrockagentAgentMemoryConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList">BedrockagentAgentMemoryConfigurationList</a>

---

##### `prepared_at`<sup>Required</sup> <a name="prepared_at" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.preparedAt"></a>

```python
prepared_at: str
```

- *Type:* str

---

##### `prompt_override_configuration`<sup>Required</sup> <a name="prompt_override_configuration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.promptOverrideConfiguration"></a>

```python
prompt_override_configuration: BedrockagentAgentPromptOverrideConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList">BedrockagentAgentPromptOverrideConfigurationList</a>

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.timeouts"></a>

```python
timeouts: BedrockagentAgentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference">BedrockagentAgentTimeoutsOutputReference</a>

---

##### `agent_collaboration_input`<sup>Optional</sup> <a name="agent_collaboration_input" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentCollaborationInput"></a>

```python
agent_collaboration_input: str
```

- *Type:* str

---

##### `agent_name_input`<sup>Optional</sup> <a name="agent_name_input" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentNameInput"></a>

```python
agent_name_input: str
```

- *Type:* str

---

##### `agent_resource_role_arn_input`<sup>Optional</sup> <a name="agent_resource_role_arn_input" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentResourceRoleArnInput"></a>

```python
agent_resource_role_arn_input: str
```

- *Type:* str

---

##### `customer_encryption_key_arn_input`<sup>Optional</sup> <a name="customer_encryption_key_arn_input" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.customerEncryptionKeyArnInput"></a>

```python
customer_encryption_key_arn_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `foundation_model_input`<sup>Optional</sup> <a name="foundation_model_input" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.foundationModelInput"></a>

```python
foundation_model_input: str
```

- *Type:* str

---

##### `guardrail_configuration_input`<sup>Optional</sup> <a name="guardrail_configuration_input" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.guardrailConfigurationInput"></a>

```python
guardrail_configuration_input: typing.Union[IResolvable, typing.List[BedrockagentAgentGuardrailConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfiguration">BedrockagentAgentGuardrailConfiguration</a>]]

---

##### `idle_session_ttl_in_seconds_input`<sup>Optional</sup> <a name="idle_session_ttl_in_seconds_input" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.idleSessionTtlInSecondsInput"></a>

```python
idle_session_ttl_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instruction_input`<sup>Optional</sup> <a name="instruction_input" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.instructionInput"></a>

```python
instruction_input: str
```

- *Type:* str

---

##### `memory_configuration_input`<sup>Optional</sup> <a name="memory_configuration_input" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.memoryConfigurationInput"></a>

```python
memory_configuration_input: typing.Union[IResolvable, typing.List[BedrockagentAgentMemoryConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfiguration">BedrockagentAgentMemoryConfiguration</a>]]

---

##### `prepare_agent_input`<sup>Optional</sup> <a name="prepare_agent_input" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.prepareAgentInput"></a>

```python
prepare_agent_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `prompt_override_configuration_input`<sup>Optional</sup> <a name="prompt_override_configuration_input" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.promptOverrideConfigurationInput"></a>

```python
prompt_override_configuration_input: typing.Union[IResolvable, typing.List[BedrockagentAgentPromptOverrideConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration">BedrockagentAgentPromptOverrideConfiguration</a>]]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `skip_resource_in_use_check_input`<sup>Optional</sup> <a name="skip_resource_in_use_check_input" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.skipResourceInUseCheckInput"></a>

```python
skip_resource_in_use_check_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BedrockagentAgentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts">BedrockagentAgentTimeouts</a>]

---

##### `agent_collaboration`<sup>Required</sup> <a name="agent_collaboration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentCollaboration"></a>

```python
agent_collaboration: str
```

- *Type:* str

---

##### `agent_name`<sup>Required</sup> <a name="agent_name" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentName"></a>

```python
agent_name: str
```

- *Type:* str

---

##### `agent_resource_role_arn`<sup>Required</sup> <a name="agent_resource_role_arn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentResourceRoleArn"></a>

```python
agent_resource_role_arn: str
```

- *Type:* str

---

##### `customer_encryption_key_arn`<sup>Required</sup> <a name="customer_encryption_key_arn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.customerEncryptionKeyArn"></a>

```python
customer_encryption_key_arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `foundation_model`<sup>Required</sup> <a name="foundation_model" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.foundationModel"></a>

```python
foundation_model: str
```

- *Type:* str

---

##### `idle_session_ttl_in_seconds`<sup>Required</sup> <a name="idle_session_ttl_in_seconds" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.idleSessionTtlInSeconds"></a>

```python
idle_session_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.instruction"></a>

```python
instruction: str
```

- *Type:* str

---

##### `prepare_agent`<sup>Required</sup> <a name="prepare_agent" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.prepareAgent"></a>

```python
prepare_agent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `skip_resource_in_use_check`<sup>Required</sup> <a name="skip_resource_in_use_check" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.skipResourceInUseCheck"></a>

```python
skip_resource_in_use_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentAgentConfig <a name="BedrockagentAgentConfig" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent

bedrockagentAgent.BedrockagentAgentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  agent_name: str,
  agent_resource_role_arn: str,
  foundation_model: str,
  agent_collaboration: str = None,
  customer_encryption_key_arn: str = None,
  description: str = None,
  guardrail_configuration: typing.Union[IResolvable, typing.List[BedrockagentAgentGuardrailConfiguration]] = None,
  idle_session_ttl_in_seconds: typing.Union[int, float] = None,
  instruction: str = None,
  memory_configuration: typing.Union[IResolvable, typing.List[BedrockagentAgentMemoryConfiguration]] = None,
  prepare_agent: typing.Union[bool, IResolvable] = None,
  prompt_override_configuration: typing.Union[IResolvable, typing.List[BedrockagentAgentPromptOverrideConfiguration]] = None,
  region: str = None,
  skip_resource_in_use_check: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: BedrockagentAgentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.agentName">agent_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#agent_name BedrockagentAgent#agent_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.agentResourceRoleArn">agent_resource_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#agent_resource_role_arn BedrockagentAgent#agent_resource_role_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.foundationModel">foundation_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#foundation_model BedrockagentAgent#foundation_model}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.agentCollaboration">agent_collaboration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#agent_collaboration BedrockagentAgent#agent_collaboration}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.customerEncryptionKeyArn">customer_encryption_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#customer_encryption_key_arn BedrockagentAgent#customer_encryption_key_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#description BedrockagentAgent#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.guardrailConfiguration">guardrail_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfiguration">BedrockagentAgentGuardrailConfiguration</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#guardrail_configuration BedrockagentAgent#guardrail_configuration}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.idleSessionTtlInSeconds">idle_session_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#idle_session_ttl_in_seconds BedrockagentAgent#idle_session_ttl_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.instruction">instruction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#instruction BedrockagentAgent#instruction}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.memoryConfiguration">memory_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfiguration">BedrockagentAgentMemoryConfiguration</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#memory_configuration BedrockagentAgent#memory_configuration}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.prepareAgent">prepare_agent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#prepare_agent BedrockagentAgent#prepare_agent}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.promptOverrideConfiguration">prompt_override_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration">BedrockagentAgentPromptOverrideConfiguration</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#prompt_override_configuration BedrockagentAgent#prompt_override_configuration}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.skipResourceInUseCheck">skip_resource_in_use_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#skip_resource_in_use_check BedrockagentAgent#skip_resource_in_use_check}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#tags BedrockagentAgent#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts">BedrockagentAgentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agent_name`<sup>Required</sup> <a name="agent_name" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.agentName"></a>

```python
agent_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#agent_name BedrockagentAgent#agent_name}.

---

##### `agent_resource_role_arn`<sup>Required</sup> <a name="agent_resource_role_arn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.agentResourceRoleArn"></a>

```python
agent_resource_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#agent_resource_role_arn BedrockagentAgent#agent_resource_role_arn}.

---

##### `foundation_model`<sup>Required</sup> <a name="foundation_model" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.foundationModel"></a>

```python
foundation_model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#foundation_model BedrockagentAgent#foundation_model}.

---

##### `agent_collaboration`<sup>Optional</sup> <a name="agent_collaboration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.agentCollaboration"></a>

```python
agent_collaboration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#agent_collaboration BedrockagentAgent#agent_collaboration}.

---

##### `customer_encryption_key_arn`<sup>Optional</sup> <a name="customer_encryption_key_arn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.customerEncryptionKeyArn"></a>

```python
customer_encryption_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#customer_encryption_key_arn BedrockagentAgent#customer_encryption_key_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#description BedrockagentAgent#description}.

---

##### `guardrail_configuration`<sup>Optional</sup> <a name="guardrail_configuration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.guardrailConfiguration"></a>

```python
guardrail_configuration: typing.Union[IResolvable, typing.List[BedrockagentAgentGuardrailConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfiguration">BedrockagentAgentGuardrailConfiguration</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#guardrail_configuration BedrockagentAgent#guardrail_configuration}.

---

##### `idle_session_ttl_in_seconds`<sup>Optional</sup> <a name="idle_session_ttl_in_seconds" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.idleSessionTtlInSeconds"></a>

```python
idle_session_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#idle_session_ttl_in_seconds BedrockagentAgent#idle_session_ttl_in_seconds}.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.instruction"></a>

```python
instruction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#instruction BedrockagentAgent#instruction}.

---

##### `memory_configuration`<sup>Optional</sup> <a name="memory_configuration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.memoryConfiguration"></a>

```python
memory_configuration: typing.Union[IResolvable, typing.List[BedrockagentAgentMemoryConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfiguration">BedrockagentAgentMemoryConfiguration</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#memory_configuration BedrockagentAgent#memory_configuration}.

---

##### `prepare_agent`<sup>Optional</sup> <a name="prepare_agent" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.prepareAgent"></a>

```python
prepare_agent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#prepare_agent BedrockagentAgent#prepare_agent}.

---

##### `prompt_override_configuration`<sup>Optional</sup> <a name="prompt_override_configuration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.promptOverrideConfiguration"></a>

```python
prompt_override_configuration: typing.Union[IResolvable, typing.List[BedrockagentAgentPromptOverrideConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration">BedrockagentAgentPromptOverrideConfiguration</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#prompt_override_configuration BedrockagentAgent#prompt_override_configuration}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#region BedrockagentAgent#region}

---

##### `skip_resource_in_use_check`<sup>Optional</sup> <a name="skip_resource_in_use_check" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.skipResourceInUseCheck"></a>

```python
skip_resource_in_use_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#skip_resource_in_use_check BedrockagentAgent#skip_resource_in_use_check}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#tags BedrockagentAgent#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.timeouts"></a>

```python
timeouts: BedrockagentAgentTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts">BedrockagentAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#timeouts BedrockagentAgent#timeouts}

---

### BedrockagentAgentGuardrailConfiguration <a name="BedrockagentAgentGuardrailConfiguration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent

bedrockagentAgent.BedrockagentAgentGuardrailConfiguration(
  guardrail_identifier: str = None,
  guardrail_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfiguration.property.guardrailIdentifier">guardrail_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#guardrail_identifier BedrockagentAgent#guardrail_identifier}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfiguration.property.guardrailVersion">guardrail_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#guardrail_version BedrockagentAgent#guardrail_version}. |

---

##### `guardrail_identifier`<sup>Optional</sup> <a name="guardrail_identifier" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfiguration.property.guardrailIdentifier"></a>

```python
guardrail_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#guardrail_identifier BedrockagentAgent#guardrail_identifier}.

---

##### `guardrail_version`<sup>Optional</sup> <a name="guardrail_version" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfiguration.property.guardrailVersion"></a>

```python
guardrail_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#guardrail_version BedrockagentAgent#guardrail_version}.

---

### BedrockagentAgentMemoryConfiguration <a name="BedrockagentAgentMemoryConfiguration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent

bedrockagentAgent.BedrockagentAgentMemoryConfiguration(
  enabled_memory_types: typing.List[str] = None,
  storage_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfiguration.property.enabledMemoryTypes">enabled_memory_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#enabled_memory_types BedrockagentAgent#enabled_memory_types}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfiguration.property.storageDays">storage_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#storage_days BedrockagentAgent#storage_days}. |

---

##### `enabled_memory_types`<sup>Optional</sup> <a name="enabled_memory_types" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfiguration.property.enabledMemoryTypes"></a>

```python
enabled_memory_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#enabled_memory_types BedrockagentAgent#enabled_memory_types}.

---

##### `storage_days`<sup>Optional</sup> <a name="storage_days" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfiguration.property.storageDays"></a>

```python
storage_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#storage_days BedrockagentAgent#storage_days}.

---

### BedrockagentAgentPromptOverrideConfiguration <a name="BedrockagentAgentPromptOverrideConfiguration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent

bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration(
  override_lambda: str = None,
  prompt_configurations: typing.Union[IResolvable, typing.List[BedrockagentAgentPromptOverrideConfigurationPromptConfigurations]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration.property.overrideLambda">override_lambda</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#override_lambda BedrockagentAgent#override_lambda}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration.property.promptConfigurations">prompt_configurations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations">BedrockagentAgentPromptOverrideConfigurationPromptConfigurations</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#prompt_configurations BedrockagentAgent#prompt_configurations}. |

---

##### `override_lambda`<sup>Optional</sup> <a name="override_lambda" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration.property.overrideLambda"></a>

```python
override_lambda: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#override_lambda BedrockagentAgent#override_lambda}.

---

##### `prompt_configurations`<sup>Optional</sup> <a name="prompt_configurations" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration.property.promptConfigurations"></a>

```python
prompt_configurations: typing.Union[IResolvable, typing.List[BedrockagentAgentPromptOverrideConfigurationPromptConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations">BedrockagentAgentPromptOverrideConfigurationPromptConfigurations</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#prompt_configurations BedrockagentAgent#prompt_configurations}.

---

### BedrockagentAgentPromptOverrideConfigurationPromptConfigurations <a name="BedrockagentAgentPromptOverrideConfigurationPromptConfigurations" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent

bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations(
  base_prompt_template: str = None,
  inference_configuration: typing.Union[IResolvable, typing.List[BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration]] = None,
  parser_mode: str = None,
  prompt_creation_mode: str = None,
  prompt_state: str = None,
  prompt_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.property.basePromptTemplate">base_prompt_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#base_prompt_template BedrockagentAgent#base_prompt_template}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.property.inferenceConfiguration">inference_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#inference_configuration BedrockagentAgent#inference_configuration}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.property.parserMode">parser_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#parser_mode BedrockagentAgent#parser_mode}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.property.promptCreationMode">prompt_creation_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#prompt_creation_mode BedrockagentAgent#prompt_creation_mode}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.property.promptState">prompt_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#prompt_state BedrockagentAgent#prompt_state}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.property.promptType">prompt_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#prompt_type BedrockagentAgent#prompt_type}. |

---

##### `base_prompt_template`<sup>Optional</sup> <a name="base_prompt_template" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.property.basePromptTemplate"></a>

```python
base_prompt_template: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#base_prompt_template BedrockagentAgent#base_prompt_template}.

---

##### `inference_configuration`<sup>Optional</sup> <a name="inference_configuration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.property.inferenceConfiguration"></a>

```python
inference_configuration: typing.Union[IResolvable, typing.List[BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#inference_configuration BedrockagentAgent#inference_configuration}.

---

##### `parser_mode`<sup>Optional</sup> <a name="parser_mode" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.property.parserMode"></a>

```python
parser_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#parser_mode BedrockagentAgent#parser_mode}.

---

##### `prompt_creation_mode`<sup>Optional</sup> <a name="prompt_creation_mode" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.property.promptCreationMode"></a>

```python
prompt_creation_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#prompt_creation_mode BedrockagentAgent#prompt_creation_mode}.

---

##### `prompt_state`<sup>Optional</sup> <a name="prompt_state" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.property.promptState"></a>

```python
prompt_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#prompt_state BedrockagentAgent#prompt_state}.

---

##### `prompt_type`<sup>Optional</sup> <a name="prompt_type" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.property.promptType"></a>

```python
prompt_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#prompt_type BedrockagentAgent#prompt_type}.

---

### BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration <a name="BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent

bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration(
  max_length: typing.Union[int, float] = None,
  stop_sequences: typing.List[str] = None,
  temperature: typing.Union[int, float] = None,
  top_k: typing.Union[int, float] = None,
  top_p: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.maxLength">max_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#max_length BedrockagentAgent#max_length}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.stopSequences">stop_sequences</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#stop_sequences BedrockagentAgent#stop_sequences}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#temperature BedrockagentAgent#temperature}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.topK">top_k</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#top_k BedrockagentAgent#top_k}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.topP">top_p</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#top_p BedrockagentAgent#top_p}. |

---

##### `max_length`<sup>Optional</sup> <a name="max_length" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.maxLength"></a>

```python
max_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#max_length BedrockagentAgent#max_length}.

---

##### `stop_sequences`<sup>Optional</sup> <a name="stop_sequences" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.stopSequences"></a>

```python
stop_sequences: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#stop_sequences BedrockagentAgent#stop_sequences}.

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#temperature BedrockagentAgent#temperature}.

---

##### `top_k`<sup>Optional</sup> <a name="top_k" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.topK"></a>

```python
top_k: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#top_k BedrockagentAgent#top_k}.

---

##### `top_p`<sup>Optional</sup> <a name="top_p" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.topP"></a>

```python
top_p: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#top_p BedrockagentAgent#top_p}.

---

### BedrockagentAgentTimeouts <a name="BedrockagentAgentTimeouts" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent

bedrockagentAgent.BedrockagentAgentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#create BedrockagentAgent#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#delete BedrockagentAgent#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrockagent_agent#update BedrockagentAgent#update}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentAgentGuardrailConfigurationList <a name="BedrockagentAgentGuardrailConfigurationList" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent

bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentAgentGuardrailConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfiguration">BedrockagentAgentGuardrailConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BedrockagentAgentGuardrailConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfiguration">BedrockagentAgentGuardrailConfiguration</a>]]

---


### BedrockagentAgentGuardrailConfigurationOutputReference <a name="BedrockagentAgentGuardrailConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent

bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.resetGuardrailIdentifier">reset_guardrail_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.resetGuardrailVersion">reset_guardrail_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_guardrail_identifier` <a name="reset_guardrail_identifier" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.resetGuardrailIdentifier"></a>

```python
def reset_guardrail_identifier() -> None
```

##### `reset_guardrail_version` <a name="reset_guardrail_version" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.resetGuardrailVersion"></a>

```python
def reset_guardrail_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.property.guardrailIdentifierInput">guardrail_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.property.guardrailVersionInput">guardrail_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.property.guardrailIdentifier">guardrail_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.property.guardrailVersion">guardrail_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfiguration">BedrockagentAgentGuardrailConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `guardrail_identifier_input`<sup>Optional</sup> <a name="guardrail_identifier_input" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.property.guardrailIdentifierInput"></a>

```python
guardrail_identifier_input: str
```

- *Type:* str

---

##### `guardrail_version_input`<sup>Optional</sup> <a name="guardrail_version_input" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.property.guardrailVersionInput"></a>

```python
guardrail_version_input: str
```

- *Type:* str

---

##### `guardrail_identifier`<sup>Required</sup> <a name="guardrail_identifier" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.property.guardrailIdentifier"></a>

```python
guardrail_identifier: str
```

- *Type:* str

---

##### `guardrail_version`<sup>Required</sup> <a name="guardrail_version" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.property.guardrailVersion"></a>

```python
guardrail_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BedrockagentAgentGuardrailConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfiguration">BedrockagentAgentGuardrailConfiguration</a>]

---


### BedrockagentAgentMemoryConfigurationList <a name="BedrockagentAgentMemoryConfigurationList" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent

bedrockagentAgent.BedrockagentAgentMemoryConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentAgentMemoryConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfiguration">BedrockagentAgentMemoryConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BedrockagentAgentMemoryConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfiguration">BedrockagentAgentMemoryConfiguration</a>]]

---


### BedrockagentAgentMemoryConfigurationOutputReference <a name="BedrockagentAgentMemoryConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent

bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.resetEnabledMemoryTypes">reset_enabled_memory_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.resetStorageDays">reset_storage_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled_memory_types` <a name="reset_enabled_memory_types" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.resetEnabledMemoryTypes"></a>

```python
def reset_enabled_memory_types() -> None
```

##### `reset_storage_days` <a name="reset_storage_days" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.resetStorageDays"></a>

```python
def reset_storage_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.property.enabledMemoryTypesInput">enabled_memory_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.property.storageDaysInput">storage_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.property.enabledMemoryTypes">enabled_memory_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.property.storageDays">storage_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfiguration">BedrockagentAgentMemoryConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_memory_types_input`<sup>Optional</sup> <a name="enabled_memory_types_input" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.property.enabledMemoryTypesInput"></a>

```python
enabled_memory_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `storage_days_input`<sup>Optional</sup> <a name="storage_days_input" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.property.storageDaysInput"></a>

```python
storage_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled_memory_types`<sup>Required</sup> <a name="enabled_memory_types" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.property.enabledMemoryTypes"></a>

```python
enabled_memory_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `storage_days`<sup>Required</sup> <a name="storage_days" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.property.storageDays"></a>

```python
storage_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BedrockagentAgentMemoryConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfiguration">BedrockagentAgentMemoryConfiguration</a>]

---


### BedrockagentAgentPromptOverrideConfigurationList <a name="BedrockagentAgentPromptOverrideConfigurationList" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent

bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentAgentPromptOverrideConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration">BedrockagentAgentPromptOverrideConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BedrockagentAgentPromptOverrideConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration">BedrockagentAgentPromptOverrideConfiguration</a>]]

---


### BedrockagentAgentPromptOverrideConfigurationOutputReference <a name="BedrockagentAgentPromptOverrideConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent

bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.putPromptConfigurations">put_prompt_configurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.resetOverrideLambda">reset_override_lambda</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.resetPromptConfigurations">reset_prompt_configurations</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_prompt_configurations` <a name="put_prompt_configurations" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.putPromptConfigurations"></a>

```python
def put_prompt_configurations(
  value: typing.Union[IResolvable, typing.List[BedrockagentAgentPromptOverrideConfigurationPromptConfigurations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.putPromptConfigurations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations">BedrockagentAgentPromptOverrideConfigurationPromptConfigurations</a>]]

---

##### `reset_override_lambda` <a name="reset_override_lambda" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.resetOverrideLambda"></a>

```python
def reset_override_lambda() -> None
```

##### `reset_prompt_configurations` <a name="reset_prompt_configurations" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.resetPromptConfigurations"></a>

```python
def reset_prompt_configurations() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.promptConfigurations">prompt_configurations</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList">BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.overrideLambdaInput">override_lambda_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.promptConfigurationsInput">prompt_configurations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations">BedrockagentAgentPromptOverrideConfigurationPromptConfigurations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.overrideLambda">override_lambda</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration">BedrockagentAgentPromptOverrideConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prompt_configurations`<sup>Required</sup> <a name="prompt_configurations" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.promptConfigurations"></a>

```python
prompt_configurations: BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList">BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList</a>

---

##### `override_lambda_input`<sup>Optional</sup> <a name="override_lambda_input" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.overrideLambdaInput"></a>

```python
override_lambda_input: str
```

- *Type:* str

---

##### `prompt_configurations_input`<sup>Optional</sup> <a name="prompt_configurations_input" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.promptConfigurationsInput"></a>

```python
prompt_configurations_input: typing.Union[IResolvable, typing.List[BedrockagentAgentPromptOverrideConfigurationPromptConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations">BedrockagentAgentPromptOverrideConfigurationPromptConfigurations</a>]]

---

##### `override_lambda`<sup>Required</sup> <a name="override_lambda" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.overrideLambda"></a>

```python
override_lambda: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BedrockagentAgentPromptOverrideConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration">BedrockagentAgentPromptOverrideConfiguration</a>]

---


### BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList <a name="BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent

bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a>]]

---


### BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference <a name="BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent

bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetMaxLength">reset_max_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetStopSequences">reset_stop_sequences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTemperature">reset_temperature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTopK">reset_top_k</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTopP">reset_top_p</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_length` <a name="reset_max_length" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetMaxLength"></a>

```python
def reset_max_length() -> None
```

##### `reset_stop_sequences` <a name="reset_stop_sequences" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetStopSequences"></a>

```python
def reset_stop_sequences() -> None
```

##### `reset_temperature` <a name="reset_temperature" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTemperature"></a>

```python
def reset_temperature() -> None
```

##### `reset_top_k` <a name="reset_top_k" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTopK"></a>

```python
def reset_top_k() -> None
```

##### `reset_top_p` <a name="reset_top_p" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTopP"></a>

```python
def reset_top_p() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.maxLengthInput">max_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.stopSequencesInput">stop_sequences_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.temperatureInput">temperature_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topKInput">top_k_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topPInput">top_p_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.maxLength">max_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.stopSequences">stop_sequences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topK">top_k</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topP">top_p</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_length_input`<sup>Optional</sup> <a name="max_length_input" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.maxLengthInput"></a>

```python
max_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stop_sequences_input`<sup>Optional</sup> <a name="stop_sequences_input" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.stopSequencesInput"></a>

```python
stop_sequences_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `temperature_input`<sup>Optional</sup> <a name="temperature_input" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.temperatureInput"></a>

```python
temperature_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `top_k_input`<sup>Optional</sup> <a name="top_k_input" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topKInput"></a>

```python
top_k_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `top_p_input`<sup>Optional</sup> <a name="top_p_input" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topPInput"></a>

```python
top_p_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_length`<sup>Required</sup> <a name="max_length" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.maxLength"></a>

```python
max_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stop_sequences`<sup>Required</sup> <a name="stop_sequences" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.stopSequences"></a>

```python
stop_sequences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `top_k`<sup>Required</sup> <a name="top_k" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topK"></a>

```python
top_k: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `top_p`<sup>Required</sup> <a name="top_p" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topP"></a>

```python
top_p: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a>]

---


### BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList <a name="BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent

bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations">BedrockagentAgentPromptOverrideConfigurationPromptConfigurations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BedrockagentAgentPromptOverrideConfigurationPromptConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations">BedrockagentAgentPromptOverrideConfigurationPromptConfigurations</a>]]

---


### BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference <a name="BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent

bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.putInferenceConfiguration">put_inference_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetBasePromptTemplate">reset_base_prompt_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetInferenceConfiguration">reset_inference_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetParserMode">reset_parser_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptCreationMode">reset_prompt_creation_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptState">reset_prompt_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptType">reset_prompt_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_inference_configuration` <a name="put_inference_configuration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.putInferenceConfiguration"></a>

```python
def put_inference_configuration(
  value: typing.Union[IResolvable, typing.List[BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.putInferenceConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a>]]

---

##### `reset_base_prompt_template` <a name="reset_base_prompt_template" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetBasePromptTemplate"></a>

```python
def reset_base_prompt_template() -> None
```

##### `reset_inference_configuration` <a name="reset_inference_configuration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetInferenceConfiguration"></a>

```python
def reset_inference_configuration() -> None
```

##### `reset_parser_mode` <a name="reset_parser_mode" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetParserMode"></a>

```python
def reset_parser_mode() -> None
```

##### `reset_prompt_creation_mode` <a name="reset_prompt_creation_mode" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptCreationMode"></a>

```python
def reset_prompt_creation_mode() -> None
```

##### `reset_prompt_state` <a name="reset_prompt_state" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptState"></a>

```python
def reset_prompt_state() -> None
```

##### `reset_prompt_type` <a name="reset_prompt_type" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptType"></a>

```python
def reset_prompt_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.inferenceConfiguration">inference_configuration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList">BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.basePromptTemplateInput">base_prompt_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.inferenceConfigurationInput">inference_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.parserModeInput">parser_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptCreationModeInput">prompt_creation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptStateInput">prompt_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptTypeInput">prompt_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.basePromptTemplate">base_prompt_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.parserMode">parser_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptCreationMode">prompt_creation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptState">prompt_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptType">prompt_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations">BedrockagentAgentPromptOverrideConfigurationPromptConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `inference_configuration`<sup>Required</sup> <a name="inference_configuration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.inferenceConfiguration"></a>

```python
inference_configuration: BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList">BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList</a>

---

##### `base_prompt_template_input`<sup>Optional</sup> <a name="base_prompt_template_input" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.basePromptTemplateInput"></a>

```python
base_prompt_template_input: str
```

- *Type:* str

---

##### `inference_configuration_input`<sup>Optional</sup> <a name="inference_configuration_input" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.inferenceConfigurationInput"></a>

```python
inference_configuration_input: typing.Union[IResolvable, typing.List[BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a>]]

---

##### `parser_mode_input`<sup>Optional</sup> <a name="parser_mode_input" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.parserModeInput"></a>

```python
parser_mode_input: str
```

- *Type:* str

---

##### `prompt_creation_mode_input`<sup>Optional</sup> <a name="prompt_creation_mode_input" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptCreationModeInput"></a>

```python
prompt_creation_mode_input: str
```

- *Type:* str

---

##### `prompt_state_input`<sup>Optional</sup> <a name="prompt_state_input" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptStateInput"></a>

```python
prompt_state_input: str
```

- *Type:* str

---

##### `prompt_type_input`<sup>Optional</sup> <a name="prompt_type_input" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptTypeInput"></a>

```python
prompt_type_input: str
```

- *Type:* str

---

##### `base_prompt_template`<sup>Required</sup> <a name="base_prompt_template" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.basePromptTemplate"></a>

```python
base_prompt_template: str
```

- *Type:* str

---

##### `parser_mode`<sup>Required</sup> <a name="parser_mode" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.parserMode"></a>

```python
parser_mode: str
```

- *Type:* str

---

##### `prompt_creation_mode`<sup>Required</sup> <a name="prompt_creation_mode" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptCreationMode"></a>

```python
prompt_creation_mode: str
```

- *Type:* str

---

##### `prompt_state`<sup>Required</sup> <a name="prompt_state" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptState"></a>

```python
prompt_state: str
```

- *Type:* str

---

##### `prompt_type`<sup>Required</sup> <a name="prompt_type" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptType"></a>

```python
prompt_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BedrockagentAgentPromptOverrideConfigurationPromptConfigurations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations">BedrockagentAgentPromptOverrideConfigurationPromptConfigurations</a>]

---


### BedrockagentAgentTimeoutsOutputReference <a name="BedrockagentAgentTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent

bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts">BedrockagentAgentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BedrockagentAgentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts">BedrockagentAgentTimeouts</a>]

---



