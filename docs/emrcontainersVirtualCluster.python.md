# `emrcontainersVirtualCluster` Submodule <a name="`emrcontainersVirtualCluster` Submodule" id="@cdktf/provider-aws.emrcontainersVirtualCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrcontainersVirtualCluster <a name="EmrcontainersVirtualCluster" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster aws_emrcontainers_virtual_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emrcontainers_virtual_cluster

emrcontainersVirtualCluster.EmrcontainersVirtualCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  container_provider: EmrcontainersVirtualClusterContainerProvider,
  name: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: EmrcontainersVirtualClusterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.containerProvider">container_provider</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider">EmrcontainersVirtualClusterContainerProvider</a></code> | container_provider block. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#name EmrcontainersVirtualCluster#name}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#id EmrcontainersVirtualCluster#id}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#tags EmrcontainersVirtualCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#tags_all EmrcontainersVirtualCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts">EmrcontainersVirtualClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container_provider`<sup>Required</sup> <a name="container_provider" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.containerProvider"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider">EmrcontainersVirtualClusterContainerProvider</a>

container_provider block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#container_provider EmrcontainersVirtualCluster#container_provider}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#name EmrcontainersVirtualCluster#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#id EmrcontainersVirtualCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#tags EmrcontainersVirtualCluster#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#tags_all EmrcontainersVirtualCluster#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts">EmrcontainersVirtualClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#timeouts EmrcontainersVirtualCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.putContainerProvider">put_container_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_container_provider` <a name="put_container_provider" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.putContainerProvider"></a>

```python
def put_container_provider(
  id: str,
  info: EmrcontainersVirtualClusterContainerProviderInfo,
  type: str
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.putContainerProvider.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#id EmrcontainersVirtualCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `info`<sup>Required</sup> <a name="info" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.putContainerProvider.parameter.info"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo">EmrcontainersVirtualClusterContainerProviderInfo</a>

info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#info EmrcontainersVirtualCluster#info}

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.putContainerProvider.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#type EmrcontainersVirtualCluster#type}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.putTimeouts"></a>

```python
def put_timeouts(
  delete: str = None
) -> None
```

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#delete EmrcontainersVirtualCluster#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import emrcontainers_virtual_cluster

emrcontainersVirtualCluster.EmrcontainersVirtualCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import emrcontainers_virtual_cluster

emrcontainersVirtualCluster.EmrcontainersVirtualCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import emrcontainers_virtual_cluster

emrcontainersVirtualCluster.EmrcontainersVirtualCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.containerProvider">container_provider</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference">EmrcontainersVirtualClusterContainerProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference">EmrcontainersVirtualClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.containerProviderInput">container_provider_input</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider">EmrcontainersVirtualClusterContainerProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts">EmrcontainersVirtualClusterTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `container_provider`<sup>Required</sup> <a name="container_provider" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.containerProvider"></a>

```python
container_provider: EmrcontainersVirtualClusterContainerProviderOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference">EmrcontainersVirtualClusterContainerProviderOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.timeouts"></a>

```python
timeouts: EmrcontainersVirtualClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference">EmrcontainersVirtualClusterTimeoutsOutputReference</a>

---

##### `container_provider_input`<sup>Optional</sup> <a name="container_provider_input" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.containerProviderInput"></a>

```python
container_provider_input: EmrcontainersVirtualClusterContainerProvider
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider">EmrcontainersVirtualClusterContainerProvider</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[EmrcontainersVirtualClusterTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts">EmrcontainersVirtualClusterTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EmrcontainersVirtualClusterConfig <a name="EmrcontainersVirtualClusterConfig" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emrcontainers_virtual_cluster

emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  container_provider: EmrcontainersVirtualClusterContainerProvider,
  name: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: EmrcontainersVirtualClusterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.containerProvider">container_provider</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider">EmrcontainersVirtualClusterContainerProvider</a></code> | container_provider block. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#name EmrcontainersVirtualCluster#name}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#id EmrcontainersVirtualCluster#id}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#tags EmrcontainersVirtualCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#tags_all EmrcontainersVirtualCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts">EmrcontainersVirtualClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container_provider`<sup>Required</sup> <a name="container_provider" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.containerProvider"></a>

```python
container_provider: EmrcontainersVirtualClusterContainerProvider
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider">EmrcontainersVirtualClusterContainerProvider</a>

container_provider block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#container_provider EmrcontainersVirtualCluster#container_provider}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#name EmrcontainersVirtualCluster#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#id EmrcontainersVirtualCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#tags EmrcontainersVirtualCluster#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#tags_all EmrcontainersVirtualCluster#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.timeouts"></a>

```python
timeouts: EmrcontainersVirtualClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts">EmrcontainersVirtualClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#timeouts EmrcontainersVirtualCluster#timeouts}

---

### EmrcontainersVirtualClusterContainerProvider <a name="EmrcontainersVirtualClusterContainerProvider" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emrcontainers_virtual_cluster

emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider(
  id: str,
  info: EmrcontainersVirtualClusterContainerProviderInfo,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#id EmrcontainersVirtualCluster#id}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider.property.info">info</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo">EmrcontainersVirtualClusterContainerProviderInfo</a></code> | info block. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#type EmrcontainersVirtualCluster#type}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#id EmrcontainersVirtualCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `info`<sup>Required</sup> <a name="info" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider.property.info"></a>

```python
info: EmrcontainersVirtualClusterContainerProviderInfo
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo">EmrcontainersVirtualClusterContainerProviderInfo</a>

info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#info EmrcontainersVirtualCluster#info}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#type EmrcontainersVirtualCluster#type}.

---

### EmrcontainersVirtualClusterContainerProviderInfo <a name="EmrcontainersVirtualClusterContainerProviderInfo" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emrcontainers_virtual_cluster

emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo(
  eks_info: EmrcontainersVirtualClusterContainerProviderInfoEksInfo
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo.property.eksInfo">eks_info</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo">EmrcontainersVirtualClusterContainerProviderInfoEksInfo</a></code> | eks_info block. |

---

##### `eks_info`<sup>Required</sup> <a name="eks_info" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo.property.eksInfo"></a>

```python
eks_info: EmrcontainersVirtualClusterContainerProviderInfoEksInfo
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo">EmrcontainersVirtualClusterContainerProviderInfoEksInfo</a>

eks_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#eks_info EmrcontainersVirtualCluster#eks_info}

---

### EmrcontainersVirtualClusterContainerProviderInfoEksInfo <a name="EmrcontainersVirtualClusterContainerProviderInfoEksInfo" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emrcontainers_virtual_cluster

emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo(
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#namespace EmrcontainersVirtualCluster#namespace}. |

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#namespace EmrcontainersVirtualCluster#namespace}.

---

### EmrcontainersVirtualClusterTimeouts <a name="EmrcontainersVirtualClusterTimeouts" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emrcontainers_virtual_cluster

emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts(
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#delete EmrcontainersVirtualCluster#delete}. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#delete EmrcontainersVirtualCluster#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference <a name="EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emrcontainers_virtual_cluster

emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo">EmrcontainersVirtualClusterContainerProviderInfoEksInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.internalValue"></a>

```python
internal_value: EmrcontainersVirtualClusterContainerProviderInfoEksInfo
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo">EmrcontainersVirtualClusterContainerProviderInfoEksInfo</a>

---


### EmrcontainersVirtualClusterContainerProviderInfoOutputReference <a name="EmrcontainersVirtualClusterContainerProviderInfoOutputReference" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emrcontainers_virtual_cluster

emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.putEksInfo">put_eks_info</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_eks_info` <a name="put_eks_info" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.putEksInfo"></a>

```python
def put_eks_info(
  namespace: str = None
) -> None
```

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.putEksInfo.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#namespace EmrcontainersVirtualCluster#namespace}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.eksInfo">eks_info</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference">EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.eksInfoInput">eks_info_input</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo">EmrcontainersVirtualClusterContainerProviderInfoEksInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo">EmrcontainersVirtualClusterContainerProviderInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `eks_info`<sup>Required</sup> <a name="eks_info" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.eksInfo"></a>

```python
eks_info: EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference">EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference</a>

---

##### `eks_info_input`<sup>Optional</sup> <a name="eks_info_input" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.eksInfoInput"></a>

```python
eks_info_input: EmrcontainersVirtualClusterContainerProviderInfoEksInfo
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo">EmrcontainersVirtualClusterContainerProviderInfoEksInfo</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.internalValue"></a>

```python
internal_value: EmrcontainersVirtualClusterContainerProviderInfo
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo">EmrcontainersVirtualClusterContainerProviderInfo</a>

---


### EmrcontainersVirtualClusterContainerProviderOutputReference <a name="EmrcontainersVirtualClusterContainerProviderOutputReference" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emrcontainers_virtual_cluster

emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.putInfo">put_info</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_info` <a name="put_info" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.putInfo"></a>

```python
def put_info(
  eks_info: EmrcontainersVirtualClusterContainerProviderInfoEksInfo
) -> None
```

###### `eks_info`<sup>Required</sup> <a name="eks_info" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.putInfo.parameter.eksInfo"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo">EmrcontainersVirtualClusterContainerProviderInfoEksInfo</a>

eks_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#eks_info EmrcontainersVirtualCluster#eks_info}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.info">info</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference">EmrcontainersVirtualClusterContainerProviderInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.infoInput">info_input</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo">EmrcontainersVirtualClusterContainerProviderInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider">EmrcontainersVirtualClusterContainerProvider</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `info`<sup>Required</sup> <a name="info" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.info"></a>

```python
info: EmrcontainersVirtualClusterContainerProviderInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference">EmrcontainersVirtualClusterContainerProviderInfoOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `info_input`<sup>Optional</sup> <a name="info_input" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.infoInput"></a>

```python
info_input: EmrcontainersVirtualClusterContainerProviderInfo
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo">EmrcontainersVirtualClusterContainerProviderInfo</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.internalValue"></a>

```python
internal_value: EmrcontainersVirtualClusterContainerProvider
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider">EmrcontainersVirtualClusterContainerProvider</a>

---


### EmrcontainersVirtualClusterTimeoutsOutputReference <a name="EmrcontainersVirtualClusterTimeoutsOutputReference" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emrcontainers_virtual_cluster

emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts">EmrcontainersVirtualClusterTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EmrcontainersVirtualClusterTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts">EmrcontainersVirtualClusterTimeouts</a>, cdktf.IResolvable]

---



