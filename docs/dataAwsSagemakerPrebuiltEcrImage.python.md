# `dataAwsSagemakerPrebuiltEcrImage` Submodule <a name="`dataAwsSagemakerPrebuiltEcrImage` Submodule" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSagemakerPrebuiltEcrImage <a name="DataAwsSagemakerPrebuiltEcrImage" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image aws_sagemaker_prebuilt_ecr_image}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sagemaker_prebuilt_ecr_image

dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  repository_name: str,
  dns_suffix: str = None,
  id: str = None,
  image_tag: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.repositoryName">repository_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#repository_name DataAwsSagemakerPrebuiltEcrImage#repository_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.dnsSuffix">dns_suffix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#dns_suffix DataAwsSagemakerPrebuiltEcrImage#dns_suffix}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#id DataAwsSagemakerPrebuiltEcrImage#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.imageTag">image_tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#image_tag DataAwsSagemakerPrebuiltEcrImage#image_tag}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#region DataAwsSagemakerPrebuiltEcrImage#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.repositoryName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#repository_name DataAwsSagemakerPrebuiltEcrImage#repository_name}.

---

##### `dns_suffix`<sup>Optional</sup> <a name="dns_suffix" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.dnsSuffix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#dns_suffix DataAwsSagemakerPrebuiltEcrImage#dns_suffix}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#id DataAwsSagemakerPrebuiltEcrImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_tag`<sup>Optional</sup> <a name="image_tag" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.imageTag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#image_tag DataAwsSagemakerPrebuiltEcrImage#image_tag}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#region DataAwsSagemakerPrebuiltEcrImage#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.resetDnsSuffix">reset_dns_suffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.resetImageTag">reset_image_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_dns_suffix` <a name="reset_dns_suffix" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.resetDnsSuffix"></a>

```python
def reset_dns_suffix() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_image_tag` <a name="reset_image_tag" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.resetImageTag"></a>

```python
def reset_image_tag() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sagemaker_prebuilt_ecr_image

dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sagemaker_prebuilt_ecr_image

dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sagemaker_prebuilt_ecr_image

dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.registryId">registry_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.registryPath">registry_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.dnsSuffixInput">dns_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.imageTagInput">image_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.repositoryNameInput">repository_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.dnsSuffix">dns_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.imageTag">image_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.repositoryName">repository_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `registry_id`<sup>Required</sup> <a name="registry_id" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.registryId"></a>

```python
registry_id: str
```

- *Type:* str

---

##### `registry_path`<sup>Required</sup> <a name="registry_path" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.registryPath"></a>

```python
registry_path: str
```

- *Type:* str

---

##### `dns_suffix_input`<sup>Optional</sup> <a name="dns_suffix_input" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.dnsSuffixInput"></a>

```python
dns_suffix_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_tag_input`<sup>Optional</sup> <a name="image_tag_input" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.imageTagInput"></a>

```python
image_tag_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `repository_name_input`<sup>Optional</sup> <a name="repository_name_input" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.repositoryNameInput"></a>

```python
repository_name_input: str
```

- *Type:* str

---

##### `dns_suffix`<sup>Required</sup> <a name="dns_suffix" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.dnsSuffix"></a>

```python
dns_suffix: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_tag`<sup>Required</sup> <a name="image_tag" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.imageTag"></a>

```python
image_tag: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSagemakerPrebuiltEcrImageConfig <a name="DataAwsSagemakerPrebuiltEcrImageConfig" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sagemaker_prebuilt_ecr_image

dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  repository_name: str,
  dns_suffix: str = None,
  id: str = None,
  image_tag: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.repositoryName">repository_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#repository_name DataAwsSagemakerPrebuiltEcrImage#repository_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.dnsSuffix">dns_suffix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#dns_suffix DataAwsSagemakerPrebuiltEcrImage#dns_suffix}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#id DataAwsSagemakerPrebuiltEcrImage#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.imageTag">image_tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#image_tag DataAwsSagemakerPrebuiltEcrImage#image_tag}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#region DataAwsSagemakerPrebuiltEcrImage#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#repository_name DataAwsSagemakerPrebuiltEcrImage#repository_name}.

---

##### `dns_suffix`<sup>Optional</sup> <a name="dns_suffix" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.dnsSuffix"></a>

```python
dns_suffix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#dns_suffix DataAwsSagemakerPrebuiltEcrImage#dns_suffix}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#id DataAwsSagemakerPrebuiltEcrImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_tag`<sup>Optional</sup> <a name="image_tag" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.imageTag"></a>

```python
image_tag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#image_tag DataAwsSagemakerPrebuiltEcrImage#image_tag}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsSagemakerPrebuiltEcrImage.DataAwsSagemakerPrebuiltEcrImageConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image#region DataAwsSagemakerPrebuiltEcrImage#region}.

---



