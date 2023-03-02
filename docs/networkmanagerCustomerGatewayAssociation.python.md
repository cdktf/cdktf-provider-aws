# `networkmanagerCustomerGatewayAssociation` Submodule <a name="`networkmanagerCustomerGatewayAssociation` Submodule" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerCustomerGatewayAssociation <a name="NetworkmanagerCustomerGatewayAssociation" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association aws_networkmanager_customer_gateway_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_customer_gateway_association

networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  customer_gateway_arn: str,
  device_id: str,
  global_network_id: str,
  id: str = None,
  link_id: str = None,
  timeouts: NetworkmanagerCustomerGatewayAssociationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.customerGatewayArn">customer_gateway_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#customer_gateway_arn NetworkmanagerCustomerGatewayAssociation#customer_gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.deviceId">device_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#device_id NetworkmanagerCustomerGatewayAssociation#device_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.globalNetworkId">global_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#global_network_id NetworkmanagerCustomerGatewayAssociation#global_network_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#id NetworkmanagerCustomerGatewayAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.linkId">link_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#link_id NetworkmanagerCustomerGatewayAssociation#link_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts">NetworkmanagerCustomerGatewayAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `customer_gateway_arn`<sup>Required</sup> <a name="customer_gateway_arn" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.customerGatewayArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#customer_gateway_arn NetworkmanagerCustomerGatewayAssociation#customer_gateway_arn}.

---

##### `device_id`<sup>Required</sup> <a name="device_id" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.deviceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#device_id NetworkmanagerCustomerGatewayAssociation#device_id}.

---

##### `global_network_id`<sup>Required</sup> <a name="global_network_id" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.globalNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#global_network_id NetworkmanagerCustomerGatewayAssociation#global_network_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#id NetworkmanagerCustomerGatewayAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `link_id`<sup>Optional</sup> <a name="link_id" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.linkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#link_id NetworkmanagerCustomerGatewayAssociation#link_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts">NetworkmanagerCustomerGatewayAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#timeouts NetworkmanagerCustomerGatewayAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.resetLinkId">reset_link_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#create NetworkmanagerCustomerGatewayAssociation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#delete NetworkmanagerCustomerGatewayAssociation#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_link_id` <a name="reset_link_id" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.resetLinkId"></a>

```python
def reset_link_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_customer_gateway_association

networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_customer_gateway_association

networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_customer_gateway_association

networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference">NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.customerGatewayArnInput">customer_gateway_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.deviceIdInput">device_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.globalNetworkIdInput">global_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.linkIdInput">link_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts">NetworkmanagerCustomerGatewayAssociationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.customerGatewayArn">customer_gateway_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.deviceId">device_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.globalNetworkId">global_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.linkId">link_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.timeouts"></a>

```python
timeouts: NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference">NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference</a>

---

##### `customer_gateway_arn_input`<sup>Optional</sup> <a name="customer_gateway_arn_input" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.customerGatewayArnInput"></a>

```python
customer_gateway_arn_input: str
```

- *Type:* str

---

##### `device_id_input`<sup>Optional</sup> <a name="device_id_input" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.deviceIdInput"></a>

```python
device_id_input: str
```

- *Type:* str

---

##### `global_network_id_input`<sup>Optional</sup> <a name="global_network_id_input" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.globalNetworkIdInput"></a>

```python
global_network_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `link_id_input`<sup>Optional</sup> <a name="link_id_input" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.linkIdInput"></a>

```python
link_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[NetworkmanagerCustomerGatewayAssociationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts">NetworkmanagerCustomerGatewayAssociationTimeouts</a>, cdktf.IResolvable]

---

##### `customer_gateway_arn`<sup>Required</sup> <a name="customer_gateway_arn" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.customerGatewayArn"></a>

```python
customer_gateway_arn: str
```

- *Type:* str

---

##### `device_id`<sup>Required</sup> <a name="device_id" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.deviceId"></a>

```python
device_id: str
```

- *Type:* str

---

##### `global_network_id`<sup>Required</sup> <a name="global_network_id" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.globalNetworkId"></a>

```python
global_network_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `link_id`<sup>Required</sup> <a name="link_id" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.linkId"></a>

```python
link_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerCustomerGatewayAssociationConfig <a name="NetworkmanagerCustomerGatewayAssociationConfig" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_customer_gateway_association

networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  customer_gateway_arn: str,
  device_id: str,
  global_network_id: str,
  id: str = None,
  link_id: str = None,
  timeouts: NetworkmanagerCustomerGatewayAssociationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.customerGatewayArn">customer_gateway_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#customer_gateway_arn NetworkmanagerCustomerGatewayAssociation#customer_gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.deviceId">device_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#device_id NetworkmanagerCustomerGatewayAssociation#device_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.globalNetworkId">global_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#global_network_id NetworkmanagerCustomerGatewayAssociation#global_network_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#id NetworkmanagerCustomerGatewayAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.linkId">link_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#link_id NetworkmanagerCustomerGatewayAssociation#link_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts">NetworkmanagerCustomerGatewayAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `customer_gateway_arn`<sup>Required</sup> <a name="customer_gateway_arn" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.customerGatewayArn"></a>

```python
customer_gateway_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#customer_gateway_arn NetworkmanagerCustomerGatewayAssociation#customer_gateway_arn}.

---

##### `device_id`<sup>Required</sup> <a name="device_id" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.deviceId"></a>

```python
device_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#device_id NetworkmanagerCustomerGatewayAssociation#device_id}.

---

##### `global_network_id`<sup>Required</sup> <a name="global_network_id" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.globalNetworkId"></a>

```python
global_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#global_network_id NetworkmanagerCustomerGatewayAssociation#global_network_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#id NetworkmanagerCustomerGatewayAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `link_id`<sup>Optional</sup> <a name="link_id" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.linkId"></a>

```python
link_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#link_id NetworkmanagerCustomerGatewayAssociation#link_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.timeouts"></a>

```python
timeouts: NetworkmanagerCustomerGatewayAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts">NetworkmanagerCustomerGatewayAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#timeouts NetworkmanagerCustomerGatewayAssociation#timeouts}

---

### NetworkmanagerCustomerGatewayAssociationTimeouts <a name="NetworkmanagerCustomerGatewayAssociationTimeouts" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_customer_gateway_association

networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#create NetworkmanagerCustomerGatewayAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#delete NetworkmanagerCustomerGatewayAssociation#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#create NetworkmanagerCustomerGatewayAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_customer_gateway_association#delete NetworkmanagerCustomerGatewayAssociation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference <a name="NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_customer_gateway_association

networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts">NetworkmanagerCustomerGatewayAssociationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[NetworkmanagerCustomerGatewayAssociationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts">NetworkmanagerCustomerGatewayAssociationTimeouts</a>, cdktf.IResolvable]

---



