# `vpnGatewayRoutePropagation` Submodule <a name="`vpnGatewayRoutePropagation` Submodule" id="@cdktf/provider-aws.vpnGatewayRoutePropagation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnGatewayRoutePropagation <a name="VpnGatewayRoutePropagation" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation aws_vpn_gateway_route_propagation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpn_gateway_route_propagation

vpnGatewayRoutePropagation.VpnGatewayRoutePropagation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  route_table_id: str,
  vpn_gateway_id: str,
  id: str = None,
  timeouts: VpnGatewayRoutePropagationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.Initializer.parameter.routeTableId">route_table_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation#route_table_id VpnGatewayRoutePropagation#route_table_id}. |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.Initializer.parameter.vpnGatewayId">vpn_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation#vpn_gateway_id VpnGatewayRoutePropagation#vpn_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation#id VpnGatewayRoutePropagation#id}. |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeouts">VpnGatewayRoutePropagationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `route_table_id`<sup>Required</sup> <a name="route_table_id" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.Initializer.parameter.routeTableId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation#route_table_id VpnGatewayRoutePropagation#route_table_id}.

---

##### `vpn_gateway_id`<sup>Required</sup> <a name="vpn_gateway_id" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.Initializer.parameter.vpnGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation#vpn_gateway_id VpnGatewayRoutePropagation#vpn_gateway_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation#id VpnGatewayRoutePropagation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeouts">VpnGatewayRoutePropagationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation#timeouts VpnGatewayRoutePropagation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation#create VpnGatewayRoutePropagation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation#delete VpnGatewayRoutePropagation#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import vpn_gateway_route_propagation

vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import vpn_gateway_route_propagation

vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import vpn_gateway_route_propagation

vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference">VpnGatewayRoutePropagationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.routeTableIdInput">route_table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeouts">VpnGatewayRoutePropagationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.vpnGatewayIdInput">vpn_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.routeTableId">route_table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.vpnGatewayId">vpn_gateway_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.timeouts"></a>

```python
timeouts: VpnGatewayRoutePropagationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference">VpnGatewayRoutePropagationTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `route_table_id_input`<sup>Optional</sup> <a name="route_table_id_input" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.routeTableIdInput"></a>

```python
route_table_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[VpnGatewayRoutePropagationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeouts">VpnGatewayRoutePropagationTimeouts</a>, cdktf.IResolvable]

---

##### `vpn_gateway_id_input`<sup>Optional</sup> <a name="vpn_gateway_id_input" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.vpnGatewayIdInput"></a>

```python
vpn_gateway_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `route_table_id`<sup>Required</sup> <a name="route_table_id" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.routeTableId"></a>

```python
route_table_id: str
```

- *Type:* str

---

##### `vpn_gateway_id`<sup>Required</sup> <a name="vpn_gateway_id" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.vpnGatewayId"></a>

```python
vpn_gateway_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VpnGatewayRoutePropagationConfig <a name="VpnGatewayRoutePropagationConfig" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpn_gateway_route_propagation

vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  route_table_id: str,
  vpn_gateway_id: str,
  id: str = None,
  timeouts: VpnGatewayRoutePropagationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.routeTableId">route_table_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation#route_table_id VpnGatewayRoutePropagation#route_table_id}. |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.vpnGatewayId">vpn_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation#vpn_gateway_id VpnGatewayRoutePropagation#vpn_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation#id VpnGatewayRoutePropagation#id}. |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeouts">VpnGatewayRoutePropagationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `route_table_id`<sup>Required</sup> <a name="route_table_id" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.routeTableId"></a>

```python
route_table_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation#route_table_id VpnGatewayRoutePropagation#route_table_id}.

---

##### `vpn_gateway_id`<sup>Required</sup> <a name="vpn_gateway_id" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.vpnGatewayId"></a>

```python
vpn_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation#vpn_gateway_id VpnGatewayRoutePropagation#vpn_gateway_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation#id VpnGatewayRoutePropagation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationConfig.property.timeouts"></a>

```python
timeouts: VpnGatewayRoutePropagationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeouts">VpnGatewayRoutePropagationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation#timeouts VpnGatewayRoutePropagation#timeouts}

---

### VpnGatewayRoutePropagationTimeouts <a name="VpnGatewayRoutePropagationTimeouts" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpn_gateway_route_propagation

vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation#create VpnGatewayRoutePropagation#create}. |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation#delete VpnGatewayRoutePropagation#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation#create VpnGatewayRoutePropagation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation#delete VpnGatewayRoutePropagation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpnGatewayRoutePropagationTimeoutsOutputReference <a name="VpnGatewayRoutePropagationTimeoutsOutputReference" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpn_gateway_route_propagation

vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeouts">VpnGatewayRoutePropagationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[VpnGatewayRoutePropagationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.vpnGatewayRoutePropagation.VpnGatewayRoutePropagationTimeouts">VpnGatewayRoutePropagationTimeouts</a>, cdktf.IResolvable]

---



