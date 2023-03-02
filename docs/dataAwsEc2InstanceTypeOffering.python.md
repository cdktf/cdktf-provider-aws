# `dataAwsEc2InstanceTypeOffering` Submodule <a name="`dataAwsEc2InstanceTypeOffering` Submodule" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2InstanceTypeOffering <a name="DataAwsEc2InstanceTypeOffering" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering aws_ec2_instance_type_offering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type_offering

dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsEc2InstanceTypeOfferingFilter]] = None,
  id: str = None,
  location_type: str = None,
  preferred_instance_types: typing.List[str] = None,
  timeouts: DataAwsEc2InstanceTypeOfferingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilter">DataAwsEc2InstanceTypeOfferingFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#id DataAwsEc2InstanceTypeOffering#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.locationType">location_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#location_type DataAwsEc2InstanceTypeOffering#location_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.preferredInstanceTypes">preferred_instance_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#preferred_instance_types DataAwsEc2InstanceTypeOffering#preferred_instance_types}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeouts">DataAwsEc2InstanceTypeOfferingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilter">DataAwsEc2InstanceTypeOfferingFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#filter DataAwsEc2InstanceTypeOffering#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#id DataAwsEc2InstanceTypeOffering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location_type`<sup>Optional</sup> <a name="location_type" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.locationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#location_type DataAwsEc2InstanceTypeOffering#location_type}.

---

##### `preferred_instance_types`<sup>Optional</sup> <a name="preferred_instance_types" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.preferredInstanceTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#preferred_instance_types DataAwsEc2InstanceTypeOffering#preferred_instance_types}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeouts">DataAwsEc2InstanceTypeOfferingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#timeouts DataAwsEc2InstanceTypeOffering#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.resetLocationType">reset_location_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.resetPreferredInstanceTypes">reset_preferred_instance_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataAwsEc2InstanceTypeOfferingFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilter">DataAwsEc2InstanceTypeOfferingFilter</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#read DataAwsEc2InstanceTypeOffering#read}.

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location_type` <a name="reset_location_type" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.resetLocationType"></a>

```python
def reset_location_type() -> None
```

##### `reset_preferred_instance_types` <a name="reset_preferred_instance_types" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.resetPreferredInstanceTypes"></a>

```python
def reset_preferred_instance_types() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type_offering

dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type_offering

dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type_offering

dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList">DataAwsEc2InstanceTypeOfferingFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference">DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilter">DataAwsEc2InstanceTypeOfferingFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.locationTypeInput">location_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.preferredInstanceTypesInput">preferred_instance_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeouts">DataAwsEc2InstanceTypeOfferingTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.locationType">location_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.preferredInstanceTypes">preferred_instance_types</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.filter"></a>

```python
filter: DataAwsEc2InstanceTypeOfferingFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList">DataAwsEc2InstanceTypeOfferingFilterList</a>

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.timeouts"></a>

```python
timeouts: DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference">DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataAwsEc2InstanceTypeOfferingFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilter">DataAwsEc2InstanceTypeOfferingFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_type_input`<sup>Optional</sup> <a name="location_type_input" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.locationTypeInput"></a>

```python
location_type_input: str
```

- *Type:* str

---

##### `preferred_instance_types_input`<sup>Optional</sup> <a name="preferred_instance_types_input" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.preferredInstanceTypesInput"></a>

```python
preferred_instance_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataAwsEc2InstanceTypeOfferingTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeouts">DataAwsEc2InstanceTypeOfferingTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location_type`<sup>Required</sup> <a name="location_type" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.locationType"></a>

```python
location_type: str
```

- *Type:* str

---

##### `preferred_instance_types`<sup>Required</sup> <a name="preferred_instance_types" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.preferredInstanceTypes"></a>

```python
preferred_instance_types: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2InstanceTypeOfferingConfig <a name="DataAwsEc2InstanceTypeOfferingConfig" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type_offering

dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsEc2InstanceTypeOfferingFilter]] = None,
  id: str = None,
  location_type: str = None,
  preferred_instance_types: typing.List[str] = None,
  timeouts: DataAwsEc2InstanceTypeOfferingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilter">DataAwsEc2InstanceTypeOfferingFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#id DataAwsEc2InstanceTypeOffering#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.locationType">location_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#location_type DataAwsEc2InstanceTypeOffering#location_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.preferredInstanceTypes">preferred_instance_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#preferred_instance_types DataAwsEc2InstanceTypeOffering#preferred_instance_types}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeouts">DataAwsEc2InstanceTypeOfferingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataAwsEc2InstanceTypeOfferingFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilter">DataAwsEc2InstanceTypeOfferingFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#filter DataAwsEc2InstanceTypeOffering#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#id DataAwsEc2InstanceTypeOffering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location_type`<sup>Optional</sup> <a name="location_type" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.locationType"></a>

```python
location_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#location_type DataAwsEc2InstanceTypeOffering#location_type}.

---

##### `preferred_instance_types`<sup>Optional</sup> <a name="preferred_instance_types" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.preferredInstanceTypes"></a>

```python
preferred_instance_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#preferred_instance_types DataAwsEc2InstanceTypeOffering#preferred_instance_types}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.timeouts"></a>

```python
timeouts: DataAwsEc2InstanceTypeOfferingTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeouts">DataAwsEc2InstanceTypeOfferingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#timeouts DataAwsEc2InstanceTypeOffering#timeouts}

---

### DataAwsEc2InstanceTypeOfferingFilter <a name="DataAwsEc2InstanceTypeOfferingFilter" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type_offering

dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilter(
  name: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#name DataAwsEc2InstanceTypeOffering#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#values DataAwsEc2InstanceTypeOffering#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#name DataAwsEc2InstanceTypeOffering#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#values DataAwsEc2InstanceTypeOffering#values}.

---

### DataAwsEc2InstanceTypeOfferingTimeouts <a name="DataAwsEc2InstanceTypeOfferingTimeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type_offering

dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#read DataAwsEc2InstanceTypeOffering#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#read DataAwsEc2InstanceTypeOffering#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2InstanceTypeOfferingFilterList <a name="DataAwsEc2InstanceTypeOfferingFilterList" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type_offering

dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEc2InstanceTypeOfferingFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilter">DataAwsEc2InstanceTypeOfferingFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsEc2InstanceTypeOfferingFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilter">DataAwsEc2InstanceTypeOfferingFilter</a>]]

---


### DataAwsEc2InstanceTypeOfferingFilterOutputReference <a name="DataAwsEc2InstanceTypeOfferingFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type_offering

dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilter">DataAwsEc2InstanceTypeOfferingFilter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsEc2InstanceTypeOfferingFilter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilter">DataAwsEc2InstanceTypeOfferingFilter</a>, cdktf.IResolvable]

---


### DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference <a name="DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type_offering

dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeouts">DataAwsEc2InstanceTypeOfferingTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsEc2InstanceTypeOfferingTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeouts">DataAwsEc2InstanceTypeOfferingTimeouts</a>, cdktf.IResolvable]

---



