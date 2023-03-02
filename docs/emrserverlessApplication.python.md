# `emrserverlessApplication` Submodule <a name="`emrserverlessApplication` Submodule" id="@cdktf/provider-aws.emrserverlessApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrserverlessApplication <a name="EmrserverlessApplication" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application aws_emrserverless_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emrserverless_application

emrserverlessApplication.EmrserverlessApplication(
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
  release_label: str,
  type: str,
  architecture: str = None,
  auto_start_configuration: EmrserverlessApplicationAutoStartConfiguration = None,
  auto_stop_configuration: EmrserverlessApplicationAutoStopConfiguration = None,
  id: str = None,
  initial_capacity: typing.Union[IResolvable, typing.List[EmrserverlessApplicationInitialCapacity]] = None,
  maximum_capacity: EmrserverlessApplicationMaximumCapacity = None,
  network_configuration: EmrserverlessApplicationNetworkConfiguration = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#name EmrserverlessApplication#name}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.releaseLabel">release_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#release_label EmrserverlessApplication#release_label}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#type EmrserverlessApplication#type}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.architecture">architecture</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#architecture EmrserverlessApplication#architecture}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.autoStartConfiguration">auto_start_configuration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a></code> | auto_start_configuration block. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.autoStopConfiguration">auto_stop_configuration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a></code> | auto_stop_configuration block. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#id EmrserverlessApplication#id}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.initialCapacity">initial_capacity</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>]]</code> | initial_capacity block. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.maximumCapacity">maximum_capacity</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a></code> | maximum_capacity block. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#tags EmrserverlessApplication#tags}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#tags_all EmrserverlessApplication#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#name EmrserverlessApplication#name}.

---

##### `release_label`<sup>Required</sup> <a name="release_label" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.releaseLabel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#release_label EmrserverlessApplication#release_label}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#type EmrserverlessApplication#type}.

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.architecture"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#architecture EmrserverlessApplication#architecture}.

---

##### `auto_start_configuration`<sup>Optional</sup> <a name="auto_start_configuration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.autoStartConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a>

auto_start_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#auto_start_configuration EmrserverlessApplication#auto_start_configuration}

---

##### `auto_stop_configuration`<sup>Optional</sup> <a name="auto_stop_configuration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.autoStopConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a>

auto_stop_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#auto_stop_configuration EmrserverlessApplication#auto_stop_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#id EmrserverlessApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initial_capacity`<sup>Optional</sup> <a name="initial_capacity" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.initialCapacity"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>]]

initial_capacity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#initial_capacity EmrserverlessApplication#initial_capacity}

---

##### `maximum_capacity`<sup>Optional</sup> <a name="maximum_capacity" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.maximumCapacity"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a>

maximum_capacity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#maximum_capacity EmrserverlessApplication#maximum_capacity}

---

##### `network_configuration`<sup>Optional</sup> <a name="network_configuration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.networkConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#network_configuration EmrserverlessApplication#network_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#tags EmrserverlessApplication#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#tags_all EmrserverlessApplication#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putAutoStartConfiguration">put_auto_start_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putAutoStopConfiguration">put_auto_stop_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putInitialCapacity">put_initial_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putMaximumCapacity">put_maximum_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putNetworkConfiguration">put_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetArchitecture">reset_architecture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetAutoStartConfiguration">reset_auto_start_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetAutoStopConfiguration">reset_auto_stop_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetInitialCapacity">reset_initial_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetMaximumCapacity">reset_maximum_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetNetworkConfiguration">reset_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_auto_start_configuration` <a name="put_auto_start_configuration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putAutoStartConfiguration"></a>

```python
def put_auto_start_configuration(
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putAutoStartConfiguration.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#enabled EmrserverlessApplication#enabled}.

---

##### `put_auto_stop_configuration` <a name="put_auto_stop_configuration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putAutoStopConfiguration"></a>

```python
def put_auto_stop_configuration(
  enabled: typing.Union[bool, IResolvable] = None,
  idle_timeout_minutes: typing.Union[int, float] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putAutoStopConfiguration.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#enabled EmrserverlessApplication#enabled}.

---

###### `idle_timeout_minutes`<sup>Optional</sup> <a name="idle_timeout_minutes" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putAutoStopConfiguration.parameter.idleTimeoutMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#idle_timeout_minutes EmrserverlessApplication#idle_timeout_minutes}.

---

##### `put_initial_capacity` <a name="put_initial_capacity" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putInitialCapacity"></a>

```python
def put_initial_capacity(
  value: typing.Union[IResolvable, typing.List[EmrserverlessApplicationInitialCapacity]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putInitialCapacity.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>]]

---

##### `put_maximum_capacity` <a name="put_maximum_capacity" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putMaximumCapacity"></a>

```python
def put_maximum_capacity(
  cpu: str,
  memory: str,
  disk: str = None
) -> None
```

###### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putMaximumCapacity.parameter.cpu"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#cpu EmrserverlessApplication#cpu}.

---

###### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putMaximumCapacity.parameter.memory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#memory EmrserverlessApplication#memory}.

---

###### `disk`<sup>Optional</sup> <a name="disk" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putMaximumCapacity.parameter.disk"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#disk EmrserverlessApplication#disk}.

---

##### `put_network_configuration` <a name="put_network_configuration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putNetworkConfiguration"></a>

```python
def put_network_configuration(
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None
) -> None
```

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putNetworkConfiguration.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#security_group_ids EmrserverlessApplication#security_group_ids}.

---

###### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putNetworkConfiguration.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#subnet_ids EmrserverlessApplication#subnet_ids}.

---

##### `reset_architecture` <a name="reset_architecture" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetArchitecture"></a>

```python
def reset_architecture() -> None
```

##### `reset_auto_start_configuration` <a name="reset_auto_start_configuration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetAutoStartConfiguration"></a>

```python
def reset_auto_start_configuration() -> None
```

##### `reset_auto_stop_configuration` <a name="reset_auto_stop_configuration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetAutoStopConfiguration"></a>

```python
def reset_auto_stop_configuration() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_initial_capacity` <a name="reset_initial_capacity" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetInitialCapacity"></a>

```python
def reset_initial_capacity() -> None
```

##### `reset_maximum_capacity` <a name="reset_maximum_capacity" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetMaximumCapacity"></a>

```python
def reset_maximum_capacity() -> None
```

##### `reset_network_configuration` <a name="reset_network_configuration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetNetworkConfiguration"></a>

```python
def reset_network_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import emrserverless_application

emrserverlessApplication.EmrserverlessApplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import emrserverless_application

emrserverlessApplication.EmrserverlessApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import emrserverless_application

emrserverlessApplication.EmrserverlessApplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.autoStartConfiguration">auto_start_configuration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference">EmrserverlessApplicationAutoStartConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.autoStopConfiguration">auto_stop_configuration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference">EmrserverlessApplicationAutoStopConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.initialCapacity">initial_capacity</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList">EmrserverlessApplicationInitialCapacityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.maximumCapacity">maximum_capacity</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference">EmrserverlessApplicationMaximumCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference">EmrserverlessApplicationNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.architectureInput">architecture_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.autoStartConfigurationInput">auto_start_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.autoStopConfigurationInput">auto_stop_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.initialCapacityInput">initial_capacity_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.maximumCapacityInput">maximum_capacity_input</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.networkConfigurationInput">network_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.releaseLabelInput">release_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.releaseLabel">release_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `auto_start_configuration`<sup>Required</sup> <a name="auto_start_configuration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.autoStartConfiguration"></a>

```python
auto_start_configuration: EmrserverlessApplicationAutoStartConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference">EmrserverlessApplicationAutoStartConfigurationOutputReference</a>

---

##### `auto_stop_configuration`<sup>Required</sup> <a name="auto_stop_configuration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.autoStopConfiguration"></a>

```python
auto_stop_configuration: EmrserverlessApplicationAutoStopConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference">EmrserverlessApplicationAutoStopConfigurationOutputReference</a>

---

##### `initial_capacity`<sup>Required</sup> <a name="initial_capacity" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.initialCapacity"></a>

```python
initial_capacity: EmrserverlessApplicationInitialCapacityList
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList">EmrserverlessApplicationInitialCapacityList</a>

---

##### `maximum_capacity`<sup>Required</sup> <a name="maximum_capacity" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.maximumCapacity"></a>

```python
maximum_capacity: EmrserverlessApplicationMaximumCapacityOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference">EmrserverlessApplicationMaximumCapacityOutputReference</a>

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.networkConfiguration"></a>

```python
network_configuration: EmrserverlessApplicationNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference">EmrserverlessApplicationNetworkConfigurationOutputReference</a>

---

##### `architecture_input`<sup>Optional</sup> <a name="architecture_input" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.architectureInput"></a>

```python
architecture_input: str
```

- *Type:* str

---

##### `auto_start_configuration_input`<sup>Optional</sup> <a name="auto_start_configuration_input" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.autoStartConfigurationInput"></a>

```python
auto_start_configuration_input: EmrserverlessApplicationAutoStartConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a>

---

##### `auto_stop_configuration_input`<sup>Optional</sup> <a name="auto_stop_configuration_input" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.autoStopConfigurationInput"></a>

```python
auto_stop_configuration_input: EmrserverlessApplicationAutoStopConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `initial_capacity_input`<sup>Optional</sup> <a name="initial_capacity_input" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.initialCapacityInput"></a>

```python
initial_capacity_input: typing.Union[IResolvable, typing.List[EmrserverlessApplicationInitialCapacity]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>]]

---

##### `maximum_capacity_input`<sup>Optional</sup> <a name="maximum_capacity_input" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.maximumCapacityInput"></a>

```python
maximum_capacity_input: EmrserverlessApplicationMaximumCapacity
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_configuration_input`<sup>Optional</sup> <a name="network_configuration_input" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.networkConfigurationInput"></a>

```python
network_configuration_input: EmrserverlessApplicationNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a>

---

##### `release_label_input`<sup>Optional</sup> <a name="release_label_input" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.releaseLabelInput"></a>

```python
release_label_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `release_label`<sup>Required</sup> <a name="release_label" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.releaseLabel"></a>

```python
release_label: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EmrserverlessApplicationAutoStartConfiguration <a name="EmrserverlessApplicationAutoStartConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration(
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#enabled EmrserverlessApplication#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#enabled EmrserverlessApplication#enabled}.

---

### EmrserverlessApplicationAutoStopConfiguration <a name="EmrserverlessApplicationAutoStopConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration(
  enabled: typing.Union[bool, IResolvable] = None,
  idle_timeout_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#enabled EmrserverlessApplication#enabled}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration.property.idleTimeoutMinutes">idle_timeout_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#idle_timeout_minutes EmrserverlessApplication#idle_timeout_minutes}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#enabled EmrserverlessApplication#enabled}.

---

##### `idle_timeout_minutes`<sup>Optional</sup> <a name="idle_timeout_minutes" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration.property.idleTimeoutMinutes"></a>

```python
idle_timeout_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#idle_timeout_minutes EmrserverlessApplication#idle_timeout_minutes}.

---

### EmrserverlessApplicationConfig <a name="EmrserverlessApplicationConfig" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  release_label: str,
  type: str,
  architecture: str = None,
  auto_start_configuration: EmrserverlessApplicationAutoStartConfiguration = None,
  auto_stop_configuration: EmrserverlessApplicationAutoStopConfiguration = None,
  id: str = None,
  initial_capacity: typing.Union[IResolvable, typing.List[EmrserverlessApplicationInitialCapacity]] = None,
  maximum_capacity: EmrserverlessApplicationMaximumCapacity = None,
  network_configuration: EmrserverlessApplicationNetworkConfiguration = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#name EmrserverlessApplication#name}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.releaseLabel">release_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#release_label EmrserverlessApplication#release_label}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#type EmrserverlessApplication#type}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.architecture">architecture</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#architecture EmrserverlessApplication#architecture}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.autoStartConfiguration">auto_start_configuration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a></code> | auto_start_configuration block. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.autoStopConfiguration">auto_stop_configuration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a></code> | auto_stop_configuration block. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#id EmrserverlessApplication#id}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.initialCapacity">initial_capacity</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>]]</code> | initial_capacity block. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.maximumCapacity">maximum_capacity</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a></code> | maximum_capacity block. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#tags EmrserverlessApplication#tags}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#tags_all EmrserverlessApplication#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#name EmrserverlessApplication#name}.

---

##### `release_label`<sup>Required</sup> <a name="release_label" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.releaseLabel"></a>

```python
release_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#release_label EmrserverlessApplication#release_label}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#type EmrserverlessApplication#type}.

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#architecture EmrserverlessApplication#architecture}.

---

##### `auto_start_configuration`<sup>Optional</sup> <a name="auto_start_configuration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.autoStartConfiguration"></a>

```python
auto_start_configuration: EmrserverlessApplicationAutoStartConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a>

auto_start_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#auto_start_configuration EmrserverlessApplication#auto_start_configuration}

---

##### `auto_stop_configuration`<sup>Optional</sup> <a name="auto_stop_configuration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.autoStopConfiguration"></a>

```python
auto_stop_configuration: EmrserverlessApplicationAutoStopConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a>

auto_stop_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#auto_stop_configuration EmrserverlessApplication#auto_stop_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#id EmrserverlessApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initial_capacity`<sup>Optional</sup> <a name="initial_capacity" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.initialCapacity"></a>

```python
initial_capacity: typing.Union[IResolvable, typing.List[EmrserverlessApplicationInitialCapacity]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>]]

initial_capacity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#initial_capacity EmrserverlessApplication#initial_capacity}

---

##### `maximum_capacity`<sup>Optional</sup> <a name="maximum_capacity" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.maximumCapacity"></a>

```python
maximum_capacity: EmrserverlessApplicationMaximumCapacity
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a>

maximum_capacity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#maximum_capacity EmrserverlessApplication#maximum_capacity}

---

##### `network_configuration`<sup>Optional</sup> <a name="network_configuration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.networkConfiguration"></a>

```python
network_configuration: EmrserverlessApplicationNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#network_configuration EmrserverlessApplication#network_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#tags EmrserverlessApplication#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#tags_all EmrserverlessApplication#tags_all}.

---

### EmrserverlessApplicationInitialCapacity <a name="EmrserverlessApplicationInitialCapacity" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacity.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationInitialCapacity(
  initial_capacity_type: str,
  initial_capacity_config: EmrserverlessApplicationInitialCapacityInitialCapacityConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacity.property.initialCapacityType">initial_capacity_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#initial_capacity_type EmrserverlessApplication#initial_capacity_type}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacity.property.initialCapacityConfig">initial_capacity_config</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig">EmrserverlessApplicationInitialCapacityInitialCapacityConfig</a></code> | initial_capacity_config block. |

---

##### `initial_capacity_type`<sup>Required</sup> <a name="initial_capacity_type" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacity.property.initialCapacityType"></a>

```python
initial_capacity_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#initial_capacity_type EmrserverlessApplication#initial_capacity_type}.

---

##### `initial_capacity_config`<sup>Optional</sup> <a name="initial_capacity_config" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacity.property.initialCapacityConfig"></a>

```python
initial_capacity_config: EmrserverlessApplicationInitialCapacityInitialCapacityConfig
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig">EmrserverlessApplicationInitialCapacityInitialCapacityConfig</a>

initial_capacity_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#initial_capacity_config EmrserverlessApplication#initial_capacity_config}

---

### EmrserverlessApplicationInitialCapacityInitialCapacityConfig <a name="EmrserverlessApplicationInitialCapacityInitialCapacityConfig" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig(
  worker_count: typing.Union[int, float],
  worker_configuration: EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig.property.workerCount">worker_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#worker_count EmrserverlessApplication#worker_count}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig.property.workerConfiguration">worker_configuration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration">EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration</a></code> | worker_configuration block. |

---

##### `worker_count`<sup>Required</sup> <a name="worker_count" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig.property.workerCount"></a>

```python
worker_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#worker_count EmrserverlessApplication#worker_count}.

---

##### `worker_configuration`<sup>Optional</sup> <a name="worker_configuration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig.property.workerConfiguration"></a>

```python
worker_configuration: EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration">EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration</a>

worker_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#worker_configuration EmrserverlessApplication#worker_configuration}

---

### EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration <a name="EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration(
  cpu: str,
  memory: str,
  disk: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration.property.cpu">cpu</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#cpu EmrserverlessApplication#cpu}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration.property.memory">memory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#memory EmrserverlessApplication#memory}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration.property.disk">disk</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#disk EmrserverlessApplication#disk}. |

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration.property.cpu"></a>

```python
cpu: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#cpu EmrserverlessApplication#cpu}.

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration.property.memory"></a>

```python
memory: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#memory EmrserverlessApplication#memory}.

---

##### `disk`<sup>Optional</sup> <a name="disk" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration.property.disk"></a>

```python
disk: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#disk EmrserverlessApplication#disk}.

---

### EmrserverlessApplicationMaximumCapacity <a name="EmrserverlessApplicationMaximumCapacity" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationMaximumCapacity(
  cpu: str,
  memory: str,
  disk: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity.property.cpu">cpu</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#cpu EmrserverlessApplication#cpu}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity.property.memory">memory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#memory EmrserverlessApplication#memory}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity.property.disk">disk</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#disk EmrserverlessApplication#disk}. |

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity.property.cpu"></a>

```python
cpu: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#cpu EmrserverlessApplication#cpu}.

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity.property.memory"></a>

```python
memory: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#memory EmrserverlessApplication#memory}.

---

##### `disk`<sup>Optional</sup> <a name="disk" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity.property.disk"></a>

```python
disk: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#disk EmrserverlessApplication#disk}.

---

### EmrserverlessApplicationNetworkConfiguration <a name="EmrserverlessApplicationNetworkConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration(
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#security_group_ids EmrserverlessApplication#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#subnet_ids EmrserverlessApplication#subnet_ids}. |

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#security_group_ids EmrserverlessApplication#security_group_ids}.

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#subnet_ids EmrserverlessApplication#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### EmrserverlessApplicationAutoStartConfigurationOutputReference <a name="EmrserverlessApplicationAutoStartConfigurationOutputReference" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: EmrserverlessApplicationAutoStartConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a>

---


### EmrserverlessApplicationAutoStopConfigurationOutputReference <a name="EmrserverlessApplicationAutoStopConfigurationOutputReference" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.resetIdleTimeoutMinutes">reset_idle_timeout_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_idle_timeout_minutes` <a name="reset_idle_timeout_minutes" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.resetIdleTimeoutMinutes"></a>

```python
def reset_idle_timeout_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.idleTimeoutMinutesInput">idle_timeout_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.idleTimeoutMinutes">idle_timeout_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `idle_timeout_minutes_input`<sup>Optional</sup> <a name="idle_timeout_minutes_input" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.idleTimeoutMinutesInput"></a>

```python
idle_timeout_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `idle_timeout_minutes`<sup>Required</sup> <a name="idle_timeout_minutes" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.idleTimeoutMinutes"></a>

```python
idle_timeout_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: EmrserverlessApplicationAutoStopConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a>

---


### EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference <a name="EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.putWorkerConfiguration">put_worker_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.resetWorkerConfiguration">reset_worker_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_worker_configuration` <a name="put_worker_configuration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.putWorkerConfiguration"></a>

```python
def put_worker_configuration(
  cpu: str,
  memory: str,
  disk: str = None
) -> None
```

###### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.putWorkerConfiguration.parameter.cpu"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#cpu EmrserverlessApplication#cpu}.

---

###### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.putWorkerConfiguration.parameter.memory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#memory EmrserverlessApplication#memory}.

---

###### `disk`<sup>Optional</sup> <a name="disk" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.putWorkerConfiguration.parameter.disk"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#disk EmrserverlessApplication#disk}.

---

##### `reset_worker_configuration` <a name="reset_worker_configuration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.resetWorkerConfiguration"></a>

```python
def reset_worker_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.workerConfiguration">worker_configuration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference">EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.workerConfigurationInput">worker_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration">EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.workerCountInput">worker_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.workerCount">worker_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig">EmrserverlessApplicationInitialCapacityInitialCapacityConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `worker_configuration`<sup>Required</sup> <a name="worker_configuration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.workerConfiguration"></a>

```python
worker_configuration: EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference">EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference</a>

---

##### `worker_configuration_input`<sup>Optional</sup> <a name="worker_configuration_input" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.workerConfigurationInput"></a>

```python
worker_configuration_input: EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration">EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration</a>

---

##### `worker_count_input`<sup>Optional</sup> <a name="worker_count_input" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.workerCountInput"></a>

```python
worker_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `worker_count`<sup>Required</sup> <a name="worker_count" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.workerCount"></a>

```python
worker_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.internalValue"></a>

```python
internal_value: EmrserverlessApplicationInitialCapacityInitialCapacityConfig
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig">EmrserverlessApplicationInitialCapacityInitialCapacityConfig</a>

---


### EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference <a name="EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.resetDisk">reset_disk</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disk` <a name="reset_disk" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.resetDisk"></a>

```python
def reset_disk() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.cpuInput">cpu_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.diskInput">disk_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.memoryInput">memory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.cpu">cpu</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.disk">disk</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.memory">memory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration">EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_input`<sup>Optional</sup> <a name="cpu_input" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.cpuInput"></a>

```python
cpu_input: str
```

- *Type:* str

---

##### `disk_input`<sup>Optional</sup> <a name="disk_input" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.diskInput"></a>

```python
disk_input: str
```

- *Type:* str

---

##### `memory_input`<sup>Optional</sup> <a name="memory_input" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.memoryInput"></a>

```python
memory_input: str
```

- *Type:* str

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.cpu"></a>

```python
cpu: str
```

- *Type:* str

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.disk"></a>

```python
disk: str
```

- *Type:* str

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.memory"></a>

```python
memory: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration">EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration</a>

---


### EmrserverlessApplicationInitialCapacityList <a name="EmrserverlessApplicationInitialCapacityList" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationInitialCapacityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EmrserverlessApplicationInitialCapacityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EmrserverlessApplicationInitialCapacity]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>]]

---


### EmrserverlessApplicationInitialCapacityOutputReference <a name="EmrserverlessApplicationInitialCapacityOutputReference" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.putInitialCapacityConfig">put_initial_capacity_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.resetInitialCapacityConfig">reset_initial_capacity_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_initial_capacity_config` <a name="put_initial_capacity_config" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.putInitialCapacityConfig"></a>

```python
def put_initial_capacity_config(
  worker_count: typing.Union[int, float],
  worker_configuration: EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration = None
) -> None
```

###### `worker_count`<sup>Required</sup> <a name="worker_count" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.putInitialCapacityConfig.parameter.workerCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#worker_count EmrserverlessApplication#worker_count}.

---

###### `worker_configuration`<sup>Optional</sup> <a name="worker_configuration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.putInitialCapacityConfig.parameter.workerConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration">EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration</a>

worker_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#worker_configuration EmrserverlessApplication#worker_configuration}

---

##### `reset_initial_capacity_config` <a name="reset_initial_capacity_config" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.resetInitialCapacityConfig"></a>

```python
def reset_initial_capacity_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.initialCapacityConfig">initial_capacity_config</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference">EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.initialCapacityConfigInput">initial_capacity_config_input</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig">EmrserverlessApplicationInitialCapacityInitialCapacityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.initialCapacityTypeInput">initial_capacity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.initialCapacityType">initial_capacity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `initial_capacity_config`<sup>Required</sup> <a name="initial_capacity_config" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.initialCapacityConfig"></a>

```python
initial_capacity_config: EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference">EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference</a>

---

##### `initial_capacity_config_input`<sup>Optional</sup> <a name="initial_capacity_config_input" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.initialCapacityConfigInput"></a>

```python
initial_capacity_config_input: EmrserverlessApplicationInitialCapacityInitialCapacityConfig
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig">EmrserverlessApplicationInitialCapacityInitialCapacityConfig</a>

---

##### `initial_capacity_type_input`<sup>Optional</sup> <a name="initial_capacity_type_input" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.initialCapacityTypeInput"></a>

```python
initial_capacity_type_input: str
```

- *Type:* str

---

##### `initial_capacity_type`<sup>Required</sup> <a name="initial_capacity_type" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.initialCapacityType"></a>

```python
initial_capacity_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EmrserverlessApplicationInitialCapacity, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>, cdktf.IResolvable]

