# `dataAwsEc2TransitGatewayMulticastDomain` Submodule <a name="`dataAwsEc2TransitGatewayMulticastDomain` Submodule" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2TransitGatewayMulticastDomain <a name="DataAwsEc2TransitGatewayMulticastDomain" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain aws_ec2_transit_gateway_multicast_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_multicast_domain

dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsEc2TransitGatewayMulticastDomainFilter]] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DataAwsEc2TransitGatewayMulticastDomainTimeouts = None,
  transit_gateway_multicast_domain_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter">DataAwsEc2TransitGatewayMulticastDomainFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#id DataAwsEc2TransitGatewayMulticastDomain#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#tags DataAwsEc2TransitGatewayMulticastDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeouts">DataAwsEc2TransitGatewayMulticastDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.transitGatewayMulticastDomainId">transit_gateway_multicast_domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#transit_gateway_multicast_domain_id DataAwsEc2TransitGatewayMulticastDomain#transit_gateway_multicast_domain_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter">DataAwsEc2TransitGatewayMulticastDomainFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#filter DataAwsEc2TransitGatewayMulticastDomain#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#id DataAwsEc2TransitGatewayMulticastDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#tags DataAwsEc2TransitGatewayMulticastDomain#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeouts">DataAwsEc2TransitGatewayMulticastDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#timeouts DataAwsEc2TransitGatewayMulticastDomain#timeouts}

---

##### `transit_gateway_multicast_domain_id`<sup>Optional</sup> <a name="transit_gateway_multicast_domain_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.transitGatewayMulticastDomainId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#transit_gateway_multicast_domain_id DataAwsEc2TransitGatewayMulticastDomain#transit_gateway_multicast_domain_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.resetTransitGatewayMulticastDomainId">reset_transit_gateway_multicast_domain_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataAwsEc2TransitGatewayMulticastDomainFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter">DataAwsEc2TransitGatewayMulticastDomainFilter</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#read DataAwsEc2TransitGatewayMulticastDomain#read}.

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_transit_gateway_multicast_domain_id` <a name="reset_transit_gateway_multicast_domain_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.resetTransitGatewayMulticastDomainId"></a>

```python
def reset_transit_gateway_multicast_domain_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_multicast_domain

dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_multicast_domain

dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_multicast_domain

dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.associations">associations</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList">DataAwsEc2TransitGatewayMulticastDomainAssociationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.autoAcceptSharedAssociations">auto_accept_shared_associations</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList">DataAwsEc2TransitGatewayMulticastDomainFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.igmpv2Support">igmpv2_support</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.members">members</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList">DataAwsEc2TransitGatewayMulticastDomainMembersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.sources">sources</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList">DataAwsEc2TransitGatewayMulticastDomainSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.staticSourcesSupport">static_sources_support</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference">DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.transitGatewayAttachmentId">transit_gateway_attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter">DataAwsEc2TransitGatewayMulticastDomainFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeouts">DataAwsEc2TransitGatewayMulticastDomainTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.transitGatewayMulticastDomainIdInput">transit_gateway_multicast_domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.transitGatewayMulticastDomainId">transit_gateway_multicast_domain_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `associations`<sup>Required</sup> <a name="associations" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.associations"></a>

```python
associations: DataAwsEc2TransitGatewayMulticastDomainAssociationsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList">DataAwsEc2TransitGatewayMulticastDomainAssociationsList</a>

---

##### `auto_accept_shared_associations`<sup>Required</sup> <a name="auto_accept_shared_associations" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.autoAcceptSharedAssociations"></a>

```python
auto_accept_shared_associations: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.filter"></a>

```python
filter: DataAwsEc2TransitGatewayMulticastDomainFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList">DataAwsEc2TransitGatewayMulticastDomainFilterList</a>

---

##### `igmpv2_support`<sup>Required</sup> <a name="igmpv2_support" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.igmpv2Support"></a>

```python
igmpv2_support: str
```

- *Type:* str

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.members"></a>

```python
members: DataAwsEc2TransitGatewayMulticastDomainMembersList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList">DataAwsEc2TransitGatewayMulticastDomainMembersList</a>

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.sources"></a>

```python
sources: DataAwsEc2TransitGatewayMulticastDomainSourcesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList">DataAwsEc2TransitGatewayMulticastDomainSourcesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `static_sources_support`<sup>Required</sup> <a name="static_sources_support" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.staticSourcesSupport"></a>

```python
static_sources_support: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.timeouts"></a>

```python
timeouts: DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference">DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference</a>

---

##### `transit_gateway_attachment_id`<sup>Required</sup> <a name="transit_gateway_attachment_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.transitGatewayAttachmentId"></a>

```python
transit_gateway_attachment_id: str
```

- *Type:* str

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataAwsEc2TransitGatewayMulticastDomainFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter">DataAwsEc2TransitGatewayMulticastDomainFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataAwsEc2TransitGatewayMulticastDomainTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeouts">DataAwsEc2TransitGatewayMulticastDomainTimeouts</a>, cdktf.IResolvable]

---

##### `transit_gateway_multicast_domain_id_input`<sup>Optional</sup> <a name="transit_gateway_multicast_domain_id_input" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.transitGatewayMulticastDomainIdInput"></a>

```python
transit_gateway_multicast_domain_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `transit_gateway_multicast_domain_id`<sup>Required</sup> <a name="transit_gateway_multicast_domain_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.transitGatewayMulticastDomainId"></a>

```python
transit_gateway_multicast_domain_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2TransitGatewayMulticastDomainAssociations <a name="DataAwsEc2TransitGatewayMulticastDomainAssociations" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociations.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_multicast_domain

dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociations()
```


