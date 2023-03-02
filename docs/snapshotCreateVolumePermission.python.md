# `snapshotCreateVolumePermission` Submodule <a name="`snapshotCreateVolumePermission` Submodule" id="@cdktf/provider-aws.snapshotCreateVolumePermission"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnapshotCreateVolumePermission <a name="SnapshotCreateVolumePermission" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission aws_snapshot_create_volume_permission}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import snapshot_create_volume_permission

snapshotCreateVolumePermission.SnapshotCreateVolumePermission(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  snapshot_id: str,
  id: str = None,
  timeouts: SnapshotCreateVolumePermissionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission#account_id SnapshotCreateVolumePermission#account_id}. |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer.parameter.snapshotId">snapshot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission#snapshot_id SnapshotCreateVolumePermission#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission#id SnapshotCreateVolumePermission#id}. |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeouts">SnapshotCreateVolumePermissionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission#account_id SnapshotCreateVolumePermission#account_id}.

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer.parameter.snapshotId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission#snapshot_id SnapshotCreateVolumePermission#snapshot_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission#id SnapshotCreateVolumePermission#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeouts">SnapshotCreateVolumePermissionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission#timeouts SnapshotCreateVolumePermission#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission#create SnapshotCreateVolumePermission#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission#delete SnapshotCreateVolumePermission#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import snapshot_create_volume_permission

snapshotCreateVolumePermission.SnapshotCreateVolumePermission.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import snapshot_create_volume_permission

snapshotCreateVolumePermission.SnapshotCreateVolumePermission.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import snapshot_create_volume_permission

snapshotCreateVolumePermission.SnapshotCreateVolumePermission.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference">SnapshotCreateVolumePermissionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.snapshotIdInput">snapshot_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeouts">SnapshotCreateVolumePermissionTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.timeouts"></a>

```python
timeouts: SnapshotCreateVolumePermissionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference">SnapshotCreateVolumePermissionTimeoutsOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `snapshot_id_input`<sup>Optional</sup> <a name="snapshot_id_input" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.snapshotIdInput"></a>

```python
snapshot_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[SnapshotCreateVolumePermissionTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeouts">SnapshotCreateVolumePermissionTimeouts</a>, cdktf.IResolvable]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SnapshotCreateVolumePermissionConfig <a name="SnapshotCreateVolumePermissionConfig" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import snapshot_create_volume_permission

snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  snapshot_id: str,
  id: str = None,
  timeouts: SnapshotCreateVolumePermissionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission#account_id SnapshotCreateVolumePermission#account_id}. |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.snapshotId">snapshot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission#snapshot_id SnapshotCreateVolumePermission#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission#id SnapshotCreateVolumePermission#id}. |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeouts">SnapshotCreateVolumePermissionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission#account_id SnapshotCreateVolumePermission#account_id}.

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission#snapshot_id SnapshotCreateVolumePermission#snapshot_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission#id SnapshotCreateVolumePermission#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.timeouts"></a>

```python
timeouts: SnapshotCreateVolumePermissionTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeouts">SnapshotCreateVolumePermissionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission#timeouts SnapshotCreateVolumePermission#timeouts}

---

### SnapshotCreateVolumePermissionTimeouts <a name="SnapshotCreateVolumePermissionTimeouts" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import snapshot_create_volume_permission

snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission#create SnapshotCreateVolumePermission#create}. |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission#delete SnapshotCreateVolumePermission#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission#create SnapshotCreateVolumePermission#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission#delete SnapshotCreateVolumePermission#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### SnapshotCreateVolumePermissionTimeoutsOutputReference <a name="SnapshotCreateVolumePermissionTimeoutsOutputReference" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import snapshot_create_volume_permission

snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeouts">SnapshotCreateVolumePermissionTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SnapshotCreateVolumePermissionTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionTimeouts">SnapshotCreateVolumePermissionTimeouts</a>, cdktf.IResolvable]

---



