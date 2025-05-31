# `ssmquicksetupConfigurationManager` Submodule <a name="`ssmquicksetupConfigurationManager` Submodule" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmquicksetupConfigurationManager <a name="SsmquicksetupConfigurationManager" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/ssmquicksetup_configuration_manager aws_ssmquicksetup_configuration_manager}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmquicksetup_configuration_manager

ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  configuration_definition: typing.Union[IResolvable, typing.List[SsmquicksetupConfigurationManagerConfigurationDefinition]] = None,
  description: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: SsmquicksetupConfigurationManagerTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/ssmquicksetup_configuration_manager#name SsmquicksetupConfigurationManager#name}. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.configurationDefinition">configuration_definition</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition">SsmquicksetupConfigurationManagerConfigurationDefinition</a>]]</code> | configuration_definition block. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/ssmquicksetup_configuration_manager#description SsmquicksetupConfigurationManager#description}. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/ssmquicksetup_configuration_manager#tags SsmquicksetupConfigurationManager#tags}. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeouts">SsmquicksetupConfigurationManagerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/ssmquicksetup_configuration_manager#name SsmquicksetupConfigurationManager#name}.

---

##### `configuration_definition`<sup>Optional</sup> <a name="configuration_definition" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.configurationDefinition"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition">SsmquicksetupConfigurationManagerConfigurationDefinition</a>]]

configuration_definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/ssmquicksetup_configuration_manager#configuration_definition SsmquicksetupConfigurationManager#configuration_definition}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/ssmquicksetup_configuration_manager#description SsmquicksetupConfigurationManager#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/ssmquicksetup_configuration_manager#tags SsmquicksetupConfigurationManager#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeouts">SsmquicksetupConfigurationManagerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/ssmquicksetup_configuration_manager#timeouts SsmquicksetupConfigurationManager#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.putConfigurationDefinition">put_configuration_definition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.resetConfigurationDefinition">reset_configuration_definition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_configuration_definition` <a name="put_configuration_definition" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.putConfigurationDefinition"></a>

```python
def put_configuration_definition(
  value: typing.Union[IResolvable, typing.List[SsmquicksetupConfigurationManagerConfigurationDefinition]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.putConfigurationDefinition.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition">SsmquicksetupConfigurationManagerConfigurationDefinition</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/ssmquicksetup_configuration_manager#create SsmquicksetupConfigurationManager#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/ssmquicksetup_configuration_manager#delete SsmquicksetupConfigurationManager#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/ssmquicksetup_configuration_manager#update SsmquicksetupConfigurationManager#update}

---

##### `reset_configuration_definition` <a name="reset_configuration_definition" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.resetConfigurationDefinition"></a>

```python
def reset_configuration_definition() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SsmquicksetupConfigurationManager resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ssmquicksetup_configuration_manager

ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ssmquicksetup_configuration_manager

ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ssmquicksetup_configuration_manager

ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import ssmquicksetup_configuration_manager

ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SsmquicksetupConfigurationManager resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SsmquicksetupConfigurationManager to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SsmquicksetupConfigurationManager that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/ssmquicksetup_configuration_manager#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SsmquicksetupConfigurationManager to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.configurationDefinition">configuration_definition</a></code> | <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList">SsmquicksetupConfigurationManagerConfigurationDefinitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.managerArn">manager_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.statusSummaries">status_summaries</a></code> | <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList">SsmquicksetupConfigurationManagerStatusSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference">SsmquicksetupConfigurationManagerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.configurationDefinitionInput">configuration_definition_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition">SsmquicksetupConfigurationManagerConfigurationDefinition</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeouts">SsmquicksetupConfigurationManagerTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `configuration_definition`<sup>Required</sup> <a name="configuration_definition" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.configurationDefinition"></a>

```python
configuration_definition: SsmquicksetupConfigurationManagerConfigurationDefinitionList
```

- *Type:* <a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList">SsmquicksetupConfigurationManagerConfigurationDefinitionList</a>

---

##### `manager_arn`<sup>Required</sup> <a name="manager_arn" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.managerArn"></a>

```python
manager_arn: str
```

- *Type:* str

---

##### `status_summaries`<sup>Required</sup> <a name="status_summaries" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.statusSummaries"></a>

```python
status_summaries: SsmquicksetupConfigurationManagerStatusSummariesList
```

- *Type:* <a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList">SsmquicksetupConfigurationManagerStatusSummariesList</a>

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.timeouts"></a>

