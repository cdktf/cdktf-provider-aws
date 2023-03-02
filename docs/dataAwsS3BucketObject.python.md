# `dataAwsS3BucketObject` Submodule <a name="`dataAwsS3BucketObject` Submodule" id="@cdktf/provider-aws.dataAwsS3BucketObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsS3BucketObject <a name="DataAwsS3BucketObject" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object aws_s3_bucket_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_s3_bucket_object

dataAwsS3BucketObject.DataAwsS3BucketObject(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  key: str,
  id: str = None,
  range: str = None,
  tags: typing.Mapping[str] = None,
  version_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object#bucket DataAwsS3BucketObject#bucket}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.Initializer.parameter.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object#key DataAwsS3BucketObject#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object#id DataAwsS3BucketObject#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.Initializer.parameter.range">range</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object#range DataAwsS3BucketObject#range}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object#tags DataAwsS3BucketObject#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.Initializer.parameter.versionId">version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object#version_id DataAwsS3BucketObject#version_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.Initializer.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object#bucket DataAwsS3BucketObject#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.Initializer.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object#key DataAwsS3BucketObject#key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object#id DataAwsS3BucketObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.Initializer.parameter.range"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object#range DataAwsS3BucketObject#range}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object#tags DataAwsS3BucketObject#tags}.

---

##### `version_id`<sup>Optional</sup> <a name="version_id" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.Initializer.parameter.versionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object#version_id DataAwsS3BucketObject#version_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.resetRange">reset_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.resetVersionId">reset_version_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_range` <a name="reset_range" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.resetRange"></a>

```python
def reset_range() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_version_id` <a name="reset_version_id" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.resetVersionId"></a>

```python
def reset_version_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_s3_bucket_object

dataAwsS3BucketObject.DataAwsS3BucketObject.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_s3_bucket_object

dataAwsS3BucketObject.DataAwsS3BucketObject.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_s3_bucket_object

dataAwsS3BucketObject.DataAwsS3BucketObject.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.body">body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.bucketKeyEnabled">bucket_key_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.cacheControl">cache_control</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.contentDisposition">content_disposition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.contentEncoding">content_encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.contentLanguage">content_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.contentLength">content_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.expiration">expiration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.expires">expires</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.objectLockLegalHoldStatus">object_lock_legal_hold_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.objectLockMode">object_lock_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.objectLockRetainUntilDate">object_lock_retain_until_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.serverSideEncryption">server_side_encryption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.sseKmsKeyId">sse_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.websiteRedirectLocation">website_redirect_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.rangeInput">range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.versionIdInput">version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.range">range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.body"></a>

```python
body: str
```

- *Type:* str

---

##### `bucket_key_enabled`<sup>Required</sup> <a name="bucket_key_enabled" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.bucketKeyEnabled"></a>

```python
bucket_key_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `cache_control`<sup>Required</sup> <a name="cache_control" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.cacheControl"></a>

```python
cache_control: str
```

- *Type:* str

---

##### `content_disposition`<sup>Required</sup> <a name="content_disposition" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.contentDisposition"></a>

```python
content_disposition: str
```

- *Type:* str

---

##### `content_encoding`<sup>Required</sup> <a name="content_encoding" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.contentEncoding"></a>

```python
content_encoding: str
```

- *Type:* str

---

##### `content_language`<sup>Required</sup> <a name="content_language" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.contentLanguage"></a>

```python
content_language: str
```

- *Type:* str

---

##### `content_length`<sup>Required</sup> <a name="content_length" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.contentLength"></a>

```python
content_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.expiration"></a>

```python
expiration: str
```

- *Type:* str

---

##### `expires`<sup>Required</sup> <a name="expires" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.expires"></a>

```python
expires: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.metadata"></a>

```python
metadata: StringMap
```

- *Type:* cdktf.StringMap

---

##### `object_lock_legal_hold_status`<sup>Required</sup> <a name="object_lock_legal_hold_status" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.objectLockLegalHoldStatus"></a>

```python
object_lock_legal_hold_status: str
```

- *Type:* str

---

##### `object_lock_mode`<sup>Required</sup> <a name="object_lock_mode" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.objectLockMode"></a>

```python
object_lock_mode: str
```

- *Type:* str

---

##### `object_lock_retain_until_date`<sup>Required</sup> <a name="object_lock_retain_until_date" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.objectLockRetainUntilDate"></a>

```python
object_lock_retain_until_date: str
```

- *Type:* str

---

##### `server_side_encryption`<sup>Required</sup> <a name="server_side_encryption" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.serverSideEncryption"></a>

```python
server_side_encryption: str
```

- *Type:* str

---

##### `sse_kms_key_id`<sup>Required</sup> <a name="sse_kms_key_id" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.sseKmsKeyId"></a>

```python
sse_kms_key_id: str
```

- *Type:* str

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

##### `website_redirect_location`<sup>Required</sup> <a name="website_redirect_location" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.websiteRedirectLocation"></a>

```python
website_redirect_location: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `range_input`<sup>Optional</sup> <a name="range_input" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.rangeInput"></a>

```python
range_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `version_id_input`<sup>Optional</sup> <a name="version_id_input" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.versionIdInput"></a>

```python
version_id_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.range"></a>

```python
range: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsS3BucketObjectConfig <a name="DataAwsS3BucketObjectConfig" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_s3_bucket_object

dataAwsS3BucketObject.DataAwsS3BucketObjectConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  key: str,
  id: str = None,
  range: str = None,
  tags: typing.Mapping[str] = None,
  version_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object#bucket DataAwsS3BucketObject#bucket}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object#key DataAwsS3BucketObject#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object#id DataAwsS3BucketObject#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.range">range</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object#range DataAwsS3BucketObject#range}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object#tags DataAwsS3BucketObject#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.versionId">version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object#version_id DataAwsS3BucketObject#version_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object#bucket DataAwsS3BucketObject#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object#key DataAwsS3BucketObject#key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object#id DataAwsS3BucketObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.range"></a>

```python
range: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object#range DataAwsS3BucketObject#range}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object#tags DataAwsS3BucketObject#tags}.

---

##### `version_id`<sup>Optional</sup> <a name="version_id" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object#version_id DataAwsS3BucketObject#version_id}.

---



