# `bedrockagentAgentActionGroup` Submodule <a name="`bedrockagentAgentActionGroup` Submodule" id="@cdktf/provider-aws.bedrockagentAgentActionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentAgentActionGroup <a name="BedrockagentAgentActionGroup" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group aws_bedrockagent_agent_action_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_action_group

bedrockagentAgentActionGroup.BedrockagentAgentActionGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action_group_name: str,
  agent_id: str,
  agent_version: str,
  action_group_executor: typing.Union[IResolvable, typing.List[BedrockagentAgentActionGroupActionGroupExecutor]] = None,
  action_group_state: str = None,
  api_schema: typing.Union[IResolvable, typing.List[BedrockagentAgentActionGroupApiSchema]] = None,
  description: str = None,
  function_schema: typing.Union[IResolvable, typing.List[BedrockagentAgentActionGroupFunctionSchema]] = None,
  parent_action_group_signature: str = None,
  prepare_agent: typing.Union[bool, IResolvable] = None,
  region: str = None,
  skip_resource_in_use_check: typing.Union[bool, IResolvable] = None,
  timeouts: BedrockagentAgentActionGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.actionGroupName">action_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#action_group_name BedrockagentAgentActionGroup#action_group_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.agentId">agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#agent_id BedrockagentAgentActionGroup#agent_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.agentVersion">agent_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#agent_version BedrockagentAgentActionGroup#agent_version}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.actionGroupExecutor">action_group_executor</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor">BedrockagentAgentActionGroupActionGroupExecutor</a>]]</code> | action_group_executor block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.actionGroupState">action_group_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#action_group_state BedrockagentAgentActionGroup#action_group_state}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.apiSchema">api_schema</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema">BedrockagentAgentActionGroupApiSchema</a>]]</code> | api_schema block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#description BedrockagentAgentActionGroup#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.functionSchema">function_schema</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchema">BedrockagentAgentActionGroupFunctionSchema</a>]]</code> | function_schema block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.parentActionGroupSignature">parent_action_group_signature</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#parent_action_group_signature BedrockagentAgentActionGroup#parent_action_group_signature}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.prepareAgent">prepare_agent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#prepare_agent BedrockagentAgentActionGroup#prepare_agent}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.skipResourceInUseCheck">skip_resource_in_use_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#skip_resource_in_use_check BedrockagentAgentActionGroup#skip_resource_in_use_check}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts">BedrockagentAgentActionGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action_group_name`<sup>Required</sup> <a name="action_group_name" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.actionGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#action_group_name BedrockagentAgentActionGroup#action_group_name}.

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.agentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#agent_id BedrockagentAgentActionGroup#agent_id}.

---

##### `agent_version`<sup>Required</sup> <a name="agent_version" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.agentVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#agent_version BedrockagentAgentActionGroup#agent_version}.

---

##### `action_group_executor`<sup>Optional</sup> <a name="action_group_executor" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.actionGroupExecutor"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor">BedrockagentAgentActionGroupActionGroupExecutor</a>]]

action_group_executor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#action_group_executor BedrockagentAgentActionGroup#action_group_executor}

---

##### `action_group_state`<sup>Optional</sup> <a name="action_group_state" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.actionGroupState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#action_group_state BedrockagentAgentActionGroup#action_group_state}.

---

##### `api_schema`<sup>Optional</sup> <a name="api_schema" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.apiSchema"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema">BedrockagentAgentActionGroupApiSchema</a>]]

api_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#api_schema BedrockagentAgentActionGroup#api_schema}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#description BedrockagentAgentActionGroup#description}.

---

##### `function_schema`<sup>Optional</sup> <a name="function_schema" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.functionSchema"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchema">BedrockagentAgentActionGroupFunctionSchema</a>]]

function_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#function_schema BedrockagentAgentActionGroup#function_schema}

---

##### `parent_action_group_signature`<sup>Optional</sup> <a name="parent_action_group_signature" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.parentActionGroupSignature"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#parent_action_group_signature BedrockagentAgentActionGroup#parent_action_group_signature}.

---

##### `prepare_agent`<sup>Optional</sup> <a name="prepare_agent" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.prepareAgent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#prepare_agent BedrockagentAgentActionGroup#prepare_agent}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#region BedrockagentAgentActionGroup#region}