---


### EmrserverlessApplicationMaximumCapacityOutputReference <a name="EmrserverlessApplicationMaximumCapacityOutputReference" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.resetDisk">reset_disk</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disk` <a name="reset_disk" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.resetDisk"></a>

```python
def reset_disk() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.cpuInput">cpu_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.diskInput">disk_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.memoryInput">memory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.cpu">cpu</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.disk">disk</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.memory">memory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_input`<sup>Optional</sup> <a name="cpu_input" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.cpuInput"></a>

```python
cpu_input: str
```

- *Type:* str

---

##### `disk_input`<sup>Optional</sup> <a name="disk_input" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.diskInput"></a>

```python
disk_input: str
```

- *Type:* str

---

##### `memory_input`<sup>Optional</sup> <a name="memory_input" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.memoryInput"></a>

```python
memory_input: str
```

- *Type:* str

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.cpu"></a>

```python
cpu: str
```

- *Type:* str

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.disk"></a>

```python
disk: str
```

- *Type:* str

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.memory"></a>

```python
memory: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.internalValue"></a>

```python
internal_value: EmrserverlessApplicationMaximumCapacity
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a>

---


### EmrserverlessApplicationNetworkConfigurationOutputReference <a name="EmrserverlessApplicationNetworkConfigurationOutputReference" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: EmrserverlessApplicationNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a>

---



