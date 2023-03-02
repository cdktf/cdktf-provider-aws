# `dataAwsVpcEndpointService` Submodule <a name="`dataAwsVpcEndpointService` Submodule" id="@cdktf/provider-aws.dataAwsVpcEndpointService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsVpcEndpointService <a name="DataAwsVpcEndpointService" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service aws_vpc_endpoint_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_endpoint_service

dataAwsVpcEndpointService.DataAwsVpcEndpointService(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsVpcEndpointServiceFilter]] = None,
  id: str = None,
  service: str = None,
  service_name: str = None,
  service_type: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DataAwsVpcEndpointServiceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter">DataAwsVpcEndpointServiceFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#id DataAwsVpcEndpointService#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.service">service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#service DataAwsVpcEndpointService#service}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#service_name DataAwsVpcEndpointService#service_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.serviceType">service_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#service_type DataAwsVpcEndpointService#service_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#tags DataAwsVpcEndpointService#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeouts">DataAwsVpcEndpointServiceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter">DataAwsVpcEndpointServiceFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#filter DataAwsVpcEndpointService#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#id DataAwsVpcEndpointService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.service"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#service DataAwsVpcEndpointService#service}.

---

##### `service_name`<sup>Optional</sup> <a name="service_name" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.serviceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#service_name DataAwsVpcEndpointService#service_name}.

---

##### `service_type`<sup>Optional</sup> <a name="service_type" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.serviceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#service_type DataAwsVpcEndpointService#service_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#tags DataAwsVpcEndpointService#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeouts">DataAwsVpcEndpointServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#timeouts DataAwsVpcEndpointService#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetService">reset_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetServiceName">reset_service_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetServiceType">reset_service_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataAwsVpcEndpointServiceFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter">DataAwsVpcEndpointServiceFilter</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#read DataAwsVpcEndpointService#read}.

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_service` <a name="reset_service" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetService"></a>

```python
def reset_service() -> None
```

##### `reset_service_name` <a name="reset_service_name" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetServiceName"></a>

```python
def reset_service_name() -> None
```

##### `reset_service_type` <a name="reset_service_type" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetServiceType"></a>

```python
def reset_service_type() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_endpoint_service

dataAwsVpcEndpointService.DataAwsVpcEndpointService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_endpoint_service

dataAwsVpcEndpointService.DataAwsVpcEndpointService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_endpoint_service

dataAwsVpcEndpointService.DataAwsVpcEndpointService.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.acceptanceRequired">acceptance_required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.baseEndpointDnsNames">base_endpoint_dns_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList">DataAwsVpcEndpointServiceFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.managesVpcEndpoints">manages_vpc_endpoints</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.privateDnsName">private_dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceId">service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.supportedIpAddressTypes">supported_ip_address_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference">DataAwsVpcEndpointServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.vpcEndpointPolicySupported">vpc_endpoint_policy_supported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter">DataAwsVpcEndpointServiceFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceTypeInput">service_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeouts">DataAwsVpcEndpointServiceTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceType">service_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `acceptance_required`<sup>Required</sup> <a name="acceptance_required" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.acceptanceRequired"></a>

```python
acceptance_required: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `base_endpoint_dns_names`<sup>Required</sup> <a name="base_endpoint_dns_names" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.baseEndpointDnsNames"></a>

```python
base_endpoint_dns_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.filter"></a>

```python
filter: DataAwsVpcEndpointServiceFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList">DataAwsVpcEndpointServiceFilterList</a>

---

##### `manages_vpc_endpoints`<sup>Required</sup> <a name="manages_vpc_endpoints" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.managesVpcEndpoints"></a>

```python
manages_vpc_endpoints: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `private_dns_name`<sup>Required</sup> <a name="private_dns_name" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.privateDnsName"></a>

```python
private_dns_name: str
```

- *Type:* str

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

---

##### `supported_ip_address_types`<sup>Required</sup> <a name="supported_ip_address_types" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.supportedIpAddressTypes"></a>

```python
supported_ip_address_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.timeouts"></a>

```python
timeouts: DataAwsVpcEndpointServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference">DataAwsVpcEndpointServiceTimeoutsOutputReference</a>

---

##### `vpc_endpoint_policy_supported`<sup>Required</sup> <a name="vpc_endpoint_policy_supported" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.vpcEndpointPolicySupported"></a>

```python
vpc_endpoint_policy_supported: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataAwsVpcEndpointServiceFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter">DataAwsVpcEndpointServiceFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `service_type_input`<sup>Optional</sup> <a name="service_type_input" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceTypeInput"></a>

```python
service_type_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataAwsVpcEndpointServiceTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeouts">DataAwsVpcEndpointServiceTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `service_type`<sup>Required</sup> <a name="service_type" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsVpcEndpointServiceConfig <a name="DataAwsVpcEndpointServiceConfig" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_endpoint_service

dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsVpcEndpointServiceFilter]] = None,
  id: str = None,
  service: str = None,
  service_name: str = None,
  service_type: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DataAwsVpcEndpointServiceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter">DataAwsVpcEndpointServiceFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#id DataAwsVpcEndpointService#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.service">service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#service DataAwsVpcEndpointService#service}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#service_name DataAwsVpcEndpointService#service_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.serviceType">service_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#service_type DataAwsVpcEndpointService#service_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#tags DataAwsVpcEndpointService#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeouts">DataAwsVpcEndpointServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataAwsVpcEndpointServiceFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter">DataAwsVpcEndpointServiceFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#filter DataAwsVpcEndpointService#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#id DataAwsVpcEndpointService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.service"></a>

```python
service: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#service DataAwsVpcEndpointService#service}.

---

##### `service_name`<sup>Optional</sup> <a name="service_name" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#service_name DataAwsVpcEndpointService#service_name}.

---

##### `service_type`<sup>Optional</sup> <a name="service_type" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#service_type DataAwsVpcEndpointService#service_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#tags DataAwsVpcEndpointService#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.timeouts"></a>

```python
timeouts: DataAwsVpcEndpointServiceTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeouts">DataAwsVpcEndpointServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#timeouts DataAwsVpcEndpointService#timeouts}

---

### DataAwsVpcEndpointServiceFilter <a name="DataAwsVpcEndpointServiceFilter" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_endpoint_service

dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter(
  name: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#name DataAwsVpcEndpointService#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#values DataAwsVpcEndpointService#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#name DataAwsVpcEndpointService#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#values DataAwsVpcEndpointService#values}.

---

### DataAwsVpcEndpointServiceTimeouts <a name="DataAwsVpcEndpointServiceTimeouts" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_endpoint_service

dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#read DataAwsVpcEndpointService#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service#read DataAwsVpcEndpointService#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsVpcEndpointServiceFilterList <a name="DataAwsVpcEndpointServiceFilterList" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_endpoint_service

dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsVpcEndpointServiceFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter">DataAwsVpcEndpointServiceFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsVpcEndpointServiceFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter">DataAwsVpcEndpointServiceFilter</a>]]

---


### DataAwsVpcEndpointServiceFilterOutputReference <a name="DataAwsVpcEndpointServiceFilterOutputReference" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_endpoint_service

dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter">DataAwsVpcEndpointServiceFilter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsVpcEndpointServiceFilter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter">DataAwsVpcEndpointServiceFilter</a>, cdktf.IResolvable]

---


### DataAwsVpcEndpointServiceTimeoutsOutputReference <a name="DataAwsVpcEndpointServiceTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_endpoint_service

dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeouts">DataAwsVpcEndpointServiceTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsVpcEndpointServiceTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeouts">DataAwsVpcEndpointServiceTimeouts</a>, cdktf.IResolvable]

---