### DataAwsEc2TransitGatewayMulticastDomainConfig <a name="DataAwsEc2TransitGatewayMulticastDomainConfig" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_multicast_domain

dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsEc2TransitGatewayMulticastDomainFilter]] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DataAwsEc2TransitGatewayMulticastDomainTimeouts = None,
  transit_gateway_multicast_domain_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter">DataAwsEc2TransitGatewayMulticastDomainFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#id DataAwsEc2TransitGatewayMulticastDomain#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#tags DataAwsEc2TransitGatewayMulticastDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeouts">DataAwsEc2TransitGatewayMulticastDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.transitGatewayMulticastDomainId">transit_gateway_multicast_domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#transit_gateway_multicast_domain_id DataAwsEc2TransitGatewayMulticastDomain#transit_gateway_multicast_domain_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataAwsEc2TransitGatewayMulticastDomainFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter">DataAwsEc2TransitGatewayMulticastDomainFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#filter DataAwsEc2TransitGatewayMulticastDomain#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#id DataAwsEc2TransitGatewayMulticastDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#tags DataAwsEc2TransitGatewayMulticastDomain#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.timeouts"></a>

```python
timeouts: DataAwsEc2TransitGatewayMulticastDomainTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeouts">DataAwsEc2TransitGatewayMulticastDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#timeouts DataAwsEc2TransitGatewayMulticastDomain#timeouts}

---

##### `transit_gateway_multicast_domain_id`<sup>Optional</sup> <a name="transit_gateway_multicast_domain_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.transitGatewayMulticastDomainId"></a>

```python
transit_gateway_multicast_domain_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#transit_gateway_multicast_domain_id DataAwsEc2TransitGatewayMulticastDomain#transit_gateway_multicast_domain_id}.

---

### DataAwsEc2TransitGatewayMulticastDomainFilter <a name="DataAwsEc2TransitGatewayMulticastDomainFilter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_multicast_domain

dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter(
  name: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#name DataAwsEc2TransitGatewayMulticastDomain#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#values DataAwsEc2TransitGatewayMulticastDomain#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#name DataAwsEc2TransitGatewayMulticastDomain#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#values DataAwsEc2TransitGatewayMulticastDomain#values}.

---

### DataAwsEc2TransitGatewayMulticastDomainMembers <a name="DataAwsEc2TransitGatewayMulticastDomainMembers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembers.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_multicast_domain

dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembers()
```


### DataAwsEc2TransitGatewayMulticastDomainSources <a name="DataAwsEc2TransitGatewayMulticastDomainSources" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSources.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_multicast_domain

dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSources()
```


### DataAwsEc2TransitGatewayMulticastDomainTimeouts <a name="DataAwsEc2TransitGatewayMulticastDomainTimeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_multicast_domain

dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#read DataAwsEc2TransitGatewayMulticastDomain#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#read DataAwsEc2TransitGatewayMulticastDomain#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2TransitGatewayMulticastDomainAssociationsList <a name="DataAwsEc2TransitGatewayMulticastDomainAssociationsList" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_multicast_domain

dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference <a name="DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_multicast_domain

dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.property.transitGatewayAttachmentId">transit_gateway_attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociations">DataAwsEc2TransitGatewayMulticastDomainAssociations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `transit_gateway_attachment_id`<sup>Required</sup> <a name="transit_gateway_attachment_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.property.transitGatewayAttachmentId"></a>

```python
transit_gateway_attachment_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsEc2TransitGatewayMulticastDomainAssociations
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociations">DataAwsEc2TransitGatewayMulticastDomainAssociations</a>

---


### DataAwsEc2TransitGatewayMulticastDomainFilterList <a name="DataAwsEc2TransitGatewayMulticastDomainFilterList" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_multicast_domain

dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter">DataAwsEc2TransitGatewayMulticastDomainFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsEc2TransitGatewayMulticastDomainFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter">DataAwsEc2TransitGatewayMulticastDomainFilter</a>]]

---


### DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference <a name="DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_multicast_domain

dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter">DataAwsEc2TransitGatewayMulticastDomainFilter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsEc2TransitGatewayMulticastDomainFilter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter">DataAwsEc2TransitGatewayMulticastDomainFilter</a>, cdktf.IResolvable]

---


### DataAwsEc2TransitGatewayMulticastDomainMembersList <a name="DataAwsEc2TransitGatewayMulticastDomainMembersList" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_multicast_domain

dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference <a name="DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_multicast_domain

dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.property.groupIpAddress">group_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembers">DataAwsEc2TransitGatewayMulticastDomainMembers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_ip_address`<sup>Required</sup> <a name="group_ip_address" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.property.groupIpAddress"></a>

```python
group_ip_address: str
```

- *Type:* str

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsEc2TransitGatewayMulticastDomainMembers
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembers">DataAwsEc2TransitGatewayMulticastDomainMembers</a>

---


### DataAwsEc2TransitGatewayMulticastDomainSourcesList <a name="DataAwsEc2TransitGatewayMulticastDomainSourcesList" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_multicast_domain

dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference <a name="DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_multicast_domain

dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.property.groupIpAddress">group_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSources">DataAwsEc2TransitGatewayMulticastDomainSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_ip_address`<sup>Required</sup> <a name="group_ip_address" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.property.groupIpAddress"></a>

```python
group_ip_address: str
```

- *Type:* str

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsEc2TransitGatewayMulticastDomainSources
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSources">DataAwsEc2TransitGatewayMulticastDomainSources</a>

---


### DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference <a name="DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_multicast_domain

dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeouts">DataAwsEc2TransitGatewayMulticastDomainTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsEc2TransitGatewayMulticastDomainTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeouts">DataAwsEc2TransitGatewayMulticastDomainTimeouts</a>, cdktf.IResolvable]

---



