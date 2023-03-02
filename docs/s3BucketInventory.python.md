# `s3BucketInventory` Submodule <a name="`s3BucketInventory` Submodule" id="@cdktf/provider-aws.s3BucketInventory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketInventory <a name="S3BucketInventory" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory aws_s3_bucket_inventory}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_inventory

s3BucketInventory.S3BucketInventory(
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
  destination: S3BucketInventoryDestination,
  included_object_versions: str,
  name: str,
  schedule: S3BucketInventorySchedule,
  enabled: typing.Union[bool, IResolvable] = None,
  filter: S3BucketInventoryFilter = None,
  id: str = None,
  optional_fields: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#bucket S3BucketInventory#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.destination">destination</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination">S3BucketInventoryDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.includedObjectVersions">included_object_versions</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#included_object_versions S3BucketInventory#included_object_versions}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#name S3BucketInventory#name}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule">S3BucketInventorySchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#enabled S3BucketInventory#enabled}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter">S3BucketInventoryFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#id S3BucketInventory#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.optionalFields">optional_fields</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#optional_fields S3BucketInventory#optional_fields}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#bucket S3BucketInventory#bucket}.

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.destination"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination">S3BucketInventoryDestination</a>

destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#destination S3BucketInventory#destination}

---

##### `included_object_versions`<sup>Required</sup> <a name="included_object_versions" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.includedObjectVersions"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#included_object_versions S3BucketInventory#included_object_versions}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#name S3BucketInventory#name}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule">S3BucketInventorySchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#schedule S3BucketInventory#schedule}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#enabled S3BucketInventory#enabled}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter">S3BucketInventoryFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#filter S3BucketInventory#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#id S3BucketInventory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `optional_fields`<sup>Optional</sup> <a name="optional_fields" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.optionalFields"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#optional_fields S3BucketInventory#optional_fields}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.putDestination">put_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetOptionalFields">reset_optional_fields</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_destination` <a name="put_destination" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.putDestination"></a>

```python
def put_destination(
  bucket: S3BucketInventoryDestinationBucket
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.putDestination.parameter.bucket"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket">S3BucketInventoryDestinationBucket</a>

bucket block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#bucket S3BucketInventory#bucket}

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.putFilter"></a>

```python
def put_filter(
  prefix: str = None
) -> None
```

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.putFilter.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#prefix S3BucketInventory#prefix}.

---

##### `put_schedule` <a name="put_schedule" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.putSchedule"></a>

```python
def put_schedule(
  frequency: str
) -> None
```

###### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.putSchedule.parameter.frequency"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#frequency S3BucketInventory#frequency}.

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_optional_fields` <a name="reset_optional_fields" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetOptionalFields"></a>

```python
def reset_optional_fields() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_inventory

s3BucketInventory.S3BucketInventory.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_inventory

s3BucketInventory.S3BucketInventory.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_inventory

s3BucketInventory.S3BucketInventory.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference">S3BucketInventoryDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference">S3BucketInventoryFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference">S3BucketInventoryScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.destinationInput">destination_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination">S3BucketInventoryDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.filterInput">filter_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter">S3BucketInventoryFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.includedObjectVersionsInput">included_object_versions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.optionalFieldsInput">optional_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.scheduleInput">schedule_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule">S3BucketInventorySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.includedObjectVersions">included_object_versions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.optionalFields">optional_fields</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.destination"></a>

```python
destination: S3BucketInventoryDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference">S3BucketInventoryDestinationOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.filter"></a>

```python
filter: S3BucketInventoryFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference">S3BucketInventoryFilterOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.schedule"></a>

```python
schedule: S3BucketInventoryScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference">S3BucketInventoryScheduleOutputReference</a>

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.destinationInput"></a>

```python
destination_input: S3BucketInventoryDestination
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination">S3BucketInventoryDestination</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.filterInput"></a>

```python
filter_input: S3BucketInventoryFilter
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter">S3BucketInventoryFilter</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `included_object_versions_input`<sup>Optional</sup> <a name="included_object_versions_input" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.includedObjectVersionsInput"></a>

```python
included_object_versions_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `optional_fields_input`<sup>Optional</sup> <a name="optional_fields_input" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.optionalFieldsInput"></a>

```python
optional_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.scheduleInput"></a>

```python
schedule_input: S3BucketInventorySchedule
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule">S3BucketInventorySchedule</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `included_object_versions`<sup>Required</sup> <a name="included_object_versions" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.includedObjectVersions"></a>

```python
included_object_versions: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `optional_fields`<sup>Required</sup> <a name="optional_fields" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.optionalFields"></a>

```python
optional_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketInventoryConfig <a name="S3BucketInventoryConfig" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_inventory

s3BucketInventory.S3BucketInventoryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  destination: S3BucketInventoryDestination,
  included_object_versions: str,
  name: str,
  schedule: S3BucketInventorySchedule,
  enabled: typing.Union[bool, IResolvable] = None,
  filter: S3BucketInventoryFilter = None,
  id: str = None,
  optional_fields: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#bucket S3BucketInventory#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination">S3BucketInventoryDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.includedObjectVersions">included_object_versions</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#included_object_versions S3BucketInventory#included_object_versions}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#name S3BucketInventory#name}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule">S3BucketInventorySchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#enabled S3BucketInventory#enabled}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter">S3BucketInventoryFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#id S3BucketInventory#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.optionalFields">optional_fields</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#optional_fields S3BucketInventory#optional_fields}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#bucket S3BucketInventory#bucket}.

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.destination"></a>

```python
destination: S3BucketInventoryDestination
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination">S3BucketInventoryDestination</a>

destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#destination S3BucketInventory#destination}

---

##### `included_object_versions`<sup>Required</sup> <a name="included_object_versions" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.includedObjectVersions"></a>

```python
included_object_versions: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#included_object_versions S3BucketInventory#included_object_versions}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#name S3BucketInventory#name}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.schedule"></a>

```python
schedule: S3BucketInventorySchedule
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule">S3BucketInventorySchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#schedule S3BucketInventory#schedule}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#enabled S3BucketInventory#enabled}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.filter"></a>

```python
filter: S3BucketInventoryFilter
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter">S3BucketInventoryFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#filter S3BucketInventory#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#id S3BucketInventory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `optional_fields`<sup>Optional</sup> <a name="optional_fields" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.optionalFields"></a>

```python
optional_fields: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#optional_fields S3BucketInventory#optional_fields}.

---

### S3BucketInventoryDestination <a name="S3BucketInventoryDestination" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_inventory

s3BucketInventory.S3BucketInventoryDestination(
  bucket: S3BucketInventoryDestinationBucket
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination.property.bucket">bucket</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket">S3BucketInventoryDestinationBucket</a></code> | bucket block. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination.property.bucket"></a>

```python
bucket: S3BucketInventoryDestinationBucket
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket">S3BucketInventoryDestinationBucket</a>

bucket block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#bucket S3BucketInventory#bucket}

---

### S3BucketInventoryDestinationBucket <a name="S3BucketInventoryDestinationBucket" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_inventory

s3BucketInventory.S3BucketInventoryDestinationBucket(
  bucket_arn: str,
  format: str,
  account_id: str = None,
  encryption: S3BucketInventoryDestinationBucketEncryption = None,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.bucketArn">bucket_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#bucket_arn S3BucketInventory#bucket_arn}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.format">format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#format S3BucketInventory#format}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#account_id S3BucketInventory#account_id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption">S3BucketInventoryDestinationBucketEncryption</a></code> | encryption block. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#prefix S3BucketInventory#prefix}. |

---

##### `bucket_arn`<sup>Required</sup> <a name="bucket_arn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#bucket_arn S3BucketInventory#bucket_arn}.

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.format"></a>

```python
format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#format S3BucketInventory#format}.

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#account_id S3BucketInventory#account_id}.

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.encryption"></a>

```python
encryption: S3BucketInventoryDestinationBucketEncryption
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption">S3BucketInventoryDestinationBucketEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#encryption S3BucketInventory#encryption}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#prefix S3BucketInventory#prefix}.

---

### S3BucketInventoryDestinationBucketEncryption <a name="S3BucketInventoryDestinationBucketEncryption" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_inventory

s3BucketInventory.S3BucketInventoryDestinationBucketEncryption(
  sse_kms: S3BucketInventoryDestinationBucketEncryptionSseKms = None,
  sse_s3: S3BucketInventoryDestinationBucketEncryptionSseS3 = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption.property.sseKms">sse_kms</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms">S3BucketInventoryDestinationBucketEncryptionSseKms</a></code> | sse_kms block. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption.property.sseS3">sse_s3</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3">S3BucketInventoryDestinationBucketEncryptionSseS3</a></code> | sse_s3 block. |

---

##### `sse_kms`<sup>Optional</sup> <a name="sse_kms" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption.property.sseKms"></a>

```python
sse_kms: S3BucketInventoryDestinationBucketEncryptionSseKms
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms">S3BucketInventoryDestinationBucketEncryptionSseKms</a>

sse_kms block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#sse_kms S3BucketInventory#sse_kms}

---

##### `sse_s3`<sup>Optional</sup> <a name="sse_s3" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption.property.sseS3"></a>

```python
sse_s3: S3BucketInventoryDestinationBucketEncryptionSseS3
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3">S3BucketInventoryDestinationBucketEncryptionSseS3</a>

sse_s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#sse_s3 S3BucketInventory#sse_s3}

---

### S3BucketInventoryDestinationBucketEncryptionSseKms <a name="S3BucketInventoryDestinationBucketEncryptionSseKms" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_inventory

s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms(
  key_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms.property.keyId">key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#key_id S3BucketInventory#key_id}. |

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#key_id S3BucketInventory#key_id}.

---

### S3BucketInventoryDestinationBucketEncryptionSseS3 <a name="S3BucketInventoryDestinationBucketEncryptionSseS3" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_inventory

s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3()
```


### S3BucketInventoryFilter <a name="S3BucketInventoryFilter" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_inventory

s3BucketInventory.S3BucketInventoryFilter(
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#prefix S3BucketInventory#prefix}. |

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#prefix S3BucketInventory#prefix}.

---

### S3BucketInventorySchedule <a name="S3BucketInventorySchedule" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_inventory

s3BucketInventory.S3BucketInventorySchedule(
  frequency: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule.property.frequency">frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#frequency S3BucketInventory#frequency}. |

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#frequency S3BucketInventory#frequency}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketInventoryDestinationBucketEncryptionOutputReference <a name="S3BucketInventoryDestinationBucketEncryptionOutputReference" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_inventory

s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.putSseKms">put_sse_kms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.putSseS3">put_sse_s3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.resetSseKms">reset_sse_kms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.resetSseS3">reset_sse_s3</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_sse_kms` <a name="put_sse_kms" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.putSseKms"></a>

```python
def put_sse_kms(
  key_id: str
) -> None
```

###### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.putSseKms.parameter.keyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#key_id S3BucketInventory#key_id}.

---

##### `put_sse_s3` <a name="put_sse_s3" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.putSseS3"></a>

```python
def put_sse_s3() -> None
```

##### `reset_sse_kms` <a name="reset_sse_kms" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.resetSseKms"></a>

```python
def reset_sse_kms() -> None
```

##### `reset_sse_s3` <a name="reset_sse_s3" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.resetSseS3"></a>

```python
def reset_sse_s3() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.sseKms">sse_kms</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference">S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.sseS3">sse_s3</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference">S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.sseKmsInput">sse_kms_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms">S3BucketInventoryDestinationBucketEncryptionSseKms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.sseS3Input">sse_s3_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3">S3BucketInventoryDestinationBucketEncryptionSseS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption">S3BucketInventoryDestinationBucketEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sse_kms`<sup>Required</sup> <a name="sse_kms" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.sseKms"></a>

```python
sse_kms: S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference">S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference</a>

---

##### `sse_s3`<sup>Required</sup> <a name="sse_s3" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.sseS3"></a>

```python
sse_s3: S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference">S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference</a>

---

##### `sse_kms_input`<sup>Optional</sup> <a name="sse_kms_input" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.sseKmsInput"></a>

```python
sse_kms_input: S3BucketInventoryDestinationBucketEncryptionSseKms
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms">S3BucketInventoryDestinationBucketEncryptionSseKms</a>

---

##### `sse_s3_input`<sup>Optional</sup> <a name="sse_s3_input" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.sseS3Input"></a>

```python
sse_s3_input: S3BucketInventoryDestinationBucketEncryptionSseS3
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3">S3BucketInventoryDestinationBucketEncryptionSseS3</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketInventoryDestinationBucketEncryption
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption">S3BucketInventoryDestinationBucketEncryption</a>

---


### S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference <a name="S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_inventory

s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.keyIdInput">key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms">S3BucketInventoryDestinationBucketEncryptionSseKms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_id_input`<sup>Optional</sup> <a name="key_id_input" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.keyIdInput"></a>

```python
key_id_input: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketInventoryDestinationBucketEncryptionSseKms
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms">S3BucketInventoryDestinationBucketEncryptionSseKms</a>

---


### S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference <a name="S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_inventory

s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3">S3BucketInventoryDestinationBucketEncryptionSseS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.property.internalValue"></a>

```python
internal_value: S3BucketInventoryDestinationBucketEncryptionSseS3
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3">S3BucketInventoryDestinationBucketEncryptionSseS3</a>

---


### S3BucketInventoryDestinationBucketOutputReference <a name="S3BucketInventoryDestinationBucketOutputReference" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_inventory

s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.putEncryption">put_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.resetEncryption">reset_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_encryption` <a name="put_encryption" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.putEncryption"></a>

```python
def put_encryption(
  sse_kms: S3BucketInventoryDestinationBucketEncryptionSseKms = None,
  sse_s3: S3BucketInventoryDestinationBucketEncryptionSseS3 = None
) -> None
```

###### `sse_kms`<sup>Optional</sup> <a name="sse_kms" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.putEncryption.parameter.sseKms"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms">S3BucketInventoryDestinationBucketEncryptionSseKms</a>

sse_kms block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#sse_kms S3BucketInventory#sse_kms}

---

###### `sse_s3`<sup>Optional</sup> <a name="sse_s3" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.putEncryption.parameter.sseS3"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3">S3BucketInventoryDestinationBucketEncryptionSseS3</a>

sse_s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#sse_s3 S3BucketInventory#sse_s3}

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_encryption` <a name="reset_encryption" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.resetEncryption"></a>

```python
def reset_encryption() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference">S3BucketInventoryDestinationBucketEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.bucketArnInput">bucket_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.encryptionInput">encryption_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption">S3BucketInventoryDestinationBucketEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.bucketArn">bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket">S3BucketInventoryDestinationBucket</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.encryption"></a>

```python
encryption: S3BucketInventoryDestinationBucketEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference">S3BucketInventoryDestinationBucketEncryptionOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `bucket_arn_input`<sup>Optional</sup> <a name="bucket_arn_input" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.bucketArnInput"></a>

```python
bucket_arn_input: str
```

- *Type:* str

---

##### `encryption_input`<sup>Optional</sup> <a name="encryption_input" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.encryptionInput"></a>

```python
encryption_input: S3BucketInventoryDestinationBucketEncryption
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption">S3BucketInventoryDestinationBucketEncryption</a>

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `bucket_arn`<sup>Required</sup> <a name="bucket_arn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketInventoryDestinationBucket
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket">S3BucketInventoryDestinationBucket</a>

---


### S3BucketInventoryDestinationOutputReference <a name="S3BucketInventoryDestinationOutputReference" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_inventory

s3BucketInventory.S3BucketInventoryDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.putBucket">put_bucket</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_bucket` <a name="put_bucket" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.putBucket"></a>

```python
def put_bucket(
  bucket_arn: str,
  format: str,
  account_id: str = None,
  encryption: S3BucketInventoryDestinationBucketEncryption = None,
  prefix: str = None
) -> None
```

###### `bucket_arn`<sup>Required</sup> <a name="bucket_arn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.putBucket.parameter.bucketArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#bucket_arn S3BucketInventory#bucket_arn}.

---

###### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.putBucket.parameter.format"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#format S3BucketInventory#format}.

---

###### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.putBucket.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#account_id S3BucketInventory#account_id}.

---

###### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.putBucket.parameter.encryption"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption">S3BucketInventoryDestinationBucketEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#encryption S3BucketInventory#encryption}

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.putBucket.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#prefix S3BucketInventory#prefix}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.bucket">bucket</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference">S3BucketInventoryDestinationBucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.bucketInput">bucket_input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket">S3BucketInventoryDestinationBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination">S3BucketInventoryDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.bucket"></a>

```python
bucket: S3BucketInventoryDestinationBucketOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference">S3BucketInventoryDestinationBucketOutputReference</a>

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.bucketInput"></a>

```python
bucket_input: S3BucketInventoryDestinationBucket
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket">S3BucketInventoryDestinationBucket</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketInventoryDestination
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination">S3BucketInventoryDestination</a>

---


### S3BucketInventoryFilterOutputReference <a name="S3BucketInventoryFilterOutputReference" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_inventory

s3BucketInventory.S3BucketInventoryFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter">S3BucketInventoryFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketInventoryFilter
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter">S3BucketInventoryFilter</a>

---


### S3BucketInventoryScheduleOutputReference <a name="S3BucketInventoryScheduleOutputReference" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_inventory

s3BucketInventory.S3BucketInventoryScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.frequencyInput">frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.frequency">frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule">S3BucketInventorySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `frequency_input`<sup>Optional</sup> <a name="frequency_input" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.frequencyInput"></a>

```python
frequency_input: str
```

- *Type:* str

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketInventorySchedule
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule">S3BucketInventorySchedule</a>

---



