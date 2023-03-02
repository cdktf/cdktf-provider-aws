# `apprunnerAutoScalingConfigurationVersion` Submodule <a name="`apprunnerAutoScalingConfigurationVersion` Submodule" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApprunnerAutoScalingConfigurationVersion <a name="ApprunnerAutoScalingConfigurationVersion" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version aws_apprunner_auto_scaling_configuration_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apprunner_auto_scaling_configuration_version

apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auto_scaling_configuration_name: str,
  id: str = None,
  max_concurrency: typing.Union[int, float] = None,
  max_size: typing.Union[int, float] = None,
  min_size: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer.parameter.autoScalingConfigurationName">auto_scaling_configuration_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#auto_scaling_configuration_name ApprunnerAutoScalingConfigurationVersion#auto_scaling_configuration_name}. |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#id ApprunnerAutoScalingConfigurationVersion#id}. |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer.parameter.maxConcurrency">max_concurrency</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#max_concurrency ApprunnerAutoScalingConfigurationVersion#max_concurrency}. |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer.parameter.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#max_size ApprunnerAutoScalingConfigurationVersion#max_size}. |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer.parameter.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#min_size ApprunnerAutoScalingConfigurationVersion#min_size}. |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#tags ApprunnerAutoScalingConfigurationVersion#tags}. |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#tags_all ApprunnerAutoScalingConfigurationVersion#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auto_scaling_configuration_name`<sup>Required</sup> <a name="auto_scaling_configuration_name" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer.parameter.autoScalingConfigurationName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#auto_scaling_configuration_name ApprunnerAutoScalingConfigurationVersion#auto_scaling_configuration_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#id ApprunnerAutoScalingConfigurationVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_concurrency`<sup>Optional</sup> <a name="max_concurrency" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer.parameter.maxConcurrency"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#max_concurrency ApprunnerAutoScalingConfigurationVersion#max_concurrency}.

---

##### `max_size`<sup>Optional</sup> <a name="max_size" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer.parameter.maxSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#max_size ApprunnerAutoScalingConfigurationVersion#max_size}.

---

##### `min_size`<sup>Optional</sup> <a name="min_size" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer.parameter.minSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#min_size ApprunnerAutoScalingConfigurationVersion#min_size}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#tags ApprunnerAutoScalingConfigurationVersion#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#tags_all ApprunnerAutoScalingConfigurationVersion#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.resetMaxConcurrency">reset_max_concurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.resetMaxSize">reset_max_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.resetMinSize">reset_min_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_concurrency` <a name="reset_max_concurrency" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.resetMaxConcurrency"></a>

```python
def reset_max_concurrency() -> None
```

##### `reset_max_size` <a name="reset_max_size" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.resetMaxSize"></a>

```python
def reset_max_size() -> None
```

##### `reset_min_size` <a name="reset_min_size" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.resetMinSize"></a>

```python
def reset_min_size() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import apprunner_auto_scaling_configuration_version

apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import apprunner_auto_scaling_configuration_version

apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import apprunner_auto_scaling_configuration_version

apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.autoScalingConfigurationRevision">auto_scaling_configuration_revision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.latest">latest</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.autoScalingConfigurationNameInput">auto_scaling_configuration_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.maxConcurrencyInput">max_concurrency_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.maxSizeInput">max_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.minSizeInput">min_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.autoScalingConfigurationName">auto_scaling_configuration_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.maxConcurrency">max_concurrency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `auto_scaling_configuration_revision`<sup>Required</sup> <a name="auto_scaling_configuration_revision" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.autoScalingConfigurationRevision"></a>

```python
auto_scaling_configuration_revision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `latest`<sup>Required</sup> <a name="latest" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.latest"></a>

```python
latest: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `auto_scaling_configuration_name_input`<sup>Optional</sup> <a name="auto_scaling_configuration_name_input" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.autoScalingConfigurationNameInput"></a>

```python
auto_scaling_configuration_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_concurrency_input`<sup>Optional</sup> <a name="max_concurrency_input" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.maxConcurrencyInput"></a>

```python
max_concurrency_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_size_input`<sup>Optional</sup> <a name="max_size_input" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.maxSizeInput"></a>

```python
max_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_size_input`<sup>Optional</sup> <a name="min_size_input" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.minSizeInput"></a>

```python
min_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `auto_scaling_configuration_name`<sup>Required</sup> <a name="auto_scaling_configuration_name" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.autoScalingConfigurationName"></a>

```python
auto_scaling_configuration_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_concurrency`<sup>Required</sup> <a name="max_concurrency" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.maxConcurrency"></a>

```python
max_concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_size`<sup>Required</sup> <a name="max_size" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.maxSize"></a>

```python
max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_size`<sup>Required</sup> <a name="min_size" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.minSize"></a>

```python
min_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApprunnerAutoScalingConfigurationVersionConfig <a name="ApprunnerAutoScalingConfigurationVersionConfig" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apprunner_auto_scaling_configuration_version

apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auto_scaling_configuration_name: str,
  id: str = None,
  max_concurrency: typing.Union[int, float] = None,
  max_size: typing.Union[int, float] = None,
  min_size: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.autoScalingConfigurationName">auto_scaling_configuration_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#auto_scaling_configuration_name ApprunnerAutoScalingConfigurationVersion#auto_scaling_configuration_name}. |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#id ApprunnerAutoScalingConfigurationVersion#id}. |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.maxConcurrency">max_concurrency</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#max_concurrency ApprunnerAutoScalingConfigurationVersion#max_concurrency}. |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#max_size ApprunnerAutoScalingConfigurationVersion#max_size}. |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#min_size ApprunnerAutoScalingConfigurationVersion#min_size}. |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#tags ApprunnerAutoScalingConfigurationVersion#tags}. |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#tags_all ApprunnerAutoScalingConfigurationVersion#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auto_scaling_configuration_name`<sup>Required</sup> <a name="auto_scaling_configuration_name" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.autoScalingConfigurationName"></a>

```python
auto_scaling_configuration_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#auto_scaling_configuration_name ApprunnerAutoScalingConfigurationVersion#auto_scaling_configuration_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#id ApprunnerAutoScalingConfigurationVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_concurrency`<sup>Optional</sup> <a name="max_concurrency" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.maxConcurrency"></a>

```python
max_concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#max_concurrency ApprunnerAutoScalingConfigurationVersion#max_concurrency}.

---

##### `max_size`<sup>Optional</sup> <a name="max_size" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.maxSize"></a>

```python
max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#max_size ApprunnerAutoScalingConfigurationVersion#max_size}.

---

##### `min_size`<sup>Optional</sup> <a name="min_size" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.minSize"></a>

```python
min_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#min_size ApprunnerAutoScalingConfigurationVersion#min_size}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#tags ApprunnerAutoScalingConfigurationVersion#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#tags_all ApprunnerAutoScalingConfigurationVersion#tags_all}.

---



