# `dataAwsEc2ClientVpnEndpoint` Submodule <a name="`dataAwsEc2ClientVpnEndpoint` Submodule" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2ClientVpnEndpoint <a name="DataAwsEc2ClientVpnEndpoint" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint aws_ec2_client_vpn_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_client_vpn_endpoint

dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  client_vpn_endpoint_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsEc2ClientVpnEndpointFilter]] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DataAwsEc2ClientVpnEndpointTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.clientVpnEndpointId">client_vpn_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#client_vpn_endpoint_id DataAwsEc2ClientVpnEndpoint#client_vpn_endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter">DataAwsEc2ClientVpnEndpointFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#id DataAwsEc2ClientVpnEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#tags DataAwsEc2ClientVpnEndpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts">DataAwsEc2ClientVpnEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `client_vpn_endpoint_id`<sup>Optional</sup> <a name="client_vpn_endpoint_id" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.clientVpnEndpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#client_vpn_endpoint_id DataAwsEc2ClientVpnEndpoint#client_vpn_endpoint_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter">DataAwsEc2ClientVpnEndpointFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#filter DataAwsEc2ClientVpnEndpoint#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#id DataAwsEc2ClientVpnEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#tags DataAwsEc2ClientVpnEndpoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts">DataAwsEc2ClientVpnEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#timeouts DataAwsEc2ClientVpnEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetClientVpnEndpointId">reset_client_vpn_endpoint_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataAwsEc2ClientVpnEndpointFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter">DataAwsEc2ClientVpnEndpointFilter</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#read DataAwsEc2ClientVpnEndpoint#read}.

---

##### `reset_client_vpn_endpoint_id` <a name="reset_client_vpn_endpoint_id" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetClientVpnEndpointId"></a>

```python
def reset_client_vpn_endpoint_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_client_vpn_endpoint

dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_client_vpn_endpoint

dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_client_vpn_endpoint

dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.authenticationOptions">authentication_options</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList">DataAwsEc2ClientVpnEndpointAuthenticationOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientCidrBlock">client_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientConnectOptions">client_connect_options</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList">DataAwsEc2ClientVpnEndpointClientConnectOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientLoginBannerOptions">client_login_banner_options</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList">DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.connectionLogOptions">connection_log_options</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList">DataAwsEc2ClientVpnEndpointConnectionLogOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.dnsServers">dns_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList">DataAwsEc2ClientVpnEndpointFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.selfServicePortal">self_service_portal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.serverCertificateArn">server_certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.sessionTimeoutHours">session_timeout_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.splitTunnel">split_tunnel</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference">DataAwsEc2ClientVpnEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.transportProtocol">transport_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.vpnPort">vpn_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientVpnEndpointIdInput">client_vpn_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter">DataAwsEc2ClientVpnEndpointFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts">DataAwsEc2ClientVpnEndpointTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientVpnEndpointId">client_vpn_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `authentication_options`<sup>Required</sup> <a name="authentication_options" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.authenticationOptions"></a>

```python
authentication_options: DataAwsEc2ClientVpnEndpointAuthenticationOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList">DataAwsEc2ClientVpnEndpointAuthenticationOptionsList</a>

---

##### `client_cidr_block`<sup>Required</sup> <a name="client_cidr_block" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientCidrBlock"></a>

```python
client_cidr_block: str
```

- *Type:* str

---

##### `client_connect_options`<sup>Required</sup> <a name="client_connect_options" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientConnectOptions"></a>

```python
client_connect_options: DataAwsEc2ClientVpnEndpointClientConnectOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList">DataAwsEc2ClientVpnEndpointClientConnectOptionsList</a>

---

##### `client_login_banner_options`<sup>Required</sup> <a name="client_login_banner_options" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientLoginBannerOptions"></a>

```python
client_login_banner_options: DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList">DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList</a>

---

##### `connection_log_options`<sup>Required</sup> <a name="connection_log_options" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.connectionLogOptions"></a>

```python
connection_log_options: DataAwsEc2ClientVpnEndpointConnectionLogOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList">DataAwsEc2ClientVpnEndpointConnectionLogOptionsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `dns_servers`<sup>Required</sup> <a name="dns_servers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.dnsServers"></a>

```python
dns_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.filter"></a>

