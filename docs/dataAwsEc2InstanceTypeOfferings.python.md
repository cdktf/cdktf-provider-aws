# `dataAwsEc2InstanceTypeOfferings` Submodule <a name="`dataAwsEc2InstanceTypeOfferings` Submodule" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2InstanceTypeOfferings <a name="DataAwsEc2InstanceTypeOfferings" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings aws_ec2_instance_type_offerings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type_offerings

dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsEc2InstanceTypeOfferingsFilter]] = None,
  id: str = None,
  location_type: str = None,
  timeouts: DataAwsEc2InstanceTypeOfferingsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter">DataAwsEc2InstanceTypeOfferingsFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#id DataAwsEc2InstanceTypeOfferings#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.locationType">location_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#location_type DataAwsEc2InstanceTypeOfferings#location_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeouts">DataAwsEc2InstanceTypeOfferingsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter">DataAwsEc2InstanceTypeOfferingsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#filter DataAwsEc2InstanceTypeOfferings#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#id DataAwsEc2InstanceTypeOfferings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location_type`<sup>Optional</sup> <a name="location_type" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.locationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#location_type DataAwsEc2InstanceTypeOfferings#location_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeouts">DataAwsEc2InstanceTypeOfferingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#timeouts DataAwsEc2InstanceTypeOfferings#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.resetLocationType">reset_location_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataAwsEc2InstanceTypeOfferingsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter">DataAwsEc2InstanceTypeOfferingsFilter</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#read DataAwsEc2InstanceTypeOfferings#read}.

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location_type` <a name="reset_location_type" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.resetLocationType"></a>

```python
def reset_location_type() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type_offerings

dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type_offerings

dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type_offerings

dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList">DataAwsEc2InstanceTypeOfferingsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.instanceTypes">instance_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.locations">locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.locationTypes">location_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference">DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter">DataAwsEc2InstanceTypeOfferingsFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.locationTypeInput">location_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeouts">DataAwsEc2InstanceTypeOfferingsTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.locationType">location_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.filter"></a>

```python
filter: DataAwsEc2InstanceTypeOfferingsFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList">DataAwsEc2InstanceTypeOfferingsFilterList</a>

---

##### `instance_types`<sup>Required</sup> <a name="instance_types" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.instanceTypes"></a>

```python
instance_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.locations"></a>

```python
locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location_types`<sup>Required</sup> <a name="location_types" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.locationTypes"></a>

```python
location_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.timeouts"></a>

```python
timeouts: DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference">DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataAwsEc2InstanceTypeOfferingsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter">DataAwsEc2InstanceTypeOfferingsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_type_input`<sup>Optional</sup> <a name="location_type_input" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.locationTypeInput"></a>

```python
location_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataAwsEc2InstanceTypeOfferingsTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeouts">DataAwsEc2InstanceTypeOfferingsTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location_type`<sup>Required</sup> <a name="location_type" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.locationType"></a>

```python
location_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2InstanceTypeOfferingsConfig <a name="DataAwsEc2InstanceTypeOfferingsConfig" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type_offerings

dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsEc2InstanceTypeOfferingsFilter]] = None,
  id: str = None,
  location_type: str = None,
  timeouts: DataAwsEc2InstanceTypeOfferingsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter">DataAwsEc2InstanceTypeOfferingsFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#id DataAwsEc2InstanceTypeOfferings#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.locationType">location_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#location_type DataAwsEc2InstanceTypeOfferings#location_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeouts">DataAwsEc2InstanceTypeOfferingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataAwsEc2InstanceTypeOfferingsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter">DataAwsEc2InstanceTypeOfferingsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#filter DataAwsEc2InstanceTypeOfferings#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#id DataAwsEc2InstanceTypeOfferings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location_type`<sup>Optional</sup> <a name="location_type" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.locationType"></a>

```python
location_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#location_type DataAwsEc2InstanceTypeOfferings#location_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.timeouts"></a>

```python
timeouts: DataAwsEc2InstanceTypeOfferingsTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeouts">DataAwsEc2InstanceTypeOfferingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#timeouts DataAwsEc2InstanceTypeOfferings#timeouts}

---

### DataAwsEc2InstanceTypeOfferingsFilter <a name="DataAwsEc2InstanceTypeOfferingsFilter" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type_offerings

dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter(
  name: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#name DataAwsEc2InstanceTypeOfferings#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#values DataAwsEc2InstanceTypeOfferings#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#name DataAwsEc2InstanceTypeOfferings#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#values DataAwsEc2InstanceTypeOfferings#values}.

---

### DataAwsEc2InstanceTypeOfferingsTimeouts <a name="DataAwsEc2InstanceTypeOfferingsTimeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type_offerings

dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#read DataAwsEc2InstanceTypeOfferings#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#read DataAwsEc2InstanceTypeOfferings#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2InstanceTypeOfferingsFilterList <a name="DataAwsEc2InstanceTypeOfferingsFilterList" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type_offerings

dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEc2InstanceTypeOfferingsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter">DataAwsEc2InstanceTypeOfferingsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsEc2InstanceTypeOfferingsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter">DataAwsEc2InstanceTypeOfferingsFilter</a>]]

---


### DataAwsEc2InstanceTypeOfferingsFilterOutputReference <a name="DataAwsEc2InstanceTypeOfferingsFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type_offerings

dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter">DataAwsEc2InstanceTypeOfferingsFilter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsEc2InstanceTypeOfferingsFilter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter">DataAwsEc2InstanceTypeOfferingsFilter</a>, cdktf.IResolvable]

---


### DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference <a name="DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type_offerings

dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeouts">DataAwsEc2InstanceTypeOfferingsTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsEc2InstanceTypeOfferingsTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeouts">DataAwsEc2InstanceTypeOfferingsTimeouts</a>, cdktf.IResolvable]

---



