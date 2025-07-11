# `s3ControlDirectoryBucketAccessPointScope` Submodule <a name="`s3ControlDirectoryBucketAccessPointScope` Submodule" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ControlDirectoryBucketAccessPointScope <a name="S3ControlDirectoryBucketAccessPointScope" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/s3control_directory_bucket_access_point_scope aws_s3control_directory_bucket_access_point_scope}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_directory_bucket_access_point_scope

s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  name: str,
  region: str = None,
  scope: typing.Union[IResolvable, typing.List[S3ControlDirectoryBucketAccessPointScopeScope]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/s3control_directory_bucket_access_point_scope#account_id S3ControlDirectoryBucketAccessPointScope#account_id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/s3control_directory_bucket_access_point_scope#name S3ControlDirectoryBucketAccessPointScope#name}. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer.parameter.scope">scope</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope">S3ControlDirectoryBucketAccessPointScopeScope</a>]]</code> | scope block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/s3control_directory_bucket_access_point_scope#account_id S3ControlDirectoryBucketAccessPointScope#account_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/s3control_directory_bucket_access_point_scope#name S3ControlDirectoryBucketAccessPointScope#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/s3control_directory_bucket_access_point_scope#region S3ControlDirectoryBucketAccessPointScope#region}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer.parameter.scope"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope">S3ControlDirectoryBucketAccessPointScopeScope</a>]]

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/s3control_directory_bucket_access_point_scope#scope S3ControlDirectoryBucketAccessPointScope#scope}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.putScope">put_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.resetScope">reset_scope</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_scope` <a name="put_scope" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.putScope"></a>

```python
def put_scope(
  value: typing.Union[IResolvable, typing.List[S3ControlDirectoryBucketAccessPointScopeScope]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.putScope.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope">S3ControlDirectoryBucketAccessPointScopeScope</a>]]

---

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.resetScope"></a>

```python
def reset_scope() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a S3ControlDirectoryBucketAccessPointScope resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_directory_bucket_access_point_scope

s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_directory_bucket_access_point_scope

s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_directory_bucket_access_point_scope

s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_directory_bucket_access_point_scope

s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a S3ControlDirectoryBucketAccessPointScope resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the S3ControlDirectoryBucketAccessPointScope to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing S3ControlDirectoryBucketAccessPointScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/s3control_directory_bucket_access_point_scope#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the S3ControlDirectoryBucketAccessPointScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList">S3ControlDirectoryBucketAccessPointScopeScopeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.scopeInput">scope_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope">S3ControlDirectoryBucketAccessPointScopeScope</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.scope"></a>

```python
scope: S3ControlDirectoryBucketAccessPointScopeScopeList
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList">S3ControlDirectoryBucketAccessPointScopeScopeList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.scopeInput"></a>

```python
scope_input: typing.Union[IResolvable, typing.List[S3ControlDirectoryBucketAccessPointScopeScope]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope">S3ControlDirectoryBucketAccessPointScopeScope</a>]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3ControlDirectoryBucketAccessPointScopeConfig <a name="S3ControlDirectoryBucketAccessPointScopeConfig" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_directory_bucket_access_point_scope

s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  name: str,
  region: str = None,
  scope: typing.Union[IResolvable, typing.List[S3ControlDirectoryBucketAccessPointScopeScope]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/s3control_directory_bucket_access_point_scope#account_id S3ControlDirectoryBucketAccessPointScope#account_id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/s3control_directory_bucket_access_point_scope#name S3ControlDirectoryBucketAccessPointScope#name}. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.scope">scope</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope">S3ControlDirectoryBucketAccessPointScopeScope</a>]]</code> | scope block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/s3control_directory_bucket_access_point_scope#account_id S3ControlDirectoryBucketAccessPointScope#account_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/s3control_directory_bucket_access_point_scope#name S3ControlDirectoryBucketAccessPointScope#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/s3control_directory_bucket_access_point_scope#region S3ControlDirectoryBucketAccessPointScope#region}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.scope"></a>

```python
scope: typing.Union[IResolvable, typing.List[S3ControlDirectoryBucketAccessPointScopeScope]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope">S3ControlDirectoryBucketAccessPointScopeScope</a>]]

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/s3control_directory_bucket_access_point_scope#scope S3ControlDirectoryBucketAccessPointScope#scope}

---

### S3ControlDirectoryBucketAccessPointScopeScope <a name="S3ControlDirectoryBucketAccessPointScopeScope" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_directory_bucket_access_point_scope

s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope(
  permissions: typing.List[str] = None,
  prefixes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/s3control_directory_bucket_access_point_scope#permissions S3ControlDirectoryBucketAccessPointScope#permissions}. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope.property.prefixes">prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/s3control_directory_bucket_access_point_scope#prefixes S3ControlDirectoryBucketAccessPointScope#prefixes}. |

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/s3control_directory_bucket_access_point_scope#permissions S3ControlDirectoryBucketAccessPointScope#permissions}.

---

##### `prefixes`<sup>Optional</sup> <a name="prefixes" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope.property.prefixes"></a>

```python
prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/s3control_directory_bucket_access_point_scope#prefixes S3ControlDirectoryBucketAccessPointScope#prefixes}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3ControlDirectoryBucketAccessPointScopeScopeList <a name="S3ControlDirectoryBucketAccessPointScopeScopeList" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_directory_bucket_access_point_scope

s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3ControlDirectoryBucketAccessPointScopeScopeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope">S3ControlDirectoryBucketAccessPointScopeScope</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[S3ControlDirectoryBucketAccessPointScopeScope]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope">S3ControlDirectoryBucketAccessPointScopeScope</a>]]

---


### S3ControlDirectoryBucketAccessPointScopeScopeOutputReference <a name="S3ControlDirectoryBucketAccessPointScopeScopeOutputReference" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_directory_bucket_access_point_scope

s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.resetPermissions">reset_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.resetPrefixes">reset_prefixes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_permissions` <a name="reset_permissions" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.resetPermissions"></a>

```python
def reset_permissions() -> None
```

##### `reset_prefixes` <a name="reset_prefixes" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.resetPrefixes"></a>

```python
def reset_prefixes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.permissionsInput">permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.prefixesInput">prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.prefixes">prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope">S3ControlDirectoryBucketAccessPointScopeScope</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.permissionsInput"></a>

```python
permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `prefixes_input`<sup>Optional</sup> <a name="prefixes_input" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.prefixesInput"></a>

```python
prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `prefixes`<sup>Required</sup> <a name="prefixes" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.prefixes"></a>

```python
prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, S3ControlDirectoryBucketAccessPointScopeScope]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope">S3ControlDirectoryBucketAccessPointScopeScope</a>]

---



