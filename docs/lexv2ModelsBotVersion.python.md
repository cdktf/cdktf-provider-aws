# `lexv2ModelsBotVersion` Submodule <a name="`lexv2ModelsBotVersion` Submodule" id="@cdktf/provider-aws.lexv2ModelsBotVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Lexv2ModelsBotVersion <a name="Lexv2ModelsBotVersion" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/lexv2models_bot_version aws_lexv2models_bot_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lexv2_models_bot_version

lexv2ModelsBotVersion.Lexv2ModelsBotVersion(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bot_id: str,
  locale_specification: typing.Union[IResolvable, typing.Mapping[Lexv2ModelsBotVersionLocaleSpecification]],
  bot_version: str = None,
  description: str = None,
  timeouts: Lexv2ModelsBotVersionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.Initializer.parameter.botId">bot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/lexv2models_bot_version#bot_id Lexv2ModelsBotVersion#bot_id}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.Initializer.parameter.localeSpecification">locale_specification</a></code> | <code>typing.Union[cdktf.IResolvable, typing.Mapping[<a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecification">Lexv2ModelsBotVersionLocaleSpecification</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/lexv2models_bot_version#locale_specification Lexv2ModelsBotVersion#locale_specification}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.Initializer.parameter.botVersion">bot_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/lexv2models_bot_version#bot_version Lexv2ModelsBotVersion#bot_version}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/lexv2models_bot_version#description Lexv2ModelsBotVersion#description}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeouts">Lexv2ModelsBotVersionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bot_id`<sup>Required</sup> <a name="bot_id" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.Initializer.parameter.botId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/lexv2models_bot_version#bot_id Lexv2ModelsBotVersion#bot_id}.

---

##### `locale_specification`<sup>Required</sup> <a name="locale_specification" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.Initializer.parameter.localeSpecification"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.Mapping[<a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecification">Lexv2ModelsBotVersionLocaleSpecification</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/lexv2models_bot_version#locale_specification Lexv2ModelsBotVersion#locale_specification}.

---

##### `bot_version`<sup>Optional</sup> <a name="bot_version" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.Initializer.parameter.botVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/lexv2models_bot_version#bot_version Lexv2ModelsBotVersion#bot_version}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/lexv2models_bot_version#description Lexv2ModelsBotVersion#description}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeouts">Lexv2ModelsBotVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/lexv2models_bot_version#timeouts Lexv2ModelsBotVersion#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.putLocaleSpecification">put_locale_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.resetBotVersion">reset_bot_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_locale_specification` <a name="put_locale_specification" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.putLocaleSpecification"></a>

```python
def put_locale_specification(
  value: typing.Union[IResolvable, typing.Mapping[Lexv2ModelsBotVersionLocaleSpecification]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.putLocaleSpecification.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.Mapping[<a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecification">Lexv2ModelsBotVersionLocaleSpecification</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/lexv2models_bot_version#create Lexv2ModelsBotVersion#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/lexv2models_bot_version#delete Lexv2ModelsBotVersion#delete}

---

##### `reset_bot_version` <a name="reset_bot_version" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.resetBotVersion"></a>

```python
def reset_bot_version() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Lexv2ModelsBotVersion resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import lexv2_models_bot_version

lexv2ModelsBotVersion.Lexv2ModelsBotVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import lexv2_models_bot_version

lexv2ModelsBotVersion.Lexv2ModelsBotVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import lexv2_models_bot_version

lexv2ModelsBotVersion.Lexv2ModelsBotVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import lexv2_models_bot_version

lexv2ModelsBotVersion.Lexv2ModelsBotVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Lexv2ModelsBotVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Lexv2ModelsBotVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Lexv2ModelsBotVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/lexv2models_bot_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Lexv2ModelsBotVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.localeSpecification">locale_specification</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap">Lexv2ModelsBotVersionLocaleSpecificationMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference">Lexv2ModelsBotVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.botIdInput">bot_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.botVersionInput">bot_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.localeSpecificationInput">locale_specification_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.Mapping[<a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecification">Lexv2ModelsBotVersionLocaleSpecification</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeouts">Lexv2ModelsBotVersionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.botId">bot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.botVersion">bot_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.description">description</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `locale_specification`<sup>Required</sup> <a name="locale_specification" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.localeSpecification"></a>

```python
locale_specification: Lexv2ModelsBotVersionLocaleSpecificationMap
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap">Lexv2ModelsBotVersionLocaleSpecificationMap</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.timeouts"></a>

```python
timeouts: Lexv2ModelsBotVersionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference">Lexv2ModelsBotVersionTimeoutsOutputReference</a>

---

##### `bot_id_input`<sup>Optional</sup> <a name="bot_id_input" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.botIdInput"></a>

```python
bot_id_input: str
```

- *Type:* str

---

##### `bot_version_input`<sup>Optional</sup> <a name="bot_version_input" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.botVersionInput"></a>

```python
bot_version_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `locale_specification_input`<sup>Optional</sup> <a name="locale_specification_input" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.localeSpecificationInput"></a>

```python
locale_specification_input: typing.Union[IResolvable, typing.Mapping[Lexv2ModelsBotVersionLocaleSpecification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.Mapping[<a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecification">Lexv2ModelsBotVersionLocaleSpecification</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, Lexv2ModelsBotVersionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeouts">Lexv2ModelsBotVersionTimeouts</a>]

---

##### `bot_id`<sup>Required</sup> <a name="bot_id" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.botId"></a>

```python
bot_id: str
```

- *Type:* str

---

##### `bot_version`<sup>Required</sup> <a name="bot_version" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.botVersion"></a>

```python
bot_version: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.description"></a>

```python
description: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Lexv2ModelsBotVersionConfig <a name="Lexv2ModelsBotVersionConfig" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lexv2_models_bot_version

lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bot_id: str,
  locale_specification: typing.Union[IResolvable, typing.Mapping[Lexv2ModelsBotVersionLocaleSpecification]],
  bot_version: str = None,
  description: str = None,
  timeouts: Lexv2ModelsBotVersionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.botId">bot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/lexv2models_bot_version#bot_id Lexv2ModelsBotVersion#bot_id}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.localeSpecification">locale_specification</a></code> | <code>typing.Union[cdktf.IResolvable, typing.Mapping[<a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecification">Lexv2ModelsBotVersionLocaleSpecification</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/lexv2models_bot_version#locale_specification Lexv2ModelsBotVersion#locale_specification}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.botVersion">bot_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/lexv2models_bot_version#bot_version Lexv2ModelsBotVersion#bot_version}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/lexv2models_bot_version#description Lexv2ModelsBotVersion#description}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeouts">Lexv2ModelsBotVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bot_id`<sup>Required</sup> <a name="bot_id" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.botId"></a>

```python
bot_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/lexv2models_bot_version#bot_id Lexv2ModelsBotVersion#bot_id}.

---

##### `locale_specification`<sup>Required</sup> <a name="locale_specification" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.localeSpecification"></a>

```python
locale_specification: typing.Union[IResolvable, typing.Mapping[Lexv2ModelsBotVersionLocaleSpecification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.Mapping[<a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecification">Lexv2ModelsBotVersionLocaleSpecification</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/lexv2models_bot_version#locale_specification Lexv2ModelsBotVersion#locale_specification}.

---

##### `bot_version`<sup>Optional</sup> <a name="bot_version" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.botVersion"></a>

```python
bot_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/lexv2models_bot_version#bot_version Lexv2ModelsBotVersion#bot_version}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/lexv2models_bot_version#description Lexv2ModelsBotVersion#description}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionConfig.property.timeouts"></a>

```python
timeouts: Lexv2ModelsBotVersionTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeouts">Lexv2ModelsBotVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/lexv2models_bot_version#timeouts Lexv2ModelsBotVersion#timeouts}

---

### Lexv2ModelsBotVersionLocaleSpecification <a name="Lexv2ModelsBotVersionLocaleSpecification" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecification.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lexv2_models_bot_version

lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecification(
  source_bot_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecification.property.sourceBotVersion">source_bot_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/lexv2models_bot_version#source_bot_version Lexv2ModelsBotVersion#source_bot_version}. |

---

##### `source_bot_version`<sup>Required</sup> <a name="source_bot_version" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecification.property.sourceBotVersion"></a>

```python
source_bot_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/lexv2models_bot_version#source_bot_version Lexv2ModelsBotVersion#source_bot_version}.

---

### Lexv2ModelsBotVersionTimeouts <a name="Lexv2ModelsBotVersionTimeouts" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lexv2_models_bot_version

lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/lexv2models_bot_version#create Lexv2ModelsBotVersion#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/resources/lexv2models_bot_version#delete Lexv2ModelsBotVersion#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### Lexv2ModelsBotVersionLocaleSpecificationMap <a name="Lexv2ModelsBotVersionLocaleSpecificationMap" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lexv2_models_bot_version

lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.get"></a>

```python
def get(
  key: str
) -> Lexv2ModelsBotVersionLocaleSpecificationOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.Mapping[<a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecification">Lexv2ModelsBotVersionLocaleSpecification</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationMap.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.Mapping[Lexv2ModelsBotVersionLocaleSpecification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.Mapping[<a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecification">Lexv2ModelsBotVersionLocaleSpecification</a>]]

---


### Lexv2ModelsBotVersionLocaleSpecificationOutputReference <a name="Lexv2ModelsBotVersionLocaleSpecificationOutputReference" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lexv2_models_bot_version

lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.property.sourceBotVersionInput">source_bot_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.property.sourceBotVersion">source_bot_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecification">Lexv2ModelsBotVersionLocaleSpecification</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_bot_version_input`<sup>Optional</sup> <a name="source_bot_version_input" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.property.sourceBotVersionInput"></a>

```python
source_bot_version_input: str
```

- *Type:* str

---

##### `source_bot_version`<sup>Required</sup> <a name="source_bot_version" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.property.sourceBotVersion"></a>

```python
source_bot_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Lexv2ModelsBotVersionLocaleSpecification]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionLocaleSpecification">Lexv2ModelsBotVersionLocaleSpecification</a>]

---


### Lexv2ModelsBotVersionTimeoutsOutputReference <a name="Lexv2ModelsBotVersionTimeoutsOutputReference" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lexv2_models_bot_version

lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeouts">Lexv2ModelsBotVersionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Lexv2ModelsBotVersionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lexv2ModelsBotVersion.Lexv2ModelsBotVersionTimeouts">Lexv2ModelsBotVersionTimeouts</a>]

---



