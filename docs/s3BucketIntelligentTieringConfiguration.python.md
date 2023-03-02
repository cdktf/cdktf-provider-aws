# `s3BucketIntelligentTieringConfiguration` Submodule <a name="`s3BucketIntelligentTieringConfiguration` Submodule" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketIntelligentTieringConfiguration <a name="S3BucketIntelligentTieringConfiguration" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration aws_s3_bucket_intelligent_tiering_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_intelligent_tiering_configuration

s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration(
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
  name: str,
  tiering: typing.Union[IResolvable, typing.List[S3BucketIntelligentTieringConfigurationTiering]],
  filter: S3BucketIntelligentTieringConfigurationFilter = None,
  id: str = None,
  status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#bucket S3BucketIntelligentTieringConfiguration#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#name S3BucketIntelligentTieringConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.tiering">tiering</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering">S3BucketIntelligentTieringConfigurationTiering</a>]]</code> | tiering block. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter">S3BucketIntelligentTieringConfigurationFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#id S3BucketIntelligentTieringConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#status S3BucketIntelligentTieringConfiguration#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#bucket S3BucketIntelligentTieringConfiguration#bucket}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#name S3BucketIntelligentTieringConfiguration#name}.

---

##### `tiering`<sup>Required</sup> <a name="tiering" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.tiering"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering">S3BucketIntelligentTieringConfigurationTiering</a>]]

tiering block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#tiering S3BucketIntelligentTieringConfiguration#tiering}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter">S3BucketIntelligentTieringConfigurationFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#filter S3BucketIntelligentTieringConfiguration#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#id S3BucketIntelligentTieringConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#status S3BucketIntelligentTieringConfiguration#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.putTiering">put_tiering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.putFilter"></a>

```python
def put_filter(
  prefix: str = None,
  tags: typing.Mapping[str] = None
) -> None
```

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.putFilter.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#prefix S3BucketIntelligentTieringConfiguration#prefix}.

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.putFilter.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#tags S3BucketIntelligentTieringConfiguration#tags}.

---

##### `put_tiering` <a name="put_tiering" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.putTiering"></a>

```python
def put_tiering(
  value: typing.Union[IResolvable, typing.List[S3BucketIntelligentTieringConfigurationTiering]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.putTiering.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering">S3BucketIntelligentTieringConfigurationTiering</a>]]

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_intelligent_tiering_configuration

s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_intelligent_tiering_configuration

s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_intelligent_tiering_configuration

s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference">S3BucketIntelligentTieringConfigurationFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.tiering">tiering</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList">S3BucketIntelligentTieringConfigurationTieringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.filterInput">filter_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter">S3BucketIntelligentTieringConfigurationFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.tieringInput">tiering_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering">S3BucketIntelligentTieringConfigurationTiering</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.filter"></a>

```python
filter: S3BucketIntelligentTieringConfigurationFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference">S3BucketIntelligentTieringConfigurationFilterOutputReference</a>

---

##### `tiering`<sup>Required</sup> <a name="tiering" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.tiering"></a>

```python
tiering: S3BucketIntelligentTieringConfigurationTieringList
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList">S3BucketIntelligentTieringConfigurationTieringList</a>

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.filterInput"></a>

```python
filter_input: S3BucketIntelligentTieringConfigurationFilter
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter">S3BucketIntelligentTieringConfigurationFilter</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tiering_input`<sup>Optional</sup> <a name="tiering_input" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.tieringInput"></a>

```python
tiering_input: typing.Union[IResolvable, typing.List[S3BucketIntelligentTieringConfigurationTiering]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering">S3BucketIntelligentTieringConfigurationTiering</a>]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketIntelligentTieringConfigurationConfig <a name="S3BucketIntelligentTieringConfigurationConfig" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_intelligent_tiering_configuration

s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  name: str,
  tiering: typing.Union[IResolvable, typing.List[S3BucketIntelligentTieringConfigurationTiering]],
  filter: S3BucketIntelligentTieringConfigurationFilter = None,
  id: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#bucket S3BucketIntelligentTieringConfiguration#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#name S3BucketIntelligentTieringConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.tiering">tiering</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering">S3BucketIntelligentTieringConfigurationTiering</a>]]</code> | tiering block. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter">S3BucketIntelligentTieringConfigurationFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#id S3BucketIntelligentTieringConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#status S3BucketIntelligentTieringConfiguration#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#bucket S3BucketIntelligentTieringConfiguration#bucket}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#name S3BucketIntelligentTieringConfiguration#name}.

---

##### `tiering`<sup>Required</sup> <a name="tiering" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.tiering"></a>

```python
tiering: typing.Union[IResolvable, typing.List[S3BucketIntelligentTieringConfigurationTiering]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering">S3BucketIntelligentTieringConfigurationTiering</a>]]

tiering block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#tiering S3BucketIntelligentTieringConfiguration#tiering}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.filter"></a>

```python
filter: S3BucketIntelligentTieringConfigurationFilter
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter">S3BucketIntelligentTieringConfigurationFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#filter S3BucketIntelligentTieringConfiguration#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#id S3BucketIntelligentTieringConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#status S3BucketIntelligentTieringConfiguration#status}.

---

### S3BucketIntelligentTieringConfigurationFilter <a name="S3BucketIntelligentTieringConfigurationFilter" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_intelligent_tiering_configuration

s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter(
  prefix: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#prefix S3BucketIntelligentTieringConfiguration#prefix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#tags S3BucketIntelligentTieringConfiguration#tags}. |

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#prefix S3BucketIntelligentTieringConfiguration#prefix}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#tags S3BucketIntelligentTieringConfiguration#tags}.

---

### S3BucketIntelligentTieringConfigurationTiering <a name="S3BucketIntelligentTieringConfigurationTiering" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_intelligent_tiering_configuration

s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering(
  access_tier: str,
  days: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering.property.accessTier">access_tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#access_tier S3BucketIntelligentTieringConfiguration#access_tier}. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering.property.days">days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#days S3BucketIntelligentTieringConfiguration#days}. |

---

##### `access_tier`<sup>Required</sup> <a name="access_tier" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering.property.accessTier"></a>

```python
access_tier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#access_tier S3BucketIntelligentTieringConfiguration#access_tier}.

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration#days S3BucketIntelligentTieringConfiguration#days}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketIntelligentTieringConfigurationFilterOutputReference <a name="S3BucketIntelligentTieringConfigurationFilterOutputReference" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_intelligent_tiering_configuration

s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter">S3BucketIntelligentTieringConfigurationFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilterOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketIntelligentTieringConfigurationFilter
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationFilter">S3BucketIntelligentTieringConfigurationFilter</a>

---


### S3BucketIntelligentTieringConfigurationTieringList <a name="S3BucketIntelligentTieringConfigurationTieringList" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_intelligent_tiering_configuration

s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3BucketIntelligentTieringConfigurationTieringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering">S3BucketIntelligentTieringConfigurationTiering</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[S3BucketIntelligentTieringConfigurationTiering]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering">S3BucketIntelligentTieringConfigurationTiering</a>]]

---


### S3BucketIntelligentTieringConfigurationTieringOutputReference <a name="S3BucketIntelligentTieringConfigurationTieringOutputReference" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_intelligent_tiering_configuration

s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.accessTierInput">access_tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.daysInput">days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.accessTier">access_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.days">days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering">S3BucketIntelligentTieringConfigurationTiering</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_tier_input`<sup>Optional</sup> <a name="access_tier_input" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.accessTierInput"></a>

```python
access_tier_input: str
```

- *Type:* str

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.daysInput"></a>

```python
days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `access_tier`<sup>Required</sup> <a name="access_tier" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.accessTier"></a>

```python
access_tier: str
```

- *Type:* str

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTieringOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[S3BucketIntelligentTieringConfigurationTiering, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.s3BucketIntelligentTieringConfiguration.S3BucketIntelligentTieringConfigurationTiering">S3BucketIntelligentTieringConfigurationTiering</a>, cdktf.IResolvable]

---



