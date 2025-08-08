# `securitylakeAwsLogSource` Submodule <a name="`securitylakeAwsLogSource` Submodule" id="@cdktf/provider-aws.securitylakeAwsLogSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecuritylakeAwsLogSource <a name="SecuritylakeAwsLogSource" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/securitylake_aws_log_source aws_securitylake_aws_log_source}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_aws_log_source

securitylakeAwsLogSource.SecuritylakeAwsLogSource(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  region: str = None,
  source: typing.Union[IResolvable, typing.List[SecuritylakeAwsLogSourceSource]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.source">source</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource">SecuritylakeAwsLogSourceSource</a>]]</code> | source block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/securitylake_aws_log_source#region SecuritylakeAwsLogSource#region}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.source"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource">SecuritylakeAwsLogSourceSource</a>]]

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/securitylake_aws_log_source#source SecuritylakeAwsLogSource#source}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.resetSource">reset_source</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_source` <a name="put_source" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.putSource"></a>

```python
def put_source(
  value: typing.Union[IResolvable, typing.List[SecuritylakeAwsLogSourceSource]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.putSource.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource">SecuritylakeAwsLogSourceSource</a>]]

---

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.resetSource"></a>

```python
def reset_source() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SecuritylakeAwsLogSource resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_aws_log_source

securitylakeAwsLogSource.SecuritylakeAwsLogSource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_aws_log_source

securitylakeAwsLogSource.SecuritylakeAwsLogSource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_aws_log_source

securitylakeAwsLogSource.SecuritylakeAwsLogSource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_aws_log_source

securitylakeAwsLogSource.SecuritylakeAwsLogSource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SecuritylakeAwsLogSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecuritylakeAwsLogSource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecuritylakeAwsLogSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/securitylake_aws_log_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecuritylakeAwsLogSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.source">source</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList">SecuritylakeAwsLogSourceSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.sourceInput">source_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource">SecuritylakeAwsLogSourceSource</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.source"></a>

```python
source: SecuritylakeAwsLogSourceSourceList
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList">SecuritylakeAwsLogSourceSourceList</a>

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.sourceInput"></a>

```python
source_input: typing.Union[IResolvable, typing.List[SecuritylakeAwsLogSourceSource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource">SecuritylakeAwsLogSourceSource</a>]]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecuritylakeAwsLogSourceConfig <a name="SecuritylakeAwsLogSourceConfig" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_aws_log_source

securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  region: str = None,
  source: typing.Union[IResolvable, typing.List[SecuritylakeAwsLogSourceSource]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.source">source</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource">SecuritylakeAwsLogSourceSource</a>]]</code> | source block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/securitylake_aws_log_source#region SecuritylakeAwsLogSource#region}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.source"></a>

```python
source: typing.Union[IResolvable, typing.List[SecuritylakeAwsLogSourceSource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource">SecuritylakeAwsLogSourceSource</a>]]

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/securitylake_aws_log_source#source SecuritylakeAwsLogSource#source}

---

### SecuritylakeAwsLogSourceSource <a name="SecuritylakeAwsLogSourceSource" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_aws_log_source

securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource(
  regions: typing.List[str],
  source_name: str,
  accounts: typing.List[str] = None,
  source_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource.property.regions">regions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/securitylake_aws_log_source#regions SecuritylakeAwsLogSource#regions}. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource.property.sourceName">source_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/securitylake_aws_log_source#source_name SecuritylakeAwsLogSource#source_name}. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource.property.accounts">accounts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/securitylake_aws_log_source#accounts SecuritylakeAwsLogSource#accounts}. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource.property.sourceVersion">source_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/securitylake_aws_log_source#source_version SecuritylakeAwsLogSource#source_version}. |

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/securitylake_aws_log_source#regions SecuritylakeAwsLogSource#regions}.

---

##### `source_name`<sup>Required</sup> <a name="source_name" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource.property.sourceName"></a>

```python
source_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/securitylake_aws_log_source#source_name SecuritylakeAwsLogSource#source_name}.

---

##### `accounts`<sup>Optional</sup> <a name="accounts" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource.property.accounts"></a>

```python
accounts: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/securitylake_aws_log_source#accounts SecuritylakeAwsLogSource#accounts}.

---

##### `source_version`<sup>Optional</sup> <a name="source_version" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource.property.sourceVersion"></a>

```python
source_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/securitylake_aws_log_source#source_version SecuritylakeAwsLogSource#source_version}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecuritylakeAwsLogSourceSourceList <a name="SecuritylakeAwsLogSourceSourceList" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_aws_log_source

securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecuritylakeAwsLogSourceSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource">SecuritylakeAwsLogSourceSource</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SecuritylakeAwsLogSourceSource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource">SecuritylakeAwsLogSourceSource</a>]]

---


### SecuritylakeAwsLogSourceSourceOutputReference <a name="SecuritylakeAwsLogSourceSourceOutputReference" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_aws_log_source

securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.resetAccounts">reset_accounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.resetSourceVersion">reset_source_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_accounts` <a name="reset_accounts" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.resetAccounts"></a>

```python
def reset_accounts() -> None
```

##### `reset_source_version` <a name="reset_source_version" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.resetSourceVersion"></a>

```python
def reset_source_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.accountsInput">accounts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.regionsInput">regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.sourceNameInput">source_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.sourceVersionInput">source_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.accounts">accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.regions">regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.sourceName">source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.sourceVersion">source_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource">SecuritylakeAwsLogSourceSource</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accounts_input`<sup>Optional</sup> <a name="accounts_input" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.accountsInput"></a>

```python
accounts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `regions_input`<sup>Optional</sup> <a name="regions_input" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.regionsInput"></a>

```python
regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_name_input`<sup>Optional</sup> <a name="source_name_input" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.sourceNameInput"></a>

```python
source_name_input: str
```

- *Type:* str

---

##### `source_version_input`<sup>Optional</sup> <a name="source_version_input" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.sourceVersionInput"></a>

```python
source_version_input: str
```

- *Type:* str

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.accounts"></a>

```python
accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_name`<sup>Required</sup> <a name="source_name" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.sourceName"></a>

```python
source_name: str
```

- *Type:* str

---

##### `source_version`<sup>Required</sup> <a name="source_version" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.sourceVersion"></a>

```python
source_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSourceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SecuritylakeAwsLogSourceSource]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.securitylakeAwsLogSource.SecuritylakeAwsLogSourceSource">SecuritylakeAwsLogSourceSource</a>]

---



