# `efsAccessPoint` Submodule <a name="`efsAccessPoint` Submodule" id="@cdktf/provider-aws.efsAccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EfsAccessPoint <a name="EfsAccessPoint" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point aws_efs_access_point}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import efs_access_point

efsAccessPoint.EfsAccessPoint(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  file_system_id: str,
  id: str = None,
  posix_user: EfsAccessPointPosixUser = None,
  root_directory: EfsAccessPointRootDirectory = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.fileSystemId">file_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#file_system_id EfsAccessPoint#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#id EfsAccessPoint#id}. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.posixUser">posix_user</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser">EfsAccessPointPosixUser</a></code> | posix_user block. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.rootDirectory">root_directory</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory">EfsAccessPointRootDirectory</a></code> | root_directory block. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#tags EfsAccessPoint#tags}. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#tags_all EfsAccessPoint#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.fileSystemId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#file_system_id EfsAccessPoint#file_system_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#id EfsAccessPoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `posix_user`<sup>Optional</sup> <a name="posix_user" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.posixUser"></a>

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser">EfsAccessPointPosixUser</a>

posix_user block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#posix_user EfsAccessPoint#posix_user}

---

##### `root_directory`<sup>Optional</sup> <a name="root_directory" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.rootDirectory"></a>

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory">EfsAccessPointRootDirectory</a>

root_directory block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#root_directory EfsAccessPoint#root_directory}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#tags EfsAccessPoint#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#tags_all EfsAccessPoint#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.putPosixUser">put_posix_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.putRootDirectory">put_root_directory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.resetPosixUser">reset_posix_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.resetRootDirectory">reset_root_directory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_posix_user` <a name="put_posix_user" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.putPosixUser"></a>

```python
def put_posix_user(
  gid: typing.Union[int, float],
  uid: typing.Union[int, float],
  secondary_gids: typing.List[typing.Union[int, float]] = None
) -> None
```

###### `gid`<sup>Required</sup> <a name="gid" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.putPosixUser.parameter.gid"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#gid EfsAccessPoint#gid}.

---

###### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.putPosixUser.parameter.uid"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#uid EfsAccessPoint#uid}.

---

###### `secondary_gids`<sup>Optional</sup> <a name="secondary_gids" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.putPosixUser.parameter.secondaryGids"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#secondary_gids EfsAccessPoint#secondary_gids}.

---

##### `put_root_directory` <a name="put_root_directory" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.putRootDirectory"></a>

```python
def put_root_directory(
  creation_info: EfsAccessPointRootDirectoryCreationInfo = None,
  path: str = None
) -> None
```

###### `creation_info`<sup>Optional</sup> <a name="creation_info" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.putRootDirectory.parameter.creationInfo"></a>

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo">EfsAccessPointRootDirectoryCreationInfo</a>

creation_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#creation_info EfsAccessPoint#creation_info}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.putRootDirectory.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#path EfsAccessPoint#path}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_posix_user` <a name="reset_posix_user" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.resetPosixUser"></a>

```python
def reset_posix_user() -> None
```

##### `reset_root_directory` <a name="reset_root_directory" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.resetRootDirectory"></a>

```python
def reset_root_directory() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import efs_access_point

efsAccessPoint.EfsAccessPoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import efs_access_point

efsAccessPoint.EfsAccessPoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import efs_access_point

efsAccessPoint.EfsAccessPoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.fileSystemArn">file_system_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.posixUser">posix_user</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference">EfsAccessPointPosixUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.rootDirectory">root_directory</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference">EfsAccessPointRootDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.fileSystemIdInput">file_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.posixUserInput">posix_user_input</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser">EfsAccessPointPosixUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.rootDirectoryInput">root_directory_input</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory">EfsAccessPointRootDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.fileSystemId">file_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `file_system_arn`<sup>Required</sup> <a name="file_system_arn" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.fileSystemArn"></a>

```python
file_system_arn: str
```

- *Type:* str

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `posix_user`<sup>Required</sup> <a name="posix_user" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.posixUser"></a>

```python
posix_user: EfsAccessPointPosixUserOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference">EfsAccessPointPosixUserOutputReference</a>

---

##### `root_directory`<sup>Required</sup> <a name="root_directory" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.rootDirectory"></a>

```python
root_directory: EfsAccessPointRootDirectoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference">EfsAccessPointRootDirectoryOutputReference</a>

---

##### `file_system_id_input`<sup>Optional</sup> <a name="file_system_id_input" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.fileSystemIdInput"></a>

```python
file_system_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `posix_user_input`<sup>Optional</sup> <a name="posix_user_input" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.posixUserInput"></a>

```python
posix_user_input: EfsAccessPointPosixUser
```

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser">EfsAccessPointPosixUser</a>

---

##### `root_directory_input`<sup>Optional</sup> <a name="root_directory_input" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.rootDirectoryInput"></a>

```python
root_directory_input: EfsAccessPointRootDirectory
```

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory">EfsAccessPointRootDirectory</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EfsAccessPointConfig <a name="EfsAccessPointConfig" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import efs_access_point

efsAccessPoint.EfsAccessPointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  file_system_id: str,
  id: str = None,
  posix_user: EfsAccessPointPosixUser = None,
  root_directory: EfsAccessPointRootDirectory = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.fileSystemId">file_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#file_system_id EfsAccessPoint#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#id EfsAccessPoint#id}. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.posixUser">posix_user</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser">EfsAccessPointPosixUser</a></code> | posix_user block. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.rootDirectory">root_directory</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory">EfsAccessPointRootDirectory</a></code> | root_directory block. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#tags EfsAccessPoint#tags}. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#tags_all EfsAccessPoint#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#file_system_id EfsAccessPoint#file_system_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#id EfsAccessPoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `posix_user`<sup>Optional</sup> <a name="posix_user" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.posixUser"></a>

```python
posix_user: EfsAccessPointPosixUser
```

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser">EfsAccessPointPosixUser</a>

posix_user block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#posix_user EfsAccessPoint#posix_user}

---

##### `root_directory`<sup>Optional</sup> <a name="root_directory" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.rootDirectory"></a>

```python
root_directory: EfsAccessPointRootDirectory
```

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory">EfsAccessPointRootDirectory</a>

root_directory block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#root_directory EfsAccessPoint#root_directory}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#tags EfsAccessPoint#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#tags_all EfsAccessPoint#tags_all}.

---

### EfsAccessPointPosixUser <a name="EfsAccessPointPosixUser" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import efs_access_point

efsAccessPoint.EfsAccessPointPosixUser(
  gid: typing.Union[int, float],
  uid: typing.Union[int, float],
  secondary_gids: typing.List[typing.Union[int, float]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser.property.gid">gid</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#gid EfsAccessPoint#gid}. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser.property.uid">uid</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#uid EfsAccessPoint#uid}. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser.property.secondaryGids">secondary_gids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#secondary_gids EfsAccessPoint#secondary_gids}. |

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser.property.gid"></a>

```python
gid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#gid EfsAccessPoint#gid}.

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser.property.uid"></a>

```python
uid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#uid EfsAccessPoint#uid}.

---

##### `secondary_gids`<sup>Optional</sup> <a name="secondary_gids" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser.property.secondaryGids"></a>

```python
secondary_gids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#secondary_gids EfsAccessPoint#secondary_gids}.

---

### EfsAccessPointRootDirectory <a name="EfsAccessPointRootDirectory" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import efs_access_point

efsAccessPoint.EfsAccessPointRootDirectory(
  creation_info: EfsAccessPointRootDirectoryCreationInfo = None,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory.property.creationInfo">creation_info</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo">EfsAccessPointRootDirectoryCreationInfo</a></code> | creation_info block. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#path EfsAccessPoint#path}. |

---

##### `creation_info`<sup>Optional</sup> <a name="creation_info" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory.property.creationInfo"></a>

```python
creation_info: EfsAccessPointRootDirectoryCreationInfo
```

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo">EfsAccessPointRootDirectoryCreationInfo</a>

creation_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#creation_info EfsAccessPoint#creation_info}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#path EfsAccessPoint#path}.

---

### EfsAccessPointRootDirectoryCreationInfo <a name="EfsAccessPointRootDirectoryCreationInfo" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import efs_access_point

efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo(
  owner_gid: typing.Union[int, float],
  owner_uid: typing.Union[int, float],
  permissions: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo.property.ownerGid">owner_gid</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#owner_gid EfsAccessPoint#owner_gid}. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo.property.ownerUid">owner_uid</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#owner_uid EfsAccessPoint#owner_uid}. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo.property.permissions">permissions</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#permissions EfsAccessPoint#permissions}. |

---

##### `owner_gid`<sup>Required</sup> <a name="owner_gid" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo.property.ownerGid"></a>

```python
owner_gid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#owner_gid EfsAccessPoint#owner_gid}.

---

##### `owner_uid`<sup>Required</sup> <a name="owner_uid" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo.property.ownerUid"></a>

```python
owner_uid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#owner_uid EfsAccessPoint#owner_uid}.

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo.property.permissions"></a>

```python
permissions: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#permissions EfsAccessPoint#permissions}.

---

## Classes <a name="Classes" id="Classes"></a>

### EfsAccessPointPosixUserOutputReference <a name="EfsAccessPointPosixUserOutputReference" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import efs_access_point

efsAccessPoint.EfsAccessPointPosixUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.resetSecondaryGids">reset_secondary_gids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_secondary_gids` <a name="reset_secondary_gids" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.resetSecondaryGids"></a>

```python
def reset_secondary_gids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.gidInput">gid_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.secondaryGidsInput">secondary_gids_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.uidInput">uid_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.gid">gid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.secondaryGids">secondary_gids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.uid">uid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser">EfsAccessPointPosixUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gid_input`<sup>Optional</sup> <a name="gid_input" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.gidInput"></a>

```python
gid_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secondary_gids_input`<sup>Optional</sup> <a name="secondary_gids_input" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.secondaryGidsInput"></a>

```python
secondary_gids_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `uid_input`<sup>Optional</sup> <a name="uid_input" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.uidInput"></a>

```python
uid_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.gid"></a>

```python
gid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secondary_gids`<sup>Required</sup> <a name="secondary_gids" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.secondaryGids"></a>

```python
secondary_gids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.uid"></a>

```python
uid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.internalValue"></a>

```python
internal_value: EfsAccessPointPosixUser
```

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser">EfsAccessPointPosixUser</a>

---


### EfsAccessPointRootDirectoryCreationInfoOutputReference <a name="EfsAccessPointRootDirectoryCreationInfoOutputReference" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import efs_access_point

efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerGidInput">owner_gid_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerUidInput">owner_uid_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.permissionsInput">permissions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerGid">owner_gid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerUid">owner_uid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.permissions">permissions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo">EfsAccessPointRootDirectoryCreationInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `owner_gid_input`<sup>Optional</sup> <a name="owner_gid_input" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerGidInput"></a>

```python
owner_gid_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `owner_uid_input`<sup>Optional</sup> <a name="owner_uid_input" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerUidInput"></a>

```python
owner_uid_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.permissionsInput"></a>

```python
permissions_input: str
```

- *Type:* str

---

##### `owner_gid`<sup>Required</sup> <a name="owner_gid" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerGid"></a>

```python
owner_gid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `owner_uid`<sup>Required</sup> <a name="owner_uid" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerUid"></a>

```python
owner_uid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.permissions"></a>

```python
permissions: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.internalValue"></a>

```python
internal_value: EfsAccessPointRootDirectoryCreationInfo
```

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo">EfsAccessPointRootDirectoryCreationInfo</a>

---


### EfsAccessPointRootDirectoryOutputReference <a name="EfsAccessPointRootDirectoryOutputReference" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import efs_access_point

efsAccessPoint.EfsAccessPointRootDirectoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.putCreationInfo">put_creation_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.resetCreationInfo">reset_creation_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_creation_info` <a name="put_creation_info" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.putCreationInfo"></a>

```python
def put_creation_info(
  owner_gid: typing.Union[int, float],
  owner_uid: typing.Union[int, float],
  permissions: str
) -> None
```

###### `owner_gid`<sup>Required</sup> <a name="owner_gid" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.putCreationInfo.parameter.ownerGid"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#owner_gid EfsAccessPoint#owner_gid}.

---

###### `owner_uid`<sup>Required</sup> <a name="owner_uid" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.putCreationInfo.parameter.ownerUid"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#owner_uid EfsAccessPoint#owner_uid}.

---

###### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.putCreationInfo.parameter.permissions"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#permissions EfsAccessPoint#permissions}.

---

##### `reset_creation_info` <a name="reset_creation_info" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.resetCreationInfo"></a>

```python
def reset_creation_info() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.creationInfo">creation_info</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference">EfsAccessPointRootDirectoryCreationInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.creationInfoInput">creation_info_input</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo">EfsAccessPointRootDirectoryCreationInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory">EfsAccessPointRootDirectory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `creation_info`<sup>Required</sup> <a name="creation_info" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.creationInfo"></a>

```python
creation_info: EfsAccessPointRootDirectoryCreationInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference">EfsAccessPointRootDirectoryCreationInfoOutputReference</a>

---

##### `creation_info_input`<sup>Optional</sup> <a name="creation_info_input" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.creationInfoInput"></a>

```python
creation_info_input: EfsAccessPointRootDirectoryCreationInfo
```

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo">EfsAccessPointRootDirectoryCreationInfo</a>

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.internalValue"></a>

```python
internal_value: EfsAccessPointRootDirectory
```

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory">EfsAccessPointRootDirectory</a>

---