```python
filter: DataAwsEc2ClientVpnEndpointFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList">DataAwsEc2ClientVpnEndpointFilterList</a>

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `self_service_portal`<sup>Required</sup> <a name="self_service_portal" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.selfServicePortal"></a>

```python
self_service_portal: str
```

- *Type:* str

---

##### `server_certificate_arn`<sup>Required</sup> <a name="server_certificate_arn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.serverCertificateArn"></a>

```python
server_certificate_arn: str
```

- *Type:* str

---

##### `session_timeout_hours`<sup>Required</sup> <a name="session_timeout_hours" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.sessionTimeoutHours"></a>

```python
session_timeout_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `split_tunnel`<sup>Required</sup> <a name="split_tunnel" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.splitTunnel"></a>

```python
split_tunnel: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.timeouts"></a>

```python
timeouts: DataAwsEc2ClientVpnEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference">DataAwsEc2ClientVpnEndpointTimeoutsOutputReference</a>

---

##### `transport_protocol`<sup>Required</sup> <a name="transport_protocol" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.transportProtocol"></a>

```python
transport_protocol: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `vpn_port`<sup>Required</sup> <a name="vpn_port" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.vpnPort"></a>

```python
vpn_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_vpn_endpoint_id_input`<sup>Optional</sup> <a name="client_vpn_endpoint_id_input" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientVpnEndpointIdInput"></a>

```python
client_vpn_endpoint_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataAwsEc2ClientVpnEndpointFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter">DataAwsEc2ClientVpnEndpointFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataAwsEc2ClientVpnEndpointTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts">DataAwsEc2ClientVpnEndpointTimeouts</a>, cdktf.IResolvable]

---

##### `client_vpn_endpoint_id`<sup>Required</sup> <a name="client_vpn_endpoint_id" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientVpnEndpointId"></a>

```python
client_vpn_endpoint_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2ClientVpnEndpointAuthenticationOptions <a name="DataAwsEc2ClientVpnEndpointAuthenticationOptions" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_client_vpn_endpoint

dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptions()
```


### DataAwsEc2ClientVpnEndpointClientConnectOptions <a name="DataAwsEc2ClientVpnEndpointClientConnectOptions" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_client_vpn_endpoint

dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptions()
```


### DataAwsEc2ClientVpnEndpointClientLoginBannerOptions <a name="DataAwsEc2ClientVpnEndpointClientLoginBannerOptions" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_client_vpn_endpoint

dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptions()
```


### DataAwsEc2ClientVpnEndpointConfig <a name="DataAwsEc2ClientVpnEndpointConfig" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_client_vpn_endpoint

dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  client_vpn_endpoint_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsEc2ClientVpnEndpointFilter]] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DataAwsEc2ClientVpnEndpointTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.clientVpnEndpointId">client_vpn_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#client_vpn_endpoint_id DataAwsEc2ClientVpnEndpoint#client_vpn_endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter">DataAwsEc2ClientVpnEndpointFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#id DataAwsEc2ClientVpnEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#tags DataAwsEc2ClientVpnEndpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts">DataAwsEc2ClientVpnEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `client_vpn_endpoint_id`<sup>Optional</sup> <a name="client_vpn_endpoint_id" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.clientVpnEndpointId"></a>

```python
client_vpn_endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#client_vpn_endpoint_id DataAwsEc2ClientVpnEndpoint#client_vpn_endpoint_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataAwsEc2ClientVpnEndpointFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter">DataAwsEc2ClientVpnEndpointFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#filter DataAwsEc2ClientVpnEndpoint#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#id DataAwsEc2ClientVpnEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#tags DataAwsEc2ClientVpnEndpoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.timeouts"></a>

```python
timeouts: DataAwsEc2ClientVpnEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts">DataAwsEc2ClientVpnEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#timeouts DataAwsEc2ClientVpnEndpoint#timeouts}

---

### DataAwsEc2ClientVpnEndpointConnectionLogOptions <a name="DataAwsEc2ClientVpnEndpointConnectionLogOptions" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_client_vpn_endpoint

dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptions()
```


### DataAwsEc2ClientVpnEndpointFilter <a name="DataAwsEc2ClientVpnEndpointFilter" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_client_vpn_endpoint

dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter(
  name: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#name DataAwsEc2ClientVpnEndpoint#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#values DataAwsEc2ClientVpnEndpoint#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#name DataAwsEc2ClientVpnEndpoint#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#values DataAwsEc2ClientVpnEndpoint#values}.

---

### DataAwsEc2ClientVpnEndpointTimeouts <a name="DataAwsEc2ClientVpnEndpointTimeouts" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_client_vpn_endpoint

dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#read DataAwsEc2ClientVpnEndpoint#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#read DataAwsEc2ClientVpnEndpoint#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2ClientVpnEndpointAuthenticationOptionsList <a name="DataAwsEc2ClientVpnEndpointAuthenticationOptionsList" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_client_vpn_endpoint

dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference <a name="DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_client_vpn_endpoint

dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.activeDirectoryId">active_directory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.rootCertificateChainArn">root_certificate_chain_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.samlProviderArn">saml_provider_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.selfServiceSamlProviderArn">self_service_saml_provider_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptions">DataAwsEc2ClientVpnEndpointAuthenticationOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_directory_id`<sup>Required</sup> <a name="active_directory_id" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.activeDirectoryId"></a>

