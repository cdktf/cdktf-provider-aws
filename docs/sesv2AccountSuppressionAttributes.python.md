# `sesv2AccountSuppressionAttributes` Submodule <a name="`sesv2AccountSuppressionAttributes` Submodule" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Sesv2AccountSuppressionAttributes <a name="Sesv2AccountSuppressionAttributes" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/sesv2_account_suppression_attributes aws_sesv2_account_suppression_attributes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_account_suppression_attributes

sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  suppressed_reasons: typing.List[str],
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.Initializer.parameter.suppressedReasons">suppressed_reasons</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/sesv2_account_suppression_attributes#suppressed_reasons Sesv2AccountSuppressionAttributes#suppressed_reasons}. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `suppressed_reasons`<sup>Required</sup> <a name="suppressed_reasons" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.Initializer.parameter.suppressedReasons"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/sesv2_account_suppression_attributes#suppressed_reasons Sesv2AccountSuppressionAttributes#suppressed_reasons}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/sesv2_account_suppression_attributes#region Sesv2AccountSuppressionAttributes#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Sesv2AccountSuppressionAttributes resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_account_suppression_attributes

sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_account_suppression_attributes

sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_account_suppression_attributes

sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_account_suppression_attributes

sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Sesv2AccountSuppressionAttributes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Sesv2AccountSuppressionAttributes to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Sesv2AccountSuppressionAttributes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/sesv2_account_suppression_attributes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Sesv2AccountSuppressionAttributes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.suppressedReasonsInput">suppressed_reasons_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.suppressedReasons">suppressed_reasons</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `suppressed_reasons_input`<sup>Optional</sup> <a name="suppressed_reasons_input" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.suppressedReasonsInput"></a>

```python
suppressed_reasons_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `suppressed_reasons`<sup>Required</sup> <a name="suppressed_reasons" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.suppressedReasons"></a>

```python
suppressed_reasons: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Sesv2AccountSuppressionAttributesConfig <a name="Sesv2AccountSuppressionAttributesConfig" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_account_suppression_attributes

sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  suppressed_reasons: typing.List[str],
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributesConfig.property.suppressedReasons">suppressed_reasons</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/sesv2_account_suppression_attributes#suppressed_reasons Sesv2AccountSuppressionAttributes#suppressed_reasons}. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributesConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `suppressed_reasons`<sup>Required</sup> <a name="suppressed_reasons" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributesConfig.property.suppressedReasons"></a>

```python
suppressed_reasons: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/sesv2_account_suppression_attributes#suppressed_reasons Sesv2AccountSuppressionAttributes#suppressed_reasons}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.sesv2AccountSuppressionAttributes.Sesv2AccountSuppressionAttributesConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/sesv2_account_suppression_attributes#region Sesv2AccountSuppressionAttributes#region}

---



