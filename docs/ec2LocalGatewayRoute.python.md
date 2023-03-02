# `ec2LocalGatewayRoute` Submodule <a name="`ec2LocalGatewayRoute` Submodule" id="@cdktf/provider-aws.ec2LocalGatewayRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2LocalGatewayRoute <a name="Ec2LocalGatewayRoute" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route aws_ec2_local_gateway_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_local_gateway_route

ec2LocalGatewayRoute.Ec2LocalGatewayRoute(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination_cidr_block: str,
  local_gateway_route_table_id: str,
  local_gateway_virtual_interface_group_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.Initializer.parameter.destinationCidrBlock">destination_cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route#destination_cidr_block Ec2LocalGatewayRoute#destination_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.Initializer.parameter.localGatewayRouteTableId">local_gateway_route_table_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route#local_gateway_route_table_id Ec2LocalGatewayRoute#local_gateway_route_table_id}. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.Initializer.parameter.localGatewayVirtualInterfaceGroupId">local_gateway_virtual_interface_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route#local_gateway_virtual_interface_group_id Ec2LocalGatewayRoute#local_gateway_virtual_interface_group_id}. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route#id Ec2LocalGatewayRoute#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_cidr_block`<sup>Required</sup> <a name="destination_cidr_block" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.Initializer.parameter.destinationCidrBlock"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route#destination_cidr_block Ec2LocalGatewayRoute#destination_cidr_block}.

---

##### `local_gateway_route_table_id`<sup>Required</sup> <a name="local_gateway_route_table_id" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.Initializer.parameter.localGatewayRouteTableId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route#local_gateway_route_table_id Ec2LocalGatewayRoute#local_gateway_route_table_id}.

---

##### `local_gateway_virtual_interface_group_id`<sup>Required</sup> <a name="local_gateway_virtual_interface_group_id" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.Initializer.parameter.localGatewayVirtualInterfaceGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route#local_gateway_virtual_interface_group_id Ec2LocalGatewayRoute#local_gateway_virtual_interface_group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route#id Ec2LocalGatewayRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ec2_local_gateway_route

ec2LocalGatewayRoute.Ec2LocalGatewayRoute.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ec2_local_gateway_route

ec2LocalGatewayRoute.Ec2LocalGatewayRoute.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ec2_local_gateway_route

ec2LocalGatewayRoute.Ec2LocalGatewayRoute.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.destinationCidrBlockInput">destination_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.localGatewayRouteTableIdInput">local_gateway_route_table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.localGatewayVirtualInterfaceGroupIdInput">local_gateway_virtual_interface_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.destinationCidrBlock">destination_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.localGatewayRouteTableId">local_gateway_route_table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.localGatewayVirtualInterfaceGroupId">local_gateway_virtual_interface_group_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_cidr_block_input`<sup>Optional</sup> <a name="destination_cidr_block_input" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.destinationCidrBlockInput"></a>

```python
destination_cidr_block_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `local_gateway_route_table_id_input`<sup>Optional</sup> <a name="local_gateway_route_table_id_input" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.localGatewayRouteTableIdInput"></a>

```python
local_gateway_route_table_id_input: str
```

- *Type:* str

---

##### `local_gateway_virtual_interface_group_id_input`<sup>Optional</sup> <a name="local_gateway_virtual_interface_group_id_input" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.localGatewayVirtualInterfaceGroupIdInput"></a>

```python
local_gateway_virtual_interface_group_id_input: str
```

- *Type:* str

---

##### `destination_cidr_block`<sup>Required</sup> <a name="destination_cidr_block" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.destinationCidrBlock"></a>

```python
destination_cidr_block: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `local_gateway_route_table_id`<sup>Required</sup> <a name="local_gateway_route_table_id" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.localGatewayRouteTableId"></a>

```python
local_gateway_route_table_id: str
```

- *Type:* str

---

##### `local_gateway_virtual_interface_group_id`<sup>Required</sup> <a name="local_gateway_virtual_interface_group_id" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.localGatewayVirtualInterfaceGroupId"></a>

```python
local_gateway_virtual_interface_group_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRoute.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2LocalGatewayRouteConfig <a name="Ec2LocalGatewayRouteConfig" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRouteConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_local_gateway_route

ec2LocalGatewayRoute.Ec2LocalGatewayRouteConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination_cidr_block: str,
  local_gateway_route_table_id: str,
  local_gateway_virtual_interface_group_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRouteConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRouteConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRouteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRouteConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRouteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRouteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRouteConfig.property.destinationCidrBlock">destination_cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route#destination_cidr_block Ec2LocalGatewayRoute#destination_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRouteConfig.property.localGatewayRouteTableId">local_gateway_route_table_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route#local_gateway_route_table_id Ec2LocalGatewayRoute#local_gateway_route_table_id}. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRouteConfig.property.localGatewayVirtualInterfaceGroupId">local_gateway_virtual_interface_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route#local_gateway_virtual_interface_group_id Ec2LocalGatewayRoute#local_gateway_virtual_interface_group_id}. |
| <code><a href="#@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRouteConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route#id Ec2LocalGatewayRoute#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRouteConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRouteConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRouteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRouteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRouteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRouteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRouteConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_cidr_block`<sup>Required</sup> <a name="destination_cidr_block" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRouteConfig.property.destinationCidrBlock"></a>

```python
destination_cidr_block: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route#destination_cidr_block Ec2LocalGatewayRoute#destination_cidr_block}.

---

##### `local_gateway_route_table_id`<sup>Required</sup> <a name="local_gateway_route_table_id" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRouteConfig.property.localGatewayRouteTableId"></a>

```python
local_gateway_route_table_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route#local_gateway_route_table_id Ec2LocalGatewayRoute#local_gateway_route_table_id}.

---

##### `local_gateway_virtual_interface_group_id`<sup>Required</sup> <a name="local_gateway_virtual_interface_group_id" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRouteConfig.property.localGatewayVirtualInterfaceGroupId"></a>

```python
local_gateway_virtual_interface_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route#local_gateway_virtual_interface_group_id Ec2LocalGatewayRoute#local_gateway_virtual_interface_group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2LocalGatewayRoute.Ec2LocalGatewayRouteConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route#id Ec2LocalGatewayRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



