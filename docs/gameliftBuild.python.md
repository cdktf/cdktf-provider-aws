# `gameliftBuild` Submodule <a name="`gameliftBuild` Submodule" id="@cdktf/provider-aws.gameliftBuild"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameliftBuild <a name="GameliftBuild" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build aws_gamelift_build}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_build

gameliftBuild.GameliftBuild(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  operating_system: str,
  storage_location: GameliftBuildStorageLocation,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build#name GameliftBuild#name}. |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.Initializer.parameter.operatingSystem">operating_system</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build#operating_system GameliftBuild#operating_system}. |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.Initializer.parameter.storageLocation">storage_location</a></code> | <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocation">GameliftBuildStorageLocation</a></code> | storage_location block. |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build#id GameliftBuild#id}. |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build#tags GameliftBuild#tags}. |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build#tags_all GameliftBuild#tags_all}. |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build#version GameliftBuild#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build#name GameliftBuild#name}.

---

##### `operating_system`<sup>Required</sup> <a name="operating_system" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.Initializer.parameter.operatingSystem"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build#operating_system GameliftBuild#operating_system}.

---

##### `storage_location`<sup>Required</sup> <a name="storage_location" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.Initializer.parameter.storageLocation"></a>

- *Type:* <a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocation">GameliftBuildStorageLocation</a>

storage_location block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build#storage_location GameliftBuild#storage_location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build#id GameliftBuild#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build#tags GameliftBuild#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build#tags_all GameliftBuild#tags_all}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build#version GameliftBuild#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.putStorageLocation">put_storage_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_storage_location` <a name="put_storage_location" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.putStorageLocation"></a>

```python
def put_storage_location(
  bucket: str,
  key: str,
  role_arn: str,
  object_version: str = None
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.putStorageLocation.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build#bucket GameliftBuild#bucket}.

---

###### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.putStorageLocation.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build#key GameliftBuild#key}.

---

###### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.putStorageLocation.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build#role_arn GameliftBuild#role_arn}.

---

###### `object_version`<sup>Optional</sup> <a name="object_version" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.putStorageLocation.parameter.objectVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build#object_version GameliftBuild#object_version}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_build

gameliftBuild.GameliftBuild.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_build

gameliftBuild.GameliftBuild.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_build

gameliftBuild.GameliftBuild.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.storageLocation">storage_location</a></code> | <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference">GameliftBuildStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.operatingSystemInput">operating_system_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.storageLocationInput">storage_location_input</a></code> | <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocation">GameliftBuildStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.operatingSystem">operating_system</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `storage_location`<sup>Required</sup> <a name="storage_location" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.storageLocation"></a>

```python
storage_location: GameliftBuildStorageLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference">GameliftBuildStorageLocationOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `operating_system_input`<sup>Optional</sup> <a name="operating_system_input" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.operatingSystemInput"></a>

```python
operating_system_input: str
```

- *Type:* str

---

##### `storage_location_input`<sup>Optional</sup> <a name="storage_location_input" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.storageLocationInput"></a>

```python
storage_location_input: GameliftBuildStorageLocation
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocation">GameliftBuildStorageLocation</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `operating_system`<sup>Required</sup> <a name="operating_system" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.operatingSystem"></a>

```python
operating_system: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.gameliftBuild.GameliftBuild.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GameliftBuildConfig <a name="GameliftBuildConfig" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_build

gameliftBuild.GameliftBuildConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  operating_system: str,
  storage_location: GameliftBuildStorageLocation,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build#name GameliftBuild#name}. |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildConfig.property.operatingSystem">operating_system</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build#operating_system GameliftBuild#operating_system}. |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildConfig.property.storageLocation">storage_location</a></code> | <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocation">GameliftBuildStorageLocation</a></code> | storage_location block. |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build#id GameliftBuild#id}. |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build#tags GameliftBuild#tags}. |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build#tags_all GameliftBuild#tags_all}. |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build#version GameliftBuild#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build#name GameliftBuild#name}.

---

##### `operating_system`<sup>Required</sup> <a name="operating_system" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildConfig.property.operatingSystem"></a>

```python
operating_system: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build#operating_system GameliftBuild#operating_system}.

---

##### `storage_location`<sup>Required</sup> <a name="storage_location" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildConfig.property.storageLocation"></a>

```python
storage_location: GameliftBuildStorageLocation
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocation">GameliftBuildStorageLocation</a>

storage_location block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build#storage_location GameliftBuild#storage_location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build#id GameliftBuild#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build#tags GameliftBuild#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build#tags_all GameliftBuild#tags_all}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build#version GameliftBuild#version}.

---

### GameliftBuildStorageLocation <a name="GameliftBuildStorageLocation" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_build

gameliftBuild.GameliftBuildStorageLocation(
  bucket: str,
  key: str,
  role_arn: str,
  object_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocation.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build#bucket GameliftBuild#bucket}. |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocation.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build#key GameliftBuild#key}. |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocation.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build#role_arn GameliftBuild#role_arn}. |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocation.property.objectVersion">object_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build#object_version GameliftBuild#object_version}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocation.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build#bucket GameliftBuild#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocation.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build#key GameliftBuild#key}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocation.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build#role_arn GameliftBuild#role_arn}.

---

##### `object_version`<sup>Optional</sup> <a name="object_version" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocation.property.objectVersion"></a>

```python
object_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build#object_version GameliftBuild#object_version}.

---

## Classes <a name="Classes" id="Classes"></a>

### GameliftBuildStorageLocationOutputReference <a name="GameliftBuildStorageLocationOutputReference" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_build

gameliftBuild.GameliftBuildStorageLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.resetObjectVersion">reset_object_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_object_version` <a name="reset_object_version" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.resetObjectVersion"></a>

```python
def reset_object_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.property.objectVersionInput">object_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.property.objectVersion">object_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocation">GameliftBuildStorageLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `object_version_input`<sup>Optional</sup> <a name="object_version_input" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.property.objectVersionInput"></a>

```python
object_version_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `object_version`<sup>Required</sup> <a name="object_version" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.property.objectVersion"></a>

```python
object_version: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocationOutputReference.property.internalValue"></a>

```python
internal_value: GameliftBuildStorageLocation
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftBuild.GameliftBuildStorageLocation">GameliftBuildStorageLocation</a>

---



