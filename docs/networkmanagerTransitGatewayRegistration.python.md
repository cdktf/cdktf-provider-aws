# `networkmanagerTransitGatewayRegistration` Submodule <a name="`networkmanagerTransitGatewayRegistration` Submodule" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerTransitGatewayRegistration <a name="NetworkmanagerTransitGatewayRegistration" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_registration aws_networkmanager_transit_gateway_registration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_transit_gateway_registration

networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  global_network_id: str,
  transit_gateway_arn: str,
  id: str = None,
  timeouts: NetworkmanagerTransitGatewayRegistrationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.globalNetworkId">global_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_registration#global_network_id NetworkmanagerTransitGatewayRegistration#global_network_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.transitGatewayArn">transit_gateway_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_registration#transit_gateway_arn NetworkmanagerTransitGatewayRegistration#transit_gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_registration#id NetworkmanagerTransitGatewayRegistration#id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts">NetworkmanagerTransitGatewayRegistrationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `global_network_id`<sup>Required</sup> <a name="global_network_id" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.globalNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_registration#global_network_id NetworkmanagerTransitGatewayRegistration#global_network_id}.

---

##### `transit_gateway_arn`<sup>Required</sup> <a name="transit_gateway_arn" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.transitGatewayArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_registration#transit_gateway_arn NetworkmanagerTransitGatewayRegistration#transit_gateway_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_registration#id NetworkmanagerTransitGatewayRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts">NetworkmanagerTransitGatewayRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_registration#timeouts NetworkmanagerTransitGatewayRegistration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_registration#create NetworkmanagerTransitGatewayRegistration#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_registration#delete NetworkmanagerTransitGatewayRegistration#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_transit_gateway_registration

networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_transit_gateway_registration

networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_transit_gateway_registration

networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference">NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.globalNetworkIdInput">global_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts">NetworkmanagerTransitGatewayRegistrationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.transitGatewayArnInput">transit_gateway_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.globalNetworkId">global_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.transitGatewayArn">transit_gateway_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.timeouts"></a>

```python
timeouts: NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference">NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference</a>

---

##### `global_network_id_input`<sup>Optional</sup> <a name="global_network_id_input" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.globalNetworkIdInput"></a>

```python
global_network_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[NetworkmanagerTransitGatewayRegistrationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts">NetworkmanagerTransitGatewayRegistrationTimeouts</a>, cdktf.IResolvable]

---

##### `transit_gateway_arn_input`<sup>Optional</sup> <a name="transit_gateway_arn_input" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.transitGatewayArnInput"></a>

```python
transit_gateway_arn_input: str
```

- *Type:* str

---

##### `global_network_id`<sup>Required</sup> <a name="global_network_id" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.globalNetworkId"></a>

```python
global_network_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `transit_gateway_arn`<sup>Required</sup> <a name="transit_gateway_arn" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.transitGatewayArn"></a>

```python
transit_gateway_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerTransitGatewayRegistrationConfig <a name="NetworkmanagerTransitGatewayRegistrationConfig" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_transit_gateway_registration

networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  global_network_id: str,
  transit_gateway_arn: str,
  id: str = None,
  timeouts: NetworkmanagerTransitGatewayRegistrationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.globalNetworkId">global_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_registration#global_network_id NetworkmanagerTransitGatewayRegistration#global_network_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.transitGatewayArn">transit_gateway_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_registration#transit_gateway_arn NetworkmanagerTransitGatewayRegistration#transit_gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_registration#id NetworkmanagerTransitGatewayRegistration#id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts">NetworkmanagerTransitGatewayRegistrationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `global_network_id`<sup>Required</sup> <a name="global_network_id" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.globalNetworkId"></a>

```python
global_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_registration#global_network_id NetworkmanagerTransitGatewayRegistration#global_network_id}.

---

##### `transit_gateway_arn`<sup>Required</sup> <a name="transit_gateway_arn" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.transitGatewayArn"></a>

```python
transit_gateway_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_registration#transit_gateway_arn NetworkmanagerTransitGatewayRegistration#transit_gateway_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_registration#id NetworkmanagerTransitGatewayRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationConfig.property.timeouts"></a>

```python
timeouts: NetworkmanagerTransitGatewayRegistrationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts">NetworkmanagerTransitGatewayRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_registration#timeouts NetworkmanagerTransitGatewayRegistration#timeouts}

---

### NetworkmanagerTransitGatewayRegistrationTimeouts <a name="NetworkmanagerTransitGatewayRegistrationTimeouts" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_transit_gateway_registration

networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_registration#create NetworkmanagerTransitGatewayRegistration#create}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_registration#delete NetworkmanagerTransitGatewayRegistration#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_registration#create NetworkmanagerTransitGatewayRegistration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_registration#delete NetworkmanagerTransitGatewayRegistration#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference <a name="NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_transit_gateway_registration

networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts">NetworkmanagerTransitGatewayRegistrationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[NetworkmanagerTransitGatewayRegistrationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRegistration.NetworkmanagerTransitGatewayRegistrationTimeouts">NetworkmanagerTransitGatewayRegistrationTimeouts</a>, cdktf.IResolvable]

---



