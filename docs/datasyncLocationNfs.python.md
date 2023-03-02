# `datasyncLocationNfs` Submodule <a name="`datasyncLocationNfs` Submodule" id="@cdktf/provider-aws.datasyncLocationNfs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationNfs <a name="DatasyncLocationNfs" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs aws_datasync_location_nfs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datasync_location_nfs

datasyncLocationNfs.DatasyncLocationNfs(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  on_prem_config: DatasyncLocationNfsOnPremConfig,
  server_hostname: str,
  subdirectory: str,
  id: str = None,
  mount_options: DatasyncLocationNfsMountOptions = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.onPremConfig">on_prem_config</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig">DatasyncLocationNfsOnPremConfig</a></code> | on_prem_config block. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.serverHostname">server_hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#server_hostname DatasyncLocationNfs#server_hostname}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.subdirectory">subdirectory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#subdirectory DatasyncLocationNfs#subdirectory}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#id DatasyncLocationNfs#id}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.mountOptions">mount_options</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptions">DatasyncLocationNfsMountOptions</a></code> | mount_options block. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#tags DatasyncLocationNfs#tags}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#tags_all DatasyncLocationNfs#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `on_prem_config`<sup>Required</sup> <a name="on_prem_config" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.onPremConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig">DatasyncLocationNfsOnPremConfig</a>

on_prem_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#on_prem_config DatasyncLocationNfs#on_prem_config}

---

##### `server_hostname`<sup>Required</sup> <a name="server_hostname" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.serverHostname"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#server_hostname DatasyncLocationNfs#server_hostname}.

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.subdirectory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#subdirectory DatasyncLocationNfs#subdirectory}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#id DatasyncLocationNfs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mount_options`<sup>Optional</sup> <a name="mount_options" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.mountOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptions">DatasyncLocationNfsMountOptions</a>

mount_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#mount_options DatasyncLocationNfs#mount_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#tags DatasyncLocationNfs#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#tags_all DatasyncLocationNfs#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.putMountOptions">put_mount_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.putOnPremConfig">put_on_prem_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.resetMountOptions">reset_mount_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_mount_options` <a name="put_mount_options" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.putMountOptions"></a>

```python
def put_mount_options(
  version: str = None
) -> None
```

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.putMountOptions.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#version DatasyncLocationNfs#version}.

---

##### `put_on_prem_config` <a name="put_on_prem_config" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.putOnPremConfig"></a>

```python
def put_on_prem_config(
  agent_arns: typing.List[str]
) -> None
```

###### `agent_arns`<sup>Required</sup> <a name="agent_arns" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.putOnPremConfig.parameter.agentArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#agent_arns DatasyncLocationNfs#agent_arns}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mount_options` <a name="reset_mount_options" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.resetMountOptions"></a>

```python
def reset_mount_options() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import datasync_location_nfs

datasyncLocationNfs.DatasyncLocationNfs.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import datasync_location_nfs

datasyncLocationNfs.DatasyncLocationNfs.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import datasync_location_nfs

datasyncLocationNfs.DatasyncLocationNfs.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.mountOptions">mount_options</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference">DatasyncLocationNfsMountOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.onPremConfig">on_prem_config</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference">DatasyncLocationNfsOnPremConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.mountOptionsInput">mount_options_input</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptions">DatasyncLocationNfsMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.onPremConfigInput">on_prem_config_input</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig">DatasyncLocationNfsOnPremConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.serverHostnameInput">server_hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.subdirectoryInput">subdirectory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.serverHostname">server_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.subdirectory">subdirectory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `mount_options`<sup>Required</sup> <a name="mount_options" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.mountOptions"></a>

```python
mount_options: DatasyncLocationNfsMountOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference">DatasyncLocationNfsMountOptionsOutputReference</a>

---

##### `on_prem_config`<sup>Required</sup> <a name="on_prem_config" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.onPremConfig"></a>

```python
on_prem_config: DatasyncLocationNfsOnPremConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference">DatasyncLocationNfsOnPremConfigOutputReference</a>

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mount_options_input`<sup>Optional</sup> <a name="mount_options_input" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.mountOptionsInput"></a>

```python
mount_options_input: DatasyncLocationNfsMountOptions
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptions">DatasyncLocationNfsMountOptions</a>

---

##### `on_prem_config_input`<sup>Optional</sup> <a name="on_prem_config_input" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.onPremConfigInput"></a>

```python
on_prem_config_input: DatasyncLocationNfsOnPremConfig
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig">DatasyncLocationNfsOnPremConfig</a>

---

##### `server_hostname_input`<sup>Optional</sup> <a name="server_hostname_input" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.serverHostnameInput"></a>

```python
server_hostname_input: str
```

- *Type:* str

---

##### `subdirectory_input`<sup>Optional</sup> <a name="subdirectory_input" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.subdirectoryInput"></a>

```python
subdirectory_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `server_hostname`<sup>Required</sup> <a name="server_hostname" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.serverHostname"></a>

```python
server_hostname: str
```

- *Type:* str

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.subdirectory"></a>

```python
subdirectory: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationNfsConfig <a name="DatasyncLocationNfsConfig" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datasync_location_nfs

datasyncLocationNfs.DatasyncLocationNfsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  on_prem_config: DatasyncLocationNfsOnPremConfig,
  server_hostname: str,
  subdirectory: str,
  id: str = None,
  mount_options: DatasyncLocationNfsMountOptions = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.onPremConfig">on_prem_config</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig">DatasyncLocationNfsOnPremConfig</a></code> | on_prem_config block. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.serverHostname">server_hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#server_hostname DatasyncLocationNfs#server_hostname}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.subdirectory">subdirectory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#subdirectory DatasyncLocationNfs#subdirectory}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#id DatasyncLocationNfs#id}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.mountOptions">mount_options</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptions">DatasyncLocationNfsMountOptions</a></code> | mount_options block. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#tags DatasyncLocationNfs#tags}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#tags_all DatasyncLocationNfs#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `on_prem_config`<sup>Required</sup> <a name="on_prem_config" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.onPremConfig"></a>

```python
on_prem_config: DatasyncLocationNfsOnPremConfig
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig">DatasyncLocationNfsOnPremConfig</a>

on_prem_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#on_prem_config DatasyncLocationNfs#on_prem_config}

---

##### `server_hostname`<sup>Required</sup> <a name="server_hostname" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.serverHostname"></a>

```python
server_hostname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#server_hostname DatasyncLocationNfs#server_hostname}.

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.subdirectory"></a>

```python
subdirectory: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#subdirectory DatasyncLocationNfs#subdirectory}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#id DatasyncLocationNfs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mount_options`<sup>Optional</sup> <a name="mount_options" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.mountOptions"></a>

```python
mount_options: DatasyncLocationNfsMountOptions
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptions">DatasyncLocationNfsMountOptions</a>

mount_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#mount_options DatasyncLocationNfs#mount_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#tags DatasyncLocationNfs#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#tags_all DatasyncLocationNfs#tags_all}.

---

### DatasyncLocationNfsMountOptions <a name="DatasyncLocationNfsMountOptions" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datasync_location_nfs

datasyncLocationNfs.DatasyncLocationNfsMountOptions(
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptions.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#version DatasyncLocationNfs#version}. |

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptions.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#version DatasyncLocationNfs#version}.

---

### DatasyncLocationNfsOnPremConfig <a name="DatasyncLocationNfsOnPremConfig" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datasync_location_nfs

datasyncLocationNfs.DatasyncLocationNfsOnPremConfig(
  agent_arns: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig.property.agentArns">agent_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#agent_arns DatasyncLocationNfs#agent_arns}. |

---

##### `agent_arns`<sup>Required</sup> <a name="agent_arns" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig.property.agentArns"></a>

```python
agent_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#agent_arns DatasyncLocationNfs#agent_arns}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncLocationNfsMountOptionsOutputReference <a name="DatasyncLocationNfsMountOptionsOutputReference" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datasync_location_nfs

datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_version` <a name="reset_version" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptions">DatasyncLocationNfsMountOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DatasyncLocationNfsMountOptions
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptions">DatasyncLocationNfsMountOptions</a>

---


### DatasyncLocationNfsOnPremConfigOutputReference <a name="DatasyncLocationNfsOnPremConfigOutputReference" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datasync_location_nfs

datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.agentArnsInput">agent_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.agentArns">agent_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig">DatasyncLocationNfsOnPremConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_arns_input`<sup>Optional</sup> <a name="agent_arns_input" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.agentArnsInput"></a>

```python
agent_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `agent_arns`<sup>Required</sup> <a name="agent_arns" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.agentArns"></a>

```python
agent_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.internalValue"></a>

```python
internal_value: DatasyncLocationNfsOnPremConfig
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig">DatasyncLocationNfsOnPremConfig</a>

---



