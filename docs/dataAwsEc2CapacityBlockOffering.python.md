# `dataAwsEc2CapacityBlockOffering` Submodule <a name="`dataAwsEc2CapacityBlockOffering` Submodule" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2CapacityBlockOffering <a name="DataAwsEc2CapacityBlockOffering" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/ec2_capacity_block_offering aws_ec2_capacity_block_offering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_capacity_block_offering

dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  capacity_duration_hours: typing.Union[int, float],
  instance_count: typing.Union[int, float],
  instance_type: str,
  end_date_range: str = None,
  start_date_range: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.capacityDurationHours">capacity_duration_hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/ec2_capacity_block_offering#capacity_duration_hours DataAwsEc2CapacityBlockOffering#capacity_duration_hours}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/ec2_capacity_block_offering#instance_count DataAwsEc2CapacityBlockOffering#instance_count}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/ec2_capacity_block_offering#instance_type DataAwsEc2CapacityBlockOffering#instance_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.endDateRange">end_date_range</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/ec2_capacity_block_offering#end_date_range DataAwsEc2CapacityBlockOffering#end_date_range}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.startDateRange">start_date_range</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/ec2_capacity_block_offering#start_date_range DataAwsEc2CapacityBlockOffering#start_date_range}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `capacity_duration_hours`<sup>Required</sup> <a name="capacity_duration_hours" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.capacityDurationHours"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/ec2_capacity_block_offering#capacity_duration_hours DataAwsEc2CapacityBlockOffering#capacity_duration_hours}.

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.instanceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/ec2_capacity_block_offering#instance_count DataAwsEc2CapacityBlockOffering#instance_count}.

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.instanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/ec2_capacity_block_offering#instance_type DataAwsEc2CapacityBlockOffering#instance_type}.

---

##### `end_date_range`<sup>Optional</sup> <a name="end_date_range" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.endDateRange"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/ec2_capacity_block_offering#end_date_range DataAwsEc2CapacityBlockOffering#end_date_range}.

---

##### `start_date_range`<sup>Optional</sup> <a name="start_date_range" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.startDateRange"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/ec2_capacity_block_offering#start_date_range DataAwsEc2CapacityBlockOffering#start_date_range}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.resetEndDateRange">reset_end_date_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.resetStartDateRange">reset_start_date_range</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_end_date_range` <a name="reset_end_date_range" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.resetEndDateRange"></a>

```python
def reset_end_date_range() -> None
```

##### `reset_start_date_range` <a name="reset_start_date_range" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.resetStartDateRange"></a>

```python
def reset_start_date_range() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsEc2CapacityBlockOffering resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_capacity_block_offering

dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_capacity_block_offering

dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_capacity_block_offering

dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_capacity_block_offering

dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsEc2CapacityBlockOffering resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsEc2CapacityBlockOffering to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsEc2CapacityBlockOffering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/ec2_capacity_block_offering#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsEc2CapacityBlockOffering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.capacityBlockOfferingId">capacity_block_offering_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.currencyCode">currency_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.tenancy">tenancy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.upfrontFee">upfront_fee</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.capacityDurationHoursInput">capacity_duration_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.endDateRangeInput">end_date_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceCountInput">instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.startDateRangeInput">start_date_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.capacityDurationHours">capacity_duration_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.endDateRange">end_date_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.startDateRange">start_date_range</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `capacity_block_offering_id`<sup>Required</sup> <a name="capacity_block_offering_id" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.capacityBlockOfferingId"></a>

```python
capacity_block_offering_id: str
```

- *Type:* str

---

##### `currency_code`<sup>Required</sup> <a name="currency_code" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.currencyCode"></a>

```python
currency_code: str
```

- *Type:* str

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.tenancy"></a>

```python
tenancy: str
```

- *Type:* str

---

##### `upfront_fee`<sup>Required</sup> <a name="upfront_fee" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.upfrontFee"></a>

```python
upfront_fee: str
```

- *Type:* str

---

##### `capacity_duration_hours_input`<sup>Optional</sup> <a name="capacity_duration_hours_input" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.capacityDurationHoursInput"></a>

```python
capacity_duration_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_date_range_input`<sup>Optional</sup> <a name="end_date_range_input" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.endDateRangeInput"></a>

```python
end_date_range_input: str
```

- *Type:* str

---

##### `instance_count_input`<sup>Optional</sup> <a name="instance_count_input" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceCountInput"></a>

```python
instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `start_date_range_input`<sup>Optional</sup> <a name="start_date_range_input" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.startDateRangeInput"></a>

```python
start_date_range_input: str
```

- *Type:* str

---

##### `capacity_duration_hours`<sup>Required</sup> <a name="capacity_duration_hours" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.capacityDurationHours"></a>

```python
capacity_duration_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_date_range`<sup>Required</sup> <a name="end_date_range" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.endDateRange"></a>

```python
end_date_range: str
```

- *Type:* str

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `start_date_range`<sup>Required</sup> <a name="start_date_range" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.startDateRange"></a>

```python
start_date_range: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2CapacityBlockOfferingConfig <a name="DataAwsEc2CapacityBlockOfferingConfig" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_capacity_block_offering

dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  capacity_duration_hours: typing.Union[int, float],
  instance_count: typing.Union[int, float],
  instance_type: str,
  end_date_range: str = None,
  start_date_range: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.capacityDurationHours">capacity_duration_hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/ec2_capacity_block_offering#capacity_duration_hours DataAwsEc2CapacityBlockOffering#capacity_duration_hours}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/ec2_capacity_block_offering#instance_count DataAwsEc2CapacityBlockOffering#instance_count}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/ec2_capacity_block_offering#instance_type DataAwsEc2CapacityBlockOffering#instance_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.endDateRange">end_date_range</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/ec2_capacity_block_offering#end_date_range DataAwsEc2CapacityBlockOffering#end_date_range}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.startDateRange">start_date_range</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/ec2_capacity_block_offering#start_date_range DataAwsEc2CapacityBlockOffering#start_date_range}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `capacity_duration_hours`<sup>Required</sup> <a name="capacity_duration_hours" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.capacityDurationHours"></a>

```python
capacity_duration_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/ec2_capacity_block_offering#capacity_duration_hours DataAwsEc2CapacityBlockOffering#capacity_duration_hours}.

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/ec2_capacity_block_offering#instance_count DataAwsEc2CapacityBlockOffering#instance_count}.

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/ec2_capacity_block_offering#instance_type DataAwsEc2CapacityBlockOffering#instance_type}.

---

##### `end_date_range`<sup>Optional</sup> <a name="end_date_range" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.endDateRange"></a>

```python
end_date_range: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/ec2_capacity_block_offering#end_date_range DataAwsEc2CapacityBlockOffering#end_date_range}.

---

##### `start_date_range`<sup>Optional</sup> <a name="start_date_range" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.startDateRange"></a>

```python
start_date_range: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/ec2_capacity_block_offering#start_date_range DataAwsEc2CapacityBlockOffering#start_date_range}.

---