---

##### `skip_resource_in_use_check`<sup>Optional</sup> <a name="skip_resource_in_use_check" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.skipResourceInUseCheck"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#skip_resource_in_use_check BedrockagentAgentActionGroup#skip_resource_in_use_check}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts">BedrockagentAgentActionGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#timeouts BedrockagentAgentActionGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.putActionGroupExecutor">put_action_group_executor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.putApiSchema">put_api_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.putFunctionSchema">put_function_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetActionGroupExecutor">reset_action_group_executor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetActionGroupState">reset_action_group_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetApiSchema">reset_api_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetFunctionSchema">reset_function_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetParentActionGroupSignature">reset_parent_action_group_signature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetPrepareAgent">reset_prepare_agent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetSkipResourceInUseCheck">reset_skip_resource_in_use_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_action_group_executor` <a name="put_action_group_executor" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.putActionGroupExecutor"></a>

```python
def put_action_group_executor(
  value: typing.Union[IResolvable, typing.List[BedrockagentAgentActionGroupActionGroupExecutor]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.putActionGroupExecutor.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor">BedrockagentAgentActionGroupActionGroupExecutor</a>]]

---

##### `put_api_schema` <a name="put_api_schema" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.putApiSchema"></a>

```python
def put_api_schema(
  value: typing.Union[IResolvable, typing.List[BedrockagentAgentActionGroupApiSchema]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.putApiSchema.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema">BedrockagentAgentActionGroupApiSchema</a>]]

---

##### `put_function_schema` <a name="put_function_schema" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.putFunctionSchema"></a>

```python
def put_function_schema(
  value: typing.Union[IResolvable, typing.List[BedrockagentAgentActionGroupFunctionSchema]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.putFunctionSchema.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchema">BedrockagentAgentActionGroupFunctionSchema</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#create BedrockagentAgentActionGroup#create}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#update BedrockagentAgentActionGroup#update}

---

##### `reset_action_group_executor` <a name="reset_action_group_executor" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetActionGroupExecutor"></a>

```python
def reset_action_group_executor() -> None
```

##### `reset_action_group_state` <a name="reset_action_group_state" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetActionGroupState"></a>

```python
def reset_action_group_state() -> None
```

##### `reset_api_schema` <a name="reset_api_schema" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetApiSchema"></a>

```python
def reset_api_schema() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_function_schema` <a name="reset_function_schema" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetFunctionSchema"></a>

```python
def reset_function_schema() -> None
```

##### `reset_parent_action_group_signature` <a name="reset_parent_action_group_signature" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetParentActionGroupSignature"></a>

```python
def reset_parent_action_group_signature() -> None
```

##### `reset_prepare_agent` <a name="reset_prepare_agent" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetPrepareAgent"></a>

```python
def reset_prepare_agent() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_skip_resource_in_use_check` <a name="reset_skip_resource_in_use_check" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetSkipResourceInUseCheck"></a>

```python
def reset_skip_resource_in_use_check() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BedrockagentAgentActionGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_action_group

bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_action_group

bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_action_group

bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_action_group

bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BedrockagentAgentActionGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BedrockagentAgentActionGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BedrockagentAgentActionGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentAgentActionGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupExecutor">action_group_executor</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList">BedrockagentAgentActionGroupActionGroupExecutorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupId">action_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.apiSchema">api_schema</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList">BedrockagentAgentActionGroupApiSchemaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.functionSchema">function_schema</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList">BedrockagentAgentActionGroupFunctionSchemaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference">BedrockagentAgentActionGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupExecutorInput">action_group_executor_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor">BedrockagentAgentActionGroupActionGroupExecutor</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupNameInput">action_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupStateInput">action_group_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.agentIdInput">agent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.agentVersionInput">agent_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.apiSchemaInput">api_schema_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema">BedrockagentAgentActionGroupApiSchema</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.functionSchemaInput">function_schema_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchema">BedrockagentAgentActionGroupFunctionSchema</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.parentActionGroupSignatureInput">parent_action_group_signature_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.prepareAgentInput">prepare_agent_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.skipResourceInUseCheckInput">skip_resource_in_use_check_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts">BedrockagentAgentActionGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupName">action_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupState">action_group_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.agentId">agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.agentVersion">agent_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.parentActionGroupSignature">parent_action_group_signature</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.prepareAgent">prepare_agent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.skipResourceInUseCheck">skip_resource_in_use_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action_group_executor`<sup>Required</sup> <a name="action_group_executor" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupExecutor"></a>

```python
action_group_executor: BedrockagentAgentActionGroupActionGroupExecutorList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList">BedrockagentAgentActionGroupActionGroupExecutorList</a>

---

##### `action_group_id`<sup>Required</sup> <a name="action_group_id" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupId"></a>

```python
action_group_id: str
```

- *Type:* str

---

##### `api_schema`<sup>Required</sup> <a name="api_schema" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.apiSchema"></a>

```python
api_schema: BedrockagentAgentActionGroupApiSchemaList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList">BedrockagentAgentActionGroupApiSchemaList</a>

---

##### `function_schema`<sup>Required</sup> <a name="function_schema" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.functionSchema"></a>

```python
function_schema: BedrockagentAgentActionGroupFunctionSchemaList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList">BedrockagentAgentActionGroupFunctionSchemaList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.timeouts"></a>

```python
timeouts: BedrockagentAgentActionGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference">BedrockagentAgentActionGroupTimeoutsOutputReference</a>

---

##### `action_group_executor_input`<sup>Optional</sup> <a name="action_group_executor_input" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupExecutorInput"></a>

```python
action_group_executor_input: typing.Union[IResolvable, typing.List[BedrockagentAgentActionGroupActionGroupExecutor]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor">BedrockagentAgentActionGroupActionGroupExecutor</a>]]

---

##### `action_group_name_input`<sup>Optional</sup> <a name="action_group_name_input" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupNameInput"></a>

```python
action_group_name_input: str
```

- *Type:* str

---

##### `action_group_state_input`<sup>Optional</sup> <a name="action_group_state_input" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupStateInput"></a>

```python
action_group_state_input: str
```

- *Type:* str

---

##### `agent_id_input`<sup>Optional</sup> <a name="agent_id_input" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.agentIdInput"></a>

```python
agent_id_input: str
```

- *Type:* str

---

##### `agent_version_input`<sup>Optional</sup> <a name="agent_version_input" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.agentVersionInput"></a>

```python
agent_version_input: str
```

- *Type:* str

---

##### `api_schema_input`<sup>Optional</sup> <a name="api_schema_input" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.apiSchemaInput"></a>

```python
api_schema_input: typing.Union[IResolvable, typing.List[BedrockagentAgentActionGroupApiSchema]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema">BedrockagentAgentActionGroupApiSchema</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `function_schema_input`<sup>Optional</sup> <a name="function_schema_input" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.functionSchemaInput"></a>

```python
function_schema_input: typing.Union[IResolvable, typing.List[BedrockagentAgentActionGroupFunctionSchema]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchema">BedrockagentAgentActionGroupFunctionSchema</a>]]

---

##### `parent_action_group_signature_input`<sup>Optional</sup> <a name="parent_action_group_signature_input" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.parentActionGroupSignatureInput"></a>

```python
parent_action_group_signature_input: str
```

- *Type:* str

---

##### `prepare_agent_input`<sup>Optional</sup> <a name="prepare_agent_input" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.prepareAgentInput"></a>

```python
prepare_agent_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `skip_resource_in_use_check_input`<sup>Optional</sup> <a name="skip_resource_in_use_check_input" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.skipResourceInUseCheckInput"></a>

```python
skip_resource_in_use_check_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BedrockagentAgentActionGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts">BedrockagentAgentActionGroupTimeouts</a>]

---

##### `action_group_name`<sup>Required</sup> <a name="action_group_name" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupName"></a>

```python
action_group_name: str
```

- *Type:* str

---

##### `action_group_state`<sup>Required</sup> <a name="action_group_state" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupState"></a>

```python
action_group_state: str
```

- *Type:* str

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

---

##### `agent_version`<sup>Required</sup> <a name="agent_version" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.agentVersion"></a>

```python
agent_version: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `parent_action_group_signature`<sup>Required</sup> <a name="parent_action_group_signature" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.parentActionGroupSignature"></a>

```python
parent_action_group_signature: str
```

- *Type:* str

---

##### `prepare_agent`<sup>Required</sup> <a name="prepare_agent" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.prepareAgent"></a>

```python
prepare_agent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `skip_resource_in_use_check`<sup>Required</sup> <a name="skip_resource_in_use_check" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.skipResourceInUseCheck"></a>

```python
skip_resource_in_use_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentAgentActionGroupActionGroupExecutor <a name="BedrockagentAgentActionGroupActionGroupExecutor" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_action_group

bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor(
  custom_control: str = None,
  lambda: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor.property.customControl">custom_control</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#custom_control BedrockagentAgentActionGroup#custom_control}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor.property.lambda">lambda</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#lambda BedrockagentAgentActionGroup#lambda}. |

---

##### `custom_control`<sup>Optional</sup> <a name="custom_control" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor.property.customControl"></a>

```python
custom_control: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#custom_control BedrockagentAgentActionGroup#custom_control}.

---

##### `lambda`<sup>Optional</sup> <a name="lambda" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor.property.lambda"></a>

```python
lambda: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#lambda BedrockagentAgentActionGroup#lambda}.

---

### BedrockagentAgentActionGroupApiSchema <a name="BedrockagentAgentActionGroupApiSchema" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_action_group

bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema(
  payload: str = None,
  s3: typing.Union[IResolvable, typing.List[BedrockagentAgentActionGroupApiSchemaS3]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema.property.payload">payload</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#payload BedrockagentAgentActionGroup#payload}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema.property.s3">s3</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3">BedrockagentAgentActionGroupApiSchemaS3</a>]]</code> | s3 block. |

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema.property.payload"></a>

```python
payload: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#payload BedrockagentAgentActionGroup#payload}.

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema.property.s3"></a>

```python
s3: typing.Union[IResolvable, typing.List[BedrockagentAgentActionGroupApiSchemaS3]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3">BedrockagentAgentActionGroupApiSchemaS3</a>]]

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#s3 BedrockagentAgentActionGroup#s3}

---

### BedrockagentAgentActionGroupApiSchemaS3 <a name="BedrockagentAgentActionGroupApiSchemaS3" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_action_group

bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3(
  s3_bucket_name: str = None,
  s3_object_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#s3_bucket_name BedrockagentAgentActionGroup#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3.property.s3ObjectKey">s3_object_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#s3_object_key BedrockagentAgentActionGroup#s3_object_key}. |

---

##### `s3_bucket_name`<sup>Optional</sup> <a name="s3_bucket_name" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#s3_bucket_name BedrockagentAgentActionGroup#s3_bucket_name}.

---

##### `s3_object_key`<sup>Optional</sup> <a name="s3_object_key" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3.property.s3ObjectKey"></a>

```python
s3_object_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#s3_object_key BedrockagentAgentActionGroup#s3_object_key}.

---

### BedrockagentAgentActionGroupConfig <a name="BedrockagentAgentActionGroupConfig" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_action_group

bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action_group_name: str,
  agent_id: str,
  agent_version: str,
  action_group_executor: typing.Union[IResolvable, typing.List[BedrockagentAgentActionGroupActionGroupExecutor]] = None,
  action_group_state: str = None,
  api_schema: typing.Union[IResolvable, typing.List[BedrockagentAgentActionGroupApiSchema]] = None,
  description: str = None,
  function_schema: typing.Union[IResolvable, typing.List[BedrockagentAgentActionGroupFunctionSchema]] = None,
  parent_action_group_signature: str = None,
  prepare_agent: typing.Union[bool, IResolvable] = None,
  region: str = None,
  skip_resource_in_use_check: typing.Union[bool, IResolvable] = None,
  timeouts: BedrockagentAgentActionGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.actionGroupName">action_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#action_group_name BedrockagentAgentActionGroup#action_group_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.agentId">agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#agent_id BedrockagentAgentActionGroup#agent_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.agentVersion">agent_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#agent_version BedrockagentAgentActionGroup#agent_version}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.actionGroupExecutor">action_group_executor</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor">BedrockagentAgentActionGroupActionGroupExecutor</a>]]</code> | action_group_executor block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.actionGroupState">action_group_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#action_group_state BedrockagentAgentActionGroup#action_group_state}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.apiSchema">api_schema</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema">BedrockagentAgentActionGroupApiSchema</a>]]</code> | api_schema block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#description BedrockagentAgentActionGroup#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.functionSchema">function_schema</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchema">BedrockagentAgentActionGroupFunctionSchema</a>]]</code> | function_schema block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.parentActionGroupSignature">parent_action_group_signature</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#parent_action_group_signature BedrockagentAgentActionGroup#parent_action_group_signature}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.prepareAgent">prepare_agent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#prepare_agent BedrockagentAgentActionGroup#prepare_agent}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.skipResourceInUseCheck">skip_resource_in_use_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#skip_resource_in_use_check BedrockagentAgentActionGroup#skip_resource_in_use_check}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts">BedrockagentAgentActionGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action_group_name`<sup>Required</sup> <a name="action_group_name" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.actionGroupName"></a>

```python
action_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#action_group_name BedrockagentAgentActionGroup#action_group_name}.

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#agent_id BedrockagentAgentActionGroup#agent_id}.

---

##### `agent_version`<sup>Required</sup> <a name="agent_version" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.agentVersion"></a>

```python
agent_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#agent_version BedrockagentAgentActionGroup#agent_version}.

---

##### `action_group_executor`<sup>Optional</sup> <a name="action_group_executor" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.actionGroupExecutor"></a>

```python
action_group_executor: typing.Union[IResolvable, typing.List[BedrockagentAgentActionGroupActionGroupExecutor]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor">BedrockagentAgentActionGroupActionGroupExecutor</a>]]

action_group_executor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#action_group_executor BedrockagentAgentActionGroup#action_group_executor}

---

##### `action_group_state`<sup>Optional</sup> <a name="action_group_state" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.actionGroupState"></a>

```python
action_group_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#action_group_state BedrockagentAgentActionGroup#action_group_state}.

---

##### `api_schema`<sup>Optional</sup> <a name="api_schema" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.apiSchema"></a>

```python
api_schema: typing.Union[IResolvable, typing.List[BedrockagentAgentActionGroupApiSchema]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema">BedrockagentAgentActionGroupApiSchema</a>]]

api_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#api_schema BedrockagentAgentActionGroup#api_schema}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#description BedrockagentAgentActionGroup#description}.

---

##### `function_schema`<sup>Optional</sup> <a name="function_schema" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.functionSchema"></a>

```python
function_schema: typing.Union[IResolvable, typing.List[BedrockagentAgentActionGroupFunctionSchema]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchema">BedrockagentAgentActionGroupFunctionSchema</a>]]

function_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#function_schema BedrockagentAgentActionGroup#function_schema}

---

##### `parent_action_group_signature`<sup>Optional</sup> <a name="parent_action_group_signature" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.parentActionGroupSignature"></a>

```python
parent_action_group_signature: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#parent_action_group_signature BedrockagentAgentActionGroup#parent_action_group_signature}.

---

##### `prepare_agent`<sup>Optional</sup> <a name="prepare_agent" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.prepareAgent"></a>

```python
prepare_agent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#prepare_agent BedrockagentAgentActionGroup#prepare_agent}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#region BedrockagentAgentActionGroup#region}

---

##### `skip_resource_in_use_check`<sup>Optional</sup> <a name="skip_resource_in_use_check" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.skipResourceInUseCheck"></a>

```python
skip_resource_in_use_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#skip_resource_in_use_check BedrockagentAgentActionGroup#skip_resource_in_use_check}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.timeouts"></a>

```python
timeouts: BedrockagentAgentActionGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts">BedrockagentAgentActionGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#timeouts BedrockagentAgentActionGroup#timeouts}

---

### BedrockagentAgentActionGroupFunctionSchema <a name="BedrockagentAgentActionGroupFunctionSchema" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchema.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_action_group

bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchema(
  member_functions: typing.Union[IResolvable, typing.List[BedrockagentAgentActionGroupFunctionSchemaMemberFunctions]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchema.property.memberFunctions">member_functions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctions">BedrockagentAgentActionGroupFunctionSchemaMemberFunctions</a>]]</code> | member_functions block. |

---

##### `member_functions`<sup>Optional</sup> <a name="member_functions" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchema.property.memberFunctions"></a>

```python
member_functions: typing.Union[IResolvable, typing.List[BedrockagentAgentActionGroupFunctionSchemaMemberFunctions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctions">BedrockagentAgentActionGroupFunctionSchemaMemberFunctions</a>]]

member_functions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#member_functions BedrockagentAgentActionGroup#member_functions}

---

### BedrockagentAgentActionGroupFunctionSchemaMemberFunctions <a name="BedrockagentAgentActionGroupFunctionSchemaMemberFunctions" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_action_group

bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctions(
  functions: typing.Union[IResolvable, typing.List[BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctions.property.functions">functions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions</a>]]</code> | functions block. |

---

##### `functions`<sup>Optional</sup> <a name="functions" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctions.property.functions"></a>

```python
functions: typing.Union[IResolvable, typing.List[BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions</a>]]

functions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#functions BedrockagentAgentActionGroup#functions}

---

### BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions <a name="BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_action_group

bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions(
  name: str,
  description: str = None,
  parameters: typing.Union[IResolvable, typing.List[BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#name BedrockagentAgentActionGroup#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#description BedrockagentAgentActionGroup#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions.property.parameters">parameters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters</a>]]</code> | parameters block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#name BedrockagentAgentActionGroup#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#description BedrockagentAgentActionGroup#description}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions.property.parameters"></a>

```python
parameters: typing.Union[IResolvable, typing.List[BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters</a>]]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#parameters BedrockagentAgentActionGroup#parameters}

---

### BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters <a name="BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_action_group

bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters(
  map_block_key: str,
  type: str,
  description: str = None,
  required: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters.property.mapBlockKey">map_block_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#map_block_key BedrockagentAgentActionGroup#map_block_key}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#type BedrockagentAgentActionGroup#type}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#description BedrockagentAgentActionGroup#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#required BedrockagentAgentActionGroup#required}. |

---

##### `map_block_key`<sup>Required</sup> <a name="map_block_key" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters.property.mapBlockKey"></a>

```python
map_block_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#map_block_key BedrockagentAgentActionGroup#map_block_key}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#type BedrockagentAgentActionGroup#type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#description BedrockagentAgentActionGroup#description}.

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#required BedrockagentAgentActionGroup#required}.

---

### BedrockagentAgentActionGroupTimeouts <a name="BedrockagentAgentActionGroupTimeouts" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_action_group

bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts(
  create: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#create BedrockagentAgentActionGroup#create}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent_action_group#update BedrockagentAgentActionGroup#update}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentAgentActionGroupActionGroupExecutorList <a name="BedrockagentAgentActionGroupActionGroupExecutorList" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_action_group

bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentAgentActionGroupActionGroupExecutorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor">BedrockagentAgentActionGroupActionGroupExecutor</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BedrockagentAgentActionGroupActionGroupExecutor]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor">BedrockagentAgentActionGroupActionGroupExecutor</a>]]

---


### BedrockagentAgentActionGroupActionGroupExecutorOutputReference <a name="BedrockagentAgentActionGroupActionGroupExecutorOutputReference" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_action_group

bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.resetCustomControl">reset_custom_control</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.resetLambda">reset_lambda</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_control` <a name="reset_custom_control" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.resetCustomControl"></a>

```python
def reset_custom_control() -> None
```

##### `reset_lambda` <a name="reset_lambda" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.resetLambda"></a>

```python
def reset_lambda() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.customControlInput">custom_control_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.lambdaInput">lambda_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.customControl">custom_control</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.lambda">lambda</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor">BedrockagentAgentActionGroupActionGroupExecutor</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_control_input`<sup>Optional</sup> <a name="custom_control_input" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.customControlInput"></a>

```python
custom_control_input: str
```

- *Type:* str

---

##### `lambda_input`<sup>Optional</sup> <a name="lambda_input" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.lambdaInput"></a>

```python
lambda_input: str
```

- *Type:* str

---

##### `custom_control`<sup>Required</sup> <a name="custom_control" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.customControl"></a>

```python
custom_control: str
```

- *Type:* str

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.lambda"></a>

```python
lambda: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BedrockagentAgentActionGroupActionGroupExecutor]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor">BedrockagentAgentActionGroupActionGroupExecutor</a>]

---


### BedrockagentAgentActionGroupApiSchemaList <a name="BedrockagentAgentActionGroupApiSchemaList" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_action_group

bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentAgentActionGroupApiSchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema">BedrockagentAgentActionGroupApiSchema</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BedrockagentAgentActionGroupApiSchema]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema">BedrockagentAgentActionGroupApiSchema</a>]]

---


### BedrockagentAgentActionGroupApiSchemaOutputReference <a name="BedrockagentAgentActionGroupApiSchemaOutputReference" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_action_group

bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.putS3">put_s3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.resetPayload">reset_payload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.resetS3">reset_s3</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3` <a name="put_s3" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.putS3"></a>

```python
def put_s3(
  value: typing.Union[IResolvable, typing.List[BedrockagentAgentActionGroupApiSchemaS3]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.putS3.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3">BedrockagentAgentActionGroupApiSchemaS3</a>]]

---

##### `reset_payload` <a name="reset_payload" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.resetPayload"></a>

```python
def reset_payload() -> None
```

##### `reset_s3` <a name="reset_s3" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.resetS3"></a>

```python
def reset_s3() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List">BedrockagentAgentActionGroupApiSchemaS3List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.payloadInput">payload_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.s3Input">s3_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3">BedrockagentAgentActionGroupApiSchemaS3</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.payload">payload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema">BedrockagentAgentActionGroupApiSchema</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.s3"></a>

```python
s3: BedrockagentAgentActionGroupApiSchemaS3List
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List">BedrockagentAgentActionGroupApiSchemaS3List</a>

---

##### `payload_input`<sup>Optional</sup> <a name="payload_input" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.payloadInput"></a>

```python
payload_input: str
```

- *Type:* str

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.s3Input"></a>

```python
s3_input: typing.Union[IResolvable, typing.List[BedrockagentAgentActionGroupApiSchemaS3]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3">BedrockagentAgentActionGroupApiSchemaS3</a>]]

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.payload"></a>

```python
payload: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BedrockagentAgentActionGroupApiSchema]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema">BedrockagentAgentActionGroupApiSchema</a>]

---


### BedrockagentAgentActionGroupApiSchemaS3List <a name="BedrockagentAgentActionGroupApiSchemaS3List" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_action_group

bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentAgentActionGroupApiSchemaS3OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3">BedrockagentAgentActionGroupApiSchemaS3</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BedrockagentAgentActionGroupApiSchemaS3]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3">BedrockagentAgentActionGroupApiSchemaS3</a>]]

---


### BedrockagentAgentActionGroupApiSchemaS3OutputReference <a name="BedrockagentAgentActionGroupApiSchemaS3OutputReference" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_action_group

bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.resetS3BucketName">reset_s3_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.resetS3ObjectKey">reset_s3_object_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_s3_bucket_name` <a name="reset_s3_bucket_name" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.resetS3BucketName"></a>

```python
def reset_s3_bucket_name() -> None
```

##### `reset_s3_object_key` <a name="reset_s3_object_key" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.resetS3ObjectKey"></a>

```python
def reset_s3_object_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.s3BucketNameInput">s3_bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.s3ObjectKeyInput">s3_object_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.s3ObjectKey">s3_object_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3">BedrockagentAgentActionGroupApiSchemaS3</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_bucket_name_input`<sup>Optional</sup> <a name="s3_bucket_name_input" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.s3BucketNameInput"></a>

```python
s3_bucket_name_input: str
```

- *Type:* str

---

##### `s3_object_key_input`<sup>Optional</sup> <a name="s3_object_key_input" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.s3ObjectKeyInput"></a>

```python
s3_object_key_input: str
```

- *Type:* str

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

---

##### `s3_object_key`<sup>Required</sup> <a name="s3_object_key" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.s3ObjectKey"></a>

```python
s3_object_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BedrockagentAgentActionGroupApiSchemaS3]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3">BedrockagentAgentActionGroupApiSchemaS3</a>]

---


### BedrockagentAgentActionGroupFunctionSchemaList <a name="BedrockagentAgentActionGroupFunctionSchemaList" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_action_group

bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentAgentActionGroupFunctionSchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchema">BedrockagentAgentActionGroupFunctionSchema</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BedrockagentAgentActionGroupFunctionSchema]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchema">BedrockagentAgentActionGroupFunctionSchema</a>]]

---


### BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList <a name="BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_action_group

bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions</a>]]

---


### BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference <a name="BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_action_group

bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameters` <a name="put_parameters" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.putParameters"></a>

```python
def put_parameters(
  value: typing.Union[IResolvable, typing.List[BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.putParameters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters</a>]]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.parameters"></a>

```python
parameters: BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Union[IResolvable, typing.List[BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters</a>]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions</a>]

---


### BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList <a name="BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_action_group

bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters</a>]]

---


### BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference <a name="BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_action_group

bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.resetRequired">reset_required</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.resetRequired"></a>

```python
def reset_required() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.mapBlockKeyInput">map_block_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.requiredInput">required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.mapBlockKey">map_block_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `map_block_key_input`<sup>Optional</sup> <a name="map_block_key_input" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.mapBlockKeyInput"></a>

```python
map_block_key_input: str
```

- *Type:* str

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.requiredInput"></a>

```python
required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `map_block_key`<sup>Required</sup> <a name="map_block_key" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.mapBlockKey"></a>

```python
map_block_key: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters</a>]

---


### BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList <a name="BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_action_group

bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctions">BedrockagentAgentActionGroupFunctionSchemaMemberFunctions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BedrockagentAgentActionGroupFunctionSchemaMemberFunctions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctions">BedrockagentAgentActionGroupFunctionSchemaMemberFunctions</a>]]

---


### BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference <a name="BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_action_group

bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.putFunctions">put_functions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.resetFunctions">reset_functions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_functions` <a name="put_functions" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.putFunctions"></a>

```python
def put_functions(
  value: typing.Union[IResolvable, typing.List[BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.putFunctions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions</a>]]

---

##### `reset_functions` <a name="reset_functions" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.resetFunctions"></a>

```python
def reset_functions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.property.functions">functions</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.property.functionsInput">functions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctions">BedrockagentAgentActionGroupFunctionSchemaMemberFunctions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `functions`<sup>Required</sup> <a name="functions" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.property.functions"></a>

```python
functions: BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList</a>

---

##### `functions_input`<sup>Optional</sup> <a name="functions_input" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.property.functionsInput"></a>

```python
functions_input: typing.Union[IResolvable, typing.List[BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BedrockagentAgentActionGroupFunctionSchemaMemberFunctions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctions">BedrockagentAgentActionGroupFunctionSchemaMemberFunctions</a>]

---


### BedrockagentAgentActionGroupFunctionSchemaOutputReference <a name="BedrockagentAgentActionGroupFunctionSchemaOutputReference" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_action_group

bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.putMemberFunctions">put_member_functions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.resetMemberFunctions">reset_member_functions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_member_functions` <a name="put_member_functions" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.putMemberFunctions"></a>

```python
def put_member_functions(
  value: typing.Union[IResolvable, typing.List[BedrockagentAgentActionGroupFunctionSchemaMemberFunctions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.putMemberFunctions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctions">BedrockagentAgentActionGroupFunctionSchemaMemberFunctions</a>]]

---

##### `reset_member_functions` <a name="reset_member_functions" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.resetMemberFunctions"></a>

```python
def reset_member_functions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.property.memberFunctions">member_functions</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.property.memberFunctionsInput">member_functions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctions">BedrockagentAgentActionGroupFunctionSchemaMemberFunctions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchema">BedrockagentAgentActionGroupFunctionSchema</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `member_functions`<sup>Required</sup> <a name="member_functions" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.property.memberFunctions"></a>

```python
member_functions: BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList</a>

---

##### `member_functions_input`<sup>Optional</sup> <a name="member_functions_input" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.property.memberFunctionsInput"></a>

```python
member_functions_input: typing.Union[IResolvable, typing.List[BedrockagentAgentActionGroupFunctionSchemaMemberFunctions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctions">BedrockagentAgentActionGroupFunctionSchemaMemberFunctions</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BedrockagentAgentActionGroupFunctionSchema]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchema">BedrockagentAgentActionGroupFunctionSchema</a>]

---


### BedrockagentAgentActionGroupTimeoutsOutputReference <a name="BedrockagentAgentActionGroupTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_action_group

bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts">BedrockagentAgentActionGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BedrockagentAgentActionGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts">BedrockagentAgentActionGroupTimeouts</a>]

---



