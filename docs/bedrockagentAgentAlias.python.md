# `bedrockagentAgentAlias` Submodule <a name="`bedrockagentAgentAlias` Submodule" id="@cdktf/provider-aws.bedrockagentAgentAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentAgentAlias <a name="BedrockagentAgentAlias" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_alias aws_bedrockagent_agent_alias}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_alias

bedrockagentAgentAlias.BedrockagentAgentAlias(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  agent_alias_name: str,
  agent_id: str,
  description: str = None,
  region: str = None,
  routing_configuration: typing.Union[IResolvable, typing.List[BedrockagentAgentAliasRoutingConfiguration]] = None,
  tags: typing.Mapping[str] = None,
  timeouts: BedrockagentAgentAliasTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.Initializer.parameter.agentAliasName">agent_alias_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_alias#agent_alias_name BedrockagentAgentAlias#agent_alias_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.Initializer.parameter.agentId">agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_alias#agent_id BedrockagentAgentAlias#agent_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_alias#description BedrockagentAgentAlias#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.Initializer.parameter.routingConfiguration">routing_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfiguration">BedrockagentAgentAliasRoutingConfiguration</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_alias#routing_configuration BedrockagentAgentAlias#routing_configuration}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_alias#tags BedrockagentAgentAlias#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeouts">BedrockagentAgentAliasTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agent_alias_name`<sup>Required</sup> <a name="agent_alias_name" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.Initializer.parameter.agentAliasName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_alias#agent_alias_name BedrockagentAgentAlias#agent_alias_name}.

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.Initializer.parameter.agentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_alias#agent_id BedrockagentAgentAlias#agent_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_alias#description BedrockagentAgentAlias#description}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_alias#region BedrockagentAgentAlias#region}

---

##### `routing_configuration`<sup>Optional</sup> <a name="routing_configuration" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.Initializer.parameter.routingConfiguration"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfiguration">BedrockagentAgentAliasRoutingConfiguration</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_alias#routing_configuration BedrockagentAgentAlias#routing_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_alias#tags BedrockagentAgentAlias#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeouts">BedrockagentAgentAliasTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_alias#timeouts BedrockagentAgentAlias#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.putRoutingConfiguration">put_routing_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.resetRoutingConfiguration">reset_routing_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_routing_configuration` <a name="put_routing_configuration" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.putRoutingConfiguration"></a>

```python
def put_routing_configuration(
  value: typing.Union[IResolvable, typing.List[BedrockagentAgentAliasRoutingConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.putRoutingConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfiguration">BedrockagentAgentAliasRoutingConfiguration</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_alias#create BedrockagentAgentAlias#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_alias#delete BedrockagentAgentAlias#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_alias#update BedrockagentAgentAlias#update}

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_routing_configuration` <a name="reset_routing_configuration" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.resetRoutingConfiguration"></a>

```python
def reset_routing_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BedrockagentAgentAlias resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_alias

bedrockagentAgentAlias.BedrockagentAgentAlias.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_alias

bedrockagentAgentAlias.BedrockagentAgentAlias.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_alias

bedrockagentAgentAlias.BedrockagentAgentAlias.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_alias

bedrockagentAgentAlias.BedrockagentAgentAlias.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BedrockagentAgentAlias resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BedrockagentAgentAlias to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BedrockagentAgentAlias that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_alias#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentAgentAlias to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.agentAliasArn">agent_alias_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.agentAliasId">agent_alias_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.routingConfiguration">routing_configuration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationList">BedrockagentAgentAliasRoutingConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference">BedrockagentAgentAliasTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.agentAliasNameInput">agent_alias_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.agentIdInput">agent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.routingConfigurationInput">routing_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfiguration">BedrockagentAgentAliasRoutingConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeouts">BedrockagentAgentAliasTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.agentAliasName">agent_alias_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.agentId">agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agent_alias_arn`<sup>Required</sup> <a name="agent_alias_arn" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.agentAliasArn"></a>

```python
agent_alias_arn: str
```

- *Type:* str

---

##### `agent_alias_id`<sup>Required</sup> <a name="agent_alias_id" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.agentAliasId"></a>

```python
agent_alias_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `routing_configuration`<sup>Required</sup> <a name="routing_configuration" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.routingConfiguration"></a>

```python
routing_configuration: BedrockagentAgentAliasRoutingConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationList">BedrockagentAgentAliasRoutingConfigurationList</a>

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.timeouts"></a>

```python
timeouts: BedrockagentAgentAliasTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference">BedrockagentAgentAliasTimeoutsOutputReference</a>

---

##### `agent_alias_name_input`<sup>Optional</sup> <a name="agent_alias_name_input" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.agentAliasNameInput"></a>

```python
agent_alias_name_input: str
```

- *Type:* str

---

##### `agent_id_input`<sup>Optional</sup> <a name="agent_id_input" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.agentIdInput"></a>

```python
agent_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `routing_configuration_input`<sup>Optional</sup> <a name="routing_configuration_input" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.routingConfigurationInput"></a>

```python
routing_configuration_input: typing.Union[IResolvable, typing.List[BedrockagentAgentAliasRoutingConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfiguration">BedrockagentAgentAliasRoutingConfiguration</a>]]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BedrockagentAgentAliasTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeouts">BedrockagentAgentAliasTimeouts</a>]

---

##### `agent_alias_name`<sup>Required</sup> <a name="agent_alias_name" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.agentAliasName"></a>

```python
agent_alias_name: str
```

- *Type:* str

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAlias.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentAgentAliasConfig <a name="BedrockagentAgentAliasConfig" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_alias

bedrockagentAgentAlias.BedrockagentAgentAliasConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  agent_alias_name: str,
  agent_id: str,
  description: str = None,
  region: str = None,
  routing_configuration: typing.Union[IResolvable, typing.List[BedrockagentAgentAliasRoutingConfiguration]] = None,
  tags: typing.Mapping[str] = None,
  timeouts: BedrockagentAgentAliasTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasConfig.property.agentAliasName">agent_alias_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_alias#agent_alias_name BedrockagentAgentAlias#agent_alias_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasConfig.property.agentId">agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_alias#agent_id BedrockagentAgentAlias#agent_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_alias#description BedrockagentAgentAlias#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasConfig.property.routingConfiguration">routing_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfiguration">BedrockagentAgentAliasRoutingConfiguration</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_alias#routing_configuration BedrockagentAgentAlias#routing_configuration}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_alias#tags BedrockagentAgentAlias#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeouts">BedrockagentAgentAliasTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agent_alias_name`<sup>Required</sup> <a name="agent_alias_name" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasConfig.property.agentAliasName"></a>

```python
agent_alias_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_alias#agent_alias_name BedrockagentAgentAlias#agent_alias_name}.

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasConfig.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_alias#agent_id BedrockagentAgentAlias#agent_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_alias#description BedrockagentAgentAlias#description}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_alias#region BedrockagentAgentAlias#region}

---

##### `routing_configuration`<sup>Optional</sup> <a name="routing_configuration" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasConfig.property.routingConfiguration"></a>

```python
routing_configuration: typing.Union[IResolvable, typing.List[BedrockagentAgentAliasRoutingConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfiguration">BedrockagentAgentAliasRoutingConfiguration</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_alias#routing_configuration BedrockagentAgentAlias#routing_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_alias#tags BedrockagentAgentAlias#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasConfig.property.timeouts"></a>

```python
timeouts: BedrockagentAgentAliasTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeouts">BedrockagentAgentAliasTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_alias#timeouts BedrockagentAgentAlias#timeouts}

---

### BedrockagentAgentAliasRoutingConfiguration <a name="BedrockagentAgentAliasRoutingConfiguration" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_alias

bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfiguration(
  agent_version: str = None,
  provisioned_throughput: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfiguration.property.agentVersion">agent_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_alias#agent_version BedrockagentAgentAlias#agent_version}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfiguration.property.provisionedThroughput">provisioned_throughput</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_alias#provisioned_throughput BedrockagentAgentAlias#provisioned_throughput}. |

---

##### `agent_version`<sup>Optional</sup> <a name="agent_version" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfiguration.property.agentVersion"></a>

```python
agent_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_alias#agent_version BedrockagentAgentAlias#agent_version}.

---

##### `provisioned_throughput`<sup>Optional</sup> <a name="provisioned_throughput" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfiguration.property.provisionedThroughput"></a>

```python
provisioned_throughput: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_alias#provisioned_throughput BedrockagentAgentAlias#provisioned_throughput}.

---

### BedrockagentAgentAliasTimeouts <a name="BedrockagentAgentAliasTimeouts" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_alias

bedrockagentAgentAlias.BedrockagentAgentAliasTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_alias#create BedrockagentAgentAlias#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_alias#delete BedrockagentAgentAlias#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_alias#update BedrockagentAgentAlias#update}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentAgentAliasRoutingConfigurationList <a name="BedrockagentAgentAliasRoutingConfigurationList" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_alias

bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentAgentAliasRoutingConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfiguration">BedrockagentAgentAliasRoutingConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BedrockagentAgentAliasRoutingConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfiguration">BedrockagentAgentAliasRoutingConfiguration</a>]]

---


### BedrockagentAgentAliasRoutingConfigurationOutputReference <a name="BedrockagentAgentAliasRoutingConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_alias

bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.resetAgentVersion">reset_agent_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.resetProvisionedThroughput">reset_provisioned_throughput</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_agent_version` <a name="reset_agent_version" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.resetAgentVersion"></a>

```python
def reset_agent_version() -> None
```

##### `reset_provisioned_throughput` <a name="reset_provisioned_throughput" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.resetProvisionedThroughput"></a>

```python
def reset_provisioned_throughput() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.property.agentVersionInput">agent_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.property.provisionedThroughputInput">provisioned_throughput_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.property.agentVersion">agent_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.property.provisionedThroughput">provisioned_throughput</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfiguration">BedrockagentAgentAliasRoutingConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_version_input`<sup>Optional</sup> <a name="agent_version_input" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.property.agentVersionInput"></a>

```python
agent_version_input: str
```

- *Type:* str

---

##### `provisioned_throughput_input`<sup>Optional</sup> <a name="provisioned_throughput_input" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.property.provisionedThroughputInput"></a>

```python
provisioned_throughput_input: str
```

- *Type:* str

---

##### `agent_version`<sup>Required</sup> <a name="agent_version" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.property.agentVersion"></a>

```python
agent_version: str
```

- *Type:* str

---

##### `provisioned_throughput`<sup>Required</sup> <a name="provisioned_throughput" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.property.provisionedThroughput"></a>

```python
provisioned_throughput: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BedrockagentAgentAliasRoutingConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasRoutingConfiguration">BedrockagentAgentAliasRoutingConfiguration</a>]

---


### BedrockagentAgentAliasTimeoutsOutputReference <a name="BedrockagentAgentAliasTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagent_agent_alias

bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeouts">BedrockagentAgentAliasTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BedrockagentAgentAliasTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.bedrockagentAgentAlias.BedrockagentAgentAliasTimeouts">BedrockagentAgentAliasTimeouts</a>]

---