```python
timeouts: SsmquicksetupConfigurationManagerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference">SsmquicksetupConfigurationManagerTimeoutsOutputReference</a>

---

##### `configuration_definition_input`<sup>Optional</sup> <a name="configuration_definition_input" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.configurationDefinitionInput"></a>

```python
configuration_definition_input: typing.Union[IResolvable, typing.List[SsmquicksetupConfigurationManagerConfigurationDefinition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition">SsmquicksetupConfigurationManagerConfigurationDefinition</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SsmquicksetupConfigurationManagerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeouts">SsmquicksetupConfigurationManagerTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SsmquicksetupConfigurationManagerConfig <a name="SsmquicksetupConfigurationManagerConfig" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmquicksetup_configuration_manager

ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  configuration_definition: typing.Union[IResolvable, typing.List[SsmquicksetupConfigurationManagerConfigurationDefinition]] = None,
  description: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: SsmquicksetupConfigurationManagerTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/ssmquicksetup_configuration_manager#name SsmquicksetupConfigurationManager#name}. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.configurationDefinition">configuration_definition</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition">SsmquicksetupConfigurationManagerConfigurationDefinition</a>]]</code> | configuration_definition block. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/ssmquicksetup_configuration_manager#description SsmquicksetupConfigurationManager#description}. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/ssmquicksetup_configuration_manager#tags SsmquicksetupConfigurationManager#tags}. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeouts">SsmquicksetupConfigurationManagerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/ssmquicksetup_configuration_manager#name SsmquicksetupConfigurationManager#name}.

---

##### `configuration_definition`<sup>Optional</sup> <a name="configuration_definition" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.configurationDefinition"></a>

```python
configuration_definition: typing.Union[IResolvable, typing.List[SsmquicksetupConfigurationManagerConfigurationDefinition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition">SsmquicksetupConfigurationManagerConfigurationDefinition</a>]]

configuration_definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/ssmquicksetup_configuration_manager#configuration_definition SsmquicksetupConfigurationManager#configuration_definition}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/ssmquicksetup_configuration_manager#description SsmquicksetupConfigurationManager#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/ssmquicksetup_configuration_manager#tags SsmquicksetupConfigurationManager#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.timeouts"></a>

```python
timeouts: SsmquicksetupConfigurationManagerTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeouts">SsmquicksetupConfigurationManagerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/ssmquicksetup_configuration_manager#timeouts SsmquicksetupConfigurationManager#timeouts}

---

### SsmquicksetupConfigurationManagerConfigurationDefinition <a name="SsmquicksetupConfigurationManagerConfigurationDefinition" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmquicksetup_configuration_manager

ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition(
  parameters: typing.Mapping[str],
  type: str,
  local_deployment_administration_role_arn: str = None,
  local_deployment_execution_role_name: str = None,
  type_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/ssmquicksetup_configuration_manager#parameters SsmquicksetupConfigurationManager#parameters}. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/ssmquicksetup_configuration_manager#type SsmquicksetupConfigurationManager#type}. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition.property.localDeploymentAdministrationRoleArn">local_deployment_administration_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/ssmquicksetup_configuration_manager#local_deployment_administration_role_arn SsmquicksetupConfigurationManager#local_deployment_administration_role_arn}. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition.property.localDeploymentExecutionRoleName">local_deployment_execution_role_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/ssmquicksetup_configuration_manager#local_deployment_execution_role_name SsmquicksetupConfigurationManager#local_deployment_execution_role_name}. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition.property.typeVersion">type_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/ssmquicksetup_configuration_manager#type_version SsmquicksetupConfigurationManager#type_version}. |

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/ssmquicksetup_configuration_manager#parameters SsmquicksetupConfigurationManager#parameters}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/ssmquicksetup_configuration_manager#type SsmquicksetupConfigurationManager#type}.

---

##### `local_deployment_administration_role_arn`<sup>Optional</sup> <a name="local_deployment_administration_role_arn" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition.property.localDeploymentAdministrationRoleArn"></a>

```python
local_deployment_administration_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/ssmquicksetup_configuration_manager#local_deployment_administration_role_arn SsmquicksetupConfigurationManager#local_deployment_administration_role_arn}.

---

##### `local_deployment_execution_role_name`<sup>Optional</sup> <a name="local_deployment_execution_role_name" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition.property.localDeploymentExecutionRoleName"></a>

```python
local_deployment_execution_role_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/ssmquicksetup_configuration_manager#local_deployment_execution_role_name SsmquicksetupConfigurationManager#local_deployment_execution_role_name}.

---

##### `type_version`<sup>Optional</sup> <a name="type_version" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition.property.typeVersion"></a>

```python
type_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/ssmquicksetup_configuration_manager#type_version SsmquicksetupConfigurationManager#type_version}.

---

### SsmquicksetupConfigurationManagerStatusSummaries <a name="SsmquicksetupConfigurationManagerStatusSummaries" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummaries.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmquicksetup_configuration_manager

ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummaries()
```


### SsmquicksetupConfigurationManagerTimeouts <a name="SsmquicksetupConfigurationManagerTimeouts" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmquicksetup_configuration_manager

ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/ssmquicksetup_configuration_manager#create SsmquicksetupConfigurationManager#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/ssmquicksetup_configuration_manager#delete SsmquicksetupConfigurationManager#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/ssmquicksetup_configuration_manager#update SsmquicksetupConfigurationManager#update}

---

## Classes <a name="Classes" id="Classes"></a>

### SsmquicksetupConfigurationManagerConfigurationDefinitionList <a name="SsmquicksetupConfigurationManagerConfigurationDefinitionList" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmquicksetup_configuration_manager

ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition">SsmquicksetupConfigurationManagerConfigurationDefinition</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SsmquicksetupConfigurationManagerConfigurationDefinition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition">SsmquicksetupConfigurationManagerConfigurationDefinition</a>]]

---


### SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference <a name="SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmquicksetup_configuration_manager

ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.resetLocalDeploymentAdministrationRoleArn">reset_local_deployment_administration_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.resetLocalDeploymentExecutionRoleName">reset_local_deployment_execution_role_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.resetTypeVersion">reset_type_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_local_deployment_administration_role_arn` <a name="reset_local_deployment_administration_role_arn" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.resetLocalDeploymentAdministrationRoleArn"></a>

```python
def reset_local_deployment_administration_role_arn() -> None
```

##### `reset_local_deployment_execution_role_name` <a name="reset_local_deployment_execution_role_name" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.resetLocalDeploymentExecutionRoleName"></a>

```python
def reset_local_deployment_execution_role_name() -> None
```

##### `reset_type_version` <a name="reset_type_version" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.resetTypeVersion"></a>

```python
def reset_type_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.localDeploymentAdministrationRoleArnInput">local_deployment_administration_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.localDeploymentExecutionRoleNameInput">local_deployment_execution_role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.typeVersionInput">type_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.localDeploymentAdministrationRoleArn">local_deployment_administration_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.localDeploymentExecutionRoleName">local_deployment_execution_role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.typeVersion">type_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition">SsmquicksetupConfigurationManagerConfigurationDefinition</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `local_deployment_administration_role_arn_input`<sup>Optional</sup> <a name="local_deployment_administration_role_arn_input" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.localDeploymentAdministrationRoleArnInput"></a>

```python
local_deployment_administration_role_arn_input: str
```

- *Type:* str

---

##### `local_deployment_execution_role_name_input`<sup>Optional</sup> <a name="local_deployment_execution_role_name_input" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.localDeploymentExecutionRoleNameInput"></a>

```python
local_deployment_execution_role_name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type_version_input`<sup>Optional</sup> <a name="type_version_input" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.typeVersionInput"></a>

```python
type_version_input: str
```

- *Type:* str

---

##### `local_deployment_administration_role_arn`<sup>Required</sup> <a name="local_deployment_administration_role_arn" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.localDeploymentAdministrationRoleArn"></a>

```python
local_deployment_administration_role_arn: str
```

- *Type:* str

---

##### `local_deployment_execution_role_name`<sup>Required</sup> <a name="local_deployment_execution_role_name" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.localDeploymentExecutionRoleName"></a>

```python
local_deployment_execution_role_name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `type_version`<sup>Required</sup> <a name="type_version" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.typeVersion"></a>

```python
type_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SsmquicksetupConfigurationManagerConfigurationDefinition]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinition">SsmquicksetupConfigurationManagerConfigurationDefinition</a>]

---


### SsmquicksetupConfigurationManagerStatusSummariesList <a name="SsmquicksetupConfigurationManagerStatusSummariesList" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmquicksetup_configuration_manager

ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmquicksetupConfigurationManagerStatusSummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SsmquicksetupConfigurationManagerStatusSummariesOutputReference <a name="SsmquicksetupConfigurationManagerStatusSummariesOutputReference" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmquicksetup_configuration_manager

ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.statusMessage">status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.statusType">status_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummaries">SsmquicksetupConfigurationManagerStatusSummaries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_message`<sup>Required</sup> <a name="status_message" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.statusMessage"></a>

```python
status_message: str
```

- *Type:* str

---

##### `status_type`<sup>Required</sup> <a name="status_type" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.statusType"></a>

```python
status_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.internalValue"></a>

```python
internal_value: SsmquicksetupConfigurationManagerStatusSummaries
```

- *Type:* <a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummaries">SsmquicksetupConfigurationManagerStatusSummaries</a>

---


### SsmquicksetupConfigurationManagerTimeoutsOutputReference <a name="SsmquicksetupConfigurationManagerTimeoutsOutputReference" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmquicksetup_configuration_manager

ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeouts">SsmquicksetupConfigurationManagerTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SsmquicksetupConfigurationManagerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerTimeouts">SsmquicksetupConfigurationManagerTimeouts</a>]

---