```python
active_directory_id: str
```

- *Type:* str

---

##### `root_certificate_chain_arn`<sup>Required</sup> <a name="root_certificate_chain_arn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.rootCertificateChainArn"></a>

```python
root_certificate_chain_arn: str
```

- *Type:* str

---

##### `saml_provider_arn`<sup>Required</sup> <a name="saml_provider_arn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.samlProviderArn"></a>

```python
saml_provider_arn: str
```

- *Type:* str

---

##### `self_service_saml_provider_arn`<sup>Required</sup> <a name="self_service_saml_provider_arn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.selfServiceSamlProviderArn"></a>

```python
self_service_saml_provider_arn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsEc2ClientVpnEndpointAuthenticationOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptions">DataAwsEc2ClientVpnEndpointAuthenticationOptions</a>

---


### DataAwsEc2ClientVpnEndpointClientConnectOptionsList <a name="DataAwsEc2ClientVpnEndpointClientConnectOptionsList" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_client_vpn_endpoint

dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference <a name="DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_client_vpn_endpoint

dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.lambdaFunctionArn">lambda_function_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptions">DataAwsEc2ClientVpnEndpointClientConnectOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lambda_function_arn`<sup>Required</sup> <a name="lambda_function_arn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.lambdaFunctionArn"></a>

```python
lambda_function_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsEc2ClientVpnEndpointClientConnectOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptions">DataAwsEc2ClientVpnEndpointClientConnectOptions</a>

---


### DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList <a name="DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_client_vpn_endpoint

dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference <a name="DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_client_vpn_endpoint

dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.bannerText">banner_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptions">DataAwsEc2ClientVpnEndpointClientLoginBannerOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `banner_text`<sup>Required</sup> <a name="banner_text" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.bannerText"></a>

```python
banner_text: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsEc2ClientVpnEndpointClientLoginBannerOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptions">DataAwsEc2ClientVpnEndpointClientLoginBannerOptions</a>

---


### DataAwsEc2ClientVpnEndpointConnectionLogOptionsList <a name="DataAwsEc2ClientVpnEndpointConnectionLogOptionsList" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_client_vpn_endpoint

dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference <a name="DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_client_vpn_endpoint

dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogGroup">cloudwatch_log_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogStream">cloudwatch_log_stream</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptions">DataAwsEc2ClientVpnEndpointConnectionLogOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_log_group`<sup>Required</sup> <a name="cloudwatch_log_group" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogGroup"></a>

```python
cloudwatch_log_group: str
```

- *Type:* str

---

##### `cloudwatch_log_stream`<sup>Required</sup> <a name="cloudwatch_log_stream" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogStream"></a>

```python
cloudwatch_log_stream: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsEc2ClientVpnEndpointConnectionLogOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptions">DataAwsEc2ClientVpnEndpointConnectionLogOptions</a>

---


### DataAwsEc2ClientVpnEndpointFilterList <a name="DataAwsEc2ClientVpnEndpointFilterList" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_client_vpn_endpoint

dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEc2ClientVpnEndpointFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter">DataAwsEc2ClientVpnEndpointFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsEc2ClientVpnEndpointFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter">DataAwsEc2ClientVpnEndpointFilter</a>]]

---


### DataAwsEc2ClientVpnEndpointFilterOutputReference <a name="DataAwsEc2ClientVpnEndpointFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_client_vpn_endpoint

dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter">DataAwsEc2ClientVpnEndpointFilter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsEc2ClientVpnEndpointFilter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter">DataAwsEc2ClientVpnEndpointFilter</a>, cdktf.IResolvable]

---


### DataAwsEc2ClientVpnEndpointTimeoutsOutputReference <a name="DataAwsEc2ClientVpnEndpointTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_client_vpn_endpoint

dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts">DataAwsEc2ClientVpnEndpointTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsEc2ClientVpnEndpointTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts">DataAwsEc2ClientVpnEndpointTimeouts</a>, cdktf.IResolvable]

---



