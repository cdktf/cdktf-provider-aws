# `sagemakerStudioLifecycleConfig` Submodule <a name="`sagemakerStudioLifecycleConfig` Submodule" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerStudioLifecycleConfig <a name="SagemakerStudioLifecycleConfig" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config aws_sagemaker_studio_lifecycle_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_studio_lifecycle_config

sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  studio_lifecycle_config_app_type: str,
  studio_lifecycle_config_content: str,
  studio_lifecycle_config_name: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.studioLifecycleConfigAppType">studio_lifecycle_config_app_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#studio_lifecycle_config_app_type SagemakerStudioLifecycleConfig#studio_lifecycle_config_app_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.studioLifecycleConfigContent">studio_lifecycle_config_content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#studio_lifecycle_config_content SagemakerStudioLifecycleConfig#studio_lifecycle_config_content}. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.studioLifecycleConfigName">studio_lifecycle_config_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#studio_lifecycle_config_name SagemakerStudioLifecycleConfig#studio_lifecycle_config_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#id SagemakerStudioLifecycleConfig#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#tags SagemakerStudioLifecycleConfig#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#tags_all SagemakerStudioLifecycleConfig#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `studio_lifecycle_config_app_type`<sup>Required</sup> <a name="studio_lifecycle_config_app_type" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.studioLifecycleConfigAppType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#studio_lifecycle_config_app_type SagemakerStudioLifecycleConfig#studio_lifecycle_config_app_type}.

---

##### `studio_lifecycle_config_content`<sup>Required</sup> <a name="studio_lifecycle_config_content" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.studioLifecycleConfigContent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#studio_lifecycle_config_content SagemakerStudioLifecycleConfig#studio_lifecycle_config_content}.

---

##### `studio_lifecycle_config_name`<sup>Required</sup> <a name="studio_lifecycle_config_name" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.studioLifecycleConfigName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#studio_lifecycle_config_name SagemakerStudioLifecycleConfig#studio_lifecycle_config_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#id SagemakerStudioLifecycleConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#tags SagemakerStudioLifecycleConfig#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#tags_all SagemakerStudioLifecycleConfig#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_studio_lifecycle_config

sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_studio_lifecycle_config

sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_studio_lifecycle_config

sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigAppTypeInput">studio_lifecycle_config_app_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigContentInput">studio_lifecycle_config_content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigNameInput">studio_lifecycle_config_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigAppType">studio_lifecycle_config_app_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigContent">studio_lifecycle_config_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigName">studio_lifecycle_config_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `studio_lifecycle_config_app_type_input`<sup>Optional</sup> <a name="studio_lifecycle_config_app_type_input" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigAppTypeInput"></a>

```python
studio_lifecycle_config_app_type_input: str
```

- *Type:* str

---

##### `studio_lifecycle_config_content_input`<sup>Optional</sup> <a name="studio_lifecycle_config_content_input" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigContentInput"></a>

```python
studio_lifecycle_config_content_input: str
```

- *Type:* str

---

##### `studio_lifecycle_config_name_input`<sup>Optional</sup> <a name="studio_lifecycle_config_name_input" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigNameInput"></a>

```python
studio_lifecycle_config_name_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `studio_lifecycle_config_app_type`<sup>Required</sup> <a name="studio_lifecycle_config_app_type" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigAppType"></a>

```python
studio_lifecycle_config_app_type: str
```

- *Type:* str

---

##### `studio_lifecycle_config_content`<sup>Required</sup> <a name="studio_lifecycle_config_content" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigContent"></a>

```python
studio_lifecycle_config_content: str
```

- *Type:* str

---

##### `studio_lifecycle_config_name`<sup>Required</sup> <a name="studio_lifecycle_config_name" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigName"></a>

```python
studio_lifecycle_config_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerStudioLifecycleConfigConfig <a name="SagemakerStudioLifecycleConfigConfig" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_studio_lifecycle_config

sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  studio_lifecycle_config_app_type: str,
  studio_lifecycle_config_content: str,
  studio_lifecycle_config_name: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.studioLifecycleConfigAppType">studio_lifecycle_config_app_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#studio_lifecycle_config_app_type SagemakerStudioLifecycleConfig#studio_lifecycle_config_app_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.studioLifecycleConfigContent">studio_lifecycle_config_content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#studio_lifecycle_config_content SagemakerStudioLifecycleConfig#studio_lifecycle_config_content}. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.studioLifecycleConfigName">studio_lifecycle_config_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#studio_lifecycle_config_name SagemakerStudioLifecycleConfig#studio_lifecycle_config_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#id SagemakerStudioLifecycleConfig#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#tags SagemakerStudioLifecycleConfig#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#tags_all SagemakerStudioLifecycleConfig#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `studio_lifecycle_config_app_type`<sup>Required</sup> <a name="studio_lifecycle_config_app_type" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.studioLifecycleConfigAppType"></a>

```python
studio_lifecycle_config_app_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#studio_lifecycle_config_app_type SagemakerStudioLifecycleConfig#studio_lifecycle_config_app_type}.

---

##### `studio_lifecycle_config_content`<sup>Required</sup> <a name="studio_lifecycle_config_content" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.studioLifecycleConfigContent"></a>

```python
studio_lifecycle_config_content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#studio_lifecycle_config_content SagemakerStudioLifecycleConfig#studio_lifecycle_config_content}.

---

##### `studio_lifecycle_config_name`<sup>Required</sup> <a name="studio_lifecycle_config_name" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.studioLifecycleConfigName"></a>

```python
studio_lifecycle_config_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#studio_lifecycle_config_name SagemakerStudioLifecycleConfig#studio_lifecycle_config_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#id SagemakerStudioLifecycleConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#tags SagemakerStudioLifecycleConfig#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#tags_all SagemakerStudioLifecycleConfig#tags_all}.

---



